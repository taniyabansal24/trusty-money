import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShieldCheckIcon from "../../../components/svg/ShieldCheckIcon";
import DocumentIcon from "../../../components/svg/DocumentIcon";

const PricingPlans = ({ onComplete }) => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const plans = [
    {
      id: 1,
      name: "Monthly",
      price: "$10K",
      description: "Automate compliance",
    },
    {
      id: 2,
      name: "Quarterly",
      price: "$50K",
      description: "Automate compliance",
    },
    {
      id: 3,
      name: "Yearly",
      price: "$90K",
      description: "Automate compliance",
    },
  ];

  // Animation sequence
  useEffect(() => {
    const sequence = async () => {
      setIsAnimating(true);
      
      const cyclePlans = async () => {
        for (let i = 0; i < plans.length; i++) {
          setSelectedPlan(i);
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsAnimating(false);
        if (onComplete) {
          onComplete();
        }
      };
      
      cyclePlans();
    };
    
    sequence();
  }, [plans.length, onComplete]);

  // Container animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <motion.div
          key="pricing-plans"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="max-w-[800px] my-auto relative"
        >
          {/* Title with animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl font-bold text-[#073F9E] text-center mb-4"
          >
            Select Your Plan
          </motion.div>

          {/* Plans Container */}
          <div className="flex gap-3 justify-center">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                animate={{
                  scale: index === selectedPlan ? 1.1 : 1,
                  borderColor: index === selectedPlan ? "#073F9E" : "#F3F4F6",
                  borderWidth: index === selectedPlan ? 2 : 1,
                  boxShadow: index === selectedPlan 
                    ? "0 20px 25px -5px rgba(7, 63, 158, 0.2), 0 10px 10px -5px rgba(7, 63, 158, 0.1)" 
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="w-[220px] bg-white rounded-lg overflow-hidden relative border border-[#F3F4F6]"
              >
                {/* Top colored bar for highlighted plan */}
                {index === selectedPlan && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 w-full bg-[#073F9E] origin-left"
                  />
                )}

                {/* Content */}
                <div className="p-3">
                  {/* Header */}
                  <div className="mb-2">
                    <motion.h3 
                      animate={{ color: index === selectedPlan ? "#073F9E" : "#1B1B1B" }}
                      className="text-base font-bold"
                    >
                      {plan.name}
                    </motion.h3>
                    <p className="text-[10px] text-[#1B1B1B]">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <motion.span 
                      animate={{ scale: index === selectedPlan ? 1.1 : 1 }}
                      className="text-xl font-black text-[#101828] inline-block"
                    >
                      {plan.price}
                    </motion.span>
                  </div>

                  {/* Button */}
                  <button className="w-full bg-[#073F9E] text-white text-xs py-1.5 px-3 rounded-lg shadow-sm flex items-center justify-center gap-1.5 mb-3">
                    <span>Start</span>
                    <ShieldCheckIcon className="w-3 h-3" />
                  </button>

                  {/* Feature bars */}
                  <div className="space-y-1.5 mb-2">
                    {[50, 120, 140, 120, 90, 120].map((width, i) => (
                      <motion.div
                        key={i}
                        initial={{ width: 0 }}
                        animate={{ width }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.3 + (i * 0.1)
                        }}
                        className="h-1.5 bg-[#E5EFFF] rounded-full"
                      />
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-[#F9FAFB] border-t border-[#F3F4F6] px-3 py-1.5 flex items-center gap-1.5"
                >
                  <DocumentIcon size={12} />
                  <span className="text-[8px] text-[rgba(27,27,27,0.8)]">
                    Audit-ready docs auto
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingPlans;