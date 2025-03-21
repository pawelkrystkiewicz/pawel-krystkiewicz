import { describe } from 'node:test'
import { expect, test } from 'vitest'
import { getBaseUrl } from '../get-base-url'

describe('getBaseUrl', () => {
  describe('happy paths', () => {
    ;[
      {
        description: 'should return original url when protocol is specicified',
        cases: [
          { input: 'http://localhost:3000', expected: 'http://localhost:3000' },
          { input: 'https://domain.com', expected: 'https://domain.com' },
        ],
      },
      {
        description:
          'should add https protocol to original url when protocol is not specicified',
        cases: [
          { input: 'localhost:3000', expected: 'https://localhost:3000' },
          { input: 'domain.com', expected: 'https://domain.com' },
        ],
      },
    ].forEach(({ description, cases }) => {
      cases.forEach(({ input, expected }) => {
        test(`${description} - ${input}`, () => {
          expect(getBaseUrl(input)).toStrictEqual(expected)
        })
      })
    })
  })

  describe('errors', () => {
    ;[
      {
        description: 'should throw error when url is not provided',
        cases: [
          { input: null, expected: 'URL not provided' },
          { input: undefined, expected: 'URL not provided' },
          { input: '', expected: 'URL not provided' },
        ],
      },
      {
        description: 'should throw error when url is invalid',
        cases: [
          { input: 'not a url', expected: 'Invalid URL' },
          { input: '://missing-protocol.com', expected: 'Invalid URL' },
        ],
      },
    ].forEach(({ description, cases }) => {
      cases.forEach(({ input, expected }) => {
        test(`${description} - ${input}`, () => {
          expect(() => getBaseUrl(input as any)).toThrow(expected)
        })
      })
    })
  })
})
