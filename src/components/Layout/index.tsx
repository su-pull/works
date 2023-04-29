import type { ReactNode } from 'react'
import Footer from 'components/Footer'
import SideLink from 'components/SideLink'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SideLink />
      {children}
      <Footer />
    </>
  )
}

export default Layout
