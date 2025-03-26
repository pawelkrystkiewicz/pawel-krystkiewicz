'use client'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import Icons from './Icons'
import clsx from 'clsx'

interface CurrentPageViewsProps {
  views: Record<string, number>
  className?: string
}

export const CurrentPageViews = ({
  views,
  className,
}: CurrentPageViewsProps) => {
  const pathname = usePathname()
  const pageViews = useMemo(() => {
    const normalizedPathname = pathname.replace('/', '')
    return normalizedPathname ? views[normalizedPathname] : views['home']
  }, [views, pathname])

  return (
    <span
      className={clsx(
        'text-xs text-text-secondary flex items-center gap-1 hover:text-primary micro-interactions cursor-help',
        className,
      )}
      title={` This page has been viewed ${pageViews} times`}
    >
      <Icons.Eye className='size-4' />
      {pageViews}
    </span>
  )
}
