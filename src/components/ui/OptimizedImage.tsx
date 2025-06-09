'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  fallbackSrc?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  fallbackSrc = '/images/placeholders/default-placeholder.jpg',
  objectFit = 'cover'
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    setHasError(true)
    setImgSrc(fallbackSrc)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
        </div>
      )}
      
      {/* Image */}
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onError={handleError}
        onLoad={handleLoad}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          objectFit: objectFit,
          width: '100%',
          height: '100%'
        }}
      />
      
      {/* Error state indicator */}
      {hasError && (
        <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-50" title="Using fallback image" />
      )}
    </div>
  )
}

// Testimonial Avatar Component with styled initials
export function TestimonialAvatar({ 
  name, 
  className = "w-12 h-12" 
}: { 
  name: string
  className?: string 
}) {
  // Create consistent gradient colors based on name
  const getGradientColors = (name: string) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-purple-500 to-purple-600', 
      'from-pink-500 to-pink-600',
      'from-green-500 to-green-600',
      'from-yellow-500 to-yellow-600',
      'from-red-500 to-red-600',
      'from-indigo-500 to-indigo-600',
      'from-teal-500 to-teal-600'
    ]
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }
  
  const gradientColors = getGradientColors(name)
  const initials = name.split(' ').map(n => n[0]).join('')
  
  return (
    <div className={`relative ${className} rounded-full overflow-hidden bg-gradient-to-br ${gradientColors} flex items-center justify-center shadow-lg`}>
      <div className="text-white font-bold text-lg">
        {initials}
      </div>
    </div>
  )
}

// Association Logo Component with text placeholders
export function AssociationLogo({ 
  name, 
  width = 80, 
  height = 40,
  className = "" 
}: { 
  name: string
  width?: number
  height?: number
  className?: string 
}) {
  // Create abbreviated version of the name
  const createAbbreviation = (name: string) => {
    return name.split(' ').map(word => word[0]).join('')
  }
  
  const abbreviation = createAbbreviation(name)
  
  return (
    <div className={`flex items-center justify-center bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 ${className}`} style={{width, height}}>
      <div className="text-center px-2">
        <div className="text-xs font-bold text-gray-600 mb-1">{abbreviation}</div>
        <div className="text-xs text-gray-500 leading-tight">{name.length > 20 ? name.substring(0, 20) + '...' : name}</div>
      </div>
    </div>
  )
}