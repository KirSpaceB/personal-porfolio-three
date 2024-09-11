import {Canvas} from '@react-three/fiber';
import "./App.css"
import CentralSphere from './components/CentralSphere';
import Planet from './components/Planet';
import earthTexture from './public/textures/earth_texture.jpg'

function App() {
  return (
    
    <>
      <div id="canvas-container">
        <Canvas
          camera={{
            position:[0,0,15],
            fov:90
          }}
        >
          <ambientLight intensity={7}/>
          <directionalLight position={[5,5,5]} intensity={6}/>
          {/* First sphere (planet) */}
          <group>
            <CentralSphere/>
            <Planet distance={6} size={2} color="white" speed={1} differentAngle={0} texture={earthTexture}/>  {/* Planet 1 */}
            <Planet distance={8} size={2} color="red" speed={1} differentAngle={Math.PI} />  {/* Planet 2, shifted by 60 degrees */}
            <Planet distance={10} size={2} color="green" speed={1} differentAngle={Math.PI / 2} /> {/* Planet 3, shifted by 30 degrees */}
          </group>
        </Canvas>
      </div>
    </>
  )
}

export default App
