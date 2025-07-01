'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface HeroProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Typewriter effect state
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 150 // Faster when deleting
    const deleteSpeed = 50

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < title.length) {
          setDisplayText(title.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          setDisplayText(title.slice(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          // Reset for next cycle
          setIsDeleting(false)
          setDisplayText('')
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timer)
  }, [currentIndex, isDeleting, title])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-background relative">
      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white mb-4 font-medium"
          >
            {subtitle}
          </motion.p>

          {/* Main Title with Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[1.2em] flex items-center justify-center -mt-8"
          >
            <span className="gradient-text">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection(ctaHref)}
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg"
            >
              {ctaText}
            </Button>
            
            {secondaryCtaText && secondaryCtaHref && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection(secondaryCtaHref)}
                className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-white/10 backdrop-blur-sm"
              >
                {secondaryCtaText}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 