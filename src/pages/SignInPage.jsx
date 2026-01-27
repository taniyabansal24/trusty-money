// src/pages/SignInPage.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "../components/layout";
import { Button } from "../components/ui";
import MapBackgroundWrapper from "../components/layout/MapBackgroundWrapper";
import UserShieldIcon from "../components/svg/UserShieldIcon";

// Helper function to merge class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Custom Input Component
const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm text-gray-800 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

// BackgroundSection - EXACTLY the same as HeroSection
const BackgroundSection = () => {
  return (
    <section className="relative w-auto h-lvh flex flex-col items-start overflow-hidden">
      {/* Main Section Container - matching original padding */}
      <div
        className="relative w-full h-full flex flex-col items-start"
        style={{
          padding: "160px 0px 0px 0px",
          isolation: "isolate",
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
        }}
      >
        {/* Container - Primary gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #E9F8FF 0%, #FDFEFF 100%)",
            zIndex: "0",
          }}
        ></div>

        {/* Background+Blur - Circle on right side */}
        <div
          className="absolute"
          style={{
            width: "501px",
            height: "499px",
            right: "-160px",
            top: "-160px",
            background: "#FFFFFF",
            mixBlendMode: "multiply",
            opacity: "0.3",
            filter: "blur(12px)",
            borderRadius: "9999px",
            zIndex: "0",
          }}
        ></div>

        {/* Gradient+Blur - Bottom overlay */}
        <div
          className="absolute left-0 right-0"
          style={{
            height: "96px",
            bottom: "-32px",
            background:
              "linear-gradient(180deg, rgba(245, 248, 255, 0) 0%, rgba(245, 248, 255, 0.55) 50%, #F8FAFC 100%)",
            filter: "blur(4px)",
            zIndex: "1",
          }}
        ></div>
      </div>
    </section>
  );
};

const SignInCard = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in attempt with:", { email, password, rememberMe });
  };

  return (
    <div className="flex w-full h-full items-center justify-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg overflow-hidden rounded-2xl flex bg-white shadow-xl"
      >
        {/* Right side - Sign In Form */}
        <div className="w-full p-8 md:p-10 flex flex-col justify-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-2">
              <h1 className="section-hero-heading gradient-text mb-2">
                Welcome back
              </h1>
              <p className="section-subtitle mb-3">Sign in to your account</p>
            </div>

            <div className="mb-6">
              <button
                className="w-full flex items-center justify-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-100 transition-all duration-300 text-gray-700 shadow-sm font-medium"
                type="button"
              >
                <UserShieldIcon className="w-6 h-6" />

                <span className="font-medium">Sign in with Admin</span>
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500 text-body">
                  or sign in with email
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address <span className="txt-blue">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="bg-gray-50 border-gray-200 placeholder:text-gray-400 text-gray-800 w-full focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password <span className="txt-blue">*</span>
                  </label>
                  <a
                    href="#"
                    className="text-sm txt-blue hover:text-blue-600 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("Forgot password clicked");
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="bg-gray-50 border-gray-200 placeholder:text-gray-400 text-gray-800 w-full pr-10 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    aria-label={
                      isPasswordVisible ? "Hide password" : "Show password"
                    }
                  >
                    {isPasswordVisible ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Button
                    type="submit"
                    variant="primary"
                    shimmer={isHovered}
                    className="min-w-[27rem]"

                  >
                    <span className="flex items-center justify-center">
                      Sign in
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </motion.div>
              </div>

              <div className="text-center">
                <p className="text-body text-gray-600">
                  Don't have an account?{" "}
                  <a
                    href="/sign-up"
                    className="txt-blue hover:text-blue-600 font-medium transition-colors"
                  >
                    Sign up here
                  </a>
                </p>
              </div>
            </form>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-muted text-center">
                By signing in, you agree to our{" "}
                <a href="#" className="txt-blue hover:text-blue-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="txt-blue hover:text-blue-600">
                  Privacy Policy
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const SignInPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background (absolute) */}
      <div className="absolute inset-0 z-0">
        <BackgroundSection />
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center pt-16">
        <SignInCard />
      </main>

      {/* Bottom Map */}
      <div className="pt-20 md:pt-24">
        <MapBackgroundWrapper />
      </div>
    </div>
  );
};

export default SignInPage;
