import { describe, it } from 'node:test'
import assert from 'node:assert'

import { percentil } from './percentil'

describe('percentil', () => {
  it('should return undefined for an empty array', () => {
    const result = percentil([], 50)
    assert.strictEqual(result, undefined)
  })

  it('should return the correct value for a whole number rank', () => {
    const array = [1, 2, 3, 4, 5]
    const result = percentil(array, 50)
    assert.strictEqual(result, '3')
  })

  it('should return the correct value for a fractional rank', () => {
    const array = [1, 2, 3, 4, 5]
    const result = percentil(array, 75)
    assert.strictEqual(result, '4')
  })

  it('should return the correct value when rank is at the beginning', () => {
    const array = [1, 2, 3, 4, 5]
    const result = percentil(array, 0)
    assert.strictEqual(result, '1')
  })

  it('should return the correct value when rank is at the end', () => {
    const array = [1, 2, 3, 4, 5]
    const result = percentil(array, 100)
    assert.strictEqual(result, '5')
  })
})
