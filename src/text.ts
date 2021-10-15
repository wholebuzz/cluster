import { getTFIDF, simhashIDF, tokenIdHash } from '@wholebuzz/search/lib/idf'
import { fnv1aHash, HashFunction } from '@wholebuzz/search/lib/tokens'
import { HasFingerprint, IDFMap } from '@wholebuzz/search/lib/types'
import { FingerprintedLabeledDataset, ItemClustering, LabeledDataset } from './cluster'
import { clusterByHammingDistance, ClusterByHammingDistanceOptions } from './hamming'
import { ClusterCentralityMeasure, findOutliers, FindOutliersMethod } from './outliers'

export interface TextDataset<Item> {
  getItemText: (x: Item) => string
  idf: IDFMap
  items: Item[]
}

export interface SimhashClusterTextOptions<Item> extends ClusterByHammingDistanceOptions<Item> {
  useExistingFingerprint?: boolean
}

export interface LabeledTextDataset<Item> extends TextDataset<Item>, LabeledDataset<Item> {}
export interface FingerprintedLabeledTextDataset<Item>
  extends TextDataset<Item>,
    FingerprintedLabeledDataset<Item> {}

export function simhashClusterText<Item extends HasFingerprint>(
  data: FingerprintedLabeledTextDataset<Item>,
  options?: SimhashClusterTextOptions<Item>
): ItemClustering {
  const fingerprintBits = options?.fingerprintBits || 64
  const rehasherFn = (x: Item, hash: HashFunction) =>
    simhashIDF(getTFIDF(data.getItemText(x), data.idf), fingerprintBits, hash)
  if (!options?.useExistingFingerprint) {
    const initialHash = tokenIdHash(data.idf)
    data.items.forEach((x: Item) => data.setItemFingerprint(x, rehasherFn(x, initialHash)))
  }
  return clusterByHammingDistance(data, {
    ...options,
    rehasherFn,
    rehash: options?.rehash ?? [fnv1aHash],
  })
}

export function findOutliersByTFIDFCentrality<Item>(
  data: TextDataset<Item>,
  centralityMeasure = ClusterCentralityMeasure.OutRank,
  removalMethod = FindOutliersMethod.InterquantileRange
) {
  const tfidfs = data.items.map((x) => getTFIDF(data.getItemText(x), data.idf))
  return findOutliers(tfidfs, centralityMeasure, removalMethod)
}
