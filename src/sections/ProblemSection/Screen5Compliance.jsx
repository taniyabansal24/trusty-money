import React from "react";
import InfoCircleIcon from "../../components/svg/InfoCircleIcon";
import GlobeIcon from "../../components/svg/GlobeIcon";
import DatabaseIcon from "../../components/svg/DatabaseIcon";

const Screen5Compliance = React.forwardRef((props, ref) => {
  const {
    screen5CardsRef, 
  } = props;
  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-white rounded-[34px] overflow-hidden"
    >
      <div className="w-full h-full bg-[#f8fafc] flex flex-col px-4 py-6">
        {/* HEADER */}
        <div className="problem-screen-header flex items-center justify-between mb-4">
          <div>
            <div className="text-xs text-[#425466] tracking-wide uppercase">
              Compliance
            </div>
            <h3 className="text-[#0A2540] text-base font-semibold tracking-tight">
              Regulation tracker
            </h3>
          </div>

          <div className="w-8 h-8 bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-xl flex items-center justify-center overflow-hidden">
            <InfoCircleIcon size={48} />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 space-y-2.5">
          {/* JURISDICTIONS */}
          <div
            ref={(el) => (screen5CardsRef.current[0] = el)}
            className="bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] rounded-xl p-3.5 border border-[#dbeafe]"
          >
            <div className="flex items-start gap-2.5 mb-2.5">
              <div className="w-7 h-7 bg-gradient-to-br from-[#0B43A0] to-[#073f9e] rounded-lg flex items-center justify-center shadow-sm">
                <GlobeIcon className="w-4 h-4 text-white" />
              </div>

              <div className="flex-1">
                <div className="text-sm text-[#0A2540] mb-1">
                  12 jurisdictions, 12 tax systems
                </div>
                <div className="text-xs text-[#425466]">
                  Different GST/VAT requirements per country
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                ["IN", "18%"],
                ["AE", "5%"],
                ["GB", "20%"],
                ["SG", "8%"],
                ["AU", "10%"],
                ["CA", "13%"],
              ].map(([code, rate]) => (
                <div
                  key={code}
                  className="bg-gradient-to-br from-white to-[#f8fafc] rounded-md px-1.5 py-1 text-xs flex items-center gap-1 border border-[#e5e7eb]"
                >
                  <span className="text-[#425466]">{code}</span>
                  <span className="text-sm text-[#0A2540]">{rate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* REGULATORY UPDATES */}
          <div
            ref={(el) => (screen5CardsRef.current[1] = el)}
            className="bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] rounded-xl p-3.5 border border-[#dbeafe]"
          >
            <div className="flex items-start gap-2.5 mb-2.5">
              <div className="w-7 h-7 bg-gradient-to-br from-[#0B43A0] to-[#073f9e] rounded-lg flex items-center justify-center shadow-sm">
                <DatabaseIcon className="w-8 h-8" />
              </div>

              <div className="flex-1">
                <div className="text-sm text-[#0A2540] mb-1">
                  Constant regulatory updates
                </div>
                <div className="text-xs text-[#425466]">
                  Avg 8 changes per month across markets
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              {[
                [
                  "UAE VAT amendments",
                  "Effective Jan 2025",
                  "bg-gradient-to-br from-[#073f9e] to-[#0B43A0]",
                ],
                [
                  "India GST rate revision",
                  "Effective Feb 2025",
                  "bg-gradient-to-br from-[#0B43A0] to-[#073f9e]",
                ],
                [
                  "UK Making Tax Digital update",
                  "Effective Mar 2025",
                  "bg-gradient-to-br from-[#0B43A0] to-[#073f9e]",
                ],
              ].map(([title, date, color], i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <div className={`w-1.5 h-1.5 ${color} rounded-full mt-1`} />
                  <div>
                    <div className="text-xs text-[#0A2540]">{title}</div>
                    <div className="text-[10px] text-[#425466]">{date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COVERAGE */}
          <div
            ref={(el) => (screen5CardsRef.current[2] = el)}
            className="bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] rounded-xl p-3.5 border border-[#dbeafe]"
          >
            <div className="mb-2.5">
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-[#425466]">
                  Compliance coverage
                </span>
                <span className="text-sm text-[#0B43A0]">68%</span>
              </div>

              <div className="w-full h-1.5 bg-gradient-to-br from-[#e0efff] to-[#d0e7ff] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#073f9e] to-[#0B43A0]"
                  style={{ width: "68%" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <div className="flex items-center gap-1">
                <span className="text-[#425466]">Covered: 8</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#425466]">At risk: 4</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#0A2540] to-[#101111] text-white px-5 py-2.5 rounded-xl text-sm text-center shadow-lg mt-3">
          Fragmented compliance
        </div>
      </div>
    </div>
  );
});

Screen5Compliance.displayName = "Screen5Compliance";

export default Screen5Compliance;