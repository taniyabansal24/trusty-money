import React from "react";
import { Container } from "../components/ui";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";
import SecureCardIcon from "../components/svg/SecureCardIcon";
import Logo from "../components/svg/Logo";
import Tax from "../components/svg/Tax";
import Billing from "../components/svg/Billing";
import Treasury from "../components/svg/Treasury";
import EwalletIcon from "../components/svg/EwalletIcon";

const AboutUsSection = () => {
  // Rotating animation for orbit rings
  const orbitAnimations = {
    outer: {
      animate: { rotate: 360 },
      transition: { 
        ease: "linear", 
        duration: 30, 
        repeat: Infinity 
      }
    },
    middle: {
      animate: { rotate: 360 },
      transition: { 
        ease: "linear", 
        duration: 30, 
        repeat: Infinity 
      }
    },
    inner: {
      animate: { rotate: 360 },
      transition: { 
        ease: "linear", 
        duration: 30, 
        repeat: Infinity 
      }
    }
  };

  // Counter-rotation for each icon (to keep them upright)
  const counterRotateAnimations = {
    outer: {
      animate: { rotate: -360 },
      transition: { 
        ease: "linear", 
        duration: 30, 
        repeat: Infinity 
      }
    },
    middle: {
      animate: { rotate: -360 },
      transition: { 
        ease: "linear", 
        duration: 30, 
        repeat: Infinity 
      }
    },
    inner: {
      animate: { rotate: -360 },
      transition: { 
        ease: "linear", 
        duration: 30, 
        repeat: Infinity 
      }
    }
  };

  return (
    <Container>
      <div className="w-full min-h-screen bg-white pt-10 md:pt-10">
        {/* Main Hero Section */}
        <section>
          {/* Header Section */}
          <div className="text-left">
            {/* About Us Heading */}
            <div className="flex justify-left ">
              <motion.div
                variants={staggerItem}
                className="mb-4 flex items-center gap-3"
              >
                <span
                  className="inline-block px-4 py-2 rounded-full hero-badge"
                  style={{ backgroundColor: "#073f9e12", color: "#073f9e" }}
                >
                  About Us
                </span>
              </motion.div>
            </div>

            <motion.h1
              variants={staggerItem}
              className="section-hero-heading text-gray-900"
            >
              Building the Financial Infrastructure <br />
              <span className="gradient-text relative">
                for Global Commerce
              </span>
            </motion.h1>
            <p className="section-subtitle text-gray-600 max-w-xl ">
              Unifying billing, compliance, payments, and treasury into a
              single, coherent platform
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mt-10">
            {/* Left Column - Text Content */}
            <div>
              {/* Who We Are Section */}
              <div className="mb-10">
                <div className="flex">
                  <SecureCardIcon className="w-9 h-9" />
                  <h2 className="feature-title text-[#0F172B] ">Who We Are</h2>
                </div>

                <p className="feature-description text-[#314158]">
                  Trusty Money is a financial infrastructure company building a
                  modern operating system for cross-border commerce.
                </p>

                <p className="feature-description text-[#314158] mt-2">
                  We are not a payment gateway with add-ons. We are rebuilding
                  the core financial layers that global businesses rely on –
                  billing, compliance, payments, treasury, and reporting – as
                  modular, programmable products.
                </p>

                {/* "Us -:" Section */}
                <div>
                  <h2 className="feature-title text-[#0F172B] mt-5">Us -:</h2>
                  <p className="feature-description text-[#314158]">
                    Our platform is designed for businesses that operate
                    globally by default and need financial systems that scale
                    with complexity, not against it.
                  </p>
                </div>
              </div>

              {/* Why Now Section */}
              <div>
                <h2 className="feature-title text-[#0F172B] mt-5">Why now?</h2>
                <p className="feature-description text-[#314158]">
                  Globalization has accelerated, but financial infrastructure
                  hasn't kept pace. Businesses face fragmented systems, hidden
                  costs, and compliance hurdles.
                </p>
              </div>
            </div>

            {/* Right Column - Solar System Orbital Motion */}
            <div className="lg:sticky lg:top-32">
              <div className="w-full aspect-square max-w-[750px] mx-auto relative top-[-30%]">
                
                {/* Main Orbital System Container */}
                <div className="relative w-full h-full">
                  
                  {/* Center Logo */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center">
                      <Logo width={38} height={38} />
                    </div>
                  </div>

                  {/* Four Orbit Lines (Static) */}
                  <div className="absolute inset-0 border-2 border-[#073F9E] rounded-full opacity-30"></div>
                  <div className="absolute inset-14 border-2 border-[#073F9E] rounded-full opacity-30"></div>
                  <div className="absolute inset-28 border-2 border-[#073F9E] rounded-full opacity-30"></div>
                  <div className="absolute inset-44 border-2 border-[#073F9E] rounded-full opacity-30"></div>

                  {/* Orbiting Cards with Proper Counter-Rotation */}

                  {/* Outer Orbit Ring (Tax & Treasury) */}
                  <motion.div 
                    className="absolute inset-0" 
                    {...orbitAnimations.outer}
                  >
                    {/* Tax - Top Position */}
                    <motion.div
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      {...counterRotateAnimations.outer}
                    >
                      <div className="transform scale-[0.8] hover:scale-95 transition-transform duration-300">
                        <Tax />
                      </div>
                    </motion.div>

                    {/* Treasury - Bottom Position */}
                    <motion.div
                      className="absolute bottom-[136px] right-[26%] transform -translate-x-1/2 translate-y-1/2"
                      {...counterRotateAnimations.outer}
                    >
                      <div className="transform scale-[0.8] hover:scale-95 transition-transform duration-300">
                        <Treasury />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Middle Orbit Ring (E-wallet & Billing) */}
                  <motion.div 
                    className="absolute inset-14" 
                    {...orbitAnimations.middle}
                  >
                    {/* Billing - Right Position */}
                    <motion.div
                      className="absolute top-[85%] right-0 transform translate-x-1/2 -translate-y-1/2"
                      {...counterRotateAnimations.middle}
                    >
                      <div className="transform scale-[0.8] hover:scale-95 transition-transform duration-300">
                        <Billing />
                      </div>
                    </motion.div>

                    {/* E-wallet - Left Position */}
                    <motion.div
                      className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"
                      {...counterRotateAnimations.middle}
                    >
                      <div className="transform scale-[0.8] hover:scale-95 transition-transform duration-300">
                        <EwalletIcon />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Connecting Lines from Center to Orbits */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
                    {/* Line to Top (Tax) */}
                    <line 
                      x1="50%" 
                      y1="50%" 
                      x2="50%" 
                      y2="10%" 
                      stroke="#073F9E" 
                      strokeWidth="1" 
                      strokeDasharray="4" 
                      className="opacity-30"
                    />
                    
                    {/* Line to Right (Billing) */}
                    <line 
                      x1="50%" 
                      y1="50%" 
                      x2="90%" 
                      y2="50%" 
                      stroke="#073F9E" 
                      strokeWidth="1" 
                      strokeDasharray="4" 
                      className="opacity-30"
                    />
                    
                    {/* Line to Bottom (Treasury) */}
                    <line 
                      x1="50%" 
                      y1="50%" 
                      x2="50%" 
                      y2="90%" 
                      stroke="#073F9E" 
                      strokeWidth="1" 
                      strokeDasharray="4" 
                      className="opacity-30"
                    />
                    
                    {/* Line to Left (E-wallet) */}
                    <line 
                      x1="50%" 
                      y1="50%" 
                      x2="10%" 
                      y2="50%" 
                      stroke="#073F9E" 
                      strokeWidth="1" 
                      strokeDasharray="4" 
                      className="opacity-30"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default AboutUsSection;