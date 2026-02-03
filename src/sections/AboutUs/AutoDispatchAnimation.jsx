import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  GiftBoxIcon,
  GlobeIcon,
  LayersIcon,
  LightningSwapIcon,
  SwapBoltIcon,
  TagIcon,
} from "../../components/svg/about-usSVG";
import Logo from "../../components/svg/Logo";

const nodes = [
  {
    id: 1,
    label: "NetSystems",
    amount: "$900",
    icon: TagIcon,
    angle: -90, // Top
  },
  {
    id: 2,
    label: "RapidLog",
    amount: "$1,150",
    icon: LightningSwapIcon,
    angle: -30, // Top-right
  },
  {
    id: 3,
    label: "Acme Corp",
    amount: "$2,400",
    icon: SwapBoltIcon,
    angle: 30, // Bottom-right
  },
  {
    id: 4,
    label: "Global Ind",
    amount: "$850",
    icon: GiftBoxIcon,
    angle: 90, // Bottom
  },
  {
    id: 5,
    label: "TechStart",
    amount: "$12,000",
    icon: LayersIcon,
    angle: 150, // Bottom-left
  },
  {
    id: 6,
    label: "BlueSky",
    amount: "$4,300",
    icon: GiftBoxIcon,
    angle: -150, // Top-left
  },
];

const CENTER_X = 300;
const CENTER_Y = 300;
const RADIUS = 210;

export default function AutoDispatchAnimation() {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState(new Set());
  const [dashOffset, setDashOffset] = useState(0);
  const [iconScales, setIconScales] = useState({});
  const [lineScales, setLineScales] = useState({});

  // Continuous dash animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDashOffset((prev) => (prev - 4) % 12);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Trigger scale animations when active changes
  useEffect(() => {
    if (active >= 0) {
      // Scale icon when line hits it - STAY SCALED until completed
      setIconScales((prev) => ({
        ...prev,
        [active]: 1.3, // Keep at 1.3 while active
      }));

      // Scale line when active - STAY SCALED until completed
      setLineScales((prev) => ({
        ...prev,
        [active]: 1.3, // Keep at 1.3 while active
      }));
    }
  }, [active]);

  // When an item becomes completed, reset its scale
  useEffect(() => {
    // Check which items are in completed but not in active
    completed.forEach((completedIndex) => {
      if (completedIndex !== active) {
        setIconScales((prev) => ({
          ...prev,
          [completedIndex]: 1, // Reset to normal scale
        }));
        setLineScales((prev) => ({
          ...prev,
          [completedIndex]: 1, // Reset to normal scale
        }));
      }
    });
  }, [completed, active]);

  // Mark as completed after animation
  useEffect(() => {
    if (active >= 0) {
      const completionTimer = setTimeout(() => {
        setCompleted((prev) => new Set([...prev, active]));
      }, 1200); // After line animation completes

      return () => clearTimeout(completionTimer);
    }
  }, [active]);

  // Organic dispatch timing
  useEffect(() => {
    let timeoutId;

    const dispatchNext = () => {
      // Random timing variation between 1.6s and 2.2s
      const delay = 1600 + Math.random() * 600;

      timeoutId = setTimeout(() => {
        setActive((prev) => {
          const next = (prev + 1) % nodes.length;
          
          // When loop restarts (back to node 0), clear ALL completed states
          if (next === 0) {
            // Clear completed set - this will make ALL nodes gray
            setCompleted(new Set());
            // Reset all scales to 1
            setIconScales({});
            setLineScales({});
            // Give a small pause before starting node 0
            setTimeout(() => {
              // Now node 0 will activate fresh
            }, 100);
          }
          
          return next;
        });
        dispatchNext();
      }, delay);
    };

    dispatchNext();

    return () => clearTimeout(timeoutId);
  }, [active]);

  return (
    <div className="relative w-[600px] h-[600px] mx-auto">
      {/* SVG CONNECTIONS */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = CENTER_X + RADIUS * Math.cos(rad);
          const y = CENTER_Y + RADIUS * Math.sin(rad);

          const isActive = i === active;
          const isCompleted = completed.has(i);

          // Calculate color based on state
          // Only show blue if ACTIVE OR (COMPLETED AND NOT AT THE START OF NEW LOOP)
          let strokeColor = "#E2E8F0"; // Default inactive (gray)
          if (isCompleted && active !== 0) strokeColor = "#073F9E"; // Completed (blue)
          if (isActive) strokeColor = "#073F9E"; // Active (blue)

          // Calculate opacity based on state
          let opacity = 0.6; // Inactive
          if (isCompleted && active !== 0) opacity = 0.9;
          if (isActive) opacity = 1;

          // Calculate stroke width - stays scaled while active, returns to normal when completed
          const strokeWidth = isActive ? (lineScales[i] || 1) * 2 : 
                            isCompleted && active !== 0 ? 2 : 2; // Completed items return to normal width

          return (
            <line
              key={node.id}
              x1={CENTER_X}
              y1={CENTER_Y}
              x2={x}
              y2={y}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeDasharray={isActive ? "6 6" : "0"}
              strokeDashoffset={isActive ? dashOffset : 0}
              opacity={opacity}
              style={{
                transition:
                  "stroke 0.3s ease, opacity 0.3s ease, stroke-width 0.3s ease",
              }}
            />
          );
        })}
      </svg>

      {/* CENTER ENGINE */}
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute"
        style={{
          top: 262,
          left: 262,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="w-20 h-20 rounded-full bg-white
                       flex items-center justify-center 
                       shadow-lg "
        >
          <Logo width={38} height={38} />
        </div>
      </motion.div>

      {/* NODES */}
      {nodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = CENTER_X + RADIUS * Math.cos(rad);
        const y = CENTER_Y + RADIUS * Math.sin(rad);

        // Calculate direction vector for card offset
        const ux = Math.cos(rad);
        const uy = Math.sin(rad);
        const CARD_OFFSET = 42; // Distance from icon to card

        const isActive = i === active;
        const isCompleted = completed.has(i);
        const IconComponent = node.icon;

        // Determine visual state
        // Show blue only when active OR (completed and we're not at the start of new loop)
        const showActiveState = isActive || (isCompleted && active !== 0);

        return (
          <React.Fragment key={node.id}>
            {/* NODE ICON (ANCHOR POINT - FIXED) */}
            <div
              className="absolute"
              style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* ICON CIRCLE - STAYS SCALED WHILE ACTIVE */}
              <motion.div
                animate={{
                  scale: iconScales[i] || 1,
                }}
                transition={{
                  scale: {
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  },
                }}
                className="relative"
              >
                {/* Icon with gray filter when inactive */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center 
                               transition-all duration-300 ${showActiveState ? "bg-blue-50" : "bg-gray-50"}`}
                >
                  <div
                    className={`transition-all duration-300
    ${
      showActiveState
        ? "opacity-100 filter-none"
        : "opacity-40 grayscale"
    }
  `}
                  >
                    <IconComponent className="w-12 h-12" />
                  </div>
                </div>
              </motion.div>

              {/* CARD/LABEL - POSITIONED USING ANGLE VECTOR */}
              <motion.div
                className="absolute"
                style={{
                  // Position at the same anchor point as icon
                  right: "-37%",
                  top: "120%",
                  // Offset using angle vector (outward from center)
                  transform: `translate(${ux * CARD_OFFSET}px, ${uy * CARD_OFFSET}px) translate(-50%, -50%)`,
                }}
                animate={{
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{
                  scale: { 
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    duration: 0.3 
                  },
                }}
              >
                <div
                  className={`bg-white rounded-lg px-3 py-2 text-center min-w-[100px] border 
                               ${isActive ? "border-blue-200 shadow-md" : "border-gray-100 shadow-sm"}`}
                >
                  <p className="text-xs font-semibold text-gray-800">
                    {node.label}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    {node.amount}
                  </p>
                </div>
              </motion.div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}