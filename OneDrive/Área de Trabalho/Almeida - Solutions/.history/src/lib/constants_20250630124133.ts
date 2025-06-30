export const SITE_CONFIG = {
  name: 'Michel Almeida Solutions',
  description: 'Desenvolvimento Web e Aplicativos Profissionais',
  url: 'https://michel-almeida-solutions.vercel.app',
  ogImage: '/images/og-image.jpg',
  links: {
    github: 'https://github.com/MichelAlmeida1990',
    linkedin: 'https://linkedin.com/in/michel-almeida',
    portfolio: 'https://michelalmeida1990.github.io/Portfolio-Profissional/',
  },
  contact: {
    email: 'michel.almeida@example.com',
    phone: '+55 (11) 99999-9999',
    whatsapp: '+5511999999999',
  },
} as const

export const NAVIGATION = [
  { name: 'Início', href: '#home' },
  { name: 'Serviços', href: '#services' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Sobre', href: '#about' },
  { name: 'Contato', href: '#contact' },
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
    image: '/images/projects/gestao-escolar.jpg',
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
    image: '/images/projects/app-academia.jpg',
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
    image: '/images/projects/banco-horas.jpg',
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
    image: '/images/projects/qr-code.jpg',
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

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'João Silva',
    role: 'Diretor de Tecnologia',
    company: 'TechCorp',
    content: 'Michel desenvolveu um sistema de gestão escolar que revolucionou nossa instituição. A interface é intuitiva e o sistema é muito robusto.',
    avatar: '/images/testimonials/joao-silva.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Maria Santos',
    role: 'Proprietária',
    company: 'Academia FitLife',
    content: 'O aplicativo da academia superou todas as expectativas. Nossos alunos adoram a facilidade de agendar aulas e acompanhar o progresso.',
    avatar: '/images/testimonials/maria-santos.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    role: 'CEO',
    company: 'StartupXYZ',
    content: 'Michel é um profissional excepcional. Entregou nosso projeto no prazo, com qualidade superior e sempre disponível para ajustes.',
    avatar: '/images/testimonials/carlos-oliveira.jpg',
    rating: 5,
  },
] as const

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