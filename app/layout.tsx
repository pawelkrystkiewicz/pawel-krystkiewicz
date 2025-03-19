import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Fira_Code, Manrope } from 'next/font/google'
import Footer from './components/footer'
import { Navbar } from './components/nav'
import './global.css'
import { baseUrl } from './sitemap'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx('text-black bg-white dark:text-white dark:bg-black', manrope.variable, firaCode.variable)}>
      <body className="antialiased mx-4 mt-8 lg:mx-auto" style={{ maxWidth: '210mm' }}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
