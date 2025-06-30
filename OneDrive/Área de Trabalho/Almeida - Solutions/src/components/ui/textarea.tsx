import React from 'react'
import { cn } from '@/lib/utils'
import { TextareaProps } from '@/types'

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    label, 
    placeholder, 
    value, 
    onChange, 
    error, 
    required, 
    disabled, 
    className, 
    name, 
    id, 
    rows = 4, 
    ...props 
  }, ref) => {
    const textareaId = id || name || `textarea-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={textareaId} 
            className="block text-sm font-medium text-foreground mb-2"
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          name={name}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
          className={cn(
            'textarea-field',
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

Textarea.displayName = 'Textarea'

export { Textarea } 