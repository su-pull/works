import 'styles/global.scss'
import 'styles/syntax.scss'
import 'styles/mobile.scss'
import Layout from 'components/Layout'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import PageRoot from 'components/PageRoot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <PageRoot>{children}</PageRoot>
        </Layout>
      </body>
    </html>
  )
}
