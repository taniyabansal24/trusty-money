import { motion } from "framer-motion";
import { Globe, Link2, FileCheck, Zap, Shield } from "lucide-react";

export function ComparisonSection({ isInView }) {
  const features = [
    {
      name: "FX Transparency",
      description: "Exchange rate clarity and markup disclosure.",
      icon: Globe,
      banks: "Hidden margins",
      gateways: "Undisclosed spreads",
      trustyMoney: "Full transparency",
    },
    {
      name: "Virtual Intl Accounts",
      description: "Multi-currency account infrastructure.",
      icon: Link2,
      banks: "Not available",
      gateways: "Not available",
      trustyMoney: "30+ currencies",
    },
    {
      name: "Billing + Compliance",
      description: "Automated invoicing and regulatory tools.",
      icon: FileCheck,
      banks: "Manual only",
      gateways: "Basic features",
      trustyMoney: "Fully automated",
    },
    {
      name: "Faster Settlement",
      description: "Fund transfer and availability speed.",
      icon: Zap,
      banks: "T+3 to T+5",
      gateways: "T+2 rolling",
      trustyMoney: "T+0 to T+1",
    },
    {
      name: "Crypto / Stablecoin",
      description: "Digital asset settlement support.",
      icon: Shield,
      banks: "Not supported",
      gateways: "Limited support",
      trustyMoney: "USDC, USDT ready",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-slate-50/50 to-indigo-50/30 border border-slate-200/60 rounded-lg overflow-hidden shadow-lg shadow-slate-100/50">
      <div className="border-b border-slate-200/60 px-6 py-4 bg-gradient-to-r from-slate-100/50 to-indigo-100/50">
        <h4 className="text-slate-900 mb-1 text-lg font-semibold">
          Why Businesses Choose Trusty Money
        </h4>
        <p className="text-slate-600 text-sm">
          Feature-by-feature comparison across financial service providers
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-indigo-50/30">
              <th className="px-6 py-4 text-left text-slate-700 font-semibold text-xs uppercase tracking-wider">
                Feature
              </th>
              <th className="px-6 py-4 text-center text-slate-700 font-semibold text-xs uppercase tracking-wider">
                TrustyMoney
              </th>
              <th className="px-6 py-4 text-center text-slate-700 font-semibold text-xs uppercase tracking-wider">
                Gateways
              </th>
              <th className="px-6 py-4 text-center text-slate-700 font-semibold text-xs uppercase tracking-wider">
                Banks
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="border-b border-slate-100 hover:bg-slate-50/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <div className="text-slate-900 font-medium text-sm mb-1">
                          {feature.name}
                        </div>
                        <div className="text-slate-600 text-xs">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1.5 rounded-md bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
                      {feature.trustyMoney}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1.5 rounded-md bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm font-medium">
                      {feature.gateways}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1.5 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                      {feature.banks}
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
