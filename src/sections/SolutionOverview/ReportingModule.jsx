import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from '../../components/ui';

// Reusable feature block with custom bullets - matching other modules
function FeatureBlock({ title, children, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index }}
      className="group relative rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-4 hover:border-indigo-200 hover:bg-white/90 transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        {/* Custom bullet - matching style but in indigo */}
        <div className="relative flex-shrink-0">
          <div className="flex h-6 w-6 items-center justify-center">
            <div className="absolute h-4 w-4 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-300" />
            <div className="absolute h-2 w-2 rounded-full bg-indigo-600 group-hover:bg-indigo-700 transition-colors duration-300" />
          </div>
          {/* Connecting line for visual flow */}
          {index < 2 && (
            <div className="absolute left-3 top-6 h-4 w-0.5 bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-300" />
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors duration-300">
            {title}
          </h3>
          {children && (
            <div className="text-xs text-slate-600">{children}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ReportingModule() {
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

  const features = [
  {
    title: "Real-Time Transaction Tracking",
    description: "Track invoices and payments in real time across all supported currencies."
  },
  {
    title: "Automated Reconciliation",
    description: "Automatically match payments to invoices across banks and payment rails."
  },
  {
    title: "Finance-Ready Reports",
    description: "Generate standardized reports ready for accounting and finance teams."
  }
];


  const transactions = [
    { 
      id: 'TXN-8472', 
      company: 'Acme Corp Ltd', 
      invoice: 'INV-0847',
      amount: '$29,700.00', 
      currency: 'GBP', 
      status: 'Reconciled', 
      date: 'Dec 18, 2024',
      method: 'Wire'
    },
    { 
      id: 'TXN-8471', 
      company: 'Global Tech Inc', 
      invoice: 'INV-0846',
      amount: '$45,250.00', 
      currency: 'USD', 
      status: 'Reconciled', 
      date: 'Dec 18, 2024',
      method: 'ACH'
    },
    { 
      id: 'TXN-8470', 
      company: 'Nexus Solutions', 
      invoice: 'INV-0845',
      amount: '€18,900.00', 
      currency: 'EUR', 
      status: 'Pending', 
      date: 'Dec 17, 2024',
      method: 'SEPA'
    },
  ];

  return (
    <div 
      ref={sectionRef} 
      className="border-t border-indigo-100 bg-gradient-to-br from-indigo-50/30 via-white to-violet-50/20 py-20 md:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div className="order-1 lg:order-2">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200/50 bg-white/50 backdrop-blur-sm px-3 py-1">
            <span className="text-xs font-medium tracking-wide text-indigo-700">
              05 • Financial Intelligence
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Reporting & Reconciliation
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Unified visibility across billing, payments, and cash flows. Eliminate manual reconciliation with automated matching, real-time reporting, and finance-ready exports.
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

        {/* Visual - Transaction Table */}
          <motion.div style={{ y }} className="relative">
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 to-violet-200">
                      <svg className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500">Analytics & Reports</div>
                      <div className="text-xl text-slate-900">Transaction Overview</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs text-emerald-700">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
                    Live sync
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs text-slate-500">Today</div>
                    <div className="text-xl text-slate-900">147</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Reconciled</div>
                    <div className="text-xl text-emerald-600">99.8%</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Volume</div>
                    <div className="text-xl text-slate-900">$2.4M</div>
                  </div>
                </div>
              </div>

              {/* Transaction Table */}
              <div className="p-6">
                <div className="mb-4 text-sm text-slate-900">Recent Transactions</div>
                
                <div className="overflow-hidden rounded-lg border border-slate-200">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-50">
                      <tr className="border-b border-slate-200">
                        <th className="px-3 py-2 text-left uppercase tracking-wider text-slate-600">Transaction</th>
                        <th className="px-3 py-2 text-left uppercase tracking-wider text-slate-600">Company</th>
                        <th className="px-3 py-2 text-right uppercase tracking-wider text-slate-600">Amount</th>
                        <th className="px-3 py-2 text-right uppercase tracking-wider text-slate-600">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {transactions.map((txn, idx) => (
                        <motion.tr
                          key={txn.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                          className="border-b border-slate-100 transition-colors hover:bg-slate-50"
                        >
                          <td className="px-3 py-3">
                            <div className="text-slate-900">{txn.id}</div>
                            <div className="text-slate-500">{txn.date} • {txn.method}</div>
                          </td>
                          <td className="px-3 py-3">
                            <div className="text-slate-900">{txn.company}</div>
                            <div className="text-slate-500">{txn.invoice}</div>
                          </td>
                          <td className="px-3 py-3 text-right">
                            <div className="text-slate-900">{txn.amount}</div>
                            <div className="text-slate-500">{txn.currency}</div>
                          </td>
                          <td className="px-3 py-3 text-right">
                            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${
                              txn.status === 'Reconciled' 
                                ? 'bg-emerald-100 text-emerald-700' 
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              <div className={`h-1 w-1 rounded-full ${
                                txn.status === 'Reconciled' ? 'bg-emerald-500' : 'bg-yellow-500'
                              }`}></div>
                              {txn.status}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-2">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 transition-all hover:bg-slate-50">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Filter
                  </button>
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm text-white transition-all hover:bg-slate-800">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export CSV
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Reconciliation Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-900">Auto-reconciliation active</div>
                  <div className="text-xs text-slate-600">145 of 147 transactions matched automatically</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
      </Container>
    </div>
  );
}