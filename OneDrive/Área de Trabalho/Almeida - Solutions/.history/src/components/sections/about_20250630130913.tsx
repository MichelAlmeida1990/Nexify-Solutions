'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SKILLS } from '@/lib/constants'
import { SkillCardProps } from '@/types'

const SkillCard: React.FC<SkillCardProps & { index?: number }> = ({ category, skills, className, index = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    tools: 'Ferramentas',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
      whileTap={{ scale: 0.97 }}
      className={className + ' cursor-pointer'}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                {category === 'frontend' && (
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                )}
                {category === 'backend' && (
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                )}
                {category === 'mobile' && (
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                )}
                {category === 'tools' && (
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                )}
              </svg>
            </div>
            {categoryLabels[category]}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor apaixonado por criar soluções digitais que fazem a diferença
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Michel Almeida</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Desenvolvedor Front-End com mais de 5 anos de experiência criando interfaces 
                intuitivas e funcionais para web e mobile.
              </p>
              <p className="text-muted-foreground mb-6">
                Especializado em React, Next.js, TypeScript e desenvolvimento mobile, 
                tenho uma paixão por transformar ideias em soluções digitais inovadoras 
                que realmente fazem a diferença para os usuários e negócios.
              </p>
            </div>

            {/* Diferenciais */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Meus Diferenciais:</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium">Experiência Comprovada</h5>
                    <p className="text-sm text-muted-foreground">Mais de 50 projetos entregues com sucesso</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium">Foco em Resultados</h5>
                    <p className="text-sm text-muted-foreground">Soluções que geram valor real para o negócio</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium">Tecnologias Modernas</h5>
                    <p className="text-sm text-muted-foreground">Sempre atualizado com as melhores práticas</p>
                  </div>
                </div>
              </div>
            </div>

            <Button onClick={scrollToContact} className="mt-6">
              Vamos Conversar
            </Button>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Minhas Habilidades</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(SKILLS).map(([category, skills], index) => (
                <SkillCard
                  key={category}
                  category={category as keyof typeof SKILLS}
                  skills={skills}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border/20"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Suporte Disponível</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 