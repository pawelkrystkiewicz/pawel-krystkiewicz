import { describe, expect, test } from 'vitest'
import { monthDiff } from '../calculate-time-diff'

describe('monthDiff', () => {
  ;[
    {
      description: 'should return 0 when dates are in the same month and year',
      cases: [
        { from: new Date(2024, 0, 1), to: new Date(2024, 0, 31), expected: 0 },
      ],
    },
    {
      description: 'should correctly calculate months within the same year',
      cases: [
        { from: new Date(2024, 0, 1), to: new Date(2024, 5, 1), expected: 5 },
      ],
    },
    {
      description: 'should correctly calculate months across years',
      cases: [
        { from: new Date(2022, 0, 1), to: new Date(2024, 0, 1), expected: 24 },
        { from: new Date(2022, 5, 1), to: new Date(2024, 2, 1), expected: 21 },
      ],
    },
  ].forEach(({ description, cases }) => {
    cases.forEach(({ from, to, expected }) => {
      test(`${description} - ${from.getFullYear()}-${from.getMonth()} ${to.getFullYear()}-${to.getMonth()}`, () => {
        expect(monthDiff(from, to)).toBe(expected)
      })
    })
  })
})
