import React from 'react'
import { cn } from '@/lib/utils'
import { InputProps } from '@/types'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
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
          onChange={(e) => onChange?.(e.target.value)}
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