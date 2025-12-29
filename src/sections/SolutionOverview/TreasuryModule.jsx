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
      className="group relative rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-4 hover:border-blue-200 hover:bg-white/90 transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        {/* Custom bullet - matching style but in blue */}
        <div className="relative flex-shrink-0">
          <div className="flex h-6 w-6 items-center justify-center">
            <div className="absolute h-4 w-4 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300" />
            <div className="absolute h-2 w-2 rounded-full bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300" />
          </div>
          {/* Connecting line for visual flow */}
          {index < 2 && (
            <div className="absolute left-3 top-6 h-4 w-0.5 bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300" />
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
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

export function TreasuryModule() {
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


  const chartData = [
    { month: 'Jan', value: 2100000, display: '$2.1M' },
    { month: 'Feb', value: 2400000, display: '$2.4M' },
    { month: 'Mar', value: 2200000, display: '$2.2M' },
    { month: 'Apr', value: 2700000, display: '$2.7M' },
    { month: 'May', value: 2500000, display: '$2.5M' },
    { month: 'Jun', value: 2900000, display: '$2.9M' },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div 
      ref={sectionRef} 
      className="border-t border-blue-100 bg-gradient-to-br from-blue-50/30 via-white to-sky-50/20 py-20 md:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div className="order-1 lg:order-2">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-white/50 backdrop-blur-sm px-3 py-1">
            <span className="text-xs font-medium tracking-wide text-blue-700">
              04 • Treasury Operations
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Treasury & Working Capital Management
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Operational treasury designed to free trapped working capital. Gain complete visibility into your international cash flows, optimize FX timing, and accelerate collections through intelligent automation.
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-200">
                      <svg className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
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
                  <div className="text-4xl text-slate-900">$2,847,250</div>
                </div>
              </div>

              {/* Cash Flow Chart - More Professional */}
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
                  {/* Chart */}
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
                        {/* Horizontal grid lines */}
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

                        {/* Area gradient fill */}
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

                        {/* Calculate path points */}
                        {(() => {
                          const points = chartData.map((d, i) => {
                            const x = (i / (chartData.length - 1)) * 600;
                            const y = 200 - ((d.value / maxValue) * 180);
                            return { x, y, ...d };
                          });

                          const pathD = points.reduce((acc, point, i) => {
                            if (i === 0) return `M ${point.x},${point.y}`;
                            const prev = points[i - 1];
                            const cp1x = prev.x + (point.x - prev.x) / 2;
                            return `${acc} C ${cp1x},${prev.y} ${cp1x},${point.y} ${point.x},${point.y}`;
                          }, '');

                          const areaPathD = `${pathD} L ${points[points.length - 1].x},200 L ${points[0].x},200 Z`;

                          return (
                            <>
                              {/* Area */}
                              <motion.path
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : {}}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                d={areaPathD}
                                fill="url(#treasuryAreaGradient)"
                              />

                              {/* Line */}
                              <motion.path
                                initial={{ pathLength: 0 }}
                                animate={isVisible ? { pathLength: 1 } : {}}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
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
                                    initial={{ scale: 0 }}
                                    animate={isVisible ? { scale: 1 } : {}}
                                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                                    cx={point.x}
                                    cy={point.y}
                                    r="6"
                                    fill="white"
                                    stroke="#3b82f6"
                                    strokeWidth="2.5"
                                    className="cursor-pointer"
                                  />
                                  <motion.circle
                                    initial={{ scale: 0 }}
                                    animate={isVisible ? { scale: 1 } : {}}
                                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                                    cx={point.x}
                                    cy={point.y}
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
                    {chartData.map((d) => (
                      <span key={d.month}>{d.month}</span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      DSO
                    </div>
                    <div className="mb-1 text-2xl text-slate-900">28 days</div>
                    <div className="text-xs text-emerald-600">↓ 12 days vs baseline</div>
                  </div>

                  <div className="rounded-lg border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Collection Rate
                    </div>
                    <div className="mb-1 text-2xl text-slate-900">96.8%</div>
                    <div className="text-xs text-emerald-600">+4.2% this quarter</div>
                  </div>

                  <div className="rounded-lg border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      FX Savings YTD
                    </div>
                    <div className="mb-1 text-2xl text-slate-900">$47K</div>
                    <div className="text-xs text-blue-600">vs market rates</div>
                  </div>

                  <div className="rounded-lg border border-slate-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-xs text-slate-600">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Expected (48h)
                    </div>
                    <div className="mb-1 text-2xl text-slate-900">$324K</div>
                    <div className="text-xs text-blue-600">12 transactions</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
      </Container>
    </div>
  );
}