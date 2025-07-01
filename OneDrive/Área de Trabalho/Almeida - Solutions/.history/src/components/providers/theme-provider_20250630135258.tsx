'use client'

import { ThemeProvider as ThemeContextProvider } from '@/contexts/theme-context'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  )
} 