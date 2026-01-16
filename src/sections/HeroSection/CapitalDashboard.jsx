import React from 'react';

const CapitalDashboard = () => {
  // Data points for the chart
  const chartPoints = [
    { x: 40, y: 99 },   // Jan
    { x: 128, y: 82 },  // Feb
    { x: 215, y: 97 },  // Mar
    { x: 289, y: 69 },  // Apr
    { x: 375, y: 80 },  // May
    { x: 466, y: 38 },  // Jun
  ];

  // Y-axis labels
  const yAxisLabels = ['$3M', '$2.5M', '$2M', '$1.5M', '$1M'];

  // X-axis labels
  const xAxisLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  return (
    <div className="w-full h-full relative">
      {/* Main dashboard container */}
      <div className="absolute left-[3px] top-[4px] w-full h-full bg-white border border-[#E5E7EB] rounded-[34px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
        
        {/* Top gradient section */}
        <div className="absolute top-0 left-0 w-full h-[167px] bg-gradient-to-br from-[#F8FAFC] to-white"></div>
        
        {/* Header section */}
        <div className="relative pt-[15px]">
          <div className="flex items-center justify-center" >
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
        
        {/* Chart section */}
        <div className="relative mt-8">
          <div className="mx-6">
            {/* Chart header */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-[14px] leading-[20px] text-[#0F172A]">
                Monthly Cash Flow Trend
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-[10px] h-[10px] bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-[2px]"></div>
                <div className="text-[12px] leading-[16px] text-[#64748B]">
                  Inflow
                </div>
              </div>
            </div>
            
            {/* Chart container */}
            <div className="w-full h-[282px] bg-gradient-to-br from-[#E4F1FF]/50 to-white border border-[#ECFDF5] rounded-[8px] p-[25px]">
              {/* Y-axis labels */}
              <div className="absolute left-[25px] top-[25px] h-[208px] flex flex-col justify-between">
                {yAxisLabels.map((label, index) => (
                  <div key={index} className="text-[12px] leading-[16px] text-[#64748B]">
                    {label}
                  </div>
                ))}
              </div>
              
              {/* Chart area */}
              <div className="ml-[59px] h-[208px] relative">
                {/* Chart points */}
                {chartPoints.map((point, index) => (
                  <div
                    key={index}
                    className="absolute w-[10px] h-[10px] bg-[#3C82F7] rounded-full"
                    style={{
                      left: `${point.x}px`,
                      top: `${point.y}px`,
                    }}
                  />
                ))}
                
                {/* Chart line */}
                <svg
                  className="absolute top-[126px] left-[31.5px] w-[432.5px] h-[63px]"
                  viewBox="0 0 432.5 63"
                  fill="none"
                >
                  <path
                    d="M1 62C1 62 89 -15 177 8C265 31 353 -3 432 40"
                    stroke="#3C82F6"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
                
                {/* X-axis labels */}
                <div className="absolute bottom-[-30px] left-[14px] w-[428px] h-[16px] flex justify-between">
                  {xAxisLabels.map((label, index) => (
                    <div key={index} className="text-[12px] leading-[16px] text-[#475569]">
                      {label}
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