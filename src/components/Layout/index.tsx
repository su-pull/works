import type { ReactNode } from 'react'
import Footer from 'components/Footer'
import SideLink from 'components/SideLink'
import ScrollToTop from 'components/ScrollToTop'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SideLink />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Layout
