// SecuritySection.jsx
import React from "react";
import { Container } from "../components/ui";
import { Lock, FileText, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";
import VerifiedIcon from "../components/svg/VerifiedIcon";

const SecuritySection = () => {
  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise-grade security",
      description:
        "Bank-level encryption and security protocols to protect every transaction",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "AML & sanctions screening",
      description:
        "Automated compliance checks against global watchlists in real-time",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Audit-ready documentation",
      description:
        "Complete transaction trails and compliance reports at your fingertips",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global compliance",
      description:
        "Built to meet GDPR, PSD2, and international compliance standards",
    },
  ];

  const certifications = [
    "SOC 2 Type II",
    "ISO 27001",
    "PCI DSS",
    "GDPR Compliant",
  ];

  const networkActivity = [
    34, 40, 44, 52, 51, 48, 30, 20, 18, 14, 14, 18, 29, 33, 39, 43, 51, 47, 35,
    34, 13, 9, 10, 12,
  ];

  return (
    <Container className="">
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.h1
          variants={staggerItem}
          className="section-hero-heading text-gray-900"
        >
          Built for{" "}
          <span className="gradient-text relative">
            Trust, Security & Compliance
          </span>
        </motion.h1>
        <p className="section-subtitle max-w-lg mx-auto">
          Enterprise-ready infrastructure designed with security and regulatory
          compliance at its core
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Features */}
        <div className="space-y-8 w-[27rem]">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center">
                  <div className="text-white">{feature.icon}</div>
                </div>
              </div>
              <div className="mb-10">
                <h3 className="feature-title text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="feature-description text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Security Monitor */}
        <div>
          {/* Monitor Panel */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 mb-8">
            {/* Header */}
            <div className="bg-gradient-to-b from-gray-900 to-blue-900 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-white text-sm font-mono">
                    security_monitor
                  </span>
                </div>
                <div className="text-green-400 text-xs opacity-80">● LIVE</div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-gray-50 p-6">
              {/* Status Lines */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 font-mono text-sm text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>Initializing security protocols...</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-sm text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>AML screening engine:</span>
                  <span className="text-blue-900 font-medium">ACTIVE</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-sm text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>Encryption layer:</span>
                  <span className="text-blue-900 font-medium">256-BIT AES</span>
                </div>
              </div>

              <div className="border-t border-gray-300 my-6"></div>

              {/* Metrics */}
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-gray-600">
                      Compliance Score
                    </span>
                    <span className="font-mono text-sm text-gray-900 font-medium">
                      99.87%
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-900 rounded-full w-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-gray-600">
                      Threat Detection
                    </span>
                    <span className="font-mono text-sm text-gray-900 font-medium">
                      MONITORING
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900 to-transparent animate-pulse"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-gray-600">
                      Audit Trail
                    </span>
                    <span className="font-mono text-sm text-gray-900 font-medium">
                      RECORDING
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-300 my-6"></div>

              {/* Network Activity */}
              <div>
                <div className="font-mono text-sm text-gray-600 mb-4">
                  Network Activity
                </div>
                <div className="h-20 flex items-end gap-1 mb-2">
                  {networkActivity.map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-blue-900 rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-mono">
                  <span>00:00</span>
                  <span>12:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-gray-500 text-sm mb-1">
                Threats Blocked Today
              </div>
              <div className="text-3xl text-gray-900 font-normal mb-1">
                1,247
              </div>
              <div className="text-green-600 text-sm">+12% from yesterday</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="text-gray-500 text-sm mb-1">Active Sessions</div>
              <div className="text-3xl text-gray-900 font-normal mb-1">847</div>
              <div className="text-blue-900 text-sm">Monitoring live</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Footer */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h3 className="feature-title txt-blue ">
            Certified & Compliant
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-14">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative flex items-center h-[45.46px] w-fit px-[8.8px] py-[12.47px] bg-[#F2F7FF] rounded-[10px] box-border"
            >
              {/* Certification icon */}
              
                <VerifiedIcon className="w-4 h-4 txt-blue" />
        

              {/* Certification text */}
              <span className="text-[14px] leading-[20px] font-normal text-[#1B1B1B] ml-2">
                {cert}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SecuritySection;
