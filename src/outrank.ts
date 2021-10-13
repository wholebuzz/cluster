import * as math from 'mathjs'

export interface OutRankResults {
  deltas: number[]
  dim: number[]
  centrality: number[]
}

/** https://www.cse.msu.edu/~ptan/papers/IJAIT.pdf */
export function outRank(sim: number[][], d = 0.01, eps = 0.01): OutRankResults {
  const dim = math.size(sim) as number[]
  const n = dim[0]
  const centrality: number[] = new Array(n)
  const deltas: number[] = []

  const S = math.zeros([n, n]) as number[][]
  for (let i = 0; i < n; i++) {
    let totSim = 0
    for (let j = 0; j < n; j++) totSim += sim[i][j]
    if (totSim !== 0) {
      for (let j = 0; j < n; j++) S[j][i] = sim[i][j] / totSim
    }
  }

  const c: number[][] = [new Array(n), new Array(n)]
  for (let i = 0; i < n; i++) c[0][i] = 1 / n

  let t = 0
  for (; ; /**/ /**/ t++) {
    const even = t % 2 === 0
    const cold = even ? c[0] : c[1]
    const cout = even ? c[1] : c[0]
    const cnew = math.squeeze(math.multiply(S, cold)) as any as number[]
    let delta = 0
    for (let i = 0; i < n; i++) {
      cout[i] = cnew[i] * (1 - d) + d / n
      delta += Math.abs(cout[i] - cold[i])
    }
    deltas.push(delta)
    const finite = isFinite(delta)
    if (!finite || delta < eps) {
      const out = finite ? cout : cold
      out.forEach((v, i) => (centrality[i] = v))
      break
    }
  }

  return { deltas, dim, centrality }
}
