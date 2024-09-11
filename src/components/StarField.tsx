import { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function StarField({ count = 5000 }) {
  const { scene } = useThree();
  const starRef = useRef<THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial> | null>(null);

  useEffect(() => {
    // Create an empty buffer geometry
    const geometry = new THREE.BufferGeometry();

    // Create an array to store the positions of the stars
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Random positions for the stars
      const x = THREE.MathUtils.randFloatSpread(1000); // Random between -500 and 500
      const y = THREE.MathUtils.randFloatSpread(1000);
      const z = THREE.MathUtils.randFloatSpread(1000);

      // Set positions in the buffer array
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    // Add the positions to the geometry
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Create the material for the particles
    const material = new THREE.PointsMaterial({
      color: 0xffffff, // Star color
      size: 1,         // Star size
      sizeAttenuation: true, // Make stars smaller with distance
      transparent: true,
      opacity: 0.8,
    });

    // Create the Points (particles)
    const stars = new THREE.Points(geometry, material);

    // Add the stars to the scene
    scene.add(stars);

    // Store the reference to stars so they can be accessed later if needed
    starRef.current = stars;


    // Cleanup function
    return () => {
      scene.remove(stars);
      geometry.dispose();
      material.dispose();
    };
  }, [count, scene]);

  return null; // No JSX needed, just using Three.js directly
}
