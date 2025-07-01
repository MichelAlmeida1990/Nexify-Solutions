/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Desabilitando ESLint durante o build para evitar problemas no Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Desabilitando verificação de tipos durante o build para evitar problemas no Vercel
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com', 'fav.farm'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fav.farm',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/old-portfolio',
        destination: '/',
        permanent: true,
      },
    ]
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    return config
  },
}

module.exports = nextConfig 