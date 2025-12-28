import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProblemSection = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const phoneRef = useRef(null);
  const progressBarRef = useRef(null);

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

  // Refs for sidebars
  const sidebarRefs = useRef([]);
  const sidebarCardsRef = useRef([]);
  const sidebarLinesRef = useRef([]);

  // Refs for background elements
  const backgroundRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  // Initial screen entry animation
  useEffect(() => {
    const animateInitialScreen = () => {
      // Reset elements
      gsap.set(
        [
          globeRef.current,
          ...ringsRef.current,
          titleRef.current,
          subtitleRef.current,
          ...dotsRef.current,
        ],
        {
          opacity: 0,
          y: 20,
        }
      );

      gsap.set(globeRef.current, { scale: 0 });
      gsap.set(ringsRef.current, { scale: 0.3 });

      // Set initial background
      gsap.set(backgroundRef.current, {
        backgroundColor: "#f8fafc", // Slate 50 equivalent
      });
      gsap.set([blob1Ref.current, blob2Ref.current, blob3Ref.current], {
        opacity: 0.3,
      });

      // Create timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate rings
      ringsRef.current.forEach((ring, index) => {
        tl.fromTo(
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
          },
          "-=0.3"
        );
      });

      // Animate globe
      tl.fromTo(
        globeRef.current,
        { scale: 0, opacity: 0, rotationY: 180 },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 0.7,
          ease: "back.out(1.6)",
        },
        "-=0.4"
      );

      // Animate title and subtitle
      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2"
      ).fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.15"
      );

      // Animate dots
      dotsRef.current.forEach((dot, index) => {
        tl.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 0.6, duration: 0.3, delay: index * 0.1 },
          index === 0 ? "-=0.1" : `-=${0.3 - index * 0.1}`
        );
      });

      // Animate dollar icons
      dollarRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, delay: 1 + i * 0.2 }
          );
          gsap.to(el, {
            y: `+=8`,
            duration: 2.2 + i * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5 + i * 0.25,
          });
        }
      });

      // Start dots pulsing animation after entrance
      const dots = dotsRef.current.filter(Boolean);
      if (dots.length > 0) {
        const pulseTl = gsap.timeline({ repeat: -1, delay: 2 });
        pulseTl
          .to(dots[0], { scale: 1.5, opacity: 1, duration: 0.4 })
          .to(dots[0], { scale: 1, opacity: 0.6, duration: 0.3 }, "-=0.2")
          .to(dots[1], { scale: 1.5, opacity: 1, duration: 0.4 }, "-=0.2")
          .to(dots[1], { scale: 1, opacity: 0.6, duration: 0.3 }, "-=0.2")
          .to(dots[2], { scale: 1.5, opacity: 1, duration: 0.4 }, "-=0.2")
          .to(dots[2], { scale: 1, opacity: 0.6, duration: 0.3 }, "-=0.2")
          .to({}, { duration: 0.5 });
      }

      return tl;
    };

    const animation = animateInitialScreen();
    return () => animation.kill();
  }, []);

  // Main scroll animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for all screens and sidebars
      const allScreens = screensRef.current.filter(Boolean);
      const allSidebars = sidebarRefs.current.filter(Boolean);

      gsap.set(allScreens, {
        opacity: 0,
        pointerEvents: "none",
      });

      gsap.set(allSidebars, {
        opacity: 0,
        y: 30,
        pointerEvents: "none",
      });

      gsap.set(sidebarCardsRef.current.filter(Boolean), {
        y: 40,
        opacity: 0,
      });

      gsap.set(sidebarLinesRef.current.filter(Boolean), {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(allScreens[0], {
        opacity: 1,
        pointerEvents: "auto",
      });

      // Phone entrance animation
      gsap.fromTo(
        phoneRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Progress bar animation
      gsap.to(progressBarRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Continuous floating animation for phone
      gsap.to(phoneRef.current, {
        y: "+=8",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      // ================= MASTER SCRUB TIMELINE =================
      // Create master timeline with scrub
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=500%",
          scrub: 1,
          pin: pinRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          markers: false,
        },
      });

      // Screen 1 to Screen 2 transition (Screen 2 = Payments)
      masterTl
        // Change background to red/orange theme
        .to(backgroundRef.current, {
          backgroundColor: "#fff5f5", // Red theme
          duration: 0.3,
        })
        .to(
          [blob1Ref.current, blob2Ref.current, blob3Ref.current],
          {
            opacity: 0.1,
            duration: 0.3,
          },
          "<"
        )
        // Fade out Screen 1
        .to(
          screensRef.current[0],
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.3,
          },
          "<"
        )
        // Fade in Screen 2
        .to(
          screensRef.current[1],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          },
          "<"
        )
        // Show Sidebar 1
        .to(
          sidebarRefs.current[0],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          },
          "<"
        )
        // Animate Sidebar 1 elements
        .fromTo(
          sidebarLinesRef.current[0],
          {
            scaleX: 0,
            transformOrigin: "right center",
          },
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "<+=0.1"
        )
        .fromTo(
          sidebarCardsRef.current[0],
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
          },
          "<"
        )
        // Animate Screen 2 cards
        .from(
          screen2CardsRef.current.filter(Boolean),
          {
            x: -100,
            opacity: 0,
            scale: 0.8,
            stagger: 0.2,
            duration: 0.6,
            ease: "back.out(1.4)",
          },
          "<+=0.1"
        );

      // Screen 2 to Screen 3 transition (Screen 3 = Reconciliation)
      masterTl
        // Change background to orange theme
        .to(backgroundRef.current, {
          backgroundColor: "#fff7ed", // Orange theme
          duration: 0.3,
        })
        .to(
          [blob1Ref.current, blob2Ref.current, blob3Ref.current],
          {
            opacity: 0.2,
            duration: 0.3,
          },
          "<"
        )
        // Fade out Screen 2 and Sidebar 1
        .to(
          screensRef.current[1],
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.3,
          },
          "<"
        )
        .to(
          sidebarRefs.current[0],
          {
            opacity: 0,
            pointerEvents: "none",
            y: 30,
            duration: 0.3,
          },
          "<"
        )
        // Fade in Screen 3 and Sidebar 2
        .to(
          screensRef.current[2],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          },
          "<"
        )
        .to(
          sidebarRefs.current[1],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          },
          "<"
        )
        // Animate Sidebar 2 elements
        .fromTo(
          sidebarLinesRef.current[1],
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "<+=0.1"
        )
        .fromTo(
          sidebarCardsRef.current[1],
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
          },
          "<"
        )
        // Animate Screen 3 cards
        .from(
          screen3CardsRef.current.filter(Boolean),
          {
            x: 100,
            opacity: 0,
            scale: 0.8,
            stagger: 0.15,
            duration: 0.5,
            ease: "power2.out",
          },
          "<+=0.1"
        );

      // Screen 3 to Screen 4 transition (Screen 4 = Invoicing)
      masterTl
        // Change background to blue theme
        .to(backgroundRef.current, {
          backgroundColor: "#eff6ff", // Blue theme
          duration: 0.3,
        })
        .to(
          [blob1Ref.current, blob2Ref.current, blob3Ref.current],
          {
            opacity: 0.25,
            duration: 0.3,
          },
          "<"
        )
        // Fade out Screen 3 and Sidebar 2
        .to(
          screensRef.current[2],
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.3,
          },
          "<"
        )
        .to(
          sidebarRefs.current[1],
          {
            opacity: 0,
            pointerEvents: "none",
            y: 30,
            duration: 0.3,
          },
          "<"
        )
        // Fade in Screen 4 and Sidebar 3
        .to(
          screensRef.current[3],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          },
          "<"
        )
        .to(
          sidebarRefs.current[2],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          },
          "<"
        )
        // Animate Sidebar 3 elements
        .fromTo(
          sidebarLinesRef.current[2],
          {
            scaleX: 0,
            transformOrigin: "right center",
          },
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "<+=0.1"
        )
        .fromTo(
          sidebarCardsRef.current[2],
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
          },
          "<"
        )
        // Animate Screen 4 cards
        .from(
          screen4CardsRef.current.filter(Boolean),
          {
            x: -100,
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out",
          },
          "<+=0.1"
        );

      // Screen 4 to Screen 5 transition (Screen 5 = Compliance)
      masterTl
        // Change background to yellow theme
        .to(backgroundRef.current, {
          backgroundColor: "#fefce8", // Yellow theme
          duration: 0.3,
        })
        .to(
          [blob1Ref.current, blob2Ref.current, blob3Ref.current],
          {
            opacity: 0.15,
            duration: 0.3,
          },
          "<"
        )
        // Fade out Screen 4 and Sidebar 3
        .to(
          screensRef.current[3],
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.3,
          },
          "<"
        )
        .to(
          sidebarRefs.current[2],
          {
            opacity: 0,
            pointerEvents: "none",
            y: 30,
            duration: 0.3,
          },
          "<"
        )
        // Fade in Screen 5 and Sidebar 4
        .to(
          screensRef.current[4],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          },
          "<"
        )
        .to(
          sidebarRefs.current[3],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          },
          "<"
        )
        // Animate Sidebar 4 elements
        .fromTo(
          sidebarLinesRef.current[3],
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "<+=0.1"
        )
        .fromTo(
          sidebarCardsRef.current[3],
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
          },
          "<"
        )
        // Animate Screen 5 cards
        .from(
          screen5CardsRef.current.filter(Boolean),
          {
            x: 100,
            opacity: 0,
            rotationY: 15,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out",
          },
          "<+=0.1"
        );

      // Screen 5 to Screen 6 transition (Screen 6 = Cash Flow)
      masterTl
        // Change background to purple theme
        .to(backgroundRef.current, {
          backgroundColor: "#faf5ff", // Purple theme
          duration: 0.3,
        })
        .to(
          [blob1Ref.current, blob2Ref.current, blob3Ref.current],
          {
            opacity: 0.35,
            duration: 0.3,
          },
          "<"
        )
        // Fade out Screen 5 and Sidebar 4
        .to(
          screensRef.current[4],
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.3,
          },
          "<"
        )
        .to(
          sidebarRefs.current[3],
          {
            opacity: 0,
            pointerEvents: "none",
            y: 30,
            duration: 0.3,
          },
          "<"
        )
        // Fade in Screen 6 (no sidebar for last screen)
        .to(
          screensRef.current[5],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.3,
          },
          "<"
        )
        // Animate Screen 6 cards
        .from(
          screen6CardsRef.current.filter(Boolean),
          {
            y: 50,
            opacity: 0,
            scale: 0.9,
            stagger: 0.2,
            duration: 0.5,
            ease: "back.out(1.2)",
          },
          "<+=0.1"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={sectionRef} className="relative min-h-[600vh] overflow-hidden">
        {/* Background Container */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 transition-colors duration-300"
          style={{ backgroundColor: "#f8fafc" }}
        >
          {/* Background Decorations */}
          <div className="absolute inset-0">
            <div
              ref={blob1Ref}
              className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
            />
            <div
              ref={blob2Ref}
              className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
            />
            <div
              ref={blob3Ref}
              className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
            />
          </div>
        </div>

        {/* Sidebar Components - placed outside the pinned container */}
        {/* Sidebar 1 (for Screen 2: Payments) */}
        <div
          ref={(el) => (sidebarRefs.current[0] = el)}
          className="fixed inset-0 z-10 pointer-events-none"
        >
          <div className="absolute left-0 top-[20%] z-0">
            <div
              ref={(el) => (sidebarLinesRef.current[0] = el)}
              className="h-[2px]"
              style={{
                width: "280px",
                marginLeft: "auto",
                marginRight: 0,
                backgroundImage:
                  "repeating-linear-gradient(to right, rgb(79, 122, 255) 0px, rgb(79, 122, 255) 8px, transparent 8px, transparent 16px)",
              }}
            />
          </div>

          <div className="absolute left-0 top-[20%] pr-[320px] z-20">
            <div
              ref={(el) => (sidebarCardsRef.current[0] = el)}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#e0e8ff] max-w-[280px]"
            >
              <div className="text-[10px] tracking-wider text-[#4f7aff] mb-3 uppercase">
                Problem
              </div>
              <h3 className="text-[#1a2b4f] mb-2 tracking-tight">
                Expensive &amp; slow collections
              </h3>
              <p className="text-[#6b7a99] text-sm leading-relaxed">
                Cross-border payments are slow, expensive, and opaque. Hidden FX
                margins and unpredictable settlement times drain resources.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar 2 (for Screen 3: Reconciliation) */}
        <div
          ref={(el) => (sidebarRefs.current[1] = el)}
          className="fixed inset-0 z-10 pointer-events-none"
        >
          <div className="absolute right-0 top-[20%] z-0">
            <div
              ref={(el) => (sidebarLinesRef.current[1] = el)}
              className="h-[2px]"
              style={{
                width: "280px",
                marginLeft: 0,
                marginRight: "auto",
                backgroundImage:
                  "repeating-linear-gradient(to right, rgb(79, 122, 255) 0px, rgb(79, 122, 255) 8px, transparent 8px, transparent 16px)",
              }}
            />
          </div>

          <div className="absolute right-0 top-[20%] pl-[320px] z-20">
            <div
              ref={(el) => (sidebarCardsRef.current[1] = el)}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#e0e8ff] max-w-[280px]"
            >
              <div className="text-[10px] tracking-wider text-[#4f7aff] mb-3 uppercase">
                Problem
              </div>
              <h3 className="text-[#1a2b4f] mb-2 tracking-tight">
                Fragmented reconciliation
              </h3>
              <p className="text-[#6b7a99] text-sm leading-relaxed">
                Data scattered across banks, gateways, and ERPs creates
                reconciliation nightmares and operational inefficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar 3 (for Screen 4: Invoicing) */}
        <div
          ref={(el) => (sidebarRefs.current[2] = el)}
          className="fixed inset-0 z-10 pointer-events-none"
        >
          <div className="absolute left-0 top-[60%] z-0">
            <div
              ref={(el) => (sidebarLinesRef.current[2] = el)}
              className="h-[2px]"
              style={{
                width: "280px",
                marginLeft: "auto",
                marginRight: 0,
                backgroundImage:
                  "repeating-linear-gradient(to right, rgb(79, 122, 255) 0px, rgb(79, 122, 255) 8px, transparent 8px, transparent 16px)",
              }}
            />
          </div>

          <div className="absolute left-0 top-[60%] pr-[320px] z-20">
            <div
              ref={(el) => (sidebarCardsRef.current[2] = el)}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#e0e8ff] max-w-[280px]"
            >
              <div className="text-[10px] tracking-wider text-[#4f7aff] mb-3 uppercase">
                Problem
              </div>
              <h3 className="text-[#1a2b4f] mb-2 tracking-tight">
                Manual invoicing
              </h3>
              <p className="text-[#6b7a99] text-sm leading-relaxed">
                Invoicing is inconsistent across countries, with different
                formats, currencies, and tax requirements slowing operations.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar 4 (for Screen 5: Compliance) */}
        <div
          ref={(el) => (sidebarRefs.current[3] = el)}
          className="fixed inset-0 z-10 pointer-events-none"
        >
          <div className="absolute right-0 top-[60%] z-0">
            <div
              ref={(el) => (sidebarLinesRef.current[3] = el)}
              className="h-[2px]"
              style={{
                width: "280px",
                marginLeft: 0,
                marginRight: "auto",
                backgroundImage:
                  "repeating-linear-gradient(to right, rgb(79, 122, 255) 0px, rgb(79, 122, 255) 8px, transparent 8px, transparent 16px)",
              }}
            />
          </div>

          <div className="absolute right-0 top-[60%] pl-[320px] z-20">
            <div
              ref={(el) => (sidebarCardsRef.current[3] = el)}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#e0e8ff] max-w-[280px]"
            >
              <div className="text-[10px] tracking-wider text-[#4f7aff] mb-3 uppercase">
                Problem
              </div>
              <h3 className="text-[#1a2b4f] mb-2 tracking-tight">
                Fragmented compliance
              </h3>
              <p className="text-[#6b7a99] text-sm leading-relaxed">
                Compliance requirements constantly change by geography and
                transaction type, creating ongoing operational burden.
              </p>
            </div>
          </div>
        </div>
        {/* Pinned container */}
        <div
          ref={pinRef}
          className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Progress bar */}
          <div
            ref={progressBarRef}
            className="absolute left-4 top-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"
          />

          {/* Phone mockup */}
          <div
            ref={phoneRef}
            className="relative w-[350px] h-[700px] z-20 transform-gpu"
          >
            {/* Glow effect */}
            <div className="absolute inset-[-40px] bg-gradient-to-br from-blue-400/10 via-transparent to-orange-400/10 blur-3xl rounded-[70px]" />

            {/* Drop shadow for depth */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[320px] h-12 bg-gradient-to-t from-black/40 via-transparent to-transparent blur-xl rounded-full" />

            {/* Outer phone frame with enhanced 3D shadows */}
            <div className="relative w-full h-full bg-black rounded-[37px] border-[2px] border-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.1)_inset,0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
              {/* Screen notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20 shadow-sm" />

              {/* Screens Container */}
              <div className="absolute inset-[2px] rounded-[34px] overflow-hidden">
                {/* Screen 1: Cross-Border Operations */}
                <div
                  ref={(el) => (screensRef.current[0] = el)}
                  className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-[34px] overflow-hidden"
                >
                  <div className="w-full h-full bg-[#EDF2FE] flex flex-col items-center justify-center px-8 text-center">
                    <div className="relative flex items-center justify-center h-[180px] w-full">
                      <div className="relative">
                        {/* Rings */}
                        <div
                          className="w-28 h-28 relative"
                          style={{ transform: "rotate(14deg)" }}
                        >
                          <div
                            ref={(el) => (ringsRef.current[0] = el)}
                            className="absolute inset-0 border-2 border-[#4f7aff]/20 rounded-full"
                          />
                          <div
                            ref={(el) => (ringsRef.current[1] = el)}
                            className="absolute inset-2 border-2 border-[#4f7aff]/30 rounded-full"
                          />
                          <div
                            ref={(el) => (ringsRef.current[2] = el)}
                            className="absolute inset-4 border-2 border-[#4f7aff]/40 rounded-full"
                          />
                        </div>

                        {/* Center globe */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            ref={globeRef}
                            className="w-16 h-16 bg-gradient-to-br from-[#4f7aff] to-[#2d4fd6] rounded-2xl flex items-center justify-center shadow-lg"
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
                                className="w-5 h-5 text-[#4f7aff]"
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
                        className="text-[#1a2b4f] text-2xl font-semibold tracking-tight mb-2"
                      >
                        Cross-Border Operations
                      </h1>
                      <p ref={subtitleRef} className="text-[#6b7a99] text-sm">
                        More than just transactions
                      </p>
                    </div>

                    <div className="flex gap-2 mt-10">
                      <span
                        ref={(el) => (dotsRef.current[0] = el)}
                        className="w-1.5 h-1.5 bg-[#4f7aff] rounded-full opacity-60"
                      />
                      <span
                        ref={(el) => (dotsRef.current[1] = el)}
                        className="w-1.5 h-1.5 bg-[#4f7aff] rounded-full opacity-60"
                      />
                      <span
                        ref={(el) => (dotsRef.current[2] = el)}
                        className="w-1.5 h-1.5 bg-[#4f7aff] rounded-full opacity-60"
                      />
                    </div>
                  </div>
                </div>

                {/* Screen 2: Payments */}
                {/* ================= SCREEN 2 : PAYMENTS ================= */}
                <div
                  ref={(el) => (screensRef.current[1] = el)}
                  className="absolute inset-0 bg-[#F4F7FF] rounded-[34px] overflow-hidden"
                >
                  <div className="w-full h-full bg-[#fafbfc] flex flex-col px-5 py-8">
                    {/* ===== HEADER ===== */}
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="text-xs tracking-wide uppercase text-[#6b7a99]">
                          Payments
                        </p>
                        <h3 className="text-[#1a2b4f] text-xl tracking-tight leading-snug">
                          Expensive, slow & <br /> opaque
                        </h3>
                      </div>

                      <div className="w-9 h-9 bg-[#ff6b6b]/10 rounded-xl flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 text-[#ff6b6b]"
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
                        className="bg-gradient-to-br from-[#fff5f5] to-[#ffeded] rounded-xl p-4 border border-[#ffd6d6]"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-[#ff6b6b] rounded-lg flex items-center justify-center">
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
                            <p className="text-sm text-[#d63031] mb-1">
                              Unpredictable payment cycles
                            </p>
                            <p className="text-xs text-[#ff6b6b]">
                              Overseas clients follow their own schedules
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-[#6b7a99]">
                              🇮🇳 India clients
                            </span>
                            <span className="text-[#1a2b4f]">45–60 days</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#6b7a99]">
                              🇦🇪 UAE clients
                            </span>
                            <span className="text-[#1a2b4f]">30–90 days</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#6b7a99]">
                              🇬🇧 UK clients
                            </span>
                            <span className="text-[#1a2b4f]">30–45 days</span>
                          </div>
                        </div>
                      </div>

                      {/* ===== CARD 2 : FX MARGINS ===== */}
                      <div
                        ref={(el) => (screen2CardsRef.current[1] = el)}
                        className="bg-gradient-to-br from-[#fffbf0] to-[#fff8e8] rounded-xl p-4 border border-[#ffe0a3]"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-[#ff9f43] rounded-lg flex items-center justify-center">
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
                            <p className="text-sm text-[#d68910] mb-1">
                              Hidden FX margins
                            </p>
                            <p className="text-xs text-[#ff9f43]">
                              Banks add 2–4% on exchange rates
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-white/70 rounded-lg p-2.5">
                            <p className="text-[10px] text-[#6b7a99] mb-1">
                              FX markup
                            </p>
                            <p className="text-sm text-[#1a2b4f]">2.5%</p>
                          </div>
                          <div className="bg-white/70 rounded-lg p-2.5">
                            <p className="text-[10px] text-[#6b7a99] mb-1">
                              Transfer fees
                            </p>
                            <p className="text-sm text-[#1a2b4f]">$35–75</p>
                          </div>
                        </div>
                      </div>

                      {/* ===== CARD 3 : SLOW SETTLEMENTS ===== */}
                      <div
                        ref={(el) => (screen2CardsRef.current[2] = el)}
                        className="bg-white rounded-xl p-4 shadow-sm border border-[#e8ecf2]"
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
                              className="w-4 h-4 text-[#ff6b6b]"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" x2="12" y1="8" y2="12" />
                              <line x1="12" x2="12.01" y1="16" y2="16" />
                            </svg>
                            <span className="text-sm text-[#1a2b4f]">
                              Slow settlements
                            </span>
                          </div>

                          <p className="text-xs text-[#6b7a99]">
                            Tracking becomes difficult across borders
                          </p>
                        </div>

                        <div className="flex justify-between pt-3 border-t border-[#f1f3f5]">
                          <span className="text-xs text-[#6b7a99]">
                            Avg settlement time
                          </span>
                          <span className="text-sm text-[#ff6b6b]">
                            5–7 days
                          </span>
                        </div>
                      </div>

                      {/* ===== CTA ===== */}
                      <div className="bg-[#1a2b4f] text-white px-6 py-3 rounded-xl text-sm text-center shadow-lg mt-4">
                        Expensive &amp; slow collections
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screen 3: Reconciliation */}
                <div
                  ref={(el) => (screensRef.current[2] = el)}
                  className="absolute inset-0 bg-[#F4F7FF] rounded-[34px] overflow-hidden"
                >
                  <div className="w-full h-full bg-[#fafbfc] flex flex-col px-5 py-8">
                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <div className="text-xs text-[#6b7a99] tracking-wide uppercase">
                          Reconciliation
                        </div>
                        <h3 className="text-[#1a2b4f] text-xl tracking-tight leading-snug">
                          Fragmented systems
                        </h3>
                      </div>

                      <div className="w-9 h-9 bg-[#ff9f43]/10 rounded-xl flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 text-[#ff9f43]"
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
                        className="bg-gradient-to-br from-[#fff5f5] to-[#ffeded] rounded-xl p-4 border border-[#ffd6d6]"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-[#ff6b6b] rounded-lg flex items-center justify-center flex-shrink-0">
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
                            <div className="text-sm text-[#d63031] mb-1">
                              Data across multiple systems
                            </div>
                            <div className="text-xs text-[#ff6b6b]">
                              Banks, gateways &amp; ERPs don't talk to each
                              other
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="bg-white/70 rounded-md p-2 text-xs text-[#1a2b4f]">
                            🏦 3 different banks
                          </div>
                          <div className="bg-white/70 rounded-md p-2 text-xs text-[#1a2b4f]">
                            💳 5 payment gateways
                          </div>
                          <div className="bg-white/70 rounded-md p-2 text-xs text-[#1a2b4f]">
                            📊 2 ERP systems
                          </div>
                        </div>
                      </div>

                      {/* CARD 2 */}
                      <div
                        ref={(el) => (screen3CardsRef.current[1] = el)}
                        className="bg-gradient-to-br from-[#fffbf0] to-[#fff8e8] rounded-xl p-4 border border-[#ffe0a3]"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-[#ff9f43] rounded-lg flex items-center justify-center flex-shrink-0">
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
                            <div className="text-sm text-[#d68910] mb-1">
                              Manual reconciliation
                            </div>
                            <div className="text-xs text-[#ff9f43]">
                              Finance teams spend hours stitching data
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-white/70 rounded-lg p-2.5">
                            <div className="text-[10px] text-[#6b7a99] mb-1">
                              Weekly hours
                            </div>
                            <div className="text-sm text-[#1a2b4f]">18–24h</div>
                          </div>
                          <div className="bg-white/70 rounded-lg p-2.5">
                            <div className="text-[10px] text-[#6b7a99] mb-1">
                              Error rate
                            </div>
                            <div className="text-sm text-[#1a2b4f]">12–15%</div>
                          </div>
                        </div>
                      </div>

                      {/* CARD 3 */}
                      <div
                        ref={(el) => (screen3CardsRef.current[2] = el)}
                        className="bg-white rounded-xl p-4 shadow-sm border border-[#e8ecf2]"
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
                              className="w-4 h-4 text-[#ff6b6b]"
                            >
                              <path d="M16 17h6v-6" />
                              <path d="m22 17-8.5-8.5-5 5L2 7" />
                            </svg>
                            <span className="text-sm text-[#1a2b4f]">
                              Delayed financial insights
                            </span>
                          </div>

                          <div className="text-xs text-[#6b7a99]">
                            Data silos prevent real-time visibility
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-[#6b7a99]">
                              Time to reconcile
                            </span>
                            <span className="text-[#ff6b6b]">3–5 days</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-[#6b7a99]">
                              Discrepancies found
                            </span>
                            <span className="text-[#ff9f43]">
                              47 this month
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-[#1a2b4f] text-white px-6 py-3 rounded-xl text-sm text-center shadow-lg mt-4">
                      Fragmented reconciliation
                    </div>
                  </div>
                </div>

                {/* Screen 4: Invoicing */}
                <div
                  ref={(el) => (screensRef.current[3] = el)}
                  className="absolute inset-0 bg-[#F4F7FF] rounded-[34px] overflow-hidden"
                >
                  <div className="relative w-full h-full bg-white rounded-[44px] overflow-hidden shadow-inner">
                    <div className="w-full h-full bg-[#fafbfc] flex flex-col px-5 py-8">
                      {/* HEADER */}
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <div className="text-xs text-[#6b7a99] tracking-wide uppercase">
                            Invoicing
                          </div>
                          <h3 className="text-[#1a2b4f] text-xl tracking-tight">
                            Manual processes
                          </h3>
                        </div>

                        <div className="w-9 h-9 bg-[#4f7aff]/10 rounded-xl flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-[#4f7aff]"
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
                          className="bg-white rounded-xl p-4 shadow-sm border border-[#e8ecf2]"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-[#f0f4ff] rounded-lg flex items-center justify-center">
                                <span className="text-xs">🏢</span>
                              </div>
                              <div>
                                <div className="text-sm text-[#1a2b4f]">
                                  Acme Corp Ltd.
                                </div>
                                <div className="text-xs text-[#9ca3af]">
                                  Invoice #INV-2024-1023
                                </div>
                              </div>
                            </div>

                            <div className="px-2.5 py-1 bg-[#fff3e0] text-[#ff9f43] text-xs rounded-md">
                              Awaiting review
                            </div>
                          </div>

                          <div className="space-y-2 mb-3">
                            <div className="flex justify-between text-xs">
                              <span className="text-[#6b7a99]">Amount</span>
                              <span className="text-[#1a2b4f]">$12,450.00</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-[#6b7a99]">Due date</span>
                              <span className="text-[#1a2b4f]">
                                Jan 10, 2025
                              </span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-[#6b7a99]">Location</span>
                              <span className="text-[#1a2b4f]">
                                Mumbai, India 🇮🇳
                              </span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-[#f1f3f5]">
                            <div className="flex items-center gap-2 text-xs text-[#6b7a99]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-3.5 h-3.5"
                              >
                                <path d="M12 6v6l4 2" />
                                <circle cx="12" cy="12" r="10" />
                              </svg>
                              <span>Manual entry: 2.5 hours</span>
                            </div>
                          </div>
                        </div>

                        {/* TAX CONFLICT */}
                        <div
                          ref={(el) => (screen4CardsRef.current[1] = el)}
                          className="bg-gradient-to-br from-[#fff5f5] to-[#ffeded] rounded-xl p-4 border border-[#ffd6d6]"
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-[#ff6b6b] rounded-lg flex items-center justify-center">
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
                              <div className="text-sm text-[#d63031] mb-1">
                                Cross-border tax conflict
                              </div>
                              <div className="text-xs text-[#ff6b6b]">
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
                                className="bg-white/70 rounded-lg p-2.5 text-center"
                              >
                                <div className="text-[10px] text-[#6b7a99] mb-1">
                                  {item.label}
                                </div>
                                <div className="text-sm text-[#1a2b4f]">
                                  {item.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* STATS */}
                        <div
                          ref={(el) => (screen4CardsRef.current[2] = el)}
                          className="bg-white rounded-xl p-4 shadow-sm border border-[#e8ecf2]"
                        >
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#ff9f43] rounded-full" />
                                <span className="text-xs text-[#6b7a99]">
                                  Pending invoices
                                </span>
                              </div>
                              <span className="text-sm text-[#1a2b4f]">23</span>
                            </div>
                            <div className="flex justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#ff6b6b] rounded-full" />
                                <span className="text-xs text-[#6b7a99]">
                                  Errors this week
                                </span>
                              </div>
                              <span className="text-sm text-[#1a2b4f]">17</span>
                            </div>
                            <div className="flex justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#4f7aff] rounded-full" />
                                <span className="text-xs text-[#6b7a99]">
                                  Hours spent/week
                                </span>
                              </div>
                              <span className="text-sm text-[#1a2b4f]">
                                42.5
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="bg-[#1a2b4f] text-white px-6 py-3 rounded-xl text-sm text-center shadow-lg mt-4">
                        Manual invoicing
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screen 5: Compliance */}
                <div
                  ref={(el) => (screensRef.current[4] = el)}
                  className="absolute inset-0 bg-[#F4F7FF] rounded-[34px] overflow-hidden"
                >
                  <div className="w-full h-full bg-[#fafbfc] flex flex-col px-5 py-8">
                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <div className="text-xs text-[#6b7a99] tracking-wide uppercase">
                          Compliance
                        </div>
                        <h3 className="text-[#1a2b4f] text-xl tracking-tight">
                          Regulation tracker
                        </h3>
                      </div>

                      <div className="w-9 h-9 bg-[#ff9f43]/10 rounded-xl flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 text-[#ff9f43]"
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
                        className="bg-gradient-to-br from-[#fffbf0] to-[#fff8e8] rounded-xl p-4 border border-[#ffe0a3]"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-[#ff9f43] rounded-lg flex items-center justify-center">
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
                            <div className="text-sm text-[#d68910] mb-1">
                              12 jurisdictions, 12 tax systems
                            </div>
                            <div className="text-xs text-[#ff9f43]">
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
                              className="bg-white/80 rounded-md px-2 py-1 text-xs flex items-center gap-1"
                            >
                              <span className="text-[#6b7a99]">{code}</span>
                              <span className="text-[#1a2b4f]">{rate}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* REGULATORY UPDATES */}
                      <div
                        ref={(el) => (screen5CardsRef.current[1] = el)}
                        className="bg-gradient-to-br from-[#fff5f5] to-[#ffeeee] rounded-xl p-4 border border-[#ffd6d6]"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 bg-[#ff6b6b] rounded-lg flex items-center justify-center">
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
                            <div className="text-sm text-[#d63031] mb-1">
                              Constant regulatory updates
                            </div>
                            <div className="text-xs text-[#ff6b6b]">
                              Avg 8 changes per month across markets
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {[
                            [
                              "UAE VAT amendments",
                              "Effective Jan 2025",
                              "bg-[#ff6b6b]",
                            ],
                            [
                              "India GST rate revision",
                              "Effective Feb 2025",
                              "bg-[#ff9f43]",
                            ],
                            [
                              "UK Making Tax Digital update",
                              "Effective Mar 2025",
                              "bg-[#ff9f43]",
                            ],
                          ].map(([title, date, color], i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div
                                className={`w-1.5 h-1.5 ${color} rounded-full mt-1.5`}
                              />
                              <div>
                                <div className="text-xs text-[#1a2b4f]">
                                  {title}
                                </div>
                                <div className="text-[10px] text-[#9ca3af]">
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
                        className="bg-white rounded-xl p-4 shadow-sm border border-[#e8ecf2]"
                      >
                        <div className="mb-3">
                          <div className="flex justify-between mb-2">
                            <span className="text-xs text-[#6b7a99]">
                              Compliance coverage
                            </span>
                            <span className="text-sm text-[#ff9f43]">68%</span>
                          </div>

                          <div className="w-full h-2 bg-[#f1f3f5] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#ff9f43] to-[#ffb366]"
                              style={{ width: "68%" }}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#6b7a99]">Covered: 8</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#6b7a99]">At risk: 4</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-[#1a2b4f] text-white px-6 py-3 rounded-xl text-sm text-center shadow-lg mt-4">
                      Fragmented compliance
                    </div>
                  </div>
                </div>

                {/* Screen 6: Cash Flow */}
                <div
                  ref={(el) => (screensRef.current[5] = el)}
                  className="absolute inset-0 bg-[#F4F7FF] rounded-[34px] overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-b from-[#f8f9ff] to-white flex flex-col px-6 py-12">
                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-xs text-[#6b7a99]">Cash Flow</div>
                        <h3 className="text-[#1a2b4f] text-lg">
                          Financial overview
                        </h3>
                      </div>

                      <div className="w-8 h-8 bg-[#4f7aff]/10 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 text-[#4f7aff]"
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
                        className="bg-gradient-to-br from-[#fff5f5] to-white rounded-2xl p-5 shadow-lg border-2 border-[#ffcaca] relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b6b]/5 rounded-full -mr-8 -mt-8" />
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
                              className="w-5 h-5 text-[#ff6b6b]"
                            >
                              <path d="M7 7h10v10" />
                              <path d="M7 17 17 7" />
                            </svg>
                            <span className="text-xs text-[#6b7a99]">
                              Outstanding
                            </span>
                          </div>
                          <div className="text-3xl text-[#ff6b6b] mb-1">
                            $1.2M
                          </div>
                          <div className="text-xs text-[#ff6b6b]">
                            Across 47 invoices
                          </div>
                        </div>
                      </div>

                      {/* AVG SETTLEMENT */}
                      <div
                        ref={(el) => (screen6CardsRef.current[1] = el)}
                        className="bg-gradient-to-br from-[#fffbf0] to-white rounded-2xl p-5 shadow-lg border-2 border-[#ffe0a3] relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff9f43]/5 rounded-full -mr-8 -mt-8" />
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
                              className="w-5 h-5 text-[#ff9f43]"
                            >
                              <path d="M12 6v6l4 2" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            <span className="text-xs text-[#6b7a99]">
                              Avg settlement
                            </span>
                          </div>
                          <div className="text-3xl text-[#ff9f43] mb-1">
                            14 days
                          </div>
                          <div className="text-xs text-[#ff9f43]">
                            Industry avg: 7 days
                          </div>
                        </div>
                      </div>

                      {/* BREAKDOWN */}
                      <div
                        ref={(el) => (screen6CardsRef.current[2] = el)}
                        className="bg-white rounded-2xl p-4 shadow-md border border-[#e0e8ff]"
                      >
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#6b7a99]">Overdue</span>
                            <span className="text-[#ff6b6b]">$340K</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#6b7a99]">
                              Due this week
                            </span>
                            <span className="text-[#ff9f43]">$520K</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#6b7a99]">
                              Due next month
                            </span>
                            <span className="text-[#4f7aff]">$340K</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-[#1a2b4f] text-white px-6 py-3 rounded-full text-sm text-center shadow-lg">
                      Poor cash-flow visibility
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default ProblemSection;

