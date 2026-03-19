import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DatabaseIcon from "../../components/svg/DatabaseIcon";

const ERPCardWithSync = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Simplified flow: just cycle between ERP and Logo
    const flow = [
      1, // erp active
      2, // logo active
    ];

    let i = 0;

    const interval = setInterval(() => {
      setStep(flow[i]);
      i++;

      if (i >= flow.length) {
        i = 0;
      }
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.25)] rounded-[20px] overflow-hidden px-4 py-8">
      {/* ERP CARD */}
      <motion.div
        animate={{
          scale: step === 1 ? 1.05 : 1,
          borderColor: step === 1 ? "#073F9E" : "#E2E8F0",
          borderWidth: step === 1 ? "2px" : "0px",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-[160px] h-[100px] bg-white shadow rounded-[14px] mx-auto border-solid"
        style={{ borderColor: step === 1 ? "#073F9E" : "transparent" }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <DatabaseIcon className="w-6 h-6" />
          <h3 className="text-sm font-semibold mt-2">ERP</h3>
          <p className="text-xs text-[#45556C]">Enterprise System</p>
        </div>
      </motion.div>
      {/* Two straight lines from ERP TO LOGO */}
      <svg className="mx-auto" width="55" height="160" viewBox="0 0 55 160">
        {/* Left line */}
        <motion.path
          d="M1 1L1 160"
          stroke="#073F9E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [-12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />

        {/* Right line */}
        <motion.path
          d="M53 1L53 160"
          stroke="#073F9E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [-12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />
      </svg>

 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#073F9E] text-xs font-medium flex flex-col items-center">
        {/* Sync Icon */}
        <motion.svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        >
          <path
            d="M4.375 17.5C4.375 14.019 5.75781 10.6806 8.21922 8.21922C10.6806 5.75781 14.019 4.375 17.5 4.375C21.1692 4.3888 24.6911 5.82053 27.3292 8.37083L30.625 11.6667"
            stroke="#073F9E"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.625 4.375V11.6667H23.3334"
            stroke="#073F9E"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.625 17.5C30.625 20.981 29.2422 24.3194 26.7808 26.7808C24.3194 29.2422 20.981 30.625 17.5 30.625C13.8308 30.6112 10.3089 29.1795 7.67083 26.6292L4.375 23.3333"
            stroke="#073F9E"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6667 23.334H4.375V30.6257"
            stroke="#073F9E"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        <div className="text-[#073F9E] text-xs font-medium">Sync</div>
      </div>

      {/* Logo */}
      <motion.div
        animate={{
          scale: step === 2 ? 1.05 : 1,
          borderColor: step === 2 ? "#073F9E" : "#E2E8F0",
          borderWidth: step === 2 ? "2px" : "0px",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-[230px] h-[100px] bg-white shadow rounded-[14px] flex items-center justify-center mx-auto border-solid"
        style={{ borderColor: step === 2 ? "#073F9E" : "transparent" }}
      >
        <img
          src="https://demo.trustymoney.in/assets/newLOGO-Cj83E8a4.svg"
          className="h-6"
          alt="Logo"
        />
      </motion.div>
    </div>
  );
};

export default ERPCardWithSync;
