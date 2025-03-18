import { chromium } from 'playwright'

export async function POST(req: Request) {
  const { path, name } = await req.json() // You could pass in a route like /report or /invoice
  if (!path || typeof path !== 'string') {
    return new Response('Missing or invalid path', { status: 400 })
  }

  const browser = await chromium.launch()
  const page = await browser.newPage()

  const fullUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${path}` // Make sure to set this in env
  await page.goto(fullUrl, { waitUntil: 'networkidle' })

  await page.evaluate(elementId => {
    const element = document.getElementById(elementId)
    if (element) {
      document.body.innerHTML = ''
      document.body.appendChild(element.cloneNode(true))
    }
  }, 'printable')

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: true,
  })

  await browser.close()

  return new Response(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${name}"`,
    },
  })
}
