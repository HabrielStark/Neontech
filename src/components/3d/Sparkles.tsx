import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points, PointMaterial } from '@react-three/drei';

interface SparklesProps {
  count?: number;
  scale?: number;
  size?: number;
  speed?: number;
}

export function Sparkles({ count = 100, scale = 10, size = 0.5, speed = 0.2 }: SparklesProps) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * scale;
      positions[i * 3 + 1] = (Math.random() - 0.5) * scale;
      positions[i * 3 + 2] = (Math.random() - 0.5) * scale;
    }
    return positions;
  }, [count, scale]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2;
    points.current.rotation.y = Math.cos(state.clock.elapsedTime * speed) * 0.2;
  });

  return (
    <Points ref={points}>
      <PointMaterial
        transparent
        vertexColors
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={positions.length / 3}
          array={Float32Array.from(Array.from({ length: count }, () => [
            Math.random() * 0.5 + 0.5,
            Math.random() * 0.5 + 0.5,
            Math.random() * 0.5 + 0.5,
            Math.random()
          ]).flat())}
          itemSize={4}
        />
      </bufferGeometry>
    </Points>
  );
}