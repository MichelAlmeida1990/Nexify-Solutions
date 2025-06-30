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
        {/* SVG de estrela colorida e vibrante, sem fundo */}
        <svg width="140" height="140" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="starGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stop-color="#fffbe6"/>
              <stop offset="60%" stop-color="#fbbf24"/>
              <stop offset="100%" stop-color="#f59e42"/>
            </radialGradient>
            <filter id="starGlow" x="-20" y="-20" width="104" height="104" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="6" result="glow"/>
              <feMerge>
                <feMergeNode in="glow"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <polygon filter="url(#starGlow)" points="32,6 39.09,20.36 54,22.18 43,32.9 45.18,48 32,40.27 18.82,48 21,32.9 10,22.18 24.91,20.36" fill="url(#starGradient)" stroke="#f59e42" stroke-width="2"/>
        </svg>
        <span className="mt-2 text-xs text-yellow-700 font-semibold animate-pulse">Clique na estrela para gerar uma galáxia!</span>
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
    </section>
  )
}

export default Hero 