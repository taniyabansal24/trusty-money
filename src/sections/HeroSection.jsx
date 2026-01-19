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
    <section className="relative min-h-screen pt-32 lg:pt-40 pb-24 overflow-hidden">
      {/* Main gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #FDFEFF 0%, #E9F8FF 100%)",
        }}
      ></div>

      {/* Gradient+Blur overlay at bottom - EXACT CSS MATCH */}
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

      <Container className="relative z-10 mt-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="false"
            animate="animate"
            
            className="text-left relative"
          >
            {/* Badge */}
            <motion.div
              variants={staggerItem}
              className="mb-8 flex items-center gap-3"
            >
              <span
                className="inline-block px-4 py-2 rounded-full hero-badge"
                style={{ backgroundColor: "#073f9e12", color: "#073f9e" }}
              >
                Cross-Border Operating System
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 className="hero-heading">
              The Operating System for{" "}
              <span className="gradient-text relative">
                Cross-Border Business
                {/* Animated underline */}
              </span>
            </motion.h1>

            {/* Subheadline line */}
            <motion.p className="section-subtitle mb-6 max-w-lg">
              Designed for billing, compliance, payments, FX, treasury and
              working capital
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button variant="primary" size="md">
                Request a Demo
              </Button>
              <Button variant="secondary" size="md">
                Talk to Sales
              </Button>
            </motion.div>

            <motion.div variants={staggerItem} className="text-muted space-y-2">
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
          <div className="relative">
            <IconSequenceAnimation />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
