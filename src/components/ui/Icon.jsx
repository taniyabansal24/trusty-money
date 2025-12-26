import React from 'react';
import { 
  FaCreditCard, 
  FaBolt, 
  FaFileInvoiceDollar, 
  FaGlobe, 
  FaChartLine, 
  FaShieldAlt,
  FaLock,
  FaRobot,
  FaCheckCircle,
  FaEye,
  FaStar,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaExchangeAlt,
  FaDollarSign,
  FaClock,
  FaUsers,
  FaCheckDouble
} from 'react-icons/fa';

const iconMap = {
  currency: FaExchangeAlt,
  bolt: FaBolt,
  document: FaFileInvoiceDollar,
  globe: FaGlobe,
  chart: FaChartLine,
  shield: FaShieldAlt,
  lock: FaLock,
  robot: FaRobot,
  checkmark: FaCheckCircle,
  eye: FaEye,
  star: FaStar,
  arrow: FaArrowRight,
  chevronDown: FaChevronDown,
  chevronUp: FaChevronUp,
  card: FaCreditCard,
  dollar: FaDollarSign,
  clock: FaClock,
  users: FaUsers,
  checkDouble: FaCheckDouble,
};

const Icon = ({ name, className = '', size = 24 }) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent className={className} size={size} />;
};

export default Icon;
