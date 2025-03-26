import { useDeepCompareMemo } from 'use-deep-compare'
import { applyRules } from './apply-rules'
import { Rules } from '../types'

export const useRules = <
  RuleSet extends Rules,
  Args extends Record<string, any>,
>(
  rules: RuleSet,
  args: Args,
): Record<string, boolean> => {
  // use a deep compare memo to memoize the result regardless of depth
  return useDeepCompareMemo(
    () => applyRules<Args, keyof RuleSet>(rules, args),
    [rules, args],
  )
}
