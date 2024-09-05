
export default function CentralSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} /> {/* Central sphere */}
      <meshStandardMaterial color="yellow" />
    </mesh>
  )
}
