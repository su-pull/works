import 'styles/global.scss'
import 'styles/syntax.scss'
import 'styles/mobile.scss'
import Layout from 'components/Layout'
import { Metadata } from 'next'
import PageRoot from 'components/PageRoot'
import Font from 'components/Font'
import { Analytics } from '@vercel/analytics/react'
import { Playfair_Display } from 'next/font/google'

const mainFont = Playfair_Display({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <Layout>
          <Font />
          <Analytics mode={'production'} />
          <PageRoot>{children}</PageRoot>
        </Layout>
      </body>
    </html>
  )
}
