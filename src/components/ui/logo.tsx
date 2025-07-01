'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, textSize: 'text-sm' },
    md: { width: 40, height: 40, textSize: 'text-lg' },
    lg: { width: 48, height: 48, textSize: 'text-xl' }
  }

  const { width, height, textSize } = sizes[size]

  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Logo SVG */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" stroke="currentColor" strokeWidth="2" className="text-white dark:text-gray-900" />
        
        {/* Stylized "N" */}
        <path
          d="M12 28L16 12L20 20L24 12L28 28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Connection dots */}
        <circle cx="16" cy="12" r="1.5" fill="white" />
        <circle cx="24" cy="12" r="1.5" fill="white" />
        <circle cx="20" cy="20" r="1.5" fill="white" />
      </svg>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className={`font-bold text-foreground ${textSize}`}>
          Nexify
        </span>
        <span className="text-xs text-muted-foreground font-medium">
          Solutions
        </span>
      </div>
    </motion.div>
  )
} 