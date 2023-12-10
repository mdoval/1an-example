import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ejemplo 1 a N',
  description: 'Generado por nubecosmica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
