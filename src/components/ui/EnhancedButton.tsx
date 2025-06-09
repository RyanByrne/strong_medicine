import Link from 'next/link'
import { ReactNode } from 'react'

interface EnhancedButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  icon?: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export default function EnhancedButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon,
  type = 'button'
}: EnhancedButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center font-medium rounded-2xl 
    transition-all duration-300 ease-out overflow-hidden group min-h-[44px]
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transform hover:-translate-y-1 active:translate-y-0
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]'
  }

  const variantClasses = {
    primary: `
      bg-accent text-white shadow-lg hover:shadow-xl
      focus:ring-accent focus:ring-offset-2
      before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-accent before:to-primary-600 before:opacity-0 
      before:transition-opacity before:duration-300 hover:before:opacity-100
    `,
    secondary: `
      bg-white text-gray-900 border border-gray-300 shadow-sm hover:shadow-md
      focus:ring-gray-200 focus:ring-offset-2
      hover:bg-gray-50 hover:border-gray-400
    `,
    accent: `
      bg-gradient-to-r from-accent to-primary-600 text-white shadow-lg hover:shadow-xl
      focus:ring-accent focus:ring-offset-2
      before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-primary-600 before:to-accent before:opacity-0 
      before:transition-opacity before:duration-300 hover:before:opacity-100
    `
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  const content = (
    <>
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  )
}