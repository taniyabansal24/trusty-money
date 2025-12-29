import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Container } from "../../components/ui";

// Reusable feature block with custom bullets - matching BillingModule/ComplianceModule
function FeatureBlock({ title, children, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index }}
      className="group relative rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-4 hover:border-violet-200 hover:bg-white/90 transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        {/* Custom bullet - matching style but in violet */}
        <div className="relative flex-shrink-0">
          <div className="flex h-6 w-6 items-center justify-center">
            <div className="absolute h-4 w-4 rounded-full bg-violet-100 group-hover:bg-violet-200 transition-colors duration-300" />
            <div className="absolute h-2 w-2 rounded-full bg-violet-600 group-hover:bg-violet-700 transition-colors duration-300" />
          </div>
          {/* Connecting line for visual flow */}
          {index < 2 && (
            <div className="absolute left-3 top-6 h-4 w-0.5 bg-violet-100 group-hover:bg-violet-200 transition-colors duration-300" />
          )}
        </div>

        <div className="flex-1">
          <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-violet-700 transition-colors duration-300">
            {title}
          </h3>
          {children && <div className="text-xs text-slate-600">{children}</div>}
        </div>
      </div>
    </motion.div>
  );
}

export function PaymentsModule() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
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

  const accounts = [
    {
      currency: "INR",
      flag: "🇮🇳",
      balance: "20,47,850.00",
      iban: "IN74 HDFC 0000 1234 5678 9012",
      cardNumber: "4532 8392 1045 8920",
      expiry: "12/27",
      cvv: "***",
      holder: "ROUGECODES PVT LTD",
      bank: "BUSINESS",
      color: "#8ba888",
      isCustomColor: true,
      chipColor: "from-amber-300 via-yellow-200 to-amber-400",
    },
    {
      currency: "GBP",
      flag: "🇬🇧",
      balance: "192,340.50",
      iban: "GB29 NWBK 6016 1331 9268 19",
      cardNumber: "5425 2334 8756 3782",
      expiry: "09/28",
      cvv: "***",
      holder: "ACME CORPORATION LTD",
      bank: "BUSINESS",
      color: "from-sky-400 via-blue-400 to-cyan-400",
      isCustomColor: false,
      chipColor: "from-amber-300 via-yellow-200 to-amber-400",
    },
    {
      currency: "EUR",
      flag: "🇪🇺",
      balance: "328,920.75",
      iban: "DE89 3704 0044 0532 0130 00",
      cardNumber: "4916 7382 5641 5471",
      expiry: "03/29",
      cvv: "***",
      holder: "STELLAR TECH GMBH",
      bank: "BUSINESS",
      color: "from-purple-400 via-violet-400 to-fuchsia-400",
      isCustomColor: false,
      chipColor: "from-amber-300 via-yellow-200 to-amber-400",
    },
  ];

  const features = [
    {
      title: "Multi-Currency Accounts",
      description:
        "Hold and manage funds across 15+ currencies with local account details.",
    },
    {
      title: "Zero Markup FX",
      description:
        "Convert currencies at interbank rates with full transparency and no hidden fees.",
    },
    {
      title: "Universal Payment Rails",
      description:
        "Accept global bank transfers, cards, and local payment methods through one gateway.",
    },
  ];

  const handleCardClick = () => {
    setActiveCardIndex((prev) => (prev + 1) % accounts.length);
  };

  const activeCard = accounts[activeCardIndex];

  return (
    <div
      ref={sectionRef}
      className="border-t border-violet-100 bg-gradient-to-br from-violet-50/30 via-white to-purple-50/20 py-20 md:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div className="">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200/50 bg-white/50 backdrop-blur-sm px-3 py-1">
            <span className="text-xs font-medium tracking-wide text-violet-700">
              03 • Payment Infrastructure
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Payments and Collections
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Flexible payment infrastructure for global businesses. Accept
            payments worldwide with multi-currency accounts, transparent
            pricing, and seamless integration across all payment methods.
          </p>

          {/* Feature Blocks with Custom Bullets */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <FeatureBlock key={index} title={feature.title} index={index}>
                {feature.description}
              </FeatureBlock>
            ))}
          </div>
        </div>

        {/* Visual - Interactive Card */}
        <motion.div style={{ y }} className="relative">
          <div className="relative">
            {/* Main Card - Click to switch */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCardIndex}
                initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onClick={handleCardClick}
                className="relative cursor-pointer"
              >
                {/* Card Container with perspective */}
                <div
                  className="group relative"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl p-7 shadow-2xl transition-all duration-300 hover:shadow-3xl ${
                      !activeCard.isCustomColor
                        ? `bg-gradient-to-br ${activeCard.color}`
                        : ""
                    }`}
                    style={{
                      aspectRatio: "1.586/1",
                      boxShadow:
                        "0 20px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                      ...(activeCard.isCustomColor
                        ? {
                            background: `linear-gradient(135deg, ${activeCard.color} 0%, ${activeCard.color}ee 50%, ${activeCard.color}dd 100%)`,
                          }
                        : {}),
                    }}
                  >
                    {/* Holographic overlay effect */}
                    <div className="pointer-events-none absolute inset-0 opacity-30">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10"></div>
                    </div>

                    {/* Noise texture overlay */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                      }}
                    ></div>

                    {/* Card Content */}
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      {/* Top Section */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          {/* EMV Chip - More realistic */}
                          <div
                            className={`relative h-11 w-14 overflow-hidden rounded-md bg-gradient-to-br ${activeCard.chipColor} shadow-inner`}
                          >
                            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-[1px] p-1">
                              {[...Array(16)].map((_, i) => (
                                <div
                                  key={i}
                                  className="rounded-[1px] bg-gradient-to-br from-amber-600/40 to-yellow-700/40"
                                ></div>
                              ))}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
                          </div>

                          {/* Contactless Icon */}
                          <svg
                            className="h-7 w-7 text-white/60"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                            />
                          </svg>
                        </div>

                        <div className="text-right">
                          <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-white/70">
                            {activeCard.bank}
                          </div>
                          <div className="mb-2 text-[10px] uppercase tracking-wider text-white/50">
                            Virtual Account Card
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-3xl">{activeCard.flag}</span>
                            <span className="rounded-md bg-white/20 px-2 py-1 text-sm tracking-wide text-white backdrop-blur-sm">
                              {activeCard.currency}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Middle Section - Card Number */}
                      <div>
                        <div className="mb-2 font-mono text-2xl tracking-[0.3em] text-white drop-shadow-lg">
                          {activeCard.cardNumber}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-white/70">
                          {activeCard.iban}
                        </div>
                      </div>

                      {/* Bottom Section */}
                      <div className="flex items-end justify-between">
                        <div className="space-y-1">
                          <div className="text-[10px] uppercase tracking-widest text-white/60">
                            Cardholder Name
                          </div>
                          <div className="text-sm uppercase tracking-wide text-white">
                            {activeCard.holder}
                          </div>
                        </div>

                        <div className="flex items-end gap-6">
                          <div className="space-y-1 text-right">
                            <div className="text-[10px] uppercase tracking-widest text-white/60">
                              Valid Thru
                            </div>
                            <div className="font-mono text-sm tracking-wider text-white">
                              {activeCard.expiry}
                            </div>
                          </div>

                          <div className="space-y-1 text-right">
                            <div className="text-[10px] uppercase tracking-widest text-white/60">
                              CVV
                            </div>
                            <div className="font-mono text-sm tracking-wider text-white">
                              {activeCard.cvv}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card Network Logo - Bottom Right */}
                      <div className="absolute bottom-7 right-7">
                        <div className="flex items-center gap-[-8px]">
                          <div className="h-9 w-9 rounded-full bg-red-500/90 shadow-lg"></div>
                          <div className="-ml-3 h-9 w-9 rounded-full bg-orange-400/90 shadow-lg"></div>
                        </div>
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Balance Display Below Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`balance-${activeCardIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm text-slate-600">
                    Available Balance
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                    Active
                  </div>
                </div>
                <div className="text-3xl text-slate-900">
                  {activeCard.currency} {activeCard.balance}
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  Last transaction: 2 hours ago
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Card Indicators */}
            <div className="mt-4 flex justify-center gap-2">
              {accounts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeCardIndex
                      ? "w-8 bg-slate-900"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Click Hint */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.4 }}
                className="mt-4 text-center"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500 shadow-sm">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  Click card to switch currency
                </div>
              </motion.div> */}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
