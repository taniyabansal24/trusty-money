import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Container } from "../../components/ui";
import { FeatureBlock } from "../../sections/SolutionOverview/BillingModule";
import { WireframeComplianceDashboard } from "./Wireframe/WireframeComplianceDashboard";

export function ComplianceModule() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const regionsSets = [
    [
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
    [
      {
        code: "US",
        name: "United States",
        tax: "Sales Tax",
        rate: "State-based",
        transactions: "3,102",
        compliance: 100,
      },
      {
        code: "GB",
        name: "United Kingdom",
        tax: "VAT",
        rate: "20%",
        transactions: "2,145",
        compliance: 100,
      },
      {
        code: "EU",
        name: "European Union",
        tax: "VAT",
        rate: "19-27%",
        transactions: "4,680",
        compliance: 100,
      },
      {
        code: "CA",
        name: "Canada",
        tax: "GST/HST",
        rate: "5-15%",
        transactions: "954",
        compliance: 100,
      },
    ],
  ];

  const regions = regionsSets[dataIndex];
  const checks = [
    { name: "AML Screening", status: "Pass", time: "Real-time" },
    { name: "Sanctions Check", status: "Pass", time: "Real-time" },
    { name: "KYC Verification", status: "Pass", time: "Updated 2h ago" },
  ];

  const features = [
    {
      title: "Intelligent Tax Logic",
      description:
        "Automatically apply correct tax rates for 180+ jurisdictions with real-time updates.",
    },
    {
      title: "Compliance Documentation",
      description:
        "Generate audit-ready documentation with tax certificates and complete audit trails.",
    },
    {
      title: "Security & Screening",
      description:
        "Real-time AML monitoring, sanctions screening, and KYC verification for all transactions.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative border-t border-blue-100 py-20 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80  rounded-full filter opacity-30 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80  rounded-full filter opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute inset-0 hero-grid opacity-50"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 hero-ambient opacity-70"
          aria-hidden="true"
        />
      </div>
      <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content Side - Unified Emerald Styling */}
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
              Compliance Engine
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-4 text-3xl font-bold text-[#0A2540]"
          >
            Global Tax & Compliance Automation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 text-lg leading-relaxed text-[#425466]"
          >
            Global compliance handled automatically. Stay compliant across every
            jurisdiction with real-time tax calculations, regulatory monitoring,
            and built-in security protocols.
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
        <WireframeComplianceDashboard
          data={{
            index: dataIndex,
            regions: regions,
          }}
          isVisible={isVisible}
          y={y}
          onAnimationComplete={() => {
            console.log("Compliance dashboard wireframe completed!");
          }}
        />
      </Container>
    </div>
  );
}
