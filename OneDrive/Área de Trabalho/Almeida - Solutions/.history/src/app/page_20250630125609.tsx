import React from 'react'
import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'
import Portfolio from '@/components/sections/portfolio'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Michel Almeida Solutions"
        subtitle="Desenvolvimento Web e Aplicativos Profissionais"
        description="Transformando ideias em soluções digitais inovadoras. Especializado em sistemas de gestão escolar, aplicativos mobile e integração de sistemas."
        ctaText="Ver Projetos"
        ctaHref="#portfolio"
        secondaryCtaText="Falar Conosco"
        secondaryCtaHref="#contact"
        particles={true}
      />
      
      <Services />
      <Portfolio />
      
      {/* Contact Section - Temporário */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vamos transformar sua ideia em realidade. Entre em contato para um orçamento personalizado.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg border shadow-soft p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome *</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem *</label>
                  <textarea 
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Conte-nos sobre seu projeto..."
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 