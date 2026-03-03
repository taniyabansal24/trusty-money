import React from 'react';

const PricingPlans = () => {
  const plans = [
    {
      id: 1,
      name: 'Monthly',
      price: '$50K',
      description: 'Automate compliance',
      highlighted: false
    },
    {
      id: 2,
      name: 'Quarterly',
      price: '$50K',
      description: 'Automate compliance',
      highlighted: true
    },
    {
      id: 3,
      name: 'Yearly',
      price: '$50K',
      description: 'Automate compliance',
      highlighted: false
    }
  ];

  return (
    <div className="max-w-[800px] mx-auto relative">
      {/* Title */}
      <div className="text-xl font-bold text-[#073F9E] text-center mb-4">
        Select Your Plan
      </div>

      {/* Plans Container */}
      <div className="flex gap-3 justify-center">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`
              w-[220px] bg-white rounded-lg overflow-hidden relative
              ${plan.highlighted 
                ? 'border-2 border-[#073F9E] shadow-lg' 
                : 'border border-[#F3F4F6] shadow-md'
              }
            `}
          >
            {/* Top colored bar for highlighted plan */}
            {plan.highlighted && (
              <div className="h-0.5 w-full bg-[#073F9E]" />
            )}

            {/* Content */}
            <div className="p-3">
              {/* Header */}
              <div className="mb-2">
                <h3 className="text-base font-bold text-[#073F9E]">
                  {plan.name}
                </h3>
                <p className="text-[10px] text-[#1B1B1B]">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-3">
                <span className="text-xl font-black text-[#101828]">
                  {plan.price}
                </span>
              </div>

              {/* Button */}
              <button className="w-full bg-[#073F9E] text-white text-xs py-1.5 px-3 rounded-lg shadow-sm flex items-center justify-center gap-1.5 mb-3 hover:bg-[#052d73] transition-colors">
                <span>Start</span>
                <div className="w-3 h-3 relative">
                  <div className="absolute inset-0 border border-white border-t-0 border-b-0 left-[16.66%] right-[16.67%]" />
                </div>
              </button>

              {/* Feature bars */}
              <div className="space-y-1.5 mb-2">
                <div className="w-[120px] h-1.5 bg-[#E5EFFF] rounded-full" />
                <div className="w-[180px] h-1.5 bg-[#E5EFFF] rounded-full" />
                <div className="w-[200px] h-1.5 bg-[#E5EFFF] rounded-full" />
                <div className="w-[180px] h-1.5 bg-[#E5EFFF] rounded-full" />
                <div className="w-[150px] h-1.5 bg-[#E5EFFF] rounded-full" />
                <div className="w-[180px] h-1.5 bg-[#E5EFFF] rounded-full" />
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#F9FAFB] border-t border-[#F3F4F6] px-3 py-1.5 flex items-center gap-1.5">
              {/* Document icon */}
              <div className="w-3 h-3 relative">
                <div className="absolute inset-0 border border-[rgba(27,27,27,0.8)] border-t-0 border-b-0 left-[16.67%] right-[16.66%]" />
                <div className="absolute inset-0 border border-[rgba(27,27,27,0.8)] border-l-0 border-r-0 left-[58.33%] right-[16.67%] top-[8.33%] bottom-[66.67%]" />
                <div className="absolute inset-0 border border-[rgba(27,27,27,0.8)] border-l-0 border-r-0 left-[33.33%] right-[58.34%] top-[37.5%] bottom-[62.5%]" />
                <div className="absolute inset-0 border border-[rgba(27,27,27,0.8)] border-l-0 border-r-0 left-[33.33%] right-[33.34%] top-[54.17%] bottom-[45.83%]" />
                <div className="absolute inset-0 border border-[rgba(27,27,27,0.8)] border-l-0 border-r-0 left-[33.33%] right-[33.34%] top-[70.83%] bottom-[29.17%]" />
              </div>
              <span className="text-[8px] text-[rgba(27,27,27,0.8)]">
                Audit-ready docs auto
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;