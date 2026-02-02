import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WireframeInvoiceCard({
  data,
  isVisible = false,
  y = 0,
  rotateX = 0,
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

  // New container dimensions: 31rem x 38rem
  const containerWidth = 496; // 31rem in pixels (31 * 16)
  const containerHeight = 608; // 38rem in pixels (38 * 16)
  const borderRadius = 16; // 1rem in pixels (16px)

  // Wireframe paths with rounded corners and gaps - ADJUSTED FOR NEW DIMENSIONS
  const wireframePaths = [
    // Main card outline with rounded corners
    { 
      type: 'rect',
      x: 0, 
      y: 0, 
      width: containerWidth, 
      height: containerHeight,
      rx: borderRadius,
      stroke: "#3b82f6", 
      strokeWidth: 2, 
      delay: 0, 
      duration: 1.5 
    },
    
    // Bill To box outline - adjusted position and size
    { 
      type: 'rect',
      x: 20, 
      y: 125, 
      width: 456, 
      height: 90,
      rx: 8,
      stroke: "#93c5fd", 
      strokeWidth: 1.5, 
      delay: 1.0, 
      duration: 0.8 
    },
    
    // Table horizontal lines - adjusted positions for new height
    { 
      type: 'line',
      x1: containerWidth * 0.04 + 8,
      y1: containerHeight * 0.46, 
      x2: containerWidth * 0.96 - 8,
      y2: containerHeight * 0.46,
      stroke: "#60a5fa", 
      strokeWidth: 1, 
      delay: 2.0, 
      duration: 0.6 
    },
    { 
      type: 'line',
      x1: containerWidth * 0.04 + 8,
      y1: containerHeight * 0.52, 
      x2: containerWidth * 0.96 - 8,
      y2: containerHeight * 0.52,
      stroke: "#60a5fa", 
      strokeWidth: 1, 
      delay: 2.3, 
      duration: 0.6 
    },
    { 
      type: 'line',
      x1: containerWidth * 0.04 + 8,
      y1: containerHeight * 0.58, 
      x2: containerWidth * 0.96 - 8,
      y2: containerHeight * 0.58,
      stroke: "#60a5fa", 
      strokeWidth: 1, 
      delay: 2.6, 
      duration: 0.6 
    },
    { 
      type: 'line',
      x1: containerWidth * 0.04 + 8,
      y1: containerHeight * 0.64, 
      x2: containerWidth * 0.96 - 8,
      y2: containerHeight * 0.64,
      stroke: "#60a5fa", 
      strokeWidth: 1, 
      delay: 2.9, 
      duration: 0.6 
    },
    
    // PENDING button outline - adjusted position
    { 
      type: 'rect',
      x: containerWidth * 0.75, 
      y: containerHeight * 0.88, 
      width: containerWidth * 0.17, 
      height: containerHeight * 0.04,
      rx: 12,
      stroke: "#60a5fa", 
      strokeWidth: 1.5, 
      delay: 3.5, 
      duration: 0.8 
    },
  ];

  return (
    <div
      className="relative perspective-1000"
    >
      {/* Wireframe Overlay - ADJUSTED DIMENSIONS */}
      <AnimatePresence>
        {shouldAnimate && animationPhase === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 overflow-hidden"
            style={{ 
              width: '31rem',  // Updated width
              height: '38rem', // Updated height
              borderRadius: '1rem',
              backgroundColor: 'transparent'
            }}
          >
            {/* Wireframe Drawing - Scaled to new container */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox={`0 0 ${containerWidth} ${containerHeight}`}
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
                } else if (path.type === 'line') {
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
                      strokeDasharray="8 4"
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
              
              {/* "PENDING" label in button area */}
              <motion.text
                x={containerWidth * 0.81}
                y={containerHeight * 0.905}
                fill="none"
                stroke="#60a5fa"
                strokeWidth="0.8"
                fontSize="12"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 3.8, duration: 0.5 }}
              >
                PENDING
              </motion.text>
              
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Invoice Card - UPDATED DIMENSIONS */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: 10 }}
        animate={
          isVisible
            ? {
                opacity: animationPhase >= 1 ? 1 : 0,
                y: 0,
                rotateY: 0,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          rotateY: { duration: 1 },
        }}
        className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl transform-style-3d"
        style={{
          width: '31rem',    // Updated width
          height: '38rem',   // Updated height
        }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-sky-50/50" />

        {/* Progress Indicator */}
        <motion.div
          initial={{ width: "0%" }}
          animate={isVisible ? { width: "85%" } : {}}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#0B43A0]"
        />

        {/* Header Section - ADJUSTED PADDING */}
        <div className="relative border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white p-5">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                transition={{ delay: animationPhase === 1 ? 0.2 : 0.1 }}
                className="mb-1 text-xs uppercase tracking-wider text-gray-500"
              >
                From
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: animationPhase === 1 ? 0.3 : 0.2 }}
                className="mb-1 text-sm text-[#0A2540] font-medium"
              >
                RougeCodes Pvt. Ltd.
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                transition={{ delay: animationPhase === 1 ? 0.4 : 0.3 }}
                className="text-xs text-[#425466]"
              >
                B-47, Janakpuri West
                <br />
                New Delhi 110058, India
                <br />
                GSTIN: 07AABCU9603R1ZM
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={animationPhase >= 1 ? { opacity: 1 } : {}}
              transition={{ delay: animationPhase === 1 ? 0.5 : 0.4 }}
              className="text-right"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={animationPhase >= 1 ? { scale: 1 } : {}}
                transition={{ delay: animationPhase === 1 ? 0.6 : 0.5 }}
                className="mb-2 text-xl font-bold text-[#0A2540]"
              >
                INVOICE
              </motion.div>
              <div className="text-xs text-[#425466]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                  transition={{ delay: animationPhase === 1 ? 0.7 : 0.6 }}
                  className="mb-1"
                >
                  <span className="text-gray-500">Invoice #:</span> {data.inv}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                  transition={{ delay: animationPhase === 1 ? 0.8 : 0.7 }}
                  className="mb-1"
                >
                  <span className="text-gray-500">Date:</span> January 15, 2025
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                  transition={{ delay: animationPhase === 1 ? 0.9 : 0.8 }}
                >
                  <span className="text-gray-500">Due:</span> February 14, 2025
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bill To Section */}
          <motion.div
            key={data.inv}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: animationPhase === 1 ? 1.0 : 0.5,
              duration: 0.5 
            }}
            className="rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4"
          >
            <div className="mb-1 text-xs uppercase tracking-wider text-[#0B43A0]">
              Bill To
            </div>
            <div className="mb-1 text-sm text-[#0A2540] font-medium">{data.client}</div>
            <div className="text-xs text-[#425466]">
              {data.country}
              <br />
              {data.taxInfo}
            </div>
          </motion.div>
        </div>

        {/* Line Items Table - ADJUSTED PADDING */}
        <div className="relative p-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-xs uppercase tracking-wide text-[#425466]">
                <motion.th
                  initial={{ opacity: 0 }}
                  animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                  transition={{ delay: animationPhase === 1 ? 1.1 : 0.9 }}
                  className="pb-3 text-left"
                >
                  Description
                </motion.th>
                <motion.th
                  initial={{ opacity: 0 }}
                  animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                  transition={{ delay: animationPhase === 1 ? 1.15 : 0.95 }}
                  className="pb-3 text-right"
                >
                  Qty
                </motion.th>
                <motion.th
                  initial={{ opacity: 0 }}
                  animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                  transition={{ delay: animationPhase === 1 ? 1.2 : 1.0 }}
                  className="pb-3 text-right"
                >
                  Rate
                </motion.th>
                <motion.th
                  initial={{ opacity: 0 }}
                  animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                  transition={{ delay: animationPhase === 1 ? 1.25 : 1.05 }}
                  className="pb-3 text-right"
                >
                  Amount
                </motion.th>
              </tr>
            </thead>
            <AnimatePresence mode="wait">
              <motion.tbody key={data.inv}>
                {data.lineItems.map((item, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ 
                      delay: animationPhase === 1 ? 1.3 + (idx * 0.1) : idx * 0.1,
                      duration: 0.4 
                    }}
                    className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors duration-200"
                  >
                    <td className="py-2.5 text-sm text-[#0A2540]">
                      {item.description}
                    </td>
                    <td className="py-2.5 text-right text-sm text-[#425466]">
                      {item.quantity}
                    </td>
                    <td className="py-2.5 text-right text-sm text-[#425466]">
                      ${item.rate}
                    </td>
                    <td className="py-2.5 text-right text-sm font-medium text-[#0A2540]">
                      ${item.amount}
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </AnimatePresence>
          </table>

          {/* Totals Section */}
          <div className="mt-4 flex justify-end">
            <div className="w-60 space-y-2 text-sm">
              <motion.div
                initial={{ opacity: 0 }}
                animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                transition={{ delay: animationPhase === 1 ? 1.7 : 1.3 }}
                className="flex justify-between text-[#425466]"
              >
                <span>Subtotal</span>
                <span key={`sub-${data.inv}`}>
                  ${data.sub}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                transition={{ delay: animationPhase === 1 ? 1.8 : 1.4 }}
                className="flex justify-between text-[#425466]"
              >
                <span className="flex items-center gap-1.5">
                  {data.taxInfo}
                  <motion.span
                    animate={animationPhase >= 2 ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="rounded px-1 py-0.5 text-xs light-bg txt-blue"
                  >
                    Auto-calc
                  </motion.span>
                </span>
                <span key={`vat-${data.inv}`}>
                  ${data.vat}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={animationPhase >= 1 ? { opacity: 1 } : {}}
                transition={{ delay: animationPhase === 1 ? 1.9 : 1.5 }}
                className="flex justify-between border-t border-gray-200 pt-2 text-sm text-[#0A2540]"
              >
                <span>Total Due</span>
                <motion.span
                  key={`total-${data.inv}`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: animationPhase === 1 ? 2.0 : 1.6 }}
                  className="text-lg font-bold"
                >
                  ${data.total}
                </motion.span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer with PENDING button - ADJUSTED PADDING */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={animationPhase >= 1 ? { opacity: 1 } : {}}
          transition={{ delay: animationPhase === 1 ? 2.1 : 1.7 }}
          className="border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white px-5 py-2"
        >
          <div className="flex items-center justify-between">
            <div className="text-xs text-[#425466]">
              Payment due by February 14, 2025
            </div>
            <motion.div
              animate={{
                backgroundColor: [
                  "rgb(219, 234, 254)",
                  "rgb(191, 219, 254)",
                  "rgb(219, 234, 254)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-full px-3 py-1 text-xs font-medium text-[#0B43A0]"
            >
              PENDING
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

WireframeInvoiceCard.defaultProps = {
  data: {
    client: "Acme Corporation Ltd",
    inv: "INV-2025-1247",
    sub: "24,800.00",
    vat: "4,960.00",
    total: "29,760.00",
    country: "United Kingdom",
    taxInfo: "VAT (UK 20%)",
    lineItems: [
      {
        description: "Enterprise Platform License",
        quantity: "1",
        rate: "18,500.00",
        amount: "18,500.00",
      },
      {
        description: "API Integration Package",
        quantity: "1",
        rate: "4,200.00",
        amount: "4,200.00",
      },
      {
        description: "Premium Support (Annual)",
        quantity: "12",
        rate: "175.00",
        amount: "2,100.00",
      },
    ],
  },
  onAnimationComplete: () => {},
};