import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
        url: '/images/og-image.jpg',
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
    images: ['/images/og-image.jpg'],
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
} 