import { GetItemLabel } from '@wholebuzz/search/lib/types'
import { Clusters, labelsFromClusters } from './cluster'
import { maxKey } from './math'
import { variationOfInformationFromLabels } from './voi'

export function mapClusters<Item>(
  to: Clusters<Item>,
  from: Clusters<Item>,
  getItemLabel: GetItemLabel<Item>,
  mapFn = maxKey
) {
  const labels0 = labelsFromClusters(from, getItemLabel)
  const labels1 = labelsFromClusters(to, getItemLabel)
  const voi = variationOfInformationFromLabels(labels0, labels1, false)
  const mapping = from.map((cluster) => {
    const label0 = labels0[getItemLabel(cluster[0])]
    const pjkl0 = voi.pjk[label0]
    if (Object.keys(pjkl0).length > 0) {
      const label1 = mapFn(pjkl0)
      if (label1) {
        const label1index = parseInt(label1, 10) - 1
        const pjkjk = pjkl0[label1]
        const I = pjkjk * Math.log2(pjkjk / (voi.pj[label0] * voi.pk[label1]))
        return { toIndex: label1index, I }
      }
    }
    return { toIndex: -1 }
  })
  return { labels0, labels1, voi, mapping }
}
