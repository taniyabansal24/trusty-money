import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

export function BillingModule() {
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

  const lineItems = [
    { description: 'Enterprise Platform License', quantity: '1', rate: '18,500.00', amount: '18,500.00' },
    { description: 'API Integration Package', quantity: '1', rate: '4,200.00', amount: '4,200.00' },
    { description: 'Premium Support (Annual)', quantity: '12', rate: '175.00', amount: '2,100.00' },
  ];

  return (
    <div ref={sectionRef} className="border-t border-blue-100 bg-gradient-to-br from-white via-sky-50/30 to-blue-50/20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1">
              <span className="text-xs tracking-wide text-blue-600">01 • Intelligent Billing</span>
            </div>
            
            <h2 className="mb-4 text-slate-900">
              AI-Powered Billing & Invoicing
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Smart billing designed for international businesses. Generate compliant invoices automatically with built-in tax intelligence for every country you operate in.
            </p>

            {/* Feature Blocks - Text Reduced */}
            <div className="space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-slate-900 ">Smart Invoice Generation</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Automatically create compliant invoices with tax calculations for 180+ countries.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-slate-900">Flexible Billing Models</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Support usage-based, subscription, and milestone billing with automated tracking.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-slate-900">Embedded Automation</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Automated reminders, dunning management, and seamless ERP integration.
                </p>
              </div>
            </div>
          </div>

          {/* Visual - Professional Invoice */}
          <motion.div style={{ y }} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
            >
              {/* Invoice Header - Company Details */}
              <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <div className="mb-1 text-xs uppercase tracking-wider text-slate-500">From</div>
                    <div className="mb-1 text-slate-900">RougeCodes Pvt. Ltd.</div>
                    <div className="text-xs text-slate-600">
                      B-47, Janakpuri West<br />
                      New Delhi 110058, India<br />
                      GSTIN: 07AABCU9603R1ZM
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mb-2 text-2xl text-slate-900">INVOICE</div>
                    <div className="text-xs text-slate-600">
                      <div className="mb-1"><span className="text-slate-500">Invoice #:</span> INV-2025-1247</div>
                      <div className="mb-1"><span className="text-slate-500">Date:</span> January 15, 2025</div>
                      <div><span className="text-slate-500">Due:</span> February 14, 2025</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                  <div className="mb-1 text-xs uppercase tracking-wider text-blue-600">Bill To</div>
                  <div className="mb-1 text-slate-900">Acme Corporation Ltd</div>
                  <div className="text-xs text-slate-700">
                    25 Old Broad Street<br />
                    London EC2N 1HN, United Kingdom<br />
                    VAT: GB987654321
                  </div>
                </div>
              </div>

              {/* Line Items Table */}
              <div className="p-6">
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
                        className="border-b border-slate-100"
                      >
                        <td className="py-3 text-slate-800">{item.description}</td>
                        <td className="py-3 text-right text-slate-600">{item.quantity}</td>
                        <td className="py-3 text-right text-slate-600">${item.rate}</td>
                        <td className="py-3 text-right text-slate-900">${item.amount}</td>
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
                        <span className="rounded bg-blue-100 px-1.5 py-0.5 text-xs text-blue-700">Auto-calc</span>
                      </span>
                      <span>$4,960.00</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2 text-base text-slate-900">
                      <span>Total Due</span>
                      <span className="text-xl">$29,760.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-600">
                    Payment due by February 14, 2025
                  </div>
                  <div className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                    PENDING
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Badge - Moved Outside and Below Invoice */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-4 flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-900">AI-powered tax calculation</div>
                  <div className="text-xs text-slate-600">Automatically applied UK VAT (20%)</div>
                </div>
              </div>
            </motion.div>

            {/* Processing Notification */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="mt-3 rounded-lg border border-slate-200 bg-white p-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                  <svg className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-900">Auto-send reminder scheduled</div>
                  <div className="text-xs text-slate-600">February 7, 2025 • 7 days before due date</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}