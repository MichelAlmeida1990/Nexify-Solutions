'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NAVIGATION, SITE_CONFIG } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { HeaderProps } from '@/types'
import { smoothScrollTo } from '@/lib/utils'
import { useTheme } from '@/contexts/theme-context'

// Componente ThemeToggle interno
const InternalThemeToggle: React.FC = () => {
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

const Header: React.FC<HeaderProps> = ({ className, transparent = false }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    smoothScrollTo(href, 80)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        transparent && !isScrolled
          ? 'bg-transparent'
          : 'bg-background/80 backdrop-blur-md border-b border-border/40',
        className
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img
              src="https://logo.clearbit.com/vercel.com"
              alt={SITE_CONFIG.name}
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold gradient-text">
              {SITE_CONFIG.name}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center">
            <InternalThemeToggle />
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('#contact')}
            >
              Contato
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
            >
              Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={cn(
                  'block w-5 h-0.5 bg-foreground transition-all duration-300',
                  isMobileMenuOpen && 'rotate-45 translate-y-1'
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 bg-foreground transition-all duration-300 mt-1',
                  isMobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 bg-foreground transition-all duration-300 mt-1',
                  isMobileMenuOpen && '-rotate-45 -translate-y-1'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/40"
            >
              <nav className="py-4 space-y-2">
                {NAVIGATION.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="px-4 pt-4 space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Contato
                  </Button>
                  <Button
                    className="w-full justify-start"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Orçamento
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header 