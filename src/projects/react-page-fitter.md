---
title: 'react-page-fitter'
subtitle: 'simple ui style hook'
date: '2023-04-7'
---

If your site has a consistent design and layout, you don't need to use this hook.  
It can also be used with Next.js App Router and other React frameworks.

```tsx
import useFitter, { Main } from 'react-page-fitter'

const PageRoot = ({ children }: { children: React.ReactNode }) => {
  const isFit = useFitter()
  if (isFit === undefined) return <Spinner />
  return (
    <Main location={pathname} classFitIn="fit_in" classFitOut="fit_out">
      {children}
    </Main>
  )
}

export default PageRoot
```

isFit is using useLayoutEffect for the block the browser from repainting the screen.
This is to get the window size on the client side.
So it needs to be calculated on the client side for a bit, so use the loading UI.
Use alternative component while the variable is undefined on the client side.

```tsx
if (isFit === undefined) return <Spinner />
```

And just using hooks can create components like this.

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

export default Article
```
