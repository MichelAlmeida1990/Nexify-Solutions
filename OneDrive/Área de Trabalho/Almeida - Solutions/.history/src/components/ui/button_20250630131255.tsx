import React from 'react'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types'
import { motion } from 'framer-motion'
import { LoadingSpinner } from './loading-spinner'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className, 
    onClick, 
    disabled, 
    loading, 
    type = 'button',
    href,
    target,
    rel,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
    }
    
    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-8 text-lg',
    }

    const classes = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      className
    )

    const motionProps = {
      whileHover: { scale: 1.04 },
      whileTap: { scale: 0.97 },
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    }

    if (href) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          className={classes}
          {...motionProps}
          {...props}
        >
          {loading && (
            <LoadingSpinner size="sm" className="mr-2" />
          )}
          {children}
        </motion.a>
      )
    }

    return (
      <motion.button
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled || loading}
        ref={ref}
        {...motionProps}
        {...props}
      >
        {loading && (
          <LoadingSpinner size="sm" className="mr-2" />
        )}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button } 