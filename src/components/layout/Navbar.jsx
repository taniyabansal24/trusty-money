import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Container } from '../ui';
import { NAVIGATION_LINKS, COMPANY_NAME } from '../../constants';
import { scrollToSection } from '../../utils/helpers';
import logo from '../../assets/logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const rafRef = useRef(null);
  const lastValueRef = useRef(false);

  useEffect(() => {
    const threshold = 20;

    const read = () => {
      rafRef.current = null;
      const next = (window.pageYOffset || 0) > threshold;
      if (next !== lastValueRef.current) {
        lastValueRef.current = next;
        setIsScrolled(next);
      }
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleNavClick = (href) => {
    // If it's an external link (starts with /), don't prevent default
    if (!href.startsWith('/')) {
      // Only handle hash links for scrolling
      const sectionId = href.replace('#', '');
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  const visibleLinks = NAVIGATION_LINKS.filter(
    (link) => link.name !== 'Careers' && link.name !== 'Career'
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="relative flex items-center h-14 lg:h-20">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/">
              <img src={logo} alt="Company Logo" className=" w-[170px] h-[32px]" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {visibleLinks.map((link) => (
              link.href === '/about-us' ? (
                <a
                  key={link.name}
                  href="/about-us"
                  className="text-body transition-colors duration-200 text-[#1B1B1B]"
                  style={{ color: '#1B1B1B' }}
                  onMouseEnter={(e) => (e.target.style.color = '#073f9e')}
                  onMouseLeave={(e) => (e.target.style.color = '#1B1B1B')}
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-body transition-colors duration-200"
                  style={{ color: '#1B1B1B' }}
                  onMouseEnter={(e) => (e.target.style.color = '#073f9e')}
                  onMouseLeave={(e) => (e.target.style.color = '#1B1B1B')}
                >
                  {link.name}
                </button>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Button 
              variant="primary" 
              size="sm" 
              style={{ 
                backgroundColor: '#0B43A0',
                color: '#FFFFFF'
              }} 
              shimmer
            >
              Get Demo
            </Button>
            <Button 
              variant="primary" 
              size="sm" 
              style={{ 
                backgroundColor: '#0B43A0',
                color: '#FFFFFF'
              }} 
              shimmer
            >
              <a href='/sign-up'>Sign Up</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-auto p-2 rounded-md transition-colors"
            style={{ color: isScrolled ? '#0A2540' : '#FFFFFF' }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-2 rounded-lg bg-white shadow-lg py-4 space-y-3"
          >
            {visibleLinks.map((link) => (
              link.href === '/about-us' ? (
                <a
                  key={link.name}
                  href="/about-us"
                  className="block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-all duration-150 active:scale-[0.98]"
                  style={{ color: '#425466' }}
                  onClick={() => setIsOpen(false)}
                  onTouchStart={(e) => {
                    e.currentTarget.style.backgroundColor = '#EFF4FF';
                    e.currentTarget.style.color = '#0B43A0';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#425466';
                  }}
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-all duration-150 active:scale-[0.98]"
                  style={{ color: '#425466' }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.backgroundColor = '#EFF4FF';
                    e.currentTarget.style.color = '#0B43A0';
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#425466';
                  }}
                >
                  {link.name}
                </button>
              )
            ))}

            <div className="px-4 space-y-2 pt-2">
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  style={{ backgroundColor: '#0B43A0' }}
                >
                  Get Demo
                </Button>
              </motion.div>

              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  style={{ backgroundColor: '#0B43A0' }}
                >
                  <a href='/sign-up' onClick={() => setIsOpen(false)}>Sign Up</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.nav>
  );
};

export default Navbar;