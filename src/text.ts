import { getTFIDF, simhashIDF, tokenIdHash } from '@wholebuzz/search/lib/idf'
import { fnv1aHash, HashFunction } from '@wholebuzz/search/lib/tokens'
import { FingerprintedLabeledLexiconDataset, LexiconDataset } from '@wholebuzz/search/lib/types'
import { ItemClustering } from './cluster'
import { clusterByHammingDistance, ClusterByHammingDistanceOptions } from './hamming'
import { ClusterCentralityMeasure, findOutliers, FindOutliersMethod } from './outliers'

export interface SimhashClusterTextOptions<Item> extends ClusterByHammingDistanceOptions<Item> {
  useExistingFingerprint?: boolean
}

export function simhashClusterText<Item>(
  data: FingerprintedLabeledLexiconDataset<Item>,
  options?: SimhashClusterTextOptions<Item>
): ItemClustering {
  const fingerprintBits = options?.fingerprintBits || 64
  const rehasherFn = (x: Item, hash: HashFunction) =>
    simhashIDF(getTFIDF(data.getItemText(x), data.lexicon), fingerprintBits, hash)
  if (!options?.useExistingFingerprint) {
    const initialHash = tokenIdHash(data.lexicon)
    data.items.forEach((x: Item) => data.setItemFingerprint(x, rehasherFn(x, initialHash)))
  }
  return clusterByHammingDistance(data, {
    ...options,
    rehasherFn,
    rehash: options?.rehash ?? [fnv1aHash],
  })
}

export function findOutliersByTFIDFCentrality<Item>(
  data: LexiconDataset<Item>,
  centralityMeasure = ClusterCentralityMeasure.OutRank,
  removalMethod = FindOutliersMethod.InterquantileRange
) {
  const tfidfs = data.items.map((x) => getTFIDF(data.getItemText(x), data.lexicon))
  return findOutliers(tfidfs, centralityMeasure, removalMethod)
}
