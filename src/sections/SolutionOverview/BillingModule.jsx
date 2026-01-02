import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Container } from "../../components/ui";

// 3D Particle System with Fading Background
export function ParticleBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Function to create fading gradient overlay
    const drawFadeGradient = () => {
      const fadeHeight = 200; // Height of the fade effect in pixels
      
      // Create vertical gradient from white (top) to transparent (bottom)
      const gradient = ctx.createLinearGradient(0, 0, 0, fadeHeight);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Solid white at top
      gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)'); // 70% white
      gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.3)'); // 30% white
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Fully transparent
      
      // Draw the gradient overlay
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, fadeHeight);
      
      // Optional: Add a subtle horizontal gradient from sides to center for depth
      const horizontalFade = ctx.createLinearGradient(0, 0, canvas.width, 0);
      horizontalFade.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      horizontalFade.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
      horizontalFade.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
      
      ctx.fillStyle = horizontalFade;
      ctx.fillRect(0, 0, canvas.width, fadeHeight * 0.5);
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid with varying opacity for depth
      const gridSize = 60;
      
      // Draw vertical lines with opacity gradient
      for (let x = 0; x < canvas.width; x += gridSize) {
        // Calculate opacity based on position (lower opacity near top)
        const opacity = 0.05 + (x / canvas.width) * 0.05;
        ctx.strokeStyle = `rgba(11, 67, 160, ${opacity})`;
        ctx.lineWidth = 1;
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines with opacity gradient
      for (let y = 0; y < canvas.height; y += gridSize) {
        // Lines become more visible as they go down
        const opacity = 0.05 + (y / canvas.height) * 0.1;
        ctx.strokeStyle = `rgba(11, 67, 160, ${opacity})`;
        ctx.lineWidth = 1;
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw the white fade gradient at the top
      drawFadeGradient();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
    />
  );
}

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
      className="relative border-t border-blue-100 bg-gradient-to-br from-sky-50/50 via-white to-blue-50/30 py-20 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0">
        <ParticleBackground />
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
        <motion.div
          style={{ y, rotateX }}
          className="relative perspective-1000"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: 10 }}
            animate={
              isVisible
                ? {
                    opacity: 1,
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
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-sky-50/50" />

            <motion.div
              initial={{ width: "0%" }}
              animate={isVisible ? { width: "85%" } : {}}
              transition={{ delay: 1, duration: 1.5 }}
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#0B43A0]"
            />

            <div className="relative border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                    From
                  </div>
                  <div className="mb-1 text-[#0A2540]">
                    RougeCodes Pvt. Ltd.
                  </div>
                  <div className="text-xs text-[#425466]">
                    B-47, Janakpuri West
                    <br />
                    New Delhi 110058, India
                    <br />
                    GSTIN: 07AABCU9603R1ZM
                  </div>
                </div>
                <div className="text-right">
                  <div className="mb-2 text-2xl font-bold text-[#0A2540]">
                    INVOICE
                  </div>
                  <div className="text-xs text-[#425466]">
                    <div className="mb-1">
                      <span className="text-gray-500">Invoice #:</span>{" "}
                      {current.inv}
                    </div>
                    <div className="mb-1">
                      <span className="text-gray-500">Date:</span> January 15,
                      2025
                    </div>
                    <div>
                      <span className="text-gray-500">Due:</span> February 14,
                      2025
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                key={dataIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4"
              >
                <div className="mb-1 text-xs uppercase tracking-wider text-[#0B43A0]">
                  Bill To
                </div>
                <div className="mb-1 text-[#0A2540]">{current.client}</div>
                <div className="text-xs text-[#425466]">
                  {current.country}
                  <br />
                  {current.taxInfo}
                </div>
              </motion.div>
            </div>

            <div className="relative p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 text-xs uppercase tracking-wide text-[#425466]">
                    <th className="pb-3 text-left">Description</th>
                    <th className="pb-3 text-right">Qty</th>
                    <th className="pb-3 text-right">Rate</th>
                    <th className="pb-3 text-right">Amount</th>
                  </tr>
                </thead>
                <AnimatePresence mode="wait">
                  <motion.tbody key={dataIndex}>
                    {current.lineItems.map((item, idx) => (
                      <motion.tr
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors duration-200"
                      >
                        <td className="py-3 text-[#0A2540]">
                          {item.description}
                        </td>
                        <td className="py-3 text-right text-[#425466]">
                          {item.quantity}
                        </td>
                        <td className="py-3 text-right text-[#425466]">
                          ${item.rate}
                        </td>
                        <td className="py-3 text-right font-medium text-[#0A2540]">
                          ${item.amount}
                        </td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                </AnimatePresence>
              </table>

              <div className="mt-6 flex justify-end">
                <div className="w-64 space-y-2 text-sm">
                  <div className="flex justify-between text-[#425466]">
                    <span>Subtotal</span>
                    <motion.span key={`sub-${dataIndex}`}>
                      ${current.sub}
                    </motion.span>
                  </div>
                  <div className="flex justify-between text-[#425466]">
                    <span className="flex items-center gap-2">
                      {current.taxInfo}
                      <motion.span
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="rounded bg-gradient-to-r from-blue-100 to-blue-200 px-1.5 py-0.5 text-xs text-[#0B43A0]"
                      >
                        Auto-calc
                      </motion.span>
                    </span>
                    <motion.span key={`vat-${dataIndex}`}>
                      ${current.vat}
                    </motion.span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2 text-base text-[#0A2540]">
                    <span>Total Due</span>
                    <motion.span
                      key={`total-${dataIndex}`}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-xl font-bold"
                    >
                      ${current.total}
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white px-6 py-4">
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
            </div>
          </motion.div>

          {/* Optional decorative elements - uncomment if needed */}
          {/*
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="mt-4 overflow-hidden rounded-xl border border-blue-200/50 bg-gradient-to-r from-blue-50/80 to-white backdrop-blur-sm p-3 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3b82f6] to-[#0B43A0]"
              >
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#0B43A0] to-[#073f9e] shadow-inner" />
                <svg className="relative h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <div>
                <div className="text-sm font-medium text-[#0A2540]">AI-powered tax calculation</div>
                <div className="text-xs text-[#425466]">Automatically applied {current.taxInfo}</div>
              </div>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: '100%' } : {}}
              transition={{ delay: 1, duration: 1.5 }}
              className="mt-2 h-0.5 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6] to-[#3b82f6]/0"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="mt-3 overflow-hidden rounded-xl border border-gray-200/50 bg-white/80 backdrop-blur-sm p-3 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-blue-100"
                />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                  <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#0A2540]">Auto-send reminder scheduled</div>
                <div className="text-xs text-[#425466]">February 7, 2025 • 7 days before due date</div>
              </div>
            </div>
          </motion.div>
          */}
        </motion.div>
      </Container>
    </section>
  );
}
