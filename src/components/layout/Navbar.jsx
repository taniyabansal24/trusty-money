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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="relative flex items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center ml-6">
            <img src={logo} alt="Company Logo" className="h-8 w-8 mr-2"/>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
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
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center space-x-3 ml-auto mr-6">
            <Button variant="primary" size="sm">
              Get Demo
            </Button>
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            className="lg:hidden py-4 space-y-4 bg-white"
          >
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {link.name}
              </button>
            ))}
            <div className="px-4 space-y-2">
              <Button variant="primary" size="sm" className="w-full">
                Get Demo
              </Button>
              <Button variant="primary" size="sm" className="w-full">
                Sign Up
              </Button>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.nav>
  );
};

export default Navbar;
