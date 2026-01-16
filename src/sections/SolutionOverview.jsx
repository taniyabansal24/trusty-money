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
    <section className="relative w-full overflow-hidden gradient-bg">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden gradient-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute inset-0 hero-grid opacity-50" aria-hidden="true" />
          <div className="absolute inset-0 hero-ambient opacity-70" aria-hidden="true" />
        </div>

        <div
          className="pointer-events-none absolute left-0 right-0 -top-8 h-24 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(245,248,255,0.55) 50%, rgba(245,248,255,1) 100%)",
            filter: "blur(8px)",
          }}
        />

        {/* CONTENT + GLOBE LAYOUT */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-16 lg:pb-24 overflow-visible">
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
            <div className="lg:-ml-6 xl:-ml-10">
              <div>
                <motion.h1
                  variants={staggerItem}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-[3.1rem] 2xl:text-7xl font-bold tracking-tight text-gray-900"
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

                <p className="mt-4 text-base text-[#425466] leading-relaxed lg:text-lg lg:leading-relaxed">
                  Unify your entire money stack in one platform—from invoicing
                  to reconciliation—with consistent controls, real-time
                  reporting, and predictable settlement timelines.
                </p>
              </div>

              <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                {["Multi-currency accounts", "Automated invoicing", "Built-in compliance", "Treasury visibility"].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-sm"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#0B43A0]" />
                    <span className="text-sm font-medium text-[#0A2540]">{label}</span>
                  </div>
                ))}
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
              <div className="relative w-full h-[360px] sm:h-[440px] md:h-[520px] lg:h-[700px] xl:h-[760px] overflow-visible">
                {/* Globe Container */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="w-full max-w-[360px] h-[360px] sm:max-w-[440px] sm:h-[440px] md:max-w-[520px] md:h-[520px] lg:max-w-none lg:w-[700px] lg:h-[700px] xl:w-[760px] xl:h-[760px]">
                    <RandomGlobe />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute left-0 right-0 bottom-0 h-28 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245,248,255,0.98) 0%, rgba(245,248,255,0.55) 45%, rgba(245,248,255,0) 100%)",
            filter: "blur(10px)",
          }}
        />
      </div>

      {/* Product Modules */}
      <div className="relative z-10 -mt-12 lg:-mt-16 pt-0">
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