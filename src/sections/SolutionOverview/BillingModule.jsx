import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { WireframeInvoiceCard } from "./Wireframe/WireframeInvoiceCard";

import { Container } from "../../components/ui";

// Reusable feature block with custom bullets
export function FeatureBlock({ title, children, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index }}
      className="group relative p-4"
    >
      <div className="flex items-start gap-3">
        {/* Custom bullet - simplified but still stylish */}
        <div className="relative flex-shrink-0">
          <div className="flex h-6 w-6 items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-50 to-blue-100" />
            <div className="absolute h-2 w-2 rounded-full bg-[#0B43A0]" />
          </div>
          {/* Connecting line - subtle visual flow */}
          {index < 2 && (
            <div className="absolute left-3 top-6 h-4 w-0.5 bg-gradient-to-b from-blue-100 to-transparent" />
          )}
        </div>

        <div className="flex-1">
          <h3 className="mb-1 text-sm font-semibold text-[#0A2540]">{title}</h3>
          {children && (
            <div className="text-xs text-[#425466] leading-relaxed">
              {children}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function BillingModule() {
  const [isVisible, setIsVisible] = useState(false);
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
    {
      client: "Nexus Digital Systems",
      inv: "INV-2025-9930",
      sub: "12,400.00",
      vat: "2,480.00",
      total: "14,880.00",
      country: "France",
      taxInfo: "TVA (FR 20%)",
      lineItems: [
        {
          description: "Custom Development (hours)",
          quantity: "80",
          rate: "100.00",
          amount: "8,000.00",
        },
        {
          description: "Priority Support (6 months)",
          quantity: "6",
          rate: "400.00",
          amount: "2,400.00",
        },
        {
          description: "Data Migration",
          quantity: "1",
          rate: "2,000.00",
          amount: "2,000.00",
        },
      ],
    },
    {
      client: "Orion Logistics",
      inv: "INV-2025-2210",
      sub: "9,750.00",
      vat: "1,950.00",
      total: "11,700.00",
      country: "Netherlands",
      taxInfo: "BTW (NL 20%)",
      lineItems: [
        {
          description: "Fleet Management Module",
          quantity: "1",
          rate: "6,000.00",
          amount: "6,000.00",
        },
        {
          description: "Real-time Tracking Add-on",
          quantity: "1",
          rate: "2,750.00",
          amount: "2,750.00",
        },
        {
          description: "Support & Maintenance",
          quantity: "12",
          rate: "166.67",
          amount: "2,000.00",
        },
      ],
    },
    {
      client: "Helix Finance",
      inv: "INV-2025-7782",
      sub: "6,300.00",
      vat: "1,260.00",
      total: "7,560.00",
      country: "Spain",
      taxInfo: "IVA (ES 20%)",
      lineItems: [
        {
          description: "Compliance Module",
          quantity: "1",
          rate: "3,000.00",
          amount: "3,000.00",
        },
        {
          description: "Reporting Suite",
          quantity: "1",
          rate: "2,000.00",
          amount: "2,000.00",
        },
        {
          description: "Consulting (10 hrs)",
          quantity: "10",
          rate: "130.00",
          amount: "1,300.00",
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

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-blue-100 py-20 md:py-24 overflow-hidden isolate gradient-bg"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
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

      <div className="pointer-events-none absolute left-1/4 top-1/4">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-64 w-64 rounded-full bg-gradient-to-r from-blue-200/20 to-sky-200/20 blur-3xl"
        />
      </div>

      <div className="pointer-events-none absolute right-1/4 bottom-1/4">
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-80 w-80 rounded-full bg-gradient-to-r from-sky-200/20 to-blue-200/20 blur-3xl"
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 overflow-hidden">
        <motion.div
          animate={{ y: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="space-y-4"
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"
            />
          ))}
        </motion.div>
      </div>
      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-gradient-to-r from-[#0F1615]/10 via-white/80 to-blue-50/60 backdrop-blur-sm px-3 py-1 shadow-sm"
          >
            <div className="flex h-2 w-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#0B43A0]" />
            <span className="text-xs font-medium tracking-wide text-[#0A2540]">
              Intelligent Billing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-4 text-3xl font-bold text-[#0A2540]"
          >
            AI-Powered Billing & Invoicing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 text-lg leading-relaxed text-[#425466]"
          >
            Smart billing designed for international businesses. Generate
            compliant invoices automatically with built-in tax intelligence for
            every country you operate in.
          </motion.p>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <FeatureBlock key={index} title={feature.title} index={index}>
                {feature.description}
              </FeatureBlock>
            ))}
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
