import { getBaseUrl } from '@/app/utils/get-base-url'
import puppeteerCore from 'puppeteer-core'
import puppeteer from 'puppeteer'
import chromium from '@sparticuz/chromium'

const baseUrl = process.env.NEXT_PUBLIC_URL

export const dynamic = 'force-dynamic'

async function getBrowser() {
  if (process.env.VERCEL_ENV === 'production') {
    const executablePath = await chromium.executablePath()

    const browser = await puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: true,
    })
    return browser
  } else {
    const browser = await puppeteer.launch()
    return browser
  }
}

export async function POST(req: Request) {
  const { path, name } = await req.json() // You could pass in a route like /report or /invoice
  if (!path || typeof path !== 'string') {
    return new Response('Missing or invalid path', { status: 400 })
  }

  const browser = await getBrowser()

  const page = await browser.newPage()

  const fullUrl = `${baseUrl}${path}`
  await page.goto(fullUrl, { waitUntil: 'networkidle0' })

  const pdfBuffer = await page.pdf({
    format: 'a4',
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: true,
    // pageRanges: '2',
  })

  await browser.close()

  return new Response(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${name}"`,
    },
  })
}
