import { Italianno } from 'next/font/google'
import styles from './styles.module.scss'

const italianno = Italianno({ subsets: ['latin'], weight: '400' })

const Footer = () => {
  const apply = styles.footer_main + ' ' + italianno.className
  return (
    <footer className={apply}>
      <div className={styles.footer_text}>{'2023 © self '}</div>
    </footer>
  )
}

export default Footer
