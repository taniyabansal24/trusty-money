
import React, { useEffect, useState, useRef } from "react";
import "./animation.css";
import ArrowIcon from "../../components/svg/ArrowIcon";
import LoadingSpinner from "../../components/svg/LoadingSpinner";
import CheckIcon from "../../components/svg/CheckIcon";
import MoreIcon from "../../components/svg/MoreIcon";
import LayersIcon from "../../components/svg/LayersIcon";
import CalendarArrowIcon from "../../components/svg/CalendarArrowIcon";
import MoreDotsIcon from "../../components/svg/MoreDotsIcon";
import PlusSquareIcon from "../../components/svg/PlusSquareIcon";
import ReceiptIcon from "../../components/svg/ReceiptIcon";
import GlobeIcon from "../../components/svg/GlobeIcon";
import ChevronDownIcon from "../../components/svg/ChevronDownIcon";
import PlusCircleIcon from "../../components/svg/PlusCircleIcon";
import CursorIcon from "../../components/svg/CursorIcon";
import PlusIcon from "../../components/svg/PlusIcon";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Container } from "../../components/ui";
import { staggerContainer, staggerItem } from "../../utils/animations";
import ClockIcon from "../../components/svg/ClockIcon";
import UserGroupIcon from "../../components/svg/UserGroupIcon";

