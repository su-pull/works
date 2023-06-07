---
title: 'react-page-fitter'
subtitle: 'simple ui style hook'
date: '2023-04-7'
---

used with React.

isFit is using useLayoutEffect for the block the browser from repainting the screen.
This is to get the window size on the client side.

It can create components like:

```tsx
import { useRef } from 'react'
import useFitter from 'react-page-fitter'

const Main = ({ children }) => {
  const ref = useRef(null)
  const isFit = useFitter(ref)

  return (
    <main ref={ref}>
      {children}
      {!isFit && <UiComponent />}
    </main>
  )
}

export default Main
```
