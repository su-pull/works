---
title: 'react-page-fitter'
subtitle: 'simple ui style hook'
date: '2023-04-7'
---

It can also be used with Next.js App Router and other React frameworks.

```tsx
import useFitter, { Main } from 'react-page-fitter'

const PageRoot = ({ children }: { children: React.ReactNode }) => {
  const { isRendering } = useFitter()

  return (
    <>
      {isRendering !== undefined && (
        <Main classFitIn="fit_in" classFitOut="fit_out">
          {children}
        </Main>
      )}
    </>
  )
}

export default PageRoot
```

If you put boolean in the initial value, style FOCU will always occur, but FOCU of reloading by styles toggle is prevented by setting undefined as the initial value and not displaying it during undefined.
This is because the DOM is constructed and then computed before it is rendered.

At the moment this needs to be wrapped around a component and I hope to integrate it into the library in the future.

And just by using hooks you can create components like this.

```tsx {19}
import { useRef } from 'react'
import useFitter from 'react-page-fitter'
import { usePathname } from 'next/navigation'

const Article = ({ children, classFitIn, classFitOut, className }) => {
  const ref = useRef(null)
  const pathname = usePathname()
  const { isFit } = useFitter(ref, pathname)

  return (
    <article ref={ref} className={isFit ? classFitIn : classFitOut}>
      {children}
    </article>
  )
}

export default Main
```
