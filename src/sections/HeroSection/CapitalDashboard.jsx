import React from "react";

const CapitalDashboard = () => {
  // Data points for the chart
  const chartPoints = [
    { x: 40, y: 99 }, // Jan
    { x: 128, y: 82 }, // Feb
    { x: 215, y: 97 }, // Mar
    { x: 289, y: 69 }, // Apr
    { x: 375, y: 80 }, // May
    { x: 466, y: 38 }, // Jun
  ];

  // Y-axis labels
  const yAxisLabels = ["$3M", "$2.5M", "$2M", "$1.5M", "$1M"];

  // X-axis labels
  const xAxisLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <div className="w-full h-full relative">
      {/* Main dashboard container */}
      <div className="absolute left-[3px] top-[4px] w-full h-full rounded-[34px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
        {/* Top gradient section */}
        <div className="absolute top-0 left-0 w-full h-[167px] bg-gradient-to-br from-[#F8FAFC] to-white"></div>

        {/* Header section */}
        <div className="relative pt-[15px]">
          <div className="flex items-center justify-center">
            <div className="w-[253px]">
              <div className="text-[20px] leading-[28px] text-[#0F172A]">
                Working Capital Dashboard
              </div>
            </div>
          </div>
        </div>

        {/* Available Liquidity card */}
        <div className="relative mx-6 mt-6">
          <div className="w-full h-[82px] bg-gradient-to-t from-[#C7DCFF] to-[#FAFCFD] border border-[#DBEAFE] rounded-[8px] p-[17px]">
            <div className="flex justify-between items-center">
              <div className="text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#475569]">
                Available Liquidity
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-[12px] h-[12px] border border-[#059669]"></div>
                <div className="text-[12px] leading-[16px] text-[#059669]">
                  +23.5% MoM
                </div>
              </div>
            </div>
            <div className="mt-[8px] text-[20px] leading-[28px] text-[#0F172A]">
              $2,847,250
            </div>
          </div>
        </div>

        {/* Compact Chart section */}
        <div className="relative mt-6 px-4">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            {/* Chart header - more compact */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Monthly Cash Flow Trend
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Last 12 months overview
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Inflow</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Outflow</span>
                </div>
              </div>
            </div>

            {/* Compact Chart container */}
            <div className="relative">
              {/* Y-axis labels and grid lines - more compact */}
              <div className="absolute left-0 top-0 h-[180px] w-10 flex flex-col justify-between py-3">
                {["$80k", "$60k", "$40k", "$20k", "$0"].map((label, index) => (
                  <div key={index} className="relative">
                    <div className="absolute right-0 top-1/2 w-full h-px bg-gray-100 -translate-y-1/2"></div>
                    <span className="text-xs text-gray-500 pr-1 bg-white relative z-10">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Chart area - reduced height */}
              <div className="ml-10 pt-2 pb-6">
                <div className="relative h-[180px]">
                  {/* Grid lines */}
                  <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-px bg-gray-100"
                        style={{ top: `${i * 25}%` }}
                      />
                    ))}
                  </div>

                  {/* Chart line - adjusted for smaller height */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                  >
                    {/* Area fill */}
                    <defs>
                      <linearGradient
                        id="areaGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#3B82F6"
                          stopOpacity="0.15"
                        />
                        <stop
                          offset="100%"
                          stopColor="#3B82F6"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    {/* Inflow line - adjusted Y coordinates for smaller height */}
                    <path
                      d="M0,120 L40,100 L80,140 L120,80 L160,110 L200,60 L240,90 L280,50 L320,100 L360,40"
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Area under line - adjusted for smaller height */}
                    <path
                      d="M0,120 L40,100 L80,140 L120,80 L160,110 L200,60 L240,90 L280,50 L320,100 L360,40 L360,180 L0,180 Z"
                      fill="url(#areaGradient)"
                    />

                    {/* Data points - smaller */}
                    {[
                      { x: 0, y: 120 },
                      { x: 40, y: 100 },
                      { x: 80, y: 140 },
                      { x: 120, y: 80 },
                      { x: 160, y: 110 },
                      { x: 200, y: 60 },
                      { x: 240, y: 90 },
                      { x: 280, y: 50 },
                      { x: 320, y: 100 },
                      { x: 360, y: 40 },
                    ].map((point, index) => (
                      <circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r="3"
                        fill="white"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                        className="cursor-pointer hover:r-4 transition-all"
                      />
                    ))}
                  </svg>
                </div>

                {/* X-axis labels - more compact */}
                <div className="flex justify-between mt-1 px-1">
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((month) => (
                    <div
                      key={month}
                      className="text-[10px] text-gray-500 text-center w-6"
                    >
                      {month}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="relative mx-6 mt-8">
          <div className="grid grid-cols-2 gap-4">
            {/* DSO Card */}
            <div className="h-[90px] bg-gradient-to-br from-[#F8FAFC] to-white border border-[#ECFDF5] rounded-[8px] p-[17px]">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-[12px] h-[12px] border border-[#64748B]"></div>
                <div className="text-[12px] leading-[16px] text-[#64748B]">
                  DSO
                </div>
              </div>
              <div className="text-[20px] leading-[28px] text-[#0F172A] mb-1">
                28 days
              </div>
              <div className="text-[12px] leading-[16px] text-[#059669]">
                ↓ 12 days vs baseline
              </div>
            </div>

            {/* Collection Rate Card */}
            <div className="h-[90px] bg-gradient-to-br from-[#F8FAFC] to-white border border-[#ECFDF5] rounded-[8px] p-[17px]">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-[12px] h-[12px] border border-[#64748B]"></div>
                <div className="text-[12px] leading-[16px] text-[#64748B]">
                  Collection Rate
                </div>
              </div>
              <div className="text-[20px] leading-[28px] text-[#0F172A] mb-1">
                96.8%
              </div>
              <div className="text-[12px] leading-[16px] text-[#059669]">
                +4.2% this quarter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapitalDashboard;
