export const SITE_CONFIG = {
  name: 'Nexify Solutions',
  description: 'Soluções digitais inovadoras para transformar seu negócio',
  url: 'https://nexify-solutions.com',
  ogImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  links: {
    github: 'https://github.com/MichelAlmeida1990',
    linkedin: 'https://linkedin.com/in/michel-almeida',
    email: 'contato@nexify-solutions.com',
  },
  contact: {
    email: 'michelpaulo06@hotmail.com',
    phone: '+55 (11) 95940-7653',
    whatsapp: '+5511959407653',
  },
} as const

export const NAVIGATION = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
] as const

export const SERVICES = [
  {
    id: 'web-development',
    title: 'Desenvolvimento Web',
    description: 'Criação de sites e aplicações web modernas, responsivas e otimizadas para SEO.',
    icon: 'Globe',
    features: [
      'Sites responsivos',
      'Aplicações web',
      'E-commerce',
      'Landing pages',
      'Otimização SEO',
      'Performance',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'mobile-apps',
    title: 'Aplicativos Mobile',
    description: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.',
    icon: 'Smartphone',
    features: [
      'Apps nativos',
      'Apps híbridos',
      'PWA',
      'Integração API',
      'Push notifications',
      'Offline support',
    ],
    technologies: ['React Native', 'Flutter', 'Ionic', 'Capacitor'],
  },
  {
    id: 'system-integration',
    title: 'Integração de Sistemas',
    description: 'Conectando diferentes sistemas e APIs para otimizar processos empresariais.',
    icon: 'Database',
    features: [
      'APIs REST/GraphQL',
      'Webhooks',
      'Automação',
      'Migração de dados',
      'Sincronização',
      'Monitoramento',
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Design de interfaces intuitivas e experiências de usuário excepcionais.',
    icon: 'Palette',
    features: [
      'Wireframes',
      'Prototipagem',
      'Design system',
      'User research',
      'Usabilidade',
      'Acessibilidade',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
  },
] as const

export const PORTFOLIO_PROJECTS = [
  {
    id: 'gestao-escolar',
    title: 'Sistema de Gestão Escolar',
    description: 'Sistema completo para gestão de escolas, incluindo matrículas, notas, frequência e comunicação.',
    category: 'web-development',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    demoUrl: 'https://gestao-escolar-demo.vercel.app',
    githubUrl: 'https://github.com/MichelAlmeida1990/gestao_escolar',
    features: [
      'Gestão de alunos e professores',
      'Controle de notas e frequência',
      'Comunicação escolar',
      'Relatórios e dashboards',
      'Módulo financeiro',
      'Portal do aluno',
    ],
    highlights: [
      'Redução de 60% no tempo de gestão',
      'Melhoria na comunicação escola-família',
      'Interface intuitiva para todos os usuários',
    ],
  },
  {
    id: 'app-academia',
    title: 'Aplicativo de Academia',
    description: 'App completo para academias com controle de treinos, agendamento e acompanhamento de progresso.',
    category: 'mobile-apps',
    technologies: ['JavaScript', 'React Native', 'Firebase', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    demoUrl: 'https://app-academia-demo.vercel.app',
    githubUrl: 'https://github.com/MichelAlmeida1990/App-de-academia',
    features: [
      'Controle de treinos personalizados',
      'Agendamento de aulas',
      'Acompanhamento de progresso',
      'Chat com personal trainers',
      'Integração com wearables',
      'Pagamentos in-app',
    ],
    highlights: [
      'Aumento de 40% na retenção de alunos',
      'Redução de 50% no cancelamento de aulas',
      'Melhoria na experiência do usuário',
    ],
  },
  {
    id: 'banco-horas',
    title: 'Sistema de Banco de Horas',
    description: 'Sistema para controle de horas trabalhadas e banco de horas para empresas.',
    category: 'system-integration',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    demoUrl: 'https://banco-horas-demo.vercel.app',
    githubUrl: 'https://github.com/MichelAlmeida1990/Sistema-de-Banco-de-Horas',
    features: [
      'Controle de ponto eletrônico',
      'Gestão de banco de horas',
      'Relatórios de produtividade',
      'Integração com RH',
      'Notificações automáticas',
      'Dashboard gerencial',
    ],
    highlights: [
      'Redução de 70% em erros de ponto',
      'Automatização de processos de RH',
      'Melhoria na gestão de recursos humanos',
    ],
  },
  {
    id: 'qr-code-extension',
    title: 'Extensão QR Code',
    description: 'Extensão de navegador para gerar QR codes rapidamente a partir de URLs.',
    category: 'web-development',
    technologies: ['JavaScript', 'Chrome Extension API', 'QR Code API'],
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=600&q=80',
    demoUrl: 'https://chrome.google.com/webstore/detail/qr-code-generator',
    githubUrl: 'https://github.com/MichelAlmeida1990/Extens-o-QR-CODE',
    features: [
      'Geração instantânea de QR codes',
      'Compartilhamento rápido',
      'Histórico de códigos',
      'Personalização de cores',
      'Exportação em diferentes formatos',
      'Integração com redes sociais',
    ],
    highlights: [
      'Mais de 10.000 downloads',
      'Avaliação 4.8/5 estrelas',
      'Facilita compartilhamento de links',
    ],
  },
  {
    id: 'barbearia-do-di',
    title: 'Barbearia do Di',
    description: 'Catálogo digital de cortes de cabelo, com visualização de estilos e agendamento online.',
    category: 'web-development',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    demoUrl: 'https://barbearia-do-di-demo.vercel.app',
    githubUrl: 'https://github.com/MichelAlmeida1990/Barbearia-do-Di',
    features: [
      'Catálogo de cortes',
      'Agendamento online',
      'Responsivo',
      'Galeria de fotos',
      'Contato rápido',
    ],
    highlights: [
      'Facilita a escolha do corte',
      'Aumenta o engajamento dos clientes',
    ],
  },
  {
    id: 'santo-drink',
    title: 'Santo Drink',
    description: 'Site de drinks e coquetéis, com receitas, catálogo e integração com redes sociais.',
    category: 'web-development',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    demoUrl: 'https://santo-drink-site-demo.vercel.app',
    githubUrl: 'https://github.com/MichelAlmeida1990/santo-drink-site',
    features: [
      'Catálogo de drinks',
      'Receitas detalhadas',
      'Busca por ingredientes',
      'Compartilhamento social',
      'Design moderno',
    ],
    highlights: [
      'Aumenta o alcance do bar',
      'Facilita a escolha do cliente',
    ],
  },
] as const

export const SKILLS = {
  frontend: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'Vue.js',
    'Tailwind CSS',
    'Bootstrap',
    'Sass/SCSS',
  ],
  backend: [
    'Node.js',
    'Python',
    'Django',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
    'Firebase',
    'REST APIs',
    'GraphQL',
  ],
  mobile: [
    'React Native',
    'Flutter',
    'Ionic',
    'Capacitor',
    'PWA',
  ],
  tools: [
    'Git',
    'GitHub',
    'VS Code',
    'Figma',
    'Adobe XD',
    'Docker',
    'Vercel',
    'Netlify',
  ],
} as const

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/MichelAlmeida1990',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/michel-almeida',
    icon: 'Linkedin',
  },
  {
    name: 'Portfolio',
    url: 'https://michelalmeida1990.github.io/Portfolio-Profissional/',
    icon: 'Globe',
  },
] as const

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
} as const

export const ABOUT_DATA = {
  story: 'Olá! Sou Michel Almeida, um desenvolvedor Full Stack apaixonado por tecnologia e inovação. Desde 2020, tenho ajudado empresas a transformar suas ideias em soluções digitais que fazem a diferença no mercado. Minha missão é criar experiências excepcionais que conectam pessoas e impulsionam negócios através da tecnologia.',
  values: [
    {
      title: 'Inovação',
      description: 'Sempre busco as melhores tecnologias e metodologias para entregar soluções de ponta.'
    },
    {
      title: 'Qualidade',
      description: 'Comprometimento total com a excelência em cada projeto, desde o planejamento até a entrega.'
    },
    {
      title: 'Transparência',
      description: 'Comunicação clara e honesta em todas as etapas do desenvolvimento.'
    },
    {
      title: 'Resultados',
      description: 'Foco em entregar valor real e resultados mensuráveis para meus clientes.'
    }
  ],
  stats: [
    { value: '50+', label: 'Projetos Entregues' },
    { value: '30+', label: 'Clientes Satisfeitos' },
    { value: '3+', label: 'Anos de Experiência' },
    { value: '100%', label: 'Compromisso com Qualidade' }
  ],
  profile: {
    name: 'Michel Almeida',
    role: 'Full Stack Developer',
    bio: 'Especialista em React, Node.js, Python e desenvolvimento de aplicações web e mobile. Apaixonado por criar soluções inovadoras que resolvem problemas reais e impulsionam o crescimento dos negócios.',
    avatar: '/images/foto-perfil.png.jpeg',
    skills: ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB', 'React Native'],
    experience: '3+ anos desenvolvendo soluções digitais completas, desde sistemas de gestão até aplicativos mobile.'
  }
} as const 