import React from "react";
import { Container } from "../../components/ui";
import WorkflowAnimation from "./WorkflowAnimation";
import { motion } from "framer-motion";
import { staggerItem } from "../../utils/animations";
import Proration from "./Proration";

const DynamicBilling = () => {
  return (
    <Container className="mx-auto flex items-start gap-x-10">
      <div className="grid w-full grid-cols-1 items-center gap-8 sm:gap-6 lg:grid-cols-12  flex-col lg:flex-row">
        <div className="row-[1] lg:col-[1/7]">
          {/* Badge - RESPONSIVE */}
          <motion.div
            variants={staggerItem}
            className="mb-6 lg:mb-8 flex justify-center lg:justify-start items-center gap-3"
          >
            <span className="inline-block px-4 py-2 rounded-full hero-badge txt-blue light-bg text-center">
              Smarter billing for growing teams
            </span>
          </motion.div>

          {/* Headline - RESPONSIVE */}
          <motion.h1 className="section-hero-heading w-full text-center lg:text-left text-[#1b1b1b]">
            Flexible infrastructure <br />
            <span className="gradient-text relative">
              that adapts to your billing
            </span>
          </motion.h1>

          {/* Subheadline line - RESPONSIVE */}
          <motion.p className="section-subtitle mb-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            Automate proration and billing changes with ease. From usage-based
            pricing to long-term contracts, manage complex billing models
            including tiered, volume, and pay-as-you-go—all in one system.
          </motion.p>
        </div>
        <div className="lg:col-[7/13]">
          <Proration />
        </div>
      </div>
    </Container>
  );
};

export default DynamicBilling;
