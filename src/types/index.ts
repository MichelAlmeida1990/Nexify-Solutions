export interface Project {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  features: string[]
  highlights: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: readonly string[]
  technologies: readonly string[]
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface NavigationItem {
  name: string
  href: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  budget?: string
  timeline?: string
  projectType?: string
}

export interface AnimationVariants {
  initial: Record<string, any>
  animate: Record<string, any>
  exit?: Record<string, any>
}

export interface Skills {
  frontend: string[]
  backend: string[]
  mobile: string[]
  tools: string[]
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
    linkedin: string
    portfolio: string
  }
  contact: {
    email: string
    phone: string
    whatsapp: string
  }
}

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | (() => void)
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  href?: string
  target?: '_blank' | '_self'
  rel?: string
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'soft' | 'medium' | 'strong'
}

export interface InputProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'
  value?: string
  onChange?: ((value: string) => void) | ((e: React.ChangeEvent<HTMLInputElement>) => void)
  error?: string
  required?: boolean
  disabled?: boolean
  className?: string
  name?: string
  id?: string
}

export interface TextareaProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: ((value: string) => void) | ((e: React.ChangeEvent<HTMLTextAreaElement>) => void)
  error?: string
  required?: boolean
  disabled?: boolean
  className?: string
  name?: string
  id?: string
  rows?: number
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  closeOnOverlayClick?: boolean
  showCloseButton?: boolean
}

export interface TooltipProps {
  content: string
  children: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export interface IconProps {
  name: string
  size?: number
  className?: string
  color?: string
}

export interface SectionProps {
  id: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  container?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export interface HeroProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  image?: string
  particles?: boolean
}

export interface ServiceCardProps {
  service: Service
  className?: string
}

export interface ProjectCardProps {
  project: Project
  className?: string
  showDetails?: boolean
}

export interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export interface SkillCardProps {
  category: keyof Skills
  skills: string[]
  className?: string
}

export interface ContactFormProps {
  onSubmit: (data: ContactForm) => void
  loading?: boolean
  className?: string
}

export interface FooterProps {
  className?: string
}

export interface HeaderProps {
  className?: string
  transparent?: boolean
}

export interface ParticlesConfig {
  particles: {
    number: {
      value: number
      density: {
        enable: boolean
        value_area: number
      }
    }
    color: {
      value: string
    }
    shape: {
      type: string
    }
    opacity: {
      value: number
      random: boolean
    }
    size: {
      value: number
      random: boolean
    }
    line_linked: {
      enable: boolean
      distance: number
      color: string
      opacity: number
      width: number
    }
    move: {
      enable: boolean
      speed: number
      direction: string
      random: boolean
      straight: boolean
      out_mode: string
      bounce: boolean
    }
  }
  interactivity: {
    detect_on: string
    events: {
      onhover: {
        enable: boolean
        mode: string
      }
      onclick: {
        enable: boolean
        mode: string
      }
      resize: boolean
    }
    modes: {
      grab: {
        distance: number
        line_linked: {
          opacity: number
        }
      }
      bubble: {
        distance: number
        size: number
        duration: number
        opacity: number
        speed: number
      }
      repulse: {
        distance: number
        duration: number
      }
      push: {
        particles_nb: number
      }
      remove: {
        particles_nb: number
      }
    }
  }
  retina_detect: boolean
}

export interface Theme {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
    muted: string
    border: string
  }
  fonts: {
    sans: string[]
    mono: string[]
  }
  spacing: Record<string, string>
  borderRadius: Record<string, string>
  shadows: Record<string, string>
}

export interface Breakpoint {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

export interface DeviceType {
  mobile: boolean
  tablet: boolean
  desktop: boolean
}

export interface ScrollPosition {
  x: number
  y: number
}

export interface ViewportSize {
  width: number
  height: number
}

export interface IntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export interface UseIntersectionObserverReturn {
  ref: (node?: Element | null) => void
  isIntersecting: boolean
  entry?: IntersectionObserverEntry
}

export interface UseLocalStorageReturn<T> {
  value: T
  setValue: (value: T) => void
  removeValue: () => void
}

export interface UseDebounceReturn<T> {
  value: T
  setValue: (value: T) => void
}

export interface UseThrottleReturn<T> {
  value: T
  setValue: (value: T) => void
}

export interface UseCopyToClipboardReturn {
  copy: (text: string) => Promise<boolean>
  isCopied: boolean
  reset: () => void
}

export interface UseScrollPositionReturn {
  x: number
  y: number
  direction: 'up' | 'down' | null
}

export interface UseViewportSizeReturn {
  width: number
  height: number
}

export interface UseDeviceTypeReturn {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  deviceType: 'mobile' | 'tablet' | 'desktop'
}

export interface UseThemeReturn {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  setTheme: (theme: 'light' | 'dark') => void
}

export interface UseLocalStorageOptions {
  serializer?: (value: any) => string
  deserializer?: (value: string) => any
}

export interface UseDebounceOptions {
  delay: number
}

export interface UseThrottleOptions {
  limit: number
}

export interface UseIntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  triggerOnce?: boolean
}

export interface UseScrollPositionOptions {
  element?: Element | null
  throttle?: number
}

export interface UseViewportSizeOptions {
  throttle?: number
}

export interface UseDeviceTypeOptions {
  breakpoints?: {
    mobile: number
    tablet: number
  }
}

export interface UseThemeOptions {
  storageKey?: string
  defaultTheme?: 'light' | 'dark'
}

export interface UseCopyToClipboardOptions {
  timeout?: number
} 