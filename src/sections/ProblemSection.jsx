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
  const [activeSidebar, setActiveSidebar] = useState(-1);
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
  const [animationStarted, setAnimationStarted] = useState(false);
  const [visibleSidebars, setVisibleSidebars] = useState([
    false,
    false,
    false,
    false,
  ]);

  const screensRef = useRef([]);
  const screen2CardsRef = useRef([]);
  const screen3CardsRef = useRef([]);
  const screen4CardsRef = useRef([]);
  const screen5CardsRef = useRef([]);
  const screen6CardsRef = useRef([]);

  const globeRef = useRef(null);
  const ringsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dotsRef = useRef([]);
  const dollarRefs = useRef([]);

  const sidebarRefs = useRef([]);
  const sidebarCardsRef = useRef([]);
  const sidebarLinesRef = useRef([]);

  // State to track screen size
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // CHANGED FROM 768 TO 1024 (md → lg)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Initialize refs after component mounts
  useEffect(() => {
    const allScreens = screensRef.current.filter(Boolean);
    gsap.set(allScreens, {
      opacity: 0,
      pointerEvents: "none",
    });

    gsap.set(screensRef.current[0], {
      backgroundColor: "#ffffff",
      opacity: 1,
      pointerEvents: "auto",
    });

    gsap.set(screensRef.current[0], {
      backgroundColor: "#EDF2FE",
    });

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

    sidebarLinesRef.current = [];
    sidebarCardsRef.current = [];
  }, []);

  // ========== MODIFIED: Only run phone animations on desktop ==========
  useEffect(() => {
    // Don't run phone animations on mobile
    if (isMobile) return;

    const ctx = gsap.context(() => {
      gsap.set(phoneRef.current, {
        opacity: 0,
        scale: 0.85,
        y: 80,
        rotationX: 15,
      });

      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 20%",
          once: true,
          onEnter: () => {
            setAnimationStarted(true);
            const startId = window.setTimeout(() => {
              startFullAnimationSequence();
            }, 800);
            trackTimeout(startId);
          },
          markers: false,
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

      entranceTl
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
          "<",
        );
    });

    return () => {
      ctx.revert();
    };
  }, [isMobile]); // Re-run when isMobile changes

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

  // MODIFIED: Only start phone animations on desktop
  const startFullAnimationSequence = () => {
    if (startedRef.current || isMobile) return;
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

      const firstScreenTl = gsap.timeline({ delay: 0.5 });

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

  // MODIFIED: Only run transitions on desktop
  const startAutomaticTransitions = () => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      setVisibleSidebars([false, false, false, false]);

      const otherScreens = screensRef.current.slice(1).filter(Boolean);
      gsap.set(otherScreens, {
        opacity: 0,
        pointerEvents: "none",
      });

      const masterTl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      const animateSidebar = (lineIndex, cardIndex, isLeftSide = false) => {
        const line = sidebarLinesRef.current[lineIndex];
        const card = sidebarCardsRef.current[cardIndex];
        if (!line || !card) return;

        if (line._flowTween) {
          line._flowTween.kill();
          line._flowTween = null;
        }

        const previousActiveIndex = activeSidebarRef.current;
        if (
          previousActiveIndex !== -1 &&
          sidebarCardsRef.current[previousActiveIndex]
        ) {
          const previousCard = sidebarCardsRef.current[previousActiveIndex];
          gsap.to(previousCard, {
            borderColor: "rgba(226, 232, 240, 0.8)",
            borderWidth: "1px",
            boxShadow: "0 20px 40px rgba(11, 67, 160, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        }

        activeSidebarRef.current = cardIndex;
        setActiveSidebar(cardIndex);

        gsap.set(line, {
          scaleX: 0,
          transformOrigin: isLeftSide ? "right center" : "left center",
          opacity: 1,
        });

        gsap.set(card, {
          opacity: 0,
          scale: 0.95,
          x: isLeftSide ? -15 : 15,
          y: 8,
          borderColor: "rgba(59, 130, 246, 0)",
          borderWidth: "2px",
          borderStyle: "solid",
          boxShadow: "0 20px 40px rgba(11, 67, 160, 0.1)",
        });

        const sidebarTl = gsap.timeline();
        sidebarTl.to(
          line,
          {
            scaleX: 1,
            duration: 0.85,
            ease: "power3.out",
          },
          0,
        );

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

        sidebarTl
          .to(
            card,
            {
              borderColor: "rgba(59, 130, 246, 0.9)",
              borderWidth: "2.5px",
              duration: 0.3,
              ease: "power2.out",
            },
            0.85,
          )
          .to(
            card,
            {
              borderColor: "rgba(59, 130, 246, 0.7)",
              borderWidth: "2px",
              boxShadow: "0 25px 50px rgba(11, 67, 160, 0.15)",
              duration: 0.3,
              ease: "power2.out",
            },
            1.05,
          );

        return sidebarTl;
      };

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

      // Screen transitions (same as before, but only for desktop)
      // ... [rest of the transition code remains the same] ...
      // Screen 1 → Screen 2
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
          setVisibleSidebars([true, false, false, false]);
        })
        .to({}, { duration: 0.001 })
        .call(() => {
          if (sidebarCardsRef.current[0]) {
            gsap.set(sidebarCardsRef.current[0], {
              opacity: 0,
              scale: 0.8,
              x: 20,
              y: 10,
              immediateRender: true,
            });
          }
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

      // Screen 2 → Screen 3
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

      // Screen 3 → Screen 4
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

      // Screen 4 → Screen 5
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

      // Sidebar fade out
      masterTl
        .to({}, { duration: 0.1 })
        .call(() => {
          const fadeOutTl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
          });

          sidebarCardsRef.current.forEach((card, index) => {
            if (card) {
              fadeOutTl.to(
                card,
                {
                  borderColor: "rgba(226, 232, 240, 0.8)",
                  borderWidth: "1px",
                  boxShadow: "0 20px 40px rgba(11, 67, 160, 0.1)",
                  duration: 0.3,
                  ease: "power2.out",
                },
                0,
              );
            }
          });

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
                index * 0.08 + 0.2,
              );
            }
          });

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
                index * 0.08 + 0.3,
              );
            }
          });

          fadeOutTl.call(
            () => {
              setVisibleSidebars([false, false, false, false]);
              setActiveSidebar(-1);
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

      // Loop back
      masterTl
        .to(
          screensRef.current[0],
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.6,
            ease: "power2.inOut",
          },
          "<",
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

  const resetToInitialState = () => {
    setVisibleSidebars([false, false, false, false]);
    const allScreens = screensRef.current.filter(Boolean);
    gsap.set(allScreens, {
      opacity: 0,
      pointerEvents: "none",
    });

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
        <p className="section-subtitle max-w-64 sm:max-w-lg mx-auto">
          The Problem Isn't Payments — It's Everything Around Them
        </p>
      </div>
      <div
        ref={sectionRef}
        className="relative overflow-hidden isolate bg-white"
      >
        {/* Sidebar Components - MODIFIED: Always visible on mobile, positioned differently */}
        <div className="absolute inset-0 overflow-visible pointer-events-none z-40">
          {/* Sidebar 1 (for Screen 2: Payments) */}
          {visibleSidebars[0] && (
            <div
              className={`absolute ${
                isMobile
                  ? "left-4 top-1/4 w-[calc(100%-2rem)]"
                  : "left-1/2 top-1/4 -translate-y-1/2"
              } z-50`}
              style={!isMobile ? { marginLeft: "155px" } : {}}
            >
              <div className="relative">
                {/* Progress line - hidden on mobile */}
                {!isMobile && (
                  <div
                    ref={(el) => (sidebarLinesRef.current[0] = el)}
                    className="h-[2px] w-[200px] absolute left-0 top-[20%] -translate-y-1/2"
                    style={{
                      background:
                        "linear-gradient(90deg, #0B43A0 0%, rgba(11, 67, 160, 0.2) 100%)",
                      transformOrigin: "left center",
                    }}
                  />
                )}

                {/* Sidebar card - responsive width */}
                <div
                  ref={(el) => (sidebarCardsRef.current[0] = el)}
                  className={`bg-white rounded-2xl p-4 shadow-xl pointer-events-auto border-2 ${
                    isMobile
                      ? "w-full"
                      : "w-[255px] absolute left-[180px] top-[20%] -translate-y-1/2"
                  } ${
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
                  <div className="hero-badge text-[#0B43A0] mb-2 uppercase">
                    Problem
                  </div>
                  <h3 className="text-[#0A2540] feature-title mb-2">
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

          {/* Sidebar 2 (for Screen 3: Reconciliation) */}
          {visibleSidebars[1] && (
            <div
              className={`absolute ${
                isMobile
                  ? "right-4 top-2/4 w-[calc(100%-2rem)]"
                  : "left-1/2 top-1/4 -translate-y-1/2"
              } z-50`}
              style={!isMobile ? { marginLeft: "-155px" } : {}}
            >
              <div className="relative">
                {/* Progress line - hidden on mobile */}
                {!isMobile && (
                  <div
                    ref={(el) => (sidebarLinesRef.current[1] = el)}
                    className="h-[2px] w-[200px] absolute right-0 top-1/2 -translate-y-1/2"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(11, 67, 160, 0.2) 0%, #0B43A0 100%)",
                      transformOrigin: "right center",
                    }}
                  />
                )}

                {/* Sidebar card - responsive width */}
                <div
                  ref={(el) => (sidebarCardsRef.current[1] = el)}
                  className={`bg-white rounded-2xl p-4 shadow-xl border-2 pointer-events-auto ${
                    isMobile
                      ? "w-full"
                      : "w-[255px] absolute right-[180px] top-1/2 -translate-y-1/2"
                  } ${
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
                  <div className="hero-badge text-[#0B43A0] mb-2 uppercase">
                    Problem
                  </div>
                  <h3 className="text-[#0A2540] feature-title mb-2">
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

          {/* Sidebar 3 (for Screen 4: Invoicing) */}
          {visibleSidebars[2] && (
            <div
              className={`absolute ${
                isMobile
                  ? "left-4 top-3/4 w-[calc(100%-2rem)]"
                  : "left-1/2 top-[65%] -translate-y-1/2"
              } z-50`}
              style={!isMobile ? { marginLeft: "155px" } : {}}
            >
              <div className="relative">
                {/* Progress line - hidden on mobile */}
                {!isMobile && (
                  <div
                    ref={(el) => (sidebarLinesRef.current[2] = el)}
                    className="h-[2px] w-[200px] absolute left-0 top-1/2 -translate-y-1/2"
                    style={{
                      background:
                        "linear-gradient(90deg, #0B43A0 0%, rgba(11, 67, 160, 0.2) 100%)",
                      transformOrigin: "left center",
                    }}
                  />
                )}

                {/* Sidebar card - responsive width */}
                <div
                  ref={(el) => (sidebarCardsRef.current[2] = el)}
                  className={`bg-white rounded-2xl p-4 shadow-xl border-2 pointer-events-auto ${
                    isMobile
                      ? "w-full"
                      : "w-[255px] absolute left-[180px] top-1/2 -translate-y-1/2"
                  } ${
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
                  <div className="hero-badge text-[#0B43A0] mb-2 uppercase">
                    Problem
                  </div>
                  <h3 className="text-[#0A2540] feature-title mb-2">
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

          {/* Sidebar 4 (for Screen 5: Compliance) */}
          {visibleSidebars[3] && (
            <div
              className={`absolute ${
                isMobile
                  ? "right-4 top-full w-[calc(100%-2rem)] mt-8"
                  : "left-1/2 top-[65%] -translate-y-1/2"
              } z-50`}
              style={!isMobile ? { marginLeft: "-155px" } : {}}
            >
              <div className="relative">
                {/* Progress line - hidden on mobile */}
                {!isMobile && (
                  <div
                    ref={(el) => (sidebarLinesRef.current[3] = el)}
                    className="h-[2px] w-[200px] absolute right-0 top-1/2 -translate-y-1/2"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(11, 67, 160, 0.2) 0%, #0B43A0 100%)",
                      transformOrigin: "right center",
                    }}
                  />
                )}

                {/* Sidebar card - responsive width */}
                <div
                  ref={(el) => (sidebarCardsRef.current[3] = el)}
                  className={`bg-white rounded-2xl p-4 shadow-xl border-2 pointer-events-auto ${
                    isMobile
                      ? "w-full"
                      : "w-[255px] absolute right-[180px] top-1/2 -translate-y-1/2"
                  } ${
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
                  <div className="hero-badge text-[#0B43A0] mb-2 uppercase">
                    Problem
                  </div>
                  <h3 className="feature-title mb-2">Fragmented compliance</h3>
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
          <div
            className={`min-h-max flex items-center justify-center ${isMobile ? "flex-col" : ""}`}
          >
            {/* Phone mockup - HIDDEN ON MOBILE */}
            <div
              ref={phoneRef}
              className={`relative z-20 transform-gpu ${
                isMobile
                  ? "hidden"
                  : "w-[310px] h-[620px] translate-y-12 sm:translate-y-16 md:translate-y-28"
              }`}
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
                  <Screen1CrossBorder
                    ref={(el) => (screensRef.current[0] = el)}
                    globeRef={globeRef}
                    ringsRef={ringsRef}
                    titleRef={titleRef}
                    subtitleRef={subtitleRef}
                    dotsRef={dotsRef}
                    dollarRefs={dollarRefs}
                  />

                  <Screen2Payments
                    ref={(el) => (screensRef.current[1] = el)}
                    screen2CardsRef={screen2CardsRef}
                  />

                  <Screen3Reconciliation
                    ref={(el) => (screensRef.current[2] = el)}
                    screen3CardsRef={screen3CardsRef}
                  />

                  <Screen4Invoicing
                    ref={(el) => (screensRef.current[3] = el)}
                    screen4CardsRef={screen4CardsRef}
                  />

                  <Screen5Compliance
                    ref={(el) => (screensRef.current[4] = el)}
                    screen5CardsRef={screen5CardsRef}
                  />

                  <Screen6CashFlow
                    ref={(el) => (screensRef.current[5] = el)}
                    screen6CardsRef={screen6CardsRef}
                  />
                </div>
              </div>
            </div>

            {/* MOBILE ALTERNATIVE: Show a simplified view or just sidebars */}
            {isMobile && (
              <div className="w-full space-y-6 ">
                {/* Show sidebar cards as regular cards on mobile */}
                {!animationStarted && (
                  <div className="space-y-4">
                    {[
                      {
                        title: "Expensive & slow collections",
                        description:
                          "Cross-border payments are slow, expensive, and opaque. Hidden FX margins and unpredictable settlement times drain resources.",
                      },
                      {
                        title: "Fragmented reconciliation",
                        description:
                          "Data scattered across banks, gateways, and ERPs creates reconciliation nightmares and operational inefficiency.",
                      },
                      {
                        title: "Manual invoicing",
                        description:
                          "Invoicing is inconsistent across countries, with different formats, currencies, and tax requirements slowing operations.",
                      },
                      {
                        title: "Fragmented compliance",
                        description:
                          "Compliance requirements constantly change by geography and transaction type, creating ongoing operational burden.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200"
                      >
                        <div className="hero-badge text-[#0B43A0] mb-2 uppercase">
                          Problem
                        </div>
                        <h3 className="text-[#0A2540] feature-title mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[#425466] text-muted">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProblemSection;
