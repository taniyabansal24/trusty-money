import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DatabaseIcon from "../../components/svg/DatabaseIcon";
import UsersCardIcon from "../../components/svg/UsersCardIcon";
import StoreCardIcon from "../../components/svg/StoreCardIcon";
import BankCardIcon from "../../components/svg/BankCardIcon";
import DocumentIcon from "../../components/svg/DocumentIcon";
import ArrowRightIcon from "../../components/svg/ArrowRightIcon";
import CardIcon from "../../components/svg/CardIcon";
import ClockIcon from "../../components/svg/ClockIcon";

const FlowChat = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const flow = [
      1, // merchant active
      2, // merchant -> erp line
      3, // erp active
      4, // merchant line 2 + invoice creation
      5, // erp -> logo
      6, // logo -> customer
      7, // customer active
      8, // customer -> bank
      9, // bank active
      10, // bank -> logo
      11, // logo -> erp
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

  const lineColor = (trigger) => (step >= trigger ? "#073F9E" : "#E2E8F0");
  const arrowMarker = (trigger) =>
    step >= trigger ? "url(#arrowBlue)" : "url(#arrowGrey)";

  const labelActive = (trigger) =>
    step >= trigger ? "bg-[#073F9E] text-white" : "bg-[#E2E8F0] text-gray-500";

  const cardActive = (trigger) =>
    step === trigger ? "scale-[1.05] border-2 border-[#073F9E]" : "";

  return (
    <div className="relative w-full h-[684px] bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.25)] rounded-[20px] overflow-hidden px-4 py-8">
      {/* Arrow Marker Definition */}
      <svg width="0" height="0">
        <defs>
          {/* Grey arrow */}
          <marker
            id="arrowGrey"
            viewBox="0 0 12 12"
            refX="8"
            refY="6"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0 0 L12 6 L0 12 Z" fill="#E2E8F0" />
          </marker>

          {/* Blue arrow */}
          <marker
            id="arrowBlue"
            viewBox="0 0 12 12"
            refX="8"
            refY="6"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0 0 L12 6 L0 12 Z" fill="#073F9E" />
          </marker>
        </defs>
      </svg>
      {/* Merchant → ERP Line */}
      <svg className="absolute left-[94px] top-[75px]" width="370" height="217">
        {/* Grey base line */}
        <path
          d="M1 215V15C1 10 5 6 11 6H361"
          stroke="#E2E8F0"
          strokeWidth="2"
          fill="none"
        />
        {/* Animated blue line with arrow */}
        <motion.path
          d="M1 215V15C1 10 5 6 11 6H361"
          stroke={lineColor(2)}
          strokeWidth="2"
          fill="none"
          markerEnd={arrowMarker(2)}
          animate={{ pathLength: step >= 2 ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>
      {/* Merchant → ERP 2nd */}
      <svg
        className="absolute left-[175px] top-[334px]"
        width="251"
        height="12"
      >
        {/* Grey base line */}
        <path d="M1 6H242" stroke="#E2E8F0" strokeWidth="2" fill="none" />
        {/* Animated blue line with arrow */}
        <motion.path
          d="M1 6H242"
          stroke={lineColor(4)}
          strokeWidth="2"
          fill="none"
          markerEnd={arrowMarker(4)}
          animate={{ pathLength: step >= 4 ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      <motion.div
        className={`absolute left-[213px] top-[328px] flex items-center gap-1 px-3 py-1 rounded-2xl ${labelActive(4)}`}
      >
        <DocumentIcon stroke="white" size={14} />
        <span className="text-xs">Invoice Creation</span>
        <ArrowRightIcon size={14} />
      </motion.div>
      {/* ERP → Logo */}
      <svg
        className="absolute right-[39rem] top-[103px]"
        width="29"
        height="190"
      >
        {/* Grey base line */}
        <path
          d="M27 1H15C10 1 5 6 5 11V181"
          stroke="#E2E8F0"
          strokeWidth="2"
          fill="none"
        />
        {/* Animated blue line with arrow */}
        <motion.path
          d="M27 1H15C10 1 5 6 5 11V181"
          stroke={lineColor(5)}
          strokeWidth="2"
          fill="none"
          markerEnd={arrowMarker(5)}
          animate={{ pathLength: step >= 5 ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>
      <motion.div
        className={`absolute right-[37rem] top-[200px] flex items-center gap-1 px-3 py-1 rounded-2xl ${labelActive(5)}`}
      >
        <DocumentIcon stroke="white" size={14} />
        <span className="text-xs">Invoice Creation</span>
        <ArrowRightIcon size={14} />
      </motion.div>
      {/* Logo → Customer */}
      <svg
        className="absolute right-[177px] top-[318px]"
        width="251"
        height="12"
      >
        {/* Grey base line */}
        <path d="M1 6H242" stroke="#E2E8F0" strokeWidth="2" fill="none" />
        {/* Animated blue line with arrow */}
        <motion.path
          d="M1 6H242"
          stroke={lineColor(6)}
          strokeWidth="2"
          fill="none"
          markerEnd={arrowMarker(6)}
          animate={{ pathLength: step >= 6 ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      <motion.div
        className={`absolute right-[237px] top-[312px] flex items-center gap-1 px-3 py-1 rounded-2xl ${labelActive(6)}`}
      >
        <DocumentIcon stroke="white" size={14} />
        <span className="text-xs">Invoice Sent</span>
        <ArrowRightIcon size={14} />
      </motion.div>
      {/* Logo → Customer 2 */}
      <svg
        className="absolute right-[177px] top-[357px]"
        width="251"
        height="12"
      >
        {/* Grey base line */}
        <path d="M1 6H242" stroke="#E2E8F0" strokeWidth="2" fill="none" />
        {/* Animated blue line with arrow */}
        <motion.path
          d="M1 6H242"
          stroke={lineColor(6)}
          strokeWidth="2"
          fill="none"
          markerEnd={arrowMarker(6)}
          animate={{ pathLength: step >= 6 ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      <motion.div
        className={`absolute right-[224px] top-[350px] flex items-center gap-1 px-3 py-1 rounded-2xl ${labelActive(6)}`}
      >
        <DocumentIcon stroke="white" size={14} />
        <span className="text-xs">Automated Dunning</span>
        <ArrowRightIcon size={14} />
      </motion.div>
      {/* Customer → Bank */}
      <svg
        className="absolute right-[93px] bottom-[71px]"
        width="370"
        height="223"
      >
        {/* Grey base line */}
        <path
          d="M369 1V207C369 212 364 217 359 217H9"
          stroke="#E2E8F0"
          strokeWidth="2"
          fill="none"
        />
        {/* Animated blue line with arrow */}
        <motion.path
          d="M369 1V207C369 212 364 217 359 217H9"
          stroke={lineColor(8)}
          strokeWidth="2"
          fill="none"
          markerEnd={arrowMarker(8)}
          animate={{ pathLength: step >= 8 ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>
      <motion.div
        className={`absolute right-[36px] bottom-[170px] flex items-center gap-1 px-3 py-1 rounded-2xl ${labelActive(8)}`}
      >
        <CardIcon size={14} />
        <span className="text-xs">Payment Sent</span>
        <ArrowRightIcon size={14} />
      </motion.div>
      {/* Bank → Logo */}
      <svg
        className="absolute right-[528px] bottom-[135px]"
        width="12"
        height="156"
      >
        {/* Grey base line */}
        <path d="M6 155V9" stroke="#E2E8F0" strokeWidth="2" fill="none" />
        {/* Animated blue line with arrow */}
        <motion.path
          d="M6 155V9"
          stroke={lineColor(10)}
          strokeWidth="2"
          fill="none"
          markerEnd={arrowMarker(10)}
          animate={{ pathLength: step >= 10 ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      <motion.div
        className={`absolute right-[460px] bottom-[190px] flex items-center gap-1 px-3 py-1 rounded-2xl ${labelActive(10)}`}
      >
        <ClockIcon size={12} />
        <span className="text-xs">Real-time Update</span>
        <ArrowRightIcon size={14} />
      </motion.div>
      {/* Logo → ERP */}
      <svg
        className="absolute right-[438px] top-[103px]"
        width="28"
        height="191"
      >
        {/* Grey base line */}
        <path
          d="M27 189V16C27 11 22 6 17 6H9"
          stroke="#E2E8F0"
          strokeWidth="2"
          fill="none"
        />
        {/* Animated blue line with arrow */}
        <motion.path
          d="M27 189V16C27 11 22 6 17 6H9"
          stroke={lineColor(11)}
          strokeWidth="2"
          fill="none"
          markerEnd={arrowMarker(11)}
          animate={{ pathLength: step >= 11 ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>
      {/* Two straigth lines from ERP TO LOGO */}
      <svg
        className="absolute right-[515px] bottom-[392px]"
        width="55"
        height="160"
        viewBox="0 0 55 160"
      >
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

      {/* Sync Icon */}
      <motion.svg
        className="absolute right-[525px] bottom-[450px]"
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
        {" "}
        <path
          d="M4.375 17.5C4.375 14.019 5.75781 10.6806 8.21922 8.21922C10.6806 5.75781 14.019 4.375 17.5 4.375C21.1692 4.3888 24.6911 5.82053 27.3292 8.37083L30.625 11.6667"
          stroke="#073F9E"
          stroke-width="3.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
        <path
          d="M30.625 4.375V11.6667H23.3334"
          stroke="#073F9E"
          stroke-width="3.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
        <path
          d="M30.625 17.5C30.625 20.981 29.2422 24.3194 26.7808 26.7808C24.3194 29.2422 20.981 30.625 17.5 30.625C13.8308 30.6112 10.3089 29.1795 7.67083 26.6292L4.375 23.3333"
          stroke="#073F9E"
          stroke-width="3.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
        <path
          d="M11.6667 23.334H4.375V30.6257"
          stroke="#073F9E"
          stroke-width="3.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />{" "}
      </motion.svg>
      <div className="absolute right-[529px] bottom-[430px] text-[#073F9E] text-xs font-medium">Sync</div>

      <motion.div
        className={`absolute right-[337px] top-[203px] flex items-center gap-1 px-3 py-1 rounded-2xl ${labelActive(11)}`}
      >
        <DocumentIcon stroke="white" size={14} />
        <span className="text-xs">Auto Reconciliation</span>
        <ArrowRightIcon size={14} />
      </motion.div>
      {/* ERP CARD */}
      <motion.div
        animate={step === 3 || step === 11 ? { scale: 1.05 } : { scale: 1 }}
        className={`w-[160px] h-[100px] bg-white shadow rounded-[14px] mx-auto ${cardActive(3)}`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <DatabaseIcon className="w-6 h-6" />
          <h3 className="text-sm font-semibold mt-2">ERP</h3>
          <p className="text-xs text-[#45556C]">Enterprise System</p>
        </div>
      </motion.div>
      {/* Middle Cards */}
      <div className="w-full flex justify-between items-center my-[10rem]">
        {/* Merchant */}
        <motion.div
          animate={step === 1 ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`w-[160px] h-[100px] bg-white shadow rounded-[14px] ${cardActive(1)}`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <StoreCardIcon className="w-8 h-8" />
            <h3 className="text-sm font-semibold mt-2">Merchant</h3>
            <p className="text-xs text-[#45556C]">Invoice Creator</p>
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          animate={
            step === 5 || step === 6 || step === 10
              ? { scale: 1.05 }
              : { scale: 1 }
          }
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`w-[230px] h-[100px] bg-white shadow rounded-[14px] flex items-center justify-center ${
            step === 5 || step === 6 || step === 10
              ? "border-2 border-[#073F9E]"
              : ""
          }`}
        >
          <img
            src="https://demo.trustymoney.in/assets/newLOGO-Cj83E8a4.svg"
            className="h-6"
          />
        </motion.div>

        {/* Customer */}
        <motion.div
          animate={step === 7 ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`w-[160px] h-[100px] bg-white shadow rounded-[14px] ${cardActive(7)}`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <UsersCardIcon className="w-8 h-8" />
            <h3 className="text-sm font-semibold mt-2">Customer</h3>
            <p className="text-xs text-[#45556C]">Invoice Recipient</p>
          </div>
        </motion.div>
      </div>
      {/* Bank */}
      <motion.div
        animate={step === 9 ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`w-[160px] h-[100px] bg-white shadow rounded-[14px] mx-auto ${cardActive(9)}`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <BankCardIcon className="w-8 h-8" />
          <h3 className="text-sm font-semibold mt-2">Bank</h3>
          <p className="text-xs text-[#45556C]">Payment Gateway</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FlowChat;
