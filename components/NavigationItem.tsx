'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FC, useMemo } from 'react'
import { Downloader } from './cv/Downloader'
import clsx from 'clsx'
import { Tooltip } from '@creation-ui/react'

export interface NavigationItemProps {
  path: string
  name: string
  downloadFilename?: string
}

export const NavigationItem: FC<NavigationItemProps> = ({
  path,
  name,
  downloadFilename,
}) => {
  const pathname = usePathname()
  const isActive = useMemo(() => pathname === path, [pathname, path])

  return (
    <div key={path} className='flex items-center'>
      <Link
        key={path}
        href={path}
        className={clsx(
          'micro-interactions flex link-descrete align-middle relative py-1 px-2 m-1',
          isActive && 'font-bold',
        )}
      >
        {name}
      </Link>
      {downloadFilename && isActive && (
        <Tooltip content='Generate PDF version of my CV 🎉' position='right'>
          <Downloader filename={downloadFilename} pagePath={path} />
        </Tooltip>
      )}
    </div>
  )
}
