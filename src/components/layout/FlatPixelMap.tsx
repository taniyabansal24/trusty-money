import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import './FlatPixelMap.css';

const FlatPixelMap = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = svgRef.current;
    const dotsGroup = svg.querySelector("#dots");
    if (!dotsGroup) return;

    // Clear existing dots
    dotsGroup.innerHTML = "";

    // Create grid of dots
    for (let x = 0; x < 2000; x += 20) {
      for (let y = 0; y < 1000; y += 20) {
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        circle.setAttribute("cx", x.toString());
        circle.setAttribute("cy", y.toString());
        circle.setAttribute("r", "1.5");
        circle.setAttribute("fill", "#e2e8f0");
        circle.classList.add("dot");
        dotsGroup.appendChild(circle);
      }
    }

    // GSAP animation
    const dots = dotsGroup.querySelectorAll(".dot");
    gsap.fromTo(
      dots,
      { opacity: 0.3 },
      {
        opacity: 0.6,
        duration: 3,
        stagger: {
          each: 0.002,
          repeat: -1,
          yoyo: true,
        },
        ease: "sine.inOut",
      }
    );

    // Cleanup function
    return () => {
      gsap.killTweensOf(dots);
    };
  }, []);

  return (
    <div className="map-wrapper">
      <svg
        ref={svgRef}
        className="map-svg"
        viewBox="0 0 2000 1000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g id="dots"></g>
      </svg>
    </div>
  );
};

export default FlatPixelMap;