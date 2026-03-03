

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3, BufferGeometry, Sphere } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "../../data/globe.json";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

let numbersOfRings = [0];

// OVERRIDE: Monkey-patch the BufferGeometry.computeBoundingSphere method to prevent NaN errors
if (typeof window !== 'undefined') {
  const originalComputeBoundingSphere = BufferGeometry.prototype.computeBoundingSphere;
  
  BufferGeometry.prototype.computeBoundingSphere = function() {
    try {
      // Check if position attribute exists and has valid values
      const position = this.attributes.position;
      if (position && position.array) {
        const array = position.array;
        let hasNaN = false;
        
        // Quick check for NaN values
        for (let i = 0; i < Math.min(array.length, 100); i += 3) {
          if (isNaN(array[i]) || isNaN(array[i+1]) || isNaN(array[i+2])) {
            hasNaN = true;
            break;
          }
        }
        
        if (hasNaN) {
          // Create a default bounding sphere instead of crashing
          this.boundingSphere = new Sphere(new Vector3(0, 0, 0), 100);
          return this.boundingSphere;
        }
      }
      
      // Call original method if everything looks fine
      return originalComputeBoundingSphere.call(this);
    } catch (e) {
      // If any error occurs, create a default bounding sphere
      this.boundingSphere = new Sphere(new Vector3(0, 0, 0), 100);
      return this.boundingSphere;
    }
  };
}

// Helper function to validate coordinates
function isValidCoordinate(lat, lng) {
  if (lat === undefined || lng === undefined) return false;
  if (lat === null || lng === null) return false;
  
  const numLat = Number(lat);
  const numLng = Number(lng);
  
  return (
    !isNaN(numLat) && 
    !isNaN(numLng) && 
    isFinite(numLat) && 
    isFinite(numLng) &&
    Math.abs(numLat) <= 90 && 
    Math.abs(numLng) <= 180
  );
}

// Safe number conversion
function safeNumber(value, defaultValue = 0) {
  if (value === undefined || value === null) return defaultValue;
  const num = Number(value);
  return !isNaN(num) && isFinite(num) ? num : defaultValue;
}

