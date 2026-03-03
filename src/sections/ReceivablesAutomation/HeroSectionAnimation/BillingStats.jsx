import React from "react";
import RefreshAnalyticsIcon from "../../../components/svg/RefreshAnalyticsIcon";
import ClockIcon from "../../../components/svg/ClockIcon";
import AnalyticsSquareIcon from "../../../components/svg/AnalyticsSquareIcon";

const BillingStats = () => {
  return (
    <div className="relative flex flex-col items-center pb-6 ">
      {/* Top Card */}
      <div className="relative z-10 bg-white shadow-md rounded-lg px-8 py-4 flex items-center gap-4">
        <ClockIcon size={22} color="#073F9E" />
        <span className="text-[#073F9E] font-medium text-lg">
          One Of Payment
        </span>
      </div>

      {/* Vertical Line */}
      <div className="absolute top-[100px]">
        <svg width="2" height="150" viewBox="0 0 2 150" fill="none">
          <line
            x1="1.5"
            y1="0"
            x2="0.5"
            y2="150"
            stroke="#073F9E"
            strokeOpacity="0.2"
          />
        </svg>
      </div>

      {/* Middle Section */}
      <div className="relative w-full max-w-3xl flex justify-between items-start mt-8">
        {/* Left Card */}
        <div className="relative z-10 bg-white shadow-md rounded-lg px-6 py-3 flex items-center gap-4">
          <RefreshAnalyticsIcon size={26} className="text-[#073F9E]" />
          <span className="text-[#073F9E] font-medium">
            Subscription Engine
          </span>

          {/* Left Curve */}
          <div className="absolute -bottom-[90px] -right-[8rem] ">
            <svg
              width="111"
              height="117"
              viewBox="0 0 111 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0781397 5.10695C99.5169 -10.5926 107.288 10.8324 109.859 116.226"
                stroke="#073F9E"
                stroke-opacity="0.2"
              />
            </svg>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative z-10 bg-white shadow-md rounded-lg px-6 py-3 flex items-center gap-4">
          <AnalyticsSquareIcon className="text-[#073F9E]" />
          <span className="text-[#073F9E] font-medium">
            Usage-Based Pricing
          </span>

          {/* Right Curve */}
          <div className="absolute -bottom-[90px] -left-[8rem]">
            <svg
              width="102"
              height="114"
              viewBox="0 0 102 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M101 2.08039C6.31774 -5.98497 -0.358673 14.6845 0.571841 113.96"
                stroke="#073F9E"
                stroke-opacity="0.2"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="relative z-10 bg-white shadow-md rounded-lg px-8 py-4 flex items-center justify-center mt-12">
        <a href="/">
          <img
            src="https://demo.trustymoney.in/assets/newLOGO-Cj83E8a4.svg"
            alt="Trusty Money Logo"
            className="h-6 object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default BillingStats;
