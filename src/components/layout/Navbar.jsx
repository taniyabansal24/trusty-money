import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Container } from '../ui';
import { NAVIGATION_LINKS, COMPANY_NAME } from '../../constants';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { scrollToSection } from '../../utils/helpers';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 20;

  const handleNavClick = (href) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="relative flex items-center h-16 lg:h-20">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Company Logo" className="h-8 w-8" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold cursor-pointer"
              style={{ color: '#073f9e' }}
            >
              {COMPANY_NAME}
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#425466' }}
                onMouseEnter={(e) => (e.target.style.color = '#0B43A0')}
                onMouseLeave={(e) => (e.target.style.color = '#425466')}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Button variant="primary" size="sm" style={{ backgroundColor: '#0B43A0' }}>
              Get Demo
            </Button>
            <Button variant="primary" size="sm" style={{ backgroundColor: '#0B43A0' }}>
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-auto p-2 rounded-md transition-colors"
            style={{ color: '#0A2540' }}
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
            className="lg:hidden mt-2 rounded-lg bg-white shadow-md py-4 space-y-3"
          >
            {NAVIGATION_LINKS.map((link) => (
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
                  Sign Up
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
