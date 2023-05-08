import { NextRequest, ImageResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url as string)
  const hasTitle = searchParams.has('title')
  const title = hasTitle && searchParams.get('title')
  const hasDate = searchParams.has('date')
  const date = hasDate && searchParams.get('date')

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#fffffe',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            color: 'rgb(55 65 81)',
            fontSize: '24px',
            width: '100%',
            height: '100%',
            padding: '200px',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {title}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              fontSize: '24px',
              bottom: '20px',
              right: '40px',
            }}
          >
            {date}
          </div>
        </div>
      </div>
    )
  )
}
