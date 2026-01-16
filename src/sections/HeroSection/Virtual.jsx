import React from 'react';

const BillingInvoice = () => {
  // Invoice data
  const invoiceItems = [
    {
      description: "SaaS Subscription (12 months)",
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
    taxLabel: "MwSt (DE 19%)",
    taxAmount: "$3,000.00",
    totalDue: "$18,000.00"
  };

  return (
    <div className="w-full h-full relative">
      {/* Main invoice container */}
      <div className="absolute left-[3px] top-[4px] w-full h-full bg-white border border-[#E5E7EB] rounded-[28px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
        
        {/* Blue top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#3B82F6] to-[#0B43A0]"></div>
        
        {/* Background gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EEF2FF]/50 via-transparent to-[#EEF2FF]/50 opacity-50"></div>
        <div className="absolute inset-0 opacity-60">
          <div className="absolute w-[1033px] h-[1204px] -left-[219px] -top-[275px] bg-[radial-gradient(116.59%_100.04%_at_30%_20%,rgba(59,130,246,0.22)_0%,rgba(59,130,246,0)_55%),radial-gradient(121.3%_104.08%_at_70%_85%,rgba(6,182,212,0.16)_0%,rgba(6,182,212,0)_58%)]"></div>
        </div>
        
        {/* Top gradient section */}
        <div className="absolute top-0 left-0 w-full h-[283px] bg-gradient-to-br from-[#F8FAFC] to-white"></div>
        
        {/* Header section */}
        <div className="relative pt-6 px-6">
          <div className="flex justify-between">
            {/* From section */}
            <div className="w-[166px]">
              <div className="text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#6B7280]">
                From
              </div>
              <div className="mt-[4px] text-[16px] leading-[24px] text-[#0A2540]">
                Trusty Money Inc.
              </div>
              <div className="mt-4">
                <div className="w-[116px] h-[18px] bg-[#EEF6FD] border border-black/20 rounded-[2px]"></div>
                <div className="mt-[6px] w-[116px] h-[18px] bg-[#EEF6FD] border border-black/20 rounded-[2px]"></div>
              </div>
            </div>
            
            {/* Invoice details */}
            <div className="w-[149px] text-right">
              <div className="text-[24px] leading-[32px] font-bold text-[#0A2540]">
                Usage billing
              </div>
              <div className="mt-[8px] space-y-[4px]">
                <div className="text-[12px] leading-[16px] text-[#6B7280]">
                  Invoice #: INV-2025-4421
                </div>
                <div className="text-[12px] leading-[16px] text-[#6B7280]">
                  Date: March 02, 2025
                </div>
                <div className="text-[12px] leading-[16px] text-[#6B7280]">
                  Due: March 16, 2025
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bill To section */}
        <div className="relative mx-6 mt-6">
          <div className="w-full h-[114px] bg-gradient-to-br from-[#FFF1F2] to-white border border-[#DBEAFE] rounded-[8px] p-[17px]">
            <div className="text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#0B43A0]">
              Bill To
            </div>
            <div className="mt-[4px] text-[16px] leading-[24px] text-[#0A2540]">
              Global Tech Industries
            </div>
            <div className="mt-2">
              <div className="w-[133px] h-[11px] bg-[#EFFAFD] border border-black/20 rounded-[19px]"></div>
              <div className="mt-2 w-[96px] h-[11px] bg-[#EFFAFD] border border-black/20 rounded-[19px]"></div>
            </div>
          </div>
        </div>
        
        {/* Items table */}
        <div className="relative mx-6 mt-6">
          {/* Table header */}
          <div className="flex border-b border-[#E5E7EB] pb-[1px]">
            <div className="w-[285.53px]">
              <div className="text-[12px] leading-[16px] font-bold tracking-[0.3px] uppercase text-[#425466]">
                Description
              </div>
            </div>
            <div className="w-[35.86px] text-right">
              <div className="text-[12px] leading-[16px] font-bold tracking-[0.3px] uppercase text-[#425466]">
                Qty
              </div>
            </div>
            <div className="w-[97.44px] text-right">
              <div className="text-[12px] leading-[16px] font-bold tracking-[0.3px] uppercase text-[#425466]">
                Rate
              </div>
            </div>
            <div className="w-[107.17px] text-right">
              <div className="text-[12px] leading-[16px] font-bold tracking-[0.3px] uppercase text-[#425466]">
                Amount
              </div>
            </div>
          </div>
          
          {/* Table rows */}
          <div className="mt-[28px] space-y-[1px]">
            {invoiceItems.map((item, index) => (
              <div key={index} className="flex items-start py-[12.5px]">
                <div className="w-[285.53px]">
                  <div className="text-[14px] leading-[20px] text-[#0A2540]">
                    {item.description}
                  </div>
                </div>
                <div className="w-[35.86px] text-right">
                  <div className="text-[14px] leading-[20px] text-[#425466]">
                    {item.qty}
                  </div>
                </div>
                <div className="w-[97.44px] text-right">
                  <div className="text-[14px] leading-[20px] text-[#425466]">
                    {item.rate}
                  </div>
                </div>
                <div className="w-[107.17px] text-right">
                  <div className="text-[14px] leading-[20px] font-medium text-[#0A2540]">
                    {item.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Summary section */}
        <div className="relative mx-6 mt-6">
          <div className="flex justify-end">
            <div className="w-[256px]">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-[8px]">
                <div className="text-[14px] leading-[20px] text-[#425466]">
                  Subtotal
                </div>
                <div className="text-[14px] leading-[20px] text-[#425466]">
                  {summary.subtotal}
                </div>
              </div>
              
              {/* Tax */}
              <div className="flex justify-between items-center mb-[8px]">
                <div className="flex items-center space-x-2">
                  <div className="text-[14px] leading-[20px] text-[#425466]">
                    {summary.taxLabel}
                  </div>
                  <div className="w-[74.11px] h-[21.85px] bg-gradient-to-r from-[#DBEAFE] to-[#BFDBFE] rounded-[4px] flex items-center justify-center">
                    <span className="text-[13.1px] leading-[17px] text-[#0B43A0]">
                      Auto-calc
                    </span>
                  </div>
                </div>
                <div className="text-[14px] leading-[20px] text-[#425466]">
                  {summary.taxAmount}
                </div>
              </div>
              
              {/* Divider */}
              <div className="border-t border-[#E5E7EB] my-[8px] pt-[9px]">
                <div className="flex justify-between items-center">
                  <div className="text-[16px] leading-[24px] text-[#0A2540]">
                    Total Due
                  </div>
                  <div className="text-[20px] leading-[28px] font-bold text-[#0A2540]">
                    {summary.totalDue}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer section */}
        <div className="absolute bottom-0 left-0 right-0 h-[57px] bg-gradient-to-r from-[#F8FAFC] to-white border-t border-[#ECFDF5]">
          <div className="flex items-center justify-between h-full px-6">
            <div className="text-[12px] leading-[16px] text-[#425466]">
              Payment due by March 16, 2025
            </div>
            <div className="w-[48px] h-[24px] bg-[#C1DCFE] rounded-full flex items-center justify-center">
              <span className="text-[12px] leading-[16px] font-medium text-[#0B43A0]">
                DUE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingInvoice;