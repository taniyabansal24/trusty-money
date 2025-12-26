import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui';

// Step data
const steps = [
  {
    id: 1,
    number: '01',
    title: 'AI-Powered Billing',
    subtitle: 'Intelligent invoicing with automatic tax calculation'
  },
  {
    id: 2,
    number: '02',
    title: 'Global Compliance',
    subtitle: 'Built-in tax & regulatory automation'
  },
  {
    id: 3,
    number: '03',
    title: 'Virtual Payment Accounts',
    subtitle: 'Local accounts in 10+ currencies'
  },
  {
    id: 4,
    number: '04',
    title: 'Treasury Management',
    subtitle: 'Control cash flow & conversion timing'
  },
  {
    id: 5,
    number: '05',
    title: 'Instant INR Settlement',
    subtitle: 'Convert & settle in real-time'
  },
  {
    id: 6,
    number: '06',
    title: 'Reporting & Reconciliation',
    subtitle: 'Automated reports & audit trails'
  }
];

// Animation Components for each step
const BillingAnimation = () => (
  <div className="relative w-full h-96 flex items-center justify-center">
    <div className="relative w-full max-w-lg">
      {/* Multiple floating invoices */}
      {[0, 1, 2].map((idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
          className="absolute w-64 h-72 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 overflow-hidden"
          style={{ 
            left: `${idx * 60}px`,
            top: `${idx * 20}px`,
            zIndex: 3 - idx,
            transform: `rotate(${(idx - 1) * 5}deg)`,
            willChange: 'transform'
          }}
        >
          {/* Invoice Header */}
          <div className="mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "70%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + idx * 0.2, duration: 0.8 }}
              className="h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded mb-2"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + idx * 0.2 }}
              className="text-xs text-gray-400 font-mono"
            >
              INV-{2024 + idx}-{String(Math.floor(Math.random() * 9999)).padStart(4, '0')}
            </motion.div>
          </div>
          
          {/* Line items */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.random() * 30 + 60}%` }}
              viewport={{ once: true }}
              transition={{ delay: 1 + idx * 0.2 + i * 0.1, duration: 0.5 }}
              className="h-2 bg-gray-200 rounded mb-3"
            />
          ))}
          
          {/* Total Amount */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 + idx * 0.2, type: "spring", stiffness: 300, damping: 20 }}
            className="absolute bottom-6 right-6 px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-lg"
          >
            ${(Math.random() * 9000 + 1000).toFixed(2)}
          </motion.div>
          
          {/* AI Badge - CSS animation instead */}
          <div
            className="absolute top-3 right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center animate-spin"
            style={{ animationDuration: '3s' }}
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
            </svg>
          </div>
        </motion.div>
      ))}
      
      {/* Floating text labels */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2 }}
        className="absolute -left-8 top-1/4 px-3 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-lg"
      >
        Auto-Generated
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.3 }}
        className="absolute -right-8 top-1/2 px-3 py-2 bg-green-600 text-white text-xs font-bold rounded-lg shadow-lg"
      >
        Tax Compliant
      </motion.div>
      
      {/* Reduced particles from 8 to 4 */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -80, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: i * 0.8,
            ease: "linear"
          }}
          className="absolute w-3 h-3 bg-blue-400 rounded-full"
          style={{ top: '80%', left: `${15 + i * 20}%`, willChange: 'transform, opacity' }}
        />
      ))}
    </div>
  </div>
);

const ComplianceAnimation = () => (
  <div className="relative w-full h-96 flex items-center justify-center">
    <div className="relative w-80 h-80">
      {/* Large Shield */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
        className="relative"
        style={{ willChange: 'transform' }}
      >
        <svg width="280" height="320" viewBox="0 0 280 320" fill="none" className="absolute -left-12 -top-12">
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            d="M140 20 L260 80 L260 180 Q260 260 140 310 Q20 260 20 180 L20 80 Z"
            stroke="#8B5CF6"
            strokeWidth="6"
            fill="rgba(139, 92, 246, 0.15)"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
            d="M140 20 L260 80 L260 180 Q260 260 140 310 Q20 260 20 180 L20 80 Z"
            stroke="#A78BFA"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
          />
        </svg>
        
        {/* Compliance labels inside */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pt-8">
          {['VAT', 'GST', 'AML', 'KYC', 'TAX'].map((label, i) => (
            <motion.div
              key={label}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 + i * 0.15, type: "spring", stiffness: 200, damping: 15 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 'auto' }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 + i * 0.15 }}
                className="px-4 py-2 bg-purple-100 text-purple-900 font-bold rounded-lg text-sm"
              >
                {label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Reduced orbiting icons from 5 to 3 */}
      {['🔒', '📋', '🛡️'].map((icon, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 15 + i * 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{ transformOrigin: 'center', willChange: 'transform' }}
        >
          <div 
            className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-xl border-2 border-purple-300"
            style={{ 
              top: '50%', 
              left: '50%',
              transform: `translate(-50%, -50%) translateY(-${140 + i * 20}px)`
            }}
          >
            {icon}
          </div>
        </motion.div>
      ))}
      
      {/* Reduced pulsing rings from 3 to 2 */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: i * 1.5,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full border-4 border-purple-400"
          style={{ willChange: 'transform, opacity' }}
        />
      ))}
    </div>
  </div>
);

const PaymentAccountsAnimation = () => (
  <div className="relative w-full h-96 flex items-center justify-center">
    <div className="relative w-96 h-96">
      {/* Center node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg flex items-center justify-center z-10"
      >
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      </motion.div>
      
      {/* Currency nodes */}
      {['USD', 'EUR', 'GBP', 'CAD', 'JPY'].map((currency, i) => {
        const angle = (i * 360) / 5;
        const radius = 90;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <React.Fragment key={currency}>
            {/* Connection line */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
              x1="128"
              y1="128"
              x2={128 + x}
              y2={128 + y}
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="4,4"
              style={{ position: 'absolute' }}
            />
            
            {/* Currency node */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
              className="absolute w-12 h-12 bg-white rounded-full shadow-lg border-2 border-green-500 flex items-center justify-center font-bold text-xs text-green-700"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {currency}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className="absolute inset-0 rounded-full border-2 border-green-400"
              />
            </motion.div>
            
            {/* Data packet */}
            <motion.div
              animate={{ 
                offsetDistance: ['0%', '100%']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
              className="absolute w-2 h-2 bg-green-500 rounded-full"
              style={{
                offsetPath: `path('M 128 128 L ${128 + x} ${128 + y}')`,
                offsetRotate: '0deg'
              }}
            />
          </React.Fragment>
        );
      })}
    </div>
  </div>
);

const TreasuryAnimation = () => (
  <div className="relative w-full h-96 flex items-center justify-center">
    <div className="relative w-full max-w-2xl h-80">
      {/* Large Chart Container */}
      <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
        <svg width="100%" height="100%" viewBox="0 0 500 300" className="absolute inset-0 p-8">
          {/* Grid lines */}
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              x1="40"
              y1={40 + i * 44}
              x2="460"
              y2={40 + i * 44}
              stroke="#9CA3AF"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          ))}
          
          {/* Main Growth Line */}
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            d="M 40 240 Q 100 200, 140 160 T 240 120 T 340 80 L 460 40"
            fill="none"
            stroke="url(#treasuryGradient)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          
          {/* Area fill */}
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            d="M 40 240 Q 100 200, 140 160 T 240 120 T 340 80 L 460 40 L 460 260 L 40 260 Z"
            fill="url(#treasuryAreaGradient)"
          />
          
          <defs>
            <linearGradient id="treasuryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="treasuryAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Data points with values */}
        {[{x: 140, y: 160, val: '$2.4M'}, {x: 240, y: 120, val: '$3.8M'}, {x: 340, y: 80, val: '$5.2M'}, {x: 460, y: 40, val: '$7.1M'}].map((point, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 + i * 0.2, type: "spring", stiffness: 200 }}
            className="absolute"
            style={{ left: point.x + 32, top: point.y + 32 }}
          >
            <div className="relative">
              <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-xl" />
              <motion.div
                animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className="absolute inset-0 rounded-full bg-amber-400"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2 + i * 0.2 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-amber-500 text-white font-bold text-sm rounded-lg shadow-lg"
              >
                {point.val}
              </motion.div>
            </div>
          </motion.div>
        ))}
        
        {/* Floating currency symbols */}
        {['$', '€', '£', '¥', '₹'].map((symbol, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 3 + i * 0.5, 
              repeat: Infinity, 
              delay: i * 0.6 
            }}
            className="absolute text-4xl font-bold text-amber-500/50"
            style={{ 
              left: `${15 + i * 20}%`,
              top: '70%'
            }}
          >
            {symbol}
          </motion.div>
        ))}
        
        {/* Growth percentage badge */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5, type: "spring", stiffness: 150 }}
          className="absolute top-4 right-4 px-4 py-2 bg-green-500 text-white font-bold rounded-full shadow-lg flex items-center gap-2"
        >
          <span className="text-2xl">↗</span>
          <span>+127%</span>
        </motion.div>
      </div>
    </div>
  </div>
);

const SettlementAnimation = () => (
  <div className="relative w-full h-96 flex items-center justify-center">
    <div className="relative w-full max-w-2xl h-64">
      {/* Source Currency - USD */}
      <motion.div
        initial={{ x: -150, opacity: 0, scale: 0.5 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 150, damping: 20 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10"
      >
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
            $
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border-8 border-blue-400"
            style={{ willChange: 'transform, opacity' }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 bg-blue-600 text-white font-bold rounded-lg"
          >
            USD
          </motion.div>
        </div>
      </motion.div>
      
      {/* Conversion Arrow with animations */}
      <div className="absolute left-44 right-44 top-1/2 -translate-y-1/2 h-2">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 origin-left relative rounded-full"
          style={{ willChange: 'transform' }}
        >
          {/* Reduced traveling particles from 5 to 3 */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                x: ['0%', '100%'],
                scale: [0, 1.5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "linear"
              }}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"
              style={{ willChange: 'transform' }}
            />
          ))}
        </motion.div>
        
        {/* Arrow head */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          animate={{ x: [0, 15, 0] }}
          className="absolute -right-8 top-1/2 -translate-y-1/2"
          style={{ willChange: 'transform' }}
        >
          <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </div>
      
      {/* Target Currency - INR */}
      <motion.div
        initial={{ x: 150, opacity: 0, scale: 0.5 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 150, damping: 20 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10"
      >
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-br from-orange-500 via-orange-600 to-red-700 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
            ₹
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border-8 border-orange-400"
            style={{ willChange: 'transform, opacity' }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 bg-orange-600 text-white font-bold rounded-lg"
          >
            INR
          </motion.div>
        </div>
      </motion.div>
      
      {/* Instant Badge - Top Center */}
      <motion.div
        initial={{ scale: 0, rotate: -30, y: -20 }}
        whileInView={{ scale: 1, rotate: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
        className="absolute top-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xl rounded-full shadow-2xl flex items-center gap-2 border-4 border-white"
      >
        <span className="text-3xl">⚡</span>
        <span>INSTANT</span>
      </motion.div>
      
      {/* Reduced speed lines from 4 to 2 */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            x: [-100, 100],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear"
          }}
          className="absolute left-1/2 h-1 w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"
          style={{ top: `${45 + i * 15}%`, willChange: 'transform, opacity' }}
        />
      ))}
    </div>
  </div>
);

const ReportingAnimation = () => (
  <div className="relative w-full h-96 flex items-center justify-center">
    <div className="relative w-full max-w-2xl h-80">
      {/* Large Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 overflow-hidden relative"
      >
        {/* Header with animated title */}
        <div className="flex items-center justify-between mb-6">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg shadow-lg"
          />
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
            className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
          >
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </motion.div>
        </div>
        
        {/* Large Chart Bars */}
        <div className="flex items-end justify-around h-40 gap-3 mb-6">
          {[{h: 50, c: '#EC4899'}, {h: 75, c: '#8B5CF6'}, {h: 45, c: '#6366F1'}, {h: 90, c: '#3B82F6'}, {h: 65, c: '#06B6D4'}, {h: 80, c: '#10B981'}].map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                className="w-full rounded-t-lg origin-bottom shadow-lg relative"
                style={{ 
                  height: `${bar.h}%`,
                  background: `linear-gradient(to top, ${bar.c}, ${bar.c}dd)`,
                  willChange: 'transform'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 + i * 0.15 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap px-2 py-1 bg-gray-900 text-white rounded"
                >
                  ${(Math.random() * 50 + 20).toFixed(1)}K
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2 + i * 0.1 }}
                className="text-xs text-gray-500 font-semibold"
              >
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* Stats rows with icons */}
        <div className="space-y-3">
          {[
            {label: 'Total Revenue', icon: '💰', color: 'bg-green-500'},
            {label: 'Active Users', icon: '👥', color: 'bg-blue-500'},
            {label: 'Transactions', icon: '📊', color: 'bg-purple-500'}
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2.2 + i * 0.15 }}
              className="flex items-center gap-3"
            >
              <div className={`w-8 h-8 ${stat.color} rounded-lg flex items-center justify-center text-white font-bold shadow-lg`}>
                {stat.icon}
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.random() * 30 + 60}%` }}
                viewport={{ once: true }}
                transition={{ delay: 2.4 + i * 0.15, duration: 0.8 }}
                className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full shadow-inner relative overflow-hidden"
                style={{ willChange: 'width' }}
              >
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  style={{ willChange: 'transform' }}
                />
              </motion.div>
              <span className="text-sm font-bold text-gray-700">{stat.label}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Export badge */}
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 3, type: "spring", stiffness: 150, damping: 15 }}
          className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12"
        >
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </motion.div>
      </motion.div>
      
      {/* Floating "Export Ready" badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-2xl whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        📑 Export Ready
      </motion.div>
    </div>
  </div>
);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4
    }
  })
};

// Step Card Component
const StepCard = ({ step, index }) => {
  const isLast = index === steps.length - 1;
  const isEven = index % 2 === 0;
  
  // Select animation component
  const AnimationComponent = [
    BillingAnimation,
    ComplianceAnimation,
    PaymentAccountsAnimation,
    TreasuryAnimation,
    SettlementAnimation,
    ReportingAnimation
  ][index];

  return (
    <motion.div
      variants={stepVariants}
      className="relative flex gap-8 pb-16"
    >
      {/* Step Number Column */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Number Circle */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10"
        >
          {step.number}
        </motion.div>

        {/* Connecting Line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
            className="w-0.5 flex-1 bg-gradient-to-b from-blue-600/40 to-blue-600/10 origin-top"
          />
        )}
      </div>

      {/* Content - Animation-Focused Layout */}
      <div className="flex-1">
        {/* Minimal Text Header */}
        <div className="mb-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight"
          >
            {step.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="text-gray-500 text-lg"
          >
            {step.subtitle}
          </motion.p>
        </div>

        {/* Large Animation */}
        <div className="flex items-center justify-center">
          <AnimationComponent />
        </div>
      </div>
    </motion.div>
  );
};

const SolutionSection = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50" />

      <Container>
        <div className="relative max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">
                Solution Overview
              </span>
            </motion.div>

            {/* Main Headline */}
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Rebuilding the Financial Infrastructure
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                for Global Commerce
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              Trusty Money is not just a payment gateway. It's a complete <strong className="font-semibold text-gray-900">financial operating system</strong> for global collections — designed to handle billing, compliance, payment collection, conversion, and settlement in one unified platform.
            </p>
          </motion.div>

          {/* Stepper Flow */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative"
          >
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </motion.div>

          {/* Optional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-20 pt-12 border-t border-gray-200"
          >
            <p className="text-gray-600 mb-6 text-lg">
              Every component works independently — or together as one system.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
              See How It Works
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SolutionSection;
