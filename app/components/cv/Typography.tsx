import clsx from 'clsx'
import { FC } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

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

const dividerClasses = cva(['bg-text-secondary/60'], {
  variants: {
    orientation: {
      horizontal: ['h-(--divider-thickness)', 'w-full'],
      vertical: ['w-(--divider-thickness)', 'h-full'],
    },
    thickness: {
      1: ['[--divider-thickness:1px]'],
      2: ['[--divider-thickness:2px]'],
      3: ['[--divider-thickness:3px]'],
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    thickness: 2,
  },
})

type DividerClassTypes = VariantProps<typeof dividerClasses>

interface DividerProps {
  className?: string
  orientation?: DividerClassTypes['orientation']
  thickness?: DividerClassTypes['thickness']
}

export const Divider: FC<DividerProps> = ({ className, orientation, thickness }) => (
  <span className={clsx(dividerClasses({ orientation, thickness }), className)} />
)
