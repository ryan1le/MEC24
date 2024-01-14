import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'

const inter = Roboto({
  subsets: ['latin'],
  weight: '500' 
})

export const metadata: Metadata = {
  title: 'FROGGEMEDIX',
  description: 'Medicine Dispenser Web App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
