import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Container } from "../components/ui";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlobeIcon from "../components/svg/GlobeIcon";
import DollarIcon from "../components/svg/DollarIcon";
import AnalyticsIcon from "../components/svg/AnalyticsIcon";
import SyncIcon from "../components/svg/SyncIcon";
import DollarCircleIcon from "../components/svg/DollarCircleIcon";
import DocumentIcon from "../components/svg/DocumentIcon";
import BuildingIcon from "../components/svg/BuildingIcon";
import SortVerticalIcon from "../components/svg/SortVerticalIcon";
import InfoCircleIcon from "../components/svg/InfoCircleIcon";
import BarChartIcon from "../components/svg/BarChartIcon";
import ClockHistoryIcon from "../components/svg/ClockHistoryIcon";
import ArrowUpIcon from "../components/svg/ArrowUpIcon";
import DatabaseIcon from "../components/svg/DatabaseIcon";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function IconWarning({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3.5 2.9 20h18.2L12 3.5Z"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 9v5"
        stroke="#f97316"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1.2" fill="#ef4444" />
    </svg>
  );
}

function IconBank({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 10.5 12 4l8.5 6.5"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M5 10.5h14"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 10.5V19M10 10.5V19M14 10.5V19M17.5 10.5V19"
        stroke="#06b6d4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4.5 19h15"
        stroke="#0b43a0"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCard({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2.5"
        stroke="#06b6d4"
        strokeWidth="2"
      />
      <path d="M4 10h16" stroke="#3b82f6" strokeWidth="2" />
      <path
        d="M7 15h6"
        stroke="#0b43a0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="17.3" cy="15.5" r="1.3" fill="#8b5cf6" />
    </svg>
  );
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
      trackTween(
        gsap.to(phoneRef.current, {
          y: "+=10",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.5, // wait after scroll-trigger entrance
        }),
      );

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

      // Helper function for flawless sidebar animation (dotted, static lines)
      // Enhanced professional animateSidebar function with subtle border hit effect
      const animateSidebar = (lineIndex, cardIndex, isLeftSide = false) => {
        const line = sidebarLinesRef.current[lineIndex];
        const card = sidebarCardsRef.current[cardIndex];
        if (!line || !card) return;

        if (line._flowTween) {
          line._flowTween.kill();
          line._flowTween = null;
        }

        // Simple line style (unchanged)
        gsap.set(line, {
          scaleX: 0,
          transformOrigin: isLeftSide ? "right center" : "left center",
          opacity: 1,
        });

        // Set card with initial state
        gsap.set(card, {
          opacity: 0,
          scale: 0.95,
          x: isLeftSide ? -15 : 15,
          y: 8,
          borderColor: "rgba(226, 232, 240, 0)", // Start with transparent border
          borderWidth: "1px",
          borderStyle: "solid",
        });

        const sidebarTl = gsap.timeline();

        // 1. Draw the line from phone to card position (0.9s)
        sidebarTl.to(
          line,
          {
            scaleX: 1,
            duration: 0.85,
            ease: "power3.out",
          },
          0,
        );

        // 2. Animate card appearing (starts at 70% of line animation)
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

        // 3. PROFESSIONAL BORDER HIT EFFECT - With extended flash
        // When line reaches the card (0.85s), trigger border animation
        sidebarTl
          .to(
            card,
            {
              // First: Extended flash of blue border (increased from 0.15s to 0.3s)
              borderColor: "rgba(59, 130, 246, 0.7)", // Increased opacity for better visibility
              borderWidth: "1.8px", // Slightly thicker for more impact
              duration: 0.3, // Increased from 0.15s
              ease: "power2.out",
            },
            0.85,
          )
          // Then: Longer pulse with gradient
          .to(
            card,
            {
              borderColor: "rgba(59, 130, 246, 0.4)", // Higher opacity
              borderWidth: "2.2px", // Slightly thicker
              boxShadow:
                "0 0 0 3px rgba(59, 130, 246, 0.15), 0 20px 40px rgba(11, 67, 160, 0.15)", // Enhanced shadow
              duration: 0.35, // Increased from 0.2s
              ease: "power2.inOut",
            },
            0.95, // Adjusted timing to account for longer first phase
          )
          // Then: Intermediate step for smoother transition
          .to(
            card,
            {
              borderColor: "rgba(59, 130, 246, 0.25)",
              borderWidth: "1.5px",
              boxShadow:
                "0 0 0 1px rgba(59, 130, 246, 0.1), 0 20px 40px rgba(11, 67, 160, 0.12)",
              duration: 0.25,
              ease: "power2.out",
            },
            1.1,
          )
          // Final: Settle to elegant border with soft glow
          .to(
            card,
            {
              borderColor: "rgba(59, 130, 246, 0.15)",
              borderWidth: "1px",
              boxShadow: "0 20px 40px rgba(11, 67, 160, 0.1)",
              duration: 0.4,
              ease: "power2.out",
            },
            1.25,
          );

        // 4. Optional: Very subtle shadow enhancement
        sidebarTl.to(
          card,
          {
            boxShadow: "0 25px 50px rgba(11, 67, 160, 0.15)",
            duration: 0.4,
            ease: "power2.out",
          },
          1.1,
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
        .call(
          () => {
            animateScreenHeader(1);
          },
          null,
          "<+=0.05",
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
        .call(
          () => {
            animateScreenHeader(2);
          },
          null,
          "<+=0.05",
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
        .call(
          () => {
            animateScreenHeader(3);
          },
          null,
          "<+=0.05",
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
        .call(
          () => {
            animateScreenHeader(4);
          },
          null,
          "<+=0.05",
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

          // First, shrink lines back to phone
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
                index * 0.08,
              );
            }
          });

          // Then fade out cards
          // In the fadeOutTl section of startAutomaticTransitions:
          sidebarCardsRef.current.forEach((card, index) => {
            if (card) {
              fadeOutTl.to(
                card,
                {
                  opacity: 0,
                  scale: 0.92,
                  x: index % 2 === 0 ? 12 : -12,
                  y: 12,
                  borderColor: "rgba(226, 232, 240, 0)", // Fade border out
                  duration: 0.45,
                  ease: "power2.in",
                },
                index * 0.08 + 0.1,
              );
            }
          });

          // Hide sidebars after animation completes
          fadeOutTl.call(
            () => {
              setVisibleSidebars([false, false, false, false]);
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
      <div
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden isolate bg-white"
      >
        {/* Sidebar Components */}
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
                {/* Sidebar card */}
                <div
                  ref={(el) => (sidebarCardsRef.current[0] = el)}
                  className="absolute left-[200px] top-[20%] -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl w-[280px] pointer-events-auto border border-gray-200/50"
                  style={{
                    boxShadow: "0 20px 40px rgba(11, 67, 160, 0.1)",
                  }}
                >
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
                  className="absolute right-[200px] top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 w-[280px] pointer-events-auto"
                  style={{
                    boxShadow: "0 20px 40px rgba(11, 67, 160, 0.1)",
                  }}
                >
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
                    boxShadow: "0 20px 40px rgba(11, 67, 160, 0.1)",
                  }}
                >
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
                  className="absolute right-[200px] top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 w-[280px] pointer-events-auto"
                  style={{
                    boxShadow: "0 20px 40px rgba(11, 67, 160, 0.1)",
                  }}
                >
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
          <div className="min-h-[100svh] lg:h-screen flex items-center justify-center overflow-hidden pb-16 lg:pb-20">
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
                              <GlobeIcon className="w-10 h-10 text-white" />
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
                                <DollarIcon className="w-5 h-5 text-[#4f7aff]" />
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
                      <div className="problem-screen-header flex items-center justify-between mb-5">
                        <div>
                          <p className="text-xs tracking-wide uppercase text-[#425466]">
                            Payments
                          </p>
                          <h3 className="text-[#0A2540] text-lg tracking-tight leading-snug">
                            Expensive, slow & <br /> opaque
                          </h3>
                        </div>

                        <div className="w-9 h-9 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center">
                          <AnalyticsIcon size={48} />
                        </div>
                      </div>

                      {/* ===== CONTENT ===== */}
                      <div className="flex-1 space-y-3">
                        {/* ===== CARD 1 : PAYMENT CYCLES ===== */}
                        <div
                          ref={(el) => (screen2CardsRef.current[0] = el)}
                          className="bg-gradient-to-br from-[#f0f7ff] to-[#e6f0ff] rounded-xl p-4 border border-[#dbeafe]"
                          style={{
                            background:
                              "linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%)",
                            borderColor: "#dbeafe",
                          }}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                              <SyncIcon size={56} />
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
                              <span className="text-sm text-[#0A2540]">
                                45–60 days
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#425466]">
                                🇦🇪 UAE clients
                              </span>
                              <span className="text-sm text-[#0A2540]">
                                30–90 days
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#425466]">
                                🇬🇧 UK clients
                              </span>
                              <span className="text-sm text-[#0A2540]">
                                30–45 days
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* ===== CARD 2 : FX MARGINS ===== */}
                        <div
                          ref={(el) => (screen2CardsRef.current[1] = el)}
                          className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-xl p-4 border border-[#dbeafe]"
                          style={{
                            background:
                              "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
                            borderColor: "#dbeafe",
                          }}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-[#073f9e] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                              <DollarCircleIcon size={56} />
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
                          className="bg-gradient-to-br from-white to-[#f8fafc] rounded-xl p-4 shadow-sm border border-[#e5e7eb]"
                          style={{
                            background:
                              "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                            borderColor: "#e5e7eb",
                          }}
                        >
                          <div className="mb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <IconWarning className="w-4 h-4" />
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
                      <div className="problem-screen-header flex items-center justify-between mb-5">
                        <div>
                          <div className="text-xs text-[#425466] tracking-wide uppercase">
                            Reconciliation
                          </div>
                          <h3 className="text-[#0A2540] text-lg tracking-tight leading-snug">
                            Fragmented systems
                          </h3>
                        </div>

                        <div className="w-9 h-9 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center">
                          <AnalyticsIcon size={48} />
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
                            <div className="w-8 h-8 bg-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                              <DatabaseIcon className="w-10 h-10" />
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
                            <div className="bg-white/80 rounded-md p-2 text-sm text-[#0A2540] flex items-center gap-2">
                              <IconBank className="w-4 h-4" />
                              <span>3 different banks</span>
                            </div>
                            <div className="bg-white/80 rounded-md p-2 text-sm text-[#0A2540] flex items-center gap-2">
                              <IconCard className="w-4 h-4" />
                              <span>5 payment gateways</span>
                            </div>
                            <div className="bg-white/80 rounded-md p-2 text-sm text-[#0A2540] flex items-center gap-2">
                              <AnalyticsIcon size={34} />
                              <span>2 ERP systems</span>
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
                            <div className="w-8 h-8 bg-[#073f9e] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                              <SyncIcon size={34} />
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
                              <AnalyticsIcon size={34} />
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
                              <span className="text-sm text-[#0A2540]">
                                3–5 days
                              </span>
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
                        <div className="problem-screen-header flex items-center justify-between mb-5">
                          <div>
                            <div className="text-xs text-[#425466] tracking-wide uppercase">
                              Invoicing
                            </div>
                            <h3 className="text-[#0A2540] text-lg tracking-tight">
                              Manual processes
                            </h3>
                          </div>

                          <div className="w-9 h-9 bg-gradient-to-br from-[#e0efff] to-[#d0e7ff] rounded-xl flex items-center justify-center">
                            <DocumentIcon className="w-5 h-5" />
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
                              <div className="flex items-start gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-[#e0efff] to-[#d0e7ff] rounded-lg flex items-center justify-center">
                                  <BuildingIcon size={56} />
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

                              <div className="flex items-center justify-between px-1 py-1 bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] text-[#0B43A0] text-xs w-24 rounded-md border border-[#bfdbfe]">
                                <span className="">Awaiting review</span>

                                <SortVerticalIcon className="w-7 h-7 text-[#1E3A8A]" />
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
                                <SyncIcon size={34} />
                                <span>Manual entry: 2.5 hours</span>
                              </div>
                            </div>
                          </div>

                          {/* TAX CONFLICT */}
                          <div
                            ref={(el) => (screen4CardsRef.current[1] = el)}
                            className="bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-xl p-4 border border-[#bfdbfe]"
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] rounded-lg flex items-center justify-center shadow-sm">
                                <InfoCircleIcon size={56} />
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
                                  className="bg-gradient-to-br from-white to-[#f8fafc] rounded-md px-2 py-1 text-xs flex items-center gap-1 border border-[#e5e7eb]"
                                >
                                  <span className="text-[#425466]">
                                    {item.label}
                                  </span>
                                  <span className="text-sm text-[#0A2540]">
                                    {item.value}
                                  </span>
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
                      <div className="problem-screen-header flex items-center justify-between mb-5">
                        <div>
                          <div className="text-xs text-[#425466] tracking-wide uppercase">
                            Compliance
                          </div>
                          <h3 className="text-[#0A2540] text-lg tracking-tight">
                            Regulation tracker
                          </h3>
                        </div>

                        <div className="w-9 h-9 bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-xl flex items-center justify-center overflow-hidden">
                          <InfoCircleIcon size={56}/>
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
                            <div className="w-8 h-8 bg-gradient-to-br from-[#0B43A0] to-[#073f9e] rounded-lg flex items-center justify-center shadow-sm">
  <GlobeIcon className="w-5 h-5 text-white" />
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
                                <span className="text-sm text-[#0A2540]">
                                  {rate}
                                </span>
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
                            <div className="w-8 h-8 bg-gradient-to-br from-[#0B43A0] to-[#073f9e] rounded-lg flex items-center justify-center shadow-sm">
                              <DatabaseIcon className="w-10 h-10" />
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
                      <div className="problem-screen-header flex items-center justify-between mb-6">
                        <div>
                          <div className="text-xs text-[#425466]">
                            Cash Flow
                          </div>
                          <h3 className="text-[#0A2540] text-lg">
                            Financial overview
                          </h3>
                        </div>

                        <div className="w-8 h-8 bg-gradient-to-br from-[#eff6ff] to-[#e0efff] rounded-full flex items-center justify-center overflow-hidden">
                          <BarChartIcon className="w-5 h-5" />
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
                              <ArrowUpIcon className="w-7 h-7" />
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
                              <ClockHistoryIcon size={34} />
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
                              <span className="text-sm text-[#0A2540]">
                                $340K
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-[#425466]">
                                Due this week
                              </span>
                              <span className="text-sm text-[#0B43A0]">
                                $520K
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-[#425466]">
                                Due next month
                              </span>
                              <span className="text-sm text-[#3b82f6]">
                                $340K
                              </span>
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
