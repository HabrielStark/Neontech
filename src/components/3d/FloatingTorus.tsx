import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function FloatingTorus() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[0.8, 0.2, 32, 100]} />
      <meshPhysicalMaterial
        color="#ec4899"
        roughness={0.1}
        metalness={1}
        emissive="#ec4899"
        emissiveIntensity={0.4}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transmission={0.2}
      />
    </mesh>
  );
}