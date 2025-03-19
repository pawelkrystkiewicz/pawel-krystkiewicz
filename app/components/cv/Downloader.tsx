'use client'

import { downloadPdf } from '@/app/utils/download-pdf'
import Icons from '../Icons'
interface DownloaderProps {
  filename: string
  pagePath: string
}

export const Downloader = ({ filename, pagePath }: DownloaderProps) => {
  const handleExport = () => downloadPdf({ path: pagePath, name: filename })

  return (
    <button className="text-primary flex items-center gap-1" onClick={handleExport.bind(null)}>
      <Icons.Download /> Download
    </button>
  )
}
