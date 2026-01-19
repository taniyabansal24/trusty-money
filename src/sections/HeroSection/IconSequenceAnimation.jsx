import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Billing from "../../components/svg/Billing";
import Treasury from "../../components/svg/Treasury";
import Tax from "../../components/svg/Tax";
import Dashboard from "../../components/svg/Dashboard";
import Logo from "../../components/svg/Logo";
import InvoiceDashboard from "./InvoiceDashboard";
import BillingInvoice from "./BillingInvoice";
import CapitalDashboard from "./CapitalDashboard";
import CountryTaxCard from "./CountryTaxCard";
import Virtual from "./Virtual";
import Ewallet from "./Ewallet";
import EwalletIcon from "../../components/svg/EwalletIcon";

// Store screen components separately
const SCREENS = [
  Virtual,
  BillingInvoice,     // 0
  InvoiceDashboard,   // 1
  CountryTaxCard,     // 2
  Ewallet,            // 3
  Virtual,            // 4
  Virtual,            // 5
  Virtual,            // 6
  Virtual,            // 7
];

const ICONS = [
  { id: 0, Icon: Billing, screenIndex: 1 },
  { id: 1, Icon: Treasury, screenIndex: 2 },
  { id: 2, Icon: Tax, screenIndex: 3 },
  { id: 3, Icon: EwalletIcon, screenIndex: 4 },

  { id: 4, Icon: Billing, screenIndex: 1 },
  { id: 5, Icon: Treasury, screenIndex: 2 },
  { id: 6, Icon: Tax, screenIndex: 3 },
  { id: 7, Icon: EwalletIcon, screenIndex: 4 },
];

const TOTAL_ICONS = ICONS.length;
const RADIUS = 150;
const INITIAL_DELAY = 3000; // 3 seconds delay before starting animations

export default function CircularShiftAnimation() {
  const iconsRef = useRef([]);
  const timerRef = useRef(null);
  const gradientRef = useRef(null);
  const screenContainerRef = useRef(null);
  const initializationRef = useRef(null);

  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [isAnimatingScreen, setIsAnimatingScreen] = useState(false);

  const currentPositionsRef = useRef(
    Array.from({ length: TOTAL_ICONS }, (_, i) => i)
  );
  const animationInProgressRef = useRef(false);

  // Get current screen component
  const CurrentScreen = SCREENS[currentScreenIndex];

  // Function to update screen with smooth transition
  const updateScreen = (screenIndex) => {
    if (isAnimatingScreen || screenIndex === currentScreenIndex) {
      return;
    }

    console.log(
      `Updating screen from ${currentScreenIndex} to index: ${screenIndex}`
    );
    setIsAnimatingScreen(true);

    // Fade out current screen
    gsap.to(screenContainerRef.current, {
      opacity: 0,
      scale: 0.98,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        // Update screen index
        setCurrentScreenIndex(screenIndex);

        // Fade in new screen
        gsap.to(screenContainerRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            setIsAnimatingScreen(false);
          },
        });
      },
    });
  };

  // Function to determine visual state based on angle
  const getVisualStateFromAngle = (angle) => {
    const facingLeftness = Math.cos(angle);

    // FRONT (highlight)
    if (facingLeftness < -0.85) {
      return { opacity: 1, blur: 0, scale: 1.1, isHighlighted: true };
    }

    // BACK (hidden)
    if (facingLeftness > -0.2) {
      return { opacity: 0.1, blur: 2, scale: 0.8, isHighlighted: false };
    }

    // MIDDLE
    return { opacity: 0.35, blur: 1, scale: 0.95, isHighlighted: false };
  };

  // Function to animate the gradient
  const animateGradient = () => {
    if (!gradientRef.current) return;

    gsap.set(gradientRef.current, {
      xPercent: -100,
      opacity: 0,
    });

    gsap.to(gradientRef.current, {
      opacity: 0.9,
      duration: 0.3,
      delay: 0.1,
    });

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    tl.to(gradientRef.current, {
      xPercent: 100,
      duration: 3,
    })
      .to(gradientRef.current, {
        xPercent: 100,
        duration: 1,
      })
      .to(
        {},
        {
          duration: 0.5,
        }
      );
  };

  // Function to perform a single animation cycle
  const animateShift = () => {
    if (animationInProgressRef.current) return;

    animationInProgressRef.current = true;

    // Update positions
    currentPositionsRef.current = currentPositionsRef.current.map(
      (pos) => (pos + 1) % TOTAL_ICONS
    );

    console.log("New positions:", currentPositionsRef.current);

    // Animate all icons and find highlighted one
    const animations = [];
    let highlightedScreenIndex = -1;

    currentPositionsRef.current.forEach((positionIndex, iconIndex) => {
      const icon = iconsRef.current[iconIndex];
      if (!icon) return;

      const angle = (positionIndex / TOTAL_ICONS) * Math.PI * 2 - Math.PI / 2;

      const nextPos = {
        x: Math.cos(angle) * RADIUS,
        y: Math.sin(angle) * RADIUS,
      };

      const { opacity, blur, scale, isHighlighted } =
        getVisualStateFromAngle(angle);

      // If this icon is highlighted, get its screen index
      if (isHighlighted) {
        const iconData = ICONS[iconIndex];
        highlightedScreenIndex = iconData.screenIndex;
        console.log(
          `Highlighted icon: ${iconData.Icon.name}, Screen index: ${highlightedScreenIndex}`
        );
      }

      const animation = gsap.to(icon, {
        x: nextPos.x,
        y: nextPos.y,
        opacity,
        scale,
        filter: `blur(${blur}px)`,
        duration: 1,
        ease: "power2.inOut",
      });

      animations.push(animation);
    });

    // Update screen if we found a highlighted icon
    if (
      highlightedScreenIndex !== -1 &&
      highlightedScreenIndex !== currentScreenIndex
    ) {
      console.log(`Changing screen to: ${highlightedScreenIndex}`);
      updateScreen(highlightedScreenIndex);
    }

    // Reset animation flag after all animations complete
    Promise.all(
      animations.map((anim) => {
        return new Promise((resolve) => {
          anim.eventCallback("onComplete", resolve);
        });
      })
    )
      .then(() => {
        animationInProgressRef.current = false;
      })
      .catch(() => {
        animationInProgressRef.current = false;
      });
  };

  // Function to start the animation timer
  const startAnimationTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Initial animation after a brief delay
    setTimeout(() => {
      animateShift();
    }, 100);

    // Set up interval for subsequent animations
    timerRef.current = setInterval(() => {
      animateShift();
    }, 4000);
  };

  // Set initial positions STATICALLY - no animation
  const setInitialPositions = () => {
    let initialHighlightedScreenIndex = -1;

    ICONS.forEach((iconData, iconIndex) => {
      const icon = iconsRef.current[iconIndex];
      if (!icon) return;

      const angle = (iconIndex / TOTAL_ICONS) * Math.PI * 2 - Math.PI / 2;
      const pos = {
        x: Math.cos(angle) * RADIUS,
        y: Math.sin(angle) * RADIUS,
      };

      const { opacity, blur, scale, isHighlighted } =
        getVisualStateFromAngle(angle);

      // Set initial position WITHOUT animation
      gsap.set(icon, {
        x: pos.x,
        y: pos.y,
        opacity,
        scale,
        filter: `blur(${blur}px)`,
        immediateRender: true,
      });

      // If this icon is highlighted initially, set the screen
      if (isHighlighted) {
        initialHighlightedScreenIndex = iconData.screenIndex;
        console.log(
          `Initial highlighted icon: ${iconData.Icon.name}, Screen: ${initialHighlightedScreenIndex}`
        );
      }
    });

    // Set initial screen if we found a highlighted icon
    if (initialHighlightedScreenIndex !== -1) {
      setCurrentScreenIndex(initialHighlightedScreenIndex);
    }
  };

  // Initialize everything on component mount
  useEffect(() => {
    // Set initial positions immediately (static/frozen state)
    setInitialPositions();

    // Set a timeout to START ANIMATIONS after delay
    initializationRef.current = setTimeout(() => {
      console.log("Starting animations after 3 second delay");
      
      // Start gradient animation
      animateGradient();
      
      // Start the main animation timer
      startAnimationTimer();
    }, INITIAL_DELAY);

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (initializationRef.current) {
        clearTimeout(initializationRef.current);
      }
      if (gradientRef.current) {
        gsap.killTweensOf(gradientRef.current);
      }
      iconsRef.current.forEach((icon) => {
        if (icon) gsap.killTweensOf(icon);
      });
    };
  }, []); // Empty dependency array - runs once on mount

  // Debug logging
  useEffect(() => {
    console.log("Current screen index:", currentScreenIndex);
  }, [currentScreenIndex]);

  return (
    <div className="relative w-full h-[500px]">
      {/* Left decorative elements (hidden for now) */}
      {false && (
        <>
          {/* LEFT — Sequence Logo */}
          <div className="absolute left-[20%] top-1/2 -translate-y-1/2">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center">
              <Logo />
            </div>
          </div>

          {/* ANIMATED DOTTED LINE */}
          <div
            style={{
              mask: "linear-gradient(to right, transparent 15%, black 50%, transparent 85%)",
            }}
            className="absolute left-[30%] right-[45%] top-1/2 -translate-y-1/2"
          >
            <svg
              width="100%"
              viewBox="0 0 220 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H218"
                stroke="black"
                strokeOpacity="0.3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="2 4"
              />
            </svg>

            <span
              ref={gradientRef}
              id="sync-gradient"
              className="absolute left-1/2 top-0 block h-full w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              style={{
                opacity: 0,
                boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                willChange: "transform, opacity",
              }}
            />

            <span className="absolute left-1/2 top-0 block h-[3px] w-[65%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 blur-[2px]" />
          </div>
        </>
      )}

      {/* SOFT ARC MASK — Image-1 style fade */}
      <div
        className="absolute left-[60%] top-1/2 z-30 h-[180%] w-[120%] -translate-y-1/2 pointer-events-none"
        style={{
          WebkitMaskImage: `
            linear-gradient(
              to bottom,
              transparent 0%,
              rgba(0,0,0,0.4) 35%,
              black 50%,
              rgba(0,0,0,0.4) 65%,
              transparent 100%
            )
          `,
          maskImage: `
            linear-gradient(
              to bottom,
              transparent 0%,
              rgba(0,0,0,0.4) 35%,
              black 50%,
              rgba(0,0,0,0.4) 65%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Middle — CIRCULAR SHIFT ANIMATION */}
      <div className="absolute -translate-y-1/2 left-[3%] top-[46%]">
        <div className="relative w-[300px] h-[400px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            {ICONS.map((iconData, index) => {
              const { id, Icon } = iconData;
              return (
                <div
                  key={id}
                  ref={(el) => (iconsRef.current[index] = el)}
                  className="absolute left-1/2 top-1/2 w-32 h-32 flex items-center justify-center"
                  style={{
                    transform: "translate(-50%, -50%)",
                    willChange: "transform, opacity, filter",
                  }}
                >
                  <Icon className="w-full h-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT — SCREEN DISPLAY */}
      <div className="w-[34rem] h-[37rem] relative bottom-[9%] right-[-24%]">
        {/* Main container with shadow */}
        <div className="absolute inset-0 bg-[#F6F9FC] rounded-[36px] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),inset_0px_-2px_6px_rgba(10,37,64,0.35)]"></div>

        {/* Dynamic Screen Container */}
        <div
          ref={screenContainerRef}
          className="absolute left-[1px] top-[1px] w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-[36px] overflow-hidden bg-white"
          style={{ opacity: 1 }}
        >
          <CurrentScreen />
        </div>
      </div>
    </div>
  );
}