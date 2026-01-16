import React from 'react';

const CountryTaxCard = () => {
  const countryData = [
    { country: "United Kingdom", currency: "GBP", flag: "🇬🇧", netAmount: "6750.00", tax: "3250.00", totalAmount: "3250.00" },
    { country: "United States", currency: "USD", flag: "🇺🇸", netAmount: "6750.00", tax: "3250.00", totalAmount: "3250.00" },
    { country: "UAE", currency: "AED", flag: "🇦🇪", netAmount: "6750.00", tax: "3250.00", totalAmount: "3250.00" },
    { country: "Australia", currency: "AUD", flag: "🇦🇺", netAmount: "6750.00", tax: "3250.00", totalAmount: "3250.00" }
  ];

  return (
    <div className="w-full h-full relative">
      {/* Main dashboard container */}
      <div className="absolute left-[3px] top-[4px] w-full h-full bg-white border border-[#E5E7EB] rounded-[34px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
        
        {/* Top gradient section */}
        <div className="absolute top-0 left-0 w-full h-[167px] bg-gradient-to-br from-[#F8FAFC] to-white"></div>
        
        {/* Header section */}
        <div className="relative pt-[15px]">
          <div className="flex items-center justify-center">
            <div className="w-[253px]">
              <div className="text-[20px] leading-[28px] text-[#0F172A] text-center">
                Tax Dashboard
              </div>
            </div>
          </div>
        </div>
        
        {/* Tax Cards Container */}
        <div className="relative mx-6 mt-6 space-y-6">
          {countryData.map((country, index) => (
            <div key={index} className="w-full h-[170.67px] bg-white shadow-lg rounded-xl border border-gray-100">
              {/* Card Header */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-[37px] h-[28px] flex items-center justify-center text-2xl">
                      {country.flag}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-[#073F9E] text-lg font-normal leading-7">
                        {country.country}
                      </h3>
                      <p className="text-[#90A1B9] text-sm font-normal leading-5">
                        {country.currency}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Amount Details */}
                <div className="mt-3 flex justify-between">
                  {/* Net Amount */}
                  <div className="w-[142.72px] h-[77.33px] bg-[#EFF7FF] border border-[#E2E8F0] rounded-lg p-2">
                    <p className="text-[#073F9E] text-xs font-normal leading-4">
                      Net Amount
                    </p>
                    <p className="text-[#0F172B] text-base font-normal leading-6 mt-1">
                      {country.netAmount} {country.currency}
                    </p>
                  </div>

                  {/* Tax */}
                  <div className="w-[142.72px] h-[77.33px] bg-[#EFF7FF] border border-[#E2E8F0] rounded-lg p-2">
                    <p className="text-[#073F9E] text-xs font-normal leading-4">
                      Tax
                    </p>
                    <p className="text-[#0F172B] text-base font-normal leading-6 mt-1">
                      {country.tax} {country.currency}
                    </p>
                  </div>

                  {/* Total Amount */}
                  <div className="w-[142.72px] h-[77.33px] bg-[#EFF7FF] border border-[#E2E8F0] rounded-lg p-2">
                    <p className="text-[#073F9E] text-xs font-normal leading-4">
                      Total Amount
                    </p>
                    <p className="text-[#0F172B] text-base font-normal leading-6 mt-1">
                      {country.totalAmount} {country.currency}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary Metrics */}
        <div className="relative mx-6 mt-8">
          <div className="grid grid-cols-2 gap-4">
            {/* Total Tax Collected */}
            <div className="h-[90px] bg-gradient-to-br from-[#F8FAFC] to-white border border-[#ECFDF5] rounded-[8px] p-[17px]">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-[12px] h-[12px] border border-[#64748B]"></div>
                <div className="text-[12px] leading-[16px] text-[#64748B]">
                  Total Tax Collected
                </div>
              </div>
              <div className="text-[20px] leading-[28px] text-[#0F172A] mb-1">
                $13,000
              </div>
              <div className="text-[12px] leading-[16px] text-[#059669]">
                Across 4 countries
              </div>
            </div>
            
            {/* Avg Tax Rate */}
            <div className="h-[90px] bg-gradient-to-br from-[#F8FAFC] to-white border border-[#ECFDF5] rounded-[8px] p-[17px]">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-[12px] h-[12px] border border-[#64748B]"></div>
                <div className="text-[12px] leading-[16px] text-[#64748B]">
                  Average Tax Rate
                </div>
              </div>
              <div className="text-[20px] leading-[28px] text-[#0F172A] mb-1">
                32.5%
              </div>
              <div className="text-[12px] leading-[16px] text-[#059669]">
                Consistent across regions
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer note */}
        <div className="relative mx-6 mt-6 mb-6">
          <div className="text-[12px] leading-[16px] text-[#64748B] text-center">
            All amounts are displayed in their respective currencies
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryTaxCard;