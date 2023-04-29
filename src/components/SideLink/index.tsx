'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import Link from 'next/link'

const SideLink = () => {
  const linkArr = [
    {
      title: 'Generated',
      slug: '/',
    },
    {
      title: 'Biography',
      slug: 'https://www.su-pull.net',
    },
  ]
  const [isHover, setIsHover] = useState('')

  return (
    <div className={styles.side_fixed}>
      <ul className={styles.ul_box}>
        {linkArr.map(({ slug, title }) => (
          <motion.li
            animate={{
              x: isHover == slug ? 100 : 0,
              fontSize: isHover == slug ? '14px' : '10px',
              height: isHover == slug ? '80px' : '40px',
              transition: {
                x: {
                  delay: 0,
                  duration: 0.1,
                },
                fontSize: {
                  delay: 0.2,
                  duration: 0.2,
                },
                height: {
                  delay: 0.2,
                  duration: 0.2,
                },
              },
            }}
            className={styles.list_box}
            key={slug}
            onMouseEnter={() => setIsHover(slug)}
            onMouseLeave={() => setIsHover('')}
          >
            <Link className={styles.link_box} href={slug}>
              {title}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default SideLink
