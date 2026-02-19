// src/pages/SignUpPage.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui";
import { Navbar } from "../components/layout";
import MapBackgroundWrapper from "../components/layout/MapBackgroundWrapper";

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

// BackgroundSection - Same as HeroSection and SignInPage
const BackgroundSection = () => {
  return (
    <section className="relative w-auto h-full flex flex-col items-start overflow-hidden">
      {/* Main Section Container - matching original padding */}
      <div
        className="relative w-full h-[100vh] flex flex-col items-start"
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

const SignUpCard = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    agreeTerms: false,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="flex w-full h-full items-center justify-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl overflow-hidden rounded-2xl flex bg-white shadow-xl"
      >
       
        <div className="w-full px-8 md:px-10 py-6 flex flex-col justify-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-2">
              <h1 className="section-hero-heading gradient-text mb-2">
                Create your account

              </h1>
              <p className="section-subtitle mb-3">
                Join the future of cross-border business

              </p>
            </div>

            {/* <div className="mb-4">
              <button
                className="w-full flex items-center justify-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-100 transition-all duration-300 text-gray-700 shadow-sm font-medium"
                type="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="font-medium">Sign up with Google</span>
              </button>
            </div> */}

            <div className="relative my-12">
              {/* <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500 text-body">
                  or register with email
                </span>
              </div> */}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name <span className="txt-blue">*</span>
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                    className="bg-gray-50 border-gray-200 placeholder:text-gray-400 text-gray-800 w-full focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name <span className="txt-blue">*</span>
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                    className="bg-gray-50 border-gray-200 placeholder:text-gray-400 text-gray-800 w-full focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company Name <span className="txt-blue">*</span>
                </label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  required
                  className="bg-gray-50 border-gray-200 placeholder:text-gray-400 text-gray-800 w-full focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="txt-blue">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="bg-gray-50 border-gray-200 placeholder:text-gray-400 text-gray-800 w-full focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password <span className="txt-blue">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={isPasswordVisible ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      required
                      className="bg-gray-50 border-gray-200 placeholder:text-gray-400 text-gray-800 w-full pr-10 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                      {isPasswordVisible ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Confirm Password <span className="txt-blue">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      required
                      className="bg-gray-50 border-gray-200 placeholder:text-gray-400 text-gray-800 w-full pr-10 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() =>
                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                      }
                    >
                      {isConfirmPasswordVisible ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="agreeTerms" className="text-body text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="txt-blue hover:text-blue-600">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="txt-blue hover:text-blue-600">
                    Privacy Policy
                  </a>{" "}
                  <span className="txt-blue">*</span>
                </label>
              </div>

              <div className=" flex justify-center">
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
                    className="min-w-[31rem]"
                  >
                    <span className="flex items-center justify-center">
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </motion.div>
              </div>

              <div className="text-center">
                <p className="text-body text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="/sign-in"
                    className="txt-blue hover:text-blue-600 font-medium transition-colors"
                  >
                    Sign in here
                  </a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const SignUpPage = () => {
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
      <main className="relative z-10 flex items-center justify-center pt-24">
        <SignUpCard />
      </main>

      {/* Bottom Map */}
      <div className="pt-20 md:pt-24 mt-24">
        <MapBackgroundWrapper />
      </div>
    </div>
  );
};

export default SignUpPage;