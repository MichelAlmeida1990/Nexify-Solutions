'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/theme-context'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-accent transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          scale: [1, 0.8, 1],
          rotate: theme === 'light' ? 0 : 180,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="relative w-5 h-5"
      >
        {/* Sun Icon */}
        <motion.svg
          className="absolute inset-0 w-5 h-5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          initial={{ opacity: 0 }}
          animate={{ opacity: theme === 'light' ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </motion.svg>

        {/* Moon Icon */}
        <motion.svg
          className="absolute inset-0 w-5 h-5 text-blue-400"
          fill="currentColor"
          viewBox="0 0 24 24"
          initial={{ opacity: 0 }}
          animate={{ opacity: theme === 'dark' ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
        </motion.svg>
      </motion.div>
    </motion.button>
  )
}

export { ThemeToggle } 