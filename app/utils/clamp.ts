export const clamp = (value: number, min: number, max: number) => {
  if (Number.isNaN(value) || Number.isNaN(min) || Number.isNaN(max)) {
    return NaN
  }

  const [clampMin, clampMax] = min > max ? [max, min] : [min, max]

  return Math.max(clampMin, Math.min(value, clampMax))
}
