import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from 'three';
import mars_texture from '../public/textures/Mars_Map.webp';

export default function Mars() {
  const marsRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if(marsRef.current != null) {
      marsRef.current.rotation.x += 0.001;
    }
  })

  const marsTexture = useLoader(THREE.TextureLoader, mars_texture)

  return (
    <mesh>
      <sphereGeometry args={[2,32,32]}/>
      <meshStandardMaterial map={marsTexture}/>
    </mesh>
  )
}
