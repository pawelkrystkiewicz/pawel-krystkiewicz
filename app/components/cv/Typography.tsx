import clsx from 'clsx'
import { FC } from 'react'

interface ParagraphProps {
  children: React.ReactNode
  className?: string
}

export const Paragraph: FC<ParagraphProps> = ({ children, className }) => {
  return <p className={clsx('text-pretty', className)}>{children}</p>
}

export const PageBreak = () => {
  return <div className="page-break" />
}

export const Divider = ({ className }: { className?: string }) => (
  <div className={clsx('h-[2px] bg-text-secondary/60 w-full', className)} />
)
