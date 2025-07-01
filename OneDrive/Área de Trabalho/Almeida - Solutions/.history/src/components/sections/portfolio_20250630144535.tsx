'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PORTFOLIO_PROJECTS } from '@/lib/constants'
import { ProjectCardProps } from '@/types'

// Componente Sparkle
const Sparkle = () => (
  <motion.svg
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
    transition={{ duration: 1.2, repeat: Infinity, delay: Math.random() }}
    className="absolute"
    width="24" height="24" viewBox="0 0 24 24" fill="none"
    style={{ pointerEvents: 'none' }}
  >
    <path d="M12 2L13.09 8.26L19 9.27L14.5 13.14L15.82 19.02L12 15.77L8.18 19.02L9.5 13.14L5 9.27L10.91 8.26L12 2Z" fill="#fbbf24"/>
  </motion.svg>
)

const ProjectCard: React.FC<ProjectCardProps & { index?: number }> = ({ project, className, showDetails = false, index = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
        whileTap={{ scale: 0.97 }}
        className={className}
      >
        <motion.div
          className="relative group bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-zinc-800 transition-transform hover:scale-105 hover:shadow-2xl duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {/* Sparkles ao redor do card */}
          <div className="pointer-events-none">
            <Sparkle style={{ top: 8, left: 12 }} />
            <Sparkle style={{ top: 16, right: 16 }} />
            <Sparkle style={{ bottom: 12, left: 24 }} />
            <Sparkle style={{ bottom: 16, right: 8 }} />
          </div>
          <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setIsModalOpen(true)}>
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title + ' - Projeto de soluções digitais'}
                className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300 border border-gray-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="secondary" size="sm">
                  Ver Detalhes
                </Button>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Highlights */}
              {showDetails && (
                <div>
                  <h4 className="font-medium mb-2 text-sm text-muted-foreground">Destaques:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                {project.demoUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.demoUrl, '_blank')
                    }}
                  >
                    Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.githubUrl, '_blank')
                    }}
                  >
                    GitHub
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title + ' - Projeto de soluções digitais'}
                  className="w-full h-64 object-cover rounded-t-lg shadow-lg border border-gray-200"
                />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Funcionalidades:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Resultados:</h3>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-primary mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Tecnologias utilizadas:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <Button
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      className="flex-1"
                    >
                      Ver Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1"
                    >
                      Ver Código
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
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
            Nosso <span className="gradient-text">Portfólio</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Projetos que demonstram nossa expertise e compromisso com a qualidade. 
            Cada projeto é desenvolvido com foco na experiência do usuário e resultados mensuráveis.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 pt-16 border-t border-border/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Gostou dos nossos projetos?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vamos criar algo incrível juntos! Entre em contato para discutir seu projeto.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="text-lg px-8 py-4"
          >
            Iniciar Projeto
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 