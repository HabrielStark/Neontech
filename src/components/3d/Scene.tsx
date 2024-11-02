import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, PerspectiveCamera, Stars } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';
import { FloatingSphere } from './FloatingSphere';
import { FloatingTorus } from './FloatingTorus';
import { Sparkles } from './Sparkles';
import { Suspense } from 'react';

interface SceneProps {
  className?: string;
}

export function Scene({ className = '' }: SceneProps) {
  return (
    <div className={`${className} relative`}>
      <Canvas className="h-screen">
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <Environment preset="night" />
          
          <color attach="background" args={['#000']} />
          <fog attach="fog" args={['#000', 5, 15]} />
          
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#4f46e5" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          
          <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
          <Sparkles count={100} scale={8} size={0.6} speed={0.3} />

          <group position={[0, 0, 0]}>
            <Float
              speed={2}
              rotationIntensity={0.6}
              floatIntensity={1.2}
              position={[-2.5, 0, 0]}
            >
              <FloatingCube />
            </Float>

            <Float
              speed={2.5}
              rotationIntensity={0.8}
              floatIntensity={1.5}
              position={[0, 0, 0]}
            >
              <FloatingSphere />
            </Float>

            <Float
              speed={3}
              rotationIntensity={1}
              floatIntensity={1.8}
              position={[2.5, 0, 0]}
            >
              <FloatingTorus />
            </Float>
          </group>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}