'use client'

import React, { useState } from 'react'
import styles from './styles.module.scss'
import useFitter from 'react-page-fitter'
import { m } from 'framer-motion'

export const PageFitter = () => {
  const isFit = useFitter('.' + styles.inner, '/')
  const [count, setCount] = useState(0)

  return (
    <div className={styles.outer}>
      <button onClick={() => setCount(count + 200)}>scale in</button>
      <button onClick={() => setCount(count - 200)}>scale out</button>
      {isFit === true ? 'true' : 'false'}
      <m.div
        animate={{
          position: 'absolute',
          right: count > 100 ? 0 : 200,
        }}
        className={styles.inner}
        style={{ width: count, height: count }}
      ></m.div>
    </div>
  )
}
