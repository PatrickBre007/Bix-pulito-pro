import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Bubble({ position, speed, size }) {
  const meshRef = useRef();
  const initialY = useRef(position[1]);
  const time = useRef(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    time.current += delta * speed;

    // Movement up with slight floating
    meshRef.current.position.y += delta * speed * 0.5;
    meshRef.current.position.x += Math.sin(time.current) * 0.01;
    meshRef.current.position.z += Math.cos(time.current * 0.7) * 0.01;

    // Reset when bubble goes too high
    if (meshRef.current.position.y > 10) {
      meshRef.current.position.y = -10;
      meshRef.current.position.x = (Math.random() - 0.5) * 20;
      meshRef.current.position.z = (Math.random() - 0.5) * 10;
    }

    // Gentle rotation
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      {/* Bolla trasparente principale */}
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        transparent
        opacity={0.08}
        metalness={0.1}
        roughness={0.1}
        side={THREE.DoubleSide}
      />
      {/* Bordo fucsia */}
      <mesh scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial
          color="#e91e8c"
          transparent
          opacity={0.5}
          side={THREE.FrontSide}
          wireframe={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* Bordo blu */}
      <mesh scale={[1.01, 1.01, 1.01]} rotation={[Math.PI / 3, Math.PI / 3, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial
          color="#2563eb"
          transparent
          opacity={0.4}
          side={THREE.FrontSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </mesh>
  );
}

function Bubbles() {
  const bubbles = useMemo(() => {
    const bubbleArray = [];
    const count = 35;

    for (let i = 0; i < count; i++) {
      bubbleArray.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
        ],
        speed: Math.random() * 0.3 + 0.2,
        size: Math.random() * 0.4 + 0.3,
      });
    }

    return bubbleArray;
  }, []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      {bubbles.map((bubble, i) => (
        <Bubble key={i} {...bubble} />
      ))}
    </>
  );
}

export default function BubbleParticles() {
  return (
    <div className="bubble-canvas">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Bubbles />
      </Canvas>
    </div>
  );
}
