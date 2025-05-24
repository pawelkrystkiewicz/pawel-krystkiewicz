import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Fira_Code, Manrope } from 'next/font/google'
import { Navbar } from '@/components/Nav'
import './global.css'
import sitemap, { ARTICLES, baseUrl, ROUTES } from './sitemap'
import Footer from '@/components/Footer'
import { Redis } from '@upstash/redis'
import config from '@/config'
import { CurrentPageViews } from '@/components/CurrentPageViews'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl || ''),
  title: {
    default: 'Paweł Krystkiewicz',
    template: '%s | Paweł Krystkiewicz',
  },
  description: 'Portfolio of Paweł Krystkiewicz, a software engineer',
  openGraph: {
    title: 'Paweł Krystkiewicz',
    description: 'Portfolio of Paweł Krystkiewicz, a software engineer',
    url: baseUrl,
    siteName: 'Paweł Krystkiewicz',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const redis = Redis.fromEnv()
const ALL_PAGES = ['home', ...ROUTES, ...ARTICLES.map(a => a.slug)].filter(
  Boolean,
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const views = (
    await redis.mget<number[]>(
      ...ALL_PAGES.map(p => [config.projectId, 'pageviews', p].join(':')),
    )
  ).reduce(
    (acc, v, i) => {
      acc[ALL_PAGES[i]] = v ?? 0
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <html lang='en' className={clsx(manrope.variable, firaCode.variable)}>
      <head>
        <script
          defer
          src={config.analytics.scriptUrl}
          data-website-id={config.analytics.websiteId}
        />
      </head>
      <body className='antialiased mx-4 mt-8 lg:mx-auto max-w-[210mm]'>
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
          <CurrentPageViews views={views} className='fixed bottom-2 right-2' />
        </main>
      </body>
    </html>
  )
}
