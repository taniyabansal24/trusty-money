import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Container } from "../components/ui";
import { staggerContainer, staggerItem } from "../utils/animations";
import logo from "../assets/logo.png";

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
    <section className="relative pt-32 lg:pt-40 lg:pb-32 gradient-bg overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-left relative pt-8 lg:pt-0"
          >
          {/* Badge */}
            <motion.div
              variants={staggerItem}
              className="mb-8 flex items-center gap-3"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#073f9e12', color: '#073f9e' }}>
                Cross-Border Operating System
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              The Operating System for{" "}
              <span className="gradient-text relative">
                Cross-Border Business
                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full"
                />
              </span>
            </motion.h1>

            {/* Subheadline line */}
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed"
            >
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
              <Button variant="outline" size="md">
                Talk to Our Team
              </Button>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="text-sm text-gray-600 space-y-2"
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

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="absolute -bottom-8 left-20 bg-white px-3 py-2 rounded-lg shadow-lg border border-blue-200 hidden lg:block"
            ></motion.div>
          </motion.div>

          {/* Right Side - Mobile Mockup with Graphs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Circular Dashboard - Top Right Corner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, type: "spring" }}
              className="absolute top-0 -right-60 w-[260px] h-[260px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 hidden xl:block z-0"
              style={{
                background:
                  "linear-gradient(135deg, #073e9e13 0%, #073e9e5e 100%)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="text-sm font-bold text-gray-800">
                    Distribution
                  </h3>
                  <p className="text-xs text-gray-500">By region</p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center"
                >
                  <span className="text-xs">🌍</span>
                </motion.div>
              </div>

              {/* Circular Graphs Container */}
              <div className="flex items-center justify-center mb-2">
                {/* Main Circular Progress */}
                <div className="relative w-36 h-36">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 120 120"
                  >
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#f0f0f0"
                      strokeWidth="12"
                    />

                    {/* Animated segments */}
                    {[
                      { percent: 35, color: "##073f9e", offset: 0, delay: 0.6 },
                      { percent: 28, color: "#764ba2", offset: 35, delay: 0.8 },
                      { percent: 22, color: "#f093fb", offset: 63, delay: 1.0 },
                      { percent: 15, color: "#4facfe", offset: 85, delay: 1.2 },
                    ].map((segment, i) => {
                      const circumference = 2 * Math.PI * 50;
                      const strokeDasharray = `${
                        (segment.percent / 100) * circumference
                      } ${circumference}`;
                      const strokeDashoffset = -(
                        (segment.offset / 100) *
                        circumference
                      );

                      return (
                        <motion.circle
                          key={i}
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke={segment.color}
                          strokeWidth="12"
                          strokeLinecap="round"
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{
                            duration: 1.5,
                            delay: segment.delay,
                            ease: "easeOut",
                          }}
                        />
                      );
                    })}
                  </svg>

                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.p
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.5, type: "spring" }}
                      className="text-3xl font-bold text-gray-800"
                    >
                      100%
                    </motion.p>
                    <p className="text-xs text-gray-500">Coverage</p>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    label: "Americas",
                    value: "35%",
                    color: "bg-[#667eea]",
                    delay: 1.8,
                  },
                  {
                    label: "Europe",
                    value: "28%",
                    color: "bg-[#764ba2]",
                    delay: 1.9,
                  },
                  {
                    label: "Asia",
                    value: "22%",
                    color: "bg-[#f093fb]",
                    delay: 2.0,
                  },
                  {
                    label: "Others",
                    value: "15%",
                    color: "bg-[#4facfe]",
                    delay: 2.1,
                  },
                ].map((region, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: region.delay }}
                    className="flex items-center gap-2 p-2 bg-white rounded-lg"
                  >
                    <motion.div
                      className={`w-3 h-3 rounded-full ${region.color}`}
                      whileHover={{ scale: 1.3 }}
                    />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-800">
                        {region.label}
                      </p>
                      <p className="text-xs text-gray-500">{region.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Small circular indicators */}
              <div className="flex justify-around mt-4">
                {[68, 82, 94].map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.2 + i * 0.1, type: "spring" }}
                    className="relative w-12 h-12"
                  >
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 40 40"
                    >
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="none"
                        stroke="#f0f0f0"
                        strokeWidth="4"
                      />
                      <motion.circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="none"
                        stroke="#667eea"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={`${(value / 100) * 100.53} 100.53`}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 2.3 + i * 0.1 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-[10px] font-bold text-gray-700">
                        {value}%
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Background Dashboard Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -top 20 right-80 w-[260px] h-[330px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 hidden lg:block z-0"
              style={{
                background:
                  "linear-gradient(135deg, #667eea10 0%, #073e9e18 100%)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-base font-bold text-gray-800">
                    Analytics Dashboard
                  </h3>
                  <p className="text-xs text-gray-500">Real-time performance</p>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center"
                >
                  <span className="text-xs">📊</span>
                </motion.div>
              </div>

              {/* Line Chart Visualization */}
              <div className="relative h-36 mb-3">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-t border-gray-200"></div>
                  ))}
                </div>

                {/* Chart Line */}
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 150"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 0 120 Q 50 80, 100 90 T 200 60 T 300 40 T 400 20"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#073f9e" />
                      <stop offset="100%" stopColor="#073f9e" />
                    </linearGradient>
                  </defs>

                  {/* Area under curve */}
                  <motion.path
                    d="M 0 120 Q 50 80, 100 90 T 200 60 T 300 40 T 400 20 L 400 150 L 0 150 Z"
                    fill="url(#areaGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                  />
                  <defs>
                    <linearGradient
                      id="areaGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#073f9e" />
                      <stop offset="100%" stopColor="#073f9e60" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Data Points */}
                {[
                  { x: "10%", y: "20%", value: "+24%" },
                  { x: "35%", y: "40%", value: "+18%" },
                  { x: "60%", y: "60%", value: "+32%" },
                  { x: "85%", y: "13%", value: "+45%" },
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.2, type: "spring" }}
                    className="absolute w-3 h-3 bg-primary-500 rounded-full"
                    style={{ left: point.x, top: point.y }}
                  >
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {point.value}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    label: "Revenue",
                    value: "$24.5K",
                    change: "+12%",
                    color: "green",
                  },
                  {
                    label: "Users",
                    value: "1.2K",
                    change: "+8%",
                    color: "blue",
                  },
                  {
                    label: "Growth",
                    value: "24%",
                    change: "+5%",
                    color: "purple",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + i * 0.1 }}
                    className={`bg-${stat.color}-50 p-3 rounded-lg`}
                  >
                    <p className="text-xs text-gray-600">{stat.label}</p>
                    <p className="text-lg font-bold text-gray-800">
                      {stat.value}
                    </p>
                    <p className={`text-xs text-${stat.color}-600`}>
                      ↗ {stat.change}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile Phone Frame */}
            <div className="relative w-full max-w-sm z-10">
              {/* White card phone like Stripe */}
              <div className="relative w-full h-[650px] bg-white rounded-[2.8rem] shadow-[0_20px_40px_rgba(15,23,42,0.15)] overflow-hidden" style={{maxWidth: '320px'}}>
                {/* Dark border like screenshot */}
                <div className="absolute inset-0 rounded-[2.8rem] border-[2px] border-[#e4e4e4]" />



                {/* Screen content */}
                <div className="absolute inset-0 pt-6 px-0">
                  <AnimatePresence mode="wait">
                    {!showMindMap ? (
                      // Dashboard Screen
                      <motion.div
                        key="dashboard"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-primary-50 via-white to-purple-50 h-full p-6"
                      >
                        {/* Dashboard Header */}
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="rounded-2xl p-6 text-white mb-4"
                          style={{
                            background: 'linear-gradient(135deg, #073e9e83 0%, #073f9e 100%)'
                          }}
                        >
                          <p className="text-sm opacity-90">Total Balance</p>
                          <h2 className="text-3xl font-bold mt-1">
                            $124,580.00
                          </h2>
                          <p className="text-sm mt-2 text-primary-100">
                            +12.5% from last month
                          </p>
                        </motion.div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            className="bg-white rounded-xl p-4 shadow-sm"
                          >
                            <p className="text-xs text-gray-600">
                              Today's Revenue
                            </p>
                            <p className="text-2xl font-bold text-green-600">
                              $24.5K
                            </p>
                            <p className="text-xs text-green-600">↗ +18%</p>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 }}
                            className="bg-white rounded-xl p-4 shadow-sm"
                          >
                            <p className="text-xs text-gray-600">
                              Transactions
                            </p>
                            <p className="text-2xl font-bold text-blue-600">
                              1,247
                            </p>
                            <p className="text-xs text-blue-600">↗ +12%</p>
                          </motion.div>
                        </div>

                        {/* Mini Chart */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 }}
                          className="bg-white rounded-xl p-4 shadow-sm mb-4"
                        >
                          <h3 className="text-sm font-semibold text-gray-800 mb-3">
                            This Week
                          </h3>
                          <div className="flex items-end justify-between h-24 gap-2">
                            {[65, 45, 80, 55, 90, 70, 85].map(
                              (height, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ height: 0 }}
                                  animate={{ height: `${height}%` }}
                                  transition={{
                                    delay: 1.4 + index * 0.1,
                                    duration: 0.5,
                                  }}
                                  className="flex-1 rounded-t-lg"
                                  style={{
                                    background: 'linear-gradient(to top, #073e9ee8 0%, #073e9eda 100%)'
                                  }}
                                />
                              )
                            )}
                          </div>
                        </motion.div>

                        {/* Recent Activity */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 2 }}
                          className="bg-white rounded-xl p-4 shadow-sm"
                        >
                          <h3 className="text-sm font-semibold text-gray-800 mb-3">
                            Recent
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <span className="text-sm">💰</span>
                                </div>
                                <div>
                                  <p className="text-xs font-medium text-gray-800">
                                    Payment received
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    2h ago
                                  </p>
                                </div>
                              </div>
                              <p className="text-xs font-semibold text-green-600">
                                +$2,400
                              </p>
                            </div>
                          </div>
                        </motion.div>

                        {/* Transition Indicator */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 3 }}
                          className="absolute bottom-4 left-0 right-0 text-center"
                        >
                          <div className="flex justify-center gap-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{
                                  duration: 1,
                                  delay: 3.5 + i * 0.2,
                                  repeat: Infinity,
                                }}
                                className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                              />
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    ) : (
                      // Mind Map Screen
                      <motion.div
                        key="mindmap"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="h-98% p-6 relative m-5"
                        style={{
                          background: 'linear-gradient(135deg, #073f9e12 0%, #7bb6b321 50%, #073e9e2d 100%)',
                          border: '1px solid #0000009a',
                          borderRadius: '12px',
                        }}
                        
                      >
                        {/* Mind Map Header */}
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="text-center mb-6"
                        >
                          <h3 className="text-lg font-bold text-gray-800">
                            Cross-Border Operating System
                          </h3>
                          <p className="text-xs text-gray-500">
                            More than just payments
                          </p>
                        </motion.div>

                        {/* Central Node */}
                        <div className="flex items-center justify-center mb-8">
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                              delay: 0.8,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg"
                          >
                            <img src={logo} alt="Logo" className="w-12 h-12" />

                            {/* Pulsing Rings */}
                            <motion.div
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 border-4 border-primary-400 rounded-full"
                            />
                            <motion.div
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0, 0.3],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.5,
                              }}
                              className="absolute inset-0 border-4 border-purple-400 rounded-full"
                            />
                          </motion.div>
                        </div>

                        {/* Mind Map Branches - Grid Layout */}
                        <div className="relative w-full h-72">
                          {/* SVG Connection Lines */}
                          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                            <defs>
                              <linearGradient id="line1" x1="0%" y1="100%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.4" />
                              </linearGradient>
                              <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.4" />
                              </linearGradient>
                              <linearGradient id="line3" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.4" />
                              </linearGradient>
                              <linearGradient id="line4" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.4" />
                              </linearGradient>
                            </defs>

                            {/* Center vertical line from logo */}
                            <motion.line
                              x1="50%"
                              y1="0%"
                              x2="50%"
                              y2="80%"
                              stroke="#cbd5e1"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 0.8, duration: 0.6 }}
                            />

                            {/* Connection Lines to boxes */}
                            <motion.line
                              x1="50%"
                              y1="80%"
                              x2="20%"
                              y2="80%"
                              stroke="url(#line1)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 0.9, duration: 0.8 }}
                            />
                            <motion.line
                              x1="88%"
                              y1="79%"
                              x2="20%"
                              y2="80%"
                              stroke="url(#line2)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 1.0, duration: 0.8 }}
                            />
                            <motion.line
                              x1="50%"
                              y1="36.1%"
                              x2="20%"
                              y2="36%"
                              stroke="url(#line3)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 1.1, duration: 0.8 }}
                            />
                            <motion.line
                              x1="50%"
                              y1="36.1%"
                              x2="80%"
                              y2="36%"
                              stroke="url(#line4)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 1.2, duration: 0.8 }}
                            />
                          </svg>

                          {/* Nodes Grid */}
                          <div className="absolute inset-0 grid grid-cols-2 gap-6 p-4 pt-16">
                            {[{
                              label: "Billing & Invoices",
                              delay: 1.3,
                            },
                            {
                              label: "FX & Treasury",
                              delay: 1.4,
                            },
                            {
                              label: "Dashboards",
                              delay: 1.5,
                            },
                            {
                              label: "Security",
                              delay: 1.6,
                            }].map((node, index) => (
                            <motion.div
                              key={index}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                delay: node.delay,
                                type: "spring",
                                stiffness: 150,
                                damping: 12,
                              }}
                              whileHover={{ scale: 1.08, y: -4 }}
                              className="relative bg-white rounded-lg p-3 shadow-md cursor-pointer group border border-slate-200 overflow-hidden flex items-center justify-center min-h-14"
                            >
                              {/* Silver Border Accent */}
                              <div className="absolute inset-0 rounded-lg border-[1px] border-slate-300/60 pointer-events-none" />

                              <div className="relative z-10">
                                <p className="text-xs font-semibold text-center" style={{ color: 'rgb(7, 63, 158)' }}>
                                  {node.label}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        </div>

                        {/* Bottom Tag Line */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 3 }}
                          className="absolute bottom-0 left-0 right-0 text-center"
                        >
                          <h1 className="text-xs text-gray-600 font-medium">
                            All-in-One Infrastructure
                          </h1>
                          <div className="flex justify-center gap-1 mt-2">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{
                                  duration: 1.5,
                                  delay: 3.2 + i * 0.2,
                                  repeat: Infinity,
                                }}
                                className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                              />
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;