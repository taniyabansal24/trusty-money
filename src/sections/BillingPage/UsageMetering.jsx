import React, { useEffect, useState, useRef } from "react";
import { staggerContainer, staggerItem } from "../../utils/animations";
import { motion } from "framer-motion";
import DotContainer from "./DotContainer";

const UsageMetering = () => {
  return (
    <>
      {/* ADD: Debug controls (remove in production) */}
      {/* {process.env.NODE_ENV === 'development' && <DebugControls />} */}

      <div class="relative mt-8 flex flex-col w-full max-w-full justify-center sm:mt-20 ">
        {/* Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="false"
          animate="animate"
          className="text-center relative mb-40"
        >
          {/* Badge - RESPONSIVE */}
          <motion.div
            variants={staggerItem}
            className="mb-6 flex justify-center items-center gap-3"
          >
            <span className="inline-block px-4 py-2 rounded-full hero-badge txt-blue light-bg text-center">
               Smart usage tracking
            </span>
          </motion.div>

          {/* Headline - RESPONSIVE */}
          <motion.h1 className="hero-heading w-full text-center ">
            Usage infrastructure {" "}
            <span className="gradient-text relative">that  <br /> drives billing</span>
          </motion.h1>

          {/* Subheadline line - RESPONSIVE */}
          <motion.p className="section-subtitle mb-6 max-w-xl mx-auto text-center ">
            Spend more time building your core product and less time managing
            custom pipelines, data processing, and usage calculations. Built for
            businesses with flexible pricing models and custom contracts.
          </motion.p>
        </motion.div>
        {/* API call visual container */}
        <div className="relative z-[-1] mt-28 w-full">
          <DotContainer />
        </div>
      </div>
    </>
  );
};

export default UsageMetering;
