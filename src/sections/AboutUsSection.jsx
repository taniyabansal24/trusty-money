import React from "react";
import { Container } from "../components/ui";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";
import SecureCardIcon from "../components/svg/SecureCardIcon";
import AutoDispatchAnimation from "./AboutUs/AutoDispatchAnimation";
import KeyChallenges from "./AboutUs/KeyChallenges";
import TeamSection from "./AboutUs/TeamSection";

const AboutUsSection = () => {
  // Rotating animation for orbit rings
  const orbitAnimations = {
    outer: {
      animate: { rotate: 360 },
      transition: {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
      },
    },
    middle: {
      animate: { rotate: 360 },
      transition: {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
      },
    },
    inner: {
      animate: { rotate: 360 },
      transition: {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
      },
    },
  };

  // Counter-rotation for each icon (to keep them upright)
  const counterRotateAnimations = {
    outer: {
      animate: { rotate: -360 },
      transition: {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
      },
    },
    middle: {
      animate: { rotate: -360 },
      transition: {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
      },
    },
    inner: {
      animate: { rotate: -360 },
      transition: {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
      },
    },
  };

  return (
    <>
      <div className="bg-transparent backdrop-blur-md shadow-md border-slate-200/40 h-16 lg:h-20"></div>
      <Container className="w-full min-h-screen bg-white mt-16">
        {/* Main Hero Section */}
        <section>
          {/* Header Section */}
          <div className="text-left">
            {/* About Us Heading */}
            <div className="flex justify-left ">
              <motion.div
                variants={staggerItem}
                className="mb-4 flex items-center gap-3"
              >
                <span
                  className="inline-block px-4 py-2 rounded-full hero-badge"
                  style={{ backgroundColor: "#073f9e12", color: "#073f9e" }}
                >
                  About Us
                </span>
              </motion.div>
            </div>

            <motion.h1
              variants={staggerItem}
              className="section-hero-heading text-gray-900"
            >
              Building the Financial Infrastructure <br />
              <span className="gradient-text relative">
                for Global Commerce
              </span>
            </motion.h1>
            <p className="section-subtitle max-w-xl ">
              Unifying billing, compliance, payments, and treasury into a
              single, coherent platform
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mt-10">
            {/* Left Column - Text Content */}
            <div>
              {/* Who We Are Section */}
              <div className="mb-10">
                <div className="flex">
                  <SecureCardIcon className="w-9 h-9" />
                  <h2 className="feature-title text-[#0F172B] ">Who We Are</h2>
                </div>

                <p className="feature-description text-[#314158]">
                  Trusty Money is a financial infrastructure company building a
                  modern operating system for cross-border commerce.
                </p>

                <p className="feature-description text-[#314158] mt-2">
                  We are not a payment gateway with add-ons. We are rebuilding
                  the core financial layers that global businesses rely on –
                  billing, compliance, payments, treasury, and reporting – as
                  modular, programmable products.
                </p>

                {/* "Us -:" Section */}
                <div>
                  <h2 className="feature-title text-[#0F172B] mt-5">Us -:</h2>
                  <p className="feature-description text-[#314158]">
                    Our platform is designed for businesses that operate
                    globally by default and need financial systems that scale
                    with complexity, not against it.
                  </p>
                </div>
              </div>

              {/* Why Now Section */}
              <div>
                <h2 className="feature-title text-[#0F172B] mt-5">Why now?</h2>
                <p className="feature-description text-[#314158]">
                  Globalization has accelerated, but financial infrastructure
                  hasn't kept pace. Businesses face fragmented systems, hidden
                  costs, and compliance hurdles.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative mx-auto top-0 lg:top-[-37%] hidden sm:block">
              <AutoDispatchAnimation />
            </div>
          </div>
        </section>

        {/* Key Challenges Section */}
        <section className="pb-20 md:pb-24">
          <KeyChallenges />
        </section>

        {/* Team Section */}
        <section className="section">
          <TeamSection />
        </section>

      </Container>
    </>
  );
};

export default AboutUsSection;
