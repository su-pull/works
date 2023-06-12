import { ReactNode } from 'react'
import styles from './styles.module.scss'

type PageRootProps = {
  children: ReactNode
}

const PageRoot = ({ children }: PageRootProps) => {
  return <main className={styles.pages_root}>{children}</main>
}

export default PageRoot
