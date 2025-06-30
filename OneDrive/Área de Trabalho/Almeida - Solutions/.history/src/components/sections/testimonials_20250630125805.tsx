'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'João Silva',
    role: 'CEO - TechStart',
    company: 'TechStart Solutions',
    content: 'O Michel transformou completamente nossa presença digital. O sistema de gestão escolar que ele desenvolveu revolucionou nossa operação, aumentando a eficiência em 40%. Profissionalismo e qualidade excepcionais!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Maria Santos',
    role: 'Diretora - Academia Fit',
    company: 'Academia Fit',
    content: 'O aplicativo da academia superou todas as expectativas. Interface intuitiva, funcionalidades completas e suporte incrível. Nossos alunos adoram a experiência!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    role: 'Fundador - StartupXYZ',
    company: 'StartupXYZ',
    content: 'Trabalhar com o Michel foi uma experiência incrível. Ele não apenas entregou o projeto no prazo, mas também sugeriu melhorias que nem tínhamos pensado. Altamente recomendado!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'Ana Costa',
    role: 'Gerente de Marketing',
    company: 'Digital Solutions',
    content: 'O site que o Michel desenvolveu para nossa empresa aumentou nossas conversões em 60%. Design moderno, performance excepcional e SEO otimizado. Resultados impressionantes!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 5,
    name: 'Pedro Mendes',
    role: 'CTO - InovaçãoTech',
    company: 'InovaçãoTech',
    content: 'Como CTO, sou muito exigente com qualidade de código. O Michel não só atendeu, mas superou nossas expectativas. Código limpo, documentado e escalável.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  }
]

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0]; isActive: boolean }> = ({ 
  testimonial, 
  isActive 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.7, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
      className={`${isActive ? 'z-10' : 'z-0'}`}
    >
      <Card className={`h-full transition-all duration-300 ${isActive ? 'shadow-xl scale-105' : 'shadow-md'}`}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              <p className="text-xs text-muted-foreground">{testimonial.company}</p>
            </div>
            <StarRating rating={testimonial.rating} />
          </div>
          <blockquote className="text-muted-foreground leading-relaxed italic">
            "{testimonial.content}"
          </blockquote>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
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
            O Que <span className="gradient-text">Dizem</span> Sobre Mim
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depoimentos de clientes que confiaram em meu trabalho e ficaram satisfeitos com os resultados
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Navigation Buttons */}
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>

          {/* Testimonials */}
          <div className="relative h-80 md:h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <TestimonialCard
                  testimonial={testimonials[currentIndex]}
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/20"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Satisfação dos Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5.0</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projetos Concluídos</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 