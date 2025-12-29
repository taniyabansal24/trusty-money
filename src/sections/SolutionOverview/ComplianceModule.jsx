import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Container } from '../../components/ui';
import { ParticleBackground } from '../../sections/SolutionOverview/BillingModule';

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
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 shadow-lg shadow-green-500/20">
  <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 shadow-inner" />
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
              <div className="h-full w-full bg-gradient-to-b from-green-400/50 to-transparent" />
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


export function ComplianceModule() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
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

  const regions = [
    { code: 'US', name: 'United States', tax: 'Sales Tax', rate: 'State-based', transactions: '2,847', compliance: 100 },
    { code: 'GB', name: 'United Kingdom', tax: 'VAT', rate: '20%', transactions: '1,923', compliance: 100 },
    { code: 'EU', name: 'European Union', tax: 'VAT', rate: '19-27%', transactions: '4,152', compliance: 100 },
    { code: 'CA', name: 'Canada', tax: 'GST/HST', rate: '5-15%', transactions: '892', compliance: 100 },
  ];

  const checks = [
    { name: 'AML Screening', status: 'Pass', time: 'Real-time' },
    { name: 'Sanctions Check', status: 'Pass', time: 'Real-time' },
    { name: 'KYC Verification', status: 'Pass', time: 'Updated 2h ago' },
  ];

  const features = [
    {
      title: "Intelligent Tax Logic",
      description: "Automatically apply correct tax rates for 180+ jurisdictions with real-time updates."
    },
    {
      title: "Compliance Documentation",
      description: "Generate audit-ready documentation with tax certificates and complete audit trails."
    },
    {
      title: "Security & Screening",
      description: "Real-time AML monitoring, sanctions screening, and KYC verification for all transactions."
    }
  ];

  return (
    <div 
      ref={sectionRef} 
      className="border-t border-emerald-100 bg-gradient-to-br from-emerald-50/30 via-white to-green-50/20 py-20 md:py-24"
    >
      {/* 3D Particle Background */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div className="order-1 lg:order-2">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/50 bg-white/50 backdrop-blur-sm px-3 py-1">
            <span className="text-xs font-medium tracking-wide text-emerald-700">
              02 • Compliance Engine
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Global Tax & Compliance Automation
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Global compliance handled automatically. Stay compliant across every jurisdiction with real-time tax calculations, regulatory monitoring, and built-in security protocols.
          </p>

          {/* Feature Blocks with Custom Bullets */}
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

        {/* Visual */}
          <motion.div style={{ y }} className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
            >
              {/* Dashboard Header */}
              <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-200">
                      <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500">Compliance Monitor</div>
                      <div className="text-xl text-slate-900">Global Tax & Regulations</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs text-emerald-700">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
                    Live Monitoring
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg border border-slate-100 bg-white p-3">
                    <div className="mb-1 text-xs text-slate-500">Regions</div>
                    <div className="text-2xl text-slate-900">180+</div>
                  </div>
                  <div className="rounded-lg border border-slate-100 bg-white p-3">
                    <div className="mb-1 text-xs text-slate-500">Compliance Rate</div>
                    <div className="text-2xl text-emerald-600">100%</div>
                  </div>
                  <div className="rounded-lg border border-slate-100 bg-white p-3">
                    <div className="mb-1 text-xs text-slate-500">Auto-checks</div>
                    <div className="text-2xl text-slate-900">24/7</div>
                  </div>
                </div>
              </div>

              {/* Active Regions */}
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm text-slate-900">Active Tax Jurisdictions</div>
                  <div className="text-xs text-slate-500">{regions.length} of 180+ regions</div>
                </div>
                
                <div className="space-y-2">
                  {regions.map((region, idx) => (
                    <motion.div
                      key={region.code}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                      className="group relative overflow-hidden rounded-lg border border-slate-100 bg-slate-50 p-4 transition-all hover:border-slate-200 hover:bg-white hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg shadow-sm">
                            {region.code === 'US' && '🇺🇸'}
                            {region.code === 'GB' && '🇬🇧'}
                            {region.code === 'EU' && '🇪🇺'}
                            {region.code === 'CA' && '🇨🇦'}
                          </div>
                          <div>
                            <div className="mb-1 text-sm text-slate-900">{region.name}</div>
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                              <span>{region.tax}</span>
                              <span className="text-slate-400">•</span>
                              <span>{region.rate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="mb-1 text-xs text-slate-500">Transactions</div>
                          <div className="text-sm text-slate-900">{region.transactions}</div>
                          <div className="mt-1 flex items-center justify-end gap-1 text-xs text-emerald-600">
                            <div className="h-1 w-1 rounded-full bg-emerald-500"></div>
                            {region.compliance}% compliant
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Security Checks */}
                <div className="mt-6 rounded-lg border border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                  <div className="mb-3 text-xs uppercase tracking-wider text-slate-700">Security Checks</div>
                  <div className="space-y-2">
                    {checks.map((check, idx) => (
                      <motion.div
                        key={check.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + idx * 0.1, duration: 0.3 }}
                        className="flex items-center justify-between rounded-md bg-white px-3 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                            <svg className="h-3 w-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-xs text-slate-900">{check.name}</span>
                        </div>
                        <div className="text-xs text-slate-500">{check.time}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
      </Container>
    </div>
  );
}
