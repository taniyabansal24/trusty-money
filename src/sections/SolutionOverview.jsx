import { BillingModule } from "../sections/SolutionOverview/BillingModule";
import { ComplianceModule } from "../sections/SolutionOverview/ComplianceModule";
import { PaymentsModule } from "../sections/SolutionOverview/PaymentsModule";
import { TreasuryModule } from "../sections/SolutionOverview/TreasuryModule";
import { ReportingModule } from "../sections/SolutionOverview/ReportingModule";
import { RandomGlobe } from "../components/layout/randomglobe";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";

export function SolutionOverview() {
  return (
    <section className="relative w-full overflow-visible bg-white">
      {/* Hero Section */}
      <div className="relative w-full min-h-[90vh] lg:min-h-screen overflow-visible">
        {/* Background gradients - simplified */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/20" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        {/* CONTENT + GLOBE LAYOUT */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 overflow-visible">
          
          {/* Global Solution Heading - Centered above both columns */}
          <div className="flex justify-center mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#0B43A0]" />
              <span className="text-sm font-medium uppercase tracking-wide text-[#0B43A0]">
                Global Solution
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center overflow-visible">
            {/* LEFT — TEXT CONTENT */}
            <div className="">
              <div>
                <motion.h1
                  variants={staggerItem}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-[3.5rem] 2xl:text-7xl font-bold tracking-tight text-gray-900"
                >
                  Rebuilding Financial Infrastructure for{" "}
                  <span className="gradient-text relative">
                    Global Commerce
                  </span>
                </motion.h1>
              </div>

              <div className="max-w-xl">
                <p className="text-lg text-[#425466] leading-relaxed lg:text-xl lg:leading-relaxed">
                  Trusty Money is not just a payment gateway. It&apos;s a{" "}
                  <span className="font-semibold text-[#0B43A0]">
                    global financial operating system
                  </span>{" "}
                  for cross-border commerce, supporting billing, compliance,
                  payments, and settlement across connected markets.
                </p>
              </div>

              {/* Stats badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2.5 border border-slate-200 shadow-sm">
                  <div className="h-2 w-2 animate-ping rounded-full bg-[#0B43A0]" />
                  <span className="text-sm font-medium text-[#0A2540]">
                    Connected across 180+ countries
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — GLOBE VISUALIZATION */}
            <div className="relative overflow-visible">
              {/* Container for proper positioning */}
              <div className="relative w-[110%] h-[500px] lg:h-[600px] xl:h-[650px] overflow-visible">
                {/* Concentric rings that properly wrap the globe */}
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                  <div className="relative w-full max-w-[500px] h-full max-h-[500px] lg:max-w-[600px] lg:max-h-[600px] xl:max-w-[700px] xl:max-h-[700px]">
                    {/* Outer ring - largest */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full border border-blue-200/20" />

                    {/* Middle ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[102%] h-[102%] rounded-full border border-blue-300/30" />

                    {/* Inner ring - closest to globe */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100.5%] h-[100.5%] rounded-full border border-cyan-300/40 animate-pulse" />

                    {/* Animated connection dots */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                        style={{
                          top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                          left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                          animationDelay: `${i * 0.3}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Globe Container - Your exact code */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="flex flex-col w-full overflow-visible">
                    <div className="relative w-full h-[73vh] overflow-visible">
                      <div className="flex absolute w-[100%] h-[135%] top-[-18%] inset-x-0 -bottom-10/12 justify-center mask-globe">
                        <RandomGlobe />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Modules (untouched) */}
      <div className="relative z-10 bg-white">
        <BillingModule />
        <ComplianceModule />
        <PaymentsModule />
        <TreasuryModule />
        <ReportingModule />
      </div>

      {/* Bottom spacing */}
      <div className="h-20" />
    </section>
  );
}