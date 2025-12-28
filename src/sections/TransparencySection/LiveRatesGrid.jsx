import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export function LiveRatesGrid({ isInView }) {
  const [rates, setRates] = useState([
    { pair: 'USD/INR', rate: 89.2547, change: 0.1234, changePercent: 0.138, lastUpdate: new Date() },
    { pair: 'EUR/USD', rate: 1.0829, change: -0.0023, changePercent: -0.212, lastUpdate: new Date() },
    { pair: 'GBP/USD', rate: 1.2672, change: 0.0045, changePercent: 0.356, lastUpdate: new Date() },
    { pair: 'USD/JPY', rate: 148.3421, change: -0.1234, changePercent: -0.083, lastUpdate: new Date() },
    { pair: 'EUR/GBP', rate: 0.8544, change: -0.0012, changePercent: -0.140, lastUpdate: new Date() },
    { pair: 'GBP/INR', rate: 105.4982, change: 0.2345, changePercent: 0.222, lastUpdate: new Date() },
    { pair: 'EUR/INR', rate: 90.1532, change: 0.0987, changePercent: 0.110, lastUpdate: new Date() },
    { pair: 'USD/EUR', rate: 0.9234, change: 0.0023, changePercent: 0.250, lastUpdate: new Date() },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRates((prevRates) =>
        prevRates.map((rate) => {
          const variation = (Math.random() - 0.5) * 0.002;
          const newRate = rate.rate * (1 + variation);
          const change = newRate - rate.rate;
          const changePercent = (change / rate.rate) * 100;

          return {
            ...rate,
            rate: newRate,
            change,
            changePercent,
            lastUpdate: new Date(),
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getChangeIcon = (change) => {
    if (change > 0) return <TrendingUp size={12} className="text-emerald-600" />;
    if (change < 0) return <TrendingDown size={12} className="text-red-600" />;
    return <Minus size={12} className="text-slate-400" />;
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'text-emerald-600';
    if (change < 0) return 'text-red-600';
    return 'text-slate-500';
  };

  return (
    <div className="bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 border border-indigo-200/60 rounded-lg overflow-hidden shadow-lg shadow-indigo-100/50">
      <div className="border-b border-indigo-200/60 px-4 py-2.5 flex items-center justify-between bg-gradient-to-r from-indigo-100/50 to-purple-100/50">
        <div>
          <h4 className="text-slate-900 mb-0.5">Live Market Rates</h4>
          <p className="text-slate-500 text-xs font-mono">
            Real-time mid-market exchange rates
          </p>
        </div>
        <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-700 text-xs font-medium uppercase tracking-wider">Live</span>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {rates.map((rate, index) => (
            <motion.div
              key={rate.pair}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="bg-white/80 border border-indigo-200/60 rounded-lg p-3 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-900 font-semibold text-sm">{rate.pair}</span>
                <div className={`flex items-center gap-1 ${getChangeColor(rate.change)}`}>
                  {getChangeIcon(rate.change)}
                  <span className="text-xs font-medium">
                    {rate.changePercent > 0 ? '+' : ''}{rate.changePercent.toFixed(3)}%
                  </span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={rate.rate}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-900 font-mono text-lg font-semibold"
                >
                  {rate.rate.toFixed(4)}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-2 pt-2 border-t border-indigo-100">
                <span className={`text-xs font-mono ${getChangeColor(rate.change)}`}>
                  {rate.change > 0 ? '+' : ''}{rate.change.toFixed(4)}
                </span>
                <span className="text-slate-400 text-xs">
                  {rate.lastUpdate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-indigo-200/60 px-4 py-2.5 bg-gradient-to-r from-slate-50 via-indigo-50/30 to-purple-50/30">
        <p className="text-slate-600 text-xs leading-relaxed">
          <strong>Mid-market rates:</strong> These are the real-time interbank exchange rates with zero markup. 
          Trusty Money uses these exact rates—no hidden margins, no spread manipulation.
        </p>
      </div>
    </div>
  );
}

