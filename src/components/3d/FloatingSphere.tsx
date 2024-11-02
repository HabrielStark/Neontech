import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function FloatingSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.8, 64, 64]} />
      <meshPhysicalMaterial
        color="#8b5cf6"
        roughness={0.1}
        metalness={1}
        emissive="#8b5cf6"
        emissiveIntensity={0.4}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transmission={0.2}
      />
    </mesh>
  );
}