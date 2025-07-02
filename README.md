# Michel Almeida Solutions

<div align="center">
  <img src="/public/logo.png" alt="Michel Almeida Solutions" width="200" />
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
</div>

## 🚀 Sobre o Projeto

**Michel Almeida Solutions** é uma plataforma profissional que apresenta serviços de desenvolvimento web e aplicativos, destacando projetos como **Sistema de Gestão Escolar** e **Aplicativo de Academia** como cases de sucesso.

### ✨ Características Principais

- **Design Moderno**: Interface responsiva e intuitiva
- **Performance Otimizada**: Next.js 14 com SSR e otimizações
- **SEO Avançado**: Meta tags dinâmicas e estrutura semântica
- **Animações Fluidas**: Framer Motion para transições suaves
- **Acessibilidade**: WCAG 2.1 AA compliance
- **Testes Automatizados**: Jest e Testing Library
- **TypeScript**: Tipagem estrita para maior confiabilidade

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e transições
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **Prettier** - Formatação automática
- **Jest** - Testes unitários
- **Testing Library** - Testes de componentes
- **Husky** - Git hooks
- **Lint-staged** - Linting pré-commit

## 📁 Estrutura do Projeto

```
michel-almeida-solutions/
├── src/
│   ├── app/                    # App Router (Next.js 14)
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página inicial
│   │   ├── globals.css        # Estilos globais
│   │   └── favicon.ico        # Favicon
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes base (shadcn/ui)
│   │   ├── layout/           # Componentes de layout
│   │   ├── sections/         # Seções da página
│   │   └── common/           # Componentes comuns
│   ├── lib/                  # Utilitários e configurações
│   │   ├── utils.ts          # Funções utilitárias
│   │   ├── constants.ts      # Constantes do projeto
│   │   └── validations.ts    # Schemas de validação
│   ├── hooks/                # Custom hooks
│   ├── types/                # Definições de tipos TypeScript
│   └── styles/               # Estilos adicionais
├── public/                   # Arquivos estáticos
│   ├── images/              # Imagens do projeto
│   ├── icons/               # Ícones
│   └── fonts/               # Fontes personalizadas
├── __tests__/               # Testes automatizados
├── docs/                    # Documentação
└── scripts/                 # Scripts de automação
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/MichelAlmeida1990/michel-almeida-solutions.git
   cd michel-almeida-solutions
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   ```

4. **Execute o projeto em desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse o projeto**
   ```
   http://localhost:3000
   ```

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Executa o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run start` | Executa o servidor de produção |
| `npm run lint` | Executa o linter |
| `npm run type-check` | Verifica tipos TypeScript |
| `npm run format` | Formata o código com Prettier |
| `npm run test` | Executa os testes |
| `npm run test:watch` | Executa testes em modo watch |
| `npm run test:coverage` | Gera relatório de cobertura |

## 🧪 Testes

O projeto utiliza Jest e Testing Library para testes automatizados:

```bash
# Executar todos os testes
npm run test

# Executar testes em modo watch
npm run test:watch

# Gerar relatório de cobertura
npm run test:coverage
```

## 📦 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas
- **Netlify**: Compatível com Next.js
- **Railway**: Deploy simples e rápido
- **AWS Amplify**: Para projetos empresariais

## 🔧 Configurações

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Email (opcional)
EMAIL_SERVICE=gmail
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-app

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Social Media
NEXT_PUBLIC_GITHUB_URL=https://github.com/MichelAlmeida1990
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/michel-almeida
```

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## ♿ Acessibilidade

- Navegação por teclado
- Screen readers compatíveis
- Contraste adequado
- Alt text em imagens
- ARIA labels
- WCAG 2.1 AA compliance

## 🔍 SEO

- Meta tags dinâmicas
- Open Graph tags
- Twitter Cards
- Sitemap automático
- Robots.txt
- Schema.org markup

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Michel Almeida**

- GitHub: [@MichelAlmeida1990](https://github.com/MichelAlmeida1990)
- LinkedIn: [Michel Almeida](https://linkedin.com/in/michel-almeida)
- Portfolio: [michelalmeida1990.github.io](https://michelalmeida1990.github.io/Portfolio-Profissional/)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animações
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Vercel](https://vercel.com/) - Deploy e hospedagem

---

<div align="center">
  <p>Feito com ❤️ por <a href="https://github.com/MichelAlmeida1990">Michel Almeida</a></p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div> # Força novo deploy - 07/02/2025 11:16:31
# Força novo deploy - 07/02/2025 11:16:37
# Force Vercel deploy
# Force Vercel Deploy - 07/02/2025 11:28:31
# Force deploy - 2025-07-02 14:21:55
