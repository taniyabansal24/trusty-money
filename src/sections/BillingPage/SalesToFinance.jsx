import React from "react";
import { Container } from "../../components/ui";
import CursorIcon from "../../components/svg/CursorIcon";
import LoadingSpinner from "../../components/svg/LoadingSpinner";
import MoreDotsIcon from "../../components/svg/MoreDotsIcon";
import LayersIcon from "../../components/svg/LayersIcon";
import CalendarArrowIcon from "../../components/svg/CalendarArrowIcon";
import CheckIcon from "../../components/svg/CheckIcon";
import WorkflowAnimation from "./WorkflowAnimation";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../utils/animations";

const SalesToFinance = () => {
  return (
    <Container className="mx-auto flex items-start gap-x-10">
      <div className="grid w-full grid-cols-1 items-center gap-8 sm:gap-6 lg:grid-cols-12 lg:flex-row">
        <div className="row-[1] lg:col-[1/7]">
          {/* Badge - RESPONSIVE */}
          <motion.div
            variants={staggerItem}
            className="mb-6 lg:mb-8 flex justify-center lg:justify-start items-center gap-3"
          >
            <span className="inline-block px-4 py-2 rounded-full hero-badge txt-blue light-bg text-center">
              Effortless workflow automation
            </span>
          </motion.div>

          {/* Headline - RESPONSIVE */}
          <motion.h1 className="section-hero-heading w-full text-center lg:text-left text-[#1b1b1b]">
            Streamline the handover{" "} <br />
            <span className="gradient-text relative">from sales to finance</span>
          </motion.h1>

          {/* Subheadline line - RESPONSIVE */}
          <motion.p className="section-subtitle mb-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            Stay on top of billing tasks, reduce errors and eliminate wasted
            hours from duplicate data entry. Real-time tax calculation for 150+
            countries.
          </motion.p>
        </div>
        <div className="lg:col-[7/13]">
          <WorkflowAnimation />
        </div>
      </div>
    </Container>
  );
};

export default SalesToFinance;
