import { describe, expect, test } from 'vitest'
import { clamp } from '../clamp'

describe('clamp', () => {
  ;[
    {
      description: 'should clamp value between min and max',
      cases: [
        { input: { min: 0, max: 1, value: 10 }, expected: 1 },
        { input: { min: 0, max: 1, value: 0 }, expected: 0 },
        { input: { min: 0, max: 1, value: -1 }, expected: 0 },
        { input: { min: 0, max: 1, value: 0.5 }, expected: 0.5 },
      ],
    },
    {
      description: 'should handle inverted boundaries (min > max)',
      cases: [
        { input: { min: 10, max: 5, value: 7 }, expected: 7 }, // if your clamp normalizes, otherwise maybe error
      ],
    },
    {
      description: 'should handle infinite boundaries',
      cases: [
        { input: { min: -Infinity, max: Infinity, value: 99999 }, expected: 99999 },
        { input: { min: -Infinity, max: 0, value: 1 }, expected: 0 },
      ],
    },
    {
      description: 'should handle floating point numbers',
      cases: [
        { input: { min: 1.5, max: 3.5, value: 4.2 }, expected: 3.5 },
        { input: { min: -3.5, max: -1.5, value: -2 }, expected: -2 },
      ],
    },
    {
      description: 'should clamp when min equals max',
      cases: [
        { input: { min: 5, max: 5, value: 10 }, expected: 5 },
        { input: { min: 5, max: 5, value: 4 }, expected: 5 },
      ],
    },
    {
      description: 'should handle NaN values gracefully',
      cases: [
        { input: { min: 0, max: 1, value: NaN }, expected: NaN }, // or however you want to handle this
      ],
    },
  ].forEach(({ description, cases }) => {
    cases.forEach(({ input, expected }) => {
      test(`${description} - value:${input.value} min:${input.min} max:${input.max}`, () => {
        const result = clamp(input.value, input.min, input.max)
        if (Number.isNaN(expected)) {
          expect(result).toBeNaN()
        } else {
          expect(result).toBe(expected)
        }
      })
    })
  })
})
