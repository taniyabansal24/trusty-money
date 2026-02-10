// Updated ReportingModule.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "../../components/ui";
import { WireframeReportingDashboard } from "./Wireframe/WireframeReportingDashboard";
import { FeatureBlock } from "./FeatureBlock";
import { ProgressLine } from "./FeatureBlock";

export function ReportingModule() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  // Refs for progress line functionality
  const bulletRefs = useRef([]);
  const featuresContainerRef = useRef(null);

  // Data index for animations
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Real-Time Transaction Tracking",
      description:
        "Track invoices and payments in real time across all supported currencies.",
    },
    {
      title: "Automated Reconciliation",
      description:
        "Automatically match payments to invoices across banks and payment rails.",
    },
    {
      title: "Finance-Ready Reports",
      description:
        "Generate standardized reports ready for accounting and finance teams.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="subsection relative border-t border-indigo-100 overflow-hidden isolate"
    >
      <div
        className="absolute inset-0 z-[1] pointer-events-none hero-grid opacity-30"
        aria-hidden="true"
      />
      <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div className="">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="inline-block px-4 py-2 rounded-full hero-badge light-bg txt-blue">
              Financial Intelligence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="sub-section-heading mb-4 text-[#0A2540]"
          >
            Reporting & Reconciliation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-subtitle mb-8"
          >
            Unified visibility across billing, payments, and cash flows.
            Eliminate manual reconciliation with automated matching, real-time
            reporting, and finance-ready exports.
          </motion.p>

          {/* Feature Blocks with Progress Line */}
          <div ref={featuresContainerRef} className="relative">
            <div className="relative md:pl-8">
              {/* Progress Line */}
              <ProgressLine
                bulletRefs={bulletRefs}
                activeFeature={activeFeature}
                featuresLength={features.length}
                containerRef={featuresContainerRef}
                isVisible={isVisible}
                left="left-[27px] md:left-[59px]"
                top="top-7"
                width="w-[2px]"
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

        {/* Visual Side - Dashboard */}
        <WireframeReportingDashboard
          data={{
            index: dataIndex,
          }}
          isVisible={isVisible}
          y={y}
          onAnimationComplete={() => {
          }}
        />
      </Container>
    </div>
  );
}
