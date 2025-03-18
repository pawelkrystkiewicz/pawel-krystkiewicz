export const downloadPdf = async ({ path, name }: { path: string; name: string }) => {
  const requestedAt = new Date()
  const simpleDate = requestedAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  const res = await fetch('/api/download', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ path, name }),
  })
  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  console.log(name, path)
  a.download = `${name}-${simpleDate}.pdf`
  a.click()
  URL.revokeObjectURL(url)
}
