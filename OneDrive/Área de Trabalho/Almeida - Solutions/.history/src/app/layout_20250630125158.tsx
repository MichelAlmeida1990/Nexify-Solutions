import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Michel Almeida Solutions - Desenvolvimento Web e Aplicativos',
    template: '%s | Michel Almeida Solutions'
  },
  description: 'Desenvolvedor Front-End especializado em criação de interfaces intuitivas e funcionais. Projetos: Sistema de Gestão Escolar, Aplicativo de Academia e mais.',
  keywords: [
    'desenvolvimento web',
    'aplicativos',
    'front-end',
    'react',
    'next.js',
    'typescript',
    'tailwind css',
    'michel almeida',
    'gestão escolar',
    'aplicativo academia'
  ],
  authors: [{ name: 'Michel Almeida' }],
  creator: 'Michel Almeida',
  publisher: 'Michel Almeida Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://michel-almeida-solutions.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://michel-almeida-solutions.vercel.app',
    title: 'Michel Almeida Solutions - Desenvolvimento Web e Aplicativos',
    description: 'Desenvolvedor Front-End especializado em criação de interfaces intuitivas e funcionais.',
    siteName: 'Michel Almeida Solutions',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Michel Almeida Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michel Almeida Solutions - Desenvolvimento Web e Aplicativos',
    description: 'Desenvolvedor Front-End especializado em criação de interfaces intuitivas e funcionais.',
    images: ['https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80'],
    creator: '@MichelAlmeida1990',
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
        <Header transparent />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 