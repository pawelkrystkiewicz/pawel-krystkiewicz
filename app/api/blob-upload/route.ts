// blob-upload
import { createUploadFileName } from '@/app/utils/create-file-name'
import { redis } from '@/app/utils/upstash'
import chromium from '@sparticuz/chromium'
import { put } from '@vercel/blob'
import puppeteer from 'puppeteer'
import puppeteerCore from 'puppeteer-core'

const BASE_URL = process.env.NEXT_PUBLIC_URL
const PATH = '/cv'
const FILE_NAME = createUploadFileName()

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
  if (!PATH || typeof PATH !== 'string') {
    return new Response('Missing or invalid path', { status: 400 })
  }

  const browser = await getBrowser()

  const page = await browser.newPage()

  const fullUrl = `${BASE_URL}${PATH}`
  await page.goto(fullUrl, { waitUntil: 'networkidle0' })

  const pdfBuffer = await page.pdf({
    format: 'a4',
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: true,
    pageRanges: '1',
  })

  await browser.close()

  // return new Response(pdfBuffer, {
  //   headers: {
  //     'Content-Type': 'application/pdf',
  //     'Content-Disposition': `attachment; filename="${name}"`,
  //   },
  // })

  const blob = await put(`files/${FILE_NAME}`, Buffer.from(pdfBuffer), {
    contentType: 'application/pdf',
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
    onUploadProgress: progressEvent => {
      console.log(`Loaded ${progressEvent.loaded} bytes`)
      console.log(`Total ${progressEvent.total} bytes`)
      console.log(`Percentage ${progressEvent.percentage}%`)
    },
  })

  await redis.set(FILE_NAME, blob.url)

  return Response.json({ url: blob.url })
}
