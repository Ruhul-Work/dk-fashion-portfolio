import React from 'react';
import logoImage from '../assets/images/dk-fashion-logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const imageSize = size === 'sm' ? 'w-16 h-14' : size === 'lg' ? 'w-28 h-24' : 'w-24 h-20';

  return (
    <img
      src={logoImage}
      alt="DK Fashion"
      className={`object-contain shrink-0 ${imageSize} ${className}`}
    />
  );
};
