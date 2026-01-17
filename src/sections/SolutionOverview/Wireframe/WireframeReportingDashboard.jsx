// WireframeReportingDashboard.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WireframeReportingDashboard({
  data,
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

  // Dashboard dimensions - matching your actual component
  const dashboardWidth = 550;
  const dashboardHeight = 650;
  const borderRadius = 12; // rounded-xl

  // Wireframe paths - ONLY drawing what actually exists in your component
  const wireframePaths = [
    // Main dashboard outline (the white container)
    { 
      type: 'rect',
      x: 0, 
      y: 0, 
      width: dashboardWidth, 
      height: dashboardHeight - 100, // Main dashboard without the bottom badge
      rx: borderRadius,
      stroke: "#3b82f6", 
      strokeWidth: 2, 
      delay: 0, 
      duration: 1.5 
    },
    
    // Header section (p-6 area with border-b)
    { 
      type: 'rect',
      x: 24, // p-6 = 24px
      y: 24, 
      width: dashboardWidth - 48, 
      height: 140, // Approximate header height
      rx: 0, // No border radius for inner sections
      stroke: "#93c5fd", 
      strokeWidth: 1.5, 
      delay: 0.5, 
      duration: 1 
    },
    
    // Icon box (h-10 w-10 rounded-lg)
    { 
      type: 'rect',
      x: 24, 
      y: 24, 
      width: 40, 
      height: 40,
      rx: 8, // rounded-lg
      stroke: "#60a5fa", 
      strokeWidth: 1.5, 
      delay: 0.8, 
      duration: 0.8 
    },
    
    // "Live sync" badge
    { 
      type: 'rect',
      x: dashboardWidth - 120, 
      y: 30, 
      width: 90, 
      height: 30,
      rx: 15, // pill shape
      stroke: "#60a5fa", 
      strokeWidth: 1.5, 
      delay: 1.0, 
      duration: 0.8 
    },
    
    // Stats boxes - 3 equal width boxes
    { 
      type: 'rect',
      x: 30, 
      y: 100, 
      width: (dashboardWidth - 100) / 3, 
      height: 50,
      rx: 0, // No border radius in your actual component
      stroke: "#93c5fd", 
      strokeWidth: 1.5, 
      delay: 1.2, 
      duration: 0.6 
    },
    { 
      type: 'rect',
      x: 30 + ((dashboardWidth - 100) / 3) + 20, 
      y: 100, 
      width: (dashboardWidth - 100) / 3, 
      height: 50,
      rx: 0,
      stroke: "#93c5fd", 
      strokeWidth: 1.5, 
      delay: 1.4, 
      duration: 0.6 
    },
    { 
      type: 'rect',
      x: 30 + (2 * ((dashboardWidth - 100) / 3)) + 40, 
      y: 100, 
      width: (dashboardWidth - 100) / 3, 
      height: 50,
      rx: 0,
      stroke: "#93c5fd", 
      strokeWidth: 1.5, 
      delay: 1.6, 
      duration: 0.6 
    },
    
    // Table area (p-6 section)
    { 
      type: 'rect',
      x: 24, 
      y: 180, 
      width: dashboardWidth - 48, 
      height: 320, // Approximate table area height
      rx: 0,
      stroke: "#3b82f6", 
      strokeWidth: 1.5, 
      delay: 2.0, 
      duration: 1 
    },
    
    // "Recent Transactions" text
    { 
      type: 'rect',
      x: 30, 
      y: 190, 
      width: 120, 
      height: 16,
      rx: 2,
      stroke: "#93c5fd", 
      strokeWidth: 1.5, 
      delay: 2.3, 
      duration: 0.6 
    },
    
    // Table container (rounded-lg border)
    { 
      type: 'rect',
      x: 30, 
      y: 220, 
      width: dashboardWidth - 60, 
      height: 180, // Approximate table height for 3 rows
      rx: 8, // rounded-lg
      stroke: "#93c5fd", 
      strokeWidth: 1.5, 
      delay: 2.6, 
      duration: 0.7 
    },
    
    // Table header row
    { 
      type: 'rect',
      x: 30, 
      y: 220, 
      width: dashboardWidth - 60, 
      height: 35,
      rx: 8, // Top corners only but we'll use full for simplicity
      stroke: "#cbd5e1", 
      strokeWidth: 1.2, 
      delay: 2.8, 
      duration: 0.6 
    },
    
    // Table rows (3 rows matching your transactions)
    { 
      type: 'rect',
      x: 30, 
      y: 255, 
      width: dashboardWidth - 60, 
      height: 48,
      rx: 0,
      stroke: "#93c5fd", 
      strokeWidth: 1, 
      delay: 3.0, 
      duration: 0.5 
    },
    { 
      type: 'rect',
      x: 30, 
      y: 303, 
      width: dashboardWidth - 60, 
      height: 48,
      rx: 0,
      stroke: "#93c5fd", 
      strokeWidth: 1, 
      delay: 3.1, 
      duration: 0.5 
    },
    { 
      type: 'rect',
      x: 30, 
      y: 351, 
      width: dashboardWidth - 60, 
      height: 48,
      rx: 0,
      stroke: "#93c5fd", 
      strokeWidth: 1, 
      delay: 3.2, 
      duration: 0.5 
    },
    
    // Status badges in table (right side)
    { 
      type: 'rect',
      x: dashboardWidth - 120, 
      cy: 279, 
      width: 70, 
      height: 24,
      rx: 12, // Pill shape for status badges
      stroke: "#60a5fa", 
      strokeWidth: 1, 
      delay: 3.3, 
      duration: 0.4 
    },
    { 
      type: 'rect',
      x: dashboardWidth - 120, 
      cy: 327, 
      width: 70, 
      height: 24,
      rx: 12,
      stroke: "#60a5fa", 
      strokeWidth: 1, 
      delay: 3.4, 
      duration: 0.4 
    },
    { 
      type: 'rect',
      x: dashboardWidth - 120, 
      cy: 375, 
      width: 70, 
      height: 24,
      rx: 12,
      stroke: "#60a5fa", 
      strokeWidth: 1, 
      delay: 3.5, 
      duration: 0.4 
    },
    
    // Action buttons area (mt-4 flex gap-2)
    { 
      type: 'rect',
      x: 30, 
      y: 410, 
      width: dashboardWidth - 60, 
      height: 45,
      rx: 0,
      stroke: "#3b82f6", 
      strokeWidth: 1.5, 
      delay: 3.6, 
      duration: 0.6 
    },
    
    // Filter button (left button)
    { 
      type: 'rect',
      x: 30, 
      y: 410, 
      width: ((dashboardWidth - 60 - 8) / 2), // Half width minus gap
      height: 45,
      rx: 8, // rounded-lg
      stroke: "#93c5fd", 
      strokeWidth: 1.5, 
      delay: 3.7, 
      duration: 0.5 
    },
    
    // Export CSV button (right button)
    { 
      type: 'rect',
      x: 30 + ((dashboardWidth - 60 - 8) / 2) + 8, // Position after gap
      y: 410, 
      width: ((dashboardWidth - 60 - 8) / 2),
      height: 45,
      rx: 8, // rounded-lg
      stroke: "#93c5fd", 
      strokeWidth: 1.5, 
      delay: 3.8, 
      duration: 0.5 
    },
    
    // Reconciliation badge (separate element below dashboard)
    { 
      type: 'rect',
      x: 0, 
      y: dashboardHeight - 80, // Positioned below main dashboard
      width: dashboardWidth, 
      height: 80,
      rx: borderRadius,
      stroke: "#10b981", 
      strokeWidth: 2, 
      delay: 4.0, 
      duration: 0.8 
    },
    
    // Check icon circle in badge
    { 
      type: 'circle',
      cx: 40, 
      cy: dashboardHeight - 40, 
      r: 16,
      stroke: "#10b981", 
      strokeWidth: 1.5, 
      delay: 4.2, 
      duration: 0.5 
    },
    
    // Text area in reconciliation badge
    { 
      type: 'rect',
      x: 70, 
      y: dashboardHeight - 55, 
      width: dashboardWidth - 90, 
      height: 16,
      rx: 2,
      stroke: "#10b981", 
      strokeWidth: 1, 
      delay: 4.3, 
      duration: 0.4 
    },
    { 
      type: 'rect',
      x: 70, 
      y: dashboardHeight - 35, 
      width: dashboardWidth - 90, 
      height: 12,
      rx: 2,
      stroke: "#10b981", 
      strokeWidth: 1, 
      delay: 4.4, 
      duration: 0.4 
    },
  ];

  // Default transactions data - matching your original
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

  return (
    <motion.div
      style={{ y }}
      className="relative"
    >
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
              backgroundColor: 'transparent'
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
                if (path.type === 'rect') {
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
                } else if (path.type === 'circle') {
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

      {/* Main Reporting Dashboard - EXACTLY your original component structure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: animationPhase >= 1 ? 1 : 0, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
      >
        {/* Dashboard Header - EXACT structure */}
        <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={animationPhase >= 1 ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: animationPhase === 1 ? 0.2 : 0.1 }}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 to-violet-200"
              >
                <svg
                  className="h-5 w-5 text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
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
                  className="text-xl text-slate-900"
                >
                  Transaction Overview
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={animationPhase >= 1 ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.5 : 0.4 }}
              className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs text-emerald-700"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
              Live sync
            </motion.div>
          </div>

          {/* Stats - EXACT 3 boxes without borders */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.6 : 0.5 }}
            >
              <div className="text-xs text-slate-500">Today</div>
              <div className="relative h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={data.index || 0}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    className="text-xl text-slate-900"
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
              <div className="text-xl text-emerald-600">99.8%</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.8 : 0.7 }}
            >
              <div className="text-xs text-slate-500">Volume</div>
              <div className="relative h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={data.index || 0}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    className="text-xl text-slate-900"
                  >
                    {data.index === 0 ? "$2.4M" : "$2.7M"}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Transaction Table - EXACT structure */}
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationPhase >= 1 ? { opacity: 1 } : {}}
            transition={{ delay: animationPhase === 1 ? 0.9 : 0.8 }}
            className="mb-4 text-sm text-slate-900"
          >
            Recent Transactions
          </motion.div>

          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-xs">
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200">
                  <th className="px-3 py-2 text-left uppercase tracking-wider text-slate-600">
                    Transaction
                  </th>
                  <th className="px-3 py-2 text-left uppercase tracking-wider text-slate-600">
                    Company
                  </th>
                  <th className="px-3 py-2 text-right uppercase tracking-wider text-slate-600">
                    Amount
                  </th>
                  <th className="px-3 py-2 text-right uppercase tracking-wider text-slate-600">
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
                      delay: animationPhase === 1 ? 1.0 + (idx * 0.1) : idx * 0.1,
                      duration: 0.4 
                    }}
                    className="border-b border-slate-100 transition-colors hover:bg-slate-50"
                  >
                    <td className="px-3 py-3">
                      <div className="text-slate-900">{txn.id}</div>
                      <div className="text-slate-500">
                        {txn.date} • {txn.method}
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      <div className="text-slate-900">{txn.company}</div>
                      <div className="text-slate-500">{txn.invoice}</div>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <div className="text-slate-900">{txn.amount}</div>
                      <div className="text-slate-500">{txn.currency}</div>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${
                          txn.status === "Reconciled"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        <div
                          className={`h-1 w-1 rounded-full ${
                            txn.status === "Reconciled"
                              ? "bg-emerald-500"
                              : "bg-yellow-500"
                          }`}
                        ></div>
                        {txn.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons - EXACT structure */}
          <div className="mt-4 flex gap-2">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={animationPhase >= 1 ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: animationPhase === 1 ? 1.3 : 0.3 }}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 transition-all hover:bg-slate-50"
            >
              <svg
                className="h-4 w-4"
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
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm text-white transition-all hover:bg-slate-800"
            >
              <svg
                className="h-4 w-4"
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
              Export CSV
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Reconciliation Badge - EXACT structure (outside main dashboard) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={animationPhase >= 1 ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: animationPhase === 1 ? 1.5 : 0.5 }}
        className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3"
      >
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={animationPhase >= 1 ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: animationPhase === 1 ? 1.6 : 0.6 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100"
          >
            <svg
              className="h-4 w-4 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.div>
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: animationPhase === 1 ? 1.7 : 0.7 }}
              className="text-sm text-slate-900"
            >
              Auto-reconciliation active
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: animationPhase === 1 ? 1.8 : 0.8 }}
              className="text-xs text-slate-600"
            >
              {data.index === 0 ? "145 of 147" : "150 of 152"} transactions matched automatically
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

WireframeReportingDashboard.defaultProps = {
  data: {
    index: 0,
  },
  onAnimationComplete: () => {},
};