import React from 'react'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Services from '@/components/sections/services'
import Portfolio from '@/components/sections/portfolio'
import Testimonials from '@/components/sections/testimonials'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Transforme seu negócio com soluções digitais inovadoras"
        subtitle="Nexify Solutions"
        description="Desenvolvimento web, aplicativos mobile, integração de sistemas e UI/UX design. Transformamos ideias em realidade digital."
        ctaText="Conheça nossos projetos"
        ctaHref="#portfolio"
        secondaryCtaText="Fale conosco"
        secondaryCtaHref="#contact"
      />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  )
} 