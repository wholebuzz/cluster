import * as math from 'mathjs'
import { objectCosineSimilarity, objectMean } from './math'
import { outRank } from './outrank'

const findIQROutliers = require('outliers')
const findPeirceOutliers = require('peirce-criterion').separate_outliers

export enum ClusterCentralityMeasure {
  ClusterMeanCosineSimilarity,
  OutRank,
}

export enum FindOutliersMethod {
  Handfit,
  InterquantileRange,
  PeirceCriterion,
}

export interface FindOutliersOptions {
  handfit?: (x: number, centrality: number[]) => boolean
  iqrOutliersThreshold?: number
}

export interface FoundCentrality {
  centrality: number[]
  deltas?: number[]
  dim?: number[]
}

export interface FoundOutliers extends FoundCentrality {
  outliers: boolean[]
}

/**
 * Finds outliers by cosine similarity with embedding vector mean or OutRank.
 */
export function findOutliers(
  embedding: number[][] | Array<Record<string, number>>,
  centralityMeasure = ClusterCentralityMeasure.OutRank,
  removal = FindOutliersMethod.InterquantileRange
): FoundOutliers {
  const foundCentrality = findCentrality(embedding, centralityMeasure)
  const outliers = findOutliersFromCentrality(foundCentrality.centrality, removal)
  return { ...foundCentrality, outliers }
}

export function findCentrality(
  embedding: number[][] | Array<Record<string, number>>,
  centralityMeasure = ClusterCentralityMeasure.OutRank
): FoundCentrality {
  switch (centralityMeasure) {
    case ClusterCentralityMeasure.ClusterMeanCosineSimilarity:
      const mean = objectMean(embedding)
      return {
        centrality: embedding.map((v: number[] | Record<string, number>) =>
          objectCosineSimilarity(mean, v)
        ),
      }

    case ClusterCentralityMeasure.OutRank:
      const sim = math.zeros([embedding.length, embedding.length]) as number[][]
      for (let i = 0; i < embedding.length; i++) {
        for (let j = 0; j < i; j++) {
          sim[i][j] = sim[j][i] = objectCosineSimilarity(embedding[i], embedding[j])
        }
      }
      return outRank(sim)
  }
}

export function findOutliersFromCentrality(
  centrality: number[],
  removal = FindOutliersMethod.InterquantileRange,
  options?: FindOutliersOptions
): boolean[] {
  let outlierValues: number[] = []

  switch (removal) {
    case FindOutliersMethod.Handfit:
      const filter = options?.handfit ?? ((x) => x < (centrality.length < 3 ? 0.8 : 0.6))
      outlierValues = centrality.filter((x) => filter(x, centrality))
      break

    case FindOutliersMethod.InterquantileRange:
      outlierValues = findIQROutliers(centrality, options?.iqrOutliersThreshold || 3)
      break

    case FindOutliersMethod.PeirceCriterion:
      outlierValues = findPeirceOutliers(centrality).outliers
      break
  }

  return centrality.map((x) => outlierValues.includes(x))
}
