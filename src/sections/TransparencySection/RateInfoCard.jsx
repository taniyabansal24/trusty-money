import { motion } from "framer-motion";
import { Clock, Zap, Shield, Globe } from 'lucide-react';

export function RateInfoCard({ isInView }) {
  const features = [
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Exchange rates update every 2-4 seconds from multiple liquidity providers for maximum accuracy.',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Zero Latency',
      description: 'Direct API connections to tier-1 banks and FX markets eliminate delays and stale pricing.',
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'Rate Lock Guarantee',
      description: 'Lock your exchange rate for up to 48 hours with our rate protection feature—no surprises.',
      color: 'green'
    },
    {
      icon: Globe,
      title: '150+ Currency Pairs',
      description: 'Access to major, minor, and exotic currency pairs with institutional-grade liquidity.',
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'from-blue-50 to-blue-100',
        icon: 'text-blue-600',
        border: 'border-blue-200'
      },
      yellow: {
        bg: 'from-yellow-50 to-amber-100',
        icon: 'text-yellow-600',
        border: 'border-yellow-200'
      },
      green: {
        bg: 'from-emerald-50 to-green-100',
        icon: 'text-emerald-600',
        border: 'border-emerald-200'
      },
      purple: {
        bg: 'from-purple-50 to-violet-100',
        icon: 'text-purple-600',
        border: 'border-purple-200'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 border border-slate-200/60 rounded-lg overflow-hidden shadow-lg shadow-slate-100/50">
      <div className="border-b border-slate-200/60 px-4 py-2.5 bg-gradient-to-r from-slate-100/50 to-blue-100/50">
        <h4 className="text-slate-900 mb-0.5">Real-Time Rate Infrastructure</h4>
        <p className="text-slate-600 text-xs">Institutional-grade foreign exchange infrastructure</p>
      </div>

      <div className="p-4 space-y-3">
        {features.map((feature, index) => {
          const colors = getColorClasses(feature.color);
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-lg p-3 hover:shadow-md transition-all`}
            >
              <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-white/80 border ${colors.border} flex items-center justify-center shadow-sm`}>
                  <Icon size={18} className={colors.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-slate-900 font-medium text-sm mb-1">{feature.title}</h5>
                  <p className="text-slate-600 text-xs leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="border-t border-slate-200/60 px-4 py-3 bg-gradient-to-r from-blue-50/60 via-indigo-50/60 to-purple-50/60">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Shield size={16} className="text-white" />
          </div>
          <div>
            <p className="text-slate-900 text-xs font-medium mb-1">Bank-Grade Security</p>
            <p className="text-slate-600 text-xs leading-relaxed">
              All rate data is encrypted in transit and at rest. Our infrastructure is SOC 2 Type II certified 
              and compliant with international financial regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

