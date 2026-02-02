import React from "react";
import AnalyticsIcon from "../../components/svg/AnalyticsIcon";
import SyncIcon from "../../components/svg/SyncIcon";
import DollarCircleIcon from "../../components/svg/DollarCircleIcon";

function IconWarning({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3.5 2.9 20h18.2L12 3.5Z"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 9v5"
        stroke="#f97316"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1.2" fill="#ef4444" />
    </svg>
  );
}

// Use React.forwardRef to forward the screen ref
const Screen2Payments = React.forwardRef((props, ref) => {
  const {
    screen2CardsRef, // Pass the cards ref array from parent
  } = props;

  return (
    <div
      ref={ref} // This connects to screensRef.current[1] in parent
      className="absolute inset-0 bg-white rounded-[34px] overflow-hidden"
    >
      <div className="w-full h-full bg-white flex flex-col px-4 py-6">
        {/* ===== HEADER ===== */}
        <div className="problem-screen-header flex items-center justify-between mb-4">
          <div>
            <p className="text-xs tracking-wide uppercase text-[#425466]">
              Payments
            </p>
            <h3 className="text-[#0A2540] text-base font-semibold tracking-tight leading-snug">
              Expensive, slow & <br /> opaque
            </h3>
          </div>

          <div className="w-8 h-8 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center">
            <AnalyticsIcon size={40} />
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="flex-1 space-y-2.5">
          {/* ===== CARD 1 : PAYMENT CYCLES ===== */}
          <div
            ref={(el) => {
              // Safely assign to the ref array
              if (screen2CardsRef && screen2CardsRef.current) {
                screen2CardsRef.current[0] = el;
              }
            }}
            className="bg-gradient-to-br from-[#f0f7ff] to-[#e6f0ff] rounded-xl p-3.5 border border-[#dbeafe]"
            style={{
              background: "linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%)",
              borderColor: "#dbeafe",
            }}
          >
            <div className="flex items-start gap-2.5 mb-2.5">
              <div className="w-7 h-7 bg-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <SyncIcon size={48} />
              </div>

              <div className="flex-1">
                <p className="text-sm text-[#0A2540] mb-1">
                  Unpredictable payment cycles
                </p>
                <p className="text-xs text-[#425466]">
                  Overseas clients follow their own schedules
                </p>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-[#425466]">🇮🇳 India clients</span>
                <span className="text-sm text-[#0A2540]">45–60 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#425466]">🇦🇪 UAE clients</span>
                <span className="text-sm text-[#0A2540]">30–90 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#425466]">🇬🇧 UK clients</span>
                <span className="text-sm text-[#0A2540]">30–45 days</span>
              </div>
            </div>
          </div>

          {/* ===== CARD 2 : FX MARGINS ===== */}
          <div
            ref={(el) => {
              if (screen2CardsRef && screen2CardsRef.current) {
                screen2CardsRef.current[1] = el;
              }
            }}
            className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-xl p-3.5 border border-[#dbeafe]"
            style={{
              background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
              borderColor: "#dbeafe",
            }}
          >
            <div className="flex items-start gap-2.5 mb-2.5">
              <div className="w-7 h-7 bg-[#073f9e] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <DollarCircleIcon size={48} />
              </div>

              <div className="flex-1">
                <p className="text-sm text-[#0A2540] mb-1">Hidden FX margins</p>
                <p className="text-xs text-[#425466]">
                  Banks add 2–4% on exchange rates
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white/80 rounded-lg p-2">
                <p className="text-[10px] text-[#425466] mb-1">FX markup</p>
                <p className="text-sm text-[#0A2540]">2.5%</p>
              </div>
              <div className="bg-white/80 rounded-lg p-2">
                <p className="text-[10px] text-[#425466] mb-1">Transfer fees</p>
                <p className="text-sm text-[#0A2540]">$35–75</p>
              </div>
            </div>
          </div>

          {/* ===== CARD 3 : SLOW SETTLEMENTS ===== */}
          <div
            ref={(el) => {
              if (screen2CardsRef && screen2CardsRef.current) {
                screen2CardsRef.current[2] = el;
              }
            }}
            className="bg-gradient-to-br from-white to-[#f8fafc] rounded-xl p-3.5 shadow-sm border border-[#e5e7eb]"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              borderColor: "#e5e7eb",
            }}
          >
            <div className="mb-2.5">
              <div className="flex items-center gap-1.5 mb-1.5">
                <IconWarning className="w-3.5 h-3.5" />
                <span className="text-sm text-[#0A2540]">Slow settlements</span>
              </div>

              <p className="text-xs text-[#425466]">
                Tracking becomes difficult across borders
              </p>
            </div>

            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="text-xs text-[#425466]">
                Avg settlement time
              </span>
              <span className="text-sm text-[#0A2540]">5–7 days</span>
            </div>
          </div>

          {/* ===== CTA ===== */}
          <div className="bg-[#0A2540] text-white px-5 py-2.5 rounded-xl text-sm text-center shadow-lg mt-3">
            Expensive &amp; slow collections
          </div>
        </div>
      </div>
    </div>
  );
});

Screen2Payments.displayName = "Screen2Payments";

export default Screen2Payments;