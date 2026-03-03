import React, { useEffect, useState, useRef } from "react";
import BellIcon from "../../components/svg/BellIcon";
import FilterIcon from "../../components/svg/FilterIcon2";
import ClockIcon from "../../components/svg/ClockIcon";
import CheckCircleIcon from "../../components/svg/CheckCircleIcon";
import LinkIcon from "../../components/svg/LinkIcon";
import TrashIcon from "../../components/svg/TrashIcon";
import Logo from "../../components/svg/Logo";
import SmileIcon from "../../components/svg/SmileIcon";
import AttachmentIcon from "../../components/svg/AttachmentIcon";
import SendIcon from "../../components/svg/SendIcon";
import ActionBarIcon from "../../components/svg/ActionBarIcon";
import StickerIcon from "../../components/svg/StickerIcon";
import ArrowIcon from "../../components/svg/ArrowIcon";

const invoices = [
  {
    id: "TMINV002",
    customer: "RougeCodes",
    status: "Pending",
    amount: "$2,900.96",
    period: "1 JAN - 31 JAN 2025",
  },
  {
    id: "TMINV014",
    customer: "Zoho",
    status: "Overdue",
    amount: "$3,500.00",
    period: "15 MAR - 14 APR 2025",
  },
  {
    id: "TMINV128",
    customer: "TallyPrime",
    status: "Pending",
    amount: "$2,700.50",
    period: "2 FEB - 1 MAR 2025",
  },
  {
    id: "TMINV079",
    customer: "Adobe",
    status: "Pending",
    amount: "$4,406.75",
    period: "1 AUG - 31 AUG 2025",
  },
  {
    id: "TMINV028",
    customer: "Open AI",
    status: "Overdue",
    amount: "$5,574.75",
    period: "15 MAR - 14 APR 2025",
  },
];

const StatusBadge = ({ status }) => {
  if (status === "Overdue") {
    return (
      <div className="w-[75px] h-[22px] bg-[rgba(0,166,66,0.2)] rounded-[25px] flex items-center justify-center gap-1">
        <div className="">
          <CheckCircleIcon size={9} />
        </div>
        <span className="text-muted !text-[10px] text-[#00732D]">Over Due</span>
      </div>
    );
  }

  return (
    <div className="w-[75px] h-[22px] bg-[#EDF1F8] rounded-[25px] flex items-center justify-center gap-1 px-2">
      <div className="">
        <ClockIcon size={9} color="#073F9E" />
      </div>
      <span className="text-muted !text-[10px] txt-blue">Pending</span>
    </div>
  );
};

const ReminderVisual = () => {
  // Animation states
  const [animationStage, setAnimationStage] = useState(0);

  // Visibility states for different screens
  const [reminderScreenOpacity, setReminderScreenOpacity] = useState(1);
  const [reminderScreenTransform, setReminderScreenTransform] =
    useState("translateX(0px)");

  const [emailCardOpacity, setEmailCardOpacity] = useState(0);
  const [emailCardTransform, setEmailCardTransform] =
    useState("translateX(50px)");

  const [customReminderOpacity, setCustomReminderOpacity] = useState(0);
  const [customReminderTransform, setCustomReminderTransform] =
    useState("translateX(50px)");

  // Cursor states
  const [cursorOpacity, setCursorOpacity] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorScale, setCursorScale] = useState(1);

  // Button hover/click states
  const [setReminderButtonState, setSetReminderButtonState] =
    useState("default"); // default, hover, click
  const [sendButtonState, setSendButtonState] = useState("default");

  // Toggle states
  const [activeToggles, setActiveToggles] = useState({});
  const [reminderToggle, setReminderToggle] = useState(false);
  const [customToggleScale, setCustomToggleScale] = useState(1);
  const [isToggleAnimating, setIsToggleAnimating] = useState(false);

  // Track which invoice to highlight
  const [targetInvoiceId] = useState("TMINV002");

  // Animation management refs
  const animationRef = useRef(null);
  const activeTimeoutsRef = useRef([]);
  const componentMountedRef = useRef(true);
  const isAnimatingRef = useRef(false);

  // Constants for animation
  const ANIMATION = {
    DURATION: 500,
    CURSOR_MOVE_DURATION: 800,
    EASING: "cubic-bezier(0.22, 1, 0.36, 1)",
    TRANSITION: "cubic-bezier(0.22, 1, 0.36, 1)",
  };

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

  // Toggle functions
  const toggleRow = (invoiceId, animated = false) => {
    setActiveToggles((prev) => ({
      ...prev,
      [invoiceId]: !prev[invoiceId],
    }));
  };

  const toggleReminder = (value) => {
    setReminderToggle(value);
  };

  // Function to animate toggle: zoom in -> turn on -> zoom out to normal
  const animateToggleOn = () => {
    setIsToggleAnimating(true);

    // Step 1: Zoom in
    setCustomToggleScale(1.5);

    setTimeout(() => {
      // Step 2: Turn on while zoomed in
      setReminderToggle(true);

      setTimeout(() => {
        // Step 3: Zoom out to normal
        setCustomToggleScale(1);

        setTimeout(() => {
          setIsToggleAnimating(false);
        }, 300);
      }, 200);
    }, 300);
  };

  // Function to get cursor position for target invoice toggle
  const getTogglePosition = () => {
    // These coordinates need to be adjusted based on your actual layout
    // This is an approximate position for the first row toggle
    return { x: 245, y: 0 };
  };

  // Function to get cursor position for Set Reminder button
  const getSetReminderButtonPosition = () => {
    return { x: 245, y: -130 };
  };

  // Function to get cursor position for Send Now button
  const getSendNowButtonPosition = () => {
    return { x: 200, y: 145 };
  };

  // Reset all states
  const resetAllStates = () => {
    if (!componentMountedRef.current) return;

    setAnimationStage(0);

    // Reset screen visibilities
    setReminderScreenOpacity(1);
    setReminderScreenTransform("translateX(0px)");
    setEmailCardOpacity(0);
    setEmailCardTransform("translateX(50px)");
    setCustomReminderOpacity(0);
    setCustomReminderTransform("translateX(50px)");

    // Reset cursor
    setCursorOpacity(0);
    setCursorPosition({ x: 0, y: 0 });
    setCursorScale(1);

    // Reset button states
    setSetReminderButtonState("default");
    setSendButtonState("default");

    // Reset toggles
    setActiveToggles({});
    setReminderToggle(false);
    setCustomToggleScale(1);
    setIsToggleAnimating(false);
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

    // --- STAGE 1: Initial state with reminder screen ---
    setAnimationStage(1);
    setReminderScreenOpacity(1);
    setReminderScreenTransform("translateX(0px)");
    setEmailCardOpacity(0);
    setCustomReminderOpacity(0);

    // --- STAGE 2: Cursor appears and clicks toggle ---
    const stage2 = setTimeout(() => {
      if (!componentMountedRef.current) return;

      setAnimationStage(2);

      // Show cursor at toggle position
      const togglePos = getTogglePosition();
      setCursorOpacity(1);
      setCursorPosition({ x: togglePos.x, y: togglePos.y });

      // Click animation after reaching position
      const clickToggle = setTimeout(() => {
        if (!componentMountedRef.current) return;

        setCursorScale(0.7);

        // Activate the toggle
        setTimeout(() => {
          if (!componentMountedRef.current) return;
          toggleRow(targetInvoiceId);
          setCursorScale(1);
        }, 200);

        setAnimationStage(3);
      }, 1000);
      trackTimeout(clickToggle);
    }, 1500);
    trackTimeout(stage2);

    // --- STAGE 3: Cursor and Reminder screen close ---
    const stage3 = setTimeout(() => {
      if (!componentMountedRef.current) return;

      setAnimationStage(4);

      // Fade out cursor
      setCursorOpacity(0);

      // Close reminder screen
      setReminderScreenOpacity(0);
      setReminderScreenTransform("translateX(-20px)");
    }, 3500);
    trackTimeout(stage3);

    // --- STAGE 4: Email Overdue Card appears ---
    const stage4 = setTimeout(() => {
      if (!componentMountedRef.current) return;

      setAnimationStage(5);

      // Show email card
      setEmailCardOpacity(1);
      setEmailCardTransform("translateX(0px)");
    }, 4500);
    trackTimeout(stage4);

    // --- STAGE 5: Cursor appears and clicks Send button ---
    const stage5 = setTimeout(() => {
      if (!componentMountedRef.current) return;

      setAnimationStage(6);

      // Show cursor at Send Now button position
      const sendPos = getSendNowButtonPosition();
      setCursorOpacity(1);
      setCursorPosition({ x: sendPos.x, y: sendPos.y });

      // Hover effect before click
      setSendButtonState("hover");

      // Click animation
      const clickSend = setTimeout(() => {
        if (!componentMountedRef.current) return;

        setCursorScale(0.7);
        setSendButtonState("click");

        setTimeout(() => {
          if (!componentMountedRef.current) return;
          setCursorScale(1);
          setSendButtonState("default");
        }, 300);

        setAnimationStage(7);
      }, 800);
      trackTimeout(clickSend);
    }, 6000);
    trackTimeout(stage5);

    // --- STAGE 6: Pause and return to Reminder screen ---
    const stage6 = setTimeout(() => {
      if (!componentMountedRef.current) return;

      setAnimationStage(8);

      // Fade out cursor
      setCursorOpacity(0);

      // Fade out email card
      setEmailCardOpacity(0);
      setEmailCardTransform("translateX(50px)");

      // Show reminder screen again with entry animation
      setReminderScreenOpacity(1);
      setReminderScreenTransform("translateX(0px)");
    }, 8000);
    trackTimeout(stage6);

    // --- STAGE 7: Cursor appears and clicks Set Reminder ---
    const stage7 = setTimeout(() => {
      if (!componentMountedRef.current) return;

      setAnimationStage(9);

      // Show cursor at Set Reminder button
      const setReminderPos = getSetReminderButtonPosition();
      setCursorOpacity(1);
      setCursorPosition({ x: setReminderPos.x, y: setReminderPos.y });

      // Hover effect before click
      setSetReminderButtonState("hover");

      // Click animation
      const clickSetReminder = setTimeout(() => {
        if (!componentMountedRef.current) return;

        setCursorScale(0.7);
        setSetReminderButtonState("click");

        setTimeout(() => {
          if (!componentMountedRef.current) return;
          setCursorScale(1);
          setSetReminderButtonState("default");
        }, 300);

        setAnimationStage(10);
      }, 800);
      trackTimeout(clickSetReminder);
    }, 10000);
    trackTimeout(stage7);

    // --- STAGE 8: Reminder screen closes with cursor ---
    const stage8 = setTimeout(() => {
      if (!componentMountedRef.current) return;

      setAnimationStage(11);

      // Fade out cursor
      setCursorOpacity(0);

      // Close reminder screen
      setReminderScreenOpacity(0);
      setReminderScreenTransform("translateX(-20px)");
    }, 11500);
    trackTimeout(stage8);

    // --- STAGE 9: Custom Reminder appears with toggle OFF ---
    const stage9 = setTimeout(() => {
      if (!componentMountedRef.current) return;

      setAnimationStage(12);

      // Show custom reminder with toggle OFF
      setCustomReminderOpacity(1);
      setCustomReminderTransform("translateX(0px)");
      setReminderToggle(false); // Ensure toggle starts OFF
      setCustomToggleScale(1); // Normal scale

      // After a short pause, animate the toggle
      setTimeout(() => {
        if (!componentMountedRef.current) return;
        animateToggleOn();
      }, 1000);
    }, 12500);
    trackTimeout(stage9);

    // --- STAGE 10: Final pause and loop restart ---
    const stage10 = setTimeout(() => {
      if (!componentMountedRef.current) return;

      setAnimationStage(13);

      // Final pause showing custom reminder with toggle ON (after animation)

      // Restart the loop after pause
      const restartLoop = setTimeout(() => {
        if (!componentMountedRef.current) return;

        // Fade out custom reminder
        setCustomReminderOpacity(0);
        setCustomReminderTransform("translateX(50px)");

        // Reset and restart
        setTimeout(() => {
          if (!componentMountedRef.current) return;
          resetAllStates();
          isAnimatingRef.current = false;
          startAnimation();
        }, 700);
      }, 3000);
      trackTimeout(restartLoop);
    }, 17000); // Adjusted timing to account for zoom animation
    trackTimeout(stage10);

    animationRef.current = stage2;
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
          Stage: {animationStage} | Toggle:{" "}
          {activeToggles[targetInvoiceId] ? "ON" : "OFF"} | Reminder:{" "}
          {reminderToggle ? "ON" : "OFF"}
        </div>
      </div>
    );
  };

  // Get button styles based on state
  const getSetReminderButtonStyle = () => {
    if (setReminderButtonState === "click") {
      return "bg-[#0a4bb8] scale-95";
    } else if (setReminderButtonState === "hover") {
      return "bg-[#0a4bb8]";
    }
    return "bg-[rgb(7,63,158)]";
  };

  const getSendButtonStyle = () => {
    if (sendButtonState === "click") {
      return "bg-[#0a4bb8] scale-95";
    } else if (sendButtonState === "hover") {
      return "bg-[#0a4bb8]";
    }
    return "bg-[#073F9E]";
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
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        @keyframes zoomInOut {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
          100% {
            transform: scale(1);
          }
        }
        .click-effect {
          animation: pulse 0.3s ease-in-out;
        }
        .toggle-zoom-animation {
          transition: transform 0.3s ease-out;
        }
      `}</style>

      <div className="hidden relative w-full min-h-[32rem] sm:flex items-center justify-center">
        {/* Cursor */}
        <div
          id="reminder-animation-cursor"
          className="absolute z-50 transition-all duration-700 ease-out hidden sm:block pointer-events-none"
          style={{
            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) scale(${cursorScale})`,
            opacity: cursorOpacity,
            transitionTimingFunction: ANIMATION.TRANSITION,
            transition: `opacity ${ANIMATION.DURATION}ms ease-out, transform ${ANIMATION.CURSOR_MOVE_DURATION}ms ${ANIMATION.TRANSITION}`,
          }}
        >
          <ArrowIcon width={30} height={30} />
        </div>

        {/* Reminder screen */}
        <div
          className="absolute transition-all duration-700 ease-out"
          style={{
            opacity: reminderScreenOpacity,
            transform: reminderScreenTransform,
            transition: `all 700ms ${ANIMATION.TRANSITION}`,
            pointerEvents: "none",
          }}
        >
          <div className="w-[20rem] sm:w-[34rem] h-[20rem] bg-white rounded-[10px] shadow-[0_3px_12px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Header */}
            <div className="px-3 py-2 flex justify-between items-center border-b border-gray-100">
              <span className="feature-title !text-xs txt-blue">
                Automation Reminder
              </span>
              <button
                className={`flex items-center gap-1 text-white px-2 py-1 rounded-md text-[10px] font-semibold transition-all duration-300 ${getSetReminderButtonStyle()}`}
              >
                <BellIcon className="w-3 h-3" />
                <span className="text-[10px]">Set reminder</span>
              </button>
            </div>

            {/* Filter Button */}
            <div className="px-3 py-4 flex items-center">
              <div className="w-[90px] h-7 bg-white border-[0.4px] border-[#073F9E] rounded-[5px] flex items-center pl-7 relative">
                <div className="absolute left-2.5 w-3.5 h-3.5">
                  <FilterIcon className="w-3.5 h-3.5 text-[#073F9E]" />
                </div>
                <span className="feature-title !text-[10px] txt-blue">
                  Filter
                </span>
                <div className="absolute right-2 w-3.5 h-4 bg-[rgba(7,63,158,0.1)] border-[0.3px] border-[#073F9E] rounded-[2px] flex items-center justify-center">
                  <span className="text-muted !text-[8px] txt-blue">2</span>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="px-3">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-1 py-1.5 px-2 bg-[rgba(7,63,158,0.1)] rounded-t-md text-[9px] font-bold text-[#1B1B1B] relative">
                <div className="col-span-3 sm:col-span-2 relative flex items-center h-full">
                  <span className="text-muted !text-[9px] font-semibold">
                    INVOICE ID
                  </span>
                  <div className="absolute right-0 top-0 h-full w-px bg-[rgba(7,63,158,0.2)]"></div>
                </div>
                <div className="col-span-4 sm:col-span-2 relative flex items-center h-full ">
                  <span className="text-muted !text-[9px] font-semibold">
                    CUSTOMER
                  </span>
                  <div className="absolute right-0 top-0 h-full w-px bg-[rgba(7,63,158,0.2)]"></div>
                </div>
                <div className="col-span-2 relative hidden sm:flex items-center h-full">
                  <span className="text-muted !text-[9px] font-semibold">
                    STATUS
                  </span>
                  <div className="absolute right-0 top-0 h-full w-px bg-[rgba(7,63,158,0.2)]"></div>
                </div>
                <div className="col-span-3 sm:col-span-2 relative flex items-center h-full ml-2">
                  <span className="text-muted !text-[9px] font-semibold">
                    AMOUNT
                  </span>
                  <div className="absolute right-0 top-0 h-full w-px bg-[rgba(7,63,158,0.2)]"></div>
                </div>
                <div className="col-span-3 relative hidden sm:flex items-center h-full ">
                  <span className="text-muted !text-[9px] font-semibold">
                    BILLING PERIOD
                  </span>
                  <div className="absolute right-0 top-0 h-full w-px bg-[rgba(7,63,158,0.2)]"></div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <BellIcon className="w-3 h-3 text-[#073F9E]" />
                </div>
              </div>

              {/* Table Rows */}
              <div className="relative">
                {invoices.map((invoice, index) => (
                  <React.Fragment key={invoice.id}>
                    <div
                      className={`grid grid-cols-12 gap-1 py-1.5 px-2 text-[9px] relative ${
                        index !== invoices.length - 1
                          ? "border-b border-[rgba(27,27,27,0.1)]"
                          : ""
                      } ${invoice.id === targetInvoiceId && activeToggles[invoice.id] ? "bg-blue-50" : ""}`}
                    >
                      <div className="col-span-3 sm:col-span-2 text-[#1B1B1B] font-medium relative flex items-center h-full">
                        <span className="text-muted !text-[9px]">
                          {invoice.id}
                        </span>
                        <div className="absolute right-0 top-0 h-full w-px bg-[rgba(27,27,27,0.1)]"></div>
                      </div>
                      <div className="col-span-4 sm:col-span-2 relative flex items-center h-full">
                        <span className="feature-title !text-[10px] txt-blue">
                          {invoice.customer}
                        </span>
                        <div className="absolute right-0 top-0 h-full w-px bg-[rgba(27,27,27,0.1)]"></div>
                      </div>
                      <div className="col-span-2 relative hidden sm:flex items-center h-full">
                        <StatusBadge status={invoice.status} />
                        <div className="absolute right-0 top-0 h-full w-px bg-[rgba(27,27,27,0.1)]"></div>
                      </div>
                      <div className="col-span-3 sm:col-span-2 text-[#1B1B1B] font-medium text-[9px] ml-2 relative flex items-center h-full">
                        <span className="text-body !text-[9px]">
                          {invoice.amount}
                        </span>
                        <div className="absolute right-0 top-0 h-full w-px bg-[rgba(27,27,27,0.1)]"></div>
                      </div>
                      <div className="col-span-3 text-[#1B1B1B] text-[8px] relative hidden sm:flex items-center h-full">
                        <span className="text-muted !text-[8px]">
                          {invoice.period}
                        </span>
                        <div className="absolute right-0 top-0 h-full w-px bg-[rgba(27,27,27,0.1)]"></div>
                      </div>
                      <div className="col-span-1 flex justify-center items-center h-full">
                        <div className="relative focus:outline-none group scale-75">
                          {/* Toggle Background */}
                          <div
                            className={`w-7 h-3.5 rounded-full transition-colors duration-300 ${
                              activeToggles[invoice.id]
                                ? "bg-[#073F9E]"
                                : "bg-gray-300"
                            }`}
                          ></div>

                          {/* Toggle Knob */}
                          <div
                            className={`absolute top-0.5 left-0.5 w-2.5 h-2.5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                              activeToggles[invoice.id]
                                ? "translate-x-3.5"
                                : "translate-x-0"
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Email Overdue Card */}
        <div
          className="absolute transition-all duration-700 ease-out"
          style={{
            opacity: emailCardOpacity,
            transform: emailCardTransform,
            transition: `all 700ms ${ANIMATION.TRANSITION}`,
            pointerEvents: "none",
          }}
        >
          <div className="w-[20rem] sm:w-[29rem] h-[20rem] bg-white shadow-[0px_7px_10px_rgba(0,0,0,0.25)] rounded-[10px] px-5 pt-5 pb-2 flex flex-col relative">
            {/* Bottom gray section */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-[#F8FBFF] rounded-b-[10px]" />

            {/* Main content */}
            <div className="flex-1 flex flex-col relative z-10">
              {/* Header with logo and company info */}
              <div className="flex items-start gap-2">
                <div className="w-10 h-10 bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.25)] rounded-[2px] flex items-center justify-center flex-shrink-0 p-1">
                  <Logo />
                </div>
                <div className="flex-1">
                  <div className="sub-section-heading !text-base txt-blue">
                    Trusty Money
                  </div>
                  <div className="text-muted !text-xs text-[#1B1B1B]">
                    no reply aditya@trustymoney.in
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <ActionBarIcon width={60} height={18} />
                </div>
              </div>

              {/* Email content */}
              <div className="">
                <div className="feature-title !text-xs text-[#1B1B1B] mt-8">
                  TO: contact@rougecodes.com
                </div>
                <div className="feature-title !text-xs text-[#1B1B1B] mt-2">
                  Subject: Outstanding Payment reminder - Invoice ID: [TM11002]
                </div>
                <div className="text-body !text-xs text-[#1B1B1B] max-w-[493px] leading-tight mt-8">
                  Payment for this invoice is now overdue. Please review and
                  process at your earliest convenience.
                </div>
              </div>

              {/* PDF Attachment */}
              <div className="mt-8 flex items-center">
                <div className="w-[120px] h-5 bg-[#EAF2FF] rounded-[2px] flex items-center px-2 relative gap-2">
                  <span className="text-muted !text-[7px]">
                    Invoice_TMINV002.pdf
                  </span>
                  <LinkIcon size={8} />
                </div>
              </div>
            </div>

            {/* Bottom action bar */}
            <div className="flex items-center justify-between mt-auto relative z-10">
              <div className="flex items-center gap-4">
                <button className="hover:opacity-80 transition-opacity">
                  <TrashIcon size={14} className="text-[rgba(27,27,27,0.7)]" />
                </button>
                <button className="flex flex-col gap-0.5 hover:opacity-80 transition-opacity">
                  <div className="w-[3px] h-[3px] bg-[rgba(27,27,27,0.6)] rounded-full" />
                  <div className="w-[3px] h-[3px] bg-[rgba(27,27,27,0.6)] rounded-full" />
                  <div className="w-[3px] h-[3px] bg-[rgba(27,27,27,0.6)] rounded-full" />
                </button>
                <button className="w-[38px] h-[18px] bg-[#EAF2FF] rounded-[3px] flex items-center justify-center hover:bg-[#d9e6ff] transition-colors">
                  <span className="text-muted !text-[8px] text-[#1B1B1B] font-medium">
                    Reply
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-5">
                <button className="hover:opacity-80 transition-opacity">
                  <SmileIcon size={16} className="text-[rgba(27,27,27,0.7)]" />
                </button>
                <button className="hover:opacity-80 transition-opacity">
                  <AttachmentIcon
                    size={16}
                    className="text-[rgba(27,27,27,0.7)]"
                  />
                </button>
                <button
                  className={`w-[108px] h-[29px] rounded-[6px] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.2)] flex items-center justify-between px-3 transition-all duration-300 group ${getSendButtonStyle()}`}
                >
                  <span className="text-white feature-title !text-[11px] font-medium">
                    Send Now
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="text-white/30 text-[16px] font-hairline leading-none select-none">
                      |
                    </div>
                    <SendIcon
                      size={12}
                      color="white"
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Reminder */}
        <div
          className="absolute transition-all duration-700 ease-out"
          style={{
            opacity: customReminderOpacity,
            transform: customReminderTransform,
            transition: `all 700ms ${ANIMATION.TRANSITION}`,
            pointerEvents: "none",
          }}
        >
          <div className="w-[235px] h-[300px] bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.2)] rounded-[5px] px-4 pt-0 pb-4 flex flex-col items-center font-['DM_Sans']">
            {/* Bell Icon with rotation */}
            <div className="relative w-[48px] h-[48px] -rotate-[24.99deg] mt-2">
              <StickerIcon width={48} height={48} />
            </div>

            {/* Set your reminder */}
            <h3 className="font-bold text-[16px] leading-[130%] text-[#1B1B1B] mt-2">
              Set your reminder
            </h3>

            {/* Description text */}
            <p className="text-[9px] leading-[128%] text-[#1B1B1B] text-center max-w-[160px] mt-2">
              Toggle billing reminders on to stay on top of your billing
              schedule.
            </p>

            {/* Reminder Settings Container */}
            <div className="w-full bg-[#F1F5F9] rounded-[5px] mt-4 p-3 relative">
              {/* Remind me monthly with toggle */}
              <div className="flex items-center justify-between">
                <span className="font-bold text-[9px] leading-[130%] text-[#1B1B1B]">
                  Remind me monthly
                </span>

                {/* Working Toggle Switch with zoom effect */}
                <div className="relative w-6 h-3 focus:outline-none">
                  {/* Toggle Background */}
                  <div
                    className={`w-6 h-3 rounded-full transition-colors duration-300 ${
                      reminderToggle ? "bg-[#073F9E]" : "bg-gray-300"
                    }`}
                  ></div>

                  {/* Toggle Knob with zoom animation */}
                  <div
                    className={`absolute top-0.5 left-0.5 w-2 h-2 bg-white rounded-full shadow-md transition-all duration-300`}
                    style={{
                      transform: `translateX(${reminderToggle ? "12px" : "0"}) scale(${customToggleScale})`,
                      transition: "transform 0.3s ease-out, left 0.3s ease-out",
                    }}
                  ></div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="w-full h-[0px] border-[0.3px] border-black/20 my-2"></div>

              {/* Monthly Reminder */}
              <div className="flex items-center justify-between mt-2">
                <span className="text-[9px] leading-[130%] text-[#1B1B1B]">
                  Monthly Reminder
                </span>

                {/* Date and Time Selector */}
                <div className="w-[100px] h-[16px] bg-white rounded-[2px] flex items-center justify-center">
                  <span className="text-[8px] leading-[130%] text-[#1B1B1B]">
                    Date 01 & Time 1:00 AM
                  </span>
                </div>
              </div>

              {/* Add Another Reminder Button */}
              <button className="w-full h-[20px] bg-[#073F9E] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[2px] flex items-center justify-center mt-4 hover:bg-[#0a4bb8] transition-colors">
                <span className="text-white font-medium text-[8px] leading-[130%]">
                  + Add another reminder
                </span>
              </button>
            </div>

            {/* Footer Text */}
            <p className="text-[8px] leading-[128%] text-[#1B1B1B] text-center max-w-[140px] mt-3">
              The reminder helps you to stay on track with Billing scheduled
            </p>
          </div>
        </div>
      </div>

      {/* Reminder screen */}
      <div className="block sm:hidden w-full sm:w-[34rem] h-[20rem] bg-white rounded-[10px] shadow-[0_3px_12px_rgba(0,0,0,0.25)] overflow-hidden m-auto">
        {/* Header */}
        <div className="px-3 py-2 flex justify-between items-center border-b border-gray-100">
          <span className="feature-title !text-xs txt-blue">
            Automation Reminder
          </span>
          <button
            className={`flex items-center gap-1 text-white px-2 py-1 rounded-md text-[10px] font-semibold transition-all duration-300`}
          >
            <BellIcon className="w-3 h-3" />
            <span className="text-[10px]">Set reminder</span>
          </button>
        </div>

        {/* Filter Button */}
        <div className="px-3 py-4 flex items-center">
          <div className="w-[90px] h-7 bg-white border-[0.4px] border-[#073F9E] rounded-[5px] flex items-center pl-7 relative">
            <div className="absolute left-2.5 w-3.5 h-3.5">
              <FilterIcon className="w-3.5 h-3.5 text-[#073F9E]" />
            </div>
            <span className="feature-title !text-[10px] txt-blue">Filter</span>
            <div className="absolute right-2 w-3.5 h-4 bg-[rgba(7,63,158,0.1)] border-[0.3px] border-[#073F9E] rounded-[2px] flex items-center justify-center">
              <span className="text-muted !text-[8px] txt-blue">2</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="px-3">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-1 py-1.5 px-2 bg-[rgba(7,63,158,0.1)] rounded-t-md text-[9px] font-bold text-[#1B1B1B] relative">
            <div className="col-span-3 sm:col-span-2 relative flex items-center h-full">
              <span className="text-muted !text-[9px] font-semibold">
                INVOICE ID
              </span>
              <div className="absolute right-0 top-0 h-full w-px bg-[rgba(7,63,158,0.2)]"></div>
            </div>
            <div className="col-span-4 sm:col-span-2 relative flex items-center h-full ">
              <span className="text-muted !text-[9px] font-semibold">
                CUSTOMER
              </span>
              <div className="absolute right-0 top-0 h-full w-px bg-[rgba(7,63,158,0.2)]"></div>
            </div>
            <div className="col-span-2 relative hidden sm:flex items-center h-full">
              <span className="text-muted !text-[9px] font-semibold">
                STATUS
              </span>
              <div className="absolute right-0 top-0 h-full w-px bg-[rgba(7,63,158,0.2)]"></div>
            </div>
            <div className="col-span-3 sm:col-span-2 relative flex items-center h-full ml-2">
              <span className="text-muted !text-[9px] font-semibold">
                AMOUNT
              </span>
              <div className="absolute right-0 top-0 h-full w-px bg-[rgba(7,63,158,0.2)]"></div>
            </div>
            <div className="col-span-3 relative hidden sm:flex items-center h-full ">
              <span className="text-muted !text-[9px] font-semibold">
                BILLING PERIOD
              </span>
              <div className="absolute right-0 top-0 h-full w-px bg-[rgba(7,63,158,0.2)]"></div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <BellIcon className="w-3 h-3 text-[#073F9E]" />
            </div>
          </div>

          {/* Table Rows */}
          <div className="relative">
            {invoices.map((invoice, index) => (
              <React.Fragment key={invoice.id}>
                <div
                  className={`grid grid-cols-12 gap-1 py-1.5 px-2 text-[9px] relative ${
                    index !== invoices.length - 1
                      ? "border-b border-[rgba(27,27,27,0.1)]"
                      : ""
                  } ${invoice.id === targetInvoiceId && activeToggles[invoice.id] ? "bg-blue-50" : ""}`}
                >
                  <div className="col-span-3 sm:col-span-2 text-[#1B1B1B] font-medium relative flex items-center h-full">
                    <span className="text-muted !text-[9px]">{invoice.id}</span>
                    <div className="absolute right-0 top-0 h-full w-px bg-[rgba(27,27,27,0.1)]"></div>
                  </div>
                  <div className="col-span-4 sm:col-span-2 relative flex items-center h-full">
                    <span className="feature-title !text-[10px] txt-blue">
                      {invoice.customer}
                    </span>
                    <div className="absolute right-0 top-0 h-full w-px bg-[rgba(27,27,27,0.1)]"></div>
                  </div>
                  <div className="col-span-2 relative hidden sm:flex items-center h-full">
                    <StatusBadge status={invoice.status} />
                    <div className="absolute right-0 top-0 h-full w-px bg-[rgba(27,27,27,0.1)]"></div>
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-[#1B1B1B] font-medium text-[9px] ml-2 relative flex items-center h-full">
                    <span className="text-body !text-[9px]">
                      {invoice.amount}
                    </span>
                    <div className="absolute right-0 top-0 h-full w-px bg-[rgba(27,27,27,0.1)]"></div>
                  </div>
                  <div className="col-span-3 text-[#1B1B1B] text-[8px] relative hidden sm:flex items-center h-full">
                    <span className="text-muted !text-[8px]">
                      {invoice.period}
                    </span>
                    <div className="absolute right-0 top-0 h-full w-px bg-[rgba(27,27,27,0.1)]"></div>
                  </div>
                  <div className="col-span-1 flex justify-center items-center h-full">
                    <div className="relative focus:outline-none group scale-75">
                      {/* Toggle Background */}
                      <div
                        className={`w-7 h-3.5 rounded-full transition-colors duration-300 ${
                          activeToggles[invoice.id]
                            ? "bg-[#073F9E]"
                            : "bg-gray-300"
                        }`}
                      ></div>

                      {/* Toggle Knob */}
                      <div
                        className={`absolute top-0.5 left-0.5 w-2.5 h-2.5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                          activeToggles[invoice.id]
                            ? "translate-x-3.5"
                            : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReminderVisual;