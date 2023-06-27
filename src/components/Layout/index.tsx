import type { ReactNode } from 'react'
import Footer from 'components/Footer'
import SideLink from 'components/SideLink'
import ScrollToTop from 'components/ScrollToTop'
import { LazyWrap } from './LazyWrap'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LazyWrap>
      <SideLink />
      {children}
      <Footer />
      <ScrollToTop />
    </LazyWrap>
  )
}

export default Layout
