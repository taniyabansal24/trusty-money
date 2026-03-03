import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "../../data/globe.json";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

let numbersOfRings = [0];

// Helper function to validate coordinates
function isValidCoordinate(lat, lng) {
  return (
    lat !== undefined && 
    lng !== undefined && 
    !isNaN(lat) && 
    !isNaN(lng) && 
    isFinite(lat) && 
    isFinite(lng) &&
    Math.abs(lat) <= 90 && 
    Math.abs(lng) <= 180
  );
}

export function Globe({ globeConfig, data }) {
  const [globeData, setGlobeData] = useState(null);
  const globeRef = useRef(null);
  const intervalRef = useRef(null);
  const mountedRef = useRef(true);

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
      
      // Clear intervals
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      // Clean up Three.js resources
      if (globeRef.current) {
        try {
          // Clear all data to prevent memory leaks
          globeRef.current.arcsData([]);
          globeRef.current.pointsData([]);
          globeRef.current.ringsData([]);
          globeRef.current.hexPolygonsData([]);
          
          // Remove from scene if possible
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
    if (globeRef.current && mountedRef.current) {
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
      // Validate arc data
      if (!arc || typeof arc !== 'object') return;
      
      const startValid = isValidCoordinate(arc.startLat, arc.startLng);
      const endValid = isValidCoordinate(arc.endLat, arc.endLng);
      
      if (!startValid || !endValid) {
        console.warn(`Invalid coordinates in arc ${index}:`, arc);
        return;
      }

      // Validate color
      const rgb = hexToRgb(arc.color || "#ffffff");
      if (!rgb) {
        console.warn(`Invalid color in arc ${index}:`, arc.color);
        return;
      }

      validArcs.push(arc);

      points.push({
        size: defaultProps.pointSize,
        order: arc.order || 0,
        color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.max(0, Math.min(1, 1 - (t || 0)))})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });

      points.push({
        size: defaultProps.pointSize,
        order: arc.order || 0,
        color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.max(0, Math.min(1, 1 - (t || 0)))})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    });

    // Remove duplicates
    const filtered = points.filter(
      (v, i, a) =>
        a.findIndex(
          (v2) => 
            Math.abs(v2.lat - v.lat) < 0.0001 && 
            Math.abs(v2.lng - v.lng) < 0.0001
        ) === i
    );

    if (mountedRef.current) {
      setGlobeData(filtered);
      // Update data with only valid arcs
      if (validArcs.length > 0) {
        data = validArcs;
      }
    }
  };

  // Initialize globe with data
  useEffect(() => {
    if (!globeRef.current || !globeData || !mountedRef.current) return;

    try {
      globeRef.current
        .hexPolygonsData(countries?.features || [])
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor(() => defaultProps.polygonColor);

      startAnimation();
    } catch (e) {
      console.warn("Error initializing globe:", e);
    }
  }, [globeData]);

  const startAnimation = () => {
    if (!globeRef.current || !mountedRef.current) return;

    try {
      // Filter data to ensure all entries are valid
      const validData = (data || []).filter(arc => 
        arc && 
        isValidCoordinate(arc.startLat, arc.startLng) && 
        isValidCoordinate(arc.endLat, arc.endLng) &&
        arc.color
      );

      if (validData.length === 0) return;

      globeRef.current
        .arcsData(validData)
        .arcStartLat((d) => d.startLat)
        .arcStartLng((d) => d.startLng)
        .arcEndLat((d) => d.endLat)
        .arcEndLng((d) => d.endLng)
        .arcColor((d) => d.color)
        .arcAltitude((d) => d.arcAlt || 0.1)
        .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
        .arcDashLength(defaultProps.arcLength)
        .arcDashInitialGap((d) => d.order || 0)
        .arcDashGap(15)
        .arcDashAnimateTime(defaultProps.arcTime);

      globeRef.current
        .pointsData(validData)
        .pointColor((d) => d.color)
        .pointsMerge(true)
        .pointAltitude(0)
        .pointRadius(2);

      globeRef.current
        .ringsData([])
        .ringColor((d) => (t) => d.color(t))
        .ringMaxRadius(defaultProps.maxRings)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod(
          (defaultProps.arcTime * defaultProps.arcLength) / (defaultProps.rings || 1)
        );
    } catch (e) {
      console.warn("Error starting animation:", e);
    }
  };

  // Ring animation interval
  useEffect(() => {
    if (!globeRef.current || !globeData || !mountedRef.current) return;

    // Clear existing interval
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
        numbersOfRings = genRandomNumbers(
          0,
          globeData.length,
          Math.floor((globeData.length * 4) / 5)
        );

        if (globeRef.current) {
          globeRef.current.ringsData(
            globeData.filter((_, i) => numbersOfRings.includes(i))
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
      gl.setPixelRatio(window.devicePixelRatio);
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
  const validData = (data || []).filter(arc => 
    arc && 
    !isNaN(arc.startLat) && 
    !isNaN(arc.startLng) && 
    !isNaN(arc.endLat) && 
    !isNaN(arc.endLng)
  );

  if (validData.length === 0) {
    return <div className="text-center py-20">Loading globe data...</div>;
  }

  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);

  return (
    <Canvas 
      scene={scene} 
      camera={new PerspectiveCamera(50, aspect, 180, 1800)}
      gl={{ 
        powerPreference: "high-performance",
        antialias: true,
        depth: true
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
  
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) || 0,
        g: parseInt(result[2], 16) || 0,
        b: parseInt(result[3], 16) || 0,
      }
    : { r: 255, g: 255, b: 255 }; // Default to white if invalid
}

export function genRandomNumbers(min, max, count) {
  if (min >= max || count <= 0 || max - min <= 0) return [];
  
  const arr = [];
  const maxAttempts = 1000; // Prevent infinite loop
  let attempts = 0;
  
  while (arr.length < count && attempts < maxAttempts) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
    attempts++;
  }
  
  return arr;
}