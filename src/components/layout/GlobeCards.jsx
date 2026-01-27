import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function GlobeCards() {
  const [showLeftCard, setShowLeftCard] = useState(false);
  const [showRightCard, setShowRightCard] = useState(false);

  // Looping animation sequence - FIXED VERSION
  useEffect(() => {
    // ========== CONFIGURE TIMING HERE ==========
    // All times are in milliseconds (1000ms = 1 second)
    
    // Step 1: Right card appears after this delay (from page load)
    const RIGHT_APPEARS_AFTER = 4000; // 4 seconds
    
    // Step 2: Left card appears this long AFTER right card appears
    const LEFT_APPEARS_AFTER_RIGHT = 2000; // 2 seconds after right
    
    // Step 3: Both stay visible for this duration
    const STAY_VISIBLE_FOR = 5000; // 1 second
    
    // Step 4: Both disappear, then wait this long before next loop
    const HIDDEN_BEFORE_NEXT_LOOP = 4000; // 3 seconds
    
    // ===========================================

    let timeoutIds = [];
    let isMounted = true;

    const runSequence = () => {
      if (!isMounted) return;
      
      // Clear any existing timeouts
      timeoutIds.forEach((id) => clearTimeout(id));
      timeoutIds = [];

      // STEP 1: Right card appears
      const rightTimeout = setTimeout(() => {
        if (!isMounted) return;
        setShowRightCard(true);
        setShowLeftCard(false);
        
        // STEP 2: Left card appears after delay
        const leftTimeout = setTimeout(() => {
          if (!isMounted) return;
          setShowLeftCard(true);
          
          // STEP 3: Both stay visible, then disappear
          const disappearTimeout = setTimeout(() => {
            if (!isMounted) return;
            setShowRightCard(false);
            setShowLeftCard(false);
            
            // STEP 4: Wait before next loop
            const restartTimeout = setTimeout(() => {
              if (!isMounted) return;
              runSequence(); // Restart the sequence
            }, HIDDEN_BEFORE_NEXT_LOOP);
            
            timeoutIds.push(restartTimeout);
          }, STAY_VISIBLE_FOR);
          
          timeoutIds.push(disappearTimeout);
        }, LEFT_APPEARS_AFTER_RIGHT);
        
        timeoutIds.push(leftTimeout);
      }, RIGHT_APPEARS_AFTER);
      
      timeoutIds.push(rightTimeout);
    };

    // Start the sequence
    const initialDelay = setTimeout(() => {
      runSequence();
    }, 1000); // Initial 1 second delay before starting

    timeoutIds.push(initialDelay);

    return () => {
      isMounted = false;
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      {/* Left Card */}
      <AnimatePresence>
        {showLeftCard && (
          <motion.div
            key="left-card"
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pointer-events-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 h-40 w-60 backdrop-blur-sm bg-white/95">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">
                    RK
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">
                    Rohan Kapoor
                  </h3>
                  <p className="text-xs text-gray-600 truncate">
                    Owner, Glow Space
                  </p>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Sent</span>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-bold text-gray-900">
                      ₹ 5,00,000
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-green-600 font-medium">
                    Payment Sent
                  </span>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Card */}
      <AnimatePresence>
        {showRightCard && (
          <motion.div
            key="right-card"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 120 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pointer-events-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 h-40 w-60 backdrop-blur-sm bg-white/95">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center shrink-0">
                  <span className="text-green-600 font-semibold text-sm">
                    TE
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">
                    Twist Enterprises
                  </h3>
                  <p className="text-xs text-gray-600 truncate">
                    Alaska, USA
                  </p>
                </div>
              </div>

              <div className="p-3 bg-green-50 rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Received</span>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-bold text-gray-900">
                      $ 5,000
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-600 font-medium">
                    Payment Received
                  </span>
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}