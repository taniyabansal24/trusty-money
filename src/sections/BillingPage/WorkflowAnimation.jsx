import React, { useEffect, useState, useRef } from "react";
import "./animation.css";
import ArrowIcon from "../../components/svg/ArrowIcon";
import LoadingSpinner from "../../components/svg/LoadingSpinner";
import CheckIcon from "../../components/svg/CheckIcon";
import MoreDotsIcon from "../../components/svg/MoreDotsIcon";
import CalendarArrowIcon from "../../components/svg/CalendarArrowIcon";
import LayersIcon from "../../components/svg/LayersIcon";
import VerifiedIcon from "../../components/svg/VerifiedIcon";
import ClockIcon from "../../components/svg/ClockIcon";
import UserGroupIcon from "../../components/svg/UserGroupIcon";

const WorkflowAnimation = () => {
  // Animation states
  const [animationStage, setAnimationStage] = useState(0);
  const [invoiceOpacity, setInvoiceOpacity] = useState(1);
  const [invoiceTransform, setInvoiceTransform] = useState(
    "translate(0px, 0px)",
  );
  const [dashboardOpacity, setDashboardOpacity] = useState(0);
  const [dashboardTransform, setDashboardTransform] = useState("scale(0.95)");
  const [cursorOpacity, setCursorOpacity] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorScale, setCursorScale] = useState(1);
  const [activityOpacity, setActivityOpacity] = useState(0);
  const [activityTransform, setActivityTransform] =
    useState("translateY(20px)");
  const [activityHeight, setActivityHeight] = useState("32px");

  // Button state variables
  const [loadingOpacity, setLoadingOpacity] = useState(0);
  const [checkOpacity, setCheckOpacity] = useState(0);
  const [startedOpacity, setStartedOpacity] = useState(0);
  const [startedTransform, setStartedTransform] = useState("translateX(-25%)");
  const [startTextOpacity, setStartTextOpacity] = useState(1);
  const [startTextTransform, setStartTextTransform] = useState("scale(1)");

  const [activityItems, setActivityItems] = useState([
    { id: 1, opacity: 0, transform: "translateY(10px)", scale: 1 },
    { id: 2, opacity: 0, transform: "translateY(10px)", scale: 1 },
    { id: 3, opacity: 0, transform: "translateY(10px)", scale: 1 },
  ]);

  // ========== ENHANCED: Animation Management System ==========
  const animationRef = useRef(null);
  const activeTimeoutsRef = useRef([]);
  const activeIntervalsRef = useRef([]);
  const componentMountedRef = useRef(true);
  const isAnimatingRef = useRef(false);
  const hasStartedRef = useRef(false);

  // Track and cleanup timeouts
  const trackTimeout = (timeoutId) => {
    if (timeoutId) {
      activeTimeoutsRef.current.push(timeoutId);
    }
    return timeoutId;
  };

  const trackInterval = (intervalId) => {
    if (intervalId) {
      activeIntervalsRef.current.push(intervalId);
    }
    return intervalId;
  };

  const clearAllAnimations = () => {
    // Clear all timeouts
    activeTimeoutsRef.current.forEach((timeoutId) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    });
    activeTimeoutsRef.current = [];

    // Clear all intervals
    activeIntervalsRef.current.forEach((intervalId) => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });
    activeIntervalsRef.current = [];

    // Clear main animation ref
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
    setInvoiceOpacity(1);
    setInvoiceTransform("translate(0px, 0px)");
    setDashboardOpacity(0);
    setDashboardTransform("scale(0.95)");
    setCursorOpacity(0);
    setCursorPosition({ x: 0, y: 0 });
    setCursorScale(1);
    setActivityOpacity(0);
    setActivityTransform("translateY(20px)");
    setActivityHeight("32px");

    // Reset button states
    setLoadingOpacity(0);
    setCheckOpacity(0);
    setStartedOpacity(0);
    setStartedTransform("translateX(-25%)");
    setStartTextOpacity(1);
    setStartTextTransform("scale(1)");

    setActivityItems([
      { id: 1, opacity: 0, transform: "translateY(10px)", scale: 1 },
      { id: 2, opacity: 0, transform: "translateY(10px)", scale: 1 },
      { id: 3, opacity: 0, transform: "translateY(10px)", scale: 1 },
    ]);
  };

  // Manual restart function
  const handleRestart = () => {
    clearAllAnimations();
    hasStartedRef.current = false;

    // Reset states immediately
    resetAllStates();

    // Small delay before restarting to ensure clean state
    const restartTimeout = setTimeout(() => {
      if (componentMountedRef.current) {
        startAnimation();
      }
    }, 100);

    trackTimeout(restartTimeout);
  };

  // Stop animation function
  const handleStop = () => {
    clearAllAnimations();
    hasStartedRef.current = false;
    isAnimatingRef.current = false;

    // Reset to initial state
    resetAllStates();
  };

  // Start animation sequence
  const startAnimation = () => {
    if (!componentMountedRef.current || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    hasStartedRef.current = true;
    clearAllAnimations();

    // Scene 1: Invoice shows (0s)
    setAnimationStage(1);

    // Pause for 1 second
    const pause1 = setTimeout(() => {
      if (!componentMountedRef.current) return;

      // Scene 2: Activity card appears with first notification (1s → 1.8s)
      setActivityOpacity(1);
      setActivityTransform("translateY(0px)");
      setAnimationStage(2);

      // Show first activity item after card appears
      const showFirstActivity = setTimeout(() => {
        if (!componentMountedRef.current) return;

        const updatedItems = [...activityItems];
        updatedItems[0] = {
          ...updatedItems[0],
          opacity: 1,
          transform: "translateY(0px)",
        };
        setActivityItems(updatedItems);
        setActivityHeight("64px");
        setAnimationStage(3);

        // Pause then show second notification (communication)
        const pauseForSecond = setTimeout(() => {
          if (!componentMountedRef.current) return;

          updatedItems[1] = {
            ...updatedItems[1],
            opacity: 1,
            transform: "translateY(0px)",
          };
          setActivityItems(updatedItems);
          setActivityHeight("96px");
          setAnimationStage(4);

          // Pause then transition to dashboard (3.5s → 4.2s)
          const transitionToDashboard = setTimeout(() => {
            if (!componentMountedRef.current) return;

            // Fade out invoice
            setInvoiceOpacity(0);
            setInvoiceTransform("scale(0.95)");

            // Fade in dashboard
            setDashboardOpacity(1);
            setDashboardTransform("scale(1)");
            setAnimationStage(5);

            // Show cursor and move to start button (4.2s → 5.0s)
            const showCursor = setTimeout(() => {
              if (!componentMountedRef.current) return;

              setCursorOpacity(1);
              setCursorPosition({ x: 0, y: 0 });
              setAnimationStage(6);

              // Move cursor to start button (5.0s → 5.8s)
              const moveToButton = setTimeout(() => {
                if (!componentMountedRef.current) return;

                // Adjusted position for your new button layout
                setCursorPosition({ x: 150, y: -103 });
                setCursorScale(0.9);
                setAnimationStage(7);

                // Pause then click (5.8s → 6.3s)
                const pauseBeforeClick = setTimeout(() => {
                  if (!componentMountedRef.current) return;

                  // Click animation
                  setCursorScale(0.7);
                  setAnimationStage(8);

                  // Show loading spinner (6.3s → 6.5s)
                  const showLoading = setTimeout(() => {
                    if (!componentMountedRef.current) return;

                    // Hide start text
                    setStartTextOpacity(0);
                    setStartTextTransform("scale(0.9)");

                    // Show loading spinner
                    setLoadingOpacity(1);
                    setCursorScale(0.9);
                    setAnimationStage(9);

                    // Loading animation (6.5s → 7.5s)
                    const loadingDuration = setTimeout(() => {
                      if (!componentMountedRef.current) return;

                      // Hide loading spinner
                      setLoadingOpacity(0);

                      // Show checkmark
                      setCheckOpacity(1);

                      // Show "Started" text
                      const showStarted = setTimeout(() => {
                        if (!componentMountedRef.current) return;
                        setStartedOpacity(1);
                        setStartedTransform("translateX(0px)");
                      }, 300);
                      trackTimeout(showStarted);

                      setAnimationStage(10);

                      // Add third activity notification (7.5s → 8.0s)
                      const addThirdActivity = setTimeout(() => {
                        if (!componentMountedRef.current) return;

                        const finalItems = [...updatedItems];
                        finalItems[2] = {
                          ...finalItems[2],
                          opacity: 1,
                          transform: "translateY(0px)",
                        };
                        setActivityItems(finalItems);
                        setActivityHeight("128px");
                        setAnimationStage(11);

                        // Pause then fade out cursor (8.0s → 8.5s)
                        const fadeOutCursor = setTimeout(() => {
                          if (!componentMountedRef.current) return;

                          setCursorOpacity(0);
                          setAnimationStage(12);

                          // Fade out activity box (8.5s → 9.0s)
                          const fadeOutActivity = setTimeout(() => {
                            if (!componentMountedRef.current) return;

                            setActivityOpacity(0);
                            setActivityTransform("translateY(20px)");
                            setAnimationStage(13);

                            // Fade out dashboard (9.0s → 9.5s)
                            const fadeOutDashboard = setTimeout(() => {
                              if (!componentMountedRef.current) return;

                              setDashboardOpacity(0);
                              setDashboardTransform("scale(0.95)");
                              setAnimationStage(14);

                              // Show invoice again (9.5s → 10.0s)
                              const showInvoiceAgain = setTimeout(() => {
                                if (!componentMountedRef.current) return;

                                setInvoiceOpacity(1);
                                setInvoiceTransform("translate(0px, 0px)");
                                setAnimationStage(15);

                                // Reset for loop (10.0s → 12.0s)
                                const resetDelay = setTimeout(() => {
                                  if (!componentMountedRef.current) return;

                                  // Reset states before restarting
                                  resetAllStates();
                                  isAnimatingRef.current = false;

                                  // Restart animation after pause
                                  const restart = setTimeout(() => {
                                    if (!componentMountedRef.current) return;
                                    startAnimation();
                                  }, 2000); // 2 second pause before restart
                                  trackTimeout(restart);
                                }, 1000);
                                trackTimeout(resetDelay);
                              }, 500);
                              trackTimeout(showInvoiceAgain);
                            }, 500);
                            trackTimeout(fadeOutDashboard);
                          }, 500);
                          trackTimeout(fadeOutActivity);
                        }, 500);
                        trackTimeout(fadeOutCursor);
                      }, 500);
                      trackTimeout(addThirdActivity);
                    }, 1000); // 1 second loading
                    trackTimeout(loadingDuration);
                  }, 200);
                  trackTimeout(showLoading);
                }, 500);
                trackTimeout(pauseBeforeClick);
              }, 800); // 800ms cursor movement
              trackTimeout(moveToButton);
            }, 800); // 800ms delay before cursor appears
            trackTimeout(showCursor);
          }, 1300); // 1300ms pause before transition
          trackTimeout(transitionToDashboard);
        }, 1500); // 1500ms pause before second activity
        trackTimeout(pauseForSecond);
      }, 800); // 800ms after activity card appears
      trackTimeout(showFirstActivity);
    }, 1000); // Initial 1 second pause
    trackTimeout(pause1);

    // Store main animation ref
    animationRef.current = pause1;
  };

  // Initialize animation
  useEffect(() => {
    componentMountedRef.current = true;

    // Handle visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden - pause animations
        clearAllAnimations();
      } else {
        // Page is visible again - restart if we were animating
        if (hasStartedRef.current && !isAnimatingRef.current) {
          setTimeout(() => {
            if (componentMountedRef.current) {
              startAnimation();
            }
          }, 500);
        }
      }
    };

    // Add visibility change listener
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Start animation on mount
    const startDelay = setTimeout(() => {
      if (componentMountedRef.current) {
        startAnimation();
      }
    }, 1000); // Give time for initial render

    trackTimeout(startDelay);

    // Cleanup function
    return () => {
      componentMountedRef.current = false;
      clearAllAnimations();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // ========== ADDED: Debug Controls Component ==========
  const DebugControls = () => {
    if (process.env.NODE_ENV !== "development") return null;

    return (
      <div
        className="fixed bottom-4 right-4 z-50 flex gap-2 opacity-70 transition-opacity hover:opacity-100"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "8px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          onClick={handleRestart}
          className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
        >
          Restart
        </button>
        <button
          onClick={handleStop}
          className="px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded hover:bg-red-700 transition-colors"
        >
          Stop
        </button>
        <div className="px-2 py-1 text-xs font-mono bg-gray-100 rounded">
          Stage: {animationStage}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Debug Controls - Only in development */}
      {/* <DebugControls /> */}

      <div className="">
        <div className="relative w-full">
          <div className="relative mx-auto flex w-full items-center justify-center">
            {/* Cursor */}
            <div
              id="hero-animation-cursor"
              className="absolute z-20 transition-all duration-500 ease-out"
              style={{
                transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) scale(${cursorScale})`,
                opacity: cursorOpacity,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <ArrowIcon width={30} height={30} />
            </div>

            {/* Invoice */}
            <div
              id="workflow-invoice"
              className="mx-auto w-full max-w-[360px] overflow-hidden rounded transition-all duration-500 ease-out"
              style={{
                boxShadow:
                  "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px",
                opacity: invoiceOpacity,
                transform: invoiceTransform,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {/* Invoice content (same as before) */}
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
                  <div
                    className="h-2 rounded-full bg-[#D4D4D4] invoice-row basis-[25%]"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  ></div>
                  <div
                    className="invoice-row flex basis-[24%] flex-col gap-y-1.5"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <div className="h-2 rounded-full bg-[#D4D4D4]"></div>
                    <div className="h-2 rounded-full bg-[#F1F1F1] w-[50%]"></div>
                    <div className="h-2 rounded-full bg-[#F1F1F1] w-[60%]"></div>
                    <div className="h-2 rounded-full bg-[#F1F1F1] w-[90%]"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="pb-1 text-xs font-bold">Billing</p>
                <div
                  className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#D4D4D4] basis-[30%]"></div>
                  </div>
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#D4D4D4] basis-[30%]"></div>
                  </div>
                </div>
                <div
                  className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                  </div>
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                  </div>
                </div>
                <div
                  className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                  </div>
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                  </div>
                </div>
                <div
                  className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                  </div>
                  <div className="flex basis-1/2">
                    <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div
                  className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
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
                <div
                  className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
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

            {/* Dashboard */}
            <div
              id="workflow-dashboard"
              className="absolute w-full max-w-[512px] transition-all duration-500 ease-out"
              style={{
                opacity: dashboardOpacity,
                transform: dashboardTransform,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div
                className="relative w-full overflow-hidden rounded-lg border border-[#e4e8ef] border-opacity-10 bg-white py-5 pl-6 pr-4"
                style={{
                  boxShadow:
                    "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px",
                }}
              >
                <div className="flex w-full justify-between gap-x-3">
                  <div className="flex items-center gap-2">
                    <a href="/">
                      <img
                        src="https://demo.trustymoney.in/assets/newLOGO-Cj83E8a4.svg"
                        alt="Trusty Money Logo"
                        width="155"
                        height="24"
                        fetchpriority="high"
                        decoding="async"
                      />
                    </a>
                  </div>
                  <div className=" flex w-full items-center justify-stretch gap-2 text-sm font-bold sm:mt-0 sm:w-auto">
                    <div
                      className="flex h-9 w-full items-center justify-center rounded-lg border border-[#e4e8ef] border-opacity-10 bg-white px-3"
                      style={{
                        boxShadow: "rgba(20, 23, 28, 0.08) 0px 2px 2px 0px",
                      }}
                    >
                      <p className="text-[#344054]">Save</p>
                    </div>
                    <div
                      id="hero-animation-start-billing"
                      className="flex h-9 w-[120px] items-center justify-center rounded-lg border bg-[#073F9E] text-white relative overflow-hidden"
                      style={{
                        boxShadow: "rgba(20, 23, 28, 0.08) 0px 2px 2px 0px",
                        minWidth: "120px",
                        maxWidth: "120px",
                      }}
                    >
                      {/* Loading Spinner - Updated with opacity control */}
                      <LoadingSpinner
                        opacity={loadingOpacity}
                        spinning={loadingOpacity === 1}
                        className="loading absolute transition-opacity duration-300"
                        style={{
                          opacity: loadingOpacity,
                          animation:
                            loadingOpacity === 1
                              ? "spin 0.4s linear infinite"
                              : "none",
                        }}
                      />

                      {/* Checkmark and Started text - Updated with opacity control */}
                      <div className="absolute flex items-center space-x-2 whitespace-nowrap">
                        <CheckIcon
                          opacity={checkOpacity}
                          style={{
                            opacity: checkOpacity,
                            transitionDelay: checkOpacity === 1 ? "0.3s" : "0s",
                          }}
                        />

                        <span
                          className="started inline-block transition-all duration-300 ease-out"
                          style={{
                            opacity: startedOpacity,
                            transform: startedTransform,
                            transitionTimingFunction:
                              "cubic-bezier(0.22, 1, 0.36, 1)",
                          }}
                        >
                          Started
                        </span>
                      </div>

                      {/* Start Billing text - Updated with opacity control */}
                      <p
                        className="start whitespace-nowrap transition-all duration-300 ease-out absolute inset-0 flex items-center justify-center"
                        style={{
                          opacity: startTextOpacity,
                          transform: startTextTransform,
                          transitionTimingFunction:
                            "cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                      >
                        Start billing
                      </p>
                    </div>
                    <div className="hidden items-center p-2 sm:flex">
                      <MoreDotsIcon size={20} color="#073F9E" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  id="hero-animation-bottom"
                  className="mt-3 flex w-full flex-col items-start justify-start gap-4 overflow-hidden rounded-lg bg-white py-5"
                  style={{
                    boxShadow:
                      "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px",
                  }}
                >
                  <div className="relative flex items-center justify-start self-stretch px-6">
                    <p className="text-left text-base font-bold text-[#14171c]">
                      Pricing
                    </p>
                  </div>
                  <div className="flex w-full items-start justify-between px-4">
                    {/* Dashboard content remains the same */}
                    <div className="flex flex-col items-start justify-start text-[#14171c]">
                      <div className="relative flex h-9 items-center gap-2 px-2">
                        <p className="text-left text-xs font-bold uppercase text-[#7483a0]">
                          product
                        </p>
                      </div>
                      <div className="relative overflow-hidden px-2">
                        <div className="flex h-9 max-w-full items-center justify-start gap-2">
                          <p className="min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap text-right text-sm">
                            Platform Access
                          </p>
                        </div>
                      </div>
                      <div className="relative overflow-hidden px-2">
                        <div className="flex h-9 max-w-full items-center justify-start gap-2">
                          <p className="min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap text-right text-sm">
                            Onboarding fees
                          </p>
                        </div>
                      </div>
                      <div className="relative overflow-hidden px-2">
                        <div className="flex h-9 max-w-full items-center justify-start gap-2">
                          <p className="min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap text-right text-sm">
                            API Usage (Tier 1)
                          </p>
                          {/* <LayersIcon size={24} color="#073F9E" /> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative hidden sm:flex h-9 items-center justify-start gap-2 self-stretch px-2">
                        <p className="hero-badge text-left text-xs font-bold uppercase text-[#7483a0]">
                          frequency
                        </p>
                      </div>

                      <div className="hidden sm:block relative self-stretch overflow-hidden px-2">
                        <div className="flex h-9 items-center justify-start gap-2">
                          <CalendarArrowIcon size={24} color="#073F9E" />
                          <p className="feature-description text-left text-[#344054]">
                            Annually
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:block relative self-stretch overflow-hidden px-2">
                        <div className="flex h-9 items-center justify-start gap-2">
                          <ClockIcon size={17} />
                          <p className="feature-description text-left text-[#344054]">
                            One time
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:block relative self-stretch overflow-hidden px-2">
                        <div className="flex h-9 items-center justify-start gap-2">
                          <UserGroupIcon />
                          <p className="feature-description text-left text-[#344054]">
                            Monthly
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative flex h-9 items-center justify-end gap-2 self-stretch px-2">
                          <p className="text-left text-xs font-bold uppercase text-[#7483a0]">
                            price
                          </p>
                        </div>
                        <div className="relative w-full overflow-hidden px-2">
                          <div className="flex h-9 items-center justify-end gap-2">
                            <p className="flex-grow text-right text-sm text-[#14171c]">
                              $5,000.00
                            </p>
                          </div>
                        </div>
                        <div className="relative w-full overflow-hidden px-2">
                          <div className="flex h-9 items-center justify-end gap-2">
                            <p className="flex-grow text-right text-sm text-[#14171c]">
                              $5,900.00
                            </p>
                          </div>
                        </div>
                        <div className="relative w-full overflow-hidden px-2">
                          <div className="flex h-9 items-center justify-end gap-2">
                            <p className="flex-grow text-right text-sm text-[#14171c]">
                              From $0.20
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex h-9 w-9 items-center justify-center px-2"></div>
                        <div className="overflow-hidden">
                          <div className="flex h-9 w-9 items-center justify-center">
                            <MoreDotsIcon className="h-6 w-6 text-gray-400" />
                          </div>
                        </div>
                        <div className="overflow-hidden">
                          <div className="flex h-9 w-9 items-center justify-center">
                            <MoreDotsIcon />
                          </div>
                        </div>
                        <div className="overflow-hidden">
                          <div className="flex h-9 w-9 items-center justify-center">
                            <MoreDotsIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Card */}
            <div className="absolute h-full w-full max-w-[calc(512px+40px*2)]">
              <div
                id="workflow-activity"
                className="absolute left-0 top-[68%] rounded-lg bg-white p-4 transition-all duration-500 ease-out"
                style={{
                  boxShadow:
                    "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px",
                  transform: activityTransform,
                  opacity: activityOpacity,
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <p className="text-xs font-bold">Activity</p>
                <div
                  id="workflow-activity-list"
                  className="mt-3 min-w-[262px] overflow-hidden transition-all duration-500 ease-out"
                  style={{
                    height: activityHeight,
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {/* Activity Item 1 */}
                  <div
                    className="workflow-activity-item transition-all duration-500 ease-out"
                    style={{
                      transform: activityItems[0].transform,
                      opacity: activityItems[0].opacity,
                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <div className="flex items-start text-xs">
                      <div className="relative flex flex-col items-center mr-2">
                        <img
                          alt="Facu Montanaro avatar image"
                          loading="lazy"
                          width="16"
                          height="16"
                          decoding="async"
                          className="h-4 w-4 shrink-0 grow-0 rounded-full"
                          src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww"
                        />
                        <div
                          className="line my-1"
                          style={{
                            transform: "scale(0.9, 0.9)",
                            opacity:
                              activityItems[0].opacity > 0 &&
                              activityItems[1].opacity > 0
                                ? 1
                                : 0,
                          }}
                        >
                          <div className="h-6 w-0.5 rounded-full bg-[#D1D9E4]"></div>
                        </div>
                      </div>
                      <div className="text-[#1D2939]">
                        <p className="">
                          Joe <span className="text-[#596575]">(Sales)</span>
                        </p>
                        <p className="">Shall we initiate the Quotation?</p>
                      </div>
                    </div>
                  </div>

                  {/* Activity Item 2 */}
                  <div
                    className="workflow-activity-item transition-all duration-500 ease-out"
                    style={{
                      transform: activityItems[1].transform,
                      opacity: activityItems[1].opacity,
                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <div className="flex items-start text-xs">
                      <div className="relative flex flex-col items-center mr-2">
                        <img
                          alt="Riya Grover avatar image"
                          loading="lazy"
                          width="16"
                          height="16"
                          decoding="async"
                          className="h-4 w-4 shrink-0 grow-0 rounded-full"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <div
                          className="line my-1"
                          style={{
                            opacity:
                              activityItems[1].opacity > 0 &&
                              activityItems[2].opacity > 0
                                ? 1
                                : 0,
                          }}
                        >
                          <div className="h-6 w-0.5 rounded-full bg-[#D1D9E4]"></div>
                        </div>
                      </div>
                      <div className="text-[#1D2939]">
                        <p className="">
                          Rohan{" "}
                          <span className="text-[#596575]">(Finance)</span>
                        </p>
                        <p className="">Sure!</p>
                      </div>
                    </div>
                  </div>

                  {/* Activity Item 3 */}
                  <div
                    className="workflow-activity-item transition-all duration-500 ease-out"
                    style={{
                      transform: activityItems[2].transform,
                      opacity: activityItems[2].opacity,
                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <div className="flex items-start text-xs">
                      <div className="relative flex flex-col items-center mr-2">
                        <div className="rounded-full w-4 h-4 flex items-center justify-center">
                          <VerifiedIcon className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="text-[#1D2939]">
                        <p>Billing schedule started</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkflowAnimation;