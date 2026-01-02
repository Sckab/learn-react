import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: {
    default: 'Learn React',
    template: '%s | Learn React',
  },
  description: 'These are all the projects i made for learning react',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col bg-shadow-grey-900'>
        <Header title='Learn React' />
        <main className='flex flex-1 flex-col items-center justify-center'>
          {children}
        </main>
      </body>
    </html>
  )
}
