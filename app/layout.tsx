import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import AppProviders from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ReAmplify - Transform Your Content, Amplify Your Reach',
  description: 'Automatically repurpose your existing content into engaging social media posts, catchy headlines, and more with the power of AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
<AppProviders>
      <html lang="en">
        <body className={inter.className}>
          <header>
            <Navbar />
          </header>
          <main className="bg-gradient-to-br from-indigo-50 to-cyan-50">
            {children}
          </main>
        </body>
      </html>
      </AppProviders>
  )
}

