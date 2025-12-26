// Utility helper functions

export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  }).format(amount);
};

export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num);
};

export const calculateSavings = (amount, competitorFee, trustyFee = 0.005) => {
  const competitorCost = amount * competitorFee;
  const trustyCost = amount * trustyFee;
  return competitorCost - trustyCost;
};

export const calculateFXSavings = (amount, competitorMarkup) => {
  return amount * competitorMarkup;
};

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const getRandomColor = () => {
  const colors = ['green', 'blue', 'purple', 'indigo', 'pink', 'yellow'];
  return colors[Math.floor(Math.random() * colors.length)];
};
