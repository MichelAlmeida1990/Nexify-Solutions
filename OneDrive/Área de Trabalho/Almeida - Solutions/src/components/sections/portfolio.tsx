'use client'

import React from 'react'
import { motion, AnimatePresence, SVGMotionProps } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PORTFOLIO_PROJECTS } from '@/lib/constants'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

const Sparkle = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg
    {...props}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
    transition={{ duration: 1.2, repeat: Infinity, delay: Math.random() }}
    className={"absolute pointer-events-none " + (props.className || "")}
    width="24" height="24" viewBox="0 0 24 24" fill="none"
  >
    <path d="M12 2L13.09 8.26L19 9.27L14.5 13.14L15.82 19.02L12 15.77L8.18 19.02L9.5 13.14L5 9.27L10.91 8.26L12 2Z" fill="#fbbf24"/>
  </motion.svg>
)

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState<any>(null)

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Portfólio <span className="gradient-text">Destaque</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Confira alguns dos projetos mais recentes e relevantes desenvolvidos pela nossa equipe.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
              whileTap={{ scale: 0.97 }}
              className="relative"
              onClick={() => {
                setSelectedProject(project)
                setIsModalOpen(true)
              }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation()
                        window.open(project.demoUrl, '_blank')
                      }}
                    >
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation()
                        window.open(project.githubUrl, '_blank')
                      }}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </Card>
              <Sparkle className="top-2 left-3" />
              <Sparkle className="bottom-2 right-3" />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-background rounded-lg shadow-lg max-w-lg w-full p-8 relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-2xl text-muted-foreground hover:text-primary"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Fechar"
                >
                  ×
                </button>
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                  >
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  >
                    GitHub
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio 