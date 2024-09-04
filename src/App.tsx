import {Canvas} from '@react-three/fiber';
import Earth from './components/Earth';
import "./App.css"

function App() {
  return (
    
    <>
      <div id="canvas-container">
        <Canvas
          camera={{
            position:[0,0,10],
            fov:60
          }}
        >
          <Earth/>
          <ambientLight intensity={7}/>
          <directionalLight position={[5,5,5]} intensity={6}/>
        </Canvas>
      </div>
    </>
  )
}

export default App
