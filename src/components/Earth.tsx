import React, {useRef} from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import earth_texture from '../public/textures/earth_texture.jpg';

export default function Earth() {
  const earthTexture = useLoader(THREE.TextureLoader, earth_texture);
  return (
    <mesh>
      <sphereGeometry args={[2,32,32]}/>
      <meshStandardMaterial map={earthTexture}/>
    </mesh>
  )
}
