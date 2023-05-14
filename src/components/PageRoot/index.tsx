'use client'

import type { ReactNode } from 'react'
import styles from './styles.module.scss'
import useFitter, { Main } from 'react-page-fitter'
import { usePathname } from 'next/navigation'

type PageRootProps = {
  children: ReactNode
}

const PageRoot = ({ children }: PageRootProps) => {
  const pathname = usePathname()
  const isFit = useFitter()

  if (isFit === undefined) return <div className={styles.spinner} />

  return (
    <Main location={pathname} className={styles.pages_root} classFitIn={styles.fit_in} classFitOut={styles.fit_out}>
      {children}
    </Main>
  )
}

export default PageRoot
