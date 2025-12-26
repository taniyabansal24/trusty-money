import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = true,
  ...props 
}) => {
  const baseStyles = 'bg-white rounded-xl card-shadow';
  const hoverStyles = hover ? 'hover:card-shadow-hover transition-all duration-300' : '';
  const paddingStyles = padding ? 'p-6 lg:p-8' : '';
  
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`${baseStyles} ${hoverStyles} ${paddingStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
