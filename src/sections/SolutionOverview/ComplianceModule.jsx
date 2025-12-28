import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

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

  return (
    <div ref={sectionRef} className="border-t border-blue-100 bg-gradient-to-br from-sky-50/30 via-white to-blue-50/20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1">
              <span className="text-xs tracking-wide text-blue-600">02 • Compliance Engine</span>
            </div>
            
            <h2 className="mb-4 text-slate-900">
              Global Tax & Compliance Automation
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Global compliance handled automatically. Stay compliant across every jurisdiction with real-time tax calculations, regulatory monitoring, and built-in security protocols.
            </p>

            {/* Feature Blocks - Text Reduced */}
            <div className="space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                    <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-slate-900">Intelligent Tax Logic</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Automatically apply correct tax rates for 180+ jurisdictions with real-time updates.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                    <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-slate-900">Compliance Documentation</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Generate audit-ready documentation with tax certificates and complete audit trails.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                    <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-slate-900">Security & Screening</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Real-time AML monitoring, sanctions screening, and KYC verification for all transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}