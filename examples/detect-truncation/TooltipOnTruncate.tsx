import { Tooltip, type TooltipProps } from '@creation-ui/react'
import type { FC, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { useDetectedTruncation } from './hook'

const baseClasses = 'truncate cursor-default'

interface TooltipOnTruncatedProps extends HTMLAttributes<HTMLSpanElement> {
  tooltipProps: TooltipProps
}

export const TooltipOnTruncated: FC<TooltipOnTruncatedProps> = ({
  tooltipProps: { content, ...tooltipProps },
  children,
  className,
  ...spanProps
}) => {
  const { isTruncated, ref } = useDetectedTruncation<HTMLSpanElement>()

  return (
    <Tooltip {...tooltipProps} content={isTruncated ? content : undefined}>
      <span
        ref={ref}
        className={twMerge(baseClasses, className)}
        {...spanProps}
      >
        {children}
      </span>
    </Tooltip>
  )
}
