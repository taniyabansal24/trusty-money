import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Container } from "../components/ui";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProblemSection = () => {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);

  // State to track if animation should start
  const [animationStarted, setAnimationStarted] = useState(false);
  // State to track visible sidebars - now controls ALL sidebars
  const [visibleSidebars, setVisibleSidebars] = useState([
    false,
    false,
    false,
    false,
  ]);

  // Refs for screens and cards
  const screensRef = useRef([]);
  const screen2CardsRef = useRef([]);
  const screen3CardsRef = useRef([]);
  const screen4CardsRef = useRef([]);
  const screen5CardsRef = useRef([]);
  const screen6CardsRef = useRef([]);

  // Refs for initial animation
  const globeRef = useRef(null);
  const ringsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dotsRef = useRef([]);
  const dollarRefs = useRef([]);

  // Refs for sidebar elements
  const sidebarRefs = useRef([]);
  const sidebarCardsRef = useRef([]);
  const sidebarLinesRef = useRef([]);

  // Initialize refs after component mounts
  useEffect(() => {
    // Set initial state for all screens - START WITH WHITE SCREEN
    const allScreens = screensRef.current.filter(Boolean);

    // Hide all screens initially
    gsap.set(allScreens, {
      opacity: 0,
      pointerEvents: "none",
    });

    // Set first screen to white (phone already on)
    gsap.set(screensRef.current[0], {
      backgroundColor: "#ffffff",
      opacity: 1, // Show white screen
      pointerEvents: "auto",
    });

    // Show first screen content immediately (no black to white transition)
    gsap.set(screensRef.current[0], {
      backgroundColor: "#EDF2FE",
    });

    // Show all first screen content immediately
    gsap.set(
      [
        globeRef.current,
        ...ringsRef.current,
        titleRef.current,
        subtitleRef.current,
        ...dotsRef.current,
        ...dollarRefs.current.filter(Boolean),
      ],
      {
        opacity: 1,
        scale: 1,
      }
    );

    // Initialize sidebars refs arrays
    sidebarLinesRef.current = [];
    sidebarCardsRef.current = [];
  }, []);

  // ========== ADD THIS SCROLL-TRIGGERED ANIMATION INSTEAD ==========
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hide phone initially for entrance animation
      gsap.set(phoneRef.current, {
        opacity: 0,
        scale: 0.85,
        y: 80,
        rotationX: 15,
      });

      // Create smooth entrance timeline with ScrollTrigger
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", // Start when 15% of section is visible
          end: "top 20%",
          once: true, // Only run once
          onEnter: () => {
            setAnimationStarted(true);
            // Delay the full animation sequence slightly
            setTimeout(() => {
              startFullAnimationSequence();
            }, 800);
          },
          onEnterBack: () => {
            // Optional: if you want it to animate again when scrolling back up
            // setAnimationStarted(true);
          },
          markers: false, // Set to true for debugging
        },
      });

      // ===== PHONE ENTRANCE ANIMATION =====
      entranceTl
        // Phone floats in from bottom
        .fromTo(
          phoneRef.current,
          {
            opacity: 0,
            scale: 0.85,
            y: 80,
            rotationX: 15,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: "power3.out",
          }
        )
        // Animate phone shadow simultaneously
        .fromTo(
          phoneRef.current.querySelector(".phone-shadow"),
          {
            opacity: 0,
            scale: 0.8,
            y: -20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "<" // Start at same time as phone animation
        );

      // Cleanup function
      return () => ctx.revert();
    });

    // Cleanup ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array - runs once on mount

  // Main animation sequence
  const startFullAnimationSequence = () => {
    const ctx = gsap.context(() => {
      // ========== STEP 1: CONTINUOUS PHONE FLOAT (NO ENTRANCE) ==========
      gsap.to(phoneRef.current, {
        y: "+=10",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5, // wait after scroll-trigger entrance
      });

      // ========== STEP 2: ANIMATE FIRST SCREEN ELEMENTS ==========
      const firstScreenTl = gsap.timeline({ delay: 0.5 });

      // Rings animation
      ringsRef.current.forEach((ring, index) => {
        gsap.fromTo(
          ring,
          {
            scale: 0.3,
            opacity: 0,
            rotation: index === 0 ? 30 : index === 1 ? 20 : 10,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 14,
            duration: 0.8,
            ease: "back.out(1.4)",
            delay: index * 0.15,
          }
        );
      });

      // Globe animation
      gsap.fromTo(
        globeRef.current,
        { scale: 0, opacity: 0, rotationY: 180 },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 0.7,
          ease: "back.out(1.6)",
          delay: 0.3,
        }
      );

      // Title & subtitle
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.5 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.65 }
      );

      // Dots animation
      dotsRef.current.forEach((dot, index) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 0.6,
            duration: 0.3,
            delay: 1 + index * 0.1,
          }
        );
      });

      // Dollar icons
      dollarRefs.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, delay: 1.2 + i * 0.2 }
        );

        gsap.to(el, {
          y: "+=8",
          duration: 2.2 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.7 + i * 0.25,
        });
      });

      // Dots pulse loop
      const dots = dotsRef.current.filter(Boolean);
      if (dots.length > 0) {
        const pulseTl = gsap.timeline({ repeat: -1, delay: 2.5 });

        dots.forEach((dot) => {
          pulseTl
            .to(dot, { scale: 1.5, opacity: 1, duration: 0.4 })
            .to(dot, { scale: 1, opacity: 0.6, duration: 0.3 }, "-=0.2");
        });

        pulseTl.to({}, { duration: 0.5 });
      }

      // ========== STEP 3: START AUTOMATIC TRANSITIONS ==========
      const transitionTimeout = setTimeout(() => {
        startAutomaticTransitions();
      }, 4000);

      return () => {
        clearTimeout(transitionTimeout);
        ctx.revert();
      };
    });
  };

  // Automatic screen transitions with sidebar animations
  const startAutomaticTransitions = () => {
    const ctx = gsap.context(() => {
      // Start with all sidebars hidden
      setVisibleSidebars([false, false, false, false]);

      // Hide all other screens initially
      const otherScreens = screensRef.current.slice(1).filter(Boolean);
      gsap.set(otherScreens, {
        opacity: 0,
        pointerEvents: "none",
      });

      // ========== MASTER TRANSITION TIMELINE ==========
      const masterTl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      // ========== FLASHLESS SIDEBAR ANIMATION ==========

      // Helper function for flawless sidebar animation
      const animateSidebar = (lineIndex, cardIndex, isLeftSide = false) => {
        if (
          !sidebarLinesRef.current[lineIndex] ||
          !sidebarCardsRef.current[cardIndex]
        )
          return;

        const line = sidebarLinesRef.current[lineIndex];
        const card = sidebarCardsRef.current[cardIndex];

        // CRITICAL: Set initial states BEFORE showing the element
        gsap.set(line, {
          scaleX: 0,
          transformOrigin: isLeftSide ? "right center" : "left center",
          opacity: 1,
        });

        // CRITICAL: Set card to invisible and scaled down BEFORE animation
        gsap.set(card, {
          opacity: 0,
          scale: 0.8,
          x: isLeftSide ? -20 : 20,
          y: 10,
        });

        // Create a timeline for this sidebar
        const sidebarTl = gsap.timeline();

        // 1. Draw the line from phone to card position (0.9s)
        sidebarTl.to(
          line,
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          0
        );

        // 2. At 70% of line animation (0.63s), start card animation
        sidebarTl.to(
          card,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          0.63
        );

        // 3. Add subtle glow effect after card appears
        sidebarTl.to(
          card,
          {
            boxShadow: "0 20px 40px rgba(11, 67, 160, 0.15)",
            duration: 0.4,
            ease: "power2.out",
          },
          0.9
        );

        return sidebarTl;
      };

      // Screen 1 → Screen 2 (Payments) - SHOW SIDEBAR 1 (RIGHT SIDE)
      masterTl
        .to(screensRef.current[0], {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.6,
          ease: "power2.inOut",
        })
        .to(
          screensRef.current[1],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<"
        )
        .call(() => {
          // Show sidebar 1 BUT keep it invisible initially
          setVisibleSidebars([true, false, false, false]);
        })
        .to({}, { duration: 0.001 }) // Minimal delay for DOM to update
        .call(() => {
          // CRITICAL: Set the card to invisible immediately after React renders it
          if (sidebarCardsRef.current[0]) {
            gsap.set(sidebarCardsRef.current[0], {
              opacity: 0,
              scale: 0.8,
              x: 20,
              y: 10,
              immediateRender: true, // Force immediate render
            });
          }

          // Start animation AFTER the element is properly initialized
          setTimeout(() => {
            animateSidebar(0, 0, false);
          }, 10);
        })
        .from(
          screen2CardsRef.current.filter(Boolean),
          {
            x: -50,
            opacity: 0,
            scale: 0.95,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          },
          "<"
        )
        .to({}, { duration: 2.8 });

      // Screen 2 → Screen 3 (Reconciliation) - KEEP SIDEBAR 1, ADD SIDEBAR 2 (LEFT SIDE)
      masterTl
        .to(screensRef.current[1], {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.6,
          ease: "power2.inOut",
        })
        .to(
          screensRef.current[2],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<"
        )
        .call(() => {
          setVisibleSidebars([true, true, false, false]);
        })
        .to({}, { duration: 0.001 })
        .call(() => {
          // CRITICAL: Set the card to invisible immediately
          if (sidebarCardsRef.current[1]) {
            gsap.set(sidebarCardsRef.current[1], {
              opacity: 0,
              scale: 0.8,
              x: -20,
              y: 10,
              immediateRender: true,
            });
          }

          setTimeout(() => {
            animateSidebar(1, 1, true);
          }, 10);
        })
        .from(
          screen3CardsRef.current.filter(Boolean),
          {
            x: 50,
            opacity: 0,
            scale: 0.95,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
          },
          "<"
        )
        .to({}, { duration: 2.8 });

      // Screen 3 → Screen 4 (Invoicing) - KEEP SIDEBARS 1 & 2, ADD SIDEBAR 3 (RIGHT SIDE)
      masterTl
        .to(screensRef.current[2], {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.6,
          ease: "power2.inOut",
        })
        .to(
          screensRef.current[3],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<"
        )
        .call(() => {
          setVisibleSidebars([true, true, true, false]);
        })
        .to({}, { duration: 0.001 })
        .call(() => {
          // CRITICAL: Set the card to invisible immediately
          if (sidebarCardsRef.current[2]) {
            gsap.set(sidebarCardsRef.current[2], {
              opacity: 0,
              scale: 0.8,
              x: 20,
              y: 10,
              immediateRender: true,
            });
          }

          setTimeout(() => {
            animateSidebar(2, 2, false);
          }, 10);
        })
        .from(
          screen4CardsRef.current.filter(Boolean),
          {
            x: -40,
            opacity: 0,
            y: 15,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
          },
          "<"
        )
        .to({}, { duration: 2.8 });

      // Screen 4 → Screen 5 (Compliance) - KEEP SIDEBARS 1,2,3, ADD SIDEBAR 4 (LEFT SIDE)
      masterTl
        .to(screensRef.current[3], {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.6,
          ease: "power2.inOut",
        })
        .to(
          screensRef.current[4],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<"
        )
        .call(() => {
          setVisibleSidebars([true, true, true, true]);
        })
        .to({}, { duration: 0.001 })
        .call(() => {
          // CRITICAL: Set the card to invisible immediately
          if (sidebarCardsRef.current[3]) {
            gsap.set(sidebarCardsRef.current[3], {
              opacity: 0,
              scale: 0.8,
              x: -20,
              y: 10,
              immediateRender: true,
            });
          }

          setTimeout(() => {
            animateSidebar(3, 3, true);
          }, 10);
        })
        .from(
          screen5CardsRef.current.filter(Boolean),
          {
            x: 40,
            opacity: 0,
            rotationY: 10,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
          },
          "<"
        )
        .to({}, { duration: 3.8 });

      // ========== ENHANCED SIDEBAR FADE OUT ANIMATION ==========
      masterTl
        .to({}, { duration: 0.1 })
        .call(() => {
          const fadeOutTl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
          });

          // First, shrink lines back to phone
          sidebarLinesRef.current.forEach((line, index) => {
            if (line) {
              fadeOutTl.to(
                line,
                {
                  scaleX: 0,
                  opacity: 0,
                  duration: 0.5,
                  ease: "power2.in",
                },
                index * 0.08
              );
            }
          });

          // Then fade out cards
          sidebarCardsRef.current.forEach((card, index) => {
            if (card) {
              fadeOutTl.to(
                card,
                {
                  opacity: 0,
                  scale: 0.9,
                  x: index % 2 === 0 ? 15 : -15,
                  y: 15,
                  duration: 0.5,
                  ease: "power2.in",
                },
                index * 0.08 + 0.1
              );
            }
          });

          // Hide sidebars after animation completes
          fadeOutTl.call(
            () => {
              setVisibleSidebars([false, false, false, false]);
            },
            null,
            "+=0.2"
          );
        })
        .to(
          screensRef.current[4],
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.6,
            ease: "power2.in",
          },
          "<"
        )
        .to(
          screensRef.current[5],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.6,
            ease: "power2.out",
          },
          "<"
        )
        .from(
          screen6CardsRef.current.filter(Boolean),
          {
            y: 40,
            opacity: 0,
            scale: 0.9,
            stagger: 0.2,
            duration: 0.7,
            ease: "back.out(1.2)",
          },
          "<+=0.3"
        )
        .to({}, { duration: 4 });

      // ========== LOOP BACK TO BEGINNING ==========
      // ========== SEAMLESS LOOP (NO BLACK FRAME) ==========
      masterTl
        .to(
          screensRef.current[0],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<" // 👈 overlap with screen 6 still visible
        )
        .to(
          screensRef.current[5],
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<"
        )
        .set(screensRef.current.slice(1), {
          opacity: 0,
          pointerEvents: "none",
        })
        .call(() => {
          masterTl.restart();
        });

      return () => ctx.revert();
    });
  };

  // Reset to initial state (white screen with content)
  const resetToInitialState = () => {
    // Hide all sidebars
    setVisibleSidebars([false, false, false, false]);

    // Hide all screens except first one
    const allScreens = screensRef.current.filter(Boolean);
    gsap.set(allScreens, {
      opacity: 0,
      pointerEvents: "none",
    });

    // Show first screen with content
    gsap.set(screensRef.current[0], {
      backgroundColor: "#EDF2FE",
      opacity: 1,
      pointerEvents: "auto",
    });

    // Show all first screen content
    gsap.set(
      [
        globeRef.current,
        ...ringsRef.current,
        titleRef.current,
        subtitleRef.current,
        ...dotsRef.current,
        ...dollarRefs.current.filter(Boolean),
      ],
      {
        opacity: 1,
        scale: 1,
      }
    );
  };

  return (
    <>
      <div
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden isolate bg-white"
      >
        {/* Sidebar Components */}
        <div className="absolute inset-0 overflow-visible pointer-events-none z-40">
          {/* Sidebar 1 (for Screen 2: Payments) - RIGHT SIDE */}
          {visibleSidebars[0] && (
            <div
              className="absolute left-1/2 top-1/4 -translate-y-1/2 z-50"
              style={{ marginLeft: "175px" }}
            >
              <div className="relative">
                {/* Progress line from phone to card */}
                <div
                  ref={(el) => (sidebarLinesRef.current[0] = el)}
                  className="h-[2px] w-[200px] absolute left-0 top-[20%] -translate-y-1/2"
                  style={{
                    background:
                      "linear-gradient(90deg, #0B43A0 0%, rgba(11, 67, 160, 0.2) 100%)",
                    transformOrigin: "left center",
                  }}
                />

                {/* Sidebar card */}
                <div
                  ref={(el) => (sidebarCardsRef.current[0] = el)}
                  className="absolute left-[200px] top-[20%] -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 w-[280px] pointer-events-auto"
                  style={{
                    boxShadow: "0 20px 40px rgba(79, 122, 255, 0.15)",
                  }}
                >
                  <div className="text-[10px] font-semibold tracking-wider text-[#0B43A0] mb-3 uppercase">
                    Problem
                  </div>
                  <h3 className="text-[#0A2540] text-lg font-semibold mb-3 tracking-tight">
                    Expensive &amp; slow collections
                  </h3>
                  <p className="text-[#425466] text-sm leading-relaxed">
                    Cross-border payments are slow, expensive, and opaque.
                    Hidden FX margins and unpredictable settlement times drain
                    resources.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar 2 (for Screen 3: Reconciliation) - LEFT SIDE */}
          {visibleSidebars[1] && (
            <div
              className="absolute left-1/2 top-[35%] -translate-y-1/2 z-50"
              style={{ marginLeft: "-175px" }}
            >
              <div className="relative">
                {/* Progress line from phone to card (right to left) */}
                <div
                  ref={(el) => (sidebarLinesRef.current[1] = el)}
                  className="h-[2px] w-[200px] absolute right-0 top-1/2 -translate-y-1/2"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(11, 67, 160, 0.2) 0%, #0B43A0 100%)",
                    transformOrigin: "right center",
                  }}
                />

                {/* Sidebar card */}
                <div
                  ref={(el) => (sidebarCardsRef.current[1] = el)}
                  className="absolute right-[200px] top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 w-[280px] pointer-events-auto"
                  style={{
                    boxShadow: "0 20px 40px rgba(79, 122, 255, 0.15)",
                  }}
                >
                  <div className="text-[10px] font-semibold tracking-wider text-[#0B43A0] mb-3 uppercase">
                    Problem
                  </div>
                  <h3 className="text-[#0A2540] text-lg font-semibold mb-3 tracking-tight">
                    Fragmented reconciliation
                  </h3>
                  <p className="text-[#425466] text-sm leading-relaxed">
                    Data scattered across banks, gateways, and ERPs creates
                    reconciliation nightmares and operational inefficiency.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar 3 (for Screen 4: Invoicing) - RIGHT SIDE */}
          {visibleSidebars[2] && (
            <div
              className="absolute left-1/2 top-[65%] -translate-y-1/2 z-50"
              style={{ marginLeft: "175px" }}
            >
              <div className="relative">
                {/* Progress line from phone to card */}
                <div
                  ref={(el) => (sidebarLinesRef.current[2] = el)}
                  className="h-[2px] w-[200px] absolute left-0 top-1/2 -translate-y-1/2"
                  style={{
                    background:
                      "linear-gradient(90deg, #0B43A0 0%, rgba(11, 67, 160, 0.2) 100%)",
                    transformOrigin: "left center",
                  }}
                />

                {/* Sidebar card */}
                <div
                  ref={(el) => (sidebarCardsRef.current[2] = el)}
                  className="absolute left-[200px] top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 w-[280px] pointer-events-auto"
                  style={{
                    boxShadow: "0 20px 40px rgba(79, 122, 255, 0.15)",
                  }}
                >
                  <div className="text-[10px] font-semibold tracking-wider text-[#0B43A0] mb-3 uppercase">
                    Problem
                  </div>
                  <h3 className="text-[#0A2540] text-lg font-semibold mb-3 tracking-tight">
                    Manual invoicing
                  </h3>
                  <p className="text-[#425466] text-sm leading-relaxed">
                    Invoicing is inconsistent across countries, with different
                    formats, currencies, and tax requirements slowing
                    operations.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar 4 (for Screen 5: Compliance) - LEFT SIDE */}
          {visibleSidebars[3] && (
            <div
              className="absolute left-1/2 top-3/4 -translate-y-1/2 z-50"
              style={{ marginLeft: "-175px" }}
            >
              <div className="relative">
                {/* Progress line from phone to card (right to left) */}
                <div
                  ref={(el) => (sidebarLinesRef.current[3] = el)}
                  className="h-[2px] w-[200px] absolute right-0 top-1/2 -translate-y-1/2"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(11, 67, 160, 0.2) 0%, #0B43A0 100%)",
                    transformOrigin: "right center",
                  }}
                />

                {/* Sidebar card */}
                <div
                  ref={(el) => (sidebarCardsRef.current[3] = el)}
                  className="absolute right-[200px] top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 w-[280px] pointer-events-auto"
                  style={{
                    boxShadow: "0 20px 40px rgba(79, 122, 255, 0.15)",
                  }}
                >
                  <div className="text-[10px] font-semibold tracking-wider text-[#0B43A0] mb-3 uppercase">
                    Problem
                  </div>
                  <h3 className="text-[#0A2540] text-lg font-semibold mb-3 tracking-tight">
                    Fragmented compliance
                  </h3>
                  <p className="text-[#425466] text-sm leading-relaxed">
                    Compliance requirements constantly change by geography and
                    transaction type, creating ongoing operational burden.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main container */}
        <Container className="relative z-0">
          <div className="h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
            {/* Phone mockup */}
            <div
              ref={phoneRef}
              className="relative w-[343px] h-[680px] z-20 transform-gpu"
            >
              {/* Glow effect */}
              <div className="absolute inset-[-40px] bg-gradient-to-br from-blue-400/10 via-transparent to-orange-400/10 blur-3xl rounded-[70px]" />

              {/* Drop shadow for depth */}
              <div className="phone-shadow absolute -bottom-6 left-1/2 -translate-x-1/2 w-[320px] h-12 bg-gradient-to-t from-black/40 via-transparent to-transparent blur-xl rounded-full" />

              {/* Outer phone frame with enhanced 3D shadows */}
              <div className="relative w-full h-full bg-black rounded-[37px] border-[2px] border-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.1)_inset,0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
                {/* Screen notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20 shadow-sm" />

                {/* Screens Container */}
                <div className="absolute inset-[2px] rounded-[34px] overflow-hidden">
                  {/* All screens */}
                  {/* Screen 1: Cross-Border Operations - STARTS VISIBLE */}
                  <div
                    ref={(el) => (screensRef.current[0] = el)}
                    className="absolute inset-0 bg-white rounded-[34px] overflow-hidden"
                    style={{ opacity: 1 }}
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center px-8 text-center">
                      <div className="relative flex items-center justify-center h-[180px] w-full">
                        <div className="relative">
                          {/* Rings */}
                          <div
                            className="w-28 h-28 relative"
                            style={{ transform: "rotate(14deg)" }}
                          >
                            <div
                              ref={(el) => (ringsRef.current[0] = el)}
                              className="absolute inset-0 border-2 border-[#0B43A0]/20 rounded-full"
                            />
                            <div
                              ref={(el) => (ringsRef.current[1] = el)}
                              className="absolute inset-2 border-2 border-[#0B43A0]/30 rounded-full"
                            />
                            <div
                              ref={(el) => (ringsRef.current[2] = el)}
                              className="absolute inset-4 border-2 border-[#0B43A0]/40 rounded-full"
                            />
                          </div>

                          {/* Center globe */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              ref={globeRef}
                              className="w-16 h-16 bg-gradient-to-br from-[#0B43A0] to-[#073f9e] rounded-2xl flex items-center justify-center shadow-lg"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-9 h-9 text-white"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                <path d="M2 12h20" />
                              </svg>
                            </div>
                          </div>

                          {/* Floating dollar icons */}
                          {[0, 1, 2].map((_, i) => (
                            <div
                              key={i}
                              ref={(el) => (dollarRefs.current[i] = el)}
                              className="absolute top-3/4 left-3/4 -translate-x-1/2 -translate-y-1/2"
                              style={{ zIndex: 10 - i }}
                            >
                              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-5 h-5 text-[#0B43A0]"
                                >
                                  <line x1="12" x2="12" y1="2" y2="22" />
                                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4">
                        <h1
                          ref={titleRef}
                          className="text-[#0A2540] text-xl font-semibold tracking-tight mb-2"
                        >
                          Cross-Border Operations
                        </h1>
                        <p ref={subtitleRef} className="text-[#425466] text-sm">
                          More than just transactions
                        </p>
                      </div>

                      <div className="flex gap-2 mt-10">
                        <span
                          ref={(el) => (dotsRef.current[0] = el)}
                          className="w-1.5 h-1.5 bg-[#0B43A0] rounded-full opacity-60"
                        />
                        <span
                          ref={(el) => (dotsRef.current[1] = el)}
                          className="w-1.5 h-1.5 bg-[#0B43A0] rounded-full opacity-60"
                        />
                        <span
                          ref={(el) => (dotsRef.current[2] = el)}
                          className="w-1.5 h-1.5 bg-[#0B43A0] rounded-full opacity-60"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Screen 2: Payments */}
                  <div
                    ref={(el) => (screensRef.current[1] = el)}
                    className="absolute inset-0 bg-white rounded-[34px] overflow-hidden"
                  >
                    <div className="w-full h-full bg-white flex flex-col px-5 py-8">
                      {/* ===== HEADER ===== */}
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <p className="text-xs tracking-wide uppercase text-[#425466]">
                            Payments
                          </p>
                          <h3 className="text-[#0A2540] text-lg tracking-tight leading-snug">
                            Expensive, slow & <br /> opaque
                          </h3>
                        </div>

                        <div className="w-9 h-9 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-[#3b82f6]"
                          >
                            <path d="M16 17h6v-6" />
                            <path d="m22 17-8.5-8.5-5 5L2 7" />
                          </svg>
                        </div>
                      </div>

                      {/* ===== CONTENT ===== */}
                      <div className="flex-1 space-y-3">
                        {/* ===== CARD 1 : PAYMENT CYCLES ===== */}
                        <div
                          ref={(el) => (screen2CardsRef.current[0] = el)}
                          className="bg-gradient-to-br from-[#f0f7ff] to-[#e6f0ff] rounded-xl p-4 border border-blue-100"
                          style={{
                            background:
                              "linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%)",
                            borderColor: "#dbeafe",
                          }}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 text-white"
                              >
                                <path d="M12 6v6l4 2" />
                                <circle cx="12" cy="12" r="10" />
                              </svg>
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

                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span className="text-[#425466]">
                                🇮🇳 India clients
                              </span>
                              <span className="text-sm text-[#0A2540]">45–60 days</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#425466]">
                                🇦🇪 UAE clients
                              </span>
                              <span className="text-sm text-[#0A2540]">30–90 days</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#425466]">
                                🇬🇧 UK clients
                              </span>
                              <span className="text-sm text-[#0A2540]">30–45 days</span>
                            </div>
                          </div>
                        </div>

                        {/* ===== CARD 2 : FX MARGINS ===== */}
                        <div
                          ref={(el) => (screen2CardsRef.current[1] = el)}
                          className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-xl p-4 border border-blue-100"
                          style={{
                            background:
                              "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
                            borderColor: "#dbeafe",
                          }}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-[#073f9e] rounded-lg flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 text-white"
                              >
                                <line x1="12" x2="12" y1="2" y2="22" />
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                              </svg>
                            </div>

                            <div className="flex-1">
                              <p className="text-sm text-[#0A2540] mb-1">
                                Hidden FX margins
                              </p>
                              <p className="text-xs text-[#425466]">
                                Banks add 2–4% on exchange rates
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-white/80 rounded-lg p-2.5">
                              <p className="text-[10px] text-[#425466] mb-1">
                                FX markup
                              </p>
                              <p className="text-sm text-[#0A2540]">2.5%</p>
                            </div>
                            <div className="bg-white/80 rounded-lg p-2.5">
                              <p className="text-[10px] text-[#425466] mb-1">
                                Transfer fees
                              </p>
                              <p className="text-sm text-[#0A2540]">$35–75</p>
                            </div>
                          </div>
                        </div>

                        {/* ===== CARD 3 : SLOW SETTLEMENTS ===== */}
                        <div
                          ref={(el) => (screen2CardsRef.current[2] = el)}
                          className="bg-gradient-to-br from-white to-[#f8fafc] rounded-xl p-4 shadow-sm border border-gray-200"
                          style={{
                            background:
                              "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                            borderColor: "#e5e7eb",
                          }}
                        >
                          <div className="mb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 text-[#3b82f6]"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" x2="12" y1="8" y2="12" />
                                <line x1="12" x2="12.01" y1="16" y2="16" />
                              </svg>
                              <span className="text-sm text-[#0A2540]">
                                Slow settlements
                              </span>
                            </div>

                            <p className="text-xs text-[#425466]">
                              Tracking becomes difficult across borders
                            </p>
                          </div>

                          <div className="flex justify-between pt-3 border-t border-gray-200">
                            <span className="text-xs text-[#425466]">
                              Avg settlement time
                            </span>
                            <span className="text-sm text-[#0A2540]">
                              5–7 days
                            </span>
                          </div>
                        </div>

                        {/* ===== CTA ===== */}
                        <div className="bg-[#0A2540] text-white px-6 py-3 rounded-xl text-sm text-center shadow-lg mt-4">
                          Expensive &amp; slow collections
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Screen 3: Reconciliation */}
                  <div
                    ref={(el) => (screensRef.current[2] = el)}
                    className="absolute inset-0 bg-white rounded-[34px] overflow-hidden"
                  >
                    <div className="w-full h-full bg-white flex flex-col px-5 py-8">
                      {/* HEADER */}
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-xs text-[#425466] tracking-wide uppercase">
                            Reconciliation
                          </div>
                          <h3 className="text-[#0A2540] text-lg tracking-tight leading-snug">
                            Fragmented systems
                          </h3>
                        </div>

                        <div className="w-9 h-9 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-[#3b82f6]"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" x2="12" y1="8" y2="12" />
                            <line x1="12" x2="12.01" y1="16" y2="16" />
                          </svg>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="flex-1 space-y-3">
                        {/* CARD 1 */}
                        <div
                          ref={(el) => (screen3CardsRef.current[0] = el)}
                          className="bg-gradient-to-br from-[#f0f7ff] to-[#e6f0ff] rounded-xl p-4 border border-[#dbeafe]"
                          style={{
                            background:
                              "linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%)",
                            borderColor: "#dbeafe",
                          }}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 text-white"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="m15 9-6 6" />
                                <path d="m9 9 6 6" />
                              </svg>
                            </div>

                            <div className="flex-1">
                              <div className="text-sm text-[#0A2540] mb-1">
                                Data across multiple systems
                              </div>
                              <div className="text-xs text-[#425466]">
                                Banks, gateways &amp; ERPs don't talk to each
                                other
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="bg-white/80 rounded-md p-2 text-sm text-[#0A2540]">
                              🏦 3 different banks
                            </div>
                            <div className="bg-white/80 rounded-md p-2 text-sm text-[#0A2540]">
                              💳 5 payment gateways
                            </div>
                            <div className="bg-white/80 rounded-md p-2 text-sm text-[#0A2540]">
                              📊 2 ERP systems
                            </div>
                          </div>
                        </div>

                        {/* CARD 2 */}
                        <div
                          ref={(el) => (screen3CardsRef.current[1] = el)}
                          className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-xl p-4 border border-[#dbeafe]"
                          style={{
                            background:
                              "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
                            borderColor: "#dbeafe",
                          }}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-[#073f9e] rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 text-white"
                              >
                                <path d="M12 6v6l4 2" />
                                <circle cx="12" cy="12" r="10" />
                              </svg>
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
                              <div className="text-sm text-[#0A2540]">
                                18–24h
                              </div>
                            </div>
                            <div className="bg-white/80 rounded-lg p-2.5">
                              <div className="text-[10px] text-[#425466] mb-1">
                                Error rate
                              </div>
                              <div className="text-sm text-[#0A2540]">
                                12–15%
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CARD 3 */}
                        <div
                          ref={(el) => (screen3CardsRef.current[2] = el)}
                          className="bg-gradient-to-br from-white to-[#f8fafc] rounded-xl p-4 shadow-sm border border-[#e5e7eb]"
                          style={{
                            background:
                              "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                            borderColor: "#e5e7eb",
                          }}
                        >
                          <div className="mb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 text-[#3b82f6]"
                              >
                                <path d="M16 17h6v-6" />
                                <path d="m22 17-8.5-8.5-5 5L2 7" />
                              </svg>
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
                              <span className="text-[#425466]">
                                Time to reconcile
                              </span>
                              <span className="text-sm text-[#0A2540]">3–5 days</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-[#425466]">
                                Discrepancies found
                              </span>
                              <span className="text-sm text-[#0A2540]">
                                47 this month
                              </span>
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

                  {/* Screen 4: Invoicing */}
                  <div
                    ref={(el) => (screensRef.current[3] = el)}
                    className="absolute inset-0 bg-white rounded-[34px] overflow-hidden"
                  >
                    <div className="relative w-full h-full bg-white rounded-[44px] overflow-hidden shadow-inner">
                      <div className="w-full h-full bg-white flex flex-col px-5 py-8">
                        {/* HEADER */}
                        <div className="flex items-center justify-between mb-5">
                          <div>
                            <div className="text-xs text-[#425466] tracking-wide uppercase">
                              Invoicing
                            </div>
                            <h3 className="text-[#0A2540] text-lg tracking-tight">
                              Manual processes
                            </h3>
                          </div>

                          <div className="w-9 h-9 bg-gradient-to-br from-[#e0efff] to-[#d0e7ff] rounded-xl flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 text-[#0B43A0]"
                            >
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                              <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                              <path d="M10 9H8" />
                              <path d="M16 13H8" />
                              <path d="M16 17H8" />
                            </svg>
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="flex-1 space-y-3">
                          {/* INVOICE CARD */}
                          <div
                            ref={(el) => (screen4CardsRef.current[0] = el)}
                            className="bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] rounded-xl p-4 shadow-sm border border-[#dbeafe]"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-[#e0efff] to-[#d0e7ff] rounded-lg flex items-center justify-center">
                                  <span className="text-sm">🏢</span>
                                </div>
                                <div>
                                  <div className="text-sm text-[#0A2540]">
                                    Acme Corp Ltd.
                                  </div>
                                  <div className="text-xs text-[#425466]">
                                    Invoice #INV-2024-1023
                                  </div>
                                </div>
                              </div>

                              <div className="px-2.5 py-1 bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] text-[#0B43A0] text-xs rounded-md border border-[#bfdbfe]">
                                Awaiting review
                              </div>
                            </div>

                            <div className="space-y-2 mb-3">
                              <div className="flex justify-between text-xs">
                                <span className="text-[#425466]">Amount</span>
                                <span className="text-sm text-[#0A2540]">
                                  $12,450.00
                                </span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-[#425466]">Due date</span>
                                <span className="text-sm text-[#0A2540]">
                                  Jan 10, 2025
                                </span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-[#425466]">Location</span>
                                <span className="text-sm text-[#0A2540]">
                                  Mumbai, India 🇮🇳
                                </span>
                              </div>
                            </div>

                            <div className="pt-3 border-t border-[#dbeafe]">
                              <div className="flex items-center gap-2 text-xs text-[#425466]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-3.5 h-3.5 text-[#0B43A0]"
                                >
                                  <path d="M12 6v6l4 2" />
                                  <circle cx="12" cy="12" r="10" />
                                </svg>
                                <span>Manual entry: 2.5 hours</span>
                              </div>
                            </div>
                          </div>

                          {/* TAX CONFLICT - Updated to use palette colors */}
                          <div
                            ref={(el) => (screen4CardsRef.current[1] = el)}
                            className="bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-xl p-4 border border-[#bfdbfe]"
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-[#0B43A0] to-[#073f9e] rounded-lg flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-4 h-4 text-white"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <line x1="12" x2="12" y1="8" y2="12" />
                                  <line x1="12" x2="12.01" y1="16" y2="16" />
                                </svg>
                              </div>

                              <div className="flex-1">
                                <div className="text-sm text-[#0A2540] mb-1">
                                  Cross-border tax conflict
                                </div>
                                <div className="text-xs text-[#425466]">
                                  GST/VAT rates require manual reconciliation
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                              {[
                                { label: "India", value: "18%" },
                                { label: "UAE", value: "5%" },
                                { label: "UK", value: "20%" },
                              ].map((item) => (
                                <div
                                  key={item.label}
                                  className="bg-gradient-to-br from-white to-[#f8fafc] rounded-lg p-2.5 text-center border border-[#e5e7eb]"
                                >
                                  <div className="text-[10px] text-[#425466] mb-1">
                                    {item.label}
                                  </div>
                                  <div className="text-sm text-[#0A2540]">
                                    {item.value}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* STATS */}
                          <div
                            ref={(el) => (screen4CardsRef.current[2] = el)}
                            className="bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] rounded-xl p-4 shadow-sm border border-[#dbeafe]"
                          >
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-gradient-to-br from-[#073f9e] to-[#0B43A0] rounded-full" />
                                  <span className="text-xs text-[#425466]">
                                    Pending invoices
                                  </span>
                                </div>
                                <span className="text-sm text-[#0A2540]">
                                  23
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-gradient-to-br from-[#0B43A0] to-[#073f9e] rounded-full" />
                                  <span className="text-xs text-[#425466]">
                                    Errors this week
                                  </span>
                                </div>
                                <span className="text-sm text-[#0A2540]">
                                  17
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-gradient-to-br from-[#3b82f6] to-[#0B43A0] rounded-full" />
                                  <span className="text-xs text-[#425466]">
                                    Hours spent/week
                                  </span>
                                </div>
                                <span className="text-sm text-[#0A2540]">
                                  42.5
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-[#0A2540] to-[#101111] text-white px-6 py-3 rounded-xl text-sm text-center shadow-lg mt-4">
                          Manual invoicing
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Screen 5: Compliance */}
                  <div
                    ref={(el) => (screensRef.current[4] = el)}
                    className="absolute inset-0 bg-white rounded-[34px] overflow-hidden"
                  >
                    <div className="w-full h-full bg-[#f8fafc] flex flex-col px-5 py-8">
                      {/* HEADER */}
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-xs text-[#425466] tracking-wide uppercase">
                            Compliance
                          </div>
                          <h3 className="text-[#0A2540] text-lg tracking-tight">
                            Regulation tracker
                          </h3>
                        </div>

                        <div className="w-9 h-9 bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-xl flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-[#0B43A0]"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" x2="12" y1="8" y2="12" />
                            <line x1="12" x2="12.01" y1="16" y2="16" />
                          </svg>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="flex-1 space-y-3">
                        {/* JURISDICTIONS */}
                        <div
                          ref={(el) => (screen5CardsRef.current[0] = el)}
                          className="bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] rounded-xl p-4 border border-[#dbeafe]"
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#0B43A0] to-[#073f9e] rounded-lg flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 text-white"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20" />
                                <path d="M2 12h20" />
                              </svg>
                            </div>

                            <div className="flex-1">
                              <div className="text-sm text-[#0A2540] mb-1">
                                12 jurisdictions, 12 tax systems
                              </div>
                              <div className="text-xs text-[#425466]">
                                Different GST/VAT requirements per country
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {[
                              ["IN", "18%"],
                              ["AE", "5%"],
                              ["GB", "20%"],
                              ["SG", "8%"],
                              ["AU", "10%"],
                              ["CA", "13%"],
                            ].map(([code, rate]) => (
                              <div
                                key={code}
                                className="bg-gradient-to-br from-white to-[#f8fafc] rounded-md px-2 py-1 text-xs flex items-center gap-1 border border-[#e5e7eb]"
                              >
                                <span className="text-[#425466]">{code}</span>
                                <span className="text-sm text-[#0A2540]">{rate}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* REGULATORY UPDATES */}
                        <div
                          ref={(el) => (screen5CardsRef.current[1] = el)}
                          className="bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] rounded-xl p-4 border border-[#dbeafe]"
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#0B43A0] to-[#073f9e] rounded-lg flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 text-white"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <path d="m15 9-6 6" />
                                  <path d="m9 9 6 6" />
                                </svg>
                            </div>

                            <div className="flex-1">
                              <div className="text-sm text-[#0A2540] mb-1">
                                Constant regulatory updates
                              </div>
                              <div className="text-xs text-[#425466]">
                                Avg 8 changes per month across markets
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {[
                              [
                                "UAE VAT amendments",
                                "Effective Jan 2025",
                                "bg-gradient-to-br from-[#073f9e] to-[#0B43A0]",
                              ],
                              [
                                "India GST rate revision",
                                "Effective Feb 2025",
                                "bg-gradient-to-br from-[#0B43A0] to-[#073f9e]",
                              ],
                              [
                                "UK Making Tax Digital update",
                                "Effective Mar 2025",
                                "bg-gradient-to-br from-[#0B43A0] to-[#073f9e]",
                              ],
                            ].map(([title, date, color], i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div
                                  className={`w-1.5 h-1.5 ${color} rounded-full mt-1.5`}
                                />
                                <div>
                                  <div className="text-xs text-[#0A2540]">
                                    {title}
                                  </div>
                                  <div className="text-[10px] text-[#425466]">
                                    {date}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* COVERAGE */}
                        <div
                          ref={(el) => (screen5CardsRef.current[2] = el)}
                          className="bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] rounded-xl p-4 border border-[#dbeafe]"
                        >
                          <div className="mb-3">
                            <div className="flex justify-between mb-2">
                              <span className="text-xs text-[#425466]">
                                Compliance coverage
                              </span>
                              <span className="text-sm text-[#0B43A0]">
                                68%
                              </span>
                            </div>

                            <div className="w-full h-2 bg-gradient-to-br from-[#e0efff] to-[#d0e7ff] rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#073f9e] to-[#0B43A0]"
                                style={{ width: "68%" }}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[#425466]">Covered: 8</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[#425466]">At risk: 4</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="bg-gradient-to-br from-[#0A2540] to-[#101111] text-white px-6 py-3 rounded-xl text-sm text-center shadow-lg mt-4">
                        Fragmented compliance
                      </div>
                    </div>
                  </div>

                  {/* Screen 6: Cash Flow */}
                  <div
                    ref={(el) => (screensRef.current[5] = el)}
                    className="absolute inset-0 bg-[#f0f7ff] rounded-[34px] overflow-hidden"
                  >
                    <div className="w-full h-full bg-white flex flex-col px-6 py-12">
                      {/* HEADER */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-xs text-[#425466]">
                            Cash Flow
                          </div>
                          <h3 className="text-[#0A2540] text-lg">
                            Financial overview
                          </h3>
                        </div>

                        <div className="w-8 h-8 bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-[#0B43A0]"
                          >
                            <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                            <path d="M18 17V9" />
                            <path d="M13 17V5" />
                            <path d="M8 17v-3" />
                          </svg>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="space-y-3 flex-1">
                        {/* OUTSTANDING */}
                        <div
                          ref={(el) => (screen6CardsRef.current[0] = el)}
                          className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl p-5 shadow-lg border-2 border-[#dbeafe] relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-full -mr-8 -mt-8" />
                          <div className="relative">
                            <div className="flex items-center gap-2 mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 text-[#0B43A0]"
                              >
                                <path d="M7 7h10v10" />
                                <path d="M7 17 17 7" />
                              </svg>
                              <span className="text-xs text-[#425466]">
                                Outstanding
                              </span>
                            </div>
                            <div className="text-xl text-[#0A2540] mb-1">
                              $1.2M
                            </div>
                            <div className="text-xs text-[#425466]">
                              Across 47 invoices
                            </div>
                          </div>
                        </div>

                        {/* AVG SETTLEMENT */}
                        <div
                          ref={(el) => (screen6CardsRef.current[1] = el)}
                          className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl p-5 shadow-lg border-2 border-[#dbeafe] relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-full -mr-8 -mt-8" />
                          <div className="relative">
                            <div className="flex items-center gap-2 mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 text-[#0B43A0]"
                              >
                                <path d="M12 6v6l4 2" />
                                <circle cx="12" cy="12" r="10" />
                              </svg>
                              <span className="text-xs text-[#425466]">
                                Avg settlement
                              </span>
                            </div>
                            <div className="text-xl text-[#0A2540] mb-1">
                              14 days
                            </div>
                            <div className="text-xs text-[#425466]">
                              Industry avg: 7 days
                            </div>
                          </div>
                        </div>

                        {/* BREAKDOWN */}
                        <div
                          ref={(el) => (screen6CardsRef.current[2] = el)}
                          className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl p-4 shadow-md border border-[#dbeafe]"
                        >
                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span className="text-[#425466]">Overdue</span>
                              <span className="text-sm text-[#0A2540]">$340K</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-[#425466]">
                                Due this week
                              </span>
                              <span className="text-sm text-[#0B43A0]">$520K</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-[#425466]">
                                Due next month
                              </span>
                              <span className="text-sm text-[#3b82f6]">$340K</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="bg-gradient-to-br from-[#0A2540] to-[#101111] text-white px-6 py-3 rounded-full text-sm text-center shadow-lg">
                        Poor cash-flow visibility
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProblemSection;