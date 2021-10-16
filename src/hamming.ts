import { HashFunction } from '@wholebuzz/search/lib/tokens'
import { FingerprintedLabeledDataset, GetItemLabel } from '@wholebuzz/search/lib/types'
import { fastpopcnt } from 'bigint-popcnt'
import { dbscan, ItemClustering, ItemGraph } from './cluster'
import { newPermutation } from './math'

export const zero = BigInt(0)
export const one = BigInt(1)

export interface ClusterByHammingDistanceOptions<Item> {
  beamWidth?: number
  fingerprintBits?: number
  nearnessThreshold?: number
  rounds?: number
  rehash?: HashFunction[]
  rehasherFn?: (x: Item, hash: HashFunction) => bigint
  clusterFn?: (graph: ItemGraph<Item>, getItemLabel: GetItemLabel<Item>) => ItemClustering
}

/**
 * Clusters [[FingerprintedLabeledDataset]] by Hamming distance.
 * References: [[1](https://dash.harvard.edu/bitstream/handle/1/38811431/GHOCHE-SENIORTHESIS-2016.pdf)]
 * @param news Array of articles with SimHash [[`fingerprint`]].
 * @optional options The [[ClusterOptions]] to apply.
 */
export function clusterByHammingDistance<Item>(
  data: FingerprintedLabeledDataset<Item>,
  options?: ClusterByHammingDistanceOptions<Item>
): ItemClustering {
  const fingerprintBits = options?.fingerprintBits || 64
  const rounds = options?.rounds || 36
  const hashRounds = rounds / ((options?.rehash?.length ?? 0) + 1)
  const permuteFingerprint = (x: Item, round: number, permutation: Array<bigint>) =>
    options?.rehash?.length && options?.rehasherFn && round > 0 && round % hashRounds === 0
      ? options.rehasherFn(x, options.rehash[round / hashRounds - 1])
      : permuteBits(data.getItemFingerprint(x), permutation)
  const pairs: ItemGraph<Item> = {}

  for (let r = 0; r < rounds; r++) {
    if (r > 0) {
      const permutation = newPermutation(fingerprintBits)
      data.items.forEach((x) => data.setItemFingerprint(x, permuteFingerprint(x, r, permutation)))
    }
    addHammingNeighbors(
      pairs,
      data,
      options?.nearnessThreshold || 6,
      options?.beamWidth || 12,
      fingerprintBits > 64 ? hammingDistanceConstantTimeFunction(fingerprintBits) : hammingDistance
    )
  }
  return (options?.clusterFn ?? dbscan)(pairs, data.getItemLabel)
}

/**
 * Finds approximate nearest neighbors by Hamming distance.
 * References: [[1](https://dash.harvard.edu/bitstream/handle/1/38811431/GHOCHE-SENIORTHESIS-2016.pdf)]
 * @param news Array of articles with SimHash [[`fingerprint`]].
 * @param fingerprintBits Number of bits used for [[`fingerprint`]].
 * @param threshhold Maximum Hamming distance for two articles to be considered neighbors.
 * @param rounds Number of times to randomly permute [[`fingerprint`]] bits, re-sort, and sift.
 * @param beamWidth Number of sort-order adjacent points to check for nearness.
 */
export function addHammingNeighbors<Item>(
  output: ItemGraph<Item>,
  data: FingerprintedLabeledDataset<Item>,
  threshhold: number,
  beamWidth: number,
  hammingDist: (x: bigint, y: bigint) => number
) {
  data.items.sort((a, b) => Number(data.getItemFingerprint(a) - data.getItemFingerprint(b)))
  for (let i = 0; i + 1 < data.items.length; i++) {
    const a = data.items[i]
    for (let j = 1; j <= beamWidth && i + j < data.items.length; j++) {
      const b = data.items[i + 1]
      if (hammingDist(data.getItemFingerprint(a), data.getItemFingerprint(b)) > threshhold) continue
      const aKey = data.getItemLabel(a)
      const bKey = data.getItemLabel(b)
      if (!output[aKey]) output[aKey] = new Set([a])
      if (!output[bKey]) output[bKey] = new Set([b])
      output[aKey].add(b)
      output[bKey].add(a)
    }
  }
  return output
}

/**
 * Returns Hamming distance between points.
 * References: [[1](https://en.wikipedia.org/wiki/Hamming_distance)]
 * @param x First point to compare.
 * @param y Second point to compare.
 */
export function hammingDistance(x: bigint, y: bigint) {
  return hammingWeight(x ^ y)
}

/**
 * Returns Hamming weight for point.
 * References: [[1](https://en.wikipedia.org/wiki/Hamming_weight)]
 * @param x The [[bigint]] to count the set bits of.
 */
export function hammingWeight(x: bigint): number {
  let c = 0
  for (; x; c++) x &= x - one
  return c
}

/**
 * Returns function for Hamming distance using constant-time algorithm.
 * It's just a little slower than [[hammingDistance]] for 64 bit hashes.
 * References: [[1](https://en.wikipedia.org/wiki/Hamming_distance)]
 * @param x First point to compare.
 * @param y Second point to compare.
 */
export function hammingDistanceConstantTimeFunction(
  bits: number
): (x: bigint, y: bigint) => number {
  const hammingWeightConstantTime = fastpopcnt(BigInt(bits))
  return (x: bigint, y: bigint) => Number(hammingWeightConstantTime(x ^ y))
}

/**
 * Reorders the bits in the input according to the supplied permutation.
 * @param x The input bits to permute.
 * @param permutation Order created by [[newPermutation]].
 */
export function permuteBits(x: bigint, permutation: Array<bigint>) {
  const d = permutation.length
  let ret = zero
  for (let i = 0; i < d; i++) {
    if (x & (one << permutation[i])) {
      ret |= one << BigInt(i)
    }
  }
  return ret
}
