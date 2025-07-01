'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { NAVIGATION } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { HeaderProps } from '@/types'
import { smoothScrollTo } from '@/lib/utils'
import { useTheme } from '@/contexts/theme-context'
import { Logo } from '@/components/ui/logo'

// Componente ThemeToggle interno
const InternalThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-accent transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  )
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    smoothScrollTo(href)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
              className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-indigo-900/90 backdrop-blur-md border-b border-blue-500/30 shadow-xl'
            : 'bg-gradient-to-r from-blue-900/70 via-purple-900/70 to-indigo-900/70 backdrop-blur-sm',
          className
        )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 text-white"
          >
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center"
              aria-label="Go to home"
            >
              <Logo size="md" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-white/90 hover:text-white font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <InternalThemeToggle />
            <div>
              <Button
                onClick={() => handleNavClick('#contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Entre em Contato
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <InternalThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm"
          >
            <nav className="py-4 space-y-2">
              {NAVIGATION.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-white/90 hover:text-white hover:bg-white/20 rounded-md transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Entre em Contato
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 