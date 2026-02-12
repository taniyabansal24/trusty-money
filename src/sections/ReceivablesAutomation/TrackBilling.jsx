import React from "react";
import { Container } from "../../components/ui";
import { motion } from "framer-motion";
import { staggerItem } from "../../utils/animations";

const TrackBilling = () => {
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
              Create a delightful billing experience
            </span>
          </motion.div>

          {/* Headline - RESPONSIVE */}
          <motion.h1 className="section-hero-heading w-full text-center lg:text-left text-[#1b1b1b]">
            Issue branded invoices and <br />
            <span className="gradient-text relative">
              track their status from one place
            </span>
          </motion.h1>

          {/* Subheadline line - RESPONSIVE */}
          <motion.p className="section-subtitle mb-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            Track recurring and one-time invoices with ease; make edits,
            approve, finalise, sync and issue credit notes, with a dashboard
            designed to help you save time.
          </motion.p>
        </div>
        <div className="lg:col-[7/13]"></div>
      </div>
    </Container>
  );
};

export default TrackBilling;