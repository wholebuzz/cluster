import * as assert from 'assert'
import * as math from 'mathjs'
import { objectCosineSimilarity, objectMean, vectorCosineSimilarity } from './math'

it('Should calculate the object mean', () => {
  const x = [
    { a: 44, b: 33 },
    { a: 12, b: 1 },
  ]
  const mean = objectMean(x)
  assert.equal(mean.a, 28)
  assert.equal(mean.b, 17)
})

it('Should calculate the vector mean', () => {
  const x = [
    [44, 33],
    [12, 1],
  ]
  const mean = math.mean(x, 0)
  assert.equal(mean[0], 28)
  assert.equal(mean[1], 17)
  const objMean = objectMean(x)
  assert.equal(objMean[0], 28)
  assert.equal(objMean[1], 17)
})

it('Should calculate the object cosine similarity', () => {
  const x = { a: 44, b: 33 }
  const y = { a: 12, b: 1 }
  const sim = objectCosineSimilarity(x, y)
  assert.equal(Math.abs(sim - 0.847) < 0.001, true)
})

it('Should calculate the vector cosine similarity', () => {
  const x = [44, 33]
  const y = [12, 1]
  const sim = vectorCosineSimilarity(x, y)
  assert.equal(Math.abs(sim - 0.847) < 0.001, true)
  const objSim = objectCosineSimilarity(x, y)
  assert.equal(Math.abs(sim - objSim) < 0.001, true)
})
