import {Canvas} from '@react-three/fiber';
import "./App.css"
import CentralSphere from './components/CentralSphere';
import Planet from './components/Planet';

function App() {
  return (
    
    <>
      <div id="canvas-container">
        <Canvas
          camera={{
            position:[-10,0,10],
            fov:90
          }}
        >
          <ambientLight intensity={7}/>
          <directionalLight position={[5,5,5]} intensity={6}/>
          {/* First sphere (planet) */}
          <group>
            <CentralSphere/>
            <Planet distance={5} size={1} color="blue" speed={1} /> {/* Planet 1 */}
          </group>
        </Canvas>
      </div>
    </>
  )
}

export default App
