'use client'

import { MagicCircle } from 'react-magic-card'
import styles from './styles.module.scss'

const MagicCard = () => {
  const images1 = [
    {
      src: '/1.jpeg',
      alt: 'sample',
    },
    {
      src: '/5.jpeg',
      alt: 'sample',
    },
    {
      src: '/4.jpeg',
      alt: 'sample',
    },
    {
      src: '/7.jpeg',
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
  const resultArray = time > 17 || time < 5 ? images1 : images2

  return (
    <MagicCircle
      className={styles.component}
      classImages={styles.shadow}
      images={resultArray}
      dynamic
      start={1}
      radius={200}
      width={120}
      height={120}
      controller={40}
      loading="lazy"
      animate={{
        scale: 0.8,
        rotateX: 20,
        rotateY: 20,
        rotateZ: -10,
        selectScale: 1.6,
        selectRotateX: 20,
        selectRotateY: 20,
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
      transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
      pickProperty={{ classPick: styles.shadow }}
      delay={60}
    />
  )
}

export default MagicCard