export function Globe({ globeConfig, data }) {
  const [globeData, setGlobeData] = useState(null);
  const globeRef = useRef(null);
  const intervalRef = useRef(null);
  const mountedRef = useRef(true);
  const initializedRef = useRef(false);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  // Cleanup on unmount
  useEffect(() => {
    mountedRef.current = true;
    
    return () => {
      mountedRef.current = false;
      initializedRef.current = false;
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      if (globeRef.current) {
        try {
          globeRef.current.arcsData([]);
          globeRef.current.pointsData([]);
          globeRef.current.ringsData([]);
          globeRef.current.hexPolygonsData([]);
          
          if (globeRef.current.parent) {
            globeRef.current.parent.remove(globeRef.current);
          }
        } catch (e) {
          console.warn("Error cleaning up globe:", e);
        }
        
        globeRef.current = null;
      }
    };
  }, []);

  // Build material when ref is ready
  useEffect(() => {
    if (globeRef.current && mountedRef.current && !initializedRef.current) {
      buildMaterial();
    }
  }, [globeRef.current]);

  // Build data when data changes
  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0 && mountedRef.current) {
      buildData();
    }
  }, [data]);

  const buildMaterial = () => {
    if (!globeRef.current || !mountedRef.current) return;

    try {
      const globeMaterial = globeRef.current.globeMaterial();
      if (globeMaterial) {
        globeMaterial.color = new Color(defaultProps.globeColor);
        globeMaterial.emissive = new Color(defaultProps.emissive);
        globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
        globeMaterial.shininess = defaultProps.shininess;
      }
    } catch (e) {
      console.warn("Error building material:", e);
    }
  };

  const buildData = () => {
    if (!data || !Array.isArray(data)) return;
    
    const points = [];
    const validArcs = [];

    data.forEach((arc, index) => {
      if (!arc || typeof arc !== 'object') return;
      
      const startValid = isValidCoordinate(arc.startLat, arc.startLng);
      const endValid = isValidCoordinate(arc.endLat, arc.endLng);
      
      if (!startValid || !endValid) return;

      const rgb = hexToRgb(arc.color);
      if (!rgb) return;

      validArcs.push(arc);

      points.push({
        size: defaultProps.pointSize,
        order: safeNumber(arc.order, 0),
        color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.max(0, Math.min(1, 1 - (t || 0)))})`,
        lat: safeNumber(arc.startLat),
        lng: safeNumber(arc.startLng),
      });

      points.push({
        size: defaultProps.pointSize,
        order: safeNumber(arc.order, 0),
        color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.max(0, Math.min(1, 1 - (t || 0)))})`,
        lat: safeNumber(arc.endLat),
        lng: safeNumber(arc.endLng),
      });
    });

    // Remove duplicates with tolerance
    const filtered = points.filter(
      (v, i, a) =>
        a.findIndex(
          (v2) => 
            Math.abs(v2.lat - v.lat) < 0.001 && 
            Math.abs(v2.lng - v.lng) < 0.001
        ) === i
    );

    if (mountedRef.current) {
      setGlobeData(filtered);
      // Update data reference
      if (validArcs.length > 0) {
        data = validArcs;
      }
    }
  };

  // Initialize globe with data
  useEffect(() => {
    if (!globeRef.current || !globeData || !mountedRef.current || initializedRef.current) return;

    try {
      // Validate countries data
      const features = countries?.features || [];
      
      // Only proceed if we have valid features
      if (features.length > 0) {
        globeRef.current
          .hexPolygonsData(features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.7)
          .showAtmosphere(defaultProps.showAtmosphere)
          .atmosphereColor(defaultProps.atmosphereColor)
          .atmosphereAltitude(defaultProps.atmosphereAltitude)
          .hexPolygonColor(() => defaultProps.polygonColor);
      }

      startAnimation();
      initializedRef.current = true;
    } catch (e) {
      console.warn("Error initializing globe:", e);
      // Still mark as initialized to prevent retry loops
      initializedRef.current = true;
    }
  }, [globeData]);

  const startAnimation = () => {
    if (!globeRef.current || !mountedRef.current) return;

    try {
      const validData = (data || []).filter(arc => 
        arc && 
        isValidCoordinate(arc.startLat, arc.startLng) && 
        isValidCoordinate(arc.endLat, arc.endLng) &&
        arc.color
      );

      if (validData.length === 0) return;

      // Set arcs with safe values
      globeRef.current
        .arcsData(validData)
        .arcStartLat((d) => safeNumber(d.startLat))
        .arcStartLng((d) => safeNumber(d.startLng))
        .arcEndLat((d) => safeNumber(d.endLat))
        .arcEndLng((d) => safeNumber(d.endLng))
        .arcColor((d) => d.color)
        .arcAltitude((d) => safeNumber(d.arcAlt, 0.1))
        .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
        .arcDashLength(defaultProps.arcLength)
        .arcDashInitialGap((d) => safeNumber(d.order, 0))
        .arcDashGap(15)
        .arcDashAnimateTime(defaultProps.arcTime);

      // Set points
      globeRef.current
        .pointsData(validData)
        .pointColor((d) => d.color)
        .pointsMerge(true)
        .pointAltitude(0)
        .pointRadius(2);

      // Initialize rings
      globeRef.current
        .ringsData([])
        .ringColor((d) => (t) => d.color(t))
        .ringMaxRadius(defaultProps.maxRings)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod(
          (defaultProps.arcTime * defaultProps.arcLength) / Math.max(1, defaultProps.rings)
        );
    } catch (e) {
      console.warn("Error initializing globe:", e);
    }
  };

  // Ring animation interval
  useEffect(() => {
    if (!globeRef.current || !globeData || !mountedRef.current) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (!globeRef.current || !mountedRef.current) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        return;
      }

      try {
        const newRings = genRandomNumbers(
          0,
          globeData.length,
          Math.floor((globeData.length * 4) / 5)
        );

        if (globeRef.current && newRings.length > 0) {
          globeRef.current.ringsData(
            globeData.filter((_, i) => newRings.includes(i))
          );
        }
      } catch (e) {
        console.warn("Error updating rings:", e);
      }
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [globeData]);

  return <threeGlobe ref={globeRef} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    try {
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      gl.setSize(size.width, size.height);
      gl.setClearColor(0xffaaff, 0);
    } catch (e) {
     console.warn("Error configuring WebGL renderer:", e);
    }

    return () => {
      try {
        gl.dispose();
      } catch (e) {
 console.warn("Error disposing WebGL renderer:", e);
      }
    };
  }, [gl, size]);

  return null;
}

