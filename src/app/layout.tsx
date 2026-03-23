import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'Convenios Ambientales | Basilea, Estocolmo y Rotterdam',
  description: 'Conoce los principales convenios internacionales para la protección del medio ambiente: Basilea, Estocolmo y Rotterdam. Aprende sobre la gestión de residuos peligrosos y la protección de nuestro planeta.',
  generator: 'v0.app',
  icons: {
    icon: {
      url: '/logo.svg',
      type: 'image/svg+xml',
    },
    apple: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
