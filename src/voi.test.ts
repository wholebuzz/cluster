import * as assert from 'assert'
import { variationOfInformation } from './voi'

// https://github.com/bjoern-andres/partition-comparison/blob/master/src/unittest/partition-comparison.cxx
it('Should calculate variation of information as expected', () => {
  const getLabel = (x: number) => String(x)
  const a0 = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
  const a1 = [6, 6, 6, 6, 6, 7, 7, 7, 7, 7]
  assert.equal(0, variationOfInformation(a0, a1, getLabel).value)
  assert.equal(0, variationOfInformation(a0, a1, getLabel, true).value)
  const b0 = [0, 0, 0, 0, 4, 4, 4, 4, 8, 9]
  const b1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  assert.equal(1.6, variationOfInformation(b0, b1, getLabel).value)
  assert.equal(1.6, variationOfInformation(b1, b0, getLabel).value)
  assert.equal(1.6, variationOfInformation(b0, b1, getLabel, true).value)
  assert.equal(1.6, variationOfInformation(b1, b0, getLabel, true).value)
})
