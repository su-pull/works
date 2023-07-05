import 'styles/global.scss'
import 'styles/syntax.scss'
import 'styles/mobile.scss'
import Layout from 'components/Layout'
import { Metadata } from 'next'
import PageRoot from 'components/PageRoot'
import { Analytics } from '@vercel/analytics/react'
import { Playfair_Display, Source_Serif_4, Italianno } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' })
const italianno = Italianno({ subsets: ['latin'], weight: '400', variable: '--footer' })
const source = Source_Serif_4({ subsets: ['latin'], weight: '400', variable: '--source' })

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
}

export const dynamicParams = false

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const font = playfair.className + ' ' + source.variable + ' ' + italianno.variable
  return (
    <html lang="en">
      <body className={font}>
        <Layout>
          <Analytics mode={'production'} />
          <PageRoot>{children}</PageRoot>
        </Layout>
      </body>
    </html>
  )
}
