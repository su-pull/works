'use client'

import { ReactNode, useRef } from 'react'
import styles from './styles.module.scss'
import ScrollToTop from 'components/ScrollToTop'
import useFitter from 'react-page-fitter'

type PageRootProps = {
  children: ReactNode
}

const PageRoot = ({ children }: PageRootProps) => {
  const ref = useRef(null)
  const isFit = useFitter(ref)
  return (
    <main className={styles.pages_root} ref={ref}>
      {children}
      {!isFit && <ScrollToTop />}
    </main>
  )
}

export default PageRoot
