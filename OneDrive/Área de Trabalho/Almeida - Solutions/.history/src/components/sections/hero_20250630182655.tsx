'use client'

import React, { useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { HeroProps } from '@/types'
import { loadSlim } from 'tsparticles-slim'
import { Engine } from 'tsparticles-engine'
import { Typewriter } from 'react-simple-typewriter'

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}) => {
  const [, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const particlesRef = useRef<any>(null)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Função para gerar partículas extras ao clicar na estrela
  const handleStarClick = () => {
    if (particlesRef.current) {
      particlesRef.current.loadParticlesOptions({
        particles: {
          number: { value: 120 },
          move: { speed: 2 },
          color: { value: ['#fbbf24', '#f472b6', '#60a5fa', '#a78bfa'] },
        },
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center py-16">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
        >
          <span className="gradient-text">
            <Typewriter
              words={[title]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </span>
        </motion.h1>
        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium"
          >
            {subtitle}
          </motion.p>
        )}
        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {ctaText && (
            <Button
              size="lg"
              onClick={() => scrollToSection(ctaHref)}
              className="text-lg px-8 py-4"
            >
              {ctaText}
            </Button>
          )}
          {secondaryCtaText && secondaryCtaHref && (
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection(secondaryCtaHref)}
              className="text-lg px-8 py-4"
            >
              {secondaryCtaText}
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 