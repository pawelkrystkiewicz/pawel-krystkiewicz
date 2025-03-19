import { FC, ReactNode } from 'react'
import { Divider } from './Typography'
import clsx from 'clsx'

interface SectionProps {
  title?: string
  children?: ReactNode
  className?: string
}

export const Section: FC<SectionProps> = ({ title, children, className }) => {
  return (
    <section className={clsx('flex flex-col gap-2', className)}>
      <h4 className='text-3xl font-bold text-text-secondary'>{title}</h4>
      <Divider />
      <div className=''>{children}</div>
    </section>
  )
}
