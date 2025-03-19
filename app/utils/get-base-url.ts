export function getBaseUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_VERCEL_URL

  if (!rawUrl) {
    throw new Error('NEXT_PUBLIC_VERCEL_URL is not set')
  }

  const finalUrl =
    rawUrl.startsWith('http://') || rawUrl.startsWith('https://')
      ? rawUrl
      : `https://${rawUrl}`

  try {
    new URL(finalUrl) // Validate URL
  } catch {
    throw new Error(`Invalid NEXT_PUBLIC_VERCEL_URL: ${finalUrl}`)
  }

  return finalUrl
}
