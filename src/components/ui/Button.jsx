import React from 'react';
import { motion } from 'framer-motion';
import { hoverScale } from '../../utils/animations';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50',
    outline: 'bg-transparent text-gray-700 border-2 border-gray-300 hover:border-primary-600 hover:text-primary-600',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
    success: 'bg-trusty-green text-white hover:bg-green-600',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  
  return (
    <motion.button
      {...hoverScale}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? disabledStyles : ''}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
