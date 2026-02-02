import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Container } from "../ui";
import { NAVIGATION_LINKS, COMPANY_NAME } from "../../constants";
import { scrollToSection } from "../../utils/helpers";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const rafRef = useRef(null);
  const lastValueRef = useRef(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleNavClick = (href) => {
    if (!href.startsWith("/")) {
      const sectionId = href.replace("#", "");
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  const visibleLinks = NAVIGATION_LINKS.filter(
    (link) => link.name !== "Careers" && link.name !== "Career"
  );

  // Animation variants
  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="relative flex items-center h-14 lg:h-[70px]" ref={menuRef}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/">
              <img
                src="https://demo.trustymoney.in/assets/newLOGO-Cj83E8a4.svg"
                alt="Trusty Money Logo"
                width="155"
                height="24"
                fetchpriority="high"
                decoding="async"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {visibleLinks.map((link) =>
              link.href === "/about-us" ? (
                <a
                  key={link.name}
                  href="/about-us"
                  className="text-body transition-colors duration-200 text-[#1B1B1B] hover:text-[#073f9e]"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-body transition-colors duration-200 text-[#1B1B1B] hover:text-[#073f9e]"
                >
                  {link.name}
                </button>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Button
              variant="primary"
              size="sm"
              className="bg-[#0B43A0] text-white hover:bg-[#073f9e] transition-colors"
              shimmer
            >
              Get Demo
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="bg-[#0B43A0] text-white hover:bg-[#073f9e] transition-colors"
              shimmer
            >
              <a href="/sign-up">Sign Up</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-auto p-2 rounded-md transition-colors active:scale-95"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="relative w-6 h-6"
            >
              <motion.span
                className="absolute top-1 left-0 w-6 h-0.5 bg-current rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute top-3 left-0 w-6 h-0.5 bg-current rounded-full"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute top-5 left-0 w-6 h-0.5 bg-current rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 mt-14"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                className="lg:hidden fixed top-14 left-0 right-0 z-50 bg-white shadow-2xl border-t border-gray-100 overflow-y-auto"
                style={{ height: "calc(100vh - 3.5rem)" }}
              >
                <div className="px-4 py-6">
                  {/* Navigation Links */}
                  <motion.div className="space-y-1 mb-6">
                    {visibleLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        variants={itemVariants}
                        transition={{ duration: 0.2 }}
                      >
                        {link.href === "/about-us" ? (
                          <a
                            href="/about-us"
                            className="flex items-center justify-between w-full text-left px-4 py-3 text-body rounded-xl transition-all duration-200 active:scale-[0.98] hover:bg-[#EFF4FF] hover:text-[#0B43A0] group"
                            style={{ color: "#1b1b1b" }}
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{link.name}</span>
                            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        ) : (
                          <button
                            onClick={() => handleNavClick(link.href)}
                            className="flex items-center justify-between w-full text-left px-4 py-3 text-body rounded-xl transition-all duration-200 active:scale-[0.98] hover:bg-[#EFF4FF] hover:text-[#0B43A0] group"
                            style={{ color: "#1b1b1b" }}
                          >
                            <span>{link.name}</span>
                            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Divider */}
                  <motion.div 
                    variants={itemVariants}
                    className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"
                  />

                  {/* Call to Action */}
                  <motion.div 
                    variants={itemVariants}
                    className="space-y-4"
                  >
                    <motion.div whileTap={{ scale: 0.97 }}>
                      <Button
                        variant="primary"
                        size="md"
                        className="w-full "
                        onClick={() => setIsOpen(false)}
                        shimmer
                      >
                        Get Demo
                      </Button>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.97 }}>
                      <Button
                        variant="primary"
                        size="md"
                        className="w-full"
                        onClick={() => setIsOpen(false)}
                        shimmer
                      >
                        <a href="/sign-up" className="w-full block">
                          Sign Up
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Contact Info (Optional) */}
                  <motion.div 
                    variants={itemVariants}
                    className="mt-8 pt-6 border-t border-gray-100"
                  >
                    <p className="text-center text-gray-500 text-sm">
                      Need help?{" "}
                      <a href="mailto:support@trustymoney.in" className="text-[#0B43A0] font-medium hover:underline">
                        Contact us
                      </a>
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  );
};

export default Navbar;