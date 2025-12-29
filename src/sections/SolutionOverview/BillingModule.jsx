import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Container } from "../../components/ui";

// 3D Particle System
export function ParticleBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    
    // Draw currency symbols
    const drawCurrency = (x, y, size) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.PI / 4);
      
      // Dollar sign
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      ctx.moveTo(-size * 0.6, 0);
      ctx.lineTo(size * 0.6, 0);
      ctx.moveTo(-size * 0.3, -size * 0.5);
      ctx.lineTo(-size * 0.3, size * 0.5);
      ctx.stroke();
      
      ctx.restore();
    };
    
    // Draw euro symbol
    const drawEuro = (x, y, size) => {
      ctx.save();
      ctx.translate(x, y);
      
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.6, -Math.PI * 0.8, Math.PI * 0.8);
      ctx.moveTo(size * 0.6, -size * 0.4);
      ctx.lineTo(0, -size * 0.4);
      ctx.moveTo(size * 0.6, size * 0.4);
      ctx.lineTo(0, size * 0.4);
      ctx.stroke();
      
      ctx.restore();
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle grid
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// Enhanced Feature Block with 3D effect
function FeatureBlock({ title, children, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-4 hover:border-emerald-200 hover:bg-white/90 transition-all duration-300 overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Hover radial glow (same feel as first block) */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        animate={{
          background: isHovered
            ? `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(16,185,129,0.12), transparent 60%)`
            : "transparent",
        }}
      />

      {/* Subtle inner border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? "inset 0 0 0 1px rgba(16,185,129,0.35)"
            : "inset 0 0 0 1px transparent",
        }}
      />

      <div className="relative flex items-start gap-4">
        {/* Animated 3D icon */}
        <motion.div
          animate={isHovered ? { 
            rotateY: 360,
            scale: 1.1 
          } : { 
            rotateY: 0,
            scale: 1 
          }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          className="relative flex-shrink-0"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-green-500/20">
  <div className="absolute inset-1 rounded-lg bg-gradient-to-br  from-blue-500 to-blue-700 shadow-inner" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </motion.svg>
            </div>
          </div>
          
          {/* Animated connecting line with gradient */}
          {index < 2 && (
            <motion.div
              initial={{ scaleY: 0, transformOrigin: "top" }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              className="absolute left-5 top-10 h-6 w-0.5"
            >
              <div className="h-full w-full bg-gradient-to-b from-blue-200  to-transparent" />
            </motion.div>
          )}
        </motion.div>
        
        <div className="flex-1 space-y-2">
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
            {title}
          </h3>
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.p
                key="expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-slate-600 overflow-hidden"
              >
                {children}
              </motion.p>
            ) : (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                className="h-4 bg-gradient-to-r from-blue-100/50 to-transparent rounded"
              />
            )}
          </AnimatePresence>
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

  const lineItems = [
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
  ];

  const features = [
    {
      title: "Smart Invoice Generation",
      description: "Automatically create compliant invoices with tax calculations for 180+ countries."
    },
    {
      title: "Flexible Billing Models",
      description: "Support usage-based, subscription, and milestone billing with automated tracking."
    },
    {
      title: "Embedded Automation",
      description: "Automated reminders, dunning management, and seamless ERP integration."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-blue-100 bg-gradient-to-br from-sky-50/50 via-white to-blue-50/30 py-20 md:py-24 overflow-hidden"
    >
      {/* 3D Particle Background */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      
      {/* Enhanced floating elements with 3D effect */}
      <div className="pointer-events-none absolute left-1/4 top-1/4">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="h-64 w-64 rounded-full bg-gradient-to-r from-blue-200/20 to-sky-200/20 blur-3xl"
        />
      </div>
      
      <div className="pointer-events-none absolute right-1/4 bottom-1/4">
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="h-80 w-80 rounded-full bg-gradient-to-r from-sky-200/20 to-blue-200/20 blur-3xl"
        />
      </div>
      
      {/* Animated data streams */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 overflow-hidden">
        <motion.div
          animate={{ y: ['0%', '-100%'] }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="space-y-4"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
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
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-white/80 backdrop-blur-sm px-3 py-1 shadow-sm"
          >
            <div className="flex h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500" />
            <span className="text-xs font-medium tracking-wide text-blue-700">
              01 • Intelligent Billing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-4 text-3xl font-bold text-slate-900"
          >
            AI-Powered Billing & Invoicing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 text-lg leading-relaxed text-slate-600"
          >
            Smart billing designed for international businesses. Generate
            compliant invoices automatically with built-in tax intelligence for
            every country you operate in.
          </motion.p>

          {/* Feature Blocks with 3D effect */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <FeatureBlock 
                key={index} 
                title={feature.title}
                index={index}
              >
                {feature.description}
              </FeatureBlock>
            ))}
          </div>
        </div>

        {/* Visual - Professional Invoice with 3D effect */}
        <motion.div 
          style={{ y, rotateX }} 
          className="relative perspective-1000"
        >
          {/* Floating currency badges */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotateY: [0, 180, 360]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-4 -right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg"
          >
            <span className="text-lg font-bold text-white">$</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: 10 }}
            animate={isVisible ? { 
              opacity: 1, 
              y: 0,
              rotateY: 0 
            } : {}}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              rotateY: { duration: 1 }
            }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transform-style-3d"
          >
            {/* Invoice glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-sky-50/50" />
            
            {/* Animated progress bar */}
            <motion.div
              initial={{ width: '0%' }}
              animate={isVisible ? { width: '85%' } : {}}
              transition={{ delay: 1, duration: 1.5 }}
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-sky-500"
            />
            
            {/* Invoice Header - Company Details */}
            <div className="relative border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="mb-1 text-xs uppercase tracking-wider text-slate-500">
                    From
                  </div>
                  <div className="mb-1 text-slate-900">
                    RougeCodes Pvt. Ltd.
                  </div>
                  <div className="text-xs text-slate-600">
                    B-47, Janakpuri West
                    <br />
                    New Delhi 110058, India
                    <br />
                    GSTIN: 07AABCU9603R1ZM
                  </div>
                </div>
                <div className="text-right">
                  <div className="mb-2 text-2xl font-bold text-slate-900">INVOICE</div>
                  <div className="text-xs text-slate-600">
                    <div className="mb-1">
                      <span className="text-slate-500">Invoice #:</span>{" "}
                      INV-2025-1247
                    </div>
                    <div className="mb-1">
                      <span className="text-slate-500">Date:</span> January 15,
                      2025
                    </div>
                    <div>
                      <span className="text-slate-500">Due:</span> February 14,
                      2025
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4"
              >
                <div className="mb-1 text-xs uppercase tracking-wider text-blue-600">
                  Bill To
                </div>
                <div className="mb-1 text-slate-900">Acme Corporation Ltd</div>
                <div className="text-xs text-slate-700">
                  25 Old Broad Street
                  <br />
                  London EC2N 1HN, United Kingdom
                  <br />
                  VAT: GB987654321
                </div>
              </motion.div>
            </div>

            {/* Line Items Table */}
            <div className="relative p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-600">
                    <th className="pb-3 text-left">Description</th>
                    <th className="pb-3 text-right">Qty</th>
                    <th className="pb-3 text-right">Rate</th>
                    <th className="pb-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.map((item, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                      className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors duration-200"
                    >
                      <td className="py-3 text-slate-800">
                        {item.description}
                      </td>
                      <td className="py-3 text-right text-slate-600">
                        {item.quantity}
                      </td>
                      <td className="py-3 text-right text-slate-600">
                        ${item.rate}
                      </td>
                      <td className="py-3 text-right font-medium text-slate-900">
                        ${item.amount}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>

              {/* Totals */}
              <div className="mt-6 flex justify-end">
                <div className="w-64 space-y-2 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>$24,800.00</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="flex items-center gap-2">
                      VAT (UK 20%)
                      <motion.span
                        animate={{ 
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            '0 0 0 0 rgba(59, 130, 246, 0)',
                            '0 0 0 10px rgba(59, 130, 246, 0.1)',
                            '0 0 0 0 rgba(59, 130, 246, 0)'
                          ]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                        className="rounded bg-gradient-to-r from-blue-100 to-blue-200 px-1.5 py-0.5 text-xs text-blue-700"
                      >
                        Auto-calc
                      </motion.span>
                    </span>
                    <span>$4,960.00</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2 text-base text-slate-900">
                    <span>Total Due</span>
                    <motion.span
                      animate={isVisible ? { 
                        scale: [1, 1.05, 1],
                        textShadow: [
                          '0 0 0 rgba(59, 130, 246, 0)',
                          '0 0 10px rgba(59, 130, 246, 0.3)',
                          '0 0 0 rgba(59, 130, 246, 0)'
                        ]
                      } : {}}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: 1
                      }}
                      className="text-xl font-bold"
                    >
                      $29,760.00
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-100 bg-gradient-to-r from-slate-50 to-white px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-600">
                  Payment due by February 14, 2025
                </div>
                <motion.div
                  animate={{ 
                    backgroundColor: [
                      'rgb(219, 234, 254)',
                      'rgb(191, 219, 254)',
                      'rgb(219, 234, 254)'
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity
                  }}
                  className="rounded-full px-3 py-1 text-xs font-medium text-blue-700"
                >
                  PENDING
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* AI Badge with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-4 overflow-hidden rounded-xl border border-blue-200/50 bg-gradient-to-r from-blue-50/80 to-white backdrop-blur-sm p-3 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-500 shadow-sm"
              >
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-600 to-sky-600 shadow-inner" />
                <svg
                  className="relative h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </motion.div>
              <div>
                <div className="text-sm font-medium text-slate-900">
                  AI-powered tax calculation
                </div>
                <div className="text-xs text-slate-600">
                  Automatically applied UK VAT (20%)
                </div>
              </div>
            </div>
            
            {/* Data flow animation */}
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: '100%' } : {}}
              transition={{ delay: 1, duration: 1.5 }}
              className="mt-2 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0"
            />
          </motion.div>

          {/* Processing Notification with pulse effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="mt-3 overflow-hidden rounded-xl border border-slate-200/50 bg-white/80 backdrop-blur-sm p-3 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity
                  }}
                  className="absolute inset-0 rounded-full bg-blue-100"
                />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                  <svg
                    className="h-4 w-4 text-slate-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-900">
                  Auto-send reminder scheduled
                </div>
                <div className="text-xs text-slate-600">
                  February 7, 2025 • 7 days before due date
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}