import './globals.css'
import type { Metadata } from 'next'
import Navbar from './nav/Navbar'
import ToasterProvider from './providers/ToasterProvider'
import { getCurrentUser } from './actions/authActions'
import SignalRProvider from './providers/SignalRProvider'


export const metadata: Metadata = {
  title: 'CarsAuction',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <body>
      <ToasterProvider />
      <Navbar />
      <main className='container mx-auto px-5 pt-10'>
      <SignalRProvider user={user}>
            {children}
      </SignalRProvider>
      </main>
      </body>
    </html>
  )
}
