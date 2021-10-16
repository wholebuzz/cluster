import { GetItemLabel, ItemLabel, LabeledDataset } from '@wholebuzz/search/lib/types'

export const merge = require('@wholebuzz/binary-merge')
export const intersect = require('@wholebuzz/binary-merge/intersect')
export const overlaps = require('@wholebuzz/binary-merge/overlaps')

export type ClusterId = number
export type Cluster<Item> = Item[]
export type Clusters<Item> = Array<Cluster<Item>>
export type ItemClustering = Record<ItemLabel, ClusterId>
export type ItemGraph<Item> = Record<ItemLabel, Set<Item>>

/**
 * Splits [LabeledDataset] items into [Clusters] according to clustering.
 */
export function clustersFromLabels<Item>(
  data: LabeledDataset<Item>,
  clustering: ItemClustering,
  itemFilter?: (item: Item) => Item | null
): Clusters<Item> {
  const numClusters = Math.max.apply(null, Object.values(clustering))
  const clusters: Clusters<Item> = Array(numClusters)
  for (const item of data.items) {
    const clusterIndex = clustering[data.getItemLabel(item)] - 1
    if (clusterIndex < 0) continue
    if (!clusters[clusterIndex]) clusters[clusterIndex] = []
    const addItem = itemFilter ? itemFilter(item) : item
    if (addItem) clusters[clusterIndex].push(addItem)
  }
  return clusters
}

/**
 * Builds an ItemLabel to ClusterId map from existing Clusters.
 */
export function labelsFromClusters<Item>(
  clusters: Clusters<Item>,
  getItemLabel: GetItemLabel<Item>
): ItemClustering {
  const label: ItemClustering = {}
  for (let i = 0; i < clusters.length; i++) {
    if (clusters[i]) clusters[i].forEach((x) => (label[getItemLabel(x)] = i + 1))
  }
  return label
}

/**
 * Density-based spatial clustering of applications with noise.
 * References: [[1](https://en.wikipedia.org/wiki/DBSCAN)]
 * @param graph Mapping of ItemLabel to nearest neighbor Items.
 * @optional minPoints Minimum number of points to form cluster.
 * @returns label Mapping of ItemLabel to ClusterId.
 */
export function dbscan<Item>(
  graph: ItemGraph<Item>,
  getItemLabel: GetItemLabel<Item>,
  minPoints = 2
): ItemClustering {
  const label: ItemClustering = {}
  const Noise = -1
  let clusters = 0

  // Changing the order doesn't seem to impact the clustering much.
  // const graphKeys = shuffle(Object.keys(graph))
  // const graphKeys = Object.entries(graph).sort((a, b) => b[1].size - a[1].size).map(x => x[0])
  for (const P of Object.keys(graph)) {
    if (label[P]) continue

    const Pn = graph[P]
    if (Pn.size < minPoints) {
      label[P] = Noise
      continue
    }

    const queue = Array.from(Pn)
    const C = ++clusters
    label[P] = C

    // tslint:disable-next-line
    for (let i = 0; i < queue.length; i++) {
      const Q = getItemLabel(queue[i])
      if (label[Q] === Noise) label[Q] = C
      if (label[Q]) continue
      label[Q] = C
      const Qn = graph[Q]
      if (Qn.size >= minPoints) queue.push(...Array.from(Qn))
    }
  }
  return label
}

export function dbclumscan<Item>(
  graph: ItemGraph<Item>,
  getItemLabel: GetItemLabel<Item>,
  minPoints = 2
): ItemClustering {
  return dbclum(
    graph,
    getItemLabel,
    () => true,
    () => true,
    minPoints
  )
}

/**
 * DBCLUM: Density-based Clustering
 * References: [[1](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.402.6999)]
 * @param graph Record mapping [[News]] [[`guid`]] to neighbors.
 * @optional minPoints Minimum number of points to form cluster.
 * @returns label Record mapping [[News]] [[`guid]] to cluster label.
 */
export function dbclum<Item>(
  graph: ItemGraph<Item>,
  getItemLabel: GetItemLabel<Item>,
  shouldMerge: (
    C1: Item[],
    C2: Item[],
    graph: ItemGraph<Item>,
    getItemLabel: GetItemLabel<Item>
  ) => true,
  mostBelongs: (
    P: Item,
    C1: Item[],
    C2: Item[],
    graph: ItemGraph<Item>,
    getItemLabel: GetItemLabel<Item>
  ) => true,
  minPoints = 2
): ItemClustering {
  const Noise = -1
  const clusters: Clusters<Item> = []
  const label: ItemClustering = {}
  const sortByKey = (a: Item, b: Item) => getItemLabel(a).localeCompare(getItemLabel(b))

  // DBCLUSTER
  for (const P of Object.keys(graph)) {
    if (label[P]) continue

    const Pn = graph[P]
    if (Pn.size < minPoints) {
      label[P] = Noise
      continue
    }

    const C = Array.from(Pn).sort(sortByKey)
    clusters.push(C)
  }

  // DBMERGE tslint:disable-next-line
  for (let i = 0; i < clusters.length; i++) {
    let C1 = clusters[i]
    for (let j = i + 1; j < clusters.length; j++) {
      let C2 = clusters[j]
      if (!overlaps(C1, C2, sortByKey)) continue

      if (shouldMerge(C1, C2, graph, getItemLabel)) {
        C1 = clusters[i] = merge(C1, C2, sortByKey)
        clusters.splice(j, 1)
        j--
      } else {
        const overlap = intersect(C1, C2, sortByKey)
        const removeC1 = new Set()
        const removeC2 = new Set()
        for (const P of overlap) {
          if (mostBelongs(P, C1, C2, graph, getItemLabel)) {
            removeC2.add(P)
          } else {
            removeC1.add(P)
          }
        }
        if (removeC1.size) C1 = clusters[i] = C1.filter((x) => !removeC1.has(x))
        if (removeC2.size) C2 = clusters[j] = C2.filter((x) => !removeC2.has(x))
      }
    }
  }

  // Assign labels tslint:disable-next-line
  for (let i = 0; i < clusters.length; i++) {
    for (const P of clusters[i]) label[getItemLabel(P)] = i + 1
  }

  return label
}
