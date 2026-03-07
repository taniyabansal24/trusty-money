import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Container } from "../ui";
import {
  NAVIGATION_LINKS,
  COMPANY_NAME,
  PRODUCT_LINKS,
} from "../../constants/index";
import { scrollToSection } from "../../utils/helpers";
import {
  Receipt,
  FileText,
  Globe,
  CreditCard,
  Wallet,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const menuRef = useRef(null);
  const productDropdownRef = useRef(null);
  const rafRef = useRef(null);
  const lastValueRef = useRef(false);
  const timeoutRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Handle overlay visibility
  useEffect(() => {
    if (productOpen) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setOverlayVisible(true);
    } else {
      timeoutRef.current = setTimeout(() => {
        setOverlayVisible(false);
      }, 150);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [productOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close product dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productDropdownRef.current &&
        !productDropdownRef.current.contains(event.target)
      ) {
        setProductOpen(false);
      }
    };

    if (productOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productOpen]);

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

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setProductOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setProductOpen(false);
    }, 150);
  };

  const visibleLinks = NAVIGATION_LINKS.filter(
    (link) => link.name !== "Careers" && link.name !== "Career",
  );

  // Animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      scale: 0.98,
      transition: {
        duration: 0.15,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Background Overlay when dropdown is open */}
      <AnimatePresence>
        {overlayVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
            onClick={() => setProductOpen(false)}
          />
        )}
      </AnimatePresence>

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
          <div
            className="relative flex items-center h-14 lg:h-[70px]"
            ref={menuRef}
          >
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
              {/* ABOUT LINK */}
              <a
                href="/about-us"
                className="text-body transition-colors duration-200 text-[#1B1B1B] hover:text-[#073f9e]"
              >
                About
              </a>

              {/* PRODUCTS DROPDOWN */}
              <div
                className="relative"
                ref={productDropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`text-body transition-colors duration-200 flex items-center gap-1 ${
                    productOpen
                      ? "text-[#073f9e]"
                      : "text-[#1B1B1B] hover:text-[#073f9e]"
                  }`}
                >
                  Products
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: productOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {productOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-[60px] left-[-475%] transform -translate-x-1/2 w-[820px] bg-white shadow-2xl rounded-2xl border border-gray-100 p-6"
                    >
                      {/* Small arrow on top */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-t border-l border-gray-100"></div>

                      <div className="grid grid-cols-2 gap-3">
                        {PRODUCT_LINKS.map((product) => {
                          const Icon = product.icon;

                          return (
                            <motion.a
                              key={product.name}
                              href={product.href}
                              variants={dropdownItemVariants}
                              className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#EFF4FF] transition-all group cursor-pointer"
                              onClick={() => setProductOpen(false)}
                            >
                              {/* Icon with background */}
                              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#EFF4FF] rounded-xl group-hover:bg-white transition-colors duration-200">
                                <Icon size={20} stroke={"#073f9e"} className="text-[#073f9e]" />
                              </div>

                              {/* Content */}
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-[15px] font-semibold text-[#1B1B1B] group-hover:text-[#073f9e] transition-colors duration-200">
                                    {product.name}
                                  </span>
                                  <ArrowRight
                                    size={16}
                                    className="opacity-0 group-hover:opacity-100 text-[#073f9e] transition-all duration-200 transform group-hover:translate-x-1"
                                  />
                                </div>
                                <p className="text-[13px] text-gray-500 mt-1.5 leading-relaxed pr-2">
                                  {product.description}
                                </p>
                              </div>
                            </motion.a>
                          );
                        })}
                      </div>

                      {/* Footer with "View all products" link */}
                      {/* <div className="mt-4 pt-4 border-t border-gray-100">
                        <a
                          href="/products"
                          className="flex items-center justify-center gap-2 text-[14px] text-[#073f9e] font-medium hover:gap-3 transition-all duration-200"
                          onClick={() => setProductOpen(false)}
                        >
                          View all products
                          <ArrowRight size={16} />
                        </a>
                      </div> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* RESOURCES LINK */}
              <button
                onClick={() => handleNavClick("#resources")}
                className="text-body transition-colors duration-200 text-[#1B1B1B] hover:text-[#073f9e]"
              >
                Resources
              </button>

              {/* JOIN US LINK */}
              <a
                href="/about-us"
                className="text-body transition-colors duration-200 text-[#1B1B1B] hover:text-[#073f9e]"
              >
                Join Us
              </a>
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
                    open: { rotate: 45, y: 8 },
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute top-3 left-0 w-6 h-0.5 bg-current rounded-full"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute top-5 left-0 w-6 h-0.5 bg-current rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 },
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
                      {/* About Link */}
                      <motion.div variants={itemVariants}>
                        <a
                          href="/about-us"
                          className="flex items-center justify-between w-full text-left px-4 py-3 text-body rounded-xl transition-all duration-200 active:scale-[0.98] hover:bg-[#EFF4FF] hover:text-[#0B43A0] group"
                          style={{ color: "#1b1b1b" }}
                          onClick={() => setIsOpen(false)}
                        >
                          <span>About</span>
                          <svg
                            className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </motion.div>

                      {/* Products Section in Mobile */}
                      <motion.div variants={itemVariants} className="mb-2">
                        <div className="px-4 py-2">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Products
                          </span>
                        </div>
                        {PRODUCT_LINKS.map((product) => {
                          const Icon = product.icon;
                          return (
                            <a
                              key={product.name}
                              href={product.href}
                              className="flex items-center gap-3 w-full text-left px-4 py-3 text-body rounded-xl transition-all duration-200 active:scale-[0.98] hover:bg-[#EFF4FF] group"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="w-8 h-8 flex items-center justify-center bg-[#EFF4FF] rounded-lg group-hover:bg-white">
                                <Icon size={16} className="text-[#073f9e]" />
                              </div>
                              <span className="flex-1">{product.name}</span>
                              <ArrowRight
                                size={16}
                                className="opacity-0 group-hover:opacity-100 text-[#073f9e]"
                              />
                            </a>
                          );
                        })}
                      </motion.div>

                      {/* Resources Link */}
                      <motion.div variants={itemVariants}>
                        <button
                          onClick={() => {
                            handleNavClick("#resources");
                            setIsOpen(false);
                          }}
                          className="flex items-center justify-between w-full text-left px-4 py-3 text-body rounded-xl transition-all duration-200 active:scale-[0.98] hover:bg-[#EFF4FF] hover:text-[#0B43A0] group"
                          style={{ color: "#1b1b1b" }}
                        >
                          <span>Resources</span>
                          <svg
                            className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </motion.div>

                      {/* Join Us Link */}
                      <motion.div variants={itemVariants}>
                        <a
                          href="/about-us"
                          className="flex items-center justify-between w-full text-left px-4 py-3 text-body rounded-xl transition-all duration-200 active:scale-[0.98] hover:bg-[#EFF4FF] hover:text-[#0B43A0] group"
                          style={{ color: "#1b1b1b" }}
                          onClick={() => setIsOpen(false)}
                        >
                          <span>Join Us</span>
                          <svg
                            className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </motion.div>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                      variants={itemVariants}
                      className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"
                    />

                    {/* Call to Action */}
                    <motion.div variants={itemVariants} className="space-y-4">
                      <motion.div whileTap={{ scale: 0.97 }}>
                        <Button
                          variant="primary"
                          size="md"
                          className="w-full"
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

                    {/* Contact Info */}
                    <motion.div
                      variants={itemVariants}
                      className="mt-8 pt-6 border-t border-gray-100"
                    >
                      <p className="text-center text-gray-500 text-sm">
                        Need help?{" "}
                        <a
                          href="mailto:support@trustymoney.in"
                          className="text-[#0B43A0] font-medium hover:underline"
                        >
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
    </>
  );
};

export default Navbar;