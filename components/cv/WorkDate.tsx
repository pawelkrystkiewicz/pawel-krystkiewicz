import { WorkPeriod } from '@/app/types'
import clsx from 'clsx'

interface WorkDateProps {
  period: WorkPeriod
  className?: string
}

export const WorkDate = (props: WorkDateProps) => {
  const { period, className } = props
  return (
    <span className={clsx('text-text-secondary', className)}>
      {new Date(period.year, period.month - 1).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      })}
    </span>
  )
}
