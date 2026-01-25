import React from "react";
import DocumentIcon from "../../components/svg/DocumentIcon";
import BuildingIcon from "../../components/svg/BuildingIcon";
import SyncIcon from "../../components/svg/SyncIcon";
import SortVerticalIcon from "../../components/svg/SortVerticalIcon";
import InfoCircleIcon from "../../components/svg/InfoCircleIcon";


const Screen4Invoicing = React.forwardRef((props, ref) => {
  const {
    screen4CardsRef, 
  } = props;
  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-white rounded-[34px] overflow-hidden"
    >
      <div className="relative w-full h-full bg-white rounded-[44px] overflow-hidden shadow-inner">
        <div className="w-full h-full bg-white flex flex-col px-5 py-8">
          {/* HEADER */}
          <div className="problem-screen-header flex items-center justify-between mb-5">
            <div>
              <div className="text-xs text-[#425466] tracking-wide uppercase">
                Invoicing
              </div>
              <h3 className="text-[#0A2540] text-lg tracking-tight">
                Manual processes
              </h3>
            </div>

            <div className="w-9 h-9 bg-gradient-to-br from-[#e0efff] to-[#d0e7ff] rounded-xl flex items-center justify-center">
              <DocumentIcon className="w-5 h-5" />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 space-y-3">
            {/* INVOICE CARD */}
            <div
              ref={(el) => (screen4CardsRef.current[0] = el)}
              className="bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] rounded-xl p-4 shadow-sm border border-[#dbeafe]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#e0efff] to-[#d0e7ff] rounded-lg flex items-center justify-center">
                    <BuildingIcon size={56} />
                  </div>

                  <div>
                    <div className="text-sm text-[#0A2540]">Acme Corp Ltd.</div>
                    <div className="text-xs text-[#425466]">
                      Invoice #INV-2024-1023
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between px-1 py-1 bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] text-[#0B43A0] text-xs w-24 rounded-md border border-[#bfdbfe]">
                  <span className="">Awaiting review</span>

                  <SortVerticalIcon className="w-7 h-7 text-[#1E3A8A]" />
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-xs">
                  <span className="text-[#425466]">Amount</span>
                  <span className="text-sm text-[#0A2540]">$12,450.00</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#425466]">Due date</span>
                  <span className="text-sm text-[#0A2540]">Jan 10, 2025</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#425466]">Location</span>
                  <span className="text-sm text-[#0A2540]">
                    Mumbai, India 🇮🇳
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#dbeafe]">
                <div className="flex items-center gap-2 text-xs text-[#425466]">
                  <SyncIcon size={34} />
                  <span>Manual entry: 2.5 hours</span>
                </div>
              </div>
            </div>

            {/* TAX CONFLICT */}
            <div
              ref={(el) => (screen4CardsRef.current[1] = el)}
              className="bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-xl p-4 border border-[#bfdbfe]"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] rounded-lg flex items-center justify-center shadow-sm">
                  <InfoCircleIcon size={56} />
                </div>

                <div className="flex-1">
                  <div className="text-sm text-[#0A2540] mb-1">
                    Cross-border tax conflict
                  </div>
                  <div className="text-xs text-[#425466]">
                    GST/VAT rates require manual reconciliation
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "India", value: "18%" },
                  { label: "UAE", value: "5%" },
                  { label: "UK", value: "20%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-gradient-to-br from-white to-[#f8fafc] rounded-md px-2 py-1 text-xs flex items-center gap-1 border border-[#e5e7eb]"
                  >
                    <span className="text-[#425466]">{item.label}</span>
                    <span className="text-sm text-[#0A2540]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* STATS */}
            <div
              ref={(el) => (screen4CardsRef.current[2] = el)}
              className="bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] rounded-xl p-4 shadow-sm border border-[#dbeafe]"
            >
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#073f9e] to-[#0B43A0] rounded-full" />
                    <span className="text-xs text-[#425466]">
                      Pending invoices
                    </span>
                  </div>
                  <span className="text-sm text-[#0A2540]">23</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#0B43A0] to-[#073f9e] rounded-full" />
                    <span className="text-xs text-[#425466]">
                      Errors this week
                    </span>
                  </div>
                  <span className="text-sm text-[#0A2540]">17</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#3b82f6] to-[#0B43A0] rounded-full" />
                    <span className="text-xs text-[#425466]">
                      Hours spent/week
                    </span>
                  </div>
                  <span className="text-sm text-[#0A2540]">42.5</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#0A2540] to-[#101111] text-white px-6 py-3 rounded-xl text-sm text-center shadow-lg mt-4">
            Manual invoicing
          </div>
        </div>
      </div>
    </div>
  );
});

Screen4Invoicing.displayName = "Screen4Invoicing";

export default Screen4Invoicing;
