import { motion } from "framer-motion";
import { useState } from 'react';
import { Calculator, TrendingDown } from 'lucide-react';

export function PricingTable({ isInView }) {
  const [amount, setAmount] = useState(10000);

  // Calculation logic
  const calculations = {
    trustyMoney: {
      exchangeRate: 83.2547,
      fxMarkup: 0,
      fxMarkupPercent: 0,
      transactionFee: amount * 0.0049,
      transactionFeePercent: 0.49,
      totalCost: amount * 0.0049,
      amountReceived: amount * 83.2547,
      effectiveRate: 83.2547
    },
    traditional: {
      exchangeRate: 83.2547,
      fxMarkup: amount * 0.025, // 2.5% hidden margin
      fxMarkupPercent: 2.5,
      transactionFee: amount * 0.02,
      transactionFeePercent: 2.0,
      totalCost: amount * 0.045,
      amountReceived: amount * 81.0734, // Worse effective rate
      effectiveRate: 81.0734
    }
  };

  const savings = calculations.traditional.totalCost - calculations.trustyMoney.totalCost;
  const savingsPercent = ((savings / calculations.traditional.totalCost) * 100);

  return (
    <div className="bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 border border-cyan-200/60 rounded-lg overflow-hidden shadow-lg shadow-cyan-100/50">
      <div className="border-b border-cyan-200/60 px-4 py-2.5 bg-gradient-to-r from-cyan-100/50 to-blue-100/50">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-slate-900 mb-0.5">Cost Comparison Calculator</h4>
            <p className="text-slate-600 text-xs">Compare actual costs: Trusty Money vs Traditional Banks</p>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-blue-100 border border-blue-300">
            <Calculator size={14} className="text-blue-600" />
            <span className="text-blue-700 text-xs font-medium">Interactive</span>
          </div>
        </div>
      </div>

      {/* Amount Selector */}
      <div className="px-4 py-3 bg-gradient-to-r from-blue-50/60 via-cyan-50/60 to-indigo-50/60 border-b border-cyan-200/60">
        <label className="text-slate-700 text-sm font-medium mb-2 block">
          Transaction Amount (USD)
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="flex-1 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="text-slate-900 font-mono font-medium min-w-[100px] text-right">
            ${amount.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-gradient-to-br from-white/50 to-blue-50/20">
        {/* Traditional Banks */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between mb-3">
            <h5 className="text-slate-900 font-medium text-sm">Traditional Banks</h5>
            <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-xs font-medium border border-red-200">
              Higher Cost
            </span>
          </div>

          <div className="space-y-2.5 bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-lg p-3 border border-red-200/60">
            <div className="flex justify-between text-xs">
              <span className="text-slate-600">Base exchange rate</span>
              <span className="text-slate-900 font-mono">₹{calculations.traditional.exchangeRate.toFixed(4)}</span>
            </div>

            <div className="flex justify-between text-xs pt-2 border-t border-red-200/60">
              <span className="text-slate-600">Hidden FX markup ({calculations.traditional.fxMarkupPercent}%)</span>
              <span className="text-red-600 font-mono">-${calculations.traditional.fxMarkup.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-xs">
              <span className="text-slate-600">Transaction fee ({calculations.traditional.transactionFeePercent}%)</span>
              <span className="text-red-600 font-mono">-${calculations.traditional.transactionFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-xs pt-2 border-t border-red-200/60">
              <span className="text-slate-700 font-medium">Total fees</span>
              <span className="text-red-600 font-mono font-medium">${calculations.traditional.totalCost.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-xs pt-2 border-t border-red-200/60">
              <span className="text-slate-700 font-medium">Effective rate</span>
              <span className="text-slate-900 font-mono font-medium">₹{calculations.traditional.effectiveRate.toFixed(4)}</span>
            </div>

            <div className="flex justify-between pt-2 border-t border-red-300/60 bg-white/50 -mx-3 px-3 py-2 rounded-b-lg">
              <span className="text-slate-900 font-medium text-xs">Amount received (INR)</span>
              <span className="text-slate-900 font-mono font-semibold text-sm">
                ₹{calculations.traditional.amountReceived.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>
        </motion.div>

        {/* TrustyMoney */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between mb-3">
            <h5 className="text-slate-900 font-medium text-sm">Trusty Money</h5>
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-xs font-medium border border-emerald-200">
              Best Value
            </span>
          </div>

          <div className="space-y-2.5 bg-gradient-to-br from-blue-100/60 to-indigo-100/60 rounded-lg p-3 border-2 border-blue-300/60 shadow-inner">
            <div className="flex justify-between text-xs">
              <span className="text-slate-600">Base exchange rate</span>
              <span className="text-slate-900 font-mono">₹{calculations.trustyMoney.exchangeRate.toFixed(4)}</span>
            </div>

            <div className="flex justify-between text-xs pt-2 border-t border-blue-300/60">
              <span className="text-slate-600">FX markup</span>
              <span className="text-emerald-600 font-mono font-medium">$0.00 (0%)</span>
            </div>

            <div className="flex justify-between text-xs">
              <span className="text-slate-600">Transaction fee ({calculations.trustyMoney.transactionFeePercent}%)</span>
              <span className="text-blue-600 font-mono">-${calculations.trustyMoney.transactionFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-xs pt-2 border-t border-blue-300/60">
              <span className="text-slate-700 font-medium">Total fees</span>
              <span className="text-blue-600 font-mono font-medium">${calculations.trustyMoney.totalCost.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-xs pt-2 border-t border-blue-300/60">
              <span className="text-slate-700 font-medium">Effective rate</span>
              <span className="text-slate-900 font-mono font-medium">₹{calculations.trustyMoney.effectiveRate.toFixed(4)}</span>
            </div>

            <div className="flex justify-between pt-2 border-t border-blue-400/60 bg-white/60 -mx-3 px-3 py-2 rounded-b-lg">
              <span className="text-slate-900 font-medium text-xs">Amount received (INR)</span>
              <span className="text-blue-700 font-mono font-semibold text-sm">
                ₹{calculations.trustyMoney.amountReceived.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Savings Summary */}
      <div className="border-t border-cyan-200/60 px-4 py-3 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
            <TrendingDown size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-0.5">
              <span className="text-xl font-semibold text-emerald-600 font-mono">
                ${savings.toFixed(2)}
              </span>
              <span className="text-emerald-700 text-xs font-medium">
                saved ({savingsPercent.toFixed(1)}% less)
              </span>
            </div>
            <p className="text-slate-700 text-xs">
              On this ${amount.toLocaleString()} transaction, you save <strong>${savings.toFixed(2)}</strong> by using 
              Trusty Money instead of traditional banks. Zero FX markup makes all the difference.
            </p>
          </div>
        </div>
      </div>

      {/* Breakdown Note */}
      <div className="border-t border-cyan-200/60 px-4 py-2.5 bg-gradient-to-r from-slate-50 via-cyan-50/30 to-blue-50/30">
        <p className="text-slate-600 text-xs leading-relaxed">
          <strong>How we calculate:</strong> Traditional banks embed 2-3% FX margins in exchange rates plus separate transaction fees. 
          Trusty Money uses mid-market rates with zero markup—only our transparent 0.49% transaction fee applies.
        </p>
      </div>
    </div>
  );
}

