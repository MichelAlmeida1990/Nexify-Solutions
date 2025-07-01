'use client'

import React, { useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { HeroProps } from '@/types'
import { loadSlim } from 'tsparticles-slim'
import { Engine } from 'tsparticles-engine'
import Particles from 'react-particles'

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  image,
  particles = true,
}) => {
  const [ref, inView] = useInView({
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      {particles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#3b82f6',
              },
              links: {
                color: '#3b82f6',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          ref={particlesRef}
        />
      )}

      {/* Estrela central interativa */}
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer bg-transparent" onClick={handleStarClick} aria-label="Gerar Galáxia">
        {/* SVG de estrela sofisticada */}
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#glow)">
            <polygon points="80,20 96,64 144,64 104,96 120,140 80,112 40,140 56,96 16,64 64,64" fill="#e0e7ef" stroke="#a3bffa" strokeWidth="3"/>
            <line x1="80" y1="10" x2="80" y2="30" stroke="#fff" strokeWidth="2"/>
            <line x1="80" y1="150" x2="80" y2="130" stroke="#fff" strokeWidth="2"/>
            <line x1="10" y1="80" x2="30" y2="80" stroke="#fff" strokeWidth="2"/>
            <line x1="150" y1="80" x2="130" y2="80" stroke="#fff" strokeWidth="2"/>
            <circle cx="80" cy="80" r="60" stroke="#a3bffa" strokeWidth="1" fill="none" opacity="0.3"/>
            <circle cx="80" cy="80" r="75" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.15"/>
            <circle cx="80" cy="80" r="2" fill="#fff"/>
            <circle cx="120" cy="40" r="1.5" fill="#fff"/>
            <circle cx="40" cy="120" r="1.5" fill="#fff"/>
            <circle cx="120" cy="120" r="1" fill="#fff"/>
            <circle cx="40" cy="40" r="1" fill="#fff"/>
          </g>
          <defs>
            <filter id="glow" x="0" y="0" width="160" height="160" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
        <span className="mt-2 text-xs text-blue-700 font-semibold animate-pulse">Clique na estrela para gerar uma galáxia!</span>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">{title}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium"
          >
            {subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection(ctaHref)}
              className="text-lg px-8 py-4"
            >
              {ctaText}
            </Button>
            
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/20"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-foreground/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 