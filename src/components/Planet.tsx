import { useFrame, useThree, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import isWithinRange from '../tooling/isWithinRange';
import '../css/PlanetModal.css';
import * as THREE from 'three';
import PlanetModal from './PlanetModal';

export default function Planet(
  {distance, size, speed, color, texture, differentAngle, UIRenderKey}
   : 
  { distance:number,
    size:number,
    speed:number,
    color:string,
    texture?:string | string[],
    UIRenderKey?: number | undefined,
    differentAngle:number}) {
  const planetRef = useRef<THREE.Mesh>(null);
  // Show modal when planet is closest to the camera
  const [showModal, setShowModal] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);

  const {camera} = useThree();
  console.log("Planet positiojn", planetRef.current?.position);
  console.log("distance from planet to camera", planetRef.current?.position.distanceTo(camera.position))

 // Check if texture is provided, else fallback to color material
 const planetTexture = texture ? useLoader(THREE.TextureLoader, texture) : null;

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
      //planetRef.current.position.x = distance * Math.sin(scrollPosition * speed); // X-axis rotation
      //planetRef.current.position.z = distance * Math.cos(scrollPosition * speed); // Z-axis rotation
      // Apply the updated rotation to the planet position, starting from its initial X position

      // Apply the offset to the orbit's angular position (scrollPosition * speed)
      const angle = scrollPosition * speed + differentAngle;
      planetRef.current.position.x = distance * Math.sin(angle); // Dynamic X-axis movement
      planetRef.current.position.z = distance * Math.cos(angle); // Z-axis movement

      // Calculate the distance from the planet to the camera
      const planetPos = planetRef.current.position;
      
      // I have an idea why don't we just dynamically get the distance
      if (isWithinRange(planetPos.x, -1, 1) && isWithinRange(planetPos.z, 2, 12)) {
        console.log(planetPos.x)
        console.log("isWithinRange Evaluated as True");
        setShowModal(true);
      } else {
        setShowModal(false);
      }

    }
  });
  // in order to represent a planet modal for each indivual planet, we can use keys passed down into the modal which will render different ui based on the keys, then we abstract each render
  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[size, 32, 32]} /> {/* Orbiting sphere */}
      <meshStandardMaterial color={color} map={planetTexture}/>
      {/* Modal logic */}
      {/* Traditional modal */}
      <AnimatePresence>
        {showModal && (
          <PlanetModal key="planet-modal" UIRenderKey={UIRenderKey}/>
        )}
      </AnimatePresence>
    </mesh>
  );
}
