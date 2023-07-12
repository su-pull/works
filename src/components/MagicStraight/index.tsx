'use client'

import React from 'react'
import { MagicStraight } from 'react-magic-card'
import styles from './styles.module.scss'

const MagicCard = () => {
  const images1 = [
    {
      src: '/1.jpeg',
      alt: 'sample',
    },
    {
      src: '/2.jpeg',
      alt: 'sample',
    },
    {
      src: '/3.jpeg',
      alt: 'sample',
    },
    {
      src: '/4.jpeg',
      alt: 'sample',
    },
    {
      src: '/5.jpeg',
      alt: 'sample',
    },
  ]

  const images2 = [
    {
      src: '/illust/o1.jpg',
      alt: 'sample',
    },
    {
      src: '/illust/o2.jpg',
      alt: 'sample',
    },
    {
      src: '/illust/o3.jpg',
      alt: 'sample',
    },
  ]

  const time = new Date().getHours()
  const resultArray = time > 17 || time < 5 ? images2 : images1

  return (
    <MagicStraight
      images={resultArray}
      width={120}
      height={120}
      start={0}
      controller={40}
      reverseIndex={false}
      loading="lazy"
      className={styles.component}
      classImages={styles.shadow}
      classImageSelect={styles.select}
      selectOffsetX={200}
      selectOffsetY={-150}
      margin={-30}
      delay={50}
      animate={{
        scale: 0.8,
        rotateX: 20,
        rotateY: -20,
        rotateZ: 0,
        opacity: 1,
        selectScale: 1,
        selectRotateX: 0,
        selectRotateY: 0,
        selectRotateZ: 0,
      }}
      initial={{
        scale: 0.8,
        rotateX: 70,
        rotateY: 40,
        rotateZ: -50,
        selectScale: 1.6,
        selectRotateX: 40,
        selectRotateY: 40,
        selectRotateZ: -10,
      }}
      transition={{ duration: 1.4, type: 'spring', mass: 0.2 }}
      pickTransition={{ duration: 0.2, type: 'spring', mass: 1 }}
      pickProperty={{ classPick: styles.shadow, white: false, alpha: 0.2, blur: 20, scale: 2, offset: 0 }}
    />
  )
}
export default MagicCard
