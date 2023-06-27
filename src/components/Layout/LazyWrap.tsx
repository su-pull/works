'use client'

import React, { ReactNode } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'

type LazyWrapProps = {
  children: ReactNode
}

export const LazyWrap = ({ children }: LazyWrapProps) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
