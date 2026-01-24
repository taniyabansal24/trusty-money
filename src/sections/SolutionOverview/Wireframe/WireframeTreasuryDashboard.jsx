import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WireframeTreasuryDashboard({
  data,
  maxValue,
  chartDataSets,
  isVisible = false,
  y = 0,
  onAnimationComplete = () => {},
}) {
  const [animationPhase, setAnimationPhase] = useState(0); // 0: wireframe, 1: reveal, 2: complete
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible && !shouldAnimate) {
      setShouldAnimate(true);

      // Start wireframe animation
      setTimeout(() => {
        setAnimationPhase(1);
      }, 3500);

      setTimeout(() => {
        setAnimationPhase(2);
        onAnimationComplete();
      }, 4500);
    }
  }, [isVisible, shouldAnimate, onAnimationComplete]);

  // Dashboard dimensions - adjust based on your actual dashboard size
  const dashboardWidth = 500; // Adjust based on your dashboard
  const dashboardHeight = 600; // Adjust based on your dashboard
  const borderRadius = 12; // rounded-xl = 12px

  // Get chart data from props with fallback
  const chartData =
    data?.chartData || WireframeTreasuryDashboard.defaultProps.data.chartData;

  // Wireframe paths for treasury dashboard
  const wireframePaths = [
    // Main dashboard outline
    {
      type: "rect",
      x: 0,
      y: 0,
      width: dashboardWidth,
      height: dashboardHeight,
      rx: borderRadius,
      stroke: "#3b82f6",
      strokeWidth: 2,
      delay: 0,
      duration: 1.5,
    },

    // Header section (Treasury Operations)
    {
      type: "rect",
      x: 20,
      y: 20,
      width: dashboardWidth - 40,
      height: 130,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 0.5,
      duration: 1,
    },

    // Last updated area
    {
      type: "rect",
      x: dashboardWidth - 120,
      y: 30,
      width: 100,
      height: 40,
      rx: 6,
      stroke: "#60a5fa",
      strokeWidth: 1.5,
      delay: 0.8,
      duration: 0.8,
    },

    // Liquidity display area
    {
      type: "rect",
      x: 30,
      y: 80,
      width: dashboardWidth - 60,
      height: 60,
      rx: 8,
      stroke: "#3b82f6",
      strokeWidth: 2,
      delay: 1.2,
      duration: 0.8,
    },

    // Main chart container
    {
      type: "rect",
      x: 20,
      y: 170,
      width: dashboardWidth - 40,
      height: 350,
      rx: 8,
      stroke: "#3b82f6",
      strokeWidth: 2,
      delay: 1.5,
      duration: 1,
    },

    // Chart header (Monthly Cash Flow Trend)
    {
      type: "rect",
      x: 30,
      y: 180,
      width: 200,
      height: 25,
      rx: 4,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 1.8,
      duration: 0.6,
    },

    // Chart legend area
    {
      type: "rect",
      x: dashboardWidth - 120,
      y: 180,
      width: 100,
      height: 25,
      rx: 4,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 1.9,
      duration: 0.6,
    },

    // Chart graph area
    {
      type: "rect",
      x: 40,
      y: 220,
      width: dashboardWidth - 80,
      height: 240,
      rx: 6,
      stroke: "#60a5fa",
      strokeWidth: 1.5,
      delay: 2.2,
      duration: 0.8,
    },

    // Y-axis labels area
    {
      type: "rect",
      x: 20,
      y: 220,
      width: 15,
      height: 240,
      rx: 2,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 2.0,
      duration: 0.6,
    },

    // X-axis labels area
    {
      type: "rect",
      x: 40,
      y: 460,
      width: dashboardWidth - 80,
      height: 25,
      rx: 2,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 2.4,
      duration: 0.6,
    },

    // Chart grid lines (5 horizontal lines)
    {
      type: "line",
      x1: 40,
      y1: 220,
      x2: dashboardWidth - 40,
      y2: 220,
      stroke: "#93c5fd",
      strokeWidth: 0.8,
      strokeDasharray: "4 4",
      delay: 2.6,
      duration: 0.3,
    },
    {
      type: "line",
      x1: 40,
      y1: 268,
      x2: dashboardWidth - 40,
      y2: 268,
      stroke: "#93c5fd",
      strokeWidth: 0.8,
      strokeDasharray: "4 4",
      delay: 2.7,
      duration: 0.3,
    },
    {
      type: "line",
      x1: 40,
      y1: 316,
      x2: dashboardWidth - 40,
      y2: 316,
      stroke: "#93c5fd",
      strokeWidth: 0.8,
      strokeDasharray: "4 4",
      delay: 2.8,
      duration: 0.3,
    },
    {
      type: "line",
      x1: 40,
      y1: 364,
      x2: dashboardWidth - 40,
      y2: 364,
      stroke: "#93c5fd",
      strokeWidth: 0.8,
      strokeDasharray: "4 4",
      delay: 2.9,
      duration: 0.3,
    },
    {
      type: "line",
      x1: 40,
      y1: 412,
      x2: dashboardWidth - 40,
      y2: 412,
      stroke: "#93c5fd",
      strokeWidth: 0.8,
      strokeDasharray: "4 4",
      delay: 3.0,
      duration: 0.3,
    },

    // Chart data points (6 circles for months)
    {
      type: "circle",
      cx: 70,
      cy: 380,
      r: 6,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      delay: 3.2,
      duration: 0.3,
    },
    {
      type: "circle",
      cx: 150,
      cy: 340,
      r: 6,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      delay: 3.3,
      duration: 0.3,
    },
    {
      type: "circle",
      cx: 230,
      cy: 360,
      r: 6,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      delay: 3.4,
      duration: 0.3,
    },
    {
      type: "circle",
      cx: 310,
      cy: 300,
      r: 6,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      delay: 3.5,
      duration: 0.3,
    },
    {
      type: "circle",
      cx: 390,
      cy: 320,
      r: 6,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      delay: 3.6,
      duration: 0.3,
    },
    {
      type: "circle",
      cx: 470,
      cy: 280,
      r: 6,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      delay: 3.7,
      duration: 0.3,
    },

    // Chart line connecting points
    {
      type: "line",
      x1: 70,
      y1: 380,
      x2: 150,
      y2: 340,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      strokeDasharray: "8 4",
      delay: 3.2,
      duration: 0.4,
    },
    {
      type: "line",
      x1: 150,
      y1: 340,
      x2: 230,
      y2: 360,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      strokeDasharray: "8 4",
      delay: 3.3,
      duration: 0.4,
    },
    {
      type: "line",
      x1: 230,
      y1: 360,
      x2: 310,
      y2: 300,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      strokeDasharray: "8 4",
      delay: 3.4,
      duration: 0.4,
    },
    {
      type: "line",
      x1: 310,
      y1: 300,
      x2: 390,
      y2: 320,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      strokeDasharray: "8 4",
      delay: 3.5,
      duration: 0.4,
    },
    {
      type: "line",
      x1: 390,
      y1: 320,
      x2: 470,
      y2: 280,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      strokeDasharray: "8 4",
      delay: 3.6,
      duration: 0.4,
    },

    // Metrics grid (4 boxes)
    {
      type: "rect",
      x: 30,
      y: 540,
      width: (dashboardWidth - 80) / 2,
      height: 70,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 4.0,
      duration: 0.5,
    },
    {
      type: "rect",
      x: 30 + (dashboardWidth - 80) / 2 + 20,
      y: 540,
      width: (dashboardWidth - 80) / 2,
      height: 70,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 4.1,
      duration: 0.5,
    },
    {
      type: "rect",
      x: 30,
      y: 625,
      width: (dashboardWidth - 80) / 2,
      height: 70,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 4.2,
      duration: 0.5,
    },
    {
      type: "rect",
      x: 30 + (dashboardWidth - 80) / 2 + 20,
      y: 625,
      width: (dashboardWidth - 80) / 2,
      height: 70,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 4.3,
      duration: 0.5,
    },
  ];

  return (
    <div className="relative">
      {/* Wireframe Overlay */}
      <AnimatePresence>
        {shouldAnimate && animationPhase === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 overflow-hidden"
            style={{
              borderRadius: `${borderRadius}px`,
              backgroundColor: "transparent",
            }}
          >
            {/* Wireframe Drawing */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${dashboardWidth} ${dashboardHeight}`}
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {wireframePaths.map((path, index) => {
                if (path.type === "rect") {
                  return (
                    <motion.rect
                      key={index}
                      x={path.x}
                      y={path.y}
                      width={path.width}
                      height={path.height}
                      rx={path.rx}
                      stroke={path.stroke}
                      strokeWidth={path.strokeWidth}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray={path.strokeDasharray || "8 4"}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.8 }}
                      transition={{
                        delay: path.delay,
                        duration: path.duration,
                        ease: "easeInOut",
                      }}
                      fill="none"
                    />
                  );
                } else if (path.type === "circle") {
                  return (
                    <motion.circle
                      key={index}
                      cx={path.cx}
                      cy={path.cy}
                      r={path.r}
                      stroke={path.stroke}
                      strokeWidth={path.strokeWidth}
                      strokeLinecap="round"
                      strokeDasharray={path.strokeDasharray || "8 4"}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.8 }}
                      transition={{
                        delay: path.delay,
                        duration: path.duration,
                        ease: "easeInOut",
                      }}
                      fill="none"
                    />
                  );
                } else if (path.type === "line") {
                  return (
                    <motion.line
                      key={index}
                      x1={path.x1}
                      y1={path.y1}
                      x2={path.x2}
                      y2={path.y2}
                      stroke={path.stroke}
                      strokeWidth={path.strokeWidth}
                      strokeLinecap="round"
                      strokeDasharray={path.strokeDasharray || "8 4"}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.8 }}
                      transition={{
                        delay: path.delay,
                        duration: path.duration,
                        ease: "easeInOut",
                      }}
                    />
                  );
                }
                return null;
              })}

              {/* Labels */}

              {/* Y-axis labels */}
              <motion.text
                x={15}
                y={225}
                fill="#93c5fd"
                stroke="none"
                fontSize="10"
                fontFamily="monospace"
                textAnchor="end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2.1, duration: 0.5 }}
              >
                $3M
              </motion.text>

              <motion.text
                x={15}
                y={317}
                fill="#93c5fd"
                stroke="none"
                fontSize="10"
                fontFamily="monospace"
                textAnchor="end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2.15, duration: 0.5 }}
              >
                $2M
              </motion.text>

              <motion.text
                x={15}
                y={409}
                fill="#93c5fd"
                stroke="none"
                fontSize="10"
                fontFamily="monospace"
                textAnchor="end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              >
                $1M
              </motion.text>

              {/* X-axis labels */}
              <motion.text
                x={70}
                y={475}
                fill="#93c5fd"
                stroke="none"
                fontSize="10"
                fontFamily="monospace"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                Jan
              </motion.text>

              <motion.text
                x={230}
                y={475}
                fill="#93c5fd"
                stroke="none"
                fontSize="10"
                fontFamily="monospace"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2.55, duration: 0.5 }}
              >
                Mar
              </motion.text>

              <motion.text
                x={390}
                y={475}
                fill="#93c5fd"
                stroke="none"
                fontSize="10"
                fontFamily="monospace"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2.6, duration: 0.5 }}
              >
                May
              </motion.text>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Treasury Dashboard - Your actual content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          isVisible ? { opacity: animationPhase >= 1 ? 1 : 0, y: 0 } : {}
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl h-[40rem]"
      >
        {/* Dashboard Header */}
        <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white px-4 py-2">
          {" "}
          {/* Reduced padding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationPhase >= 1 ? { opacity: 1 } : {}}
            transition={{ delay: animationPhase === 1 ? 0.2 : 0.1 }}
            className="mb-3 flex items-center justify-between" // Reduced margin
          >
            <div className="flex items-center gap-2">
              {" "}
              {/* Reduced gap */}
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                  transition={{ delay: animationPhase === 1 ? 0.3 : 0.2 }}
                  className="text-[10px] uppercase tracking-wider text-slate-500" // Smaller text
                >
                  Treasury Operations
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: animationPhase === 1 ? 0.4 : 0.3 }}
                  className="text-lg text-slate-900" // Smaller text
                >
                  Working Capital Dashboard
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={animationPhase >= 1 ? { opacity: 1 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.5 : 0.4 }}
              className="text-right"
            >
              <div className="text-[10px] text-slate-500">Last updated</div>{" "}
              {/* Smaller text */}
              <div className="text-[10px] text-slate-900">2 min ago</div>{" "}
              {/* Smaller text */}
            </motion.div>
          </motion.div>
          {/* Main Liquidity Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={animationPhase >= 1 ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: animationPhase === 1 ? 0.6 : 0.5 }}
            className="rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-3" // Reduced padding
          >
            <div className="mb-1 flex items-center justify-between">
              {" "}
              {/* Reduced margin */}
              <div className="text-[10px] uppercase tracking-wider text-slate-600">
                Available Liquidity
              </div>{" "}
              {/* Smaller text */}
              <div className="flex items-center gap-1 text-[10px] text-emerald-600">
                {" "}
                {/* Smaller text */}
                <svg
                  className="h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  {/* Smaller icon */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                +23.5% MoM
              </div>
            </div>
            <div className="relative h-5 overflow-hidden">
              {" "}
              {/* Reduced height */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={data?.index || 0}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg text-slate-900" // Smaller text
                >
                  {data?.index === 0 ? "$2,847,250" : "$3,102,400"}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Cash Flow Chart */}
        <div className="px-4 py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationPhase >= 1 ? { opacity: 1 } : {}}
            transition={{ delay: animationPhase === 1 ? 0.7 : 0.6 }}
            className="mb-4 flex items-center justify-between"
          >
            <div className="text-sm text-slate-900">
              Monthly Cash Flow Trend
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <div className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <span>Inflow</span>
              </div>
            </div>
          </motion.div>

          {/* Chart Area - Your existing chart implementation will go here */}
          {/* This will be revealed after wireframe animation */}
          <div className="rounded-lg border border-slate-100 bg-gradient-to-br from-slate-50/50 to-white px-6 py-3">
            <div className="relative h-48">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-xs text-slate-500">
                <span>$3M</span>
                <span>$2.5M</span>
                <span>$2M</span>
                <span>$1.5M</span>
                <span>$1M</span>
              </div>

              {/* Chart area */}
              <div className="ml-12 h-full">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 600 200"
                  preserveAspectRatio="none"
                >
                  {/* Original Horizontal grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 50}
                      x2="600"
                      y2={i * 50}
                      stroke="#e2e8f0"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  ))}

                  <defs>
                    <linearGradient
                      id="treasuryAreaGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop
                        offset="100%"
                        stopColor="#3b82f6"
                        stopOpacity="0.02"
                      />
                    </linearGradient>
                    <linearGradient
                      id="treasuryLineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>

                  {(() => {
                    const points = chartData.map((d, i) => {
                      const x = (i / (chartData.length - 1)) * 600;
                      const y = 200 - (d.value / maxValue) * 180;
                      return { x, y };
                    });

                    const pathD = points.reduce((acc, point, i) => {
                      if (i === 0) return `M ${point.x},${point.y}`;
                      const prev = points[i - 1];
                      const cp1x = prev.x + (point.x - prev.x) / 2;
                      return `${acc} C ${cp1x},${prev.y} ${cp1x},${point.y} ${point.x},${point.y}`;
                    }, "");

                    const areaPathD = `${pathD} L 600,200 L 0,200 Z`;

                    return (
                      <>
                        {/* Area */}
                        <motion.path
                          animate={{ d: areaPathD }}
                          transition={{ duration: 0.8 }}
                          d={areaPathD}
                          fill="url(#treasuryAreaGradient)"
                        />

                        {/* Line with PathLength Animation */}
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={
                            isVisible
                              ? { pathLength: 1, d: pathD }
                              : { d: pathD }
                          }
                          transition={{
                            pathLength: { duration: 1.5, delay: 0.3 },
                            d: { duration: 0.8 },
                          }}
                          d={pathD}
                          fill="none"
                          stroke="url(#treasuryLineGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        {/* Data points */}
                        {points.map((point, i) => (
                          <g key={i}>
                            <motion.circle
                              animate={{ cx: point.x, cy: point.y }}
                              transition={{ duration: 0.8 }}
                              r="6"
                              fill="white"
                              stroke="#3b82f6"
                              strokeWidth="2.5"
                            />
                            <motion.circle
                              animate={{ cx: point.x, cy: point.y }}
                              transition={{ duration: 0.8 }}
                              r="3"
                              fill="#3b82f6"
                            />
                          </g>
                        ))}
                      </>
                    );
                  })()}
                </svg>
              </div>
            </div>

            {/* X-axis labels */}
            <div className="ml-12 mt-2 flex justify-between text-xs text-slate-600">
              {chartDataSets[0].map((d) => (
                <span key={d.month}>{d.month}</span>
              ))}
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              {
                label: "DSO",
                val0: "28 days",
                val1: "24 days",
                sub: "↓ 12 days vs baseline",
                color: "emerald",
              },
              {
                label: "Collection Rate",
                val0: "96.8%",
                val1: "98.2%",
                sub: "+4.2% this quarter",
                color: "emerald",
              },
              {
                label: "FX Savings YTD",
                val0: "$47K",
                val1: "$51K",
                sub: "vs market rates",
                color: "blue",
              },
              {
                label: "Expected (48h)",
                val0: "$324K",
                val1: "$412K",
                sub: "12 transactions",
                color: "blue",
              },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: animationPhase === 1 ? 0.9 + i * 0.1 : i * 0.1,
                  duration: 0.4,
                }}
                className={`rounded-lg border border-slate-100 px-4 py-2 ${i === 3 ? "bg-gradient-to-br from-blue-50 to-indigo-50" : "bg-gradient-to-br from-slate-50 to-white"}`}
              >
                <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        i === 0
                          ? "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          : i === 1
                            ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            : i === 2
                              ? "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              : "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      }
                    />
                  </svg>
                  {metric.label}
                </div>
                {/* Sliding Data Wrapper */}
                <div className="relative h-6 overflow-hidden">
                  {" "}
                  {/* Reduced height */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={data?.index || 0}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-lg text-slate-900" // Smaller text
                    >
                      {data?.index === 0 ? metric.val0 : metric.val1}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className={`text-[10px] text-${metric.color}-600`}>
                  {metric.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

WireframeTreasuryDashboard.defaultProps = {
  data: {
    index: 0,
    chartData: [
      { month: "Jan", value: 2100000 },
      { month: "Feb", value: 2400000 },
      { month: "Mar", value: 2200000 },
      { month: "Apr", value: 2700000 },
      { month: "May", value: 2500000 },
      { month: "Jun", value: 2900000 },
    ],
  },
  onAnimationComplete: () => {},
};
