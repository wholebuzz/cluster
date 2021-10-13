import { GetItemLabel, ItemClustering, ItemLabel, merge } from './cluster'

// https://en.wikipedia.org/wiki/Variation_of_information
// https://github.com/bjoern-andres/partition-comparison/blob/master/include/andres/partition-comparison.hxx
export function variationOfInformation<Item>(
  truth: Item[],
  pred: Item[],
  getItemLabel: GetItemLabel<Item>,
  ignoreUnlabeled = false
) {
  if (truth.length !== pred.length) {
    throw new Error(`Comparing different data ${truth.length} != ${pred.length}`)
  }

  // count
  let N = 0
  const pj: ItemClustering = {}
  const pk: ItemClustering = {}
  const pjk: Record<ItemLabel, ItemClustering> = {}
  for (let i = 0; i < truth.length; i++) {
    const label0 = getItemLabel(truth[i])
    const label1 = getItemLabel(pred[i])
    if (ignoreUnlabeled && !label0 && !label1) continue
    pj[label0] = (pj[label0] || 0) + 1
    pk[label1] = (pk[label1] || 0) + 1
    if (!pjk[label0]) pjk[label0] = {}
    const pjkl0 = pjk[label0]
    pjkl0[label1] = (pjkl0[label1] || 0) + 1
    N++
  }

  // normalize
  Object.keys(pj).forEach((k) => (pj[k] /= N))
  Object.keys(pk).forEach((k) => (pk[k] /= N))
  Object.keys(pjk).forEach((j) => Object.keys(pjk[j]).forEach((k) => (pjk[j][k] /= N)))

  // compute information
  let H0 = 0,
    H1 = 0,
    I = 0
  Object.keys(pj).forEach((k) => (H0 -= pj[k] * Math.log2(pj[k])))
  Object.keys(pk).forEach((k) => (H1 -= pk[k] * Math.log2(pk[k])))

  for (const j of Object.keys(pjk)) {
    for (const k of Object.keys(pjk[j])) {
      const pjkjk = pjk[j][k]
      I += pjkjk * Math.log2(pjkjk / (pj[j] * pk[k]))
    }
  }

  return {
    value: H0 + H1 - 2.0 * I,
    precision: H1 - I,
    recall: H0 - I,
    pj,
    pk,
    pjk,
    N,
    I,
    H0,
    H1,
  }
}

export function variationOfInformationFromLabels(
  truth: ItemClustering,
  pred: ItemClustering,
  ignoreUnlabeled = false
) {
  const compare = (a: string, b: string) => a.localeCompare(b)
  const truthKeys = Object.keys(truth).sort(compare)
  const predKeys = Object.keys(pred).sort(compare)
  const mergedKeys: string[] = merge(truthKeys, predKeys, compare, undefined, true)

  return {
    truthKeys,
    predKeys,
    mergedKeys,
    ...variationOfInformation(
      mergedKeys.map((x) => (truth[x] ? String(truth[x]) : '')),
      mergedKeys.map((x) => (pred[x] ? String(pred[x]) : '')),
      (x) => String(x),
      ignoreUnlabeled
    ),
  }
}
