import { Providers } from '@/providers'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'SandFly',
//   description: 'System for sharing research information on leishmaniasis.'
// }

// Criar o Contex
// https://youtu.be/0_rNpDylwB8

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
