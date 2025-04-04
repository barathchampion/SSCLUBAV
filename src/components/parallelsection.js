import { motion } from "framer-motion";
import volleyballLogo from '../assets/images/volleyball-logo-design-vector.jpg';

const ParallaxSection = () => (

<div Style="display: flex;flex-direction: column;justify-content: center;align-items: center">
<h2 className="text-center text-danger">Experience the Thrill</h2>

<motion.div
  style={{ height: "300px",width: "500px", background: `url(${volleyballLogo}) center/cover` }}
  initial={{ y: "-100vh" }}
  animate={{ y: 0 }}
  transition={{ duration: 1, ease: "easeInOut" }}
>
    {/* <h2 className="text-center text-danger">Experience the Thrill</h2> */}
  </motion.div>
  </div>
);

export default ParallaxSection;
