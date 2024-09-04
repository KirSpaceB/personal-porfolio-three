import {Canvas} from '@react-three/fiber'
import "./App.css"
function App() {

  return (
    <>
      <div id="canvas-container">
        <Canvas
          camera={{
            position:[0,0,8],
            fov:60
          }}
        >
          <mesh>
            <sphereGeometry args={[2,32,32]}/>
            <meshStandardMaterial color="lightblue"/>
          </mesh>
          <ambientLight intensity={0.5}/>
        </Canvas>
      </div>
    </>
  )
}

export default App
