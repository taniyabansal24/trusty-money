import React from 'react';

const BillingInvoice = () => {
  // Invoice data
  const invoiceItems = [
    {
      description: "SaaS Subscription",
      qty: 12,
      rate: "$1,000.00",
      amount: "$12,000.00"
    },
    {
      description: "Onboarding & Training",
      qty: 1,
      rate: "$2,500.00",
      amount: "$2,500.00"
    },
    {
      description: "Extra Integrations",
      qty: 5,
      rate: "$100.00",
      amount: "$500.00"
    }
  ];

  // Summary data
  const summary = {
    subtotal: "$15,000.00",
    taxLabel: "MwSt",
    taxAmount: "$3,000.00",
    totalDue: "$18,000.00"
  };

  return (
    <div className="w-full h-full relative">
      {/* Main invoice container */}
      <div className="absolute inset-0 rounded-[28px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
        {/* Main content - scaled down container */}
        <div className="p-4 h-full flex flex-col ">
          {/* Header section */}
          <div className="mb-4">
            <div className="flex justify-between items-start">
              {/* From section */}
              <div className="w-[166px]">
                <div className="text-xs leading-[14px] tracking-[0.6px] uppercase text-[#6B7280]">
                  From
                </div>
                <div className="mt-[2px] text-sm leading-[20px] text-[#0A2540] font-medium">
                  Trusty Money Inc.
                </div>
                <div className="mt-3">
                  <div className="w-[116px] h-[16px] bg-[#EFF7FF] border border-[#E2E8F0] rounded-[2px]"></div>
                  <div className="mt-[4px] w-[116px] h-[16px] bg-[#EFF7FF] border border-[#E2E8F0] rounded-[2px]"></div>
                </div>
              </div>
              
              {/* Invoice details */}
              <div className="w-[149px] text-right">
                <div className="text-xl leading-[26px] font-bold text-[#0A2540]">
                  Usage billing
                </div>
                <div className="mt-[6px] space-y-[2px]">
                  <div className="text-xs leading-[14px] text-[#6B7280]">
                    Invoice #: INV-2025-4421
                  </div>
                  <div className="text-xs leading-[14px] text-[#6B7280]">
                    Date: March 02, 2025
                  </div>
                  <div className="text-xs leading-[14px] text-[#6B7280]">
                    Due: March 16, 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto pr-1">
            {/* Bill To section */}
            <div className="mb-3">
              <div className="w-full h-[90px] bg-gradient-to-br from-[#FFF1F2] to-white border border-[#DBEAFE] rounded-[6px] p-2">
                <div className="text-xs leading-[14px] tracking-[0.6px] uppercase text-[#0B43A0] font-medium">
                  Bill To
                </div>
                <div className="mt-[2px] text-sm leading-[20px] text-[#0A2540] font-medium">
                  Global Tech Industries
                </div>
                <div className="mt-1">
                  <div className="w-[133px] h-[10px] bg-[#EFF7FF] border border-[#E2E8F0] rounded-[19px]"></div>
                  <div className="mt-1 w-[96px] h-[10px] bg-[#EFF7FF] border border-[#E2E8F0] rounded-[19px]"></div>
                </div>
              </div>
            </div>
            
            {/* Items table */}
            <div className="mb-3">
              {/* Table header */}
              <div className="flex border-b border-[#E5E7EB] pb-[1px]">
                <div className="w-[285.53px]">
                  <div className="text-xs leading-[14px] font-bold tracking-[0.3px] uppercase text-[#425466]">
                    Description
                  </div>
                </div>
                <div className="w-[35.86px] text-right">
                  <div className="text-xs leading-[14px] font-bold tracking-[0.3px] uppercase text-[#425466]">
                    Qty
                  </div>
                </div>
                <div className="w-[97.44px] text-right">
                  <div className="hidden md:block text-xs leading-[14px] font-bold tracking-[0.3px] uppercase text-[#425466]">
                    Rate
                  </div>
                </div>
                <div className="w-[107.17px] text-right">
                  <div className="text-xs leading-[14px] font-bold tracking-[0.3px] uppercase text-[#425466]">
                    Amount
                  </div>
                </div>
              </div>
              
              {/* Table rows */}
              <div className="mt-2 space-y-[1px]">
                {invoiceItems.map((item, index) => (
                  <div key={index} className="flex items-start py-1">
                    <div className="w-[285.53px]">
                      <div className="text-sm leading-[18px] text-[#0A2540]">
                        {item.description}
                      </div>
                    </div>
                    <div className="w-[35.86px] text-right">
                      <div className="text-sm leading-[18px] text-[#425466]">
                        {item.qty}
                      </div>
                    </div>
                    <div className="w-[97.44px] text-right">
                      <div className="hidden md:block text-sm leading-[18px] text-[#425466]">
                        {item.rate}
                      </div>
                    </div>
                    <div className="w-[107.17px] text-right">
                      <div className="text-sm leading-[18px] font-medium text-[#0A2540]">
                        {item.amount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Summary section */}
            <div className="mb-2">
              <div className="flex justify-end">
                <div className="w-[256px]">
                  {/* Subtotal */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm leading-[18px] text-[#425466]">
                      Subtotal
                    </div>
                    <div className="text-sm leading-[18px] text-[#425466]">
                      {summary.subtotal}
                    </div>
                  </div>
                  
                  {/* Tax */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-1">
                      <div className="text-sm leading-[18px] text-[#425466]">
                        {summary.taxLabel}
                      </div>
                      <div className="w-[74.11px] h-[20px] bg-gradient-to-r from-[#DBEAFE] to-[#BFDBFE] rounded-[4px] flex items-center justify-center">
                        <span className="text-xs leading-[14px] text-[#0B43A0] font-medium">
                          Auto-calc
                        </span>
                      </div>
                    </div>
                    <div className="text-sm leading-[18px] text-[#425466]">
                      {summary.taxAmount}
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="border-t border-[#E5E7EB] my-2 pt-2">
                    <div className="flex justify-between items-center">
                      <div className="text-base leading-[20px] text-[#0A2540] font-medium">
                        Total Due
                      </div>
                      <div className="text-lg leading-[22px] font-bold text-[#0A2540]">
                        {summary.totalDue}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer section */}
          <div className="mt-auto pt-3 border-t border-[#ECFDF5]">
            <div className="flex items-center justify-between">
              <div className="text-xs leading-[14px] text-[#425466]">
                Payment due by March 16, 2025
              </div>
              <div className="w-[44px] h-[20px] bg-[#C1DCFE] rounded-full flex items-center justify-center">
                <span className="text-xs leading-[14px] font-medium text-[#0B43A0]">
                  DUE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingInvoice;