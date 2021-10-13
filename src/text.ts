import { getTFIDF, simhashIDF, tokenIdHash } from '@wholebuzz/search/lib/idf'
import { HashFunction } from '@wholebuzz/search/lib/tokens'
import { HasFingerprint, IDFMap } from '@wholebuzz/search/lib/types'
import { LabeledDataset } from './cluster'
import { clusterByHammingDistance, ClusterByHammingDistanceOptions } from './hamming'
import { ClusterCentralityMeasure, findOutliers, FindOutliersMethod } from './outliers'

export interface TextDataset<Item> {
  getText: (x: Item) => string
  idf: IDFMap
  items: Item[]
}

export interface LabeledTextDataset<Item> extends TextDataset<Item>, LabeledDataset<Item> {}

export async function simhashWithIDFMap<Item>(
  data: TextDataset<Item>,
  fingerprintBits = 64,
  filter?: (x: Item) => boolean,
  useTokenId = true
) {
  const arr: Array<Item & HasFingerprint> = (filter ? data.items.filter(filter) : data.items).map(
    (x) => ({
      ...x,
      fingerprint: simhashIDF(
        getTFIDF(data.getText(x), data.idf),
        fingerprintBits,
        useTokenId ? tokenIdHash(data.idf) : undefined
      ),
    })
  )
  return arr
}

export function simhashClusterText<Item extends HasFingerprint>(
  data: LabeledTextDataset<Item>,
  options?: ClusterByHammingDistanceOptions<Item>
) {
  const fingerprintBits = options?.fingerprintBits || 64
  const rehasherFn = (x: Item, hash: HashFunction) =>
    simhashIDF(getTFIDF(data.getText(x), data.idf), fingerprintBits, hash)
  return clusterByHammingDistance(data, { ...options, rehasherFn })
}

export function filterOutliersByTFIDFCentrality<Item>(
  data: TextDataset<Item>,
  centralityMeasure: ClusterCentralityMeasure.OutRank,
  removalMethod = FindOutliersMethod.InterquantileRange
) {
  const tfidfs = data.items.map((x) => getTFIDF(data.getText(x), data.idf))
  return findOutliers(tfidfs, centralityMeasure, removalMethod)
}
