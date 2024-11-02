import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { RoundedBox } from '@react-three/drei';

export function FloatingCube() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[1, 1, 1]}
      radius={0.1}
      smoothness={4}
    >
      <meshPhysicalMaterial
        color="#4f46e5"
        roughness={0.2}
        metalness={1}
        emissive="#4f46e5"
        emissiveIntensity={0.4}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transmission={0.2}
      />
    </RoundedBox>
  );
}