import React from "react";
import { Container, Button } from "reactstrap";
import { motion } from "framer-motion";
import "./homestyle.css"
// import Header from "./components/header";
// import Gallery from "./components/gallery";
// import Facility from "./components/facility";
// import SummerCamp from "./components/Sumercamp";
// import Footer from "./components/footer";
import ParallaxSection from "./parallelsection"; // Include the ParallaxSection

const Home = () => {
  return (
    <>
     
      <Container className="my-5">
        <section className="mb-5">
          <motion.h2
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to SS Volleyball Club
          </motion.h2>
          <motion.p
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Join us for volleyball events, summer camps, and more! <br />
                <div class="outer-cont flex">
                Ask Spacious AI
                </div>
          </motion.p>
        </section>
        
        <div></div>
        <ParallaxSection />
        <div class="flexer">
                <Button>Gallery</Button>
                <Button>Gallery</Button>
                <Button>Facility</Button>
                <Button>SummerCamp</Button>
        </div>        
        {/* <Gallery />
        <Facility />
        <SummerCamp /> */}
      </Container>
     
    </>
  )
}

export default Home
