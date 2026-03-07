import React, { useState, useEffect, useCallback } from "react";
import { Container } from "../../../components/ui";
import { motion, AnimatePresence } from "framer-motion";
import OneTimePayment from "./OneTimePayment";
import SubscriptionCard from "./SubscriptionCard";
import UsageBasedBilling from "./UsageBasedBilling";
import PricingPlans from "./PricingPlans";

const BillingOptions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentComponent, setCurrentComponent] = useState('one-time');
  
  const items = [
    {
      title: "One and Done",
      desc: 'Pay once, own it forever. No monthly bills, no "subscription fatigue," and zero hidden fees—just a single transaction for total, lifetime access.',
      component: 'one-time'
    },
    {
      title: "Subscription: Continues Access",
      desc: "A fixed recurring fee for uninterrupted service. Avoid large upfront costs and enjoy a predictable plan that ensures your platform and features are always active and up to date.",
      component: 'subscription'
    },
    {
      title: "Usage-Based Billings",
      desc: 'Pay only for what you use. A flexible, "pay-as-you-go" model that aligns your costs directly with your activity—perfect for fluctuating needs.',
      component: 'usage-based'
    },
  ];

  // Main animation sequence in a loop
  const runAnimationSequence = useCallback(async () => {
    while (true) {
      // Phase 1: One and Done
      setActiveIndex(0);
      setCurrentComponent('one-time');
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Phase 2: Subscription
      setActiveIndex(1);
      setCurrentComponent('pricing-plans');
      await new Promise(resolve => setTimeout(resolve, 6500));
      
      setCurrentComponent('subscription-card');
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Phase 3: Usage-Based Billings
      setActiveIndex(2);
      setCurrentComponent('usage-based');
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }, []);

  // Start the animation loop
  useEffect(() => {
    const animationLoop = runAnimationSequence();
    return () => {
      // Cleanup if needed
    };
  }, [runAnimationSequence]);

  return (
    <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Left side - Text content */}
      <div className="space-y-12">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            {/* Title */}
            <motion.h2
              animate={{ 
                color: i === activeIndex ? "#073F9E" : "#0F172A"
              }}
              transition={{ duration: 0.3 }}
              className="text-lg font-bold mb-2"
            >
              {item.title}
            </motion.h2>
            
            {/* Description */}
            <motion.p
              animate={{ 
                color: i === activeIndex ? "#1b1b1b" : "#64748B"
              }}
              transition={{ duration: 0.3 }}
              className="text-sm leading-relaxed max-w-xl"
            >
              {item.desc}
            </motion.p>
            
            {/* Simple indicator line - only shows for active item */}
            {/* {i === activeIndex && (
              <motion.div
                layoutId="activeIndicator"
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 0.3 }}
                className="h-0.5 bg-[#073F9E] rounded-full mt-3"
              />
            )} */}
          </motion.div>
        ))}
      </div>

      {/* Right side - Components */}
      <div className="relative min-h-[500px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentComponent === 'one-time' && (
            <motion.div
              key="one-time"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full"
            >
              <OneTimePayment />
            </motion.div>
          )}

          {currentComponent === 'pricing-plans' && (
            <motion.div
              key="pricing-plans"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full"
            >
              <PricingPlans />
            </motion.div>
          )}

          {currentComponent === 'subscription-card' && (
            <motion.div
              key="subscription-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full"
            >
              <SubscriptionCard />
            </motion.div>
          )}

          {currentComponent === 'usage-based' && (
            <motion.div
              key="usage-based"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full"
            >
              <UsageBasedBilling />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default BillingOptions;