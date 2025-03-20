import {
  createDownloadFileName,
  createUploadFileName,
} from './create-file-name'
import { redis } from './upstash'

export async function getBlob(url: string): Promise<Blob> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(
      `Failed to fetch blob: ${response.status} ${response.statusText}`,
    )
  }

  const blob = await response.blob()
  return blob
}

export async function downloadPdf() {
  const url = await redis.get(createUploadFileName())
  const fileName = createDownloadFileName()

  if (!url) {
    throw new Error('No URL found')
  }

  const blob = await getBlob(url as string)
  const blobUrl = window.URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = blobUrl
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  a.remove()
  window.URL.revokeObjectURL(blobUrl)
}
