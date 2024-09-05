import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
export default function Planet({distance, size, speed, color} : {distance:number, size:number, speed:number, color:string}) {
  const planetRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if(planetRef.current) {
      const elapsedTime = clock.getElapsedTime();
      planetRef.current.position.x = distance * Math.sin(elapsedTime * speed); // X-axis rotation
      planetRef.current.position.z = distance * Math.cos(elapsedTime * speed); // Z-axis rotation
    }
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[size, 32, 32]} /> {/* Orbiting sphere */}
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
