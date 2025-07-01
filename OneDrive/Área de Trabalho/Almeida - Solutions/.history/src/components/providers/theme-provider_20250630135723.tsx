'use client'

import { ThemeProvider as ThemeContextProvider } from '@/contexts/theme-context'

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  )
} 