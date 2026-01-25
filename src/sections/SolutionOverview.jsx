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
    <section className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden pb-16 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-xl opacity-30 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80  rounded-full blur-xl opacity-30 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute inset-0 hero-grid opacity-50"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hero-ambient opacity-70"
            aria-hidden="true"
          />
        </div>

        <div
          className="pointer-events-none absolute left-0 right-0 -top-8 h-24 z-10"
          style={{
            filter: "blur(8px)",
          }}
        />

        {/* CONTENT + GLOBE LAYOUT */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 overflow-visible">
          {/* Global Solution Heading - Centered above both columns */}
          <div className="flex justify-center mb-8 lg:mb-12">
            <motion.div
              variants={staggerItem}
              className="mb-8 flex items-center gap-3"
            >
              <span
                className="inline-block px-4 py-2 rounded-full hero-badge"
                style={{ backgroundColor: "#073f9e12", color: "#073f9e" }}
              >
                Global Solution
              </span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center overflow-visible">
            {/* LEFT — TEXT CONTENT */}
            <div className="lg:-ml-6 xl:-ml-10">
              <div>
                <motion.h1
                  variants={staggerItem}
                  className="section-hero-heading text-gray-900"
                >
                  Rebuilding Financial Infrastructure for{" "}
                  <span className="gradient-text relative">
                    Global Commerce
                  </span>
                </motion.h1>
              </div>

              <div className="max-w-xl mt-6">
                <p className="section-subtitle max-w-xl">
                  Trusty Money is not just a payment gateway. It&apos;s a{" "}
                  <span className="font-semibold text-[#073F9E]">
                    global financial operating system
                  </span>{" "}
                  for cross-border commerce, supporting billing, compliance,
                  payments, and settlement across connected markets.
                </p>

                <p className="mt-4 section-subtitle">
                  Unify your entire money stack in one platform—from invoicing
                  to reconciliation—with consistent controls, real-time
                  reporting, and predictable settlement timelines.
                </p>
              </div>

              <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Multi-currency accounts",
                  "Automated invoicing",
                  "Built-in compliance",
                  "Treasury visibility",
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-sm"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#0B43A0]" />
                    <span className="hero-badge text-[#0A2540]">{label}</span>
                  </div>
                ))}
              </div>

              {/* Stats badges
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2.5 border border-slate-200 shadow-sm">
                  <div className="h-2 w-2 animate-ping rounded-full bg-[#0B43A0]" />
                  <span className="text-sm font-medium text-[#0A2540]">
                    Connected across 180+ countries
                  </span>
                </div>
              </div> */}
            </div>

            {/* RIGHT — GLOBE VISUALIZATION */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="flex flex-col w-full overflow-visible">
                <div className="relative w-full h-[73vh] overflow-visible">
                  <div className="flex absolute w-[100%] h-[130%] top-[-3%] left-[28%] inset-x-0 -bottom-10/12 justify-center mask-globe">
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
      {/* <div className="h-20" /> */}
    </section>
  );
}
