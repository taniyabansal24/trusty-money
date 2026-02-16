import React, { useEffect, useState, useRef } from "react";
import ArrowIcon from "../../components/svg/ArrowIcon";

const usageData = [
  {
    service: "API Consumption",
    usage: "1,200",
    unitPrice: "$0.10 per call",
    amount: "$120.00",
  },
  {
    service: "Invoice Generated",
    usage: "350",
    unitPrice: "$2.00 per invoice",
    amount: "$700.00",
  },
  {
    service: "Active Branches",
    usage: "3",
    unitPrice: "$500.00 per branch",
    amount: "$1,500.00",
  },
];

// Animation constants for consistency
const ANIMATION = {
  DURATION: 500,
  EXIT_DURATION: 400,
  EASING: "cubic-bezier(0.34, 1.56, 0.64, 1)", // More spring-like easing for entry
  EASING_EXIT: "cubic-bezier(0.22, 1, 0.36, 1)", // Original easing for exits
  CURSOR_MOVE_DURATION: 700,
  CLICK_DURATION: 300,
};

const MeteredUsageAnimation = () => {
  // Animation states
  const [animationStage, setAnimationStage] = useState(0);

  // Cursor states
  const [cursorOpacity, setCursorOpacity] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorScale, setCursorScale] = useState(1);

  // UI visibility states
  const [headingVisible, setHeadingVisible] = useState(true);
  const [headingOpacity, setHeadingOpacity] = useState(1);
  const [usageContentVisible, setUsageContentVisible] = useState(true);
  const [usageContentOpacity, setUsageContentOpacity] = useState(1);
  const [buttonText, setButtonText] = useState("Issued Invoice");
  const [buttonVisible, setButtonVisible] = useState(true);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  // Content sections with consistent animation states
  const [invoiceState, setInvoiceState] = useState({
    visible: false,
    opacity: 0,
    transform: "scale(0.95) translateY(20px)",
  });

  const [paidSectionState, setPaidSectionState] = useState({
    visible: false,
    opacity: 0,
    transform: "scale(0.9) translateY(30px)", // Start from further away
  });

  // Animation management refs
  const animationRef = useRef(null);
  const activeTimeoutsRef = useRef([]);
  const componentMountedRef = useRef(true);
  const isAnimatingRef = useRef(false);

  // Track and cleanup timeouts
  const trackTimeout = (timeoutId) => {
    if (timeoutId) {
      activeTimeoutsRef.current.push(timeoutId);
    }
    return timeoutId;
  };

  const clearAllAnimations = () => {
    activeTimeoutsRef.current.forEach((timeoutId) => {
      if (timeoutId) clearTimeout(timeoutId);
    });
    activeTimeoutsRef.current = [];

    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }

    isAnimatingRef.current = false;
  };

  // Reset all states
  const resetAllStates = () => {
    if (!componentMountedRef.current) return;

    setAnimationStage(0);
    setCursorOpacity(0);
    setCursorPosition({ x: 0, y: 0 });
    setCursorScale(1);

    setHeadingVisible(true);
    setHeadingOpacity(1);
    setUsageContentVisible(true);
    setUsageContentOpacity(1);
    setButtonText("Issued Invoice");
    setButtonVisible(true);
    setButtonOpacity(1);

    setInvoiceState({
      visible: false,
      opacity: 0,
      transform: "scale(0.95) translateY(20px)",
    });

    setPaidSectionState({
      visible: false,
      opacity: 0,
      transform: "scale(0.9) translateY(30px)",
    });
  };

  // Manual restart
  const handleRestart = () => {
    clearAllAnimations();
    resetAllStates();
    const restartTimeout = setTimeout(() => {
      if (componentMountedRef.current) startAnimation();
    }, 100);
    trackTimeout(restartTimeout);
  };

  const handleStop = () => {
    clearAllAnimations();
    isAnimatingRef.current = false;
    resetAllStates();
  };

  // ========== MAIN ANIMATION SEQUENCE ==========
  const startAnimation = () => {
    if (!componentMountedRef.current || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    clearAllAnimations();

    // Step 1: Initial state - everything visible
    setAnimationStage(1);
    setHeadingVisible(true);
    setHeadingOpacity(1);
    setUsageContentVisible(true);
    setUsageContentOpacity(1);
    setButtonText("Issued Invoice");
    setButtonVisible(true);
    setButtonOpacity(1);
    setInvoiceState((prev) => ({ ...prev, visible: false }));
    setPaidSectionState((prev) => ({ ...prev, visible: false }));

    // Show cursor after a brief pause
    const showCursor = setTimeout(() => {
      if (!componentMountedRef.current) return;
      setCursorOpacity(1);
      setCursorPosition({ x: 390, y: 10 });
      setAnimationStage(2);

      // First click animation (on Issued Invoice button)
      const firstClick = setTimeout(() => {
        if (!componentMountedRef.current) return;
        setCursorScale(0.7);
        setAnimationStage(3);

        // Fade out usage content and heading
        const fadeOutUsage = setTimeout(() => {
          if (!componentMountedRef.current) return;
          setUsageContentOpacity(0);
          setHeadingOpacity(0);
          setAnimationStage(4);

          // After fade out, hide usage content completely and show invoice
          const showInvoice = setTimeout(() => {
            if (!componentMountedRef.current) return;

            // Hide usage content
            setHeadingVisible(false);
            setUsageContentVisible(false);

            // Change button text to "Send Invoice" at the same time as invoice appears
            setButtonText("Send Invoice");

            // Show invoice with entrance animation
            setInvoiceState({
              visible: true,
              opacity: 1,
              transform: "scale(1) translateY(0px)",
            });

            setCursorScale(1);
            setAnimationStage(5);

            // Move cursor to "Send Invoice" button
            const moveToPayNow = setTimeout(() => {
              if (!componentMountedRef.current) return;
              setCursorPosition({ x: 470, y: 10 });
              setCursorScale(0.9);
              setAnimationStage(6);

              // Second click (on Pay Now button)
              const secondClick = setTimeout(() => {
                if (!componentMountedRef.current) return;
                setCursorScale(0.7);
                setAnimationStage(7);

                // Start invoice exit animation
                const fadeOutInvoice = setTimeout(() => {
                  if (!componentMountedRef.current) return;

                  setInvoiceState({
                    visible: true,
                    opacity: 0,
                    transform: "scale(0.95) translateY(-10px)",
                  });

                  setAnimationStage(8);

                  // After invoice fades out, show paid section
                  const showPaidSection = setTimeout(() => {
                    if (!componentMountedRef.current) return;

                    // Hide invoice completely
                    setInvoiceState((prev) => ({ ...prev, visible: false }));

                    // Start button fade out (after 100ms delay from invoice exit)
                    const startButtonFade = setTimeout(() => {
                      if (!componentMountedRef.current) return;

                      // Start button fade out
                      setButtonOpacity(0);

                      // Immediately start hiding cursor
                      setCursorOpacity(0);

                      // After button fades out, hide it completely
                      const hideButton = setTimeout(() => {
                        if (!componentMountedRef.current) return;
                        setButtonVisible(false);
                      }, ANIMATION.DURATION);
                      trackTimeout(hideButton);
                    }, 100); // 100ms delay after invoice exit
                    trackTimeout(startButtonFade);

                    // Paid section appears AFTER button and cursor animations
                    const showPaidSectionWithDelay = setTimeout(
                      () => {
                        if (!componentMountedRef.current) return;

                        // Show paid section with enhanced entrance animation
                        setPaidSectionState({
                          visible: true,
                          opacity: 1,
                          transform: "scale(1) translateY(0px)",
                        });

                        setCursorScale(1);
                        setAnimationStage(9);

                        // Wait for paid section to be visible for 3 seconds before looping
                        const pause = setTimeout(() => {
                          if (!componentMountedRef.current) return;

                          // Reset and loop
                          resetAllStates();
                          isAnimatingRef.current = false;

                          const restart = setTimeout(() => {
                            if (componentMountedRef.current) startAnimation();
                          }, 300);
                          trackTimeout(restart);
                        }, 3000);
                        trackTimeout(pause);
                      },
                      100 + ANIMATION.DURATION + 50,
                    );
                    trackTimeout(showPaidSectionWithDelay);
                  }, ANIMATION.EXIT_DURATION); // Wait for invoice to fully exit (400ms)
                  trackTimeout(showPaidSection);
                }, 300); // Small delay after click before invoice starts exiting
                trackTimeout(fadeOutInvoice);
              }, ANIMATION.CLICK_DURATION);
              trackTimeout(secondClick);
            }, 800); // Time to move cursor to Pay Now button
            trackTimeout(moveToPayNow);
          }, ANIMATION.EXIT_DURATION); // Wait for usage content to fade out
          trackTimeout(showInvoice);
        }, ANIMATION.CLICK_DURATION); // Hold click animation
        trackTimeout(fadeOutUsage);
      }, ANIMATION.CLICK_DURATION);
      trackTimeout(firstClick);
    }, 1000); // Initial delay before cursor appears
    trackTimeout(showCursor);

    animationRef.current = showCursor;
  };

  // Initialize animation
  useEffect(() => {
    componentMountedRef.current = true;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearAllAnimations();
      } else {
        if (!isAnimatingRef.current) {
          setTimeout(() => {
            if (componentMountedRef.current) startAnimation();
          }, 500);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const startDelay = setTimeout(() => {
      if (componentMountedRef.current) startAnimation();
    }, 1000);
    trackTimeout(startDelay);

    return () => {
      componentMountedRef.current = false;
      clearAllAnimations();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0px);
          }
        }
        @keyframes fadeOutScale {
          0% {
            opacity: 1;
            transform: scale(1) translateY(0px);
          }
          100% {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
        }
      `}</style>

      <div className="relative max-w-[530px] bg-white border border-slate-200 rounded-xl shadow-lg p-5 h-[440px] overflow-hidden">
        {/* Cursor */}
        <div
          id="hero-animation-cursor"
          className="absolute z-20 transition-all duration-500 ease-out hidden sm:block"
          style={{
            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) scale(${cursorScale})`,
            opacity: cursorOpacity,
            transitionTimingFunction: ANIMATION.EASING,
            transition: `opacity ${ANIMATION.DURATION}ms ease-out, transform ${ANIMATION.CURSOR_MOVE_DURATION}ms ${ANIMATION.EASING}`,
          }}
        >
          <ArrowIcon width={30} height={30} />
        </div>

        {/* Header - contains both heading and button */}
        <div
          className="flex items-center justify-between pb-2 transition-all duration-500 ease-out"
          style={{
            opacity: headingVisible ? headingOpacity : 1,
            transitionTimingFunction: ANIMATION.EASING,
          }}
        >
          {/* Heading - fades out independently */}
          {headingVisible && (
            <h2
              className="text-base font-bold txt-blue transition-all duration-500 ease-out"
              style={{
                opacity: headingOpacity,
                transitionTimingFunction: ANIMATION.EASING,
              }}
            >
              Real-Time Metered Usage
            </h2>
          )}
          {!headingVisible && <div className="w-0"></div>}

          {/* Single button - with smooth fade out */}
          {buttonVisible && (
            <button
              className="bg-[#073F9E] text-white text-[11px] font-bold px-3 py-1.5 rounded-md uppercase transition-all duration-500"
              style={{
                opacity: buttonOpacity,
                transition: `opacity ${ANIMATION.DURATION}ms ${ANIMATION.EASING}`,
              }}
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* Real Time Metered Usage Content */}
        {usageContentVisible && (
          <div
            className="transition-all duration-500 ease-out border-t"
            style={{
              opacity: usageContentOpacity,
              transform: `translateY(${usageContentOpacity === 0 ? "-10px" : "0px"})`,
              transitionTimingFunction: ANIMATION.EASING,
            }}
          >
            {/* Meta Info */}
            <div className="mt-3 space-y-0.5">
              <p className="text-[11px] uppercase tracking-wide text-gray-500">
                Monthly Usage Calculation
              </p>
              <p className="text-[11px] uppercase tracking-wide text-gray-500">
                Jan 1 – Jan 31, 2026
              </p>
              <p className="text-[13px] text-gray-700">
                <span className="font-medium">Platform:</span> Zoho Books
              </p>
              <p className="text-[13px] text-gray-700">
                <span className="font-medium">Customer:</span> Rougecodes Pvt
                Ltd
              </p>
            </div>

            {/* Table */}
            <div className="mt-5">
              {/* Table Head */}
              <div className="grid grid-cols-[2fr_1fr_1.5fr_1fr] border-b pb-2">
                <div className="text-[11px] font-semibold uppercase">
                  Service
                </div>
                <div className="text-[11px] font-semibold uppercase">Usage</div>
                <div className="text-[11px] font-semibold uppercase">
                  Unit Price
                </div>
                <div className="text-[11px] font-semibold uppercase">
                  Amount
                </div>
              </div>

              {/* Rows */}
              {usageData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[2fr_1fr_1.5fr_1fr] py-2.5 border-b"
                >
                  <div className="text-[13px] text-gray-800">
                    {item.service}
                  </div>
                  <div className="text-[13px] text-gray-600">{item.usage}</div>
                  <div className="text-[13px] text-gray-600">
                    {item.unitPrice}
                  </div>
                  <div className="text-[13px] font-medium text-gray-900">
                    {item.amount}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-4 pt-3">
              <div className="grid grid-cols-[2fr_1fr_1.5fr_1fr] text-[13px]">
                <div />
                <div />
                <div className="text-gray-700">Subtotal:</div>
                <div className="txt-blue">$2,320.00</div>

                <div />
                <div />
                <div className="text-gray-700">Sales Tax (8%):</div>
                <div className="txt-blue">$185.60</div>
              </div>
              <div className="border-t my-1 w-[230px] ml-[50%]"></div>
              <div className="grid grid-cols-[2fr_1fr_1.5fr_1fr] text-[13px] font-medium">
                <div />
                <div />
                <div>Total Amount:</div>
                <div className="txt-blue">$2,505.60</div>
              </div>
            </div>
          </div>
        )}

        {/* Invoice */}
        {invoiceState.visible && (
          <div className="mt-4">
            <div
              id="workflow-invoice"
              className="mx-auto w-full max-w-[360px] overflow-hidden rounded transition-all duration-500 ease-out"
              style={{
                boxShadow:
                  "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px",
                opacity: invoiceState.opacity,
                transform: invoiceState.transform,
                transitionTimingFunction: ANIMATION.EASING_EXIT,
                transition: `opacity ${ANIMATION.DURATION}ms ease-out, transform ${ANIMATION.DURATION}ms ${ANIMATION.EASING_EXIT}`,
              }}
            >
              <div className="bg-[#FBFBFB] px-6 py-8">
                <img
                  alt="Trusty Money"
                  loading="lazy"
                  width="173"
                  height="46"
                  decoding="async"
                  className="ml-auto w-[76px] shrink-0 grow-0 object-contain"
                  src="https://demo.trustymoney.in/assets/newLOGO-Cj83E8a4.svg"
                />

                <div className="mt-[14px] flex justify-between">
                  <div className="h-2 rounded-full bg-[#D4D4D4] basis-[25%]"></div>
                  <div className="flex basis-[24%] flex-col gap-y-1.5">
                    <div className="h-2 rounded-full bg-[#D4D4D4]"></div>
                    <div className="h-2 rounded-full bg-[#F1F1F1] w-[50%]"></div>
                    <div className="h-2 rounded-full bg-[#F1F1F1] w-[60%]"></div>
                    <div className="h-2 rounded-full bg-[#F1F1F1] w-[90%]"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="pb-1 text-xs font-bold">Invoice</p>
                <div className="flex justify-between border-b border-[#F0F0F0] py-3">
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#D4D4D4] basis-[30%]"></div>
                  </div>
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#D4D4D4] basis-[30%]"></div>
                  </div>
                </div>
                <div className="flex justify-between border-b border-[#F0F0F0] py-3">
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                  </div>
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                  </div>
                </div>
                <div className="flex justify-between border-b border-[#F0F0F0] py-3">
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                  </div>
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                  </div>
                </div>
                <div className="flex justify-between py-3">
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                  </div>
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="flex justify-between border-b border-[#F0F0F0] py-3">
                  <div className="flex basis-1/4">
                    <div className="h-2 rounded-full bg-[#D4D4D4] basis-[40%]"></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div className="h-2 rounded-full bg-[#D4D4D4] basis-[40%]"></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div className="h-2 rounded-full bg-[#D4D4D4] basis-[40%]"></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div className="h-2 rounded-full bg-[#D4D4D4] basis-[40%]"></div>
                  </div>
                </div>
                <div className="flex justify-between py-3">
                  <div className="flex basis-1/4">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[40%]"></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[40%]"></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[40%]"></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[40%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Paid Section - with enhanced smooth entry */}
        {paidSectionState.visible && (
          <div
            className="flex flex-col items-center justify-center h-[340px] text-center"
            style={{
              opacity: paidSectionState.opacity,
              transform: paidSectionState.transform,
              transition: `opacity ${ANIMATION.DURATION * 1.2}ms ${ANIMATION.EASING}, transform ${ANIMATION.DURATION * 1.2}ms ${ANIMATION.EASING}`,
            }}
          >
            {/* Success Icon with its own subtle animation */}
            <div
              className="relative flex items-center justify-center mb-4 transition-all duration-500"
              style={{
                transform: `scale(${paidSectionState.opacity})`,
              }}
            >
              <div className="w-[59px] h-[59px] rounded-full bg-blue-600/20 flex items-center justify-center">
                <div className="w-[49px] h-[49px] rounded-full bg-[#073F9E] shadow-md flex items-center justify-center">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                      d="M1 5L5 9L13 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <h3
              className="text-[20px] font-bold text-[#1B1B1B] mb-1 transition-all duration-500"
              style={{ opacity: paidSectionState.opacity }}
            >
              Invoice Sent
            </h3>
            <p
              className="text-[12px] font-bold text-[#1B1B1B] mb-2 transition-all duration-500"
              style={{ opacity: paidSectionState.opacity }}
            >
              Your invoice has been successfully delivered!
            </p>
            <p
              className="text-[10px] text-[#1B1B1B] transition-all duration-500"
              style={{ opacity: paidSectionState.opacity }}
            >
              Sent via: Zoho
            </p>
            <p
              className="text-[10px] text-[#1B1B1B] mb-6 transition-all duration-500"
              style={{ opacity: paidSectionState.opacity }}
            >
              Invoice ID: ZB-INV-89321
            </p>

            <div className="flex flex-col gap-2">
              <button
                className="w-[164px] h-[25px] bg-[#073F9E] text-white text-[10px] font-semibold rounded-full shadow transition-all duration-500"
                style={{
                  opacity: paidSectionState.opacity,
                  transform: `scale(${paidSectionState.opacity})`,
                }}
              >
                Done
              </button>
              <button
                className="w-[164px] h-[26px] bg-white text-[#073F9E] text-[9px] font-semibold rounded-full shadow transition-all duration-500"
                style={{
                  opacity: paidSectionState.opacity,
                  transform: `scale(${paidSectionState.opacity})`,
                }}
              >
                View Invoice
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MeteredUsageAnimation;
