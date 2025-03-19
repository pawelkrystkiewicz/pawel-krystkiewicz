import { WorkPeriod } from '../types'

export const monthDiff = (dateFrom: Date, dateTo: Date) => {
  return dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear())
}

export const calculateTimeDiff = (start: WorkPeriod, end: WorkPeriod | undefined) => {
  const _end = end ?? { month: 0, year: 0 }
  const startDate = new Date(start.year, start.month - 1)
  const endDate = new Date(_end.year, _end.month - 1)

  const months = monthDiff(startDate, endDate)
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  switch (true) {
    case years === 0 && remainingMonths === 0:
      return 'Present'
    case years === 0:
      return `${remainingMonths}m`
    case remainingMonths === 0:
      return `${years}y`
    default:
      return `${years}y ${remainingMonths}m`
  }
}
