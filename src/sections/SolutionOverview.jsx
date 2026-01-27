import { BillingModule } from "../sections/SolutionOverview/BillingModule";
import { ComplianceModule } from "../sections/SolutionOverview/ComplianceModule";
import { PaymentsModule } from "../sections/SolutionOverview/PaymentsModule";
import { TreasuryModule } from "../sections/SolutionOverview/TreasuryModule";
import { ReportingModule } from "../sections/SolutionOverview/ReportingModule";
import { RandomGlobe } from "../components/layout/randomglobe";
import { GlobeCards } from "../components/layout/GlobeCards"; // Import the new component
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";

export function SolutionOverview() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full min-h-[56.5rem] overflow-hidden  max-w-7xl mx-auto ">
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

        {/* MAIN CONTENT LAYOUT */}
        <div className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 overflow-visible">
          {/* Centered Heading Section */}
          <div className="text-center mb-8">
            <motion.div
              variants={staggerItem}
              className="mb-6 flex justify-center"
            >
              <span
                className="inline-block px-4 py-2 rounded-full hero-badge"
                style={{ backgroundColor: "#073f9e12", color: "#073f9e" }}
              >
                Global Solution
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="section-hero-heading text-gray-900 mb-6"
            >
              Rebuilding Financial Infrastructure for{" "}
              <span className="gradient-text relative">Global Commerce</span>
            </motion.h1>

            <div className="max-w-3xl mx-auto">
              <p className="section-subtitle text-lg md:text-xl">
                Trusty Money is not just a payment gateway. It&apos;s a{" "}
                <span className="font-semibold text-[#073F9E]">
                  global financial operating system
                </span>{" "}
                for cross-border commerce, supporting billing, compliance,
                payments, and settlement across connected markets.
              </p>
            </div>
          </div>

          {/* ========== GLOBE SECTION ========== */}
          <div className="relative">
            {/* Outer container for positioning */}
            <div className="relative w-[102%] h-[55vh] overflow-hidden">
              
              {/* Globe Container - Fixed, isolated */}
              <div className="absolute inset-0 z-10">
                <div className=" w-full h-full overflow-hidden">
                  <div className="flex absolute w-[100%] h-[239%] inset-x-0 top-[-22%] -bottom-10/12 justify-center mask-globe">
                    <RandomGlobe />
                  </div>
                </div>
              </div>

              {/* Cards Component - Completely separate layer */}
              <div className="absolute inset-0 z-20">
                <GlobeCards />
              </div>
            </div>

            {/* Mobile Cards - Stacked */}
            <div className="lg:hidden w-full max-w-md mx-auto mt-8">
              <div className="flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 backdrop-blur-sm bg-white/95"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">RK</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Rohan Kapoor
                      </h3>
                      <p className="text-sm text-gray-600">Owner, Glow Space</p>
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Sent</span>
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-bold text-gray-900">
                          ₹ 5,00,000
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600 font-medium">
                        Payment Sent
                      </span>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 backdrop-blur-sm bg-white/95"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                      <span className="text-green-600 font-semibold">TE</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Twist Enterprises
                      </h3>
                      <p className="text-sm text-gray-600">Alaska, USA</p>
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-green-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Received</span>
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-bold text-gray-900">
                          $ 5,000
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-600 font-medium">
                        Payment Received
                      </span>
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </motion.div>
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
    </section>
  );
}