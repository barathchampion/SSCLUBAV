import { motion } from "framer-motion";
import volleyballLogo from '../assets/images/SIVA.png';

const ParallaxSection = () => (
  <div Style="display:flex; justify-content: center;flex-direction: column;align-items: center;" className="parallax-section">
    <h2 className="text-center text-danger">SS Volleyball Club</h2>
    
    <motion.div
      className="parallax-image"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        backgroundImage: `url(${volleyballLogo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "250px", // Fixed height, you can adjust this
        width: "350px", // Makes it responsive
        maxWidth: "100%", // Prevents overflow
        borderRadius: "10px", // Optional: add rounded corners
        
      }}
    />
  </div>
);

export default ParallaxSection;
