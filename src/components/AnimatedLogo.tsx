
import React, { useEffect, useRef } from 'react';

interface AnimatedLogoProps {
  size?: number;
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ size = 80, className = '' }) => {
  const logoRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGGElement>(null);
  
  useEffect(() => {
    const animate = () => {
      if (!logoRef.current || !textRef.current) return;
      
      // Animate the wheel rotation
      const wheel = logoRef.current.querySelector('.wheel');
      if (wheel) {
        wheel.setAttribute('style', 'animation: spin 10s linear infinite');
      }
      
      // Animate the inner shapes
      const innerShapes = logoRef.current.querySelectorAll('.inner-shape');
      innerShapes.forEach((shape, index) => {
        (shape as SVGElement).setAttribute('style', 
          `animation: pulse 3s ease-in-out ${index * 0.5}s infinite alternate`);
      });
      
      // Animate text
      const textParts = textRef.current.querySelectorAll('path');
      textParts.forEach((part, index) => {
        (part as SVGElement).setAttribute('style', 
          `opacity: 0; animation: fade-in 0.5s ease-out ${0.2 * index}s forwards`);
      });
    };
    
    animate();
    
    // Add necessary keyframes if not already in CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes pulse {
        0% { transform: scale(0.95); opacity: 0.7; }
        100% { transform: scale(1.05); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg 
        ref={logoRef}
        width={size} 
        height={size} 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle */}
        <circle 
          className="wheel"
          cx="60" 
          cy="60" 
          r="56" 
          stroke="#7C3AED" 
          strokeWidth="2"
          strokeDasharray="10 5" 
        />
        
        {/* Middle Circle with gradient */}
        <circle 
          cx="60" 
          cy="60" 
          r="45" 
          fill="url(#purpleGradient)" 
          fillOpacity="0.1" 
        />
        
        {/* Inner shapes */}
        <path 
          className="inner-shape"
          d="M60 30 L85 60 L60 90 L35 60 Z" 
          fill="#7C3AED" 
          fillOpacity="0.6" 
        />
        
        <path 
          className="inner-shape"
          d="M46 46 L74 46 L74 74 L46 74 Z" 
          fill="#FFFFFF" 
          fillOpacity="0.7" 
          transform="rotate(45 60 60)"
        />
        
        <circle 
          className="inner-shape"
          cx="60" 
          cy="60" 
          r="15" 
          fill="#A78BFA" 
        />
        
        <circle 
          cx="60" 
          cy="60" 
          r="8" 
          fill="#FFFFFF" 
        />
        
        {/* Gradient definition */}
        <defs>
          <radialGradient id="purpleGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(90) scale(50)">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      
      {/* Logo Text - separate for different animation */}
      <svg 
        ref={textRef}
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
