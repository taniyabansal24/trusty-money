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

  // Quotation version state
  const [quotationVersion, setQuotationVersion] = useState(1);

  // NEW: Contract mode state
  const [isContractMode, setIsContractMode] = useState(false);

  const [dashboardOpacity, setDashboardOpacity] = useState(0);
  const [dashboardTransform, setDashboardTransform] = useState("scale(0.95)");
  const [cursorOpacity, setCursorOpacity] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorScale, setCursorScale] = useState(1);

  // Activity card states - SIMPLIFIED
  const [activityOpacity, setActivityOpacity] = useState(0);
  const [activityTransform, setActivityTransform] =
    useState("translateY(20px)");
  const [currentMessages, setCurrentMessages] = useState([]);

  // Refs for smooth height
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Button state variables
  const [loadingOpacity, setLoadingOpacity] = useState(0);
  const [checkOpacity, setCheckOpacity] = useState(0);
  const [startedOpacity, setStartedOpacity] = useState(0);
  const [startedTransform, setStartedTransform] = useState("translateX(-25%)");
  const [startTextOpacity, setStartTextOpacity] = useState(1);
  const [startTextTransform, setStartTextTransform] = useState("scale(1)");

  // Animation management refs
  const animationRef = useRef(null);
  const activeTimeoutsRef = useRef([]);
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

  // SIMPLIFIED: Update height based on content
  const updateHeight = () => {
    if (contentRef.current && activityOpacity === 1) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
    } else {
      setContentHeight(0);
    }
  };

  // Update height when messages change
  useEffect(() => {
    if (activityOpacity === 1) {
      // Use requestAnimationFrame for silky smooth height updates
      requestAnimationFrame(() => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
      });
    }
  }, [currentMessages, activityOpacity]);

  // SIMPLIFIED: Close activity card
  const closeActivityCard = () => {
    setActivityOpacity(0);
    setActivityTransform("translateY(20px)");
    setContentHeight(0);
    // Clear messages AFTER card closes
    setTimeout(() => {
      setCurrentMessages([]);
    }, 700); // Match transition duration
  };

  // SIMPLIFIED: Open activity card
  const openActivityCard = () => {
    setActivityOpacity(1);
    setActivityTransform("translateY(0px)");
  };

  // SIMPLIFIED: Add message - NO OPACITY TOGGLING, just push
  const addMessage = (message) => {
    setCurrentMessages((prev) => [
      ...prev,
      { ...message, id: Date.now() + Math.random() },
    ]);
  };

  // EXIT animation for invoice
  const exitInvoice = () => {
    setInvoiceOpacity(0);
    setInvoiceTransform("translateX(-20px) scale(0.9)");
  };

  // ENTRANCE animation for invoice
  const enterInvoice = (version) => {
    setQuotationVersion(version);
    setIsContractMode(false);
    setInvoiceOpacity(1);
    setInvoiceTransform("translateX(0px) scale(1)");
  };

  // NEW: ENTRANCE animation for contract
  const enterContract = () => {
    setIsContractMode(true);
    setInvoiceOpacity(1);
    setInvoiceTransform("translateX(0px) scale(1)");
  };

  // Reset all states
  const resetAllStates = () => {
    if (!componentMountedRef.current) return;

    setAnimationStage(0);
    setQuotationVersion(1);
    setIsContractMode(false);
    setInvoiceOpacity(1);
    setInvoiceTransform("translate(0px, 0px)");
    setDashboardOpacity(0);
    setDashboardTransform("scale(0.95)");
    setCursorOpacity(0);
    setCursorPosition({ x: 0, y: 0 });
    setCursorScale(1);
    setActivityOpacity(0);
    setActivityTransform("translateY(20px)");
    setContentHeight(0);
    setCurrentMessages([]);

    // Reset button states
    setLoadingOpacity(0);
    setCheckOpacity(0);
    setStartedOpacity(0);
    setStartedTransform("translateX(-25%)");
    setStartTextOpacity(1);
    setStartTextTransform("scale(1)");
  };

  // Manual restart
  const handleRestart = () => {
    clearAllAnimations();
    hasStartedRef.current = false;
    resetAllStates();
    const restartTimeout = setTimeout(() => {
      if (componentMountedRef.current) startAnimation();
    }, 100);
    trackTimeout(restartTimeout);
  };

  const handleStop = () => {
    clearAllAnimations();
    hasStartedRef.current = false;
    isAnimatingRef.current = false;
    resetAllStates();
  };

  // ========== MAIN ANIMATION SEQUENCE ==========
  // SIMPLIFIED: Clean rounds with proper timing
  // ==============================================
  const startAnimation = () => {
    if (!componentMountedRef.current || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    hasStartedRef.current = true;
    clearAllAnimations();

    // --- ROUND 1: QUOTATION 1 ---
    setAnimationStage(1);
    setQuotationVersion(1);
    setIsContractMode(false);
    setCurrentMessages([]);

    const pause1 = setTimeout(() => {
      if (!componentMountedRef.current) return;

      openActivityCard();
      setAnimationStage(2);

      // Message 1: Sales asks
      const msg1 = setTimeout(() => {
        if (!componentMountedRef.current) return;
        addMessage({
          person: "Joe",
          role: "(Sales)",
          message: "Shall we initiate Quotation 1?",
        });
        setAnimationStage(3);

        // Message 2: Finance REJECTS
        const msg2 = setTimeout(() => {
          if (!componentMountedRef.current) return;
          addMessage({
            person: "Rohan",
            role: "(Finance)",
            message: "Need adjustments - please revise",
          });
          setAnimationStage(4);

          // Close card - clears messages after animation
          const close1 = setTimeout(() => {
            if (!componentMountedRef.current) return;
            closeActivityCard();
            setAnimationStage(5);

            // Exit Quotation 1
            const exit1 = setTimeout(() => {
              if (!componentMountedRef.current) return;
              exitInvoice();
              setAnimationStage(6);

              // Enter Quotation 2
              const enter2 = setTimeout(() => {
                if (!componentMountedRef.current) return;
                enterInvoice(2);
                setAnimationStage(7);

                // --- ROUND 2: QUOTATION 2 ---
                // Reopen card - FRESH START
                const reopen2 = setTimeout(() => {
                  if (!componentMountedRef.current) return;
                  openActivityCard();
                  setAnimationStage(8);

                  // Message 3: Sales asks about Quotation 2
                  const msg3 = setTimeout(() => {
                    if (!componentMountedRef.current) return;
                    addMessage({
                      person: "Joe",
                      role: "(Sales)",
                      message: "How about Quotation 2 with revised terms?",
                    });
                    setAnimationStage(9);

                    // Message 4: Finance REJECTS Quotation 2
                    const msg4 = setTimeout(() => {
                      if (!componentMountedRef.current) return;
                      addMessage({
                        person: "Rohan",
                        role: "(Finance)",
                        message: "Still need to adjust pricing",
                      });
                      setAnimationStage(10);

                      // Close card
                      const close2 = setTimeout(() => {
                        if (!componentMountedRef.current) return;
                        closeActivityCard();
                        setAnimationStage(11);

                        // Exit Quotation 2
                        const exit2 = setTimeout(() => {
                          if (!componentMountedRef.current) return;
                          exitInvoice();
                          setAnimationStage(12);

                          // Enter Quotation 3
                          const enter3 = setTimeout(() => {
                            if (!componentMountedRef.current) return;
                            enterInvoice(3);
                            setAnimationStage(13);

                            // --- ROUND 3: QUOTATION 3 ---
                            // Reopen card - FRESH START
                            const reopen3 = setTimeout(() => {
                              if (!componentMountedRef.current) return;
                              openActivityCard();
                              setAnimationStage(14);

                              // Message 5: Sales asks about Quotation 3
                              const msg5 = setTimeout(() => {
                                if (!componentMountedRef.current) return;
                                addMessage({
                                  person: "Joe",
                                  role: "(Sales)",
                                  message:
                                    "Final version - Quotation 3, can we proceed?",
                                });
                                setAnimationStage(15);

                                // Message 6: Finance ACCEPTS
                                const msg6 = setTimeout(() => {
                                  if (!componentMountedRef.current) return;
                                  addMessage({
                                    person: "Rohan",
                                    role: "(Finance)",
                                    message: "Looks good, approved!",
                                  });
                                  setAnimationStage(16);

                                  // --- DASHBOARD TRANSITION ---
                                  const toDashboard = setTimeout(() => {
                                    if (!componentMountedRef.current) return;

                                    setInvoiceOpacity(0);
                                    setInvoiceTransform("scale(0.95)");
                                    setDashboardOpacity(1);
                                    setDashboardTransform("scale(1)");
                                    setAnimationStage(17);

                                    // Cursor animation
                                    const showCursor = setTimeout(() => {
                                      if (!componentMountedRef.current) return;
                                      setCursorOpacity(1);
                                      setCursorPosition({ x: 0, y: 0 });
                                      setAnimationStage(18);

                                      const moveCursor = setTimeout(() => {
                                        if (!componentMountedRef.current)
                                          return;
                                        setCursorPosition({ x: 150, y: -103 });
                                        setCursorScale(0.9);
                                        setAnimationStage(19);

                                        const click = setTimeout(() => {
                                          if (!componentMountedRef.current)
                                            return;
                                          setCursorScale(0.7);
                                          setAnimationStage(20);

                                          const loading = setTimeout(() => {
                                            if (!componentMountedRef.current)
                                              return;
                                            setStartTextOpacity(0);
                                            setStartTextTransform("scale(0.9)");
                                            setLoadingOpacity(1);
                                            setCursorScale(0.9);
                                            setAnimationStage(21);

                                            const done = setTimeout(() => {
                                              if (!componentMountedRef.current)
                                                return;
                                              setLoadingOpacity(0);
                                              setCheckOpacity(1);

                                              const started = setTimeout(() => {
                                                if (
                                                  !componentMountedRef.current
                                                )
                                                  return;
                                                setStartedOpacity(1);
                                                setStartedTransform(
                                                  "translateX(0px)",
                                                );
                                              }, 500);
                                              trackTimeout(started);

                                              setAnimationStage(22);

                                              // FINAL MESSAGE: Billing started
                                              const msg7 = setTimeout(() => {
                                                if (
                                                  !componentMountedRef.current
                                                )
                                                  return;
                                                addMessage({
                                                  person: "",
                                                  role: "",
                                                  message:
                                                    "Billing schedule started with Quotation 3",
                                                  isSystem: true,
                                                });
                                                setAnimationStage(23);

                                                // Fade out cursor
                                                const fadeCursor = setTimeout(
                                                  () => {
                                                    if (
                                                      !componentMountedRef.current
                                                    )
                                                      return;
                                                    setCursorOpacity(0);
                                                    setAnimationStage(24);

                                                    // Hide dashboard and activity at the same time
                                                    setDashboardOpacity(0);
                                                    setDashboardTransform("scale(0.95)");
                                                    setActivityOpacity(0);
                                                    setActivityTransform("translateY(20px)");
                                                    setAnimationStage(25);
                                                    
                                                    // Clear messages after activity closes
                                                    setTimeout(() => {
                                                      if (!componentMountedRef.current) return;
                                                      setCurrentMessages([]);
                                                    }, 700);

                                                    // Show contract after a brief pause
                                                    const showContract = setTimeout(() => {
                                                      if (!componentMountedRef.current) return;
                                                      
                                                      // Show contract
                                                      enterContract();
                                                      setAnimationStage(26);
                                                      
                                                      // Show contract for a moment then restart
                                                      const restartAfterContract = setTimeout(() => {
                                                        if (!componentMountedRef.current) return;
                                                        resetAllStates();
                                                        isAnimatingRef.current = false;
                                                        startAnimation();
                                                      }, 3000);
                                                      trackTimeout(restartAfterContract);
                                                    }, 500);
                                                    trackTimeout(showContract);
                                                  },
                                                  2000,
                                                );
                                                trackTimeout(fadeCursor);
                                              }, 1000);
                                              trackTimeout(msg7);
                                            }, 1500);
                                            trackTimeout(done);
                                          }, 400);
                                          trackTimeout(loading);
                                        }, 1000);
                                        trackTimeout(click);
                                      }, 1200);
                                      trackTimeout(moveCursor);
                                    }, 1000);
                                    trackTimeout(showCursor);
                                  }, 1500);
                                  trackTimeout(toDashboard);
                                }, 1500);
                                trackTimeout(msg6);
                              }, 1000);
                              trackTimeout(msg5);
                            }, 800);
                            trackTimeout(reopen3);
                          }, 800);
                          trackTimeout(enter3);
                        }, 1000);
                        trackTimeout(exit2);
                      }, 800);
                      trackTimeout(close2);
                    }, 1500);
                    trackTimeout(msg4);
                  }, 1000);
                  trackTimeout(msg3);
                }, 800);
                trackTimeout(reopen2);
              }, 800);
              trackTimeout(enter2);
            }, 1000);
            trackTimeout(exit1);
          }, 800);
          trackTimeout(close1);
        }, 1500);
        trackTimeout(msg2);
      }, 1000);
      trackTimeout(msg1);
    }, 1500);
    trackTimeout(pause1);

    animationRef.current = pause1;
  };

  // Initialize animation
  useEffect(() => {
    componentMountedRef.current = true;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearAllAnimations();
      } else {
        if (hasStartedRef.current && !isAnimatingRef.current) {
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

  // Debug Controls
  const DebugControls = () => {
    if (process.env.NODE_ENV !== "development") return null;

    return (
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 opacity-70 transition-opacity hover:opacity-100 bg-white bg-opacity-90 p-2 rounded shadow">
        <button
          onClick={handleRestart}
          className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Restart
        </button>
        <button
          onClick={handleStop}
          className="px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded hover:bg-red-700"
        >
          Stop
        </button>
        <div className="px-2 py-1 text-xs font-mono bg-gray-100 rounded">
          {isContractMode ? "Contract" : `Q${quotationVersion}`} | Stage:{" "}
          {animationStage} | Msgs: {currentMessages.length}
        </div>
      </div>
    );
  };

  // Get avatar URL
  const getAvatar = (person) => {
    if (person === "Joe") {
      return "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww";
    }
    return "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  };

  return (
    <>
      {/* <DebugControls /> */}

      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }
        .message-item {
          animation: slideIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <div className="">
        <div className="relative w-full">
          <div className="relative mx-auto flex w-full items-center justify-center">
            {/* Cursor */}
            <div
              id="hero-animation-cursor"
              className="absolute z-20 transition-all duration-700 ease-out"
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
              className="mx-auto w-full max-w-[360px] overflow-hidden rounded transition-all duration-800 ease-out"
              style={{
                boxShadow:
                  "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px",
                opacity: invoiceOpacity,
                transform: invoiceTransform,
                transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
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
                  <div className="h-2 rounded-full bg-[#D4D4D4] invoice-row basis-[25%]"></div>
                  <div className="invoice-row flex basis-[24%] flex-col gap-y-1.5">
                    <div className="h-2 rounded-full bg-[#D4D4D4]"></div>
                    <div className="h-2 rounded-full bg-[#F1F1F1] w-[50%]"></div>
                    <div className="h-2 rounded-full bg-[#F1F1F1] w-[60%]"></div>
                    <div className="h-2 rounded-full bg-[#F1F1F1] w-[90%]"></div>
                  </div>
                </div>
              </div>

              {/* DYNAMIC HEADER - Now supports Contract mode */}
              <div className="p-6">
                <p className="pb-1 text-xs font-bold">
                  {isContractMode
                    ? "Contract"
                    : `Quotation ${quotationVersion}`}
                </p>

                {/* Invoice content with version differences */}
                <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0">
                  <div className="flex basis-1/2">
                    <div
                      className={`h-2 rounded-full ${isContractMode ? "bg-[#D4D4D4]" : quotationVersion === 1 ? "bg-[#D4D4D4]" : quotationVersion === 2 ? "bg-[#B8C5D0]" : "bg-[#9AA6B2]"} basis-[30%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/2">
                    <div
                      className={`h-2 rounded-full ${isContractMode ? "bg-[#D4D4D4]" : quotationVersion === 1 ? "bg-[#D4D4D4]" : quotationVersion === 2 ? "bg-[#B8C5D0]" : "bg-[#9AA6B2]"} basis-[30%]`}
                    ></div>
                  </div>
                </div>
                <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0">
                  <div className="flex basis-1/2">
                    <div
                      className={`h-2 rounded-full ${isContractMode ? "bg-[#F1F1F1]" : quotationVersion === 1 ? "bg-[#F1F1F1]" : quotationVersion === 2 ? "bg-[#E5E5E5]" : "bg-[#D9D9D9]"} basis-[30%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/2">
                    <div
                      className={`h-2 rounded-full ${isContractMode ? "bg-[#F1F1F1]" : quotationVersion === 1 ? "bg-[#F1F1F1]" : quotationVersion === 2 ? "bg-[#E5E5E5]" : "bg-[#D9D9D9]"} basis-[30%]`}
                    ></div>
                  </div>
                </div>

                {/* Version-specific content - Show Contract styling when in contract mode */}
                {isContractMode ? (
                  <>
                    <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3">
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#F1F1F1] basis-[50%]"></div>
                      </div>
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#F1F1F1] basis-[40%]"></div>
                      </div>
                    </div>
                    <div className="invoice-row flex justify-between py-3">
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#F1F1F1] basis-[45%]"></div>
                      </div>
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#F1F1F1] basis-[35%]"></div>
                      </div>
                    </div>
                  </>
                ) : quotationVersion === 1 ? (
                  <>
                    <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3">
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#F1F1F1] basis-[40%]"></div>
                      </div>
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                      </div>
                    </div>
                    <div className="invoice-row flex justify-between py-3">
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#F1F1F1] basis-[35%]"></div>
                      </div>
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#F1F1F1] basis-[25%]"></div>
                      </div>
                    </div>
                  </>
                ) : quotationVersion === 2 ? (
                  <>
                    <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3">
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#E5E5E5] basis-[45%]"></div>
                      </div>
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#E5E5E5] basis-[35%]"></div>
                      </div>
                    </div>
                    <div className="invoice-row flex justify-between py-3">
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#E5E5E5] basis-[40%]"></div>
                      </div>
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#E5E5E5] basis-[30%]"></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3">
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#D9D9D9] basis-[50%]"></div>
                      </div>
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#D9D9D9] basis-[40%]"></div>
                      </div>
                    </div>
                    <div className="invoice-row flex justify-between py-3">
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#D9D9D9] basis-[45%]"></div>
                      </div>
                      <div className="flex basis-1/2">
                        <div className="h-2 rounded-full bg-[#D9D9D9] basis-[35%]"></div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Footer section */}
              <div className="p-6 pt-0">
                <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0">
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${isContractMode ? "bg-[#D4D4D4]" : quotationVersion === 1 ? "bg-[#D4D4D4]" : quotationVersion === 2 ? "bg-[#B8C5D0]" : "bg-[#9AA6B2]"} basis-[40%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${isContractMode ? "bg-[#D4D4D4]" : quotationVersion === 1 ? "bg-[#D4D4D4]" : quotationVersion === 2 ? "bg-[#B8C5D0]" : "bg-[#9AA6B2]"} basis-[40%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${isContractMode ? "bg-[#D4D4D4]" : quotationVersion === 1 ? "bg-[#D4D4D4]" : quotationVersion === 2 ? "bg-[#B8C5D0]" : "bg-[#9AA6B2]"} basis-[40%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${isContractMode ? "bg-[#D4D4D4]" : quotationVersion === 1 ? "bg-[#D4D4D4]" : quotationVersion === 2 ? "bg-[#B8C5D0]" : "bg-[#9AA6B2]"} basis-[40%]`}
                    ></div>
                  </div>
                </div>
                <div className="invoice-row flex justify-between py-3">
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${isContractMode ? "bg-[#F1F1F1]" : quotationVersion === 1 ? "bg-[#F1F1F1]" : quotationVersion === 2 ? "bg-[#E5E5E5]" : "bg-[#D9D9D9]"} basis-[40%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${isContractMode ? "bg-[#F1F1F1]" : quotationVersion === 1 ? "bg-[#F1F1F1]" : quotationVersion === 2 ? "bg-[#E5E5E5]" : "bg-[#D9D9D9]"} basis-[40%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${isContractMode ? "bg-[#F1F1F1]" : quotationVersion === 1 ? "bg-[#F1F1F1]" : quotationVersion === 2 ? "bg-[#E5E5E5]" : "bg-[#D9D9D9]"} basis-[40%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${isContractMode ? "bg-[#F1F1F1]" : quotationVersion === 1 ? "bg-[#F1F1F1]" : quotationVersion === 2 ? "bg-[#E5E5E5]" : "bg-[#D9D9D9]"} basis-[40%]`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard */}
            <div
              id="workflow-dashboard"
              className="absolute w-full max-w-[512px] transition-all duration-700 ease-out"
              style={{
                opacity: dashboardOpacity,
                transform: dashboardTransform,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {/* Dashboard content - unchanged */}
              <div
                className="relative w-full overflow-hidden rounded-lg border border-[#e4e8ef] border-opacity-10 bg-white py-5 pl-6 pr-4"
                style={{
                  boxShadow:
                    "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px",
                }}
              >
                {/* Dashboard header */}
                <div className="flex w-full justify-between gap-x-3">
                  <div className="flex items-center gap-2">
                    <a href="/">
                      <img
                        src="https://demo.trustymoney.in/assets/newLOGO-Cj83E8a4.svg"
                        alt="Trusty Money Logo"
                        width="155"
                        height="24"
                      />
                    </a>
                  </div>
                  <div className="flex w-full items-center justify-stretch gap-2 text-sm font-bold sm:mt-0 sm:w-auto">
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
                      <LoadingSpinner
                        opacity={loadingOpacity}
                        spinning={loadingOpacity === 1}
                        className="loading absolute transition-opacity duration-500"
                        style={{
                          opacity: loadingOpacity,
                          animation:
                            loadingOpacity === 1
                              ? "spin 0.6s linear infinite"
                              : "none",
                        }}
                      />
                      <div className="absolute flex items-center space-x-2 whitespace-nowrap">
                        <CheckIcon
                          opacity={checkOpacity}
                          style={{
                            opacity: checkOpacity,
                            transition: "opacity 500ms ease",
                            transitionDelay: checkOpacity === 1 ? "0.5s" : "0s",
                          }}
                        />
                        <span
                          className="started inline-block transition-all duration-500 ease-out"
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
                      <p
                        className="start whitespace-nowrap transition-all duration-500 ease-out absolute inset-0 flex items-center justify-center"
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
                  {/* Pricing table */}
                  <div className="relative flex items-center justify-start self-stretch px-6">
                    <p className="text-left text-base font-bold text-[#14171c]">
                      Pricing
                    </p>
                  </div>
                  <div className="flex w-full items-start justify-between px-4">
                    {/* Product column */}
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
                        </div>
                      </div>
                    </div>
                    {/* Frequency column */}
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
                    {/* Price column */}
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

            {/* SIMPLIFIED: Activity Card - BUTTER SMOOTH */}
            <div className="absolute h-full w-full max-w-[calc(512px+40px*2)]">
              <div
                id="workflow-activity"
                className="absolute left-0 top-[50%] rounded-lg bg-white p-4 transition-all duration-700 ease-out"
                style={{
                  boxShadow:
                    "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px",
                  transform: activityTransform,
                  opacity: activityOpacity,
                  transition: "all 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <p className="text-xs font-bold">Activity</p>
                <div
                  ref={contentRef}
                  id="workflow-activity-list"
                  className="mt-3 min-w-[262px] overflow-hidden transition-all duration-700 ease-out"
                  style={{
                    height: contentHeight ? `${contentHeight}px` : "0px",
                    transition: "height 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {/* ONLY CURRENT MESSAGES - NO OPACITY HACKS */}
                  {currentMessages.map((msg, idx) => (
                    <div
                      key={msg.id}
                      className="workflow-activity-item message-item"
                    >
                      <div className="flex items-start text-xs">
                        <div className="relative flex flex-col items-center mr-2">
                          {msg.isSystem ? (
                            <div className="rounded-full w-4 h-4 flex items-center justify-center">
                              <VerifiedIcon className="w-4 h-4 text-blue-600" />
                            </div>
                          ) : (
                            <>
                              <img
                                alt={`${msg.person} avatar`}
                                loading="lazy"
                                width="16"
                                height="16"
                                className="h-4 w-4 shrink-0 grow-0 rounded-full"
                                src={getAvatar(msg.person)}
                              />

                              {/* Line between messages - only if not last */}
                              {idx < currentMessages.length - 1 && idx < 5 && (
                                <div className="line my-1">
                                  <div className="h-6 w-0.5 rounded-full bg-[#D1D9E4]"></div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                        <div className="text-[#1D2939]">
                          {!msg.isSystem ? (
                            <>
                              <p className="">
                                {msg.person}{" "}
                                <span className="text-[#596575]">
                                  {msg.role}
                                </span>
                              </p>
                              <p
                                className={
                                  msg.message.includes("approved")
                                    ? "text-green-600 font-medium"
                                    : ""
                                }
                              >
                                {msg.message}
                              </p>
                            </>
                          ) : (
                            <p className="flex items-center gap-1">
                              <span>{msg.message}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
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