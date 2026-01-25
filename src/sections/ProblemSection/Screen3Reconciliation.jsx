import React from "react";
import PropTypes from "prop-types";
import AnalyticsIcon from "../../components/svg/AnalyticsIcon";
import SyncIcon from "../../components/svg/SyncIcon";
import DatabaseIcon from "../../components/svg/DatabaseIcon";

function IconBank({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 10.5 12 4l8.5 6.5"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M5 10.5h14"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 10.5V19M10 10.5V19M14 10.5V19M17.5 10.5V19"
        stroke="#06b6d4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4.5 19h15"
        stroke="#0b43a0"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCard({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2.5"
        stroke="#06b6d4"
        strokeWidth="2"
      />
      <path d="M4 10h16" stroke="#3b82f6" strokeWidth="2" />
      <path
        d="M7 15h6"
        stroke="#0b43a0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="17.3" cy="15.5" r="1.3" fill="#8b5cf6" />
    </svg>
  );
}

const Screen3Reconciliation = React.forwardRef((props, ref) => {
  const {
    screen3CardsRef, // Pass the cards ref array from parent
  } = props;

  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-white rounded-[34px] overflow-hidden"
    >
      <div className="w-full h-full bg-white flex flex-col px-5 py-8">
        {/* HEADER */}
        <div className="problem-screen-header flex items-center justify-between mb-5">
          <div>
            <div className="text-xs text-[#425466] tracking-wide uppercase">
              Reconciliation
            </div>
            <h3 className="text-[#0A2540] text-lg tracking-tight leading-snug">
              Fragmented systems
            </h3>
          </div>

          <div className="w-9 h-9 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center">
            <AnalyticsIcon size={48} />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 space-y-3">
          {/* CARD 1 */}
          <div
            ref={(el) => (screen3CardsRef.current[0] = el)}
            className="bg-gradient-to-br from-[#f0f7ff] to-[#e6f0ff] rounded-xl p-4 border border-[#dbeafe]"
            style={{
              background: "linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%)",
              borderColor: "#dbeafe",
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <DatabaseIcon className="w-10 h-10" />
              </div>

              <div className="flex-1">
                <div className="text-sm text-[#0A2540] mb-1">
                  Data across multiple systems
                </div>
                <div className="text-xs text-[#425466]">
                  Banks, gateways &amp; ERPs don't talk to each other
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="bg-white/80 rounded-md p-2 text-sm text-[#0A2540] flex items-center gap-2">
                <IconBank className="w-4 h-4" />
                <span>3 different banks</span>
              </div>
              <div className="bg-white/80 rounded-md p-2 text-sm text-[#0A2540] flex items-center gap-2">
                <IconCard className="w-4 h-4" />
                <span>5 payment gateways</span>
              </div>
              <div className="bg-white/80 rounded-md p-2 text-sm text-[#0A2540] flex items-center gap-2">
                <AnalyticsIcon size={34} />
                <span>2 ERP systems</span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            ref={(el) => (screen3CardsRef.current[1] = el)}
            className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-xl p-4 border border-[#dbeafe]"
            style={{
              background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
              borderColor: "#dbeafe",
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 bg-[#073f9e] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <SyncIcon size={34} />
              </div>

              <div className="flex-1">
                <div className="text-sm text-[#0A2540] mb-1">
                  Manual reconciliation
                </div>
                <div className="text-xs text-[#425466]">
                  Finance teams spend hours stitching data
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white/80 rounded-lg p-2.5">
                <div className="text-[10px] text-[#425466] mb-1">
                  Weekly hours
                </div>
                <div className="text-sm text-[#0A2540]">18–24h</div>
              </div>
              <div className="bg-white/80 rounded-lg p-2.5">
                <div className="text-[10px] text-[#425466] mb-1">
                  Error rate
                </div>
                <div className="text-sm text-[#0A2540]">12–15%</div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            ref={(el) => (screen3CardsRef.current[2] = el)}
            className="bg-gradient-to-br from-white to-[#f8fafc] rounded-xl p-4 shadow-sm border border-[#e5e7eb]"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              borderColor: "#e5e7eb",
            }}
          >
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-2">
                <AnalyticsIcon size={34} />
                <span className="text-sm text-[#0A2540]">
                  Delayed financial insights
                </span>
              </div>

              <div className="text-xs text-[#425466]">
                Data silos prevent real-time visibility
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#425466]">Time to reconcile</span>
                <span className="text-sm text-[#0A2540]">3–5 days</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#425466]">Discrepancies found</span>
                <span className="text-sm text-[#0A2540]">47 this month</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0A2540] text-white px-6 py-3 rounded-xl text-sm text-center shadow-lg mt-4">
          Fragmented reconciliation
        </div>
      </div>
    </div>
  );
});

Screen3Reconciliation.propTypes = {
  screen3CardsRef: PropTypes.shape({
    current: PropTypes.array,
  }),
};

Screen3Reconciliation.displayName = "Screen3Reconciliation";

export default Screen3Reconciliation;
