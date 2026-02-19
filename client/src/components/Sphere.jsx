import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AnimatedSphere = () => {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#A33B12" wireframe />
    </mesh>
  );
};

export default AnimatedSphere;