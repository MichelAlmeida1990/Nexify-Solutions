import React from 'react'
import { cn } from '@/lib/utils'
import { InputProps } from '@/types'

const Input = React.forwardRef<HTMLInputElement, InputProps & { onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | ((value: string) => void) }>(
  ({ 
    label, 
    placeholder, 
    type = 'text', 
    value, 
    onChange, 
    error, 
    required, 
    disabled, 
    className, 
    name, 
    id, 
    ...props 
  }, ref) => {
    const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium text-foreground mb-2"
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={(e) => {
            if (typeof onChange === 'function') {
              if (onChange.length === 1 && typeof e === 'object' && 'target' in e) {
                // React Hook Form: passa o evento
                (onChange as (e: React.ChangeEvent<HTMLInputElement>) => void)(e)
              } else {
                // Custom: passa o valor
                (onChange as (value: string) => void)(e.target.value)
              }
            }
          }}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={cn(
            'input-field',
            error && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input } 