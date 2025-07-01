import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateTime(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+55\s?)?(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/
  return phoneRegex.test(phone)
}

export function scrollToElement(elementId: string, offset = 0): void {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    })
  }
}

export function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text).then(() => true)
  }
  
  // Fallback for older browsers
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed'
  textArea.style.left = '-999999px'
  textArea.style.top = '-999999px'
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  
  try {
    document.execCommand('copy')
    document.body.removeChild(textArea)
    return Promise.resolve(true)
  } catch (err) {
    document.body.removeChild(textArea)
    return Promise.resolve(false)
  }
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function generateMetaDescription(text: string, maxLength = 160): string {
  const cleanText = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  if (cleanText.length <= maxLength) return cleanText
  return cleanText.slice(0, maxLength - 3) + '...'
}

export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop'
  
  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function retry<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  return fn().catch((error) => {
    if (retries === 0) throw error
    return sleep(delay).then(() => retry(fn, retries - 1, delay * 2))
  })
}

// Smooth scroll with custom easing
export function smoothScrollTo(elementId: string, offset: number = 0) {
  const element = document.querySelector(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset
    const startPosition = window.pageYOffset
    const distance = elementPosition - startPosition
    const duration = 1000
    let start: number | null = null

    function animation(currentTime: number) {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    // Easing function (cubic ease-in-out)
    function easeInOutCubic(t: number, b: number, c: number, d: number) {
      t /= d / 2
      if (t < 1) return c / 2 * t * t * t + b
      t -= 2
      return c / 2 * (t * t * t + 2) + b
    }

    requestAnimationFrame(animation)
  }
}

// Magnetic effect for buttons
export function createMagneticEffect(element: HTMLElement) {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`
  }

  const handleMouseLeave = () => {
    element.style.transform = 'translate(0px, 0px)'
  }

  element.addEventListener('mousemove', handleMouseMove)
  element.addEventListener('mouseleave', handleMouseLeave)

  return () => {
    element.removeEventListener('mousemove', handleMouseMove)
    element.removeEventListener('mouseleave', handleMouseLeave)
  }
} 