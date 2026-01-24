import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Container } from "../../components/ui";
import { WireframeTreasuryDashboard } from "./Wireframe/WireframeTreasuryDashboard";
import { FeatureBlock } from "./FeatureBlock";
import { ProgressLine } from "./FeatureBlock";

export function TreasuryModule() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  // Refs for progress line functionality
  const bulletRefs = useRef([]);
  const featuresContainerRef = useRef(null);

  // Added Logic: Data Index Toggling
  const [dataIndex, setDataIndex] = useState(0);

  // Feature cycling effect
  useEffect(() => {
    if (!isVisible) return;

    const FEATURE_DURATION = 2000;
    setActiveFeature(0);

    const interval = setInterval(() => {
      setActiveFeature((prev) => {
        if (prev >= features.length - 1) {
          return 0; // Reset to start for continuous loop
        }
        return prev + 1;
      });
    }, FEATURE_DURATION);

    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Real-Time Fund Visibility",
      description:
        "Monitor incoming international payments in real time across all supported currencies.",
    },
    {
      title: "Smart FX Controls",
      description:
        "Manage exchange rates with automated conversions and built-in currency risk controls.",
    },
    {
      title: "Automated Collections",
      description:
        "Improve cash flow using automated payment reminders and smart reconciliation tools.",
    },
  ];

  // Added Logic: Two datasets for the graph to animate between
  const chartDataSets = [
    [
      { month: "Jan", value: 2100000 },
      { month: "Feb", value: 2400000 },
      { month: "Mar", value: 2200000 },
      { month: "Apr", value: 2700000 },
      { month: "May", value: 2500000 },
      { month: "Jun", value: 2900000 },
    ],
    [
      { month: "Jan", value: 1900000 },
      { month: "Feb", value: 2100000 },
      { month: "Mar", value: 2500000 },
      { month: "Apr", value: 2300000 },
      { month: "May", value: 2800000 },
      { month: "Jun", value: 3100000 },
    ],
  ];

  const chartData = chartDataSets[dataIndex];
  const maxValue = 3500000;

  return (
    <div
      ref={sectionRef}
      className="subsection relative border-t border-blue-100 overflow-hidden isolate"
    >
      <div
        className="absolute inset-0 z-[1] pointer-events-none hero-grid opacity-30"
        aria-hidden="true"
      />
      <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3"
          >
            <span
              className="inline-block px-4 py-2 rounded-full hero-badge"
              style={{ backgroundColor: "#073f9e12", color: "#073f9e" }}
            >
              Treasury Operations
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="sub-section-heading mb-4 text-[#0A2540]"
          >
            Treasury & Working Capital Management
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-subtitle mb-8 text-[#425466]"
          >
            Operational treasury designed to free trapped working capital. Gain
            complete visibility into your international cash flows, optimize FX
            timing, and accelerate collections through intelligent automation.
          </motion.p>

          {/* Feature Blocks with Progress Line */}
          <div ref={featuresContainerRef} className="relative">
            <div className="relative pl-8">
              {/* Progress Line */}
              <ProgressLine
                bulletRefs={bulletRefs}
                activeFeature={activeFeature}
                featuresLength={features.length}
                containerRef={featuresContainerRef}
                isVisible={isVisible}
                // Custom positioning for treasury theme
                left="left-[59px]"
                top="top-7"
                width="w-[2px]"
                // Animation
                animationType="spring"
                stiffness={120}
                damping={15}
              />

              <div className="space-y-2">
                {features.map((feature, index) => (
                  <FeatureBlock
                    key={index}
                    title={feature.title}
                    index={index}
                    isActive={index <= activeFeature}
                    bulletRef={(el) => {
                      bulletRefs.current[index] = el;
                    }}
                  >
                    {feature.description}
                  </FeatureBlock>
                ))}
              </div>
            </div>
          </div>
        </div>

        <WireframeTreasuryDashboard
          data={{
            index: dataIndex,
            chartData: chartData, // This should be your actual chart data array
          }}
          chartDataSets={chartDataSets} // Pass this as a separate prop
          maxValue={maxValue} // Pass this as a separate prop
          isVisible={isVisible}
          y={y}
          onAnimationComplete={() => {
            // Your completion logic
          }}
        />
      </Container>
    </div>
  );
}