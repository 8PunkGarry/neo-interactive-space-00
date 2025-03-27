
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  capabilities?: string[];
  delay?: number;
  url?: string;
  isViewAll?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  capabilities = [], 
  delay = 0,
  url = "#services",
  isViewAll = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="animate-on-scroll relative z-50" 
      style={{ transitionDelay: `${delay}s` }}
    >
      <div 
        className={`relative group overflow-hidden rounded-xl transition-all duration-500 h-full 
          ${isHovered ? 'bg-gradient-to-br from-teko-purple/20 to-transparent scale-[1.02] z-10' : 'bg-white/5 backdrop-blur-sm'}
          ${isViewAll ? 'border-2 border-dashed border-teko-purple/30' : 'border border-white/10'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-6 md:p-8 rounded-xl h-full flex flex-col">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-500 
            ${isHovered ? 'bg-teko-purple text-white' : 'bg-white/10 text-teko-purple-light'}`}>
            {icon}
          </div>
          
          <h3 className="text-xl md:text-2xl font-display font-bold mb-4">{title}</h3>
          <p className="text-teko-white/70 mb-6 flex-grow">{description}</p>
          
          {capabilities.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {capabilities.map((capability, index) => (
                <Badge 
                  key={index}
                  className={`transition-all duration-300 text-xs font-medium px-2.5 py-1 
                    ${isHovered 
                      ? 'bg-teko-purple/30 text-teko-white border-teko-purple/30' 
                      : 'bg-white/10 text-teko-white/80 border-white/10'}`}
                >
                  {capability}
                </Badge>
              ))}
            </div>
          )}
          
          <Link 
            to={url}
            className={`inline-flex items-center text-base font-medium transition-all duration-300 
              ${isHovered ? 'text-teko-purple-light' : 'text-teko-white/80'}`}
          >
            {isViewAll ? 'View all services' : 'Learn more'}
            <ArrowRight className={`ml-2 transition-transform duration-300 
              ${isHovered ? 'transform translate-x-1' : ''}`} size={16} />
          </Link>
        </div>
        
        {/* Border Glow Effect */}
        <div 
          className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none 
            ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            background: 'linear-gradient(160deg, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0) 100%)', 
            mixBlendMode: 'overlay' 
          }}
        ></div>
        
        {/* Corner Glow */}
        <div className={`absolute -bottom-16 -right-16 w-32 h-32 rounded-full transition-opacity duration-500 
          ${isHovered ? 'opacity-20 bg-teko-purple' : 'opacity-0 bg-transparent'} blur-2xl`}></div>
      </div>
    </div>
  );
};

export default ServiceCard;
