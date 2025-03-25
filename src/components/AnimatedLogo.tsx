
import React, { useEffect, useRef } from 'react';

interface AnimatedLogoProps {
  size?: number;
  className?: string;
  variant?: 'full' | 'minimal';
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  size = 80, 
  className = '', 
  variant = 'full' 
}) => {
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Add necessary keyframes if not already in CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gentle-pulse {
        0% { opacity: 0.7; transform: scale(0.97); }
        50% { opacity: 1; transform: scale(1.03); }
        100% { opacity: 0.7; transform: scale(0.97); }
      }
      
      @keyframes soft-glow {
        0% { filter: drop-shadow(0 0 2px rgba(124, 58, 237, 0.3)); }
        50% { filter: drop-shadow(0 0 8px rgba(124, 58, 237, 0.6)); }
        100% { filter: drop-shadow(0 0 2px rgba(124, 58, 237, 0.3)); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (variant === 'minimal') {
    return (
      <svg 
        ref={logoRef}
        width={size} 
        height={size} 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} inline-block`}
        style={{ animation: 'gentle-pulse 4s infinite ease-in-out' }}
      >
        <circle 
          cx="60" 
          cy="60" 
          r="42" 
          fill="url(#minGradient)" 
          fillOpacity="0.1" 
          style={{ animation: 'soft-glow 4s infinite ease-in-out' }}
        />
        
        <path 
          d="M60 35 L80 60 L60 85 L40 60 Z" 
          fill="#7C3AED" 
          fillOpacity="0.6" 
        />
        
        <defs>
          <radialGradient id="minGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(90) scale(50)">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg 
        ref={logoRef}
        width={size} 
        height={size} 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'gentle-pulse 4s infinite ease-in-out' }}
      >
        <circle 
          cx="60" 
          cy="60" 
          r="42" 
          fill="url(#fullGradient)" 
          fillOpacity="0.1" 
          style={{ animation: 'soft-glow 4s infinite ease-in-out' }}
        />
        
        <path 
          d="M60 35 L80 60 L60 85 L40 60 Z" 
          fill="#7C3AED" 
          fillOpacity="0.6" 
        />
        
        <defs>
          <radialGradient id="fullGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(90) scale(50)">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      
      <svg 
        width={size * 1.5} 
        height={size / 2} 
        viewBox="0 0 180 60" 
        className="ml-2"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="logo-text">
          <path d="M10 10 H20 V40 H10 V10 Z" fill="#7C3AED" />
          <path d="M25 10 H50 V20 H25 V10 Z" fill="#7C3AED" />
          <path d="M25 25 H45 V35 H25 V25 Z" fill="#7C3AED" />
          <path d="M55 10 H65 V40 H55 V10 Z" fill="#7C3AED" />
          <path d="M70 10 H95 V20 H70 V10 Z" fill="#7C3AED" />
          <path d="M70 25 H90 V35 H70 V25 Z" fill="#7C3AED" />
          <path d="M100 10 H110 V40 H100 V10 Z" fill="#FFFFFF" />
          <path d="M115 25 V10 H155 V20 H125 V40 H115 V25 Z" fill="#FFFFFF" />
          <path d="M130 25 H155 V40 H145 V35 H130 V25 Z" fill="#FFFFFF" />
          <circle cx="165" cy="15" r="5" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
