import React from "react";
import GB from "country-flag-icons/react/3x2/GB";
import US from "country-flag-icons/react/3x2/US";
import AE from "country-flag-icons/react/3x2/AE";
import AU from "country-flag-icons/react/3x2/AU";
import { div } from "framer-motion/client";

const CountryTaxCard = () => {
  const countryData = [
    {
      country: "United Kingdom",
      currency: "GBP",
      flag: (
        <GB title="United Kingdom" style={{ width: "20px", height: "14px" }} />
      ),
      netAmount: "6750.00",
      tax: "3250.00",
      totalAmount: "3250.00",
    },
    {
      country: "United States",
      currency: "USD",
      flag: (
        <US title="United States" style={{ width: "20px", height: "14px" }} />
      ),
      netAmount: "6750.00",
      tax: "3250.00",
      totalAmount: "3250.00",
    },
    {
      country: "UAE",
      currency: "AED",
      flag: (
        <AE
          title="United Arab Emirates"
          style={{ width: "20px", height: "14px" }}
        />
      ),
      netAmount: "6750.00",
      tax: "3250.00",
      totalAmount: "3250.00",
    },
  ];

  return (
    <div className="w-full h-full relative">
      {/* Main invoice container */}
      <div className="absolute left-[3px] top-[4px] w-full h-full rounded-[28px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
        {/* Main content */}
        <div className="p-4 h-full flex flex-col">
          {/* Header section */}
          <div className="mb-5">
            <div className="text-center">
              <div className="text-lg text-[#0F172A] font-medium">
                Tax Compiler
              </div>
            </div>
          </div>

          {/* Scrollable Tax Cards Container */}
          <div className="flex-1 overflow-y-auto pr-1">
            <div className="space-y-4">
              {countryData.map((country, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm rounded-lg border border-gray-100"
                >
                  {/* Card Header */}
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-6 flex items-center justify-center">
                          {country.flag}
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-sm font-medium">
                            {country.country}
                          </h3>
                          <p className="text-[#90A1B9] text-xs">
                            {country.currency}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Amount Details - Horizontal Scroll */}
                    <div className="mt-2 overflow-x-auto pb-1">
                      <div className="flex space-x-2 min-w-max justify-between">
                        {/* Net Amount */}
                        <div className="w-32 h-16 bg-[#EFF7FF] border border-[#E2E8F0] rounded-lg p-2 flex-shrink-0">
                          <p className="text-[#073F9E] text-xs">Net Amount</p>
                          <p className="text-[#0F172B] text-sm font-normal mt-0.5">
                            {country.netAmount} {country.currency}
                          </p>
                        </div>

                        {/* Tax */}
                        <div className="w-32 h-16 bg-[#EFF7FF] border border-[#E2E8F0] rounded-lg p-2 flex-shrink-0">
                          <p className="text-[#073F9E] text-xs">Tax</p>
                          <p className="text-[#0F172B] text-sm font-normal mt-0.5">
                            {country.tax} {country.currency}
                          </p>
                        </div>

                        {/* Total Amount */}
                        <div className="w-32 h-16 bg-[#EFF7FF] border border-[#E2E8F0] rounded-lg p-2 flex-shrink-0">
                          <p className="text-[#073F9E] text-xs">Total Amount</p>
                          <p className="text-[#0F172B] text-sm font-normal mt-0.5">
                            {country.totalAmount} {country.currency}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryTaxCard;
