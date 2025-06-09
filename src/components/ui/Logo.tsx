interface LogoProps {
  className?: string
  width?: number
  height?: number
  showText?: boolean
}

export default function Logo({ className = "", width = 120, height = 40, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo SVG */}
      <svg 
        width={height} 
        height={height} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        {/* Background circle */}
        <circle cx="20" cy="20" r="18" fill="currentColor" className="text-accent" opacity="0.1"/>
        
        {/* Medical cross with modern twist */}
        <path 
          d="M20 8V32M12 20H28" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          className="text-accent"
        />
        
        {/* DNA helix elements */}
        <path 
          d="M15 12C17 14 23 14 25 12M15 28C17 26 23 26 25 28" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          className="text-accent"
          opacity="0.7"
        />
        
        {/* Strength/muscle element */}
        <circle cx="14" cy="16" r="2" fill="currentColor" className="text-accent" opacity="0.8"/>
        <circle cx="26" cy="16" r="2" fill="currentColor" className="text-accent" opacity="0.8"/>
        <circle cx="14" cy="24" r="2" fill="currentColor" className="text-accent" opacity="0.8"/>
        <circle cx="26" cy="24" r="2" fill="currentColor" className="text-accent" opacity="0.8"/>
      </svg>
      
      {/* Text logo */}
      {showText && (
        <div className="font-heading font-bold text-current">
          <span className="text-current">STRONG</span>
          <span className="text-accent">Medicine</span>
        </div>
      )}
    </div>
  )
}

// Export icon-only version
export function LogoIcon({ className = "", size = 40 }: { className?: string, size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="20" cy="20" r="18" fill="currentColor" className="text-accent" opacity="0.1"/>
      
      {/* Medical cross with modern twist */}
      <path 
        d="M20 8V32M12 20H28" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        className="text-accent"
      />
      
      {/* DNA helix elements */}
      <path 
        d="M15 12C17 14 23 14 25 12M15 28C17 26 23 26 25 28" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        className="text-accent"
        opacity="0.7"
      />
      
      {/* Strength/muscle element */}
      <circle cx="14" cy="16" r="2" fill="currentColor" className="text-accent" opacity="0.8"/>
      <circle cx="26" cy="16" r="2" fill="currentColor" className="text-accent" opacity="0.8"/>
      <circle cx="14" cy="24" r="2" fill="currentColor" className="text-accent" opacity="0.8"/>
      <circle cx="26" cy="24" r="2" fill="currentColor" className="text-accent" opacity="0.8"/>
    </svg>
  )
}