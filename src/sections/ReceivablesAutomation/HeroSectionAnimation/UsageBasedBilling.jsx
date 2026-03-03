import React from 'react';

const UsageBasedBilling = () => {
  const usageBars = [
    { height: 'h-20', opacity: 'bg-[rgba(7,63,158,0.1)]' },     // 96px
    { height: 'h-28', opacity: 'bg-[rgba(7,63,158,0.2)]' },     // 128px
    { height: 'h-24', opacity: 'bg-[rgba(7,63,158,0.3)]' },     // 112px
    { height: 'h-36', opacity: 'bg-[rgba(7,63,158,0.4)]' },     // 160px
    { height: 'h-32', opacity: 'bg-[rgba(7,63,158,0.6)]' },     // 144px
    { height: 'h-40', opacity: 'bg-[#073F9E] shadow-lg' },      // 176px - highlighted
    { height: 'h-28', opacity: 'bg-[rgba(7,63,158,0.6)]' },     // 128px
    { height: 'h-20', opacity: 'bg-[rgba(7,63,158,0.4)]' },     // 96px
    { height: 'h-14', opacity: 'bg-[rgba(7,63,158,0.2)]' }      // 64px
  ];

  return (
    <div className="max-w-[450px] h- mx-auto relative">
      {/* Title */}
      <div className="text-2xl font-bold text-[#0F172A] text-center mb-2 tracking-tight">
        Usage-Based Billings
      </div>

      {/* Description */}
      <div className="text-xs text-gray-600 text-center max-w-[450px] mx-auto mb-6">
        Pay only for what you use. A flexible, "pay-as-you-go" model that aligns your costs directly with your activity—perfect for fluctuating needs.
      </div>

      {/* Main Card Container */}
      <div className="bg-white border border-[#E2E8F0] shadow-md rounded-xl overflow-hidden">
        
        {/* Header with controls */}
        <div className="bg-[rgba(248,250,252,0.5)] border-b border-[#F1F5F9] px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left controls */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-[#CBD5E1] rounded-full" />
                <div className="w-3 h-3 bg-[#CBD5E1] rounded-full" />
                <div className="w-3 h-3 bg-[#CBD5E1] rounded-full" />
              </div>
              <div className="w-px h-4 bg-[#E2E8F0]" />
              <div className="text-xs font-bold tracking-wider uppercase text-[#073F9E]">
                Usage overview
              </div>
            </div>

            {/* Live metering badge */}
            <div className="flex items-center gap-1.5 bg-[rgba(7,63,158,0.1)] rounded-md px-2 py-1">
              <div className="w-1.5 h-1.5 bg-[#073F9E] rounded-full" />
              <span className="text-[10px] font-bold text-[#073F9E]">LIVE METERING</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="p-5">
          {/* Usage bars graph */}
          <div className="flex items-end gap-2 h-40 mb-4">
            {usageBars.map((bar, index) => (
              <div
                key={index}
                className={`flex-1 ${bar.height} ${bar.opacity} rounded-t-lg transition-all duration-300 ${
                  index === 5 ? 'shadow-[0_-4px_15px_rgba(7,63,158,0.2)]' : ''
                }`}
              />
            ))}
          </div>

          {/* Stats boxes */}
          <div className="bg-[rgba(7,63,158,0.04)] border border-[#F1F5F9] rounded-xl p-4">
            {/* Consumption */}
            <div className="mb-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-1">
                Jan - Consumption
              </div>
              <div className="text-xl font-bold text-[#0F172A] tracking-tight">
                $120.00
              </div>
            </div>

            {/* Progress bar */}
            <div className="relative mb-4">
              <div className="w-full h-2 bg-[#E2E8F0] rounded-full">
                <div 
                  className="h-2 bg-[#073F9E] rounded-full relative"
                  style={{ width: '66%' }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border-4 border-[#073F9E] rounded-full shadow-lg" />
                </div>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3">
              {/* Usage card */}
              <div className="bg-white/50 border border-[#E2E8F0] rounded-lg p-2">
                <div className="text-[8px] font-bold uppercase text-[#94A3B8] mb-1">
                  Usage
                </div>
                <div className="text-xs font-bold text-[#475569]">
                  1200
                </div>
              </div>

              {/* Unit Price card - highlighted */}
              <div className="bg-[rgba(7,63,158,0.05)] border-2 border-[#073F9E] rounded-lg p-2 shadow-sm">
                <div className="text-[8px] font-bold uppercase text-[#073F9E] mb-1">
                  Unit Price
                </div>
                <div className="text-xs font-bold text-[#073F9E]">
                  $0.10/unit
                </div>
              </div>

              {/* Amount card */}
              <div className="bg-white border border-[#E2E8F0] rounded-lg p-2">
                <div className="text-[8px] font-bold uppercase text-[#94A3B8] mb-1">
                  Amount
                </div>
                <div className="text-xs font-bold text-[#475569]">
                  $120.00
                </div>
              </div>
            </div>
          </div>

          {/* Pay Now button */}
          <div className="flex justify-end mt-2">
            <button className="px-6 py-2 bg-[#073F9E] rounded-lg text-xs text-white shadow-md hover:bg-[#052d73] transition-colors">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageBasedBilling;