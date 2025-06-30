import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Michel Almeida Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Desenvolvimento Web e Aplicativos Profissionais
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Transformando ideias em soluções digitais inovadoras. 
              Especializado em sistemas de gestão escolar, aplicativos mobile e integração de sistemas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para transformar seu negócio digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-card rounded-lg border shadow-soft">
              <h3 className="text-xl font-semibold mb-3">Desenvolvimento Web</h3>
              <p className="text-muted-foreground">
                Sites e aplicações web modernas, responsivas e otimizadas para SEO.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border shadow-soft">
              <h3 className="text-xl font-semibold mb-3">Aplicativos Mobile</h3>
              <p className="text-muted-foreground">
                Apps nativos e híbridos para iOS e Android com experiência excepcional.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border shadow-soft">
              <h3 className="text-xl font-semibold mb-3">Integração de Sistemas</h3>
              <p className="text-muted-foreground">
                Conectando diferentes sistemas para otimizar processos empresariais.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border shadow-soft">
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Design de interfaces intuitivas e experiências de usuário excepcionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Portfólio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Projetos que demonstram nossa expertise e compromisso com a qualidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg border shadow-soft overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="Sistema de Gestão Escolar"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sistema de Gestão Escolar</h3>
                <p className="text-muted-foreground mb-4">
                  Sistema completo para gestão de escolas, incluindo matrículas, notas e comunicação.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Django</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">PostgreSQL</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border shadow-soft overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Aplicativo de Academia"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Aplicativo de Academia</h3>
                <p className="text-muted-foreground mb-4">
                  App completo para academias com controle de treinos e agendamento.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Firebase</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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