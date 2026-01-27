import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { WireframeInvoiceCard } from "./Wireframe/WireframeInvoiceCard";
import { Container } from "../../components/ui";
import { FeatureBlock } from "./FeatureBlock";
import { ProgressLine } from "./FeatureBlock";

const features = [
  {
    title: "Smart Invoice Generation",
    description:
      "Automatically create compliant invoices with tax calculations for 180+ countries.",
  },
  {
    title: "Flexible Billing Models",
    description:
      "Support usage-based, subscription, and milestone billing with automated tracking.",
  },
  {
    title: "Embedded Automation",
    description:
      "Automated reminders, dunning management, and seamless ERP integration.",
  },
];

export function BillingModule() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const bulletRefs = useRef([]);
  const featuresContainerRef = useRef(null);

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

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);

  const [dataIndex, setDataIndex] = useState(0);
  const dataSets = [
    {
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
    {
      client: "Global Tech Industries",
      inv: "INV-2025-4421",
      sub: "15,000.00",
      vat: "3,000.00",
      total: "18,000.00",
      country: "Germany",
      taxInfo: "MwSt (DE 19%)",
      lineItems: [
        {
          description: "SaaS Subscription (12 months)",
          quantity: "12",
          rate: "1,000.00",
          amount: "12,000.00",
        },
        {
          description: "Onboarding & Training",
          quantity: "1",
          rate: "2,500.00",
          amount: "2,500.00",
        },
        {
          description: "Extra Integrations",
          quantity: "5",
          rate: "100.00",
          amount: "500.00",
        },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prev) => (prev + 1) % dataSets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = dataSets[dataIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" relative border-t border-blue-100 overflow-hidden isolate pt-40 pb-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 filter opacity-30 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full filter opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute inset-0 hero-grid opacity-50"
          aria-hidden="true"
        />
        <div className="absolute inset-0 opacity-70" aria-hidden="true" />
      </div>

      <Container className="relative z-10 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div>
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
              Intelligent Billing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="sub-section-heading mb-4 text-[#0A2540]"
          >
            AI-Powered Billing & Invoicing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-subtitle mb-8"
          >
            Smart billing designed for international businesses. Generate
            compliant invoices automatically with built-in tax intelligence for
            every country you operate in.
          </motion.p>

          <div ref={featuresContainerRef} className="relative">
            <div className="relative pl-8">
              {/* Use the reusable ProgressLine component with custom positioning */}
              <ProgressLine
                bulletRefs={bulletRefs}
                activeFeature={activeFeature}
                featuresLength={features.length}
                containerRef={featuresContainerRef}
                isVisible={isVisible}
                // Custom positioning
                left="left-[10.3%]"
                top="top-6"
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

        {/* Visual - Interactive Card */}
        <WireframeInvoiceCard
          data={current}
          isVisible={isVisible}
          y={y}
          rotateX={rotateX}
        />
      </Container>
    </section>
  );
}