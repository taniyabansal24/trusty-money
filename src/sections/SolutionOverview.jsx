import { BillingModule } from '../sections/SolutionOverview/BillingModule';
import { ComplianceModule } from '../sections/SolutionOverview/ComplianceModule';
import { PaymentsModule } from '../sections/SolutionOverview/PaymentsModule';
import { TreasuryModule } from '../sections/SolutionOverview/TreasuryModule';
import { ReportingModule } from '../sections/SolutionOverview/ReportingModule';
import { BackgroundGrid } from '../sections/SolutionOverview/BackgroundGrid';

export function SolutionOverview() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <BackgroundGrid />
      
      {/* Hero Section */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-24 md:pt-20">
        <div className="mb-5 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 shadow-sm">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600"></div>
            <span className="text-xs uppercase tracking-wide text-blue-700">
              Solution Overview
            </span>
          </div>
        </div>
        
        <h1 className="mb-8 text-center text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          We Are Rebuilding the Financial Infrastructure for Cross-Border Commerce
        </h1>
        
        <div className="mx-auto max-w-3xl space-y-4 text-center text-slate-600">
          <p className="text-lg">
            Trusty Money is not just a payment gateway. It is a <span className="font-semibold text-blue-600">financial operating system</span> for cross-border commerce, supporting billing, compliance, payments, collections, and settlement across connected products.
          </p>
          <p className="text-slate-500">
            Each component below is a standalone product that can be used independently or together.
          </p>
        </div>
      </div>

      {/* Product Modules */}
      <div className="relative z-10">
        <BillingModule />
        <ComplianceModule />
        <PaymentsModule />
        <TreasuryModule />
        <ReportingModule />
      </div>
      
      {/* Bottom padding */}
      <div className="h-20"></div>
    </section>
  );
}

