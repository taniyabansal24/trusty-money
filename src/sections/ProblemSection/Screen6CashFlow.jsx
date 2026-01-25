import React from "react";
import BarChartIcon from "../../components/svg/BarChartIcon";
import ClockHistoryIcon from "../../components/svg/ClockHistoryIcon";
import ArrowUpIcon from "../../components/svg/ArrowUpIcon";


const Screen6CashFlow = React.forwardRef((props, ref) => {
  const { screen6CardsRef } = props;
  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-[#f0f7ff] rounded-[34px] overflow-hidden"
    >
      <div className="w-full h-full bg-white flex flex-col px-6 py-12">
        {/* HEADER */}
        <div className="problem-screen-header flex items-center justify-between mb-6">
          <div>
            <div className="text-xs text-[#425466]">Cash Flow</div>
            <h3 className="text-[#0A2540] text-lg">Financial overview</h3>
          </div>

          <div className="w-8 h-8 bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-full flex items-center justify-center overflow-hidden">
            <BarChartIcon className="w-5 h-5" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-3 flex-1">
          {/* OUTSTANDING */}
          <div
            ref={(el) => (screen6CardsRef.current[0] = el)}
            className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl p-5 shadow-lg border-2 border-[#dbeafe] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-full -mr-8 -mt-8" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpIcon className="w-7 h-7" />
                <span className="text-xs text-[#425466]">Outstanding</span>
              </div>
              <div className="text-xl text-[#0A2540] mb-1">$1.2M</div>
              <div className="text-xs text-[#425466]">Across 47 invoices</div>
            </div>
          </div>

          {/* AVG SETTLEMENT */}
          <div
            ref={(el) => (screen6CardsRef.current[1] = el)}
            className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl p-5 shadow-lg border-2 border-[#dbeafe] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-full -mr-8 -mt-8" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <ClockHistoryIcon size={34} />
                <span className="text-xs text-[#425466]">Avg settlement</span>
              </div>
              <div className="text-xl text-[#0A2540] mb-1">14 days</div>
              <div className="text-xs text-[#425466]">Industry avg: 7 days</div>
            </div>
          </div>

          {/* BREAKDOWN */}
          <div
            ref={(el) => (screen6CardsRef.current[2] = el)}
            className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl p-4 shadow-md border border-[#dbeafe]"
          >
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#425466]">Overdue</span>
                <span className="text-sm text-[#0A2540]">$340K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#425466]">Due this week</span>
                <span className="text-sm text-[#0B43A0]">$520K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#425466]">Due next month</span>
                <span className="text-sm text-[#3b82f6]">$340K</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#0A2540] to-[#101111] text-white px-6 py-3 rounded-full text-sm text-center shadow-lg">
          Poor cash-flow visibility
        </div>
      </div>
    </div>
  );
});

Screen6CashFlow.displayName = "Screen6CashFlow";

export default Screen6CashFlow;
