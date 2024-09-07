import { Html } from "@react-three/drei"
import {motion} from 'framer-motion'

const modalStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  minWidth: '500px',
  minHeight:'500px',
  textAlign: 'center',
};

export default function PlanetModal() {

  const modalVariants = {
    hidden: { opacity: 0, scale: 0 },  // Start small and invisible
    visible: { opacity: 1, scale: 1 },  // Pop to full size and become visible
    exit: { opacity: 0, scale: 0 },  // Shrink and fade out on exit
  };

  return (
    <Html position={[0, 3, 0]}>
      <motion.div
        style={modalStyles}
        initial='hidden'
        exit='exit'
        animate='visible'
        variants={modalVariants}
        transition={{
          type: "spring",   // Spring animation for a snappy effect
          stiffness: 150,   // Adjust stiffness to make the spring more or less tight
          damping: 10,      // Controls how much bounce the element has
          duration: 0.6     // Duration of the entire animation
        }}
      >
        <h2>Project Section</h2>
        <p>This is a description of one of my projects.</p>
      </motion.div>
    </Html>
  )
}
