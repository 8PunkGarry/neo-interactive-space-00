
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
      
      <div className="ml-2">
        <div className="text-teko-white font-bold text-xl">teko<span className="text-teko-purple">.sup</span></div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
