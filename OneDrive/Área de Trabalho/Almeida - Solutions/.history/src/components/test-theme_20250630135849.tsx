'use client'

import { useTheme } from '@/contexts/theme-context'

export function TestTheme() {
  try {
    const { theme } = useTheme()
    return (
      <div className="fixed top-4 right-4 bg-green-500 text-white p-2 rounded z-50">
        ✅ Theme: {theme}
      </div>
    )
  } catch (error) {
    return (
      <div className="fixed top-4 right-4 bg-red-500 text-white p-2 rounded z-50">
        ❌ Theme Error: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    )
  }
} 