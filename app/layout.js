import { Suspense } from 'react'
import './globals.css'
import { Gabarito } from 'next/font/google'
import Preloader from './Preloader.jsx'
const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://topman.vercel.app/'),
  title: 'Tope | Software Engineer',
  description: 'Hi👋, I build web applications!',
  keywords: "software engineer, web developer, mobile app developer, React, Node.js, Next, MongoDB, scalable applications, user experience, backend, frontend, full-stack developer",
  openGraph: {
    title: 'Tope | Software Engineer',
    description: 'Hi👋, I build web applications!',
    url: 'https://topman.vercel.app/',
    siteName: 'Tope | Software Engineer',
    icons: {
      icon: "/icon.svg",
    },
    images: [
      {
        url: 'https://topman.vercel.app/opengraph-image.png', 
        width: 800,
        height: 600,
      },
      {
        url: 'https://topman.vercel.app/twitter-image.png',
        width: 1800,
        height: 1600,
        alt: 'Twitter Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
      <link rel="icon" href="/icon.png" sizes="any" />
        <Suspense fallback={<Preloader />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
