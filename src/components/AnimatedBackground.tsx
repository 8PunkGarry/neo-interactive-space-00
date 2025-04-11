
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Purple gradient orb that slowly moves */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-teko-purple/20 to-teko-purple-light/10 blur-[100px]"
        initial={{ x: -100, y: -100 }}
        animate={{ 
          x: ["-10%", "5%", "-5%", "10%", "-10%"],
          y: ["-10%", "10%", "-5%", "5%", "-10%"],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />
      
      {/* Secondary orb with different timing */}
      <motion.div 
        className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-teko-purple/10 to-teko-purple-light/5 blur-[120px]"
        initial={{ x: 100, y: 100 }}
        animate={{ 
          x: ["10%", "-5%", "10%", "-10%", "10%"],
          y: ["10%", "-10%", "5%", "-5%", "10%"],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />
      
      {/* Small particles floating around */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-teko-purple-light/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(124,58,237,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
    </div>
  );
};

export default AnimatedBackground;
