import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Container } from '../../components/ui';
import { FeatureBlock } from "../../sections/SolutionOverview/BillingModule";

export function TreasuryModule() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Added Logic: Data Index Toggling
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
      title: "Real-Time Fund Visibility",
      description: "Monitor incoming international payments in real time across all supported currencies."
    },
    {
      title: "Smart FX Controls",
      description: "Manage exchange rates with automated conversions and built-in currency risk controls."
    },
    {
      title: "Automated Collections",
      description: "Improve cash flow using automated payment reminders and smart reconciliation tools."
    }
  ];

  // Added Logic: Two datasets for the graph to animate between
  const chartDataSets = [
    [
      { month: 'Jan', value: 2100000 }, { month: 'Feb', value: 2400000 },
      { month: 'Mar', value: 2200000 }, { month: 'Apr', value: 2700000 },
      { month: 'May', value: 2500000 }, { month: 'Jun', value: 2900000 },
    ],
    [
      { month: 'Jan', value: 1900000 }, { month: 'Feb', value: 2100000 },
      { month: 'Mar', value: 2500000 }, { month: 'Apr', value: 2300000 },
      { month: 'May', value: 2800000 }, { month: 'Jun', value: 3100000 },
    ]
  ];

  const chartData = chartDataSets[dataIndex];
  const maxValue = 3500000;

  return (
    <div 
      ref={sectionRef} 
      className="border-t border-blue-100 bg-gradient-to-br from-blue-50/30 via-white to-sky-50/20 py-20 md:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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
              Treasury Operations
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-4 text-3xl font-bold text-[#0A2540]"
          >
            Treasury & Working Capital Management
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 text-lg leading-relaxed text-[#425466]"
          >
            Operational treasury designed to free trapped working capital. Gain
            complete visibility into your international cash flows, optimize FX
            timing, and accelerate collections through intelligent automation.
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

        {/* Visual */}
        <motion.div style={{ y }} className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
          >
            {/* Dashboard Header */}
            <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white px-6 py-3">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Treasury Operations</div>
                    <div className="text-xl text-slate-900">Working Capital Dashboard</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Last updated</div>
                  <div className="text-xs text-slate-900">2 min ago</div>
                </div>
              </div>

              {/* Main Liquidity Display */}
              <div className="rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-xs uppercase tracking-wider text-slate-600">Available Liquidity</div>
                  <div className="flex items-center gap-1 text-xs text-emerald-600">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    +23.5% MoM
                  </div>
                </div>
                <div className="relative h-6 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={dataIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-xl text-slate-900"
                    >
                      {dataIndex === 0 ? "$2,847,250" : "$3,102,400"}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Cash Flow Chart */}
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-slate-900">Monthly Cash Flow Trend</div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <div className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-blue-500 to-blue-600"></div>
                    <span>Inflow</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-100 bg-gradient-to-br from-slate-50/50 to-white p-6">
                <div className="relative h-52">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-xs text-slate-500">
                    <span>$3M</span>
                    <span>$2.5M</span>
                    <span>$2M</span>
                    <span>$1.5M</span>
                    <span>$1M</span>
                  </div>

                  {/* Chart area */}
                  <div className="ml-12 h-full">
                    <svg className="h-full w-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                      {/* Original Horizontal grid lines */}
                      {[0, 1, 2, 3, 4].map((i) => (
                        <line
                          key={i}
                          x1="0"
                          y1={i * 50}
                          x2="600"
                          y2={i * 50}
                          stroke="#e2e8f0"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                        />
                      ))}

                      <defs>
                        <linearGradient id="treasuryAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                        </linearGradient>
                        <linearGradient id="treasuryLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="50%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>

                      {(() => {
                        const points = chartData.map((d, i) => {
                          const x = (i / (chartData.length - 1)) * 600;
                          const y = 200 - ((d.value / maxValue) * 180);
                          return { x, y };
                        });

                        const pathD = points.reduce((acc, point, i) => {
                          if (i === 0) return `M ${point.x},${point.y}`;
                          const prev = points[i - 1];
                          const cp1x = prev.x + (point.x - prev.x) / 2;
                          return `${acc} C ${cp1x},${prev.y} ${cp1x},${point.y} ${point.x},${point.y}`;
                        }, '');

                        const areaPathD = `${pathD} L 600,200 L 0,200 Z`;

                        return (
                          <>
                            {/* Area */}
                            <motion.path
                              animate={{ d: areaPathD }}
                              transition={{ duration: 0.8 }}
                              d={areaPathD}
                              fill="url(#treasuryAreaGradient)"
                            />

                            {/* Line with PathLength Animation */}
                            <motion.path
                              initial={{ pathLength: 0 }}
                              animate={isVisible ? { pathLength: 1, d: pathD } : { d: pathD }}
                              transition={{ 
                                pathLength: { duration: 1.5, delay: 0.3 },
                                d: { duration: 0.8 } 
                              }}
                              d={pathD}
                              fill="none"
                              stroke="url(#treasuryLineGradient)"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />

                            {/* Data points */}
                            {points.map((point, i) => (
                              <g key={i}>
                                <motion.circle
                                  animate={{ cx: point.x, cy: point.y }}
                                  transition={{ duration: 0.8 }}
                                  r="6"
                                  fill="white"
                                  stroke="#3b82f6"
                                  strokeWidth="2.5"
                                />
                                <motion.circle
                                  animate={{ cx: point.x, cy: point.y }}
                                  transition={{ duration: 0.8 }}
                                  r="3"
                                  fill="#3b82f6"
                                />
                              </g>
                            ))}
                          </>
                        );
                      })()}
                    </svg>
                  </div>
                </div>

                {/* X-axis labels */}
                <div className="ml-12 mt-2 flex justify-between text-xs text-slate-600">
                  {chartDataSets[0].map((d) => (
                    <span key={d.month}>{d.month}</span>
                  ))}
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: "DSO", val0: "28 days", val1: "24 days", sub: "↓ 12 days vs baseline", color: "emerald", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "Collection Rate", val0: "96.8%", val1: "98.2%", sub: "+4.2% this quarter", color: "emerald", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                  { label: "FX Savings YTD", val0: "$47K", val1: "$51K", sub: "vs market rates", color: "blue", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "Expected (48h)", val0: "$324K", val1: "$412K", sub: "12 transactions", color: "blue", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
                ].map((metric, i) => (
                  <div 
                    key={metric.label} 
                    className={`rounded-lg border border-slate-100 px-4 py-2 ${i === 3 ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-gradient-to-br from-slate-50 to-white'}`}
                  >
                    <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={metric.icon} />
                      </svg>
                      {metric.label}
                    </div>
                    {/* Sliding Data Wrapper */}
                    <div className="relative h-8 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={dataIndex}
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -15, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="text-xl text-slate-900"
                        >
                          {dataIndex === 0 ? metric.val0 : metric.val1}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <div className={`text-xs text-${metric.color}-600`}>{metric.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}