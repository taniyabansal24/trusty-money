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
    primary: 'text-white hover:shadow-lg',
    secondary: 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 text-blue-900',
    outline: 'bg-transparent border-2 border-gray-300 hover:border-gray-700 hover:text-gray-700',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
    success: 'bg-trusty-green text-white hover:bg-green-600',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  
  const getVariantStyle = (variant) => {
    switch(variant) {
      case 'primary':
        return { backgroundColor: '#073f9e' };
      case 'secondary':
        return { color: '#073f9e', borderColor: '#073f9e' };
      default:
        return {};
    }
  };
  
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
      style={getVariantStyle(variant)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
