import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Container } from "../components/ui";
import { staggerContainer, staggerItem } from "../utils/animations";
import logo from "../assets/logo.png";
import IconSequenceAnimation from "../sections/HeroSection/IconSequenceAnimation";

// CountUp component for animated numbers
const CountUp = ({
  end,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(progress * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  const [showMindMap, setShowMindMap] = useState(false);

  useEffect(() => {
    // Switch to mind map after 5 seconds
    const timer = setTimeout(() => {
      setShowMindMap(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
<section className="relative w-full min-h-screen lg:h-screen flex flex-col items-start overflow-hidden">


      {/* Main Section Container - matching original padding */}
      <div
        className="relative w-full h-full flex flex-col items-start"
        style={{
          paddingTop: "120px",
          isolation: "isolate",
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
        }}
      >
        {/* Container - Primary gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #E9F8FF 0%, #FDFEFF 100%)",
            zIndex: "0",
          }}
        ></div>

        {/* Background+Blur - Circle on right side - RESPONSIVE */}
        <div
          className="absolute hidden lg:block"
          style={{
            width: "501px",
            height: "499px",
            right: "-160px",
            top: "-160px",
            background: "#FFFFFF",
            mixBlendMode: "multiply",
            opacity: "0.3",
            filter: "blur(12px)",
            borderRadius: "9999px",
            zIndex: "0",
          }}
        ></div>

        {/* Mobile background blur */}
        <div
          className="absolute lg:hidden block"
          style={{
            width: "300px",
            height: "300px",
            right: "-100px",
            top: "-100px",
            background: "#FFFFFF",
            mixBlendMode: "multiply",
            opacity: "0.2",
            filter: "blur(8px)",
            borderRadius: "9999px",
            zIndex: "0",
          }}
        ></div>

        {/* Gradient+Blur - Bottom overlay */}
        <div
          className="absolute left-0 right-0"
          style={{
            height: "96px",
            bottom: "-32px",
            background:
              "linear-gradient(180deg, rgba(245, 248, 255, 0) 0%, rgba(245, 248, 255, 0.55) 50%, #F8FAFC 100%)",
            filter: "blur(4px)",
            zIndex: "1",
          }}
        ></div>
        
        <Container className="relative z-10 px-4 sm:px-6 ">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-6">
            {/* Left Side - Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="false"
              animate="animate"
              className="text-center lg:text-left relative"
            >
              {/* Badge - RESPONSIVE */}
              <motion.div
                variants={staggerItem}
                className="mb-6 lg:mb-8 flex justify-center lg:justify-start items-center gap-3"
              >
                <span
                  className="inline-block px-4 py-2 rounded-full hero-badge txt-blue light-bg text-center"
                >
                  Cross-Border Operating System
                </span>
              </motion.div>

              {/* Headline - RESPONSIVE */}
              <motion.h1 className="hero-heading w-full text-center lg:text-left">
                The Operating System for{" "}
                <span className="gradient-text relative">
                  Cross-Border Business
                </span>
              </motion.h1>

              {/* Subheadline line - RESPONSIVE */}
              <motion.p className="section-subtitle mb-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                Designed for billing, compliance, payments, FX, treasury and
                working capital
              </motion.p>

              {/* CTA Buttons - RESPONSIVE */}
              <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
              >
                <Button variant="primary" size="md" shimmer>
                  Request a Demo
                </Button>
                <Button variant="secondary" size="md">
                  Talk to Sales
                </Button>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="text-muted space-y-2"
              >
                {[].map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 + i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        delay: 2.5 + i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className="text-green-600 font-bold"
                    >
                      {item.icon}
                    </motion.span>
                    {item.text}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Mobile Mockup with Graphs */}
            <div className="relative sm:mt-20 lg:mt-20">
              <IconSequenceAnimation />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;