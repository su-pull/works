'use client'

import React from 'react'
import { MagicStraight } from 'react-magic-card'
import styles from './styles.module.scss'

const MagicCard = () => {
  const images = [
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
    {
      src: '/6.jpeg',
      alt: 'sample',
    },
    {
      src: '/7.jpeg',
      alt: 'sample',
    },
    {
      src: '/8.jpeg',
      alt: 'sample',
    },
  ]

  return (
    <MagicStraight
      images={images}
      width={120}
      height={120}
      start={0}
      controller={50}
      reverseIndex={false}
      className={styles.margin}
      classImages={styles.shadow}
      classImageSelect={styles.select}
      selectOffsetX={160}
      margin={-30}
      delay={80}
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
      pickProperty={{ classPick: styles.shadow, white: true, alpha: 0.3, blur: 20, scale: 2, offset: 0 }}
    />
  )
}
export default MagicCard
