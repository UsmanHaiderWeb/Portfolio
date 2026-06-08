import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Custom glassy material with chromatic aberration
const ChromaticMaterial = () => {
  const shader = useMemo(
    () => ({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0x06b6d4) }, // Cyan
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform float time;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          
          // Organic breathing distortion
          vec3 pos = position;
          pos.x += sin(pos.y * 5.0 + time) * 0.1;
          pos.y += cos(pos.z * 5.0 + time) * 0.1;
          
          vPosition = (modelViewMatrix * vec4(pos, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          // Fresnel effect for glass look
          vec3 viewDirection = normalize(-vPosition);
          float fresnel = dot(viewDirection, vNormal);
          fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
          fresnel = pow(fresnel, 3.0);

          // Chromatic aberration splits
          vec3 r = vec3(0.1) + color * fresnel + vec3(sin(time + vUv.x * 10.0)*0.2, 0.0, 0.0);
          vec3 g = vec3(0.1) + color * fresnel + vec3(0.0, sin(time * 1.1 + vUv.y * 10.0)*0.2, 0.0);
          vec3 b = vec3(0.1) + color * fresnel + vec3(0.0, 0.0, sin(time * 0.9 + vUv.x * 10.0)*0.2);

          vec3 finalColor = vec3(r.r, g.g, b.b);
          
          // Add specular highlight
          float specular = pow(max(dot(reflect(-viewDirection, vNormal), viewDirection), 0.0), 32.0);
          finalColor += vec3(specular) * 0.5;

          gl_FragColor = vec4(finalColor, 0.8);
        }
      `,
    }),
    []
  );

  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <shaderMaterial
      ref={materialRef}
      args={[shader]}
      transparent={true}
      blending={THREE.AdditiveBlending}
      wireframe={true} // Gives that technical, geometric active theory look
    />
  );
};

const ParticleField = () => {
  const points = useRef();
  
  // Create a swarm of particles
  const [positions, mathColors] = useMemo(() => {
    const p = new Float32Array(3000);
    const c = new Float32Array(3000);
    const color = new THREE.Color();
    for (let i = 0; i < 3000; i += 3) {
      // Swirl shape
      const radius = Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 10;
      
      p[i] = Math.cos(theta) * radius;
      p[i + 1] = y;
      p[i + 2] = Math.sin(theta) * radius;

      // Cyan / Magenta colors
      const isMagenta = Math.random() > 0.8;
      color.setHex(isMagenta ? 0xff00ff : 0x06b6d4);
      c[i] = color.r;
      c[i + 1] = color.g;
      c[i + 2] = color.b;
    }
    return [p, c];
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={points} positions={positions} colors={mathColors}>
      <PointMaterial transparent vertexColors size={0.02} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
    </Points>
  );
};

const Scene = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const group = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    // Parallax effect based on mouse
    const targetX = (state.pointer.x * viewport.width) / 10;
    const targetY = (state.pointer.y * viewport.height) / 10;
    
    group.current.rotation.y += 0.01;
    group.current.rotation.x += 0.005;
    
    // Smooth camera tilt
    state.camera.position.x += (state.pointer.x * 2 - state.camera.position.x) * 0.05;
    state.camera.position.y += (state.pointer.y * 2 - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={['#020202']} />
      <ParticleField />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group ref={group}>
          <mesh>
            <torusKnotGeometry args={[1.5, 0.4, 200, 32]} />
            <ChromaticMaterial />
          </mesh>
        </group>
      </Float>
    </>
  );
};

const WebGLBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
