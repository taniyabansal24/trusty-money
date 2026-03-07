import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UsageBasedBilling = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldExit, setShouldExit] = useState(false);
  const [activeBar, setActiveBar] = useState(5); // Index of highlighted bar

  const usageBars = [
    { height: 80, opacity: "bg-[rgba(7,63,158,0.1)]" }, // 80px
    { height: 112, opacity: "bg-[rgba(7,63,158,0.2)]" }, // 112px
    { height: 96, opacity: "bg-[rgba(7,63,158,0.3)]" }, // 96px
    { height: 144, opacity: "bg-[rgba(7,63,158,0.4)]" }, // 144px
    { height: 128, opacity: "bg-[rgba(7,63,158,0.6)]" }, // 128px
    { height: 160, opacity: "bg-[#073F9E] shadow-lg" }, // 160px - highlighted
    { height: 112, opacity: "bg-[rgba(7,63,158,0.6)]" }, // 112px
    { height: 80, opacity: "bg-[rgba(7,63,158,0.4)]" }, // 80px
    { height: 56, opacity: "bg-[rgba(7,63,158,0.2)]" }, // 56px
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldExit(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Cycle through bars to highlight different ones
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBar((prev) => (prev + 1) % usageBars.length);
    }, 800);

    return () => clearInterval(interval);
  }, [usageBars.length]);

  // Container animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  // Bar animation variants
  const barVariants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: (custom) => ({
      height: custom.height,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: custom.index * 0.05,
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && !shouldExit && (
        <motion.div
          key="usage-based-billing"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="max-w-[450px] mx-auto relative"
        >
          {/* Main Card Container */}
          <motion.div
            className="bg-white border border-[#E2E8F0] shadow-md rounded-xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Header with controls */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-[rgba(248,250,252,0.5)] border-b border-[#F1F5F9] px-4 py-3"
            >
              <div className="flex items-center justify-between">
                {/* Left controls */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="w-3 h-3 bg-[#CBD5E1] rounded-full"
                      />
                    ))}
                  </div>
                  <div className="w-px h-4 bg-[#E2E8F0]" />
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs font-bold tracking-wider uppercase text-[#073F9E]"
                  >
                    Usage overview
                  </motion.div>
                </div>

                {/* Live metering badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    delay: 0.3,
                  }}
                  className="flex items-center gap-1.5 bg-[rgba(7,63,158,0.1)] rounded-md px-2 py-1"
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-1.5 h-1.5 bg-[#073F9E] rounded-full"
                  />
                  <span className="text-[10px] font-bold text-[#073F9E]">
                    LIVE METERING
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Main content */}
            <div className="p-5">
              {/* Usage bars graph */}
              <div className="flex items-end gap-2 h-40 mb-4">
                {usageBars.map((bar, index) => (
                  <motion.div
                    key={index}
                    custom={{ height: bar.height, index }}
                    variants={barVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#073F9E",
                      transition: { duration: 0.2 },
                    }}
                    className={`flex-1 ${bar.height} ${bar.opacity} rounded-t-lg transition-all duration-300`}
                  />
                ))}
              </div>

              {/* Stats boxes */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-[rgba(7,63,158,0.04)] border border-[#F1F5F9] rounded-xl p-4"
              >
                {/* Consumption */}
                <div className="mb-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-1">
                    Jan - Consumption
                  </div>
                  <motion.div
                    className="text-xl font-bold text-[#0F172A] tracking-tight"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    $120.00
                  </motion.div>
                </div>

                {/* Progress bar */}
                <div className="relative mb-4">
                  <div className="w-full h-2 bg-[#E2E8F0] rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "66%" }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="h-2 bg-[#073F9E] rounded-full relative"
                    >
                      <motion.div
                        animate={{
                          x: [0, 5, 0],
                          scale: [1, 1.2, 1],
                        }}
                        className="absolute right-0 top-[-35%] -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border-4 border-[#073F9E] rounded-full shadow-lg"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Usage card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/50 border border-[#E2E8F0] rounded-lg p-2"
                  >
                    <div className="text-[8px] font-bold uppercase text-[#94A3B8] mb-1">
                      Usage
                    </div>
                    <div className="text-xs font-bold text-[#475569]">1200</div>
                  </motion.div>

                  {/* Unit Price card - highlighted */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      borderColor: ["#073F9E", "#2563EB", "#073F9E"],
                    }}
                    className="bg-[rgba(7,63,158,0.05)] border-2 border-[#073F9E] rounded-lg p-2 shadow-sm"
                  >
                    <div className="text-[8px] font-bold uppercase text-[#073F9E] mb-1">
                      Unit Price
                    </div>
                    <div className="text-xs font-bold text-[#073F9E]">
                      $0.10/unit
                    </div>
                  </motion.div>

                  {/* Amount card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white border border-[#E2E8F0] rounded-lg p-2"
                  >
                    <div className="text-[8px] font-bold uppercase text-[#94A3B8] mb-1">
                      Amount
                    </div>
                    <div className="text-xs font-bold text-[#475569]">
                      $120.00
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Pay Now button */}
              <div className="flex justify-end mt-2">
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#052d73" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#073F9E] rounded-lg text-xs text-white shadow-md hover:bg-[#052d73] transition-colors"
                >
                  Pay Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UsageBasedBilling;
