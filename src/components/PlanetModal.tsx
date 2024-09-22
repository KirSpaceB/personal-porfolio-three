import { Html } from "@react-three/drei"
import {motion} from 'framer-motion'
import '../css/PlanetModal.css'
import IntroductionSection from "./IntroductionSection";

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
interface PlanetModalProps {
  UIRenderKey:number | undefined
}

export default function PlanetModal({UIRenderKey} : PlanetModalProps) {

  const modalVariants = {
    hidden: { opacity: 0, scale: 0 },  // Start small and invisible
    visible: { opacity: 1, scale: 1 },  // Pop to full size and become visible
    exit: { opacity: 0, scale: 0 },  // Shrink and fade out on exit
  };

  return (
    <Html position={[0, 3, 0]}>
      <motion.div
        id="modalStyle"
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
        {UIRenderKey === 1 ? <IntroductionSection/> : <div>Wrong Value</div>}
      </motion.div>
    </Html>
  )
}
