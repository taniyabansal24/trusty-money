import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function FeatureBlock({ title, children, index, isActive, bulletRef }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index }}
      className="group relative p-4"
    >
      <div className="flex items-start gap-3">
        {/* Bullet */}
        <div ref={bulletRef} className="relative flex-shrink-0 pt-1">
          <div className="flex h-6 w-6 items-center justify-center relative">
            <motion.div
              className={`h-4 w-4 rounded-full absolute ${
                isActive
                  ? "bg-blue-200"
                  : "bg-gradient-to-br from-blue-50 to-blue-100"
              }`}
              animate={{
                scale: isActive ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute h-2 w-2 rounded-full bg-[#0B43A0] z-10" />
          </div>
        </div>

        <div className="flex-1">
          <h3
            className={`feature-title mb-1 ${
              isActive ? "text-[#0B43A0]" : "text-[#0A2540]"
            }`}
          >
            {title}
          </h3>
          <div className="feature-description text-[#425466]">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}

// Reusable ProgressLine component with configurable positioning
export function ProgressLine({
  bulletRefs,
  activeFeature,
  featuresLength,
  containerRef,
  isVisible,
  className = "",
  lineClassName = "",
  trackClassName = "",
  showTrack = true,
  showIndicator = false,
  // Positioning props
  left = "left-[11px]",
  top = "top-0",
  width = "w-[2px]",
  // Animation props
  animationType = "spring",
  stiffness = 120,
  damping = 15,
  duration = 0.6,
}) {
  const [lineHeight, setLineHeight] = useState(0);
  const lineRef = useRef(null);

  // Calculate line height when active feature changes
  useEffect(() => {
    if (!containerRef.current || !bulletRefs.current.length) return;

    const calculateLineHeight = () => {
      const bullets = bulletRefs.current.filter(Boolean);
      if (bullets.length < 2) return;

      // Get container position
      const containerRect = containerRef.current.getBoundingClientRect();

      // Get first bullet position
      const firstBullet = bullets[0];
      const firstRect = firstBullet.getBoundingClientRect();
      const firstY = firstRect.top - containerRect.top + firstRect.height / 2;

      // Get active bullet position
      const activeBullet = bullets[activeFeature];
      if (!activeBullet) return;

      const activeRect = activeBullet.getBoundingClientRect();
      const activeY =
        activeRect.top - containerRect.top + activeRect.height / 2;

      // Calculate height (ensure it's at least 0)
      const height = Math.max(0, activeY - firstY);
      setLineHeight(height);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(calculateLineHeight, 50);
    return () => clearTimeout(timer);
  }, [activeFeature, bulletRefs, containerRef, isVisible]);

  // Animation config based on type
  const animationConfig = {
    spring: {
      type: "spring",
      stiffness,
      damping,
    },
    tween: {
      type: "tween",
      duration,
      ease: "easeInOut",
    },
    keyframes: {
      type: "keyframes",
      times: [0, 1],
      duration: duration,
    },
  };

  return (
    <div
      className={`absolute ${left} ${top} h-full ${width} overflow-hidden ${className}`}
    >
      {/* Background track */}
      {showTrack && (
        <div
          className={`absolute top-0 bottom-0 w-full bg-blue-100/30 h-[70%] ${trackClassName}`}
        />
      )}

      {/* Animated progress line */}
      <motion.div
        ref={lineRef}
        className={`absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 via-[#0B43A0] to-blue-400 ${lineClassName}`}
        style={{
          height: lineHeight,
          boxShadow: "0 0 8px rgba(11, 67, 160, 0.4)",
        }}
        animate={{
          height: lineHeight,
        }}
        transition={animationConfig[animationType] || animationConfig.spring}
      />

      {/* Optional: Progress indicator dot */}
      {showIndicator && lineHeight > 0 && (
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-white border-2 border-[#0B43A0] shadow-lg"
          style={{
            left: "50%",
            top: lineHeight,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      )}
    </div>
  );
}