export function World({ globeConfig, data }) {
  // Validate and sanitize data
  const validData = (data || [])
    .filter(arc => 
      arc && 
      !isNaN(Number(arc.startLat)) && 
      !isNaN(Number(arc.startLng)) && 
      !isNaN(Number(arc.endLat)) && 
      !isNaN(Number(arc.endLng))
    )
    .map(arc => ({
      ...arc,
      startLat: Number(arc.startLat) || 0,
      startLng: Number(arc.startLng) || 0,
      endLat: Number(arc.endLat) || 0,
      endLng: Number(arc.endLng) || 0,
      arcAlt: Number(arc.arcAlt) || 0.1,
      order: Number(arc.order) || 0,
    }));

  if (validData.length === 0) {
    return <div className="text-center py-20">Loading globe data...</div>;
  }

  // Create scene once
  const sceneRef = useRef(null);
  if (!sceneRef.current) {
    sceneRef.current = new Scene();
    sceneRef.current.fog = new Fog(0xffffff, 400, 2000);
  }

  // Error state
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div className="text-center py-20">Globe visualization unavailable</div>;
  }

  return (
    <Canvas 
      scene={sceneRef.current} 
      camera={new PerspectiveCamera(50, aspect, 180, 1800)}
      gl={{ 
        powerPreference: "default",
        antialias: true,
        depth: true,
        stencil: false,
        alpha: true,
        failIfMajorPerformanceCaveat: false
      }}
      onError={(error) => {
        console.warn('Canvas error:', error);
        setHasError(true);
      }}
    >
      <WebGLRendererConfig />

      <ambientLight color={globeConfig?.ambientLight || "#38bdf8"} intensity={0.6} />
      <directionalLight
        color={globeConfig?.directionalLeftLight || "#ffffff"}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig?.directionalTopLight || "#ffffff"}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig?.pointLight || "#ffffff"}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />

      <Globe globeConfig={globeConfig || {}} data={validData} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

/* ---------------- HELPERS ---------------- */

export function hexToRgb(hex) {
  if (!hex || typeof hex !== 'string') return { r: 255, g: 255, b: 255 };
  
  // Clean the hex string
  const cleanHex = hex.replace('#', '');
  
  // Handle 3-character hex
  if (cleanHex.length === 3) {
    const r = parseInt(cleanHex[0] + cleanHex[0], 16) || 255;
    const g = parseInt(cleanHex[1] + cleanHex[1], 16) || 255;
    const b = parseInt(cleanHex[2] + cleanHex[2], 16) || 255;
    return { r, g, b };
  }
  
  // Handle 6-character hex
  if (cleanHex.length === 6) {
    const r = parseInt(cleanHex.substring(0, 2), 16) || 255;
    const g = parseInt(cleanHex.substring(2, 4), 16) || 255;
    const b = parseInt(cleanHex.substring(4, 6), 16) || 255;
    return { r, g, b };
  }
  
  return { r: 255, g: 255, b: 255 };
}

export function genRandomNumbers(min, max, count) {
  if (min >= max || count <= 0) return [];
  
  const arr = [];
  const maxAttempts = 1000;
  let attempts = 0;
  
  while (arr.length < count && attempts < maxAttempts) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
    attempts++;
  }
  
  return arr;
}