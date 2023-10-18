import { Suspense } from 'react'
import './globals.css'
import { Gabarito } from 'next/font/google'
import Loading from './loading'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Topman | Software Engineer',
  description: 'Topman',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