const HeroSection = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [rowHeight, setRowHeight] = useState(0);
  const [blurAmount, setBlurAmount] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [inputTransform, setInputTransform] = useState("translateY(-20px)");
  const [suggestionsTransform, setSuggestionsTransform] = useState("translateY(-20px)");
  const [cursorPosition, setCursorPosition] = useState({ x: 707.939, y: 74.6 });
  const [cursorOpacity, setCursorOpacity] = useState(0);
  const [cursorScale, setCursorScale] = useState(1);
  const [loadingOpacity, setLoadingOpacity] = useState(0);
  const [checkOpacity, setCheckOpacity] = useState(0);
  const [startedOpacity, setStartedOpacity] = useState(0);
  const [startedTransform, setStartedTransform] = useState("translateX(-25%)");
  const [startTextOpacity, setStartTextOpacity] = useState(1);
  const [startTextTransform, setStartTextTransform] = useState("scale(1)");
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showFooterClick, setShowFooterClick] = useState(false);

  // ========== ADDED: Animation Management System ==========
  const activeTimeoutsRef = useRef([]);
  const animationRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const componentMountedRef = useRef(true);

  const textToType = "API Product";

  // ========== ADDED: Cleanup function ==========
  const clearAllTimeouts = () => {
    activeTimeoutsRef.current.forEach((timeoutId) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        clearInterval(timeoutId);
      }
    });
    activeTimeoutsRef.current = [];
    
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }
  };

  // ========== ADDED: Track timeout for cleanup ==========
  const trackTimeout = (timeoutId) => {
    activeTimeoutsRef.current.push(timeoutId);
    return timeoutId;
  };

  // ========== ADDED: Reset all states ==========
  const resetAllStates = () => {
    if (!componentMountedRef.current) return;
    
    setTypedText("");
    setRowHeight(0);
    setBlurAmount(0);
    setOverlayOpacity(0);
    setInputTransform("translateY(-20px)");
    setSuggestionsTransform("translateY(-20px)");
    setCursorPosition({ x: 707.939, y: 43 });
    setCursorOpacity(0);
    setCursorScale(1);
    setLoadingOpacity(0);
    setCheckOpacity(0);
    setStartedOpacity(0);
    setStartedTransform("translateX(-25%)");
    setStartTextOpacity(1);
    setStartTextTransform("scale(1)");
    setIsInputOpen(false);
    setButtonClicked(false);
    setShowFooterClick(false);
    setAnimationStage(0);
  };

  // ========== MODIFIED: startAnimationLoop with better cleanup ==========
  const startAnimationLoop = () => {
    // Clear any existing animations first
    clearAllTimeouts();
    isAnimatingRef.current = true;
    
    // Reset states
    resetAllStates();

    // Scene 1 – Initial cursor appears (0s → 0.4s)
    const timeout1 = setTimeout(() => {
      if (!componentMountedRef.current) return;
      setCursorOpacity(1);
      setAnimationStage(1);
    }, 400);
    trackTimeout(timeout1);

    // Scene 2 – Cursor moves to "Add product" (0.4s → 1.0s)
    const timeout2 = setTimeout(() => {
      if (!componentMountedRef.current) return;
      setCursorPosition({ x: 100, y: 300 });
      setCursorScale(0.9);
      setAnimationStage(2);
    }, 1000);
    trackTimeout(timeout2);

    // Scene 3 – Click "Add product" (1.0s → 1.4s)
    const timeout3 = setTimeout(() => {
      if (!componentMountedRef.current) return;
      setButtonClicked(true);
      setCursorScale(0.7);
      const clickTimeout = setTimeout(() => {
        if (!componentMountedRef.current) return;
        setCursorScale(0.9);
        setButtonClicked(false);
      }, 150);
      trackTimeout(clickTimeout);
      setAnimationStage(3);
      setBlurAmount(5);
    }, 1400);
    trackTimeout(timeout3);

    // Scene 4 – Overlay opens (1.4s → 1.8s)
    const timeout4 = setTimeout(() => {
      if (!componentMountedRef.current) return;
      setIsInputOpen(true);
      setOverlayOpacity(1);
      setInputTransform("translateY(0px)");
      setSuggestionsTransform("translateY(0px)");
      setAnimationStage(4);
    }, 1800);
    trackTimeout(timeout4);

    // Scene 5 – Typing "API Product" (1.8s → 3.0s)
    const timeout5 = setTimeout(() => {
      if (!componentMountedRef.current) return;
      setAnimationStage(5);
      let i = 0;
      const typeInterval = setInterval(() => {
        if (!componentMountedRef.current) {
          clearInterval(typeInterval);
          return;
        }
        if (i < textToType.length) {
          setTypedText(textToType.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          trackTimeout(typeInterval);

          // Brief pause after typing
          const pauseTimeout = setTimeout(() => {
            if (!componentMountedRef.current) return;
            // Scene 6 – Move cursor to footer (3.2s → 3.6s)
            setCursorPosition({ x: 320, y: 460 });
            setCursorScale(0.9);
            setAnimationStage(6);

            // Scene 7 – Click footer CTA (3.6s → 4.0s)
            const clickTimeout2 = setTimeout(() => {
              if (!componentMountedRef.current) return;
              setShowFooterClick(true);
              setCursorScale(0.7);

              const resetCursorTimeout = setTimeout(() => {
                if (!componentMountedRef.current) return;
                setCursorScale(0.9);
                setShowFooterClick(false);

                // Scene 8 – Close overlay smoothly (4.0s → 4.4s)
                setOverlayOpacity(0);
                setInputTransform("translateY(-20px)");
                setSuggestionsTransform("translateY(-20px)");

                const closeTimeout = setTimeout(() => {
                  if (!componentMountedRef.current) return;
                  setIsInputOpen(false);
                  setRowHeight(36);
                  setBlurAmount(0);
                  setAnimationStage(7);
                }, 300);
                trackTimeout(closeTimeout);
              }, 150);
              trackTimeout(resetCursorTimeout);
            }, 400);
            trackTimeout(clickTimeout2);
          }, 200);
          trackTimeout(pauseTimeout);
        }
      }, 90);
      trackTimeout(typeInterval);
    }, 3000);
    trackTimeout(timeout5);

    // Scene 9 – Cursor moves to "Start billing" (4.4s → 5.0s)
    const timeout6 = setTimeout(() => {
      if (!componentMountedRef.current) return;
      setCursorPosition({ x: 707.939, y: 35 });
      setCursorScale(0.9);
      setAnimationStage(8);
    }, 5000);
    trackTimeout(timeout6);

    // Scene 10 – Click "Start billing" (5.0s → 5.4s)
    const timeout7 = setTimeout(() => {
      if (!componentMountedRef.current) return;
      setButtonClicked(true);
      setCursorScale(0.7);
      const clickTimeout3 = setTimeout(() => {
        if (!componentMountedRef.current) return;
        setCursorScale(0.9);
        setButtonClicked(false);
        setStartTextOpacity(0);
        setStartTextTransform("scale(0.9)");
        setLoadingOpacity(1);
        setAnimationStage(9);
      }, 150);
      trackTimeout(clickTimeout3);
    }, 5400);
    trackTimeout(timeout7);

    // Scene 11 – Loading to success (5.4s → 6.0s)
    const timeout8 = setTimeout(() => {
      if (!componentMountedRef.current) return;
      setLoadingOpacity(0);
      setCheckOpacity(1);
      const successTimeout = setTimeout(() => {
        if (!componentMountedRef.current) return;
        setStartedOpacity(1);
        setStartedTransform("translateX(0px)");
        setAnimationStage(10);
      }, 200);
      trackTimeout(successTimeout);
    }, 6000);
    trackTimeout(timeout8);

    // Scene 12 – Pause and restart loop (6.0s → 7.5s)
    const restartTimeout = setTimeout(() => {
      if (!componentMountedRef.current) return;
      setTimeout(() => {
        if (!componentMountedRef.current) return;
        startAnimationLoop();
      }, 1500);
    }, 7500);
    trackTimeout(restartTimeout);

    // Store main timeout reference
    animationRef.current = restartTimeout;
  };

  // ========== ADDED: Manual restart function ==========
  const handleRestart = () => {
    if (isAnimatingRef.current) {
      clearAllTimeouts();
      isAnimatingRef.current = false;
    }
    setTimeout(() => {
      startAnimationLoop();
    }, 100);
  };

  // ========== MODIFIED: useEffect with proper cleanup ==========
  useEffect(() => {
    componentMountedRef.current = true;
    isAnimatingRef.current = true;
    
    // Start the animation loop
    startAnimationLoop();

    // ========== ADDED: Visibility change handler ==========
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause animations when tab is not visible
        clearAllTimeouts();
        isAnimatingRef.current = false;
      } else {
        // Resume animations when tab becomes visible
        if (!isAnimatingRef.current) {
          handleRestart();
        }
      }
    };

    // Add visibility change listener
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup function
    return () => {
      componentMountedRef.current = false;
      isAnimatingRef.current = false;
      clearAllTimeouts();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []); // Run once on mount

  // ========== ADDED: Debug/Reset button (remove in production) ==========
  // This is useful for development - shows that animations can be controlled
  const DebugControls = () => (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 9999,
      display: 'flex',
      gap: '10px',
      opacity: 0.7,
      transition: 'opacity 0.3s'
    }}
    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
    onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}>
      <button
        onClick={handleRestart}
        style={{
          background: '#073F9E',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: 'bold'
        }}
      >
        Restart Anim
      </button>
      <button
        onClick={() => {
          clearAllTimeouts();
          resetAllStates();
          isAnimatingRef.current = false;
        }}
        style={{
          background: '#dc2626',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: 'bold'
        }}
      >
        Stop Anim
      </button>
    </div>
  );

  return (
    <>
      {/* ADD: Debug controls (remove in production) */}
      {/* {process.env.NODE_ENV === 'development' && <DebugControls />} */}
      
     <div class="relative mt-8 flex flex-col w-full max-w-full justify-center sm:mt-20 ">
        {/* Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="false"
          animate="animate"
          className="text-center relative"
        >
          {/* Badge - RESPONSIVE */}
          <motion.div
            variants={staggerItem}
            className="mb-6 flex justify-center items-center gap-3"
          >
            <span className="inline-block px-4 py-2 rounded-full hero-badge txt-blue light-bg text-center">
              Smart Invoice and Automation
            </span>
          </motion.div>

          {/* Headline - RESPONSIVE */}
          <motion.h1 className="hero-heading w-full text-center ">
            Translate sales contracts into <br />
            <span className="gradient-text relative">automated billing.</span>
          </motion.h1>

          {/* Subheadline line - RESPONSIVE */}
          <motion.p className="section-subtitle mb-6 max-w-xl mx-auto text-center ">
            Automate invoices, subscriptions, and usage-based pricing with
            global accuracy and compliance. Designed for companies with hybrid
            pricing and custom deal terms.
          </motion.p>

          {/* CTA Buttons - RESPONSIVE */}
          {/* <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-4 mb-8 justify-center"
              >
                <Button variant="primary" size="md" shimmer>
                  Request a Demo
                </Button>
                <Button variant="secondary" size="md">
                  Talk to Sales
                </Button>
              </motion.div> */}

          <motion.div variants={staggerItem} className="text-muted space-y-2">
            {[].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    delay: 2.5 + i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="text-green-600 font-bold"
                >
                  {item.icon}
                </motion.span>
                {item.text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
        <div className="relative w-full max-w-[817px] mx-auto mt-20">
          <div id="hero-animation-root" className="relative w-full">
            {/* Cursor */}
            <div
              id="hero-animation-cursor"
              className="absolute z-20 transition-all duration-300 ease-out"
              style={{
                transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) scale(${cursorScale})`,
                opacity: cursorOpacity,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <ArrowIcon width={30} height={30} />
            </div>

            {/* Main Card */}
            <div
              className="relative w-full overflow-hidden rounded-lg border border-[#e4e8ef] border-opacity-10 bg-white px-6 py-5"
              style={{
                boxShadow:
                  "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px",
              }}
            >
              <div className="flex w-full flex-col justify-between gap-2 sm:flex-row sm:items-center align-center">
                <p className="hero-heading text-[#1B1B1B] text-left text-xl font-bold mb-0">
                  Create a billing schedule
                </p>
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
                    {/* Loading Spinner */}
                    <LoadingSpinner
                      opacity={loadingOpacity}
                      spinning={loadingOpacity === 1}
                      className="loading"
                    />

                    {/* Checkmark and Started text */}
                    <div className="absolute flex items-center space-x-2 whitespace-nowrap">
                      <CheckIcon opacity={checkOpacity} />

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

                    {/* Start Billing text */}
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
                    <MoreIcon size={20} color="#073F9E" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Table Section */}
            <div className="relative sm:h-[383px]">
              <div
                id="hero-animation-bottom"
                className="mt-3 flex w-full flex-col items-start justify-start gap-4 overflow-hidden rounded-lg bg-white pt-5 transition-filter duration-500 ease-out"
                style={{
                  boxShadow:
                    "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px",
                  filter: `blur(${blurAmount}px)`,
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* Header */}
                {/* <div className="relative flex items-center justify-start self-stretch px-6">
                <p className="section-subtitle text-[#1B1B1B] text-left text-base font-bold">
                  Contract
                </p>
              </div> */}

                {/* Desktop view */}
                <div className="hidden w-full items-start justify-between px-4 sm:flex">
                  {/* Product column */}
                  <div className="flex flex-col items-start justify-start text-[#1b1b1b] sm:w-[151px] lg:w-[240px]">
                    <div className="relative flex h-9 items-center gap-2 px-2">
                      <p className="hero-badge text-left text-xs font-bold uppercase text-[#7483a0]">
                        product
                      </p>
                    </div>
                    <div className="relative overflow-hidden px-2">
                      <div className="flex h-9 max-w-full items-center justify-start gap-2">
                        <p className="feature-description min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap text-right">
                          Platform Access
                        </p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden px-2">
                      <div className="flex h-9 max-w-full items-center justify-start gap-2">
                        <p className="feature-description min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap text-right">
                          Onboarding fees
                        </p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden px-2">
                      <div className="flex h-9 max-w-full items-center justify-start gap-2">
                        <p className="feature-description min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap text-right">
                          Account verification
                        </p>
                        {/* <LayersIcon size={24} color="#073F9E" /> */}
                      </div>
                    </div>
                    {/* API Product row with animated height */}
                    <div
                      className="relative overflow-hidden px-2 new-row transition-all duration-300 ease-out"
                      style={{
                        height: `${rowHeight}px`,
                        opacity: rowHeight > 0 ? 1 : 0,
                        transform:
                          rowHeight > 0 ? "translateY(0px)" : "translateY(4px)",
                        transitionTimingFunction:
                          "cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <div className="flex h-9 max-w-full items-center justify-start gap-2">
                        <p className="feature-description min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap text-right">
                          API Product
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Frequency column */}
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative flex h-9 items-center justify-start gap-2 self-stretch px-2">
                      <p className="hero-badge text-left text-xs font-bold uppercase text-[#7483a0]">
                        frequency
                      </p>
                    </div>
                    <div className="relative self-stretch overflow-hidden px-2">
                      <div className="flex h-9 items-center justify-start gap-2">
                        <CalendarArrowIcon size={24} color="#073F9E" />
                        <p className="feature-description text-left text-[#344054]">
                          Annually
                        </p>
                        
                      </div>
                    </div>
                    <div className="relative self-stretch overflow-hidden px-2">
                      <div className="flex h-9 items-center justify-start gap-2">
                        <ClockIcon size={17} />
                        <p className="feature-description text-left text-[#344054]">
                          One time
                        </p>
                        
                      </div>
                    </div>
                    {/* <div className="relative self-stretch overflow-hidden px-2">
                      <div className="flex h-9 items-center justify-start gap-2">
                        <p className="feature-description text-left text-[#344054]">
                          One time
                        </p>
                      </div>
                    </div> */}
                    <div className="relative self-stretch overflow-hidden px-2">
                      <div className="flex h-9 items-center justify-start gap-2">
                        <UserGroupIcon/>
                        <p className="feature-description text-left text-[#344054]">
                          Monthly
                        </p>
                      </div>
                    </div>
                    <div
                      className="relative overflow-hidden px-2 new-row transition-all duration-300 ease-out"
                      style={{
                        height: `${rowHeight}px`,
                        opacity: rowHeight > 0 ? 1 : 0,
                        transform:
                          rowHeight > 0 ? "translateY(0px)" : "translateY(4px)",
                        transitionTimingFunction:
                          "cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <div className="flex h-9 max-w-full items-center justify-start gap-2">
                        <p className="feature-description min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap text-right">
                          One time
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Discount column */}
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative flex h-9 items-center justify-start gap-2 px-2">
                      <p className="hero-badge text-left text-xs font-bold uppercase text-[#7483a0]">
                        discount
                      </p>
                    </div>
                    <div className="relative flex h-9 items-center justify-start gap-2 p-2">
                      <p className="feature-description flex-grow text-left text-[#344054]">
                        10% off once
                      </p>
                    </div>
                  </div>

                  {/* Price column */}
                  <div className="flex">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative flex h-9 items-center justify-end gap-2 self-stretch px-2">
                        <p className="hero-badge text-left text-xs font-bold uppercase text-[#7483a0]">
                          price
                        </p>
                      </div>
                      <div className="relative w-full overflow-hidden px-2">
                        <div className="flex h-9 items-center justify-end gap-2">
                          <p className="text-muted flex-grow text-right text-sm text-[#7483a0] line-through">
                            $5,000.00
                          </p>
                          <p className="feature-title flex-grow text-right text-[#1B1B1B]">
                            $4,500.00
                          </p>
                        </div>
                      </div>
                      <div className="relative w-full overflow-hidden px-2">
                        <div className="flex h-9 items-center justify-end gap-2">
                          <p className="feature-title flex-grow text-right text-[#1B1B1B]">
                            $5,900.00
                          </p>
                        </div>
                      </div>
                      <div className="relative w-full overflow-hidden px-2">
                        <div className="flex h-9 items-center justify-end gap-2">
                          <p className="feature-title flex-grow text-right text-[#1B1B1B]">
                            From $0.20
                          </p>
                        </div>
                      </div>
                      {/* API Product price row with animated height */}
                      <div
                        className="relative w-full overflow-hidden px-2 new-row transition-all duration-300 ease-out"
                        style={{
                          height: `${rowHeight}px`,
                          opacity: rowHeight > 0 ? 1 : 0,
                          transform:
                            rowHeight > 0
                              ? "translateY(0px)"
                              : "translateY(4px)",
                          transitionTimingFunction:
                            "cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                      >
                        <div className="flex h-9 items-center justify-end gap-2">
                          <p className="feature-title flex-grow text-right text-[#1B1B1B]">
                            $5,900.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex h-9 w-9 items-center justify-center px-2"></div>
                      <div className="overflow-hidden px-2">
                        <div className="flex h-9 w-9 items-center justify-center">
                          <MoreDotsIcon color="#073F9E" />
                        </div>
                      </div>
                      <div className="overflow-hidden px-2">
                        <div className="flex h-9 w-9 items-center justify-center">
                          <MoreDotsIcon className="h-6 w-6 text-gray-400" />
                        </div>
                      </div>
                      <div className="overflow-hidden px-2">
                        <div className="flex h-9 w-9 items-center justify-center">
                          <MoreDotsIcon size={24} color="#073F9E" />
                        </div>
                      </div>
                      {/* API Product more dots with animated height */}
                      <div
                        className="overflow-hidden px-2 new-row transition-all duration-300 ease-out"
                        style={{
                          height: `${rowHeight}px`,
                          opacity: rowHeight > 0 ? 1 : 0,
                          transitionTimingFunction:
                            "cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                      >
                        <div className="flex h-9 w-9 items-center justify-center">
                          <MoreDotsIcon size={24} color="#073F9E" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile view */}
                <div className="w-full sm:hidden">
                  <div className="mb-2 grid w-full auto-rows-[36px] grid-cols-[auto,179px] items-center gap-x-4 border-b px-6 pb-2 last:mb-0 last:border-b-0 last:pb-0">
                    <p className="hero-badge block text-left text-xs font-bold uppercase text-[#7483a0]">
                      product
                    </p>
                    <div className="relative flex items-center justify-start gap-2 overflow-hidden rounded-bl-md rounded-tl-md py-2">
                      <p className="feature-title text-right text-[#1B1B1B]">
                        Platform Access
                      </p>
                    </div>
                    <p className="hero-badge block text-left text-xs font-bold uppercase text-[#7483a0]">
                      frequency
                    </p>
                    <div className="relative flex items-center justify-start gap-2 self-stretch py-2">
                      <p className="feature-description flex-shrink-0 flex-grow-0 text-left text-[#344054]">
                        Annually
                      </p>
                      <CalendarArrowIcon size={20} color="#073F9E" />
                    </div>
                    <p className="hero-badge block text-left text-xs font-bold uppercase text-[#7483a0]">
                      discount
                    </p>
                    <div className="relative flex items-center justify-start gap-2 overflow-hidden rounded-bl-md rounded-tl-md py-2">
                      <p className="feature-description text-left text-[#344054]">
                        10% off once
                      </p>
                    </div>
                    <p className="hero-badge block text-left text-xs font-bold uppercase text-[#7483a0]">
                      price
                    </p>
                    <div className="relative flex items-center justify-start gap-2 py-2">
                      <p className="text-muted text-left text-sm text-[#7483a0] line-through">
                        $5,000.00
                      </p>
                      <p className="feature-title text-left text-[#1B1B1B]">
                        $4,500.00
                      </p>
                    </div>
                  </div>
                  <div className="mb-2 grid w-full auto-rows-[36px] grid-cols-[auto,179px] items-center gap-x-4 border-b px-6 pb-2 last:mb-0 last:border-b-0 last:pb-0">
                    <p className="hero-badge block text-left text-xs font-bold uppercase text-[#7483a0]">
                      product
                    </p>
                    <div className="relative flex items-center justify-start gap-2 overflow-hidden rounded-bl-md rounded-tl-md py-2">
                      <p className="feature-title text-right text-[#1B1B1B]">
                        Onboarding fees
                      </p>
                    </div>
                    <p className="hero-badge block text-left text-xs font-bold uppercase text-[#7483a0]">
                      frequency
                    </p>
                    <div className="relative flex items-center justify-start gap-2 self-stretch py-2">
                      <p className="feature-description flex-shrink-0 flex-grow-0 text-left text-[#344054]">
                        One time
                      </p>
                      <CalendarArrowIcon className="h-5 w-5 text-[#073F9E]" />
                    </div>
                    <p className="hero-badge block text-left text-xs font-bold uppercase text-[#7483a0]">
                      discount
                    </p>
                    <div className="relative flex items-center justify-start gap-2 overflow-hidden rounded-bl-md rounded-tl-md py-2">
                      <p className="feature-description text-left text-[#344054]"></p>
                    </div>
                    <p className="hero-badge block text-left text-xs font-bold uppercase text-[#7483a0]">
                      price
                    </p>
                    <div className="relative flex items-center justify-start gap-2 py-2">
                      <p className="feature-title text-left text-[#1B1B1B]">
                        $5,900.00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action buttons section */}
                <div className="hidden flex-col items-start justify-start gap-2.5 self-stretch px-4 sm:flex ">
                  <div className="flex items-start justify-between gap-1.5 self-stretch p-2 text-[13px] border-t-2">
                    <div className="flex items-start justify-start gap-1.5 md:gap-3">
                      <div
                        id="hero-animation-add-product"
                        className={`relative flex h-9 items-center justify-center gap-1 rounded-lg border border-[#d1d9e4] bg-white p-2 transition-transform duration-200 ${
                          buttonClicked && animationStage === 3
                            ? "scale-95"
                            : ""
                        }`}
                        style={{
                          boxShadow: "rgba(20, 23, 28, 0.08) 0px 2px 2px 0px",
                        }}
                      >
                        {/* <PlusSquareIcon size={24} color="#073F9E" /> */} +
                        <p className="feature-description text-left text-[#344054] ">
                          Add product
                        </p>
                      </div>
                      <div
                        id="hero-animation-add-product"
                        className="relative flex h-9 items-center justify-center gap-1 rounded-lg border border-[#d1d9e4] bg-white p-2"
                        style={{
                          boxShadow: "rgba(20, 23, 28, 0.08) 0px 2px 2px 0px",
                        }}
                      >
                        <ReceiptIcon size={24} color="#073F9E" />
                        <p className="feature-description  text-left  text-[#344054] ">
                          Add discount
                        </p>
                      </div>
                    </div>
                    <div
                      className="relative flex h-9 w-full max-w-[161px] flex-shrink items-center justify-start rounded-lg border border-[#d1d9e4] bg-white pr-3"
                      style={{
                        boxShadow: "rgba(20, 23, 28, 0.08) 0px 2px 2px 0px",
                      }}
                    >
                      <div className="feature-description relative flex flex-grow items-center justify-start self-stretch p-3">
                        Select tax rate
                      </div>
                      <ChevronDownIcon size={20} color="#073F9E" />
                    </div>
                  </div>
                </div>

                {/* Add new phase section */}
                {/* <div className="relative flex items-center justify-between self-stretch border-b-0 border-l-0 border-r-0 border-t border-[#e4e8ef] bg-white px-6 py-[18px]">
                  <p className="txt-blue text-left text-sm font-medium">
                    Add new phase
                  </p>
                  <div className="relative flex w-5 flex-shrink-0 flex-grow-0 items-center justify-between">
                    <PlusCircleIcon size={24} color="#073F9E" />
                  </div>
                </div> */}
              </div>

              {/* Overlay with input and suggestions */}
              {isInputOpen && (
                <div
                  id="hero-animation-overlay"
                  className="absolute left-1/2 top-9 z-10 w-full max-w-lg -translate-x-1/2 space-y-2 transition-opacity duration-300 ease-out"
                  style={{
                    opacity: overlayOpacity,
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <div
                    className="input flex h-10 w-full items-center rounded-md border-2 border-[#073F9E] bg-white px-3 transition-all duration-300 ease-out"
                    style={{
                      transform: inputTransform,
                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <span className="feature-description text-animation">
                      {typedText}
                    </span>
                    <CursorIcon height={20} color="#073F9E" />
                  </div>
                  <div
                    className="suggestions relative flex h-[324px] w-full flex-col items-start justify-between overflow-hidden rounded-md border border-[#d1d9e4] bg-white transition-all duration-300 ease-out"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.08) 0px 8px 16px 0px",
                      transform: suggestionsTransform,
                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {/* Suggestions content */}
                    <div className="flex flex-col items-start justify-start self-stretch p-2">
                      <div className="items-center justify-start self-stretch px-2">
                        <div className="flex h-10 items-center justify-start">
                          <p className="feature-title text-left text-[#1B1B1B]">
                            Account verifications
                          </p>
                        </div>
                        <div className="pl-3">
                          <div className="flex h-10 items-center justify-start">
                            <p className="text-muted text-left">
                              From $0.20 + $200.00 / Monthly
                            </p>
                          </div>
                          <div className="flex h-10 items-center justify-start">
                            <p className="text-muted text-left">
                              From $0.19 / Monthly
                            </p>
                          </div>
                          <div className="flex h-10 items-center justify-start">
                            <p className="text-muted text-left">
                              From $0.18 / Monthly
                            </p>
                          </div>
                          <div className="flex h-10 items-center justify-start">
                            <p className="text-muted text-left">
                              From $0.17 / Monthly
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="items-center justify-start self-stretch px-2">
                        <div className="flex h-10 items-center justify-start">
                          <p className="feature-title text-left text-[#1B1B1B]">
                            Analytics Platform
                          </p>
                        </div>
                        <div className="pl-3">
                          <div className="flex h-10 items-center justify-start">
                            <p className="text-muted text-left">
                              $200.00 / Monthly
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`footer absolute bottom-0 flex h-14 w-full items-center justify-start gap-2 border-t border-[#e4e8ef] bg-[#fbfbfb] px-4 transition-transform duration-200 ${
                        showFooterClick ? "scale-95" : ""
                      }`}
                    >
                      <PlusIcon size={20} color="#073F9E" />
                      <p className="txt-blue text-left text-sm font-semibold">
                        Add '
                        <span className="text-animation">
                          {typedText || "API Product"}
                        </span>
                        ' as new product
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;