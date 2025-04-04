import React from "react";
import { Container, Button } from "reactstrap";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Header from "./components/header";
import Gallery from "./components/gallery";
import Facility from "./components/facility";
import SummerCamp from "./components/Sumercamp";
import PlayerDetails from "./components/playerdetails";
import Home from "./components/home";
import Footer from "./components/footer";
import ParallaxSection from "./components/parallelsection"; // Include the ParallaxSection

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>  {/* Replaced Switch with Routes */}
          <Route path="/" element={<Home />} />  {/* Updated to use element prop */}
          <Route path="/gallery" element={<Gallery />} />  {/* Updated to use element prop */}
          <Route path="/player/:id" element={<PlayerDetails />} />  {/* Updated to use element prop */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
