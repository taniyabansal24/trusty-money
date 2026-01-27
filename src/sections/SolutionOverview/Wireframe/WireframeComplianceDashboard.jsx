import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import US from "country-flag-icons/react/3x2/US";
import GB from "country-flag-icons/react/3x2/GB";
import EU from "country-flag-icons/react/3x2/EU"; // For European Union
import CA from "country-flag-icons/react/3x2/CA";

export function WireframeComplianceDashboard({
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

  // Dashboard dimensions - adjust based on your actual dashboard size
  const dashboardWidth = 500; // Adjust based on your dashboard
  const dashboardHeight = 650; // Adjust based on your dashboard
  const borderRadius = 12; // rounded-xl = 12px

  // Wireframe paths for compliance dashboard
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

    // Header section outline (where "Compliance Monitor" is)
    {
      type: "rect",
      x: 20,
      y: 20,
      width: dashboardWidth - 40,
      height: 140,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 0.5,
      duration: 1,
    },

    // Live Monitoring badge area
    {
      type: "rect",
      x: dashboardWidth - 140,
      y: 30,
      width: 110,
      height: 30,
      rx: 15, // pill shape
      stroke: "#60a5fa",
      strokeWidth: 1.5,
      delay: 0.8,
      duration: 0.8,
    },

    // Metrics grid (3 boxes)
    {
      type: "rect",
      x: 30,
      y: 90,
      width: (dashboardWidth - 100) / 3,
      height: 60,
      rx: 6,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 1.2,
      duration: 0.6,
    },
    {
      type: "rect",
      x: 30 + (dashboardWidth - 100) / 3 + 20,
      y: 90,
      width: (dashboardWidth - 100) / 3,
      height: 60,
      rx: 6,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 1.4,
      duration: 0.6,
    },
    {
      type: "rect",
      x: 30 + 2 * ((dashboardWidth - 100) / 3) + 40,
      y: 90,
      width: (dashboardWidth - 100) / 3,
      height: 60,
      rx: 6,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 1.6,
      duration: 0.6,
    },

    // Main content area (Active Tax Jurisdictions)
    {
      type: "rect",
      x: 20,
      y: 180,
      width: dashboardWidth - 40,
      height: dashboardHeight - 220,
      rx: 8,
      stroke: "#3b82f6",
      strokeWidth: 2,
      delay: 2.0,
      duration: 1,
    },

    // Section header (Active Tax Jurisdictions)
    {
      type: "rect",
      x: 30,
      y: 190,
      width: 200,
      height: 25,
      rx: 4,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 2.3,
      duration: 0.6,
    },

    // Region cards (4 cards)
    {
      type: "rect",
      x: 30,
      y: 230,
      width: dashboardWidth - 60,
      height: 80,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 2.6,
      duration: 0.7,
    },
    {
      type: "rect",
      x: 30,
      y: 325,
      width: dashboardWidth - 60,
      height: 80,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 2.8,
      duration: 0.7,
    },
    {
      type: "rect",
      x: 30,
      y: 420,
      width: dashboardWidth - 60,
      height: 80,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 3.0,
      duration: 0.7,
    },
    {
      type: "rect",
      x: 30,
      y: 515,
      width: dashboardWidth - 60,
      height: 80,
      rx: 8,
      stroke: "#93c5fd",
      strokeWidth: 1.5,
      delay: 3.2,
      duration: 0.7,
    },

    // Region flags (circles in each card)
    {
      type: "circle",
      cx: 60,
      cy: 270,
      r: 20,
      stroke: "#60a5fa",
      strokeWidth: 1.5,
      delay: 2.7,
      duration: 0.5,
    },
    {
      type: "circle",
      cx: 60,
      cy: 365,
      r: 20,
      stroke: "#60a5fa",
      strokeWidth: 1.5,
      delay: 2.9,
      duration: 0.5,
    },
    {
      type: "circle",
      cx: 60,
      cy: 460,
      r: 20,
      stroke: "#60a5fa",
      strokeWidth: 1.5,
      delay: 3.1,
      duration: 0.5,
    },
    {
      type: "circle",
      cx: 60,
      cy: 555,
      r: 20,
      stroke: "#60a5fa",
      strokeWidth: 1.5,
      delay: 3.3,
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

      {/* Main Compliance Dashboard - Your actual content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          isVisible ? { opacity: animationPhase >= 1 ? 1 : 0, y: 0 } : {}
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
      >
        <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                  transition={{ delay: animationPhase === 1 ? 0.2 : 0.1 }}
                  className="text-xs uppercase tracking-wider text-slate-500"
                >
                  Compliance Monitor
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: animationPhase === 1 ? 0.3 : 0.2 }}
                  className="text-xl text-slate-900"
                >
                  Global Tax & Regulations
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={animationPhase >= 1 ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.4 : 0.3 }}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs txt-blue light-bg"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#073F9E]"></div>
              Live Monitoring
            </motion.div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={animationPhase >= 1 ? { opacity: 1 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.5 : 0.4 }}
              className="rounded-lg border border-slate-100 bg-white p-3"
            >
              <div className="mb-1 text-xs text-slate-500">Regions</div>
              <div className="relative h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={data.index || 0}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    className="text-2xl text-slate-900"
                  >
                    {data.index === 0 ? "180+" : "184"}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={animationPhase >= 1 ? { opacity: 1 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.6 : 0.5 }}
              className="rounded-lg border border-slate-100 bg-white p-3"
            >
              <div className="mb-1 text-xs text-slate-500">Compliance Rate</div>
              <div className="text-2xl text-[#0B43A0]">100%</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={animationPhase >= 1 ? { opacity: 1 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.7 : 0.6 }}
              className="rounded-lg border border-slate-100 bg-white p-3"
            >
              <div className="mb-1 text-xs text-slate-500">Auto-checks</div>
              <div className="text-2xl text-slate-900">24/7</div>
            </motion.div>
          </div>
        </div>

        {/* Active Tax Jurisdictions */}
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationPhase >= 1 ? { opacity: 1 } : {}}
            transition={{ delay: animationPhase === 1 ? 0.8 : 0.7 }}
            className="mb-4 flex items-center justify-between"
          >
            <div className="text-sm text-slate-900">
              Active Tax Jurisdictions
            </div>
            <div className="text-xs text-slate-500">
              {data.regions?.length || 4} regions
            </div>
          </motion.div>

          <div className="space-y-2">
            {(data.regions || []).map((region, idx) => (
              <motion.div
                key={region.code}
                initial={{ opacity: 0, y: 10 }}
                animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: animationPhase === 1 ? 0.9 + idx * 0.1 : idx * 0.1,
                  duration: 0.4,
                }}
                className="group relative overflow-hidden rounded-lg border border-slate-100 bg-slate-50 p-4 hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center text-lg shadow-sm overflow-hidden">
                      {region.code === "US" && (
                        <US title="United States" className="h-6 w-auto" />
                      )}
                      {region.code === "GB" && (
                        <GB title="United Kingdom" className="h-6 w-auto" />
                      )}
                      {region.code === "EU" && (
                        <EU title="European Union" className="h-6 w-auto" />
                      )}
                      {region.code === "CA" && (
                        <CA title="Canada" className="h-6 w-auto" />
                      )}
                    </div>
                    <div>
                      <div className="mb-1 text-sm text-slate-900">
                        {region.name}
                      </div>
                      <div className="text-xs text-slate-600">
                        {region.tax} • {region.rate}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mb-1 text-xs text-slate-500">
                      Transactions
                    </div>
                    <div className="relative h-5 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={data.index || 0}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          className="text-sm text-slate-900"
                        >
                          {region.transactions}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <div className="mt-1 flex items-center justify-end gap-1 text-xs text-[#0B43A0]">
                      <div className="h-1 w-1 rounded-full bg-[#3b82f6]"></div>
                      {region.compliance}% compliant
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

WireframeComplianceDashboard.defaultProps = {
  data: {
    index: 0,
    regions: [
      {
        code: "US",
        name: "United States",
        tax: "Sales Tax",
        rate: "State-based",
        transactions: "2,847",
        compliance: 100,
      },
      {
        code: "GB",
        name: "United Kingdom",
        tax: "VAT",
        rate: "20%",
        transactions: "1,923",
        compliance: 100,
      },
      {
        code: "EU",
        name: "European Union",
        tax: "VAT",
        rate: "19-27%",
        transactions: "4,152",
        compliance: 100,
      },
      {
        code: "CA",
        name: "Canada",
        tax: "GST/HST",
        rate: "5-15%",
        transactions: "892",
        compliance: 100,
      },
    ],
  },
  onAnimationComplete: () => {},
};
