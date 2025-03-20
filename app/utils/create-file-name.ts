import config from '@/config'

export const createUploadFileName = () => {
  const lastname = config.name.split(' ')[1].toLocaleLowerCase()
  return `cv-${lastname}.pdf`
}

export const createDownloadFileName = () => {
  const requestedAt = new Date()
  const simpleDate = requestedAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  const lastname = config.name.split(' ')[1].toLocaleLowerCase()

  return `cv-${lastname}-${simpleDate}.pdf`
}
