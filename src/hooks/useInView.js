import { useState, useEffect } from 'react';

/**
 * Hook to track if an element is in viewport
 * Useful for triggering animations on scroll
 */
export const useInView = (ref, options = {}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
};
