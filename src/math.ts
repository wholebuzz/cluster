export const vectorCosineSimilarity = require('compute-cosine-similarity')
export const objectCosineSimilarity = require('cosine-similarity')

export function isOneDimensional(arr: number[] | number[][]): arr is number[] {
  return !Array.isArray(arr[0])
}

export function maxIndex(arr: number[]) {
  return arr.reduce((maxInd, x, i) => (x > arr[maxInd] ? i : maxInd), -1)
}

export const maxKey = (obj: Record<string, number>) =>
  Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b))

export function softMax(values: number[]): number[] {
  const max = Math.max(...values)
  const exps = values.map((x) => Math.exp(x - max))
  const expsSum = exps.reduce((a, b) => a + b)
  return exps.map((e) => e / expsSum)
}

export function objectMean(arr: Array<Record<string, number>> | number[][]) {
  const mean: Record<string, number> = {}
  arr.forEach((obj: any) => Object.keys(obj).forEach((t) => (mean[t] = (mean[t] || 0) + obj[t])))
  Object.keys(mean).forEach((p) => (mean[p] = mean[p] / arr.length))
  return mean
}

/**
 * Computes Mahalanobis distance squared from mean to vector, given a diagonal covariance matrix.
 * This is the primary term in Guassian PDF.
 * References: [[1](https://en.wikipedia.org/wiki/Mahalanobis_distance)]
 * @param mean The center to measure distance from.
 * @param diagCovar Array specifying the diagonal of the covariance matrix.
 * @param vector The query vector to measure distance to.
 */
export function mahalanobisDistance2(mean: number[], diagCovar: number[], vector: number[]) {
  let sum = 0
  for (let i = 0; i < vector.length; i++) {
    const diff = mean[i] - vector[i]
    sum += (diff * diff) / diagCovar[i]
  }
  return sum
}

/**
 * Creates a random permutation of the integers from 0 to d - 1.
 * @param d The number of integers in the set.
 */
export function newPermutation(d: number) {
  const ret: Array<bigint> = Array(d)
  for (let i = 0; i < d; i++) ret[i] = BigInt(i)
  for (let i = 0; i < d; i++) {
    const j: number = Math.floor(Math.random() * (d - i))
    const swap = ret[i]
    ret[i] = ret[i + j]
    ret[i + j] = swap
  }
  return ret
}
