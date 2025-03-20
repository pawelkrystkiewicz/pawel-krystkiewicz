'use client'

import { downloadPdf } from '@/app/utils/download-pdf'
import Icons from '../Icons'
import { useState } from 'react'

export const Downloader = () => {
  const [isLoading, setIsLoading] = useState(false)
  const handleExport = async () => {
    setIsLoading(true)
    await downloadPdf()
    setIsLoading(false)
  }

  return (
    <button
      className='text-primary cursor-pointer  hover:text-primary/80 flex items-center gap-1'
      onClick={handleExport.bind(null)}
    >
      <Icons.Download /> Download
      {/* {isLoading && <Spinner />} */}
    </button>
  )
}
