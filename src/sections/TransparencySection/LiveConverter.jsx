import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export function LiveConverter({ isInView: _isInView }) {
  const [amount, setAmount] = useState('10000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [rates, setRates] = useState({
    'USD-INR': 89.2547,
    'USD-EUR': 0.9234,
    'USD-GBP': 0.7891,
    'USD-JPY': 148.3421,
    'EUR-INR': 90.1532,
    'EUR-USD': 1.0829,
    'EUR-GBP': 0.8544,
    'EUR-JPY': 160.6234,
    'GBP-INR': 105.4982,
    'GBP-USD': 1.2672,
    'GBP-EUR': 1.1704,
    'GBP-JPY': 187.9345,
    'INR-USD': 0.0120,
    'INR-EUR': 0.0111,
    'INR-GBP': 0.0095,
    'INR-JPY': 1.7821,
    'JPY-USD': 0.0067,
    'JPY-EUR': 0.0062,
    'JPY-GBP': 0.0053,
    'JPY-INR': 0.5612,
  });

  const [displayRate, setDisplayRate] = useState(89.2547); // Initial USD-INR rate
  const [converted, setConverted] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [rateChange, setRateChange] = useState(0);

  // Simulate realistic rate updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRates((prevRates) => {
        const newRates = {};
        Object.keys(prevRates).forEach((key) => {
          const variation = (Math.random() - 0.5) * 0.002;
          newRates[key] = prevRates[key] * (1 + variation);
        });
        return newRates;
      });
      setLastUpdate(new Date());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getCurrentRate = () => {
    const key = `${fromCurrency}-${toCurrency}`;
    return rates[key] || 1;
  };

  useEffect(() => {
    const newRate = getCurrentRate();
    if (displayRate > 0) {
      const change = ((newRate - displayRate) / displayRate) * 100;
      setRateChange(change);
    }
    setDisplayRate(newRate);
  }, [rates, fromCurrency, toCurrency]);

  useEffect(() => {
    const numAmount = parseFloat(amount) || 0;
    setConverted(numAmount * displayRate);
  }, [amount, displayRate]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  ];

  const getDecimalPlaces = (currency) => {
    return ['JPY', 'INR'].includes(currency) ? 4 : 6;
  };

  const fee = parseFloat(amount || '0') * 0.0049;
  const total = parseFloat(amount || '0') + fee;

  return (
    <div className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 border border-blue-200/60 rounded-lg overflow-hidden shadow-lg shadow-blue-100/50">
      <div className="border-b border-blue-200/60 px-4 py-2.5 flex items-center justify-between bg-gradient-to-r from-blue-100/50 to-indigo-100/50">
        <div>
          <h4 className="text-slate-900 mb-0.5">Currency Exchange Calculator</h4>
          <p className="text-slate-500 text-xs font-mono">
            Last updated: {lastUpdate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </p>
        </div>
        <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-emerald-700 text-xs font-medium uppercase tracking-wider">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-blue-200/60">
        {/* Send Section */}
        <div className="p-4 bg-white/40">
          <label className="text-slate-600 text-xs uppercase tracking-wider mb-2 block font-medium">You Send</label>
          <div className="relative mb-3">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
              className="w-full bg-white/80 border border-blue-200 rounded px-3 py-2 text-xl text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all font-mono"
              placeholder="0.00"
            />
          </div>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full bg-white border border-blue-200 rounded px-2.5 py-1.5 text-slate-900 cursor-pointer focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all text-sm"
          >
            {currencies.map((curr) => (
              <option key={curr.code} value={curr.code}>
                {curr.code} - {curr.name}
              </option>
            ))}
          </select>
        </div>

        {/* Exchange Rate Section */}
        <div className="p-4 bg-gradient-to-br from-blue-50/80 to-indigo-50/80">
          <label className="text-slate-600 text-xs uppercase tracking-wider mb-2 block font-medium">Exchange Rate</label>
          <div className="mb-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={displayRate}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xl text-slate-900 font-mono"
              >
                {displayRate.toFixed(getDecimalPlaces(toCurrency))}
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-slate-500 text-xs font-mono">
                1 {fromCurrency} = {displayRate.toFixed(getDecimalPlaces(toCurrency))} {toCurrency}
              </span>
              {rateChange !== 0 && (
                <span className={`flex items-center gap-0.5 text-xs ${rateChange > 0 ? 'text-emerald-600' : rateChange < 0 ? 'text-red-600' : 'text-slate-500'}`}>
                  {rateChange > 0 ? <TrendingUp size={10} /> : rateChange < 0 ? <TrendingDown size={10} /> : <Minus size={10} />}
                  {Math.abs(rateChange).toFixed(3)}%
                </span>
              )}
            </div>
          </div>
          
          <button
            onClick={handleSwap}
            className="w-full px-3 py-1.5 bg-white hover:bg-blue-50 border border-blue-200 rounded text-slate-700 text-sm transition-all font-medium shadow-sm"
          >
            Swap Currencies
          </button>
        </div>

        {/* Receive Section */}
        <div className="p-4 bg-white/40">
          <label className="text-slate-600 text-xs uppercase tracking-wider mb-2 block font-medium">You Receive</label>
          <div className="relative mb-3">
            <div className="w-full bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-300 rounded px-3 py-2 shadow-inner">
              <AnimatePresence mode="wait">
                <motion.div
                  key={converted}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl text-blue-700 font-mono font-semibold"
                >
                  {converted.toLocaleString('en-US', { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full bg-white border border-blue-200 rounded px-2.5 py-1.5 text-slate-900 cursor-pointer focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all text-sm"
          >
            {currencies.map((curr) => (
              <option key={curr.code} value={curr.code}>
                {curr.code} - {curr.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Fee Breakdown */}
      <div className="border-t border-blue-200/60 px-4 py-3 bg-gradient-to-r from-slate-50 via-blue-50/50 to-indigo-50/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div className="flex justify-between md:block">
            <span className="text-slate-600 text-xs uppercase tracking-wider font-medium">Mid-Market Rate</span>
            <div className="text-slate-900 font-mono mt-0.5 text-sm">{displayRate.toFixed(getDecimalPlaces(toCurrency))}</div>
          </div>
          <div className="flex justify-between md:block">
            <span className="text-slate-600 text-xs uppercase tracking-wider font-medium">FX Markup</span>
            <div className="text-emerald-600 font-mono mt-0.5 text-sm">0.00 (0%)</div>
          </div>
          <div className="flex justify-between md:block">
            <span className="text-slate-600 text-xs uppercase tracking-wider font-medium">Transaction Fee</span>
            <div className="text-slate-900 font-mono mt-0.5 text-sm">{currencies.find(c => c.code === fromCurrency)?.symbol}{fee.toFixed(2)} (0.49%)</div>
          </div>
          <div className="flex justify-between md:block">
            <span className="text-slate-600 text-xs uppercase tracking-wider font-medium">Total Cost</span>
            <div className="text-blue-600 font-mono mt-0.5 text-sm">{currencies.find(c => c.code === fromCurrency)?.symbol}{total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

