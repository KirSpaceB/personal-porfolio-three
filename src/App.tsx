import {Canvas} from '@react-three/fiber';
import "./App.css"
import CentralSphere from './components/CentralSphere';
import Planet from './components/Planet';
import earthTexture from './public/textures/earth_texture.jpg';
import marsTexture from './public/textures/Mars_Map.webp';
import jupiterTexture from './public/textures/jupitar_texture.jpg';
import mercuryTexture from './public/textures/mercury_texture.jpg'
import StarField from './components/StarField';

function App() {
  return (
    
    <>
      <div id="canvas-container">
        <Canvas
          camera={{
            position:[0,0,15],
            fov:90
          }}
          gl={{
            antialias:true,
            alpha:false,
          }}
          style={{background:'black'}}
        >
          <ambientLight intensity={7}/>
          <directionalLight position={[5,5,5]} intensity={6}/>

          {/* Particle-based star field */}
          <StarField count={5000} /> 
          {/* First sphere (planet) */}
          <group>
            <CentralSphere/>
            <Planet distance={6} size={2} color="white" speed={1} differentAngle={0} texture={earthTexture} UIRenderKey={1}/>  {/* Planet 1 */}
            <Planet distance={8} size={2} color="white" speed={1} differentAngle={Math.PI} texture={marsTexture} />  {/* Planet 2, shifted by 60 degrees */}
            <Planet distance={10} size={2} color="white" speed={1} differentAngle={Math.PI / 2} texture={jupiterTexture}/> {/* Planet 3, shifted by 30 degrees */}
            <Planet distance={4} size={2} color="white" speed={1} differentAngle={-Math.PI / 2} texture={mercuryTexture}/> {/* Planet 3, shifted by 30 degrees */}

          </group>
        </Canvas>
      </div>
    </>
  )
}

export default App
