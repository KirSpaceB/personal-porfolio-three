
export default function CentralSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} /> {/* Central sphere */}
      <meshStandardMaterial color="yellow" />
    </mesh>
  )
}
