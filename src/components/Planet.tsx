import { Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import isWithinRange from '../tooling/isWithinRange';
import '../css/PlanetModal.css';
import * as THREE from 'three';

export default function Planet({distance, size, speed, color} : {distance:number, size:number, speed:number, color:string}) {
  const planetRef = useRef<THREE.Mesh>(null);
  // Show modal when planet is closest to the camera
  const [showModal, setShowModal] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);
  const [closestDistance, setClosestDistance] = useState<number | null>(null); // Track the closest distance

  const {camera} = useThree();
  console.log(camera)
  console.log("Planet positiojn", planetRef.current?.position);
  console.log("distance from planet to camera", planetRef.current?.position.distanceTo(camera.position))

  useEffect(() => {
    const handleScroll = (event:WheelEvent) => {
      setTargetRotation((prev) => prev + event.deltaY * 0.001); // Store scroll input as target
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [])
  
  useFrame(() => {
    if(planetRef.current) {
      // Smoothly transition from the current scrollPosition to the targetRotation
      setScrollPosition((prev) => THREE.MathUtils.lerp(prev, targetRotation, 0.1)); // Lerp for smoothness
      // Apply the updated rotation to the planet position
      planetRef.current.position.x = distance * Math.sin(scrollPosition * speed); // X-axis rotation
      planetRef.current.position.z = distance * Math.cos(scrollPosition * speed); // Z-axis rotation

      // Calculate the distance from the planet to the camera
      const planetPosition = planetRef.current.position;
      
      // I have an idea why don't we just dynamically get the distance
      if (isWithinRange(planetPosition.x, -4, -3) && isWithinRange(planetPosition.z, 3, 6)) {
        console.log("isWithinRange Evaluated as True");
        setShowModal(true);
      } else {
        setShowModal(false);
      }

    }
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[size, 32, 32]} /> {/* Orbiting sphere */}
      <meshStandardMaterial color={color} />
      {/* Modal logic */}
      {/* Traditional modal */}
      {showModal && (
        <Html position={[2, 1, 0]}>
        <div id="HelloWorldDiv">
          <p>test</p>
          <button id="HelloWorldDivButton">Close Window</button>
        </div>
      </Html>
      )}
    </mesh>
  );
}
