import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

// Realistic Physical Two-Piece Medical Capsule with Cursor Reactivity
function RealisticPhysicalCapsule({ 
  position, 
  rotation, 
  scale, 
  capColor = '#0047E0', 
  speed = 0.6, 
  rotSpeed = 0.25,
  depthFactor = 1.0,
  mouseRef
}) {
  const groupRef = useRef();
  const initialPos = useRef(position);
  const initialRot = useRef(rotation);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    // 1. Natural Sinusoidal Floating
    const floatY = Math.sin(t * speed) * 0.18;
    const floatRotX = Math.sin(t * rotSpeed * 0.7) * 0.10;
    const floatRotY = t * rotSpeed * 0.20;

    // 2. Interactive Cursor Parallax Shift (restrained so pills never clip screen edges)
    const targetX = initialPos.current[0] + mx * (0.35 * depthFactor);
    const targetY = initialPos.current[1] + floatY + my * (0.25 * depthFactor);
    
    // Smooth frame lerp damping
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.06);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.06);

    // 3. Interactive Cursor 3D Tilt (capsule turns dynamically to catch studio lights)
    const targetRotX = initialRot.current[0] + floatRotX + my * 0.35;
    const targetRotY = initialRot.current[1] + floatRotY + mx * 0.45;
    const targetRotZ = initialRot.current[2] + Math.cos(t * rotSpeed * 0.5) * 0.08 - mx * 0.15;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.06);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.06);
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      
      {/* ========================================================
          PART 1: WHITE BODY (Opaque medical white bottom cylinder + hemisphere)
          Radius: 0.345 (slips snugly inside the overlapping blue cap)
         ======================================================== */}
      <group position={[0, -0.15, 0]}>
        {/* Lower Cylinder Body */}
        <mesh position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.345, 0.345, 0.75, 36, 1, false]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            roughness={0.12}
            metalness={0.02}
            clearcoat={1.0}
            clearcoatRoughness={0.06}
            reflectivity={0.9}
          />
        </mesh>

        {/* Lower Hemispherical Dome */}
        <mesh position={[0, -0.525, 0]}>
          <sphereGeometry args={[0.345, 36, 18, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            roughness={0.12}
            metalness={0.02}
            clearcoat={1.0}
            clearcoatRoughness={0.06}
            reflectivity={0.9}
          />
        </mesh>
      </group>

      {/* ========================================================
          PART 2: BLUE CAP (Glossy translucent colored gelatin cap)
          Radius: 0.358 (physically overlaps the body with a real 3D lip!)
         ======================================================== */}
      <group position={[0, 0.15, 0]}>
        {/* Upper Cylinder Cap Sleeve */}
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.358, 0.358, 0.60, 36, 1, false]} />
          <meshPhysicalMaterial
            color={capColor}
            roughness={0.06}
            metalness={0.03}
            clearcoat={1.0}
            clearcoatRoughness={0.03}
            reflectivity={0.95}
            transmission={0.14} // Authentic gelatin translucency
            thickness={0.25}
            ior={1.48}
          />
        </mesh>

        {/* Upper Hemispherical Dome */}
        <mesh position={[0, 0.35, 0]}>
          <sphereGeometry args={[0.358, 36, 18, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshPhysicalMaterial
            color={capColor}
            roughness={0.06}
            metalness={0.03}
            clearcoat={1.0}
            clearcoatRoughness={0.03}
            reflectivity={0.95}
            transmission={0.14}
            thickness={0.25}
            ior={1.48}
          />
        </mesh>

        {/* Interlocking Lip Rim: Beveled circular lip where the cap cut edge meets the body */}
        <mesh position={[0, -0.25, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.356, 0.007, 16, 36]} />
          <meshPhysicalMaterial
            color={capColor}
            roughness={0.1}
            metalness={0.05}
            clearcoat={1.0}
          />
        </mesh>
      </group>

    </group>
  );
}

// Scene containing studio lightformers and positioned physical capsules
// Coordinates calculated so every single pill is 100% visible, fully inside camera frustum, and never obscures UI
function CapsuleScene({ mouseRef }) {
  const capsules = useMemo(() => [
    // 1. Hero Right Primary Pill (Floating beside doctor circle)
    { 
      position: [2.8, 0.5, -2.0], 
      rotation: [0.72, 0.48, 0.65], 
      scale: [1.05, 1.05, 1.05], 
      capColor: '#0047E0', // Cobalt Medical Blue
      speed: 0.55, 
      rotSpeed: 0.22,
      depthFactor: 0.8
    },

    // 2. Upper Right Pill (Floating above doctor circle)
    { 
      position: [2.4, 1.4, -2.3], 
      rotation: [-0.45, 0.65, 0.4], 
      scale: [0.85, 0.85, 0.85], 
      capColor: '#1c2b8f', // Brand Royal Navy
      speed: 0.65, 
      rotSpeed: 0.26,
      depthFactor: 0.7
    },

    // 3. Far Left-Top Sky Pill (Gentle accent in upper left)
    { 
      position: [-2.8, 1.2, -2.6], 
      rotation: [0.55, -0.6, 0.35], 
      scale: [0.85, 0.85, 0.85], 
      capColor: '#0047E0', 
      speed: 0.5, 
      rotSpeed: 0.24,
      depthFactor: 0.7
    },

    // 4. Center-Top Sky Pill (High in open sky)
    { 
      position: [0.3, 1.6, -2.8], 
      rotation: [0.35, 0.55, 0.25], 
      scale: [0.75, 0.75, 0.75], 
      capColor: '#1D4ED8', // Royal Blue
      speed: 0.45, 
      rotSpeed: 0.18,
      depthFactor: 0.6
    },

    // 5. Far Right Mid-Depth Pill
    { 
      position: [3.3, 0.2, -3.0], 
      rotation: [0.8, -0.4, 0.55], 
      scale: [0.75, 0.75, 0.75], 
      capColor: '#0284C7', // Medical Cyan Blue
      speed: 0.6, 
      rotSpeed: 0.25,
      depthFactor: 0.65
    },
  ], []);

  return (
    <>
      {/* 
        ========================================================
        STUDIO ENVIRONMENT & SOFTBOX LIGHTFORMERS
        Produces the crisp elongated rectangular studio highlights 
        seen on real glossy pharmaceutical pills!
        ========================================================
      */}
      <Environment resolution={256}>
        {/* Overhead Studio Strip Softbox (produces the long bright reflection along the cylinder curve) */}
        <Lightformer 
          form="rect" 
          intensity={4.0} 
          color="#FFFFFF" 
          position={[0, 8, 4]} 
          scale={[16, 3, 1]} 
          target={[0, 0, 0]} 
        />
        {/* Key Front-Right Softbox (produces dome specular highlight) */}
        <Lightformer 
          form="rect" 
          intensity={2.8} 
          color="#FFFFFF" 
          position={[6, 3, 3]} 
          scale={[6, 8, 1]} 
        />
        {/* Soft Left Fill Softbox (softens underside with cool tint) */}
        <Lightformer 
          form="rect" 
          intensity={1.8} 
          color="#E0F2FE" 
          position={[-7, 2, 2]} 
          scale={[8, 8, 1]} 
        />
        {/* Rim Backlight (accentuates glossy edge silhouette) */}
        <Lightformer 
          form="ring" 
          intensity={2.2} 
          color="#FFFFFF" 
          position={[0, 6, -6]} 
          scale={[8, 8, 1]} 
        />
      </Environment>

      {/* Direct Studio Lights */}
      <ambientLight intensity={0.65} />
      <directionalLight position={[8, 14, 10]} intensity={1.6} color="#FFFFFF" />
      <directionalLight position={[-8, -4, 6]} intensity={0.5} color="#E0F2FE" />
      <directionalLight position={[-6, 8, -8]} intensity={0.9} color="#FFFFFF" />

      {/* Physical Capsules */}
      {capsules.map((cap, idx) => (
        <RealisticPhysicalCapsule 
          key={idx} 
          {...cap} 
          mouseRef={mouseRef}
        />
      ))}
    </>
  );
}

// Root Background Canvas Component with Smooth Mouse Tracker
export default function CapsuleBackground() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // High-performance mutable mouse tracking ref (no React state re-renders)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    // 1. Reduced motion check
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);

    // 2. WebGL capability check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }

    // 3. Interactive Window Mouse Tracker
    const handleMouseMove = (e) => {
      // Normalized between -1 and +1
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    // 4. Touch support for mobile devices
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouseRef.current.targetX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.targetY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };

    // Smooth animation loop for mouse lerping
    let animId;
    const lerpLoop = () => {
      mouseRef.current.x = THREE.MathUtils.lerp(mouseRef.current.x, mouseRef.current.targetX, 0.08);
      mouseRef.current.y = THREE.MathUtils.lerp(mouseRef.current.y, mouseRef.current.targetY, 0.08);
      animId = requestAnimationFrame(lerpLoop);
    };
    animId = requestAnimationFrame(lerpLoop);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handler);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Static CSS Fallback with Realistic Two-Tone Pill Gradient
  if (!hasWebGL || prefersReducedMotion) {
    return (
      <div 
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div 
          className="absolute -top-12 right-12 w-28 h-60 rounded-full shadow-2xl opacity-40 rotate-[35deg] overflow-hidden border border-white/40"
          style={{
            background: 'linear-gradient(180deg, #0047E0 0%, #0047E0 50%, #D1D5DB 50.5%, #FFFFFF 52%, #FFFFFF 100%)'
          }}
        />
        <div 
          className="absolute top-1/2 -left-10 w-24 h-52 rounded-full shadow-xl opacity-30 -rotate-[25deg] overflow-hidden border border-white/40"
          style={{
            background: 'linear-gradient(180deg, #1c2b8f 0%, #1c2b8f 50%, #D1D5DB 50.5%, #FFFFFF 52%, #FFFFFF 100%)'
          }}
        />
      </div>
    );
  }

  return (
    <div 
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ 
          alpha: true, 
          antialias: true, 
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15
        }}
        dpr={[1, 1.5]}
      >
        <CapsuleScene mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}

