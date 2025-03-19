import { chromium } from 'playwright'
import { getBaseUrl } from '@/app/utils/get-base-url'

const baseUrl = getBaseUrl()

export async function POST(req: Request) {
  const { path, name } = await req.json() // You could pass in a route like /report or /invoice
  if (!path || typeof path !== 'string') {
    return new Response('Missing or invalid path', { status: 400 })
  }

  const browser = await chromium.launch()
  const page = await browser.newPage()

  const fullUrl = `${baseUrl}${path}`
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
    pageRanges: '1',
  })

  await browser.close()

  return new Response(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${name}"`,
    },
  })
}
