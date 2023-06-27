'use client'

import React from 'react'
import { MagicCircle } from 'react-magic-card'
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
    <MagicCircle
      classImage={styles.shadow}
      data={images}
      dynamic
      start={4}
      radius={200}
      width={120}
      height={120}
      controller={200}
      animate={{
        scale: 0.8,
        rotateX: 70,
        rotateY: 40,
        rotateZ: -50,
        selectScale: 1.6,
        selectRotateX: 40,
        selectRotateY: 40,
        selectRotateZ: -10,
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
      transition={{ duration: 0.2, type: 'spring', damping: 9, stiffness: 400 }}
      wheelDelay={60}
    />
  )
}

export default MagicCard
