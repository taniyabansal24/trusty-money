import React from "react";
import Logo from "../../../components/svg/Logo";

const OneTimePayment = () => {
  const items = [
    {
      title: "Hardware Purchase",
      description: "Enterprise Server Rack x1",
      price: "$2,500.00",
    },
    {
      title: "Setup & Configuration",
      description: "Professional services (4 hours)",
      price: "$600.00",
    },
    {
      title: "Shipping & Handling",
      description: "Expedited Delivery",
      price: "$150.00",
    },
  ];

  return (
    <div className="max-w-[500px] mx-auto relative">
      {/* One and Done Title */}
      <div className="text-3xl font-bold txt-blue text-center mb-3">
        One <span className="text-[#1B1B1B]">and</span> Done
      </div>

      {/* Description Text */}
      <div className="text-xs text-gray-600 text-center max-w-[450px] mx-auto mb-6">
        Pay once, own it forever. No monthly bills, no "subscription fatigue,"
        and zero hidden fees—just a single transaction for total, lifetime
        access.
      </div>

      {/* Main Card Container */}
      <div className="bg-white border border-[#E2E8F0] shadow-md rounded-xl p-5 relative overflow-hidden w-[28rem] mx-auto">
        {/* Overlay + Blur */}
        <div className="absolute w-[250px] h-[250px] -left-16 top-[150px] bg-[rgba(96,165,250,0.05)] blur-[40px] rounded-full -z-10" />

        {/* Header Section */}
        <div className="flex justify-between items-start mb-4">
          {/* Logo and Trusty Money */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white shadow-sm rounded-sm flex items-center justify-center p-1">
              <Logo />
            </div>
            <div className="text-sm font-semibold txt-blue">Trusty Money</div>
          </div>

          {/* Invoice Number and Buttons */}
          <div className="flex items-center gap-2">
            <div className="font-bold text-sm text-[#0F172A]">INV-2024-082</div>
          </div>
        </div>

        {/* One-Time Payment Title */}
        <div className="flex items-center justify-between mb-10">
          <div className="text-base font-semibold">
            One-Time <span className="text-[#073F9E]">Payment</span>
          </div>

          {/* Paid Badge */}
          <div className="w-14 h-5 light-bg rounded-full flex items-center">
            <div className="w-1.5 h-1.5 bg-[#073F9E] rounded-full ml-2" />
            <div className="font-bold text-[10px] tracking-[0.4px] uppercase text-[#073F9E] ml-1">
              Paid
            </div>
          </div>
        </div>

        {/* Items List */}
        <div className="space-y-4 mb-4">
          {items.map((item, index) => (
            <div key={index} className="border-b border-[#F1F5F9] pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-base font-semibold text-[#1b1b1b]">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#64748B]">
                    {item.description}
                  </div>
                </div>
                <div className="text-base font-semibold text-[#1b1b1b]">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Amount Section */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm font-semibold text-[#1b1b1b]">
            Total Amount
          </div>
          <div className="font-bold text-xl text-[#0F172A]">$3,250.00</div>
        </div>

        {/* Border and Barcode */}
        <div className="border-t border-[#F1F5F9] mt-4 pt-3">
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center">
              {/* Barcode */}
              <div className="w-16 h-6 opacity-20 flex gap-0.5">
                <div className="w-[3px] h-6 bg-[#0F172A]" />
                <div className="w-[6px] h-6 bg-[#0F172A]" />
                <div className="w-[1.5px] h-6 bg-[#0F172A]" />
                <div className="w-[9px] h-6 bg-[#0F172A]" />
                <div className="w-[3px] h-6 bg-[#0F172A]" />
                <div className="w-[1.5px] h-6 bg-[#0F172A]" />
                <div className="w-[6px] h-6 bg-[#0F172A]" />
                <div className="w-[3px] h-6 bg-[#0F172A]" />
                <div className="w-[6px] h-6 bg-[#0F172A]" />
              </div>
              {/* Print button */}
              <div className="mx-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_304_582)">
                    <path
                      d="M4.00065 12H2.66732C2.3137 12 1.97456 11.8595 1.72451 11.6095C1.47446 11.3594 1.33398 11.0203 1.33398 10.6667V7.33333C1.33398 6.97971 1.47446 6.64057 1.72451 6.39052C1.97456 6.14048 2.3137 6 2.66732 6H13.334C13.6876 6 14.0267 6.14048 14.2768 6.39052C14.5268 6.64057 14.6673 6.97971 14.6673 7.33333V10.6667C14.6673 11.0203 14.5268 11.3594 14.2768 11.6095C14.0267 11.8595 13.6876 12 13.334 12H12.0007"
                      stroke="#99A1AF"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 6V2C4 1.82319 4.07024 1.65362 4.19526 1.5286C4.32029 1.40357 4.48986 1.33334 4.66667 1.33334H11.3333C11.5101 1.33334 11.6797 1.40357 11.8047 1.5286C11.9298 1.65362 12 1.82319 12 2V6"
                      stroke="#99A1AF"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.3333 9.33333H4.66667C4.29848 9.33333 4 9.63181 4 10V14C4 14.3682 4.29848 14.6667 4.66667 14.6667H11.3333C11.7015 14.6667 12 14.3682 12 14V10C12 9.63181 11.7015 9.33333 11.3333 9.33333Z"
                      stroke="#99A1AF"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_304_582">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* Share button */}
              <div className="">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5.33334C13.1046 5.33334 14 4.43791 14 3.33334C14 2.22877 13.1046 1.33334 12 1.33334C10.8954 1.33334 10 2.22877 10 3.33334C10 4.43791 10.8954 5.33334 12 5.33334Z"
                    stroke="#99A1AF"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z"
                    stroke="#99A1AF"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 14.6667C13.1046 14.6667 14 13.7712 14 12.6667C14 11.5621 13.1046 10.6667 12 10.6667C10.8954 10.6667 10 11.5621 10 12.6667C10 13.7712 10.8954 14.6667 12 14.6667Z"
                    stroke="#99A1AF"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.72656 9.00667L10.2799 11.66"
                    stroke="#99A1AF"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.2732 4.34L5.72656 6.99334"
                    stroke="#99A1AF"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Barcode Text */}
            <div className="font-['Liberation_Mono'] text-[8px] text-[#94A3B8]">
              08 2394 1029 3844
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneTimePayment;
