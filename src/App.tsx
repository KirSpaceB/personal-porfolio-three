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
            position:[0,0,15],
            fov:90
          }}
        >
          <ambientLight intensity={7}/>
          <directionalLight position={[5,5,5]} intensity={6}/>
          {/* First sphere (planet) */}
          <group>
            <CentralSphere/>
            <Planet distance={4} size={2} color="blue" speed={1} /> {/* Planet 1 */}
            <Planet distance={6} size={2} color="blue" speed={2} /> {/* Planet 1 */}
            <Planet distance={8} size={2} color="blue" speed={3} /> {/* Planet 1 */}
          </group>
        </Canvas>
      </div>
    </>
  )
}

export default App
