import {Canvas, useLoader} from '@react-three/fiber';
import * as THREE from 'three';
import earth_texture from './public/textures/earth_texture.jpg';
import "./App.css"
function App() {
  //load texture in local folder
  const earthTexture = useLoader(THREE.TextureLoader, earth_texture)
  return (
    
    <>
      <div id="canvas-container">
        <Canvas
          camera={{
            position:[0,0,10],
            fov:60
          }}
        >
          <mesh>
            <sphereGeometry args={[2,32,32]}/>
            <meshStandardMaterial map={earthTexture}/>
          </mesh>
          <ambientLight intensity={7}/>
          <directionalLight position={[5,5,5]} intensity={6}/>
        </Canvas>
      </div>
    </>
  )
}

export default App
