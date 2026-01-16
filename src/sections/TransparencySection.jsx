import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LiveConverter } from "../sections/TransparencySection/LiveConverter";
import { LiveRatesGrid } from "../sections/TransparencySection/LiveRatesGrid";
import { PricingTable } from "../sections/TransparencySection/PricingTable";
import { ComparisonSection } from "../sections/TransparencySection/ComparisonSection";
import { RateInfoCard } from "../sections/TransparencySection/RateInfoCard";
import { Container } from "../components/ui";

export function TransparencySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Container>
      <section className="max-w-[1400px] py-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-slate-500 uppercase tracking-[0.2em] mb-3">
            Institutional-Grade
          </h2>
          <h3 className="text-slate-900 mb-4">TRANSPARENCY</h3>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Real-time exchange rates, transparent fees, and complete pricing
            visibility. No hidden margins, no surprises—just honest
            infrastructure-grade foreign exchange.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Left Column */}
          <div className="space-y-6">
            <LiveConverter isInView={isInView} />
            <PricingTable isInView={isInView} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* <LiveRatesGrid isInView={isInView} /> */}
            <RateInfoCard isInView={isInView} />
          </div>
        </div>

        {/* Full Width Comparison Section */}
        <div className="mt-8">
          <ComparisonSection isInView={isInView} />
        </div>
      </section>
    </Container>
  );
}

{false && (
        <>
          {/* LEFT — Sequence Logo */}
          <div className="absolute left-[20%] top-1/2 -translate-y-1/2">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center">
              <Logo />
            </div>
          </div>

          {/* ANIMATED DOTTED LINE - More visible */}
          <div
            style={{
              mask: "linear-gradient(to right, transparent 15%, black 50%, transparent 85%)",
            }}
            className="absolute left-[30%] right-[45%] top-1/2 -translate-y-1/2"
          >
            {/* More visible dotted line */}
            <svg
              width="100%"
              viewBox="0 0 220 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H218"
                stroke="black"
                strokeOpacity="0.3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="2 4"
              />
            </svg>

            {/* More visible gradient overlay */}
            <span
              ref={gradientRef}
              id="sync-gradient"
              className="absolute left-1/2 top-0 block h-full w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              style={{
                opacity: 0, // Start with 0 opacity to prevent flash
                boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                willChange: "transform, opacity", // Optimize rendering
              }}
            />

            {/* Additional glow effect */}
            <span className="absolute left-1/2 top-0 block h-[3px] w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 blur-[2px]" />
          </div>
        </>
      )}
