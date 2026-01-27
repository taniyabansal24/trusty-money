import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Container } from "../components/ui";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlobeIcon from "../components/svg/GlobeIcon";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";
import InfoCircleIcon from "../components/svg/InfoCircleIcon";
import BarChartIcon from "../components/svg/BarChartIcon";
import ClockHistoryIcon from "../components/svg/ClockHistoryIcon";
import ArrowUpIcon from "../components/svg/ArrowUpIcon";
import DatabaseIcon from "../components/svg/DatabaseIcon";
import Screen1CrossBorder from "./ProblemSection/Screen1CrossBorder";
import Screen2Payments from "./ProblemSection/Screen2Payments";
import Screen3Reconciliation from "./ProblemSection/Screen3Reconciliation";
import Screen4Invoicing from "./ProblemSection/Screen4Invoicing";
import Screen5Compliance from "./ProblemSection/Screen5Compliance";
import Screen6CashFlow from "./ProblemSection/Screen6CashFlow";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProblemSection = () => {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const bgBlobsRef = useRef([]);
  const bgGridRef = useRef(null);
  const bgParticlesRef = useRef([]);
  const bgAuroraRef = useRef([]);
  const pixelCanvasRef = useRef(null);
  const pixelMouseRef = useRef({ x: -9999, y: -9999, active: false });

  const activeTweensRef = useRef([]);
  const activeTimeoutsRef = useRef([]);
  const activeTriggersRef = useRef([]);
  const startedRef = useRef(false);
  const inViewRef = useRef(false);
  const isScrollingRef = useRef(false);
  const scrollEndTimeoutRef = useRef(null);
  // Add this with your other state declarations
  const [activeSidebar, setActiveSidebar] = useState(-1); // -1 means none active
  const activeSidebarRef = useRef(-1);

  const trackTween = (tween) => {
    if (!tween) return tween;
    activeTweensRef.current.push(tween);
    return tween;
  };

  const pauseAnimations = () => {
    activeTweensRef.current.forEach((t) => {
      if (t && t.pause) t.pause();
    });
  };

  const resumeAnimations = () => {
    activeTweensRef.current.forEach((t) => {
      if (t && t.play) t.play();
    });
  };

  const resumeIfAllowed = () => {
    if (!inViewRef.current) return;
    if (isScrollingRef.current) return;
    resumeAnimations();
  };

  const [reduceEffects, setReduceEffects] = useState(true);

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

  useEffect(() => {
    const canvas = pixelCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const state = {
      raf: 0,
      last: 0,
      w: 0,
      h: 0,
      dpr: 1,
      grid: null,
      pending: false,
      inView: true,
    };

    const baseColor = { r: 7, g: 63, b: 158 };

    const stop = () => {
      if (state.raf) cancelAnimationFrame(state.raf);
      state.raf = 0;
    };

    const shouldAnimate = () => {
      if (prefersReducedMotion) return false;
      if (document.hidden) return false;
      if (!state.inView) return false;
      return true;
    };

    const makeGrid = () => {
      const grid = document.createElement("canvas");
      grid.width = Math.floor(state.w * state.dpr);
      grid.height = Math.floor(state.h * state.dpr);
      const gctx = grid.getContext("2d");
      if (!gctx) return;
      gctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

      const cell = 5;
      const gap = 3;
      const step = cell + gap;
      const cols = Math.ceil(state.w / step);
      const rows = Math.ceil(state.h / step);

      gctx.clearRect(0, 0, state.w, state.h);
      gctx.fillStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0.035)`;
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          if ((x + y) % 2 !== 0) continue;
          if (Math.random() < 0.35) continue;
          const px = x * step + gap;
          const py = y * step + gap;
          gctx.fillRect(px, py, cell, cell);
        }
      }

      state.grid = grid;
    };

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = parent
        ? parent.getBoundingClientRect()
        : canvas.getBoundingClientRect();
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      state.dpr = dpr;
      state.w = Math.max(1, Math.floor(rect.width));
      state.h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(state.w * dpr);
      canvas.height = Math.floor(state.h * dpr);
      canvas.style.width = `${state.w}px`;
      canvas.style.height = `${state.h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      makeGrid();
      state.pending = true;
      render();
    };

    const render = () => {
      if (prefersReducedMotion) return;
      if (document.hidden) return;

      ctx.clearRect(0, 0, state.w, state.h);
      if (state.grid) {
        const t = (performance.now() || 0) * 0.001;
        const ox = Math.sin(t * 0.6) * 1.2;
        const oy = Math.cos(t * 0.55) * 1.2;

        ctx.save();
        ctx.globalAlpha = 0.92;
        ctx.drawImage(state.grid, ox, oy, state.w, state.h);
        ctx.globalAlpha = 0.5 + 0.08 * (1 + Math.sin(t * 1.25));
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(state.grid, -ox * 0.6, -oy * 0.6, state.w, state.h);
        ctx.restore();
      }

      const mx = pixelMouseRef.current.x;
      const my = pixelMouseRef.current.y;
      const active = pixelMouseRef.current.active;
      if (!active) return;

      const radius = 170;
      const grad = ctx.createRadialGradient(mx, my, 0, mx, my, radius);
      grad.addColorStop(0, `rgba(14,165,233,0.14)`);
      grad.addColorStop(0.45, `rgba(6,182,212,0.07)`);
      grad.addColorStop(1, `rgba(14,165,233,0)`);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(mx, my, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const tick = (ts) => {
      if (!shouldAnimate()) {
        stop();
        return;
      }

      const fps = 24;
      const frameMs = 1000 / fps;
      if (ts - state.last >= frameMs) {
        state.last = ts;
        render();
      }
      state.raf = requestAnimationFrame(tick);
    };

    const onMove = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      pixelMouseRef.current.x = clientX - rect.left;
      pixelMouseRef.current.y = clientY - rect.top;
      pixelMouseRef.current.active = true;

      if (!state.pending) {
        state.pending = true;
        requestAnimationFrame(() => {
          state.pending = false;
          render();
        });
      }

      if (!state.raf && shouldAnimate()) {
        state.last = 0;
        state.raf = requestAnimationFrame(tick);
      }
    };

    const onMouseMove = (e) => onMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      const t = e.touches && e.touches[0];
      if (t) onMove(t.clientX, t.clientY);
    };
    const onLeave = () => {
      pixelMouseRef.current.active = false;
      if (!state.pending) {
        state.pending = true;
        requestAnimationFrame(() => {
          state.pending = false;
          render();
        });
      }
    };

    const onVisibility = () => {
      if (!shouldAnimate()) {
        stop();
      } else if (!state.raf) {
        state.last = 0;
        state.raf = requestAnimationFrame(tick);
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        state.inView = !!entry?.isIntersecting;
        onVisibility();
      },
      { threshold: 0.05 },
    );
    io.observe(canvas);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("blur", onLeave, { passive: true });

    resize();
    window.addEventListener("resize", resize);

    render();

    if (shouldAnimate()) {
      state.last = 0;
      state.raf = requestAnimationFrame(tick);
    }

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

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
      },
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
            const startId = window.setTimeout(() => {
              startFullAnimationSequence();
            }, 800);
            trackTimeout(startId);
          },
          onEnterBack: () => {
            // Optional: if you want it to animate again when scrolling back up
            // setAnimationStarted(true);
          },
          markers: false, // Set to true for debugging
        },
      });

      const visibilityTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          inViewRef.current = true;
          resumeIfAllowed();
        },
        onEnterBack: () => {
          inViewRef.current = true;
          resumeIfAllowed();
        },
        onLeave: () => {
          inViewRef.current = false;
          pauseAnimations();
        },
        onLeaveBack: () => {
          inViewRef.current = false;
          pauseAnimations();
        },
      });
      activeTriggersRef.current.push(visibilityTrigger);

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
          },
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
          "<", // Start at same time as phone animation
        );
    });

    // Cleanup ScrollTrigger
    return () => {
      ctx.revert();
    };
  }, []); // Empty dependency array - runs once on mount

  useEffect(() => {
    const onScroll = () => {
      isScrollingRef.current = true;
      pauseAnimations();
      setReduceEffects(true);

      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current);
      }

      scrollEndTimeoutRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
        resumeIfAllowed();
      }, 140);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current);
        scrollEndTimeoutRef.current = null;
      }
    };
  }, []);

  // Main animation sequence
  const startFullAnimationSequence = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    const ctx = gsap.context(() => {
      const phoneHighlight = phoneRef.current?.querySelector(
        ".problem-phone-highlight",
      );

      if (phoneHighlight) {
        gsap.set(phoneHighlight, { opacity: 0.55, xPercent: -30 });
        trackTween(
          gsap.to(phoneHighlight, {
            xPercent: 30,
            opacity: 0.85,
            duration: 4.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }),
        );
      }

      // ========== STEP 1: CONTINUOUS PHONE FLOAT (NO ENTRANCE) ==========
      // trackTween(
      //   gsap.to(phoneRef.current, {
      //     y: "+=10",
      //     duration: 3,
      //     repeat: -1,
      //     yoyo: true,
      //     ease: "sine.inOut",
      //     delay: 0.5, // wait after scroll-trigger entrance
      //   }),
      // );

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
          },
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
        },
      );

      // Title & subtitle
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.5 },
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.7 },
      );

      // Dots animation (entrance only, no pulse)
      dotsRef.current.forEach((dot, index) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 0.6,
            duration: 0.3,
            delay: 1 + index * 0.1,
          },
        );
      });

      // Dollar icons
      dollarRefs.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, delay: 1.2 + i * 0.2 },
        );

        trackTween(
          gsap.to(el, {
            y: "+=8",
            duration: 2.2 + i * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.7 + i * 0.25,
          }),
        );
      });

      // Background blobs animation
      const blobs = bgBlobsRef.current.filter(Boolean);
      if (blobs.length > 0) {
        blobs.forEach((blob, i) => {
          trackTween(
            gsap.to(blob, {
              x: (i % 2 === 0 ? 1 : -1) * (18 + i * 6),
              y: (i % 2 === 0 ? -1 : 1) * (14 + i * 5),
              scale: 1.06,
              rotate: i % 2 === 0 ? 6 : -6,
              duration: 10 + i * 3,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            }),
          );
        });
      }

      if (bgGridRef.current) {
        gsap.set(bgGridRef.current, { backgroundPosition: "0px 0px" });
        trackTween(
          gsap.to(bgGridRef.current, {
            backgroundPosition: "120px 120px",
            duration: 18,
            ease: "none",
            repeat: -1,
          }),
        );
      }

      const particles = bgParticlesRef.current.filter(Boolean);
      if (particles.length > 0) {
        particles.forEach((p, i) => {
          trackTween(
            gsap.to(p, {
              y: (i % 2 === 0 ? -1 : 1) * (18 + i * 3),
              x: (i % 3 === 0 ? 1 : -1) * (10 + i * 2),
              opacity: 0.85,
              duration: 6.5 + i * 0.7,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            }),
          );
        });
      }

      const auroras = bgAuroraRef.current.filter(Boolean);
      if (auroras.length > 0) {
        auroras.forEach((a, i) => {
          gsap.set(a, { rotate: i * 18, transformOrigin: "50% 50%" });
          trackTween(
            gsap.to(a, {
              rotate: i % 2 === 0 ? "+=26" : "-=26",
              scale: i % 2 === 0 ? 1.08 : 1.12,
              x: i % 2 === 0 ? 20 : -20,
              y: i % 2 === 0 ? -14 : 14,
              duration: 14 + i * 4,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            }),
          );

          trackTween(
            gsap.to(a, {
              opacity: i === 0 ? 0.75 : 0.55,
              duration: 6 + i * 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            }),
          );
        });
      }

      // ========== STEP 3: START AUTOMATIC TRANSITIONS ==========
      const transitionTimeout = window.setTimeout(() => {
        startAutomaticTransitions();
      }, 4000);
      trackTimeout(transitionTimeout);

      return () => {
        clearTimeout(transitionTimeout);
      };
    });
  };

  useEffect(() => {
    return () => {
      activeTimeoutsRef.current.forEach((id) => clearTimeout(id));
      activeTimeoutsRef.current = [];

      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current);
        scrollEndTimeoutRef.current = null;
      }

      activeTweensRef.current.forEach((t) => {
        if (t && t.kill) t.kill();
      });
      activeTweensRef.current = [];

      activeTriggersRef.current.forEach((tr) => {
        if (tr && tr.kill) tr.kill();
      });
      activeTriggersRef.current = [];
    };
  }, []);

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

      // Enhanced professional animateSidebar function with subtle border hit effect
      const animateSidebar = (lineIndex, cardIndex, isLeftSide = false) => {
        const line = sidebarLinesRef.current[lineIndex];
        const card = sidebarCardsRef.current[cardIndex];
        if (!line || !card) return;

        if (line._flowTween) {
          line._flowTween.kill();
          line._flowTween = null;
        }

        // FIRST: Reset previous active sidebar border to normal if it exists
        // Use the ref which has the current value immediately
        const previousActiveIndex = activeSidebarRef.current;
        if (
          previousActiveIndex !== -1 &&
          sidebarCardsRef.current[previousActiveIndex]
        ) {
          const previousCard = sidebarCardsRef.current[previousActiveIndex];

          // Animate previous card border back to normal
          gsap.to(previousCard, {
            borderColor: "rgba(226, 232, 240, 0.8)", // Light border
            borderWidth: "1px",
            boxShadow: "0 20px 40px rgba(11, 67, 160, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        }

        // Update both ref and state for the new active sidebar
        activeSidebarRef.current = cardIndex;
        setActiveSidebar(cardIndex);

        // Simple line style (unchanged)
        gsap.set(line, {
          scaleX: 0,
          transformOrigin: isLeftSide ? "right center" : "left center",
          opacity: 1,
        });

        // Set card with initial state - start with active border
        gsap.set(card, {
          opacity: 0,
          scale: 0.95,
          x: isLeftSide ? -15 : 15,
          y: 8,
          borderColor: "rgba(59, 130, 246, 0)", // Start transparent
          borderWidth: "2px",
          borderStyle: "solid",
          boxShadow: "0 20px 40px rgba(11, 67, 160, 0.1)",
        });

        const sidebarTl = gsap.timeline();

        // 1. Draw the line from phone to card position
        sidebarTl.to(
          line,
          {
            scaleX: 1,
            duration: 0.85,
            ease: "power3.out",
          },
          0,
        );

        // 2. Animate card appearing
        sidebarTl.to(
          card,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          0.6,
        );

        // 3. Border hit effect - NOW STAYS ACTIVE
        sidebarTl
          .to(
            card,
            {
              // Flash effect
              borderColor: "rgba(59, 130, 246, 0.9)",
              borderWidth: "2.5px",
              duration: 0.3,
              ease: "power2.out",
            },
            0.85,
          )
          // Then settle to persistent active state
          .to(
            card,
            {
              borderColor: "rgba(59, 130, 246, 0.7)", // Keep active border
              borderWidth: "2px",
              boxShadow: "0 25px 50px rgba(11, 67, 160, 0.15)",
              duration: 0.3,
              ease: "power2.out",
            },
            1.05,
          );

        return sidebarTl;
      };

      // Helper function for screen header animations
      const animateScreenHeader = (screenIndex) => {
        const screen = screensRef.current[screenIndex];
        if (!screen) return;

        const header = screen.querySelector(".problem-screen-header");
        if (!header) return;

        const headerBits = Array.from(
          header.querySelectorAll("p, h3, div"),
        ).filter((el) => el && el.textContent && el.textContent.trim().length);

        if (headerBits.length === 0) return;

        gsap.fromTo(
          headerBits,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.05,
            overwrite: "auto",
          },
        );
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
          "<",
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
          "<",
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
          "<",
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
          "<",
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
          "<",
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
          "<",
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
          "<",
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
          "<",
        )
        .to({}, { duration: 3.8 });

      // ========== ENHANCED SIDEBAR FADE OUT ANIMATION ==========
      masterTl
        .to({}, { duration: 0.1 })
        .call(() => {
          const fadeOutTl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
          });

          // First, reset all sidebar borders to normal
          sidebarCardsRef.current.forEach((card, index) => {
            if (card) {
              fadeOutTl.to(
                card,
                {
                  borderColor: "rgba(226, 232, 240, 0.8)", // Normal border
                  borderWidth: "1px",
                  boxShadow: "0 20px 40px rgba(11, 67, 160, 0.1)",
                  duration: 0.3,
                  ease: "power2.out",
                },
                0, // All reset simultaneously
              );
            }
          });

          // Then, shrink lines back to phone
          sidebarLinesRef.current.forEach((line, index) => {
            if (line) {
              if (line._flowTween) {
                line._flowTween.kill();
                line._flowTween = null;
              }
              fadeOutTl.to(
                line,
                {
                  scaleX: 0,
                  opacity: 0,
                  duration: 0.5,
                  ease: "power2.in",
                },
                index * 0.08 + 0.2, // Delay after border reset
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
                  scale: 0.92,
                  x: index % 2 === 0 ? 12 : -12,
                  y: 12,
                  duration: 0.45,
                  ease: "power2.in",
                },
                index * 0.08 + 0.3, // Delay after line shrink
              );
            }
          });

          // Hide sidebars after animation completes
          fadeOutTl.call(
            () => {
              setVisibleSidebars([false, false, false, false]);
              setActiveSidebar(-1); // Reset active sidebar at the end
            },
            null,
            "+=0.2",
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
          "<",
        )
        .to(
          screensRef.current[5],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.6,
            ease: "power2.out",
          },
          "<",
        )
        .call(
          () => {
            animateScreenHeader(5);
          },
          null,
          "<+=0.08",
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
          "<+=0.3",
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
          "<", // 👈 overlap with screen 6 still visible
        )
        .to(
          screensRef.current[5],
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<",
        )
        .set(screensRef.current.slice(1), {
          opacity: 0,
          pointerEvents: "none",
        })
        .call(() => {
          masterTl.restart();
        });
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
      },
    );
  };

  return (
    <>
      {/* Header Section */}
      <div className="text-center mb-12 pt-20 md:pt-24">
        <motion.h1
          variants={staggerItem}
          className="section-hero-heading text-gray-900"
        >
          Cross-Border Friction{" "}
          <span className="gradient-text relative">
            Exists <br />
            at Every Layer
          </span>
        </motion.h1>
        <p className="section-subtitle max-w-lg mx-auto">
          The Problem Isn’t Payments — It’s Everything Around Them
        </p>
      </div>
      <div
        ref={sectionRef}
        className="relative overflow-hidden isolate bg-white"
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
                  className={`absolute left-[200px] top-[20%] -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl w-[280px] pointer-events-auto border-2 ${
                    activeSidebar === 0
                      ? "border-blue-500 shadow-blue-500/20"
                      : "border-gray-200/50"
                  }`}
                  style={{
                    boxShadow:
                      activeSidebar === 0
                        ? "0 25px 50px rgba(59, 130, 246, 0.15)"
                        : "0 20px 40px rgba(11, 67, 160, 0.1)",
                  }}
                >
                  <div className="hero-badge text-[#0B43A0] mb-3 uppercase">
                    Problem
                  </div>
                  <h3 className="text-[#0A2540] feature-title mb-3 ">
                    Expensive &amp; slow collections
                  </h3>
                  <p className="text-[#425466] text-muted">
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
              className="absolute left-1/2 top-1/4 -translate-y-1/2 z-50"
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
                  className={`absolute right-[200px] top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl border-2 w-[280px] pointer-events-auto ${
                    activeSidebar === 1
                      ? "border-blue-500 shadow-blue-500/20"
                      : "border-gray-100"
                  }`}
                  style={{
                    boxShadow:
                      activeSidebar === 1
                        ? "0 25px 50px rgba(59, 130, 246, 0.15)"
                        : "0 20px 40px rgba(11, 67, 160, 0.1)",
                  }}
                >
                  <div className="hero-badge text-[#0B43A0] mb-3 uppercase">
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
                  className={`absolute left-[200px] top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl border-2 w-[280px] pointer-events-auto ${
                    activeSidebar === 2
                      ? "border-blue-500 shadow-blue-500/20"
                      : "border-gray-100"
                  }`}
                  style={{
                    boxShadow:
                      activeSidebar === 2
                        ? "0 25px 50px rgba(59, 130, 246, 0.15)"
                        : "0 20px 40px rgba(11, 67, 160, 0.1)",
                  }}
                >
                  <div className="hero-badge text-[#0B43A0] mb-3 uppercase">
                    Problem
                  </div>
                  <h3 className="text-[#0A2540] feature-title mb-3 ">
                    Manual invoicing
                  </h3>
                  <p className="text-[#425466] text-muted">
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
              className="absolute left-1/2 top-[65%] -translate-y-1/2 z-50"
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
                  className={`absolute right-[200px] top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl border-2 w-[280px] pointer-events-auto ${
                    activeSidebar === 3
                      ? "border-blue-500 shadow-blue-500/20"
                      : "border-gray-100"
                  }`}
                  style={{
                    boxShadow:
                      activeSidebar === 3
                        ? "0 25px 50px rgba(59, 130, 246, 0.15)"
                        : "0 20px 40px rgba(11, 67, 160, 0.1)",
                  }}
                >
                  <div className="hero-badge text-[#0B43A0] mb-3 uppercase">
                    Problem
                  </div>
                  <h3 className="feature-title mb-3">Fragmented compliance</h3>
                  <p className="text-[#425466] text-muted">
                    Compliance requirements constantly change by geography and
                    transaction type, creating ongoing operational burden.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main container */}
        <Container className="relative z-0 pb-20 md:pb-24">
          <div className="min-h-max flex items-center justify-center ">
            {/* Phone mockup */}
            <div
              ref={phoneRef}
              className="relative w-[300px] h-[610px] sm:w-[343px] sm:h-[680px] z-20 transform-gpu translate-y-12 sm:translate-y-16 md:translate-y-28"
            >
              {/* Glow effect */}
              <div className="absolute inset-[-40px] bg-gradient-to-br from-blue-400/10 via-transparent to-orange-400/10 blur-2xl rounded-[70px]" />

              <div
                className="problem-phone-highlight absolute inset-[-10px] rounded-[64px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.22) 45%, rgba(255,255,255,0) 60%)",
                  filter: "blur(2px)",
                  transform: "skewX(-12deg)",
                }}
              />

              {/* Drop shadow for depth */}
              <div className="phone-shadow absolute -bottom-6 left-1/2 -translate-x-1/2 w-[320px] h-12 bg-gradient-to-t from-black/40 via-transparent to-transparent blur-xl rounded-full" />

              {/* Outer phone frame with softer shadows */}
              <div className="relative w-full h-full bg-black rounded-[37px] border-[2px] border-black shadow-[0_15px_30px_-8px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)_inset] overflow-hidden">
                {/* Screen notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20 shadow-sm" />

                {/* Screens Container */}
                <div className="absolute inset-[2px] rounded-[34px] overflow-hidden">
                  {/* All screens */}
                  {/* Screen 1: Cross-Border Operations - STARTS VISIBLE */}
                  <Screen1CrossBorder
                    ref={(el) => (screensRef.current[0] = el)}
                    globeRef={globeRef}
                    ringsRef={ringsRef}
                    titleRef={titleRef}
                    subtitleRef={subtitleRef}
                    dotsRef={dotsRef}
                    dollarRefs={dollarRefs}
                  />

                  {/* Screen 2: Payments */}
                  <Screen2Payments
                    ref={(el) => (screensRef.current[1] = el)}
                    screen2CardsRef={screen2CardsRef}
                  />

                  {/* Screen 3: Reconciliation */}
                  <Screen3Reconciliation
                    ref={(el) => (screensRef.current[2] = el)}
                    screen3CardsRef={screen3CardsRef}
                  />

                  {/* Screen 4: Invoicing */}
                  <Screen4Invoicing
                    ref={(el) => (screensRef.current[3] = el)}
                    screen4CardsRef={screen4CardsRef}
                  />

                  {/* Screen 5: Compliance */}
                  <Screen5Compliance
                    ref={(el) => (screensRef.current[4] = el)}
                    screen5CardsRef={screen5CardsRef}
                  />

                  {/* Screen 6: Cash Flow */}
                  <Screen6CashFlow
                    ref={(el) => (screensRef.current[5] = el)}
                    screen6CardsRef={screen6CardsRef}
                  />
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
