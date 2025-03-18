'use client'

import { downloadPdf } from '@/app/utils/download-pdf'

interface DownloaderProps {
  filename: string
  pagePath: string
}

export const Downloader = ({ filename, pagePath }: DownloaderProps) => {
  const handleExport = () => downloadPdf({ path: pagePath, name: filename })

  return (
    <button className="text-primary" onClick={handleExport.bind(null)}>
      &rarr; Download
    </button>
  )
}
