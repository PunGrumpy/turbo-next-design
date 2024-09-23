import '@repo/ui/globals.css'

import { cn } from '@repo/ui/lib/utils'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Next.js 15 with Turborepo and shadcn/ui',
  description:
    'A modern web application using Next.js 15, Turborepo, and shadcn/ui'
}

export const viewport: Viewport = {
  width: 'device-width',
  maximumScale: 1,
  viewportFit: 'cover'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'bg-background min-h-screen font-sans antialiased'
        )}
      >
        <div className="bg-background relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
