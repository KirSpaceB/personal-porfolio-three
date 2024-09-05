import {useRef} from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import earth_texture from '../public/textures/earth_texture.jpg';
import { Mesh } from 'three';

export default function Earth() {
  const earthRef = useRef<Mesh>(null);

  useFrame(() => {
    if(earthRef.current) {
      earthRef.current.rotation.y  += 0.001;
    }
  })

  const earthTexture = useLoader(THREE.TextureLoader, earth_texture);
  
  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2,32,32]}/>
      <meshStandardMaterial map={earthTexture}/>
    </mesh>
  )
}
