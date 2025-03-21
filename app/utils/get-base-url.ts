export function getBaseUrl(rawUrl: string): string {
  if (!rawUrl) {
    throw new Error('URL not provided')
  }

  const finalUrl =
    rawUrl.startsWith('http://') || rawUrl.startsWith('https://')
      ? rawUrl
      : `https://${rawUrl}`

  try {
    new URL(finalUrl)
  } catch {
    throw new Error('Invalid URL')
  }

  return finalUrl
}
