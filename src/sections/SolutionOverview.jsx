import { BillingModule } from "../sections/SolutionOverview/BillingModule";
import { ComplianceModule } from "../sections/SolutionOverview/ComplianceModule";
import { PaymentsModule } from "../sections/SolutionOverview/PaymentsModule";
import { TreasuryModule } from "../sections/SolutionOverview/TreasuryModule";
import { ReportingModule } from "../sections/SolutionOverview/ReportingModule";
import { BackgroundGrid } from "../sections/SolutionOverview/BackgroundGrid";
import { RandomGlobe } from "../components/layout/randomglobe";

export function SolutionOverview() {
  return (
    <>
    <section className="relative w-full overflow-hidden bg-white">
      {/* Hero Section with Globe */}
      <div className="relative w-full overflow-hidden">
        {/* Globe Background - Subtle and in the background */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
          </div>
        </div>

        {/* Content overlay */}
        <div className="relative z-20 mx-auto max-w-6xl px-6 pt-24 md:px-10 md:pt-10">
          <div className="mb-5 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm px-4 py-1.5 shadow-sm">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600"></div>
              <span className="text-xs uppercase tracking-wide text-blue-700">
                Global Solution
              </span>
            </div>
          </div>

          <h1 className="mb-8 text-center text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Rebuilding Financial Infrastructure for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Global Commerce
            </span>
          </h1>

          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-lg text-slate-700">
              Trusty Money is not just a payment gateway. It's a{" "}
              <span className="font-semibold text-blue-600">
                global financial operating system
              </span>{" "}
              for cross-border commerce, supporting billing, compliance,
              payments, and settlement across connected markets.
            </p>
          </div>

          {/* Globe Connection Points - Visual indicator */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 border border-slate-200">
              <div className="h-2 w-2 animate-ping rounded-full bg-blue-500"></div>
              <span className="text-sm text-slate-700">
                Connected across 180+ countries
              </span>
            </div>
          </div>
        </div>
        {/* Globe Container - positioned centrally but subtle */}
        <div className="flex flex-col w-full mt-[-8%] overflow-hidden">
          <div className=" relative w-full h-[73vh] overflow-hidden">
            <div className="flex absolute  w-[100%] h-[250%] top-0 inset-x-0 -bottom-10/12 justify-center mask-globe">
              <RandomGlobe />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg
              className="h-6 w-6 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Product Modules */}
      <div className="relative z-10 bg-white">
        <BillingModule />
        <ComplianceModule />
        <PaymentsModule />
        <TreasuryModule />
        <ReportingModule />
      </div>

      {/* Bottom padding */}
      <div className="h-20"></div>
    </section>
    </>
  );
}
