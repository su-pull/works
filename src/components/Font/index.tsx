'use client'
import { Source_Serif_Pro, Italianno } from 'next/font/google'

const italianno = Italianno({ subsets: ['latin'], weight: '400' })

const source = Source_Serif_Pro({ subsets: ['latin'], weight: '400' })
const GlobalFont = (): JSX.Element => {
  return (
    <style jsx global>
      {`
        code {
          font-family: ${source.style.fontFamily}, 'ui-monospace', 'monospace';
        }
        footer {
          font-family: ${italianno.style.fontFamily};
        }
      `}
    </style>
  )
}

export default GlobalFont
