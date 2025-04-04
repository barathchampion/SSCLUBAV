import { motion } from "framer-motion";

const ParallaxSection = () => (
  <motion.div
    style={{ height: "500px", background: "url('http://localhost:3000/images/volleyball-logo-design-vector.jpg') center/cover" }}
    initial={{ y: "-100vh" }}
    animate={{ y: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <h2 className="text-center text-danger">Experience the Thrill</h2>
  </motion.div>
);

export default ParallaxSection;
