import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Problem = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const phoneRef = useRef(null);
  const screenRef = useRef(null);
  const problemsRef = useRef([]);
  const progressDotsRef = useRef([]);
  const progressBarRef = useRef(null);
  const screenContentRefs = useRef([]);
  const [activeProblem, setActiveProblem] = useState(0);

  const problems = [
    {
      id: 1,
      title: "Manual invoicing",
      description: "Invoicing is manual and inconsistent across countries.",
      side: "left",
      color: "blue",
      icon: "📄",
    },
    {
      id: 2,
      title: "Payment delays",
      description: "Late payments cause cash flow issues for businesses.",
      side: "right",
      color: "green",
      icon: "⏰",
    },
    {
      id: 3,
      title: "Currency complexity",
      description: "Managing multiple currencies adds unnecessary overhead.",
      side: "left",
      color: "purple",
      icon: "💱",
    },
    {
      id: 4,
      title: "Compliance risks",
      description:
        "Keeping up with tax regulations across borders is challenging.",
      side: "right",
      color: "orange",
      icon: "⚠️",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced pin with better spacing
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1000%",
        pin: pinRef.current,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        markers: false,
      });

      // Phone entrance animation - more elegant
      const phoneEntrance = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 10%",
          scrub: 0.8,
          ease: "power2.out",
        },
      });

      // Initialize screen content - hide all except first
      gsap.set(screenContentRefs.current, {
        opacity: 0,
        y: 30,
        scale: 0.95,
        pointerEvents: "none",
      });

      phoneEntrance
        .fromTo(
          phoneRef.current,
          {
            opacity: 0,
            scale: 0.8,
            y: 30,
            rotationX: 15,
            filter: "blur(15px)",
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationX: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
          }
        )
        .fromTo(
          screenRef.current,
          {
            opacity: 0,
            scale: 0.9,
            y: 20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          "-=0.6"
        );

      // Continuous floating animation for phone
      gsap.to(phoneRef.current, {
        y: "+=15",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

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

      // Animate each problem card
      problems.forEach((problem, index) => {
        const problemEl = problemsRef.current[index];
        const progressDot = progressDotsRef.current[index];
        const screenContent = screenContentRefs.current[index];

        if (!problemEl) return;

        const startPercent = 15 + index * 20;
        const endPercent = startPercent + 15;
        const midPercent = startPercent + 7.5;

        // Problem card timeline
        const problemTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${startPercent}%`,
            end: `${endPercent}%`,
            scrub: 0.8,
            toggleActions: "play none none reverse",
          },
        });

        // Card entrance
        problemTimeline
          .fromTo(
            problemEl,
            {
              opacity: 0,
              y: index % 2 === 0 ? 150 : -150,
              x: index % 2 === 0 ? -100 : 100,
              scale: 0.7,
              rotation: index % 2 === 0 ? -10 : 10,
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              rotation: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "power2.out",
            }
          )
          // Active state
          .to(
            problemEl,
            {
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              duration: 0.5,
              ease: "power2.inOut",
            },
            "-=0.3"
          )
          // Exit animation
          .to(
            problemEl,
            {
              opacity: 0,
              y: index % 2 === 0 ? -150 : 150,
              x: index % 2 === 0 ? -50 : 50,
              scale: 0.8,
              rotation: index % 2 === 0 ? 10 : -10,
              filter: "blur(10px)",
              duration: 0.8,
              ease: "power2.in",
            },
            "+=0.5"
          );

        // Progress dot animation
        const dotTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${startPercent}%`,
            end: `${endPercent - 5}%`,
            scrub: 0.5,
          },
        });

        dotTimeline
          .to(progressDot, {
            scale: 1.5,
            backgroundColor: getColor(problem.color),
            duration: 0.3,
            ease: "power2.out",
          })
          .to(
            progressDot,
            {
              scale: 1,
              duration: 0.3,
              ease: "power2.in",
            },
            "+=0.2"
          );

        // Screen content update for this problem
        const screenTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${midPercent - 3}%`,
            end: `${midPercent + 3}%`,
            scrub: true,
          },
        });

        // hide all
        screenTimeline.to(screenContentRefs.current, {
          opacity: 0,
          y: -20,
          scale: 0.95,
          pointerEvents: "none",
          duration: 0.2,
        });

        // show active
        screenTimeline.to(screenContent, {
          opacity: 1,
          y: 0,
          scale: 1,
          pointerEvents: "auto",
          duration: 0.2,
          ease: "power2.out",
        });

        // Background color change for this problem
        gsap.to(sectionRef.current, {
          background: getBackgroundColor(problem.color),
          duration: 2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${midPercent - 5}%`,
            end: `${midPercent + 5}%`,
            scrub: 1,
          },
        });
      });

      // Initial screen message animation
      const initialMessageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end: "top 15%",
          scrub: 0.5,
          onLeave: () => {
            gsap.to(".screen-message", {
              opacity: 0,
              y: -20,
              duration: 0.3,
              ease: "power2.in",
            });
          },
          onEnterBack: () => {
            gsap.to(".screen-message", {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const getColor = (color) => {
    const colors = {
      blue: "#3b82f6",
      green: "#10b981",
      purple: "#8b5cf6",
      orange: "#f97316",
    };
    return colors[color] || "#3b82f6";
  };

  const getBackgroundColor = (color) => {
    const colors = {
      blue: "linear-gradient(to bottom right, #f0f9ff, #eff6ff, #f8fafc)",
      green: "linear-gradient(to bottom right, #f0fdf4, #ecfdf5, #f8fafc)",
      purple: "linear-gradient(to bottom right, #faf5ff, #fdf4ff, #f8fafc)",
      orange: "linear-gradient(to bottom right, #fff7ed, #fefce8, #f8fafc)",
    };
    return (
      colors[color] ||
      "linear-gradient(to bottom right, #f8fafc, #f0f9ff, #fefce8)"
    );
  };

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[500vh] bg-gradient-to-br from-slate-100 via-white to-orange-50 overflow-hidden"
    >
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
          className="relative w-[360px] h-[720px] z-20 transform-gpu"
        >
          {/* Glow effect */}
          <div className="absolute inset-[-40px] bg-gradient-to-br from-blue-400/10 via-transparent to-orange-400/10 blur-3xl rounded-[80px]" />

          {/* Outer phone frame */}
          <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-[50px] border-[18px] border-gray-100 shadow-2xl overflow-hidden">
            {/* Screen notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-7 bg-gray-100 rounded-b-2xl z-20 shadow-sm" />

            {/* Screen content */}
            <div
              ref={screenRef}
              className="absolute inset-[2px] bg-gradient-to-br from-gray-50 to-white rounded-[34px] flex flex-col items-center justify-center p-8 overflow-hidden"
            >
              <h1 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight text-center">
                PROBLEMS WE SOLVE
              </h1>

              {/* Progress indicators */}
              <div className="flex flex-col items-center gap-3 mb-8">
                <div className="relative h-80 w-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    ref={progressBarRef}
                    className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-blue-500 to-purple-500"
                  />
                </div>
                <div className=" absolute top-[30%] flex flex-col gap-14 mt-8">
                  {problems.map((_, i) => (
                    <div
                      key={i}
                      ref={(el) => (progressDotsRef.current[i] = el)}
                      className="relative w-3 h-3 rounded-full bg-gray-300 transition-all duration-300 z-10"
                    />
                  ))}
                </div>
              </div>

              {/* Initial screen message */}
              <div className="text-center px-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Scroll to discover how we solve common challenges
                </p>
              </div>

              {/* Dynamic screen content for each problem */}
              {problems.map((problem, index) => (
                <div
                  key={problem.id}
                  ref={(el) => (screenContentRefs.current[index] = el)}
                  className="screen-content absolute inset-0 flex items-center justify-center p-8 opacity-0 pointer-events-none"
                >
                  <div className="text-center">
                    <div
                      className="text-4xl mb-4 animate-pulse"
                      style={{ animationDuration: "2s" }}
                    >
                      {problem.icon}
                    </div>
                    <h3 className={`font-bold text-2xl text-gray-900  px-4 py-2 rounded-full ${
                          problem.color === "blue"
                            ? "bg-blue-50 text-blue-700"
                            : problem.color === "green"
                            ? "bg-green-50 text-green-700"
                            : problem.color === "purple"
                            ? "bg-purple-50 text-purple-700"
                            : "bg-orange-50 text-orange-700"
                        }`}>
                      {problem.title}
                    </h3>
                    <div className="mt-6">
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                          problem.color === "blue"
                            ? "bg-blue-50 text-blue-700"
                            : problem.color === "green"
                            ? "bg-green-50 text-green-700"
                            : problem.color === "purple"
                            ? "bg-purple-50 text-purple-700"
                            : "bg-orange-50 text-orange-700"
                        }`}
                      >
                        
                        <span className="text-xs font-semibold">
                          Problem {problem.id}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Side buttons */}
            <div className="absolute right-[-14px] top-32 w-3 h-24 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full shadow-sm" />
            <div className="absolute right-[-14px] top-52 w-3 h-14 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full shadow-sm" />
          </div>
        </div>

        {/* Problem cards */}
        {problems.map((problem, index) => (
          <div
            key={problem.id}
            ref={(el) => (problemsRef.current[index] = el)}
            className={`absolute ${
              problem.side === "left" ? "left-[6%] " : "right-[6%] "
            } top-1/2 -translate-y-1/2 w-[320px] lg:w-[380px] transform-gpu opacity-0`}
          >
            <div className="bg-white/95 backdrop-blur-sm border border-gray-200/80 rounded-2xl p-8 shadow-xl transition-all duration-300 overflow-hidden">
              {/* Color accent */}
              <div
                className={`absolute top-0 left-0 w-2 h-full ${
                  problem.color === "blue"
                    ? "bg-gradient-to-b from-blue-500 to-blue-600"
                    : problem.color === "green"
                    ? "bg-gradient-to-b from-green-500 to-green-600"
                    : problem.color === "purple"
                    ? "bg-gradient-to-b from-purple-500 to-purple-600"
                    : "bg-gradient-to-b from-orange-500 to-orange-600"
                }`}
              />

              <div className="flex items-start gap-4 mb-4 pl-2">
                <span
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    problem.color === "blue"
                      ? "bg-blue-100 text-blue-600"
                      : problem.color === "green"
                      ? "bg-green-100 text-green-600"
                      : problem.color === "purple"
                      ? "bg-purple-100 text-purple-600"
                      : "bg-orange-100 text-orange-600"
                  } text-xl font-bold shadow-inner flex-shrink-0`}
                >
                  {problem.icon}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        problem.color === "blue"
                          ? "bg-blue-50 text-blue-700"
                          : problem.color === "green"
                          ? "bg-green-50 text-green-700"
                          : problem.color === "purple"
                          ? "bg-purple-50 text-purple-700"
                          : "bg-orange-50 text-orange-700"
                      }`}
                    >
                      Problem #{problem.id}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl">
                    {problem.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed pl-16">
                {problem.description}
              </p>

              {/* Animated underline */}
              <div className="mt-6 pl-16">
                <div
                  className={`w-16 h-1 rounded-full ${
                    problem.color === "blue"
                      ? "bg-gradient-to-r from-blue-400 to-blue-500"
                      : problem.color === "green"
                      ? "bg-gradient-to-r from-green-400 to-green-500"
                      : problem.color === "purple"
                      ? "bg-gradient-to-r from-purple-400 to-purple-500"
                      : "bg-gradient-to-r from-orange-400 to-orange-500"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-[2px] h-[2px] rounded-full ${
              i % 3 === 0
                ? "bg-blue-400/30"
                : i % 3 === 1
                ? "bg-purple-400/30"
                : "bg-orange-400/30"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Active indicator
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Active:</span>
            <span className="font-semibold text-gray-900">
              {problems[activeProblem]?.title}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {problems.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeProblem
                    ? `w-6 ${getColor(problems[activeProblem].color)}`
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div> */}

      {/* Add CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          33% {
            transform: translateY(-30px) translateX(15px) scale(1.2);
          }
          66% {
            transform: translateY(15px) translateX(-10px) scale(0.8);
          }
        }

        .sticky {
          will-change: transform;
        }

        .transform-gpu {
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        @keyframes subtle-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .animate-pulse {
          animation: subtle-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Problem;
