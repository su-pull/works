---
title: 'react-page-fitter'
subtitle: 'simple ui style hook'
date: '2023-04-7'
---

It has been confirmed to work with Remix and Next.js pages root.
The Next.js beta app route has rendering flickering.
Next.js pages root has rendering very stable, no need to check for undefined.
If you experience flicker, please report it to me.

## create component

```tsx {3}
import { ReactNode, useRef } from 'react'
import useFitter from 'react-page-fitter'
import { usePathname } from 'next/navigation'

type MainProps = {
  children: ReactNode
  classFitIn: string
  classFitOut: string
  className: string
}

const Main = ({ children, classFitIn, classFitOut, className }: MainProps) => {
  const ref = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const isFit = useFitter(ref, pathname)
  const classApply = isFit ? classFitIn : classFitOut
  const classes = className + ' ' + classApply
  return (
    <main ref={ref} className={classes}>
      {children}
    </main>
  )
}
export default Main
```

## use how to component

```tsx
import useFitter, { Main } from 'react-page-fitter'

const PageRoot = ({ children }: { children: React.ReactNode }) => {
  const isFit = useFitter()

  return (
    <>
      {isFit !== undefined && (
        <Main className="pages_root" classFitIn="fit_in" classFitOut="fit_out">
          {children}
        </Main>
      )}
    </>
  )
}

export default PageRoot
```

## CSS

```css {2, 9}
.fit_in {
  position: absolute;
  inset: 0%;
  margin: auto;
  width: fit-content;
  height: fit-content;
}
```

```css {2}
.fit_out {
  position: relative;
}
```
