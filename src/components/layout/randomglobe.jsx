import React, { lazy, Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ React lazy loading instead of next/dynamic
const World = lazy(() =>
  import("../ui/globe").then((m) => ({ default: m.World })),
);

export function RandomGlobe() {
  const [cycle, setCycle] = useState(0);
  const globeConfig = {
    pointSize: 4,
    globeColor: "#135a85",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000, // 👈 animation duration
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: false, // ✅ globe stays still
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  useEffect(() => {
    const LOOP_GAP = 13000; // 🫧 breathing space between loops

    const interval = setInterval(() => {
      setCycle((c) => c + 1);
    }, globeConfig.arcTime + LOOP_GAP);

    return () => clearInterval(interval);
  }, []);

  const sampleArcs = [
    // Original arcs (order 1-8)
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <div className="relative w-[120vw] flex justify-center overflow-hidden">
      <Suspense
        fallback={<div className="text-center py-20">Loading Globe...</div>}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={cycle}
            className="absolute inset-0 flex justify-center"
            initial={{
              opacity: 0,
              filter: "blur(2px) brightness(1.05)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px) brightness(1)",
              transition: {
                duration: 1.2,
                ease: [0.4, 0, 0.2, 1], // smooth material-like entry
              },
            }}
            exit={{
              opacity: 0,
              filter: "blur(2px) brightness(0.95)",
              transition: {
                duration: 1.2, // 👈 SAME duration
                ease: [0.4, 0, 0.2, 1], // 👈 SAME curve
              },
            }}
          >
            <World data={sampleArcs} globeConfig={globeConfig} />
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}
