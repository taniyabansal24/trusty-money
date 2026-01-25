import React from "react";
import { Container } from "../components/ui";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";
import SecureCardIcon from "../components/svg/SecureCardIcon";
import Logo from "../components/svg/Logo";
import Tax from "../components/svg/Tax";
import Billing from "../components/svg/Billing";
import Treasury from "../components/svg/Treasury";
import EwalletIcon from "../components/svg/EwalletIcon";
import ProfileCardIcon from "../components/svg/ProfileCardIcon";
import InfoCircleIcon from "../components/svg/InfoCircleIcon";
import DatabaseIcon from "../components/svg/DatabaseIcon";
import GlobeIcon from "../components/svg/GlobeIcon";
import {founderImage} from "../assets/homeFounder.svg";
import {sunilSimarImage} from "../assets/sunil-simar.webp";

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
      <Container className="">
        <div className="w-full min-h-screen bg-white mt-16">
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
                    <h2 className="feature-title text-[#0F172B] ">
                      Who We Are
                    </h2>
                  </div>

                  <p className="feature-description text-[#314158]">
                    Trusty Money is a financial infrastructure company building
                    a modern operating system for cross-border commerce.
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
                  <h2 className="feature-title text-[#0F172B] mt-5">
                    Why now?
                  </h2>
                  <p className="feature-description text-[#314158]">
                    Globalization has accelerated, but financial infrastructure
                    hasn't kept pace. Businesses face fragmented systems, hidden
                    costs, and compliance hurdles.
                  </p>
                </div>
              </div>

              {/* Right Column - Solar System Orbital Motion */}
              <div className="lg:sticky lg:top-32">
                <div className="w-full aspect-square max-w-[750px] mx-auto relative top-[-32%]">
                  {/* Main Orbital System Container */}
                  <div className="relative w-full h-full">
                    {/* Center Logo */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                      <div className="w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center">
                        <Logo width={38} height={38} />
                      </div>
                    </div>

                    {/* Four Orbit Lines (Static) */}
                    <div className="absolute inset-0 border-2 border-[#073F9E] rounded-full opacity-30"></div>
                    <div className="absolute inset-14 border-2 border-[#073F9E] rounded-full opacity-30"></div>
                    <div className="absolute inset-28 border-2 border-[#073F9E] rounded-full opacity-30"></div>
                    <div className="absolute inset-44 border-2 border-[#073F9E] rounded-full opacity-30"></div>

                    {/* Orbiting Cards with Proper Counter-Rotation */}

                    {/* Outer Orbit Ring (Tax & Treasury) */}
                    <motion.div
                      className="absolute inset-0"
                      {...orbitAnimations.outer}
                    >
                      {/* Tax - Top Position */}
                      <motion.div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        {...counterRotateAnimations.outer}
                      >
                        <div className="transform scale-[0.8] hover:scale-95 transition-transform duration-300">
                          <Tax />
                        </div>
                      </motion.div>

                      {/* Treasury - Bottom Position */}
                      <motion.div
                        className="absolute bottom-[136px] right-[26%] transform -translate-x-1/2 translate-y-1/2"
                        {...counterRotateAnimations.outer}
                      >
                        <div className="transform scale-[0.8] hover:scale-95 transition-transform duration-300">
                          <Treasury />
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Middle Orbit Ring (E-wallet & Billing) */}
                    <motion.div
                      className="absolute inset-14"
                      {...orbitAnimations.middle}
                    >
                      {/* Billing - Right Position */}
                      <motion.div
                        className="absolute top-[85%] right-0 transform translate-x-1/2 -translate-y-1/2"
                        {...counterRotateAnimations.middle}
                      >
                        <div className="transform scale-[0.8] hover:scale-95 transition-transform duration-300">
                          <Billing />
                        </div>
                      </motion.div>

                      {/* E-wallet - Left Position */}
                      <motion.div
                        className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"
                        {...counterRotateAnimations.middle}
                      >
                        <div className="transform scale-[0.8] hover:scale-95 transition-transform duration-300">
                          <EwalletIcon />
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Connecting Lines from Center to Orbits */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
                      {/* Line to Top (Tax) */}
                      <line
                        x1="50%"
                        y1="50%"
                        x2="50%"
                        y2="10%"
                        stroke="#073F9E"
                        strokeWidth="1"
                        strokeDasharray="4"
                        className="opacity-30"
                      />

                      {/* Line to Right (Billing) */}
                      <line
                        x1="50%"
                        y1="50%"
                        x2="90%"
                        y2="50%"
                        stroke="#073F9E"
                        strokeWidth="1"
                        strokeDasharray="4"
                        className="opacity-30"
                      />

                      {/* Line to Bottom (Treasury) */}
                      <line
                        x1="50%"
                        y1="50%"
                        x2="50%"
                        y2="90%"
                        stroke="#073F9E"
                        strokeWidth="1"
                        strokeDasharray="4"
                        className="opacity-30"
                      />

                      {/* Line to Left (E-wallet) */}
                      <line
                        x1="50%"
                        y1="50%"
                        x2="10%"
                        y2="50%"
                        stroke="#073F9E"
                        strokeWidth="1"
                        strokeDasharray="4"
                        className="opacity-30"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Why Trusty Money Exists Section */}
          <section className="subsection">
            <div className="flex items-center justify-center gap-3 h-[56px]">
              <ProfileCardIcon className="w-14 h-14" />
              <h2 className="sub-section-heading text-center text-[#0F172B]">
                Why Trusty Money Exists
              </h2>
            </div>
            {/* Two-column content section */}
            <div className="w-full mx-auto flex gap-8 mt-10">
              {/* Left Column: The Problem */}
              <div className="flex-1 bg-[#F1F7FE] rounded-[34px] p-8 flex flex-col gap-6">
                <h3 className="feature-title text-[#073F9E]">The Problem</h3>

                <div className="flex flex-col gap-4">
                  {[
                    "Fragmented banking systems",
                    "Inconsistent tax rules",
                    "Opaque FX pricing",
                    "Disconnected financial tools",
                  ].map((text, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 h-[48px] px-3 bg-white/60 rounded-[10px]"
                    >
                      {/* Icon */}
                      <div className="w-6 h-6 flex items-center justify-center">
                        <InfoCircleIcon size={56} />
                      </div>

                      {/* Text */}
                      <span className="feature-description text-[#314158]">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Our Solution */}
              <div className="flex-1 bg-[#F1F7FE] rounded-[34px] p-8 flex flex-col gap-6">
                {/* Heading */}
                <div className="flex items-center gap-2">
                  {/* <div className="w-2 h-2 bg-[#073F9E] rounded-full"></div> */}
                  <h3 className="feature-title text-[#073F9E]">Our Solution</h3>
                </div>

                {/* Body */}
                <p className="feature-description text-[#314158]">
                  Most solutions solve one part of the problem — payments,
                  compliance, or FX — but fail to connect them together.
                </p>

                {/* Highlight */}
                <p className="feature-description text-[#073F9E] mt-8 font-bold">
                  Trusty Money unifies these layers into a single, connected
                  financial platform.
                </p>
              </div>
            </div>
            <div className="w-full mx-auto mt-8 p-8 bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] border border-[#E2E8F0] rounded-[24px]">
              <div className="flex items-center gap-3 mb-4">
                {/* Icon */}
                <DatabaseIcon className="w-10 h-10" />

                {/* Heading */}
                <h2 className="section-subtitle font-bold text-[#0F172B]">
                  How We Think About Infrastructure
                </h2>
              </div>

              {/* Paragraph */}
              <p className="text-body leading-[39px] text-[#1D293D]">
                Trusty Money is built to{" "}
                <span className="text-[#073F9E] font-medium">
                  disappear into your workflows
                </span>{" "}
                — handling complexity quietly and reliably in the background.
              </p>
            </div>
          </section>

          {/* Team Section */}
          <section className="subsection">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center">
              {/* Icon + Heading */}
              <div className="flex items-center justify-center gap-3 h-[56px]">
                <ProfileCardIcon className="w-14 h-14" />
                <h2 className="sub-section-heading text-[#0F172B] pb-3 ">
                  Our Leadership Team
                </h2>
              </div>

              {/* Subtitle */}
              <p className="mt-4 section-subtitle ">
                Led by experienced professionals from leading fintech
                institutions
              </p>
            </div>

            {/* Founder */}
            <div className="w-full bg-[#F0F6FE] rounded-[31px] p-10 grid grid-cols-[420px_1fr] gap-14 my-10">
              {/* Left */}
              <div className="flex flex-col items-center">
                <div className="w-[230px] h-[260px] border-4 border-[#073F9E] rounded-[30px] overflow-hidden bg-gray-300 flex items-center justify-center">
                 <img src={founderImage} alt="" className="w-full h-full object-cover"/>
                </div>

                <h3 className="mt-6 section-subtitle font-bold text-[#073F9E]">
                  Founder & CEO
                </h3>

                <p className=" feature-description text-[#45556C] text-center">
                  Finance & Technology Expert
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-2">
                <div>
                  <h4 className="feature-title font-bold text-[#073F9E]">
                    Global Experience
                  </h4>
                  <p className="feature-description text-[#45556C]">
                    Over 12 years of rich and diverse experience across global
                    markets including India, USA, Singapore, and Africa.
                    Professional journey spans key roles in private equity,
                    hedge funds, and structured finance, along with senior
                    leadership positions in prominent tech startups.
                  </p>
                </div>

                <div>
                  <h4 className="feature-title font-bold text-[#073F9E]">
                    Investment Expertise
                  </h4>
                  <p className="feature-description text-[#45556C]">
                    Successfully closed $2 billion+ in cross-border structured
                    finance transactions in the private credit space during
                    tenure at Deutsche Bank. Strategic acumen in navigating
                    complex financial landscapes driving substantial growth and
                    value creation.
                  </p>
                </div>
                <div>
                  <h4 className="feature-title font-bold text-[#073F9E]">
                    Education
                  </h4>
                  <p className="feature-description text-[#45556C]">
                    MBA in Finance and Investing from Columbia Business School,
                    honored with the Board of Overseers India Fellowship - a
                    full merit-based scholarship. Bachelor of Technology in
                    Civil Engineering from IIT Roorkee.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Team Member - Founding Engineer */}

            <div className="w-full bg-[#F0F6FE] rounded-[31px] p-10 grid grid-cols-[420px_1fr] gap-14 mt-10">
              {/* Left */}
              <div className="flex flex-col items-center">
                <div className="w-[230px] h-[260px] border-4 border-[#073F9E] rounded-[30px] overflow-hidden bg-gray-300 flex items-center justify-center">
                  <img src={sunilSimarImage} alt="" className="pt-36" />
                </div>

                <h3 className="mt-6 section-subtitle font-bold text-[#073F9E]">
                  Founding Engineer
                </h3>

                <p className=" feature-description text-[#45556C] text-center">
                  Platform Architecture & Blockchain Expertise
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-2">
                <div>
                  <h4 className="feature-title font-bold text-[#073F9E]">
                    Education
                  </h4>
                  <p className="feature-description text-[#45556C]">
                    Metallurgy Engineering from IIT Roorkee
                  </p>
                </div>

                <div>
                  <h4 className="feature-title font-bold text-[#073F9E]">
                    Full-Stack Expertise
                  </h4>
                  <p className="feature-description text-[#45556C]">
                    React, Node.js, Golang, Rust, MongoDB, PostgreSQL, TRPC,
                    WebRTC, C++ and more
                  </p>
                </div>

                <div>
                  <h4 className="feature-title text-[#073F9E]">Blockchain</h4>
                  <p className="feature-description text-[#45556C]">
                    Solana/Ethereum development
                  </p>
                </div>

                <div>
                  <h4 className="feature-title font-bold text-[#073F9E]">
                    Experience
                  </h4>
                  <p className="feature-description text-[#45556C]">
                    Solana Blockchain Developer Program and Headstater AI
                    Fellowship - building scalable blockchain and AI-powered
                    solutions
                  </p>
                </div>
                <div>
                  <h4 className="feature-title font-bold text-[#073F9E]">
                    Technical Foundation
                  </h4>
                  <p className="feature-description text-[#45556C]">
                    Multi-rail infrastructure operational with enterprise
                    performance
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="subsection">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center">
              {/* Icon + Heading */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 shrink-0 bg-gradient-to-br from-[#0B43A0] to-[#073F9E] rounded-xl flex items-center justify-center shadow-lg">
                  <GlobeIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="sub-section-heading leading-none text-[#0F172B] mb-0">
                  Our Vision
                </h2>
              </div>
            </div>

            <div className="w-full mx-auto mt-8 p-8 bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] border border-[#E2E8F0] rounded-[24px]">
              {/* Paragraph */}
              <p className="text-body text-[#1D293D]">
                We envision a world where cross-border commerce feels as
                seamless as domestic business. A world where companies can
                expand globally without rebuilding financial infrastructure for
                every new market. Trusty Money is building the foundation for
                that future.
              </p>
              {/* Highlight */}
                <p className="feature-description text-[#073F9E] mt-16 font-bold">
                  Trusty Money unifies these layers into a single, connected
                  financial platform.
                </p>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default AboutUsSection;
