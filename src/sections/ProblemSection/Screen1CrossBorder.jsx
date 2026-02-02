import React from "react";
import GlobeIcon from "../../components/svg/GlobeIcon";
import DollarIcon from "../../components/svg/DollarIcon";

// Use React.forwardRef to forward the ref to the main div
const Screen1CrossBorder = React.forwardRef((props, ref) => {
  const {
    globeRef,
    ringsRef,
    titleRef,
    subtitleRef,
    dotsRef,
    dollarRefs
  } = props;

  return (
    <div
      ref={ref} // This is the screenRef for this screen
      className="absolute inset-0 bg-white rounded-[34px] overflow-hidden"
      style={{ opacity: 1 }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="relative flex items-center justify-center h-[160px] w-full">
          <div className="relative">
            {/* Rings */}
            <div
              className="w-24 h-24 relative"
              style={{ transform: "rotate(14deg)" }}
            >
              <div
                ref={(el) => {
                  if (ringsRef && ringsRef.current) {
                    ringsRef.current[0] = el;
                  }
                }}
                className="absolute inset-0 border-2 border-[#0B43A0]/20 rounded-full"
              />
              <div
                ref={(el) => {
                  if (ringsRef && ringsRef.current) {
                    ringsRef.current[1] = el;
                  }
                }}
                className="absolute inset-2 border-2 border-[#0B43A0]/30 rounded-full"
              />
              <div
                ref={(el) => {
                  if (ringsRef && ringsRef.current) {
                    ringsRef.current[2] = el;
                  }
                }}
                className="absolute inset-4 border-2 border-[#0B43A0]/40 rounded-full"
              />
            </div>

            {/* Center globe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                ref={globeRef}
                className="w-14 h-14 bg-gradient-to-br from-[#0B43A0] to-[#073f9e] rounded-2xl flex items-center justify-center shadow-lg"
              >
                <GlobeIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Floating dollar icons */}
            {[0, 1, 2].map((_, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (dollarRefs && dollarRefs.current) {
                    dollarRefs.current[i] = el;
                  }
                }}
                className="absolute top-3/4 left-3/4 -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex: 10 - i }}
              >
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <DollarIcon className="w-4 h-4 text-[#4f7aff]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <h1
            ref={titleRef}
            className="text-[#0A2540] text-lg font-semibold tracking-tight mb-1"
          >
            Cross-Border Operations
          </h1>
          <p ref={subtitleRef} className="text-[#425466] text-sm">
            More than just transactions
          </p>
        </div>

        <div className="flex gap-1.5 mt-8">
          <span
            ref={(el) => {
              if (dotsRef && dotsRef.current) {
                dotsRef.current[0] = el;
              }
            }}
            className="w-1.5 h-1.5 bg-[#0B43A0] rounded-full opacity-60"
          />
          <span
            ref={(el) => {
              if (dotsRef && dotsRef.current) {
                dotsRef.current[1] = el;
              }
            }}
            className="w-1.5 h-1.5 bg-[#0B43A0] rounded-full opacity-60"
          />
          <span
            ref={(el) => {
              if (dotsRef && dotsRef.current) {
                dotsRef.current[2] = el;
              }
            }}
            className="w-1.5 h-1.5 bg-[#0B43A0] rounded-full opacity-60"
          />
        </div>
      </div>
    </div>
  );
});

Screen1CrossBorder.displayName = "Screen1CrossBorder";

export default Screen1CrossBorder;