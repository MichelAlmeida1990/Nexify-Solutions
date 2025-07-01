'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NAVIGATION, SITE_CONFIG } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { HeaderProps } from '@/types'
import { smoothScrollTo } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/theme-toggle'

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
            <ThemeToggle />
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