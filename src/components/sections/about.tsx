'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ABOUT_DATA } from '@/lib/constants'

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
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
            Conheça minha história, valores e experiência em desenvolvimento de soluções digitais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* História */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Minha <span className="gradient-text">História</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {ABOUT_DATA.story}
            </p>
            <div className="space-y-4">
              {ABOUT_DATA.values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Estatísticas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {ABOUT_DATA.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 bg-background rounded-lg shadow-soft border border-border/50"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Perfil Individual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Meu <span className="gradient-text">Perfil</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Foto de Perfil */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center lg:col-span-1"
              >
                <div className="relative mb-6">
                  <img
                    src={ABOUT_DATA.profile.avatar}
                    alt={ABOUT_DATA.profile.name}
                    className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-border/50 hover:border-primary/50 transition-colors duration-300 shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 via-cyan-400/20 to-emerald-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Informações */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="lg:col-span-2"
              >
                <h4 className="text-2xl font-bold mb-3">{ABOUT_DATA.profile.name}</h4>
                <p className="text-primary font-medium mb-4 text-lg">{ABOUT_DATA.profile.role}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {ABOUT_DATA.profile.bio}
                </p>
                
                {/* Experiência */}
                <div className="mb-6">
                  <h5 className="font-semibold mb-2">Experiência</h5>
                  <p className="text-sm text-muted-foreground">{ABOUT_DATA.profile.experience}</p>
                </div>

                {/* Skills */}
                <div>
                  <h5 className="font-semibold mb-3">Principais Tecnologias</h5>
                  <div className="flex flex-wrap gap-2">
                    {ABOUT_DATA.profile.skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 