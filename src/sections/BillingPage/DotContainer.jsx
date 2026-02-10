import React, { useState, useEffect } from "react";
import "./DotAnimations.css";
import { Container } from "../../components/ui";

const DotContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(422464);

  const metricsData = [
    { title: "Usage", value: 422464 },
    { title: "Payments", value: 429231 },
    { title: "Requests", value: 431091 },
    { title: "Verifications", value: 409521 },
    { title: "Orders", value: 443710 },
  ];

  // Desktop chart data
  const desktopChartData = [
    { height: 100.8, opacity: 0.15 }, // 45% height
    { height: 67.2, opacity: 0.08 }, // 30% height
    { height: 123.2, opacity: 0.15 }, // 55% height
    { height: 89.6, opacity: 0.08 }, // 40% height
    { height: 168, opacity: 0.15 }, // 75% height
    { height: 145.6, opacity: 0.08 }, // 65% height
    { height: 100.8, opacity: 0.15 }, // 45% height
    { height: 78.4, opacity: 0.08 }, // 35% height
    { height: 134.4, opacity: 0.15 }, // 60% height
    { height: 112, opacity: 0.08 }, // 50% height
    { height: 179.2, opacity: 0.15 }, // 80% height
    { height: 156.8, opacity: 0.08 }, // 70% height
    { height: 201.6, opacity: 0.15 }, // 90% height
    { height: 123.2, opacity: 0.08 }, // 55% height
  ];

  // Mobile chart data - simplified with fewer bars
  const mobileChartData = [
    { height: 100, opacity: 0.15 }, // ~45% height
    { height: 67, opacity: 0.08 }, // ~30% height
    { height: 123, opacity: 0.15 }, // ~55% height
    { height: 90, opacity: 0.08 }, // ~40% height
    { height: 168, opacity: 0.15 }, // ~75% height
    { height: 146, opacity: 0.08 }, // ~65% height
    { height: 101, opacity: 0.15 }, // ~45% height
    { height: 78, opacity: 0.08 }, // ~35% height
  ];

  const desktopXAxisLabels = [
    "Oct 2",
    "Oct 5",
    "Oct 8",
    "Oct 12",
    "Oct 16",
    "Oct 20",
    "Oct 24",
  ];
  const mobileXAxisLabels = [
    "Oct 12",
    "Oct 14",
    "Oct 16",
    "Oct 18",
    "Oct 20",
    "Oct 22",
    "Oct 24",
  ];

  // Function to format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Animation function
  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current number
      setCurrentNumber((prev) => {
        const nextIndex = (currentIndex + 1) % metricsData.length;
        const nextValue = metricsData[nextIndex].value;

        // Animate from current to next value
        const diff = nextValue - prev;
        const step = Math.ceil(diff / 20); // 20 steps for smooth animation

        let currentStep = 0;
        const animateStep = () => {
          if (currentStep < 20) {
            setCurrentNumber((prevNum) => prevNum + step);
            currentStep++;
            requestAnimationFrame(animateStep);
          } else {
            setCurrentNumber(nextValue);
          }
        };

        animateStep();
        return prev;
      });

      // Change to next index after a short delay
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % metricsData.length);
      }, 500);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Container className="">
      <div className="isolate flex w-full flex-col items-center justify-center md:flex-row">
        {/* Left */}
        <div className="relative h-20 w-[202px] origin-right -translate-x-1/2 translate-y-1/2 rotate-90 lg:translate-x-0 lg:translate-y-0 lg:rotate-0 lg:min-w-[40px]">
          <div className="absolute right-[95%] lg:right-[63%] top-1/2 w-fit -translate-y-1/2">
            <svg
              width="202"
              height="288"
              viewBox="0 0 202 288"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* REMOVED all invisible tracking paths - we don't need them anymore */}

              {/* ================= STATIC GREY PATHS ================= */}
              <path
                d="M0 100H55.022C61.8914 100 68.6451 101.769 74.6324 105.137L120.368 130.863C126.355 134.231 133.109 136 139.978 136H201.5"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 60H48.2171C59.2463 60 69.7861 64.5539 77.3451 72.5854L117.655 115.415C125.214 123.446 135.754 128 146.783 128H201.5"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 188H55.022C61.8914 188 68.6451 186.231 74.6324 182.863L120.368 157.137C126.355 153.769 133.109 152 139.978 152H201.5"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 228H48.2171C59.2463 228 69.7861 223.446 77.3451 215.415L117.655 172.585C125.214 164.554 135.754 160 146.783 160H201.5"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 287H41.7852C56.4929 287 70.0142 278.929 76.994 265.983L118.49 189.017C125.47 176.071 138.991 168 153.699 168H202"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 144L201 145"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 1H41.5946C56.3171 1 69.8495 9.08744 76.823 22.0537L118.177 98.9463C125.15 111.913 138.683 120 153.405 120H201.5"
                strokeLinecap="round"
                stroke="black"
                mask="url(#mask)"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />

              {/* ================= ANIMATED DOTS ================= */}
              {/* Center horizontal dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="2.6s"
                  repeatCount="indefinite"
                  path="M0 144L201 145"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="2.6s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Top curve dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="3.4s"
                  repeatCount="indefinite"
                  path="M0 1H41.5946C56.3171 1 69.8495 9.08744 76.823 22.0537L118.177 98.9463C125.15 111.913 138.683 120 153.405 120H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.2;0.8;1"
                  dur="3.4s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Bottom curve dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  begin="0.5s"
                  path="M0 287H41.7852C56.4929 287 70.0142 278.929 76.994 265.983L118.49 189.017C125.47 176.071 138.991 168 153.699 168H202"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="4s"
                  repeatCount="indefinite"
                  begin="0.5s"
                />
              </circle>

              {/* Top diagonal dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="3.5s"
                  repeatCount="indefinite"
                  begin="0.2s"
                  path="M0 60H48.2171C59.2463 60 69.7861 64.5539 77.3451 72.5854L117.655 115.415C125.214 123.446 135.754 128 146.783 128H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.2;0.8;1"
                  dur="3.5s"
                  repeatCount="indefinite"
                  begin="0.2s"
                />
              </circle>

              {/* Bottom diagonal dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  begin="0.4s"
                  path="M0 228H48.2171C59.2463 228 69.7861 223.446 77.3451 215.415L117.655 172.585C125.214 164.554 135.754 160 146.783 160H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="2.8s"
                  repeatCount="indefinite"
                  begin="0.4s"
                />
              </circle>

              {/* Middle top curve dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="3.2s"
                  repeatCount="indefinite"
                  begin="0.1s"
                  path="M0 100H55.022C61.8914 100 68.6451 101.769 74.6324 105.137L120.368 130.863C126.355 134.231 133.109 136 139.978 136H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                  begin="0.1s"
                />
              </circle>

              {/* Middle bottom curve dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="3.8s"
                  repeatCount="indefinite"
                  begin="0.6s"
                  path="M0 188H55.022C61.8914 188 68.6451 186.231 74.6324 182.863L120.368 157.137C126.355 153.769 133.109 152 139.978 152H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="3.8s"
                  repeatCount="indefinite"
                  begin="0.6s"
                />
              </circle>

              {/* Animated pulse paths (keep these as before) */}
              <path
                d="M0 1H41.5946C56.3171 1 69.8495 9.08744 76.823 22.0537L118.177 98.9463C125.15 111.913 138.683 120 153.405 120H201.5"
                stroke="url(#pulse-0)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 144L201 145"
                stroke="url(#pulse-1)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 287H41.7852C56.4929 287 70.0142 278.929 76.994 265.983L118.49 189.017C125.47 176.071 138.991 168 153.699 168H202"
                stroke="url(#pulse-2)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 60H48.2171C59.2463 60 69.7861 64.5539 77.3451 72.5854L117.655 115.415C125.214 123.446 135.754 128 146.783 128H201.5"
                stroke="url(#pulse-3)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 228H48.2171C59.2463 228 69.7861 223.446 77.3451 215.415L117.655 172.585C125.214 164.554 135.754 160 146.783 160H201.5"
                stroke="url(#pulse-4)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 188H55.022C61.8914 188 68.6451 186.231 74.6324 182.863L120.368 157.137C126.355 153.769 133.109 152 139.978 152H201.5"
                stroke="url(#pulse-5)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 100H55.022C61.8914 100 68.6451 101.769 74.6324 105.137L120.368 130.863C126.355 134.231 133.109 136 139.978 136H201.5"
                stroke="url(#pulse-6)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />

              <defs>
                {/* Keep all your existing gradients and masks */}
                <linearGradient
                  id="maskGrad"
                  x1="202"
                  y1="227"
                  x2="32"
                  y2="227"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <mask id="mask" maskUnits="userSpaceOnUse">
                  <rect width="202" height="288" fill="url(#maskGrad)" />
                </mask>

                {/* Keep all your pulse gradient animations */}
                <linearGradient
                  id="pulse-0"
                  x1="89.9%"
                  y1="0"
                  x2="143.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-50%; 150%"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="x2"
                    values="0%; 200%"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-1"
                  x1="29.9%"
                  y1="0"
                  x2="103.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-70%; 130%"
                    dur="2.5s"
                    repeatCount="indefinite"
                    begin="0.3s"
                  />
                  <animate
                    attributeName="x2"
                    values="-20%; 180%"
                    dur="2.5s"
                    repeatCount="indefinite"
                    begin="0.3s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-2"
                  x1="-30.1%"
                  y1="0"
                  x2="63.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-100%; 100%"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="0.5s"
                  />
                  <animate
                    attributeName="x2"
                    values="-50%; 150%"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="0.5s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-3"
                  x1="59.9%"
                  y1="0"
                  x2="123.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-40%; 160%"
                    dur="3.5s"
                    repeatCount="indefinite"
                    begin="0.2s"
                  />
                  <animate
                    attributeName="x2"
                    values="10%; 210%"
                    dur="3.5s"
                    repeatCount="indefinite"
                    begin="0.2s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-4"
                  x1="-0.1%"
                  y1="0"
                  x2="83.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-80%; 120%"
                    dur="2.8s"
                    repeatCount="indefinite"
                    begin="0.4s"
                  />
                  <animate
                    attributeName="x2"
                    values="-30%; 170%"
                    dur="2.8s"
                    repeatCount="indefinite"
                    begin="0.4s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-5"
                  x1="89.9%"
                  y1="0"
                  x2="143.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-50%; 150%"
                    dur="3.2s"
                    repeatCount="indefinite"
                    begin="0.1s"
                  />
                  <animate
                    attributeName="x2"
                    values="0%; 200%"
                    dur="3.2s"
                    repeatCount="indefinite"
                    begin="0.1s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-6"
                  x1="29.9%"
                  y1="0"
                  x2="103.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-60%; 140%"
                    dur="3.8s"
                    repeatCount="indefinite"
                    begin="0.6s"
                  />
                  <animate
                    attributeName="x2"
                    values="-10%; 190%"
                    dur="3.8s"
                    repeatCount="indefinite"
                    begin="0.6s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        {/* Top */}
        <div className="hidden lg:block relative h-20 w-[202px] origin-right -translate-x-1/2 translate-y-1/2 rotate-90 md:translate-x-0 md:translate-y-0 lg:min-w-[40px]">
          <div className="absolute right-[63%] -top-[4%] w-fit">
            {/* Use the same SVG structure as above with adjusted paths */}
            <svg
              width="202"
              height="288"
              viewBox="0 0 202 288"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* REMOVED all invisible tracking paths - we don't need them anymore */}

              {/* ================= STATIC GREY PATHS ================= */}
              <path
                d="M0 100H55.022C61.8914 100 68.6451 101.769 74.6324 105.137L120.368 130.863C126.355 134.231 133.109 136 139.978 136H201.5"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 60H48.2171C59.2463 60 69.7861 64.5539 77.3451 72.5854L117.655 115.415C125.214 123.446 135.754 128 146.783 128H201.5"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 188H55.022C61.8914 188 68.6451 186.231 74.6324 182.863L120.368 157.137C126.355 153.769 133.109 152 139.978 152H201.5"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 228H48.2171C59.2463 228 69.7861 223.446 77.3451 215.415L117.655 172.585C125.214 164.554 135.754 160 146.783 160H201.5"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 287H41.7852C56.4929 287 70.0142 278.929 76.994 265.983L118.49 189.017C125.47 176.071 138.991 168 153.699 168H202"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 144L201 145"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 1H41.5946C56.3171 1 69.8495 9.08744 76.823 22.0537L118.177 98.9463C125.15 111.913 138.683 120 153.405 120H201.5"
                strokeLinecap="round"
                stroke="black"
                mask="url(#mask)"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />

              {/* ================= ANIMATED DOTS ================= */}
              {/* Center horizontal dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="2.6s"
                  repeatCount="indefinite"
                  path="M0 144L201 145"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="2.6s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Top curve dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="3.4s"
                  repeatCount="indefinite"
                  path="M0 1H41.5946C56.3171 1 69.8495 9.08744 76.823 22.0537L118.177 98.9463C125.15 111.913 138.683 120 153.405 120H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.2;0.8;1"
                  dur="3.4s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Bottom curve dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  begin="0.5s"
                  path="M0 287H41.7852C56.4929 287 70.0142 278.929 76.994 265.983L118.49 189.017C125.47 176.071 138.991 168 153.699 168H202"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="4s"
                  repeatCount="indefinite"
                  begin="0.5s"
                />
              </circle>

              {/* Top diagonal dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="3.5s"
                  repeatCount="indefinite"
                  begin="0.2s"
                  path="M0 60H48.2171C59.2463 60 69.7861 64.5539 77.3451 72.5854L117.655 115.415C125.214 123.446 135.754 128 146.783 128H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.2;0.8;1"
                  dur="3.5s"
                  repeatCount="indefinite"
                  begin="0.2s"
                />
              </circle>

              {/* Bottom diagonal dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  begin="0.4s"
                  path="M0 228H48.2171C59.2463 228 69.7861 223.446 77.3451 215.415L117.655 172.585C125.214 164.554 135.754 160 146.783 160H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="2.8s"
                  repeatCount="indefinite"
                  begin="0.4s"
                />
              </circle>

              {/* Middle top curve dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="3.2s"
                  repeatCount="indefinite"
                  begin="0.1s"
                  path="M0 100H55.022C61.8914 100 68.6451 101.769 74.6324 105.137L120.368 130.863C126.355 134.231 133.109 136 139.978 136H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                  begin="0.1s"
                />
              </circle>

              {/* Middle bottom curve dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="3.8s"
                  repeatCount="indefinite"
                  begin="0.6s"
                  path="M0 188H55.022C61.8914 188 68.6451 186.231 74.6324 182.863L120.368 157.137C126.355 153.769 133.109 152 139.978 152H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="3.8s"
                  repeatCount="indefinite"
                  begin="0.6s"
                />
              </circle>

              {/* Animated pulse paths (keep these as before) */}
              <path
                d="M0 1H41.5946C56.3171 1 69.8495 9.08744 76.823 22.0537L118.177 98.9463C125.15 111.913 138.683 120 153.405 120H201.5"
                stroke="url(#pulse-0)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 144L201 145"
                stroke="url(#pulse-1)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 287H41.7852C56.4929 287 70.0142 278.929 76.994 265.983L118.49 189.017C125.47 176.071 138.991 168 153.699 168H202"
                stroke="url(#pulse-2)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 60H48.2171C59.2463 60 69.7861 64.5539 77.3451 72.5854L117.655 115.415C125.214 123.446 135.754 128 146.783 128H201.5"
                stroke="url(#pulse-3)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 228H48.2171C59.2463 228 69.7861 223.446 77.3451 215.415L117.655 172.585C125.214 164.554 135.754 160 146.783 160H201.5"
                stroke="url(#pulse-4)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 188H55.022C61.8914 188 68.6451 186.231 74.6324 182.863L120.368 157.137C126.355 153.769 133.109 152 139.978 152H201.5"
                stroke="url(#pulse-5)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 100H55.022C61.8914 100 68.6451 101.769 74.6324 105.137L120.368 130.863C126.355 134.231 133.109 136 139.978 136H201.5"
                stroke="url(#pulse-6)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />

              <defs>
                {/* Keep all your existing gradients and masks */}
                <linearGradient
                  id="maskGrad"
                  x1="202"
                  y1="227"
                  x2="32"
                  y2="227"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <mask id="mask" maskUnits="userSpaceOnUse">
                  <rect width="202" height="288" fill="url(#maskGrad)" />
                </mask>

                {/* Keep all your pulse gradient animations */}
                <linearGradient
                  id="pulse-0"
                  x1="89.9%"
                  y1="0"
                  x2="143.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-50%; 150%"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="x2"
                    values="0%; 200%"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-1"
                  x1="29.9%"
                  y1="0"
                  x2="103.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-70%; 130%"
                    dur="2.5s"
                    repeatCount="indefinite"
                    begin="0.3s"
                  />
                  <animate
                    attributeName="x2"
                    values="-20%; 180%"
                    dur="2.5s"
                    repeatCount="indefinite"
                    begin="0.3s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-2"
                  x1="-30.1%"
                  y1="0"
                  x2="63.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-100%; 100%"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="0.5s"
                  />
                  <animate
                    attributeName="x2"
                    values="-50%; 150%"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="0.5s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-3"
                  x1="59.9%"
                  y1="0"
                  x2="123.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-40%; 160%"
                    dur="3.5s"
                    repeatCount="indefinite"
                    begin="0.2s"
                  />
                  <animate
                    attributeName="x2"
                    values="10%; 210%"
                    dur="3.5s"
                    repeatCount="indefinite"
                    begin="0.2s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-4"
                  x1="-0.1%"
                  y1="0"
                  x2="83.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-80%; 120%"
                    dur="2.8s"
                    repeatCount="indefinite"
                    begin="0.4s"
                  />
                  <animate
                    attributeName="x2"
                    values="-30%; 170%"
                    dur="2.8s"
                    repeatCount="indefinite"
                    begin="0.4s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-5"
                  x1="89.9%"
                  y1="0"
                  x2="143.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-50%; 150%"
                    dur="3.2s"
                    repeatCount="indefinite"
                    begin="0.1s"
                  />
                  <animate
                    attributeName="x2"
                    values="0%; 200%"
                    dur="3.2s"
                    repeatCount="indefinite"
                    begin="0.1s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-6"
                  x1="29.9%"
                  y1="0"
                  x2="103.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-60%; 140%"
                    dur="3.8s"
                    repeatCount="indefinite"
                    begin="0.6s"
                  />
                  <animate
                    attributeName="x2"
                    values="-10%; 190%"
                    dur="3.8s"
                    repeatCount="indefinite"
                    begin="0.6s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        {/* Right */}
        <div className="hidden lg:block  relative h-20 w-[202px] origin-right -translate-x-1/2 translate-y-1/2 rotate-180 md:translate-x-0 md:translate-y-0 lg:min-w-[40px]">
          <div className="absolute left-[38%] top-1/2 w-fit -translate-y-1/2">
            {/* Use the same SVG structure as above with adjusted paths */}
            <svg
              width="202"
              height="288"
              viewBox="0 0 202 288"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* REMOVED all invisible tracking paths - we don't need them anymore */}

              {/* ================= STATIC GREY PATHS ================= */}
              <path
                d="M0 100H55.022C61.8914 100 68.6451 101.769 74.6324 105.137L120.368 130.863C126.355 134.231 133.109 136 139.978 136H201.5"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 60H48.2171C59.2463 60 69.7861 64.5539 77.3451 72.5854L117.655 115.415C125.214 123.446 135.754 128 146.783 128H201.5"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 188H55.022C61.8914 188 68.6451 186.231 74.6324 182.863L120.368 157.137C126.355 153.769 133.109 152 139.978 152H201.5"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 228H48.2171C59.2463 228 69.7861 223.446 77.3451 215.415L117.655 172.585C125.214 164.554 135.754 160 146.783 160H201.5"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 287H41.7852C56.4929 287 70.0142 278.929 76.994 265.983L118.49 189.017C125.47 176.071 138.991 168 153.699 168H202"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 144L201 145"
                stroke="black"
                mask="url(#mask)"
                strokeLinecap="round"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />
              <path
                d="M0 1H41.5946C56.3171 1 69.8495 9.08744 76.823 22.0537L118.177 98.9463C125.15 111.913 138.683 120 153.405 120H201.5"
                strokeLinecap="round"
                stroke="black"
                mask="url(#mask)"
                strokeOpacity="0.25"
                strokeWidth="2"
                strokeDasharray="0.1 3"
              />

              {/* ================= ANIMATED DOTS ================= */}
              {/* Center horizontal dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="2.6s"
                  repeatCount="indefinite"
                  path="M0 144L201 145"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="2.6s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Top curve dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="3.4s"
                  repeatCount="indefinite"
                  path="M0 1H41.5946C56.3171 1 69.8495 9.08744 76.823 22.0537L118.177 98.9463C125.15 111.913 138.683 120 153.405 120H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.2;0.8;1"
                  dur="3.4s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Bottom curve dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  begin="0.5s"
                  path="M0 287H41.7852C56.4929 287 70.0142 278.929 76.994 265.983L118.49 189.017C125.47 176.071 138.991 168 153.699 168H202"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="4s"
                  repeatCount="indefinite"
                  begin="0.5s"
                />
              </circle>

              {/* Top diagonal dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="3.5s"
                  repeatCount="indefinite"
                  begin="0.2s"
                  path="M0 60H48.2171C59.2463 60 69.7861 64.5539 77.3451 72.5854L117.655 115.415C125.214 123.446 135.754 128 146.783 128H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.2;0.8;1"
                  dur="3.5s"
                  repeatCount="indefinite"
                  begin="0.2s"
                />
              </circle>

              {/* Bottom diagonal dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  begin="0.4s"
                  path="M0 228H48.2171C59.2463 228 69.7861 223.446 77.3451 215.415L117.655 172.585C125.214 164.554 135.754 160 146.783 160H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="2.8s"
                  repeatCount="indefinite"
                  begin="0.4s"
                />
              </circle>

              {/* Middle top curve dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="3.2s"
                  repeatCount="indefinite"
                  begin="0.1s"
                  path="M0 100H55.022C61.8914 100 68.6451 101.769 74.6324 105.137L120.368 130.863C126.355 134.231 133.109 136 139.978 136H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="3.2s"
                  repeatCount="indefinite"
                  begin="0.1s"
                />
              </circle>

              {/* Middle bottom curve dot */}
              <circle r="3.5" fill="#073F9E">
                <animateMotion
                  dur="3.8s"
                  repeatCount="indefinite"
                  begin="0.6s"
                  path="M0 188H55.022C61.8914 188 68.6451 186.231 74.6324 182.863L120.368 157.137C126.355 153.769 133.109 152 139.978 152H201.5"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  keyTimes="0;0.15;0.85;1"
                  dur="3.8s"
                  repeatCount="indefinite"
                  begin="0.6s"
                />
              </circle>

              {/* Animated pulse paths (keep these as before) */}
              <path
                d="M0 1H41.5946C56.3171 1 69.8495 9.08744 76.823 22.0537L118.177 98.9463C125.15 111.913 138.683 120 153.405 120H201.5"
                stroke="url(#pulse-0)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 144L201 145"
                stroke="url(#pulse-1)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 287H41.7852C56.4929 287 70.0142 278.929 76.994 265.983L118.49 189.017C125.47 176.071 138.991 168 153.699 168H202"
                stroke="url(#pulse-2)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 60H48.2171C59.2463 60 69.7861 64.5539 77.3451 72.5854L117.655 115.415C125.214 123.446 135.754 128 146.783 128H201.5"
                stroke="url(#pulse-3)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 228H48.2171C59.2463 228 69.7861 223.446 77.3451 215.415L117.655 172.585C125.214 164.554 135.754 160 146.783 160H201.5"
                stroke="url(#pulse-4)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 188H55.022C61.8914 188 68.6451 186.231 74.6324 182.863L120.368 157.137C126.355 153.769 133.109 152 139.978 152H201.5"
                stroke="url(#pulse-5)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />
              <path
                d="M0 100H55.022C61.8914 100 68.6451 101.769 74.6324 105.137L120.368 130.863C126.355 134.231 133.109 136 139.978 136H201.5"
                stroke="url(#pulse-6)"
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth="2"
                strokeDasharray="0.1 3"
                mask="url(#mask)"
              />

              <defs>
                {/* Keep all your existing gradients and masks */}
                <linearGradient
                  id="maskGrad"
                  x1="202"
                  y1="227"
                  x2="32"
                  y2="227"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <mask id="mask" maskUnits="userSpaceOnUse">
                  <rect width="202" height="288" fill="url(#maskGrad)" />
                </mask>

                {/* Keep all your pulse gradient animations */}
                <linearGradient
                  id="pulse-0"
                  x1="89.9%"
                  y1="0"
                  x2="143.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-50%; 150%"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="x2"
                    values="0%; 200%"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-1"
                  x1="29.9%"
                  y1="0"
                  x2="103.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-70%; 130%"
                    dur="2.5s"
                    repeatCount="indefinite"
                    begin="0.3s"
                  />
                  <animate
                    attributeName="x2"
                    values="-20%; 180%"
                    dur="2.5s"
                    repeatCount="indefinite"
                    begin="0.3s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-2"
                  x1="-30.1%"
                  y1="0"
                  x2="63.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-100%; 100%"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="0.5s"
                  />
                  <animate
                    attributeName="x2"
                    values="-50%; 150%"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="0.5s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-3"
                  x1="59.9%"
                  y1="0"
                  x2="123.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-40%; 160%"
                    dur="3.5s"
                    repeatCount="indefinite"
                    begin="0.2s"
                  />
                  <animate
                    attributeName="x2"
                    values="10%; 210%"
                    dur="3.5s"
                    repeatCount="indefinite"
                    begin="0.2s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-4"
                  x1="-0.1%"
                  y1="0"
                  x2="83.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-80%; 120%"
                    dur="2.8s"
                    repeatCount="indefinite"
                    begin="0.4s"
                  />
                  <animate
                    attributeName="x2"
                    values="-30%; 170%"
                    dur="2.8s"
                    repeatCount="indefinite"
                    begin="0.4s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-5"
                  x1="89.9%"
                  y1="0"
                  x2="143.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-50%; 150%"
                    dur="3.2s"
                    repeatCount="indefinite"
                    begin="0.1s"
                  />
                  <animate
                    attributeName="x2"
                    values="0%; 200%"
                    dur="3.2s"
                    repeatCount="indefinite"
                    begin="0.1s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>

                <linearGradient
                  id="pulse-6"
                  x1="29.9%"
                  y1="0"
                  x2="103.2667%"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <animate
                    attributeName="x1"
                    values="-60%; 140%"
                    dur="3.8s"
                    repeatCount="indefinite"
                    begin="0.6s"
                  />
                  <animate
                    attributeName="x2"
                    values="-10%; 190%"
                    dur="3.8s"
                    repeatCount="indefinite"
                    begin="0.6s"
                  />
                  <stop offset="0.35" stopColor="#073F9E" stopOpacity="0" />
                  <stop offset="0.45" stopColor="#073F9E" />
                  <stop offset="0.55" stopColor="#073F9E" />
                  <stop offset="0.65" stopColor="#073F9E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Chart Container */}
        <div className="absolute w-full max-w-[460px]">
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[100%] md:h-[110%] w-[100%] md:w-[110%] -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-3xl bg-gradient-to-r from-blue-600/30 via-50% to-indigo-600/10 to-90% opacity-60 blur-xl" />


            <div
              className="relative z-10 w-[90%] sm:w-full rounded-lg bg-white mx-auto"
              style={{
                boxShadow:
                  "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px",
              }}
            >
              <div className="flex items-center justify-between border-b border-[#e4e8ef] px-4 py-3">
                <div className="relative text-sm font-bold h-6">
                  {metricsData.map((metric, index) => (
                    <p
                      key={metric.title}
                      className={`absolute top-0 transition-all duration-500 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {metric.title}
                    </p>
                  ))}
                </div>
                <p className="text-sm font-extrabold tabular-nums transition-all duration-500">
                  ${formatNumber(currentNumber)}
                </p>
              </div>

              {/* Chart Content */}
              <div className="flex h-[260px] items-center justify-center px-4 pb-8">
                <div className="w-full">
                  {/* Mobile Chart */}
                  <div className="w-full sm:hidden">
                    <div className="relative w-full h-[170px]">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 flex flex-col justify-between h-[170px] text-[10px] text-[#90A1B9]">
                        <span className="text-right pr-2">4,500</span>
                        <span className="text-right pr-2">3,000</span>
                        <span className="text-right pr-2">1,500</span>
                        <span className="text-right pr-2">0</span>
                      </div>

                      {/* Chart bars container */}
                      <div className="absolute left-8 top-0 w-[90%] pr-4">
                        <div className="relative flex h-[170px] items-end justify-between">
                          {/* Horizontal grid lines */}
                          <div className="absolute inset-0 flex flex-col justify-between">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={`mobile-grid-${i}`}
                                className={`h-px w-full border-t border-dashed border-[#E4E8EF] ${
                                  i === 3 ? "invisible" : ""
                                }`}
                              />
                            ))}
                          </div>

                          {/* Chart bars */}
                          {mobileChartData.map((bar, index) => (
                            <div
                              key={`mobile-bar-${index}`}
                              className="flex flex-col items-center"
                              style={{
                                width: "16px",
                              }}
                            >
                              {/* Bar container */}
                              <div
                                className="flex flex-col items-start w-[14px] rounded-t-lg"
                                style={{
                                  height: `${bar.height * 0.75}px`, // Scale down for mobile
                                  backgroundColor: "#073F9E",
                                  opacity: bar.opacity,
                                }}
                              >
                                {/* Top colored section */}
                                <div
                                  className="w-[14px] h-[3px] rounded-t-lg"
                                  style={{
                                    backgroundColor: "#073F9E",
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom border line */}
                        <div className="mt-2 h-px w-full border-b border-[#D1D9E4]" />

                        {/* X-axis labels */}
                        <div className="flex justify-between px-2 pt-2">
                          {mobileXAxisLabels.map((label, index) => (
                            <span
                              key={`mobile-label-${index}`}
                              className="text-[10px] text-[#90A1B9] whitespace-nowrap"
                              style={{
                                fontFamily: "Arial, sans-serif",
                              }}
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Chart */}
                  <div className="hidden w-full sm:block">
                    <div className="relative w-full h-[224px]">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 flex flex-col justify-between h-[224px] text-[10px] text-[#90A1B9]">
                        <span className="text-right pr-2">4,500</span>
                        <span className="text-right pr-2">3,000</span>
                        <span className="text-right pr-2">1,500</span>
                        <span className="text-right pr-2">0</span>
                      </div>

                      {/* Chart bars container */}
                      <div className="absolute left-[40px] top-0 w-[344.4px] h-[224px]">
                        {/* Chart bars */}
                        {desktopChartData.map((bar, index) => (
                          <div
                            key={`desktop-bar-${index}`}
                            className="absolute flex flex-col items-start"
                            style={{
                              width: "23.46px",
                              height: "224px",
                              left: `${index * 27.46}px`,
                              top: "0px",
                            }}
                          >
                            {/* Bar container */}
                            <div
                              className="flex flex-col items-start w-[19.46px] rounded-t-lg"
                              style={{
                                height: `${bar.height}px`,
                                backgroundColor: "#073F9E",
                                opacity: bar.opacity,
                                marginLeft: "2px",
                                marginTop: `${224 - bar.height}px`,
                              }}
                            >
                              {/* Top colored section */}
                              <div
                                className="w-[19.46px] h-[4px] rounded-t-lg"
                                style={{
                                  backgroundColor: "#073F9E",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* X-axis labels */}
                      <div className="absolute left-[40px] top-[232px] w-[70px] flex justify-between">
                        {desktopXAxisLabels.map((label, index) => (
                          <div
                            key={`desktop-label-${index}`}
                            className="text-[10px] text-[#90A1B9] font-normal"
                            style={{
                              fontFamily: "Arial, sans-serif",
                              textAlign: "center",
                              width:
                                index === 3 ||
                                index === 4 ||
                                index === 5 ||
                                index === 6
                                  ? "30px"
                                  : "24px",
                              marginLeft:
                                index === 0
                                  ? "7.64px"
                                  : index === 1
                                    ? "54.56px"
                                    : index === 2
                                      ? "101.49px"
                                      : index === 3
                                        ? "146.4px"
                                        : index === 4
                                          ? "193.3px"
                                          : index === 5
                                            ? "239.47px"
                                            : "286.3px",
                              transform: "translateX(-50%)",
                              position: "absolute",
                              left:
                                index === 0
                                  ? "0%"
                                  : index === 1
                                    ? "18.5%"
                                    : index === 2
                                      ? "37%"
                                      : index === 3
                                        ? "55.5%"
                                        : index === 4
                                          ? "74%"
                                          : index === 5
                                            ? "92.5%"
                                            : "110%",
                            }}
                          >
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DotContainer;
