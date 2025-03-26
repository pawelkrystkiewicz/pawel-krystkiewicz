import type { Flags, Rules } from '../types'

export const applyRules = <
  A = any,
  K extends string | number | symbol = string,
>(
  rule: Rules<A, K>,
  args: A,
): Flags<K> => {
  return Object.keys(rule).reduce((flags: Flags, key: string) => {
    const ruleFn = rule[key as K]
    if (ruleFn) {
      flags[key] = ruleFn(args)
    }
    return flags
  }, {}) as Flags<K>
}
