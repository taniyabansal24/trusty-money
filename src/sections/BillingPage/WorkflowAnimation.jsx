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
  const [invoiceScale, setInvoiceScale] = useState(1);

  // Quotation version state
  const [quotationVersion, setQuotationVersion] = useState(1); // 1, 2, or 3

  const [dashboardOpacity, setDashboardOpacity] = useState(0);
  const [dashboardTransform, setDashboardTransform] = useState("scale(0.95)");
  const [cursorOpacity, setCursorOpacity] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorScale, setCursorScale] = useState(1);

  // Activity card states
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

  // Activity items with slower transitions
  const [activityItems, setActivityItems] = useState([
    {
      id: 1,
      opacity: 0,
      transform: "translateY(15px)",
      transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
    {
      id: 2,
      opacity: 0,
      transform: "translateY(15px)",
      transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
    {
      id: 3,
      opacity: 0,
      transform: "translateY(15px)",
      transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
    {
      id: 4,
      opacity: 0,
      transform: "translateY(15px)",
      transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
    {
      id: 5,
      opacity: 0,
      transform: "translateY(15px)",
      transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
    {
      id: 6,
      opacity: 0,
      transform: "translateY(15px)",
      transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
    {
      id: 7,
      opacity: 0,
      transform: "translateY(15px)",
      transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
    },
  ]);

  // Animation management refs
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

  const clearAllAnimations = () => {
    activeTimeoutsRef.current.forEach((timeoutId) => {
      if (timeoutId) clearTimeout(timeoutId);
    });
    activeTimeoutsRef.current = [];

    activeIntervalsRef.current.forEach((intervalId) => {
      if (intervalId) clearInterval(intervalId);
    });
    activeIntervalsRef.current = [];

    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }

    isAnimatingRef.current = false;
  };

  // Reset activity items for a new round - ONLY show current round messages
  const resetActivityItemsForRound = (startIndex, endIndex) => {
    setActivityItems((prevItems) => {
      const newItems = [...prevItems];
      // Reset ALL items first
      for (let i = 0; i < newItems.length; i++) {
        newItems[i] = {
          ...newItems[i],
          opacity: 0,
          transform: "translateY(15px)",
          transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
        };
      }
      return newItems;
    });
    setActivityHeight("32px");
  };

  // Close activity card
  const closeActivityCard = () => {
    setActivityOpacity(0);
    setActivityTransform("translateY(20px)");
  };

  // Open activity card
  const openActivityCard = () => {
    setActivityOpacity(1);
    setActivityTransform("translateY(0px)");
  };

  // EXIT animation for invoice (fade out + scale down + slide left)
  const exitInvoice = () => {
    setInvoiceOpacity(0);
    setInvoiceTransform("translateX(-20px) scale(0.9)");
  };

  // ENTRANCE animation for invoice (fade in + scale up + slide from right)
  const enterInvoice = (version) => {
    setQuotationVersion(version);
    setInvoiceOpacity(1);
    setInvoiceTransform("translateX(0px) scale(1)");
  };

  // Reset all states
  const resetAllStates = () => {
    if (!componentMountedRef.current) return;

    setAnimationStage(0);
    setQuotationVersion(1);
    setInvoiceOpacity(1);
    setInvoiceTransform("translate(0px, 0px)");
    setInvoiceScale(1);
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

    // Reset all activity items
    setActivityItems([
      {
        id: 1,
        opacity: 0,
        transform: "translateY(15px)",
        transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
      },
      {
        id: 2,
        opacity: 0,
        transform: "translateY(15px)",
        transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
      },
      {
        id: 3,
        opacity: 0,
        transform: "translateY(15px)",
        transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
      },
      {
        id: 4,
        opacity: 0,
        transform: "translateY(15px)",
        transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
      },
      {
        id: 5,
        opacity: 0,
        transform: "translateY(15px)",
        transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
      },
      {
        id: 6,
        opacity: 0,
        transform: "translateY(15px)",
        transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
      },
      {
        id: 7,
        opacity: 0,
        transform: "translateY(15px)",
        transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
      },
    ]);
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

  // Helper function to show activity item smoothly
  const showActivityItem = (index) => {
    setActivityItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = {
        ...newItems[index],
        opacity: 1,
        transform: "translateY(0px)",
        transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
      };
      return newItems;
    });
  };

  // Helper function to set activity height smoothly
  const setActivityHeightSmooth = (height) => {
    setActivityHeight(height);
  };

  // ========== MAIN ANIMATION SEQUENCE ==========
  // SLOWER animation with invoice exit/entrance and only current round messages
  // ==============================================
  const startAnimation = () => {
    if (!componentMountedRef.current || isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    hasStartedRef.current = true;
    clearAllAnimations();

    // --- SCENE 1: QUOTATION 1 (Round 1) ---
    setAnimationStage(1);
    setQuotationVersion(1);

    // PAUSE - Show Quotation 1 (1.5s)
    const pause1 = setTimeout(() => {
      if (!componentMountedRef.current) return;

      // Activity card appears for Round 1
      openActivityCard();
      setAnimationStage(2);

      // Show Activity 1: Sales asks about Quotation 1 (after 1s)
      const showActivity1 = setTimeout(() => {
        if (!componentMountedRef.current) return;

        showActivityItem(0);
        setActivityHeightSmooth("64px");
        setAnimationStage(3);

        // Show Activity 2: Finance REJECTS Quotation 1 (after 1.5s)
        const showActivity2 = setTimeout(() => {
          if (!componentMountedRef.current) return;

          showActivityItem(1);
          setActivityHeightSmooth("96px");
          setAnimationStage(4);

          // PAUSE - Show rejection (1.5s)

          // CLOSE activity card (after 1s)
          const closeCard1 = setTimeout(() => {
            if (!componentMountedRef.current) return;

            closeActivityCard();
            setAnimationStage(5);

            // PAUSE - Card closed (0.8s)

            // EXIT animation for Quotation 1 (after 0.8s)
            const exitQuotation1 = setTimeout(() => {
              if (!componentMountedRef.current) return;

              exitInvoice();
              setAnimationStage(6);

              // PAUSE - Quotation 1 fades out (1s)

              // ENTRANCE animation for Quotation 2 (after 1s)
              const enterQuotation2 = setTimeout(() => {
                if (!componentMountedRef.current) return;

                enterInvoice(2);
                setAnimationStage(7);

                // PAUSE - Show Quotation 2 (1.5s)

                // Reset activity items for Round 2 - ONLY show messages 2 & 3
                const resetForRound2 = setTimeout(() => {
                  if (!componentMountedRef.current) return;

                  resetActivityItemsForRound(2, 4);
                  setAnimationStage(8);

                  // PAUSE - Reset complete (0.8s)

                  // REOPEN activity card for Round 2 (after 0.8s)
                  const reopenCard2 = setTimeout(() => {
                    if (!componentMountedRef.current) return;

                    openActivityCard();
                    setAnimationStage(9);

                    // Show Activity 3: Sales asks about Quotation 2 (after 1s)
                    const showActivity3 = setTimeout(() => {
                      if (!componentMountedRef.current) return;

                      showActivityItem(2);
                      setActivityHeightSmooth("64px");
                      setAnimationStage(10);

                      // Show Activity 4: Finance REJECTS Quotation 2 (after 1.5s)
                      const showActivity4 = setTimeout(() => {
                        if (!componentMountedRef.current) return;

                        showActivityItem(3);
                        setActivityHeightSmooth("96px");
                        setAnimationStage(11);

                        // PAUSE - Show rejection (1.5s)

                        // CLOSE activity card again (after 1s)
                        const closeCard2 = setTimeout(() => {
                          if (!componentMountedRef.current) return;

                          closeActivityCard();
                          setAnimationStage(12);

                          // PAUSE - Card closed (0.8s)

                          // EXIT animation for Quotation 2 (after 0.8s)
                          const exitQuotation2 = setTimeout(() => {
                            if (!componentMountedRef.current) return;

                            exitInvoice();
                            setAnimationStage(13);

                            // PAUSE - Quotation 2 fades out (1s)

                            // ENTRANCE animation for Quotation 3 (after 1s)
                            const enterQuotation3 = setTimeout(() => {
                              if (!componentMountedRef.current) return;

                              enterInvoice(3);
                              setAnimationStage(14);

                              // PAUSE - Show Quotation 3 (1.5s)

                              // Reset activity items for Round 3 - ONLY show messages 4,5,6
                              const resetForRound3 = setTimeout(() => {
                                if (!componentMountedRef.current) return;

                                resetActivityItemsForRound(4, 7);
                                setAnimationStage(15);

                                // PAUSE - Reset complete (0.8s)

                                // REOPEN activity card for Round 3 (after 0.8s)
                                const reopenCard3 = setTimeout(() => {
                                  if (!componentMountedRef.current) return;

                                  openActivityCard();
                                  setAnimationStage(16);

                                  // Show Activity 5: Sales asks about Quotation 3 (after 1s)
                                  const showActivity5 = setTimeout(() => {
                                    if (!componentMountedRef.current) return;

                                    showActivityItem(4);
                                    setActivityHeightSmooth("64px");
                                    setAnimationStage(17);

                                    // Show Activity 6: Finance ACCEPTS Quotation 3 (after 1.5s)
                                    const showActivity6 = setTimeout(() => {
                                      if (!componentMountedRef.current) return;

                                      showActivityItem(5);
                                      setActivityHeightSmooth("96px");
                                      setAnimationStage(18);

                                      // PAUSE - Show acceptance (1.5s)

                                      // --- SCENE 4: TRANSITION TO DASHBOARD ---
                                      // Keep activity card open during dashboard transition
                                      const transitionToDashboard = setTimeout(
                                        () => {
                                          if (!componentMountedRef.current)
                                            return;

                                          // Fade out invoice (Quotation 3 fades)
                                          setInvoiceOpacity(0);
                                          setInvoiceTransform("scale(0.95)");

                                          // Fade in dashboard
                                          setDashboardOpacity(1);
                                          setDashboardTransform("scale(1)");
                                          setAnimationStage(19);

                                          // Show cursor (after 1s)
                                          const showCursor = setTimeout(() => {
                                            if (!componentMountedRef.current)
                                              return;

                                            setCursorOpacity(1);
                                            setCursorPosition({ x: 0, y: 0 });
                                            setAnimationStage(20);

                                            // Move cursor to Start billing button (after 1.2s)
                                            const moveToButton = setTimeout(
                                              () => {
                                                if (
                                                  !componentMountedRef.current
                                                )
                                                  return;

                                                setCursorPosition({
                                                  x: 150,
                                                  y: -103,
                                                });
                                                setCursorScale(0.9);
                                                setAnimationStage(21);

                                                // Click animation (after 1s)
                                                const pauseBeforeClick =
                                                  setTimeout(() => {
                                                    if (
                                                      !componentMountedRef.current
                                                    )
                                                      return;

                                                    setCursorScale(0.7);
                                                    setAnimationStage(22);

                                                    // Show loading spinner (after 0.4s)
                                                    const showLoading =
                                                      setTimeout(() => {
                                                        if (
                                                          !componentMountedRef.current
                                                        )
                                                          return;

                                                        setStartTextOpacity(0);
                                                        setStartTextTransform(
                                                          "scale(0.9)",
                                                        );
                                                        setLoadingOpacity(1);
                                                        setCursorScale(0.9);
                                                        setAnimationStage(23);

                                                        // Loading duration (1.5s)
                                                        const loadingDuration =
                                                          setTimeout(() => {
                                                            if (
                                                              !componentMountedRef.current
                                                            )
                                                              return;

                                                            setLoadingOpacity(
                                                              0,
                                                            );
                                                            setCheckOpacity(1);

                                                            // Show "Started" text (after 0.5s)
                                                            const showStarted =
                                                              setTimeout(() => {
                                                                if (
                                                                  !componentMountedRef.current
                                                                )
                                                                  return;
                                                                setStartedOpacity(
                                                                  1,
                                                                );
                                                                setStartedTransform(
                                                                  "translateX(0px)",
                                                                );
                                                              }, 500);
                                                            trackTimeout(
                                                              showStarted,
                                                            );

                                                            setAnimationStage(
                                                              24,
                                                            );

                                                            // --- SCENE 5: FINAL CONFIRMATION ---
                                                            // Show Activity 7: Billing started with Quotation 3 (after 1s)
                                                            const showActivity7 =
                                                              setTimeout(() => {
                                                                if (
                                                                  !componentMountedRef.current
                                                                )
                                                                  return;

                                                                showActivityItem(
                                                                  6,
                                                                );
                                                                setActivityHeightSmooth(
                                                                  "128px",
                                                                );
                                                                setAnimationStage(
                                                                  25,
                                                                );

                                                                // Fade out cursor (after 2s)
                                                                const fadeOutCursor =
                                                                  setTimeout(
                                                                    () => {
                                                                      if (
                                                                        !componentMountedRef.current
                                                                      )
                                                                        return;

                                                                      setCursorOpacity(
                                                                        0,
                                                                      );
                                                                      setAnimationStage(
                                                                        26,
                                                                      );

                                                                      // PAUSE - Show final state (3s)

                                                                      // LOOP: Reset and restart
                                                                      const resetAndRestart =
                                                                        setTimeout(
                                                                          () => {
                                                                            if (
                                                                              !componentMountedRef.current
                                                                            )
                                                                              return;

                                                                            resetAllStates();
                                                                            isAnimatingRef.current = false;

                                                                            const restart =
                                                                              setTimeout(
                                                                                () => {
                                                                                  if (
                                                                                    !componentMountedRef.current
                                                                                  )
                                                                                    return;
                                                                                  startAnimation();
                                                                                },
                                                                                2500,
                                                                              );
                                                                            trackTimeout(
                                                                              restart,
                                                                            );
                                                                          },
                                                                          3000,
                                                                        );
                                                                      trackTimeout(
                                                                        resetAndRestart,
                                                                      );
                                                                    },
                                                                    2000,
                                                                  );
                                                                trackTimeout(
                                                                  fadeOutCursor,
                                                                );
                                                              }, 1000);
                                                            trackTimeout(
                                                              showActivity7,
                                                            );
                                                          }, 1500);
                                                        trackTimeout(
                                                          loadingDuration,
                                                        );
                                                      }, 400);
                                                    trackTimeout(showLoading);
                                                  }, 1000);
                                                trackTimeout(pauseBeforeClick);
                                              },
                                              1200,
                                            );
                                            trackTimeout(moveToButton);
                                          }, 1000);
                                          trackTimeout(showCursor);
                                        },
                                        1500,
                                      );
                                      trackTimeout(transitionToDashboard);
                                    }, 1500);
                                    trackTimeout(showActivity6);
                                  }, 1000);
                                  trackTimeout(showActivity5);
                                }, 800);
                                trackTimeout(reopenCard3);
                              }, 800);
                              trackTimeout(resetForRound3);
                            }, 800);
                            trackTimeout(enterQuotation3);
                          }, 1000);
                          trackTimeout(exitQuotation2);
                        }, 800);
                        trackTimeout(closeCard2);
                      }, 1500);
                      trackTimeout(showActivity4);
                    }, 1000);
                    trackTimeout(showActivity3);
                  }, 800);
                  trackTimeout(reopenCard2);
                }, 800);
                trackTimeout(resetForRound2);
              }, 800);
              trackTimeout(enterQuotation2);
            }, 1000);
            trackTimeout(exitQuotation1);
          }, 800);
          trackTimeout(closeCard1);
        }, 1500);
        trackTimeout(showActivity2);
      }, 1000);
      trackTimeout(showActivity1);
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
          Q{quotationVersion} | Stage: {animationStage}
        </div>
      </div>
    );
  };

  // Helper function to get activity message based on index
  const getActivityMessage = (index) => {
    const messages = [
      {
        person: "Joe",
        role: "(Sales)",
        message: "Shall we initiate Quotation 1?",
      },
      {
        person: "Rohan",
        role: "(Finance)",
        message: "Need adjustments - please revise",
      },
      {
        person: "Joe",
        role: "(Sales)",
        message: "How about Quotation 2 with revised terms?",
      },
      {
        person: "Rohan",
        role: "(Finance)",
        message: "Still need to adjust pricing",
      },
      {
        person: "Joe",
        role: "(Sales)",
        message: "Final version - Quotation 3, can we proceed?",
      },
      { person: "Rohan", role: "(Finance)", message: "Looks good, approved!" },
      {
        person: "",
        role: "",
        message: "Billing schedule started with Quotation 3",
        isSystem: true,
      },
    ];
    return messages[index] || messages[0];
  };

  // Get avatar or icon for activity item
  const getActivityAvatar = (index, message) => {
    if (index === 6) {
      return <VerifiedIcon className="w-4 h-4 text-blue-600" />;
    }

    return (
      <img
        alt={`${message.person} avatar`}
        loading="lazy"
        width="16"
        height="16"
        className="h-4 w-4 shrink-0 grow-0 rounded-full"
        src={
          index % 2 === 0
            ? "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww"
            : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    );
  };

  return (
    <>
      {/* <DebugControls /> */}

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

            {/* Invoice with Dynamic Quotation Version and Exit/Entrance Animations */}
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

              {/* DYNAMIC QUOTATION HEADER */}
              <div className="p-6">
                <p className="pb-1 text-xs font-bold">
                  Quotation {quotationVersion}
                </p>

                {/* Invoice content with version differences */}
                <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0">
                  <div className="flex basis-1/2">
                    <div
                      className={`h-2 rounded-full ${quotationVersion === 1 ? "bg-[#D4D4D4]" : quotationVersion === 2 ? "bg-[#B8C5D0]" : "bg-[#9AA6B2]"} basis-[30%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/2">
                    <div
                      className={`h-2 rounded-full ${quotationVersion === 1 ? "bg-[#D4D4D4]" : quotationVersion === 2 ? "bg-[#B8C5D0]" : "bg-[#9AA6B2]"} basis-[30%]`}
                    ></div>
                  </div>
                </div>
                <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0">
                  <div className="flex basis-1/2">
                    <div
                      className={`h-2 rounded-full ${quotationVersion === 1 ? "bg-[#F1F1F1]" : quotationVersion === 2 ? "bg-[#E5E5E5]" : "bg-[#D9D9D9]"} basis-[30%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/2">
                    <div
                      className={`h-2 rounded-full ${quotationVersion === 1 ? "bg-[#F1F1F1]" : quotationVersion === 2 ? "bg-[#E5E5E5]" : "bg-[#D9D9D9]"} basis-[30%]`}
                    ></div>
                  </div>
                </div>

                {/* Version-specific content */}
                {quotationVersion === 1 && (
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
                )}

                {quotationVersion === 2 && (
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
                )}

                {quotationVersion === 3 && (
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
                      className={`h-2 rounded-full ${quotationVersion === 1 ? "bg-[#D4D4D4]" : quotationVersion === 2 ? "bg-[#B8C5D0]" : "bg-[#9AA6B2]"} basis-[40%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${quotationVersion === 1 ? "bg-[#D4D4D4]" : quotationVersion === 2 ? "bg-[#B8C5D0]" : "bg-[#9AA6B2]"} basis-[40%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${quotationVersion === 1 ? "bg-[#D4D4D4]" : quotationVersion === 2 ? "bg-[#B8C5D0]" : "bg-[#9AA6B2]"} basis-[40%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${quotationVersion === 1 ? "bg-[#D4D4D4]" : quotationVersion === 2 ? "bg-[#B8C5D0]" : "bg-[#9AA6B2]"} basis-[40%]`}
                    ></div>
                  </div>
                </div>
                <div className="invoice-row flex justify-between py-3">
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${quotationVersion === 1 ? "bg-[#F1F1F1]" : quotationVersion === 2 ? "bg-[#E5E5E5]" : "bg-[#D9D9D9]"} basis-[40%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${quotationVersion === 1 ? "bg-[#F1F1F1]" : quotationVersion === 2 ? "bg-[#E5E5E5]" : "bg-[#D9D9D9]"} basis-[40%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${quotationVersion === 1 ? "bg-[#F1F1F1]" : quotationVersion === 2 ? "bg-[#E5E5E5]" : "bg-[#D9D9D9]"} basis-[40%]`}
                    ></div>
                  </div>
                  <div className="flex basis-1/4">
                    <div
                      className={`h-2 rounded-full ${quotationVersion === 1 ? "bg-[#F1F1F1]" : quotationVersion === 2 ? "bg-[#E5E5E5]" : "bg-[#D9D9D9]"} basis-[40%]`}
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

            {/* Activity Card - Only shows current round messages */}
            <div className="absolute h-full w-full max-w-[calc(512px+40px*2)]">
              <div
                id="workflow-activity"
                className="absolute left-0 top-[50%] rounded-lg bg-white p-4 transition-all duration-800 ease-out"
                style={{
                  boxShadow:
                    "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px",
                  transform: activityTransform,
                  opacity: activityOpacity,
                  transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <p className="text-xs font-bold">Activity</p>
                <div
                  id="workflow-activity-list"
                  className="mt-3 min-w-[262px] overflow-hidden transition-all duration-800 ease-out"
                  style={{
                    height: activityHeight,
                    transition: "height 800ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {/* Dynamic rendering of activity items - Only show current round */}
                  {activityItems.map((item, index) => {
                    if (index >= 7) return null;
                    const message = getActivityMessage(index);

                    // Only render if opacity > 0 (prevents empty space)
                    if (item.opacity === 0) return null;

                    return (
                      <div
                        key={index}
                        className="workflow-activity-item"
                        style={{
                          transform: item.transform,
                          opacity: item.opacity,
                          transition:
                            item.transition ||
                            "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
                          willChange: "transform, opacity",
                        }}
                      >
                        <div className="flex items-start text-xs">
                          <div className="relative flex flex-col items-center mr-2">
                            {index === 6 ? (
                              <div className="rounded-full w-4 h-4 flex items-center justify-center">
                                {getActivityAvatar(index, message)}
                              </div>
                            ) : (
                              <>
                                <img
                                  alt={`${message.person} avatar`}
                                  loading="lazy"
                                  width="16"
                                  height="16"
                                  decoding="async"
                                  className="h-4 w-4 shrink-0 grow-0 rounded-full"
                                  src={
                                    index % 2 === 0
                                      ? "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww"
                                      : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  }
                                />
                                
                                  <div
                                    className="line my-1"
                                    style={{
                                      opacity:
                                        item.opacity > 0 &&
                                        index + 1 < activityItems.length &&
                                        activityItems[index + 1]?.opacity > 0
                                          ? 1
                                          : 0,
                                      transition: "opacity 500ms ease",
                                    }}
                                  >
                                    <div className="h-6 w-0.5 rounded-full bg-[#D1D9E4]"></div>
                                  </div>
                                
                              </>
                            )}
                          </div>
                          <div className="text-[#1D2939]">
                            {!message.isSystem ? (
                              <>
                                <p className="">
                                  {message.person}{" "}
                                  <span className="text-[#596575]">
                                    {message.role}
                                  </span>
                                </p>
                                <p
                                  className={
                                    index === 5
                                      ? "text-green-600 font-medium"
                                      : ""
                                  }
                                >
                                  {message.message}
                                </p>
                              </>
                            ) : (
                              <p className="flex items-center gap-1">
                                <span>{message.message}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
