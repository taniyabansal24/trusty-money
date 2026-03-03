import React from "react";
import { Container } from "../../components/ui";
import { motion } from "framer-motion";
import { staggerItem } from "../../utils/animations";
import ReminderVisual from "./ReminderVisual";

const RemindersAutomation = () => {
  return (
    <Container className="mx-auto flex items-start gap-x-10 relative">
      <div className="grid w-full grid-cols-1 items-center gap-8 sm:gap-6 lg:grid-cols-12 lg:flex-row">
        {/* Content - Right on desktop, Left on mobile */}
        <div className="row-[1] lg:col-[8/13] order-2 lg:order-2">
          {/* Badge - RESPONSIVE */}
          <motion.div
            variants={staggerItem}
            className="mb-6 lg:mb-8 flex justify-center lg:justify-start items-center gap-3"
          >
            <span className="inline-block px-4 py-2 rounded-full hero-badge txt-blue light-bg text-center">
              Automated dunning workflows
            </span>
          </motion.div>

          {/* Headline - RESPONSIVE */}
          <motion.h1 className="section-hero-heading w-full text-center lg:text-left text-[#1b1b1b]">
           Automate Payment 
            <br />
            <span className="gradient-text relative">follow -ups</span>
          </motion.h1>

          {/* Subheadline line - RESPONSIVE */}
          <motion.p className="section-subtitle mb-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            Trigger personalized reminders based on invoice status and ageing data to improve recovery and forecast accuracy.
          </motion.p>
        </div>
        
        {/* Image Space - Left on desktop, Right on mobile */}
        <div className="lg:col-[1/7] order-1 lg:order-1 ">
          <ReminderVisual/>
        </div>
      </div>
    </Container>
  );
};

export default RemindersAutomation;