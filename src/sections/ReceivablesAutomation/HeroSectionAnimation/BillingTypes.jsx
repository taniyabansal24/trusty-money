import React from "react";
import GlobeIcon from "../../../components/svg/GlobeIcon2";
import MoreOptionsIcon from "../../../components/svg/MoreOptionsIcon";
import CheckCircleIcon from "../../../components/svg/CheckCircleIcon";
import RefreshSwapIcon from "../../../components/svg/RefreshSwapIcon";
import AnalyticsSquareIcon from "../../../components/svg/AnalyticsSquareIcon";
import BillingOptions from "./BillingOptions";

const BillingTypes = () => {
  return (
    <>
      <div className="flex gap-14 p-6 justify-center">
        {/* First Card - Active Users */}
        <div className="w-[288px] bg-white border border-[#F1F5F9] rounded-2xl p-5 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <div className="flex justify-between items-start mb-6">
            <div className="w-8 h-8 bg-[#073F9E]/10 rounded-lg p-2">
              <RefreshSwapIcon />
            </div>
            <div className="bg-[#073F9E]/10 rounded px-2 py-0.5 flex items-center justify-center">
              <span className="font-bold text-[10px] text-[#073F9E]">
                ACTIVE
              </span>
            </div>
          </div>

          <div className="mb-8">
            <span className=" font-bold text-base text-[#1A1A1A]">
              Subscription Engine
            </span>
            <p className="text-[#64748B] text-xs">
              Recurring revenue automation
            </p>
          </div>

          <div className="flex gap-[4px] items-end h-20">
            <div className="w-[39.6px] h-8 bg-[#073F9E]/30 rounded-t-sm"></div>
            <div className="w-[39.6px] h-12 bg-[#073F9E]/30 rounded-t-sm"></div>
            <div className="w-[39.6px] h-11 bg-[#073F9E]/30 rounded-t-sm"></div>
            <div className="w-[39.6px] h-20 bg-[#073F9E] rounded-t-sm"></div>
            <div className="w-[39.6px] h-12 bg-[#073F9E]/30 rounded-t-sm"></div>
            <div className="w-[39.6px] h-8 bg-[#073F9E]/30 rounded-t-sm"></div>
          </div>
        </div>

        {/* Second Card - Payment Methods */}
        <div className="w-[240px] h-52 bg-white border border-[#F1F5F9] rounded-2xl p-5 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <div className="flex items-center gap-2 mb-6">
            <GlobeIcon size={16} />
            <span className="font-inter font-bold text-xs tracking-[0.6px] uppercase text-[#64748B]">
              One OF payment
            </span>
          </div>

          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex items-center gap-2">
              <div className="w-[22.8px] h-[22.8px] bg-[#F1F5F9] rounded-full flex-shrink-0"></div>
              <div className="flex-1 h-[3.8px] bg-[#F1F5F9] rounded"></div>
              <CheckCircleIcon color="#073F9E" />
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-2">
              <div className="w-[22.8px] h-[22.8px] bg-[#F1F5F9] rounded-full flex-shrink-0"></div>
              <div className="flex-1 h-[3.8px] bg-[#F1F5F9] rounded"></div>
              <CheckCircleIcon color="#073F9E" />
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-2">
              <div className="w-[22.8px] h-[22.8px] bg-[#F1F5F9] rounded-full flex-shrink-0"></div>
              <div className="flex-1 h-[3.8px] bg-[#F1F5F9] rounded"></div>
              <MoreOptionsIcon />
            </div>
          </div>
        </div>

        {/* Third Card - Progress Metrics */}
        <div className="w-[288px] bg-white border border-[#F1F5F9] rounded-2xl p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div className="flex gap-3 mb-8">
            <div className="w-[34px] h-[34px] bg-[#073F9E]/10 rounded-lg p-2">
              <AnalyticsSquareIcon className=" text-[#073F9E]" />
            </div>
            <div>
              <div className="font-inter font-bold text-sm text-[#1A1A1A]">
                Usage-Based Pricing
              </div>
              <div className="font-inter font-normal text-[10px] text-[#64748B]">
                12.4M Events processed
              </div>
            </div>
          </div>

          <div className="space-y-6 mt-14">
            {/* First Metric */}
            <div>
              <div className="flex justify-between mb-1">
                <span className=" font-normal text-[10px] text-[#64748B]">
                  Compute Hours
                </span>
                <span className="font-bold text-[10px] text-[#1A1A1A]">
                  4,502.1
                </span>
              </div>
              <div className="h-1.5 bg-[#F1F5F9] rounded-full">
                <div className="w-[202.3px] h-1.5 bg-[#073F9E] rounded-full"></div>
              </div>
            </div>

            {/* Second Metric */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-normal text-[10px] text-[#64748B]">
                  API Requests
                </span>
                <span className="font-bold text-[10px] text-[#1A1A1A]">
                  1,240,000
                </span>
              </div>
              <div className="h-1.5 bg-[#F1F5F9] rounded-full">
                <div className="w-[147.55px] h-1.5 bg-[#073F9E] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-14 ">
       <BillingOptions/>
      </div>
    </>
  );
};

export default BillingTypes;
