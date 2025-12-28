import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import { LiveConverter } from '../sections/TransparencySection/LiveConverter';
import { LiveRatesGrid } from '../sections/TransparencySection/LiveRatesGrid';
import { PricingTable } from '../sections/TransparencySection/PricingTable';
import { ComparisonSection } from '../sections/TransparencySection/ComparisonSection';
import { RateInfoCard } from '../sections/TransparencySection/RateInfoCard';

export function TransparencySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-slate-500 uppercase tracking-[0.2em] mb-3">Institutional-Grade</h2>
        <h3 className="text-slate-900 mb-4">TRANSPARENCY</h3>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Real-time exchange rates, transparent fees, and complete pricing visibility. 
          No hidden margins, no surprises—just honest infrastructure-grade foreign exchange.
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
          <LiveRatesGrid isInView={isInView} />
          <RateInfoCard isInView={isInView} />
        </div>
      </div>

      {/* Full Width Comparison Section */}
      <div className="mt-8">
        <ComparisonSection isInView={isInView} />
      </div>
    </section>
  );
}

