import React from "react";
import { Container, Button } from "reactstrap";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./homestyle.css";

import ParallaxSection from "./parallelsection"; // Include the ParallaxSection

const Home = () => {
  const navigate = useNavigate();

  const redirectgallery = () => {
    navigate("/gallery");
  };
  const redirectfacility = () => {
    navigate("/facility");
  };
  return (
    <>
      <Container className="my-5">
        <section className="mb-3">
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
            <div class="outer-cont flex">Ask Spacious AI</div>
          </motion.p>
        </section>
        <ParallaxSection />
        <div className="flexer dirchange">
          <Button
            onClick={redirectgallery}
            className="btn my-3" // Combined btn and my-3
            size="lg"
          >
            Gallery
          </Button>

          <Button
            onClick={redirectfacility}
            className="btn my-3" // Combined btn and my-3
            size="lg"
          >
            Facility
          </Button>

          <Button className="btn my-3" size="lg">
            Location
          </Button>

          <Button className="btn my-3" size="lg">
            SummerCamp
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Home;
