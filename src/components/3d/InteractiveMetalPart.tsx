import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface MetalPartProps {
  color?: string;
}

function MetalGear({ color = "#c0c0c0" }: MetalPartProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <torusGeometry args={[1.2, 0.4, 16, 50]} />
      <MeshDistortMaterial
        color={color}
        metalness={0.9}
        roughness={0.1}
        distort={0.1}
        speed={2}
      />
    </mesh>
  );
}

function MetalCylinder() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
      <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
      <meshStandardMaterial
        color="#888888"
        metalness={0.95}
        roughness={0.05}
      />
    </mesh>
  );
}

interface InteractiveMetalPartProps {
  variant?: "gear" | "cylinder";
  color?: string;
}

const InteractiveMetalPart = ({ variant = "gear", color }: InteractiveMetalPartProps) => {
  return (
    <div className="w-full h-[400px]">
      <Canvas shadows camera={{ position: [3, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {variant === "gear" ? <MetalGear color={color} /> : <MetalCylinder />}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default InteractiveMetalPart;
