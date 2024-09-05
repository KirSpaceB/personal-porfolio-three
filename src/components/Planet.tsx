import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import '../css/PlanetModal.css';
import * as THREE from 'three';

export default function Planet({distance, size, speed, color} : {distance:number, size:number, speed:number, color:string}) {
  const planetRef = useRef<THREE.Mesh>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);

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
    }
  });

  const handleClick = () => {
    setShowModal(true); // Toggle the modal on click
  };

  const handleCloseBox = () => {
    setShowModal(false); // Hide modal when close button is clicked
  };


  return (
    <mesh ref={planetRef} onClick={handleClick}>
      <sphereGeometry args={[size, 32, 32]} /> {/* Orbiting sphere */}
      <meshStandardMaterial color={color} />
      {/* Modal logic */}
      {/* Traditional modal */}
      {showModal && (
        <Html position={[2, 1, 0]}>
        <div id="HelloWorldDiv">
          <p>test</p>
          <button id="HelloWorldDivButton" onClick={handleCloseBox}>Close Window</button>
        </div>
      </Html>
      )}
    </mesh>
  );
}
