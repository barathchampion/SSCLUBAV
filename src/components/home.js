import React from "react";
import { Container, Button } from "reactstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { saveAs } from "file-saver";
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
  const redirectlocation = () => {
    navigate("/locationPage");
  };
  const redirectevents = () => {
    navigate("/events");
  };
  const redirectSponsers = () => {
    navigate("/sponsers");
  };

  const upcomingEvent = {
    name: "State Level Volleyball Tournament 2025",
    date: "April 14,15 & 16, 2025",
    description:
      "Join us for the Volleyball Tournament. Don't miss the action!",
    registrationLink: "/register", 
    pdfDownloadLink: "/VB.pdf", 
  };

  const handleDownload = () => {
    // Use the saveAs function from file-saver
    saveAs(upcomingEvent.pdfDownloadLink, "VbTournament_Andivilai(2025).pdf");
  };

  return (
    <>
      <Container className="">
        {/* Scrolling notification for upcoming events */}
        <div className="scrolling-notification">
          <p Style="margin: unset;">
            <strong>Upcoming Event:</strong> {upcomingEvent.name} -{" "}
            {upcomingEvent.date}.{" "}
            <Link to="/events">Click here to register!</Link>
          </p>
        </div>

        <section className="mb-3">
          <motion.h2
            className="text-center ltr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome!!
          </motion.h2>
          <motion.p
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Join us for volleyball events, summer camps, and more! <br />
          </motion.p>
        </section>
        <ParallaxSection />
        <div className="flexer dirchange">
          <Button onClick={redirectgallery} className="btn my-3" size="lg">
            Gallery
          </Button>

          {/* <Button
            onClick={redirectfacility}
            className="btn my-3" 
            size="lg"
          >
            Facility
          </Button> */}
          <Button onClick={redirectevents} className="btn my-3" size="lg">
            Events
          </Button>

          <Button onClick={redirectlocation} className="btn my-3" size="lg">
            Location
          </Button>
          <Button onClick={redirectSponsers} className="btn my-3" size="lg">
            Sponsers & Prize
          </Button>

          <Button className="btn my-3" size="lg">
            SummerCamp
          </Button>
        </div>

        <div
          Style="display: flex;flex-direction: column;justify-content: center;align-items: center;"
          className="pdf-download-section text-center my-2"
        >
          <h3>Download the Event Invitation</h3>
          <Button
            color="primary"
            className="btn-download"
            onClick={handleDownload}
          >
            <FaDownload className="mr-2" />
            Download Invitation
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Home;
