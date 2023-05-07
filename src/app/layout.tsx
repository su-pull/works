import 'styles/global.scss'
import 'styles/syntax.scss'
import 'styles/mobile.scss'
import Layout from 'components/Layout'
import { Metadata } from 'next'
import PageRoot from 'components/PageRoot'
import Font from 'components/Font'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <Font />
          <PageRoot>{children}</PageRoot>
        </Layout>
      </body>
    </html>
  )
}
