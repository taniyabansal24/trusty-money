import React from "react";
import { Container, Button } from "../ui";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../utils/animations";

const CallToAction = () => {
  return (
    <Container className="">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-10">
          <motion.h1
            variants={staggerItem}
            className="section-hero-heading text-gray-900"
          >
            Build Your Cross-Border Stack <br />
            <span className="gradient-text relative">
              - One Layer at a Time
            </span>
          </motion.h1>
          <p className="section-subtitle max-w-2xl mx-auto ">
            Start with the infrastructure you need today. Scale with confidence
            as your business grows globally.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="primary" size="md" shimmer>
            Request a Demo
          </Button>
          <Button variant="secondary" size="md">
            Talk to Sales
          </Button>
        </div>

        {/* Trust Indicators */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
          {[
            "Enterprise-grade security",
            "SOC 2 Type II certified",
            "Trusted by 500+ companies",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 text-gray-700"
            >
              <span className="text-muted">{item}</span>
            </div>
          ))}
        </div> */}
      </div>
    </Container>
  );
};

export default CallToAction;
