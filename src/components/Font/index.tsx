'use client'
import { Playfair_Display, Source_Serif_Pro, Italianno } from 'next/font/google'

const italianno = Italianno({ subsets: ['latin'], weight: '400' })
const other = Playfair_Display({ subsets: ['latin'], weight: '400' })
const source = Source_Serif_Pro({ subsets: ['latin'], weight: '400' })
const GlobalFont = (): JSX.Element => {
  const main = `${other.style.fontFamily}, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Helvetica Neue';`
  return (
    <style jsx global>
      {`
        html {
          font-family: ${main};
        }
        code {
          font-family: ${source.style.fontFamily}, 'ui-monospace', 'monospace';
        }
        p code {
          font-family: ${main};
        }
        footer {
          font-family: ${italianno.style.fontFamily};
        }
      `}
    </style>
  )
}

export default GlobalFont
