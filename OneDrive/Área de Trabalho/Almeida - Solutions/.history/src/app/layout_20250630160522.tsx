import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { ThemeProviderWrapper } from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Nexify Solutions - Soluções Digitais Inovadoras',
    template: '%s | Nexify Solutions'
  },
  description: 'Transforme seu negócio com soluções digitais inovadoras. Desenvolvimento web, aplicativos mobile, integração de sistemas e UI/UX design.',
  keywords: ['desenvolvimento web', 'aplicativos mobile', 'soluções digitais', 'tecnologia', 'inovação', 'startup', 'empresa'],
  authors: [{ name: 'Nexify Solutions' }],
  creator: 'Nexify Solutions',
  publisher: 'Nexify Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nexify-solutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://nexify-solutions.com',
    title: 'Nexify Solutions - Soluções Digitais Inovadoras',
    description: 'Transforme seu negócio com soluções digitais inovadoras. Desenvolvimento web, aplicativos mobile, integração de sistemas e UI/UX design.',
    siteName: 'Nexify Solutions',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Nexify Solutions - Soluções Digitais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexify Solutions - Soluções Digitais Inovadoras',
    description: 'Transforme seu negócio com soluções digitais inovadoras.',
    images: ['https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="https://fav.farm/🧑‍💻" />
        <link rel="apple-touch-icon" href="https://fav.farm/🧑‍💻" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProviderWrapper>
          <Header transparent />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
} 