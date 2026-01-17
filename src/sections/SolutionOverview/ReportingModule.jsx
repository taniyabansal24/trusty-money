// Updated ReportingModule.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "../../components/ui";
import { FeatureBlock } from "../../sections/SolutionOverview/BillingModule";
import { WireframeReportingDashboard } from "./Wireframe/WireframeReportingDashboard";

export function ReportingModule() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Data index for animations
  const [dataIndex, setDataIndex] = useState(0);

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
      className="relative border-t border-indigo-100 py-20 md:py-24 overflow-hidden isolate"
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
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-gradient-to-r from-[#0F1615]/10 via-white/80 to-blue-50/60 backdrop-blur-sm px-3 py-1 shadow-sm"
          >
            <div className="flex h-2 w-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#0B43A0]" />
            <span className="text-xs font-medium tracking-wide text-[#0A2540]">
              Financial Intelligence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-4 text-3xl font-bold text-[#0A2540]"
          >
            Reporting & Reconciliation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 text-lg leading-relaxed text-[#425466]"
          >
            Unified visibility across billing, payments, and cash flows.
            Eliminate manual reconciliation with automated matching, real-time
            reporting, and finance-ready exports.
          </motion.p>

          {/* Feature Blocks with Custom Bullets */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <FeatureBlock key={index} title={feature.title} index={index}>
                {feature.description}
              </FeatureBlock>
            ))}
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
            console.log("Reporting dashboard wireframe completed!");
          }}
        />
      </Container>
    </div>
  );
}