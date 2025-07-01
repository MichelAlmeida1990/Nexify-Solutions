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
            ? 'bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 backdrop-blur-md border-b border-cyan-300/30 shadow-xl'
            : 'bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 backdrop-blur-sm',
          className
        )}
    >
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 xs:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 text-white">
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Go to home"
            >
              <Logo size="md" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAVIGATION.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-white/90 hover:text-white font-medium transition-colors relative group px-1 py-1"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <InternalThemeToggle />
            <div>
              <Button
                onClick={() => handleNavClick('#contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm lg:text-base"
              >
                Entre em Contato
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1 xs:space-x-2">
            <InternalThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-7 h-7 xs:w-8 xs:h-8"
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
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fechar menu"
            />
            {/* Drawer forçado com estilo inline */}
            <div
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                left: 'auto',
                width: '80vw',
                maxWidth: '320px',
                height: '100vh',
                zIndex: 9999,
                background: 'linear-gradient(135deg, rgba(14,165,233,0.7), rgba(34,211,238,0.7), rgba(52,211,153,0.7))',
                borderLeft: '2px solid rgba(34,211,238,0.3)',
                borderRadius: '1rem 0 0 1rem',
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <div style={{ padding: '1.5rem 1rem 0.5rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'white' }}>Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ padding: '0.5rem', borderRadius: '9999px', color: 'white', background: 'transparent', border: 'none', cursor: 'pointer' }}
                  aria-label="Fechar menu"
                >
                  <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav style={{ padding: '1rem', flex: 1 }}>
                {NAVIGATION.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.75rem 0.5rem', color: 'white', background: 'none', border: 'none', borderRadius: '0.5rem', fontWeight: 500, fontSize: '1.1rem', marginBottom: '0.25rem', cursor: 'pointer' }}
                  >
                    {item.label}
                  </button>
                ))}
                <div style={{ paddingTop: '0.5rem' }}>
                  <button
                    onClick={() => handleNavClick('#contact')}
                    style={{ width: '100%', background: '#2563eb', color: 'white', border: 'none', borderRadius: '0.5rem', padding: '0.75rem', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer' }}
                  >
                    Entre em Contato
                  </button>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Header 