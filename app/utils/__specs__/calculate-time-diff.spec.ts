import { describe, expect, test } from 'vitest'
import { calculateTimeDiff } from '../calculate-time-diff'

describe('calculateTimeDiff', () => {
  ;[
    {
      description: 'should return "Present" if difference is zero',
      cases: [
        {
          start: { year: 2024, month: 3 },
          end: { year: 2024, month: 3 },
          expected: 'Present',
        },
      ],
    },
    {
      description: 'should return months only when difference < 12 months',
      cases: [
        {
          start: { year: 2024, month: 1 },
          end: { year: 2024, month: 6 },
          expected: '5m',
        },
      ],
    },
    {
      description:
        'should return years only when difference is multiple of 12 months',
      cases: [
        {
          start: { year: 2020, month: 1 },
          end: { year: 2022, month: 1 },
          expected: '2y',
        },
      ],
    },
    {
      description: 'should return years and months when there is both',
      cases: [
        {
          start: { year: 2020, month: 1 },
          end: { year: 2023, month: 6 },
          expected: '3y 5m',
        },
        {
          start: { year: 2021, month: 4 },
          end: { year: 2024, month: 2 },
          expected: '2y 10m',
        },
      ],
    },
    {
      description: 'should handle undefined end date (defaults to 0/0)',
      cases: [
        {
          start: { year: 2024, month: 2 },
          end: undefined,
          expected: '2m',
        },
        {
          start: { year: 2024, month: 3 },
          end: undefined,
          expected: '3m',
        },
      ],
    },
  ].forEach(({ description, cases }) => {
    cases.forEach(({ start, end, expected }) => {
      test(`${description} - ${start.year}-${start.month} ${end ? `- ${end.year}-${end.month}` : ''}`, () => {
        expect(calculateTimeDiff(start, end)).toBe(expected)
      })
    })
  })
})
