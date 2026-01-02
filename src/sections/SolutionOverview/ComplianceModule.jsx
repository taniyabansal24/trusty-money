import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Container } from '../../components/ui';
import { ParticleBackground } from '../../sections/SolutionOverview/BillingModule';
import { FeatureBlock } from "../../sections/SolutionOverview/BillingModule";

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
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const regionsSets = [
    [
      { code: 'US', name: 'United States', tax: 'Sales Tax', rate: 'State-based', transactions: '2,847', compliance: 100 },
      { code: 'GB', name: 'United Kingdom', tax: 'VAT', rate: '20%', transactions: '1,923', compliance: 100 },
      { code: 'EU', name: 'European Union', tax: 'VAT', rate: '19-27%', transactions: '4,152', compliance: 100 },
      { code: 'CA', name: 'Canada', tax: 'GST/HST', rate: '5-15%', transactions: '892', compliance: 100 },
    ],
    [
      { code: 'US', name: 'United States', tax: 'Sales Tax', rate: 'State-based', transactions: '3,102', compliance: 100 },
      { code: 'GB', name: 'United Kingdom', tax: 'VAT', rate: '20%', transactions: '2,145', compliance: 100 },
      { code: 'EU', name: 'European Union', tax: 'VAT', rate: '19-27%', transactions: '4,680', compliance: 100 },
      { code: 'CA', name: 'Canada', tax: 'GST/HST', rate: '5-15%', transactions: '954', compliance: 100 },
    ]
  ];

  const regions = regionsSets[dataIndex];
  const checks = [
    { name: 'AML Screening', status: 'Pass', time: 'Real-time' },
    { name: 'Sanctions Check', status: 'Pass', time: 'Real-time' },
    { name: 'KYC Verification', status: 'Pass', time: 'Updated 2h ago' },
  ];

  const features = [   
    { title: "Intelligent Tax Logic", description: "Automatically apply correct tax rates for 180+ jurisdictions with real-time updates." },
    { title: "Compliance Documentation", description: "Generate audit-ready documentation with tax certificates and complete audit trails." },
    { title: "Security & Screening", description: "Real-time AML monitoring, sanctions screening, and KYC verification for all transactions." }
  ];

  return (
    <div ref={sectionRef} className="border-t border-emerald-100 bg-gradient-to-br from-emerald-50/30 via-white to-green-50/20 py-20 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <ParticleBackground />
      </div>
      
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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
            Global compliance handled automatically. Stay compliant across every jurisdiction with real-time tax calculations, regulatory monitoring, and built-in security protocols.
          </motion.p>

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

        {/* Visual Side - Dashboard */}
        <motion.div style={{ y }} className="relative order-2 lg:order-1">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
            <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Compliance Monitor</div>
                    <div className="text-xl text-slate-900">Global Tax & Regulations</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-xs text-[#0B43A0]">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-[#3b82f6]"></div>
                    Live Monitoring
                  </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg border border-slate-100 bg-white p-3">
                  <div className="mb-1 text-xs text-slate-500">Regions</div>
                  <div className="relative h-8 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div key={dataIndex} initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -15, opacity: 0 }} className="text-2xl text-slate-900">
                        {dataIndex === 0 ? "180+" : "184"}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                <div className="rounded-lg border border-slate-100 bg-white p-3">
                  <div className="mb-1 text-xs text-slate-500">Compliance Rate</div>
                  <div className="text-2xl text-[#0B43A0]">100%</div>
                </div>
                <div className="rounded-lg border border-slate-100 bg-white p-3">
                  <div className="mb-1 text-xs text-slate-500">Auto-checks</div>
                  <div className="text-2xl text-slate-900">24/7</div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-slate-900">Active Tax Jurisdictions</div>
                <div className="text-xs text-slate-500">{regions.length} regions</div>
              </div>
              
              <div className="space-y-2">
                {regions.map((region, idx) => (
                  <motion.div key={region.code} className="group relative overflow-hidden rounded-lg border border-slate-100 bg-slate-50 p-4 hover:bg-white hover:shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg shadow-sm">
                          {region.code === 'US' && '🇺🇸'}{region.code === 'GB' && '🇬🇧'}{region.code === 'EU' && '🇪🇺'}{region.code === 'CA' && '🇨🇦'}
                        </div>
                        <div>
                          <div className="mb-1 text-sm text-slate-900">{region.name}</div>
                          <div className="text-xs text-slate-600">{region.tax} • {region.rate}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="mb-1 text-xs text-slate-500">Transactions</div>
                        <div className="relative h-5 overflow-hidden">
                          <AnimatePresence mode="wait">
                            <motion.div key={dataIndex} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} className="text-sm text-slate-900">
                              {region.transactions}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                        <div className="mt-1 flex items-center justify-end gap-1 text-xs text-[#0B43A0]">
                            <div className="h-1 w-1 rounded-full bg-[#3b82f6]"></div>
                            {region.compliance}% compliant
                          </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Security Checks area - kept with its slight blue-ish background as it adds nice contrast, but updated svg icons to Emerald */}
              {/* <div className="mt-6 rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-emerald-50/30 p-4">
                <div className="mb-3 text-xs uppercase tracking-wider text-slate-700">Security Checks</div>
                <div className="space-y-2">
                  {checks.map((check, idx) => (
                    <motion.div key={check.name} className="flex items-center justify-between rounded-md bg-white px-3 py-2">
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
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}