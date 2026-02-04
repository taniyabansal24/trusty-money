import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BarChartIcon from "../../../components/svg/BarChartIcon";
import UserActivityIcon from "../../../components/svg/UserActivityIcon.jsxs";
import CloudSyncBadge from "../../../components/svg/CloudSyncBadge";
import UserCheckIcon from "../../../components/svg/UserCheckIcon";
import UserPresenceIcon from "../../../components/svg/UserPresenceIcon";

export function WireframeReportingDashboard({
  data,
  isVisible = false,
  y = 0,
  onAnimationComplete = () => {},
  className = "",
}) {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 550, height: 650 });

  // Calculate responsive dimensions
  useEffect(() => {
    const calculateDimensions = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setDimensions({ width: 320, height: 550 });
      } else if (window.innerWidth < 1024) {
        // Tablet
        setDimensions({ width: 450, height: 600 });
      } else {
        // Desktop
        setDimensions({ width: 550, height: 650 });
      }
    };

    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, []);

  useEffect(() => {
    if (isVisible && !shouldAnimate) {
      setShouldAnimate(true);

      setTimeout(() => {
        setAnimationPhase(1);
      }, 3500);

      setTimeout(() => {
        setAnimationPhase(2);
        onAnimationComplete();
      }, 4500);
    }
  }, [isVisible, shouldAnimate, onAnimationComplete]);

  const borderRadius = 12;
  
  // Default transactions data
  const defaultTransactions = data.transactions || [
    {
      id: "TXN-8472",
      company: "Acme Corp Ltd",
      invoice: "INV-0847",
      amount: "$29,700.00",
      currency: "GBP",
      status: "Reconciled",
      date: "Dec 18, 2024",
      method: "Wire",
    },
    {
      id: "TXN-8471",
      company: "Global Tech Inc",
      invoice: "INV-0846",
      amount: "$45,250.00",
      currency: "USD",
      status: "Reconciled",
      date: "Dec 18, 2024",
      method: "ACH",
    },
    {
      id: "TXN-8470",
      company: "Nexus Solutions",
      invoice: "INV-0845",
      amount: "€18,900.00",
      currency: "EUR",
      status: "Pending",
      date: "Dec 17, 2024",
      method: "SEPA",
    },
  ];

  // Responsive wireframe paths using dimensions
  const wireframePaths = [
    // Main dashboard outline
    {
      type: "rect",
      x: 0,
      y: 0,
      width: dimensions.width,
      height: dimensions.height - (dimensions.height * 0.123),
      rx: borderRadius,
      stroke: "#3b82f6",
      strokeWidth: 2,
      delay: 0,
      duration: 1.5,
    },

    // Header section
    {
      type: "rect",
      x: dimensions.width * 0.044,
      y: dimensions.height * 0.037,
      width: dimensions.width * 0.912,
      height: dimensions.height * 0.215,
      rx: 0,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 0.5,
      duration: 1,
    },

    // Icon box
    {
      type: "rect",
      x: dimensions.width * 0.044,
      y: dimensions.height * 0.037,
      width: dimensions.width * 0.073,
      height: dimensions.height * 0.062,
      rx: 8,
      stroke: "#60a5fa",
      strokeWidth: 1.5,
      delay: 0.8,
      duration: 0.8,
    },

    // Live sync badge
    {
      type: "rect",
      x: dimensions.width * 0.782,
      y: dimensions.height * 0.046,
      width: dimensions.width * 0.164,
      height: dimensions.height * 0.046,
      rx: 15,
      stroke: "#60a5fa",
      strokeWidth: 1.5,
      delay: 1.0,
      duration: 0.8,
    },

    // Stats boxes - 3 equal width boxes
    ...[0, 1, 2].map((i) => ({
      type: "rect",
      x: dimensions.width * (0.055 + (i * 0.3)),
      y: dimensions.height * 0.154,
      width: dimensions.width * 0.273,
      height: dimensions.height * 0.077,
      rx: 0,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 1.2 + (i * 0.2),
      duration: 0.6,
    })),

    // Table area
    {
      type: "rect",
      x: dimensions.width * 0.044,
      y: dimensions.height * 0.277,
      width: dimensions.width * 0.912,
      height: dimensions.height * 0.492,
      rx: 0,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      delay: 2.0,
      duration: 1,
    },

    // "Recent Transactions" text
    {
      type: "rect",
      x: dimensions.width * 0.055,
      y: dimensions.height * 0.292,
      width: dimensions.width * 0.218,
      height: dimensions.height * 0.025,
      rx: 2,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 2.3,
      duration: 0.6,
    },

    // Table container
    {
      type: "rect",
      x: dimensions.width * 0.055,
      y: dimensions.height * 0.338,
      width: dimensions.width * 0.891,
      height: dimensions.height * 0.277,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 2.6,
      duration: 0.7,
    },

    // Table header row
    {
      type: "rect",
      x: dimensions.width * 0.055,
      y: dimensions.height * 0.338,
      width: dimensions.width * 0.891,
      height: dimensions.height * 0.054,
      rx: 8,
      stroke: "#cbd5e1",
      strokeWidth: 1.2,
      delay: 2.8,
      duration: 0.6,
    },

    // Table rows (3 rows)
    ...[0, 1, 2].map((i) => ({
      type: "rect",
      x: dimensions.width * 0.055,
      y: dimensions.height * (0.392 + (i * 0.074)),
      width: dimensions.width * 0.891,
      height: dimensions.height * 0.074,
      rx: 0,
      stroke: "#93c5fd",
      strokeWidth: 1,
      delay: 3.0 + (i * 0.1),
      duration: 0.5,
    })),

    // Status badges in table
    ...[0, 1, 2].map((i) => ({
      type: "rect",
      x: dimensions.width * 0.782,
      y: dimensions.height * (0.429 + (i * 0.074)),
      width: dimensions.width * 0.127,
      height: dimensions.height * 0.037,
      rx: 12,
      stroke: "#60a5fa",
      strokeWidth: 1,
      delay: 3.3 + (i * 0.1),
      duration: 0.4,
    })),

    // Action buttons area
    {
      type: "rect",
      x: dimensions.width * 0.055,
      y: dimensions.height * 0.631,
      width: dimensions.width * 0.891,
      height: dimensions.height * 0.069,
      rx: 0,
      stroke: "#3b82f6",
      strokeWidth: 1.5,
      delay: 3.6,
      duration: 0.6,
    },

    // Filter button
    {
      type: "rect",
      x: dimensions.width * 0.055,
      y: dimensions.height * 0.631,
      width: dimensions.width * 0.436,
      height: dimensions.height * 0.069,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 3.7,
      duration: 0.5,
    },

    // Export CSV button
    {
      type: "rect",
      x: dimensions.width * 0.505,
      y: dimensions.height * 0.631,
      width: dimensions.width * 0.436,
      height: dimensions.height * 0.069,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 3.8,
      duration: 0.5,
    },

    // Reconciliation badge
    {
      type: "rect",
      x: 0,
      y: dimensions.height * 0.877,
      width: dimensions.width,
      height: dimensions.height * 0.123,
      rx: borderRadius,
      stroke: "#10b981",
      strokeWidth: 2,
      delay: 4.0,
      duration: 0.8,
    },

    // Check icon circle in badge
    {
      type: "circle",
      cx: dimensions.width * 0.073,
      cy: dimensions.height * 0.938,
      r: dimensions.width * 0.029,
      stroke: "#10b981",
      strokeWidth: 1.5,
      delay: 4.2,
      duration: 0.5,
    },

    // Text area in reconciliation badge
    {
      type: "rect",
      x: dimensions.width * 0.127,
      y: dimensions.height * 0.915,
      width: dimensions.width * 0.836,
      height: dimensions.height * 0.025,
      rx: 2,
      stroke: "#10b981",
      strokeWidth: 1,
      delay: 4.3,
      duration: 0.4,
    },
    {
      type: "rect",
      x: dimensions.width * 0.127,
      y: dimensions.height * 0.946,
      width: dimensions.width * 0.836,
      height: dimensions.height * 0.018,
      rx: 2,
      stroke: "#10b981",
      strokeWidth: 1,
      delay: 4.4,
      duration: 0.4,
    },
  ];

  return (
    <div className={`relative ${className}`}>
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
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
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
                      strokeDasharray="8 4"
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
                      strokeDasharray="8 4"
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
                }
                return null;
              })}
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Reporting Dashboard - Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          isVisible ? { opacity: animationPhase >= 1 ? 1 : 0, y: 0 } : {}
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-lg md:rounded-xl border border-slate-200 bg-white shadow-lg md:shadow-xl w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:w-[550px] h-auto min-h-[30rem]"
      >
        {/* Dashboard Header - Responsive */}
        <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white px-3 md:px-4 pt-3 md:pt-4 pb-2 md:pb-3">
          <div className="mb-2 flex flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 md:gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={animationPhase >= 1 ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: animationPhase === 1 ? 0.2 : 0.1 }}
                className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 to-violet-200"
              >
                <BarChartIcon className="w-7 h-7 md:w-10 md:h-10" />
              </motion.div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: animationPhase === 1 ? 0.3 : 0.2 }}
                  className="text-xs uppercase tracking-wider text-slate-500"
                >
                  Analytics & Reports
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: animationPhase === 1 ? 0.4 : 0.3 }}
                  className="text-sm md:text-lg font-semibold text-slate-900"
                >
                  Transaction Overview
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={animationPhase >= 1 ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.5 : 0.4 }}
              className="flex items-center gap-1.5 rounded-full bg-[#EEF1F9] px-2 md:px-3 py-1 text-xs text-slate-700"
            >
              <CloudSyncBadge className="w-7 h-7 md:w-10 md:h-10" />
              <span className="hidden sm:inline">Live sync</span>
              <span className="sm:hidden">Live</span>
            </motion.div>
          </div>

          {/* Stats - Responsive grid */}
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.6 : 0.5 }}
            >
              <div className="text-xs text-slate-500">Today</div>
              <div className="relative h-6 md:h-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={data.index || 0}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    className="text-sm md:text-base text-slate-900"
                  >
                    {data.index === 0 ? "147" : "152"}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.7 : 0.6 }}
            >
              <div className="text-xs text-slate-500">Reconciled</div>
              <div className="text-sm md:text-base text-[#436AB4] font-medium">99.8%</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.8 : 0.7 }}
            >
              <div className="text-xs text-slate-500">Volume</div>
              <div className="relative h-6 md:h-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={data.index || 0}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    className="text-sm md:text-base text-slate-900"
                  >
                    {data.index === 0 ? "$2.4M" : "$2.7M"}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Transaction Table - Responsive */}
        <div className="px-3 md:px-5 py-2 md:py-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationPhase >= 1 ? { opacity: 1 } : {}}
            transition={{ delay: animationPhase === 1 ? 0.9 : 0.8 }}
            className="text-sm font-medium text-slate-900 mb-2"
          >
            Recent Transactions
          </motion.div>

          <div className="overflow-x-auto">
            <div className="min-w-[280px]">
              <div className="overflow-hidden rounded-lg border border-slate-200">
                <table className="w-full text-xs">
                  <thead className="bg-slate-50">
                    <tr className="border-b border-slate-200">
                      <th className="px-2 md:px-3 py-1.5 md:py-2 text-left uppercase tracking-wider text-slate-600 whitespace-nowrap">
                        Transaction
                      </th>
                      <th className="px-2 md:px-3 py-1.5 md:py-2 text-left uppercase tracking-wider text-slate-600 whitespace-nowrap">
                        Company
                      </th>
                      <th className="px-2 md:px-3 py-1.5 md:py-2 text-right uppercase tracking-wider text-slate-600 whitespace-nowrap hidden md:table-cell">
                        Amount
                      </th>
                      <th className="px-2 md:px-3 py-1.5 md:py-2 text-right uppercase tracking-wider text-slate-600 whitespace-nowrap">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {defaultTransactions.map((txn, idx) => (
                      <motion.tr
                        key={txn.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={animationPhase >= 1 ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: animationPhase === 1 ? 1.0 + idx * 0.1 : idx * 0.1,
                          duration: 0.4,
                        }}
                        className="border-b border-slate-100 transition-colors hover:bg-slate-50"
                      >
                        <td className="px-2 md:px-3 py-1.5 md:py-2">
                          <div className="text-sm text-slate-900 truncate max-w-[100px] md:max-w-none">
                            {txn.id}
                          </div>
                          <div className="text-xs text-slate-500">
                            {txn.date} • {txn.method}
                          </div>
                        </td>
                        <td className="px-2 md:px-3 py-1.5 md:py-2">
                          <div className="text-sm text-slate-900 truncate max-w-[80px] md:max-w-none">
                            {txn.company}
                          </div>
                          <div className="text-xs text-slate-500">{txn.invoice}</div>
                        </td>
                        <td className="px-2 md:px-3 py-1.5 md:py-2 text-right hidden md:table-cell">
                          <div className="text-sm text-slate-900">{txn.amount}</div>
                          <div className="text-xs text-slate-500">{txn.currency}</div>
                        </td>
                        <td className="px-2 md:px-3 py-1.5 md:py-2 text-right">
                          <span
                            className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium light-bg whitespace-nowrap"
                            style={{
                              color: "#073F9E",
                            }}
                          >
                            {txn.status === "Reconciled" ? (
                              <UserCheckIcon className="h-3 w-3" />
                            ) : (
                              <UserPresenceIcon className="h-3 w-3" />
                            )}
                            {txn.status}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Action Buttons - Responsive */}
          <div className="mt-3 md:mt-4 flex flex-col sm:flex-row gap-2">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={animationPhase >= 1 ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: animationPhase === 1 ? 1.3 : 0.3 }}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 transition-all hover:bg-slate-50"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={animationPhase >= 1 ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: animationPhase === 1 ? 1.4 : 0.4 }}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#F0F6FF] px-3 py-2 text-xs text-[#364153] transition-all"
            >
              <svg
                className="h-3.5 w-3.5 text-[#073F9E]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="hidden sm:inline">Export CSV</span>
              <span className="sm:hidden">Export</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Reconciliation Badge - Responsive */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={animationPhase >= 1 ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: animationPhase === 1 ? 1.5 : 0.5 }}
        className="mt-3 md:mt-4 rounded-lg p-2 md:p-3 bg-[#F2F7FF]"
        style={{
          border: "1px solid #073F9E",
        }}
      >
        <div className="flex items-center gap-2 md:gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={animationPhase >= 1 ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: animationPhase === 1 ? 1.6 : 0.6 }}
            className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full"
          >
            <UserActivityIcon className="w-5 h-5 md:w-7 md:h-7" />
          </motion.div>
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: animationPhase === 1 ? 1.7 : 0.7 }}
              className="text-sm font-medium text-[#073F9E] truncate"
            >
              Auto-reconciliation active
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: animationPhase === 1 ? 1.8 : 0.8 }}
              className="text-xs text-slate-600 truncate"
            >
              {data.index === 0 ? "145 of 147" : "150 of 152"} transactions
              matched automatically
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

WireframeReportingDashboard.defaultProps = {
  data: {
    index: 0,
  },
  onAnimationComplete: () => {},
};