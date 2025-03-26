'use client'

import { downloadPdf } from '@/app/utils/download-pdf'
import Icons from '../Icons'
import { useState } from 'react'
import { Loader } from '../Loader'

interface DownloaderProps {
  filename: string
  pagePath: string
}

export const Downloader = ({ filename, pagePath }: DownloaderProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleExport = async () => {
    setIsLoading(true)
    await downloadPdf({ path: pagePath, name: filename })
    setIsLoading(false)
  }

  return (
    <button
      className='text-primary cursor-pointer  hover:text-primary/80 flex items-center gap-1'
      onClick={handleExport.bind(null)}
      disabled={isLoading}
    >
      <Icons.Download /> Download {isLoading && <Loader />}
    </button>
  )
}
