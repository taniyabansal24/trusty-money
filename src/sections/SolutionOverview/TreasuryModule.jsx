import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Container } from "../../components/ui";
import { FeatureBlock } from "../../sections/SolutionOverview/BillingModule";
import { WireframeTreasuryDashboard } from "./Wireframe/WireframeTreasuryDashboard";

export function TreasuryModule() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Added Logic: Data Index Toggling
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
      className="relative border-t border-blue-100 bg-gradient-to-br from-blue-50/30 via-white to-sky-50/20 py-20 md:py-24 overflow-hidden isolate"
    >
      <div
        className="absolute inset-0 z-[1] pointer-events-none hero-grid opacity-30"
        aria-hidden="true"
      />
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-gradient-to-r from-[#0F1615]/10 via-white/80 to-blue-50/60 backdrop-blur-sm px-3 py-1 shadow-sm"
          >
            <div className="flex h-2 w-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#0B43A0]" />
            <span className="text-xs font-medium tracking-wide text-[#0A2540]">
              Treasury Operations
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-4 text-3xl font-bold text-[#0A2540]"
          >
            Treasury & Working Capital Management
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 text-lg leading-relaxed text-[#425466]"
          >
            Operational treasury designed to free trapped working capital. Gain
            complete visibility into your international cash flows, optimize FX
            timing, and accelerate collections through intelligent automation.
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
