import React from "react";
import { Container } from "../../components/ui";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../utils/animations";
import FlowChat from "./FlowChat";
import ERPCardWithSync from "./ERPCardWithSync";

const SyncSection = () => {
  return (
    <Container className="mx-auto flex items-start gap-x-10">
      <div class="relative mt-8 flex flex-col w-full max-w-full justify-center sm:mt-20 ">
        {/* Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="false"
          animate="animate"
          className="text-center relative"
        >
          {/* Badge - RESPONSIVE */}
          <motion.div
            variants={staggerItem}
            className="mb-6 flex justify-center items-center gap-3"
          >
            <span className="inline-block px-4 py-2 rounded-full hero-badge txt-blue light-bg text-center">
              Financial data sync
            </span>
          </motion.div>

          {/* Headline - RESPONSIVE */}
          <motion.h1 className="hero-heading w-full text-center">
            Your financial {" "}
            <span className="gradient-text relative">
             data,<br />perfectly synced
            </span>
          </motion.h1>

          {/* Subheadline line - RESPONSIVE */}
          <motion.p className="section-subtitle mb-6 max-w-xl mx-auto text-center">
            Automate invoicing, payment collection and reconciliation with
            real-time integrations across your financial stack.
          </motion.p>
        </motion.div>

        {/* API call visual container */}
        <div className="w-full mt-14 hidden lg:block">
          <FlowChat />
        </div>
        {/* API call visual container */}
        <div className="w-full mt-14 lg:hidden block">
         <ERPCardWithSync/>
        </div>
      </div>
    </Container>
  );
};

export default SyncSection;
