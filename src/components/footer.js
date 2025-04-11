import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col>
            <h5>Siva Sakthi Volleyball Club</h5>
            <p>Bringing volleyball enthusiasts together!</p>
          </Col>
          <Col>
            <h5>Contact Us</h5>
            <p><FaMapMarkerAlt /> Address: <a href="https://maps.app.goo.gl/VazgGCJKUVCqfMW79" target="_blank" rel="noopener noreferrer">SivaSakthi Volleyball Club, Andivilai, South Thamaraikulam Post, Kanyakumari</a></p>
            <p><FaPhoneAlt /> Phone: 123-456-789</p>
            <p><FaEnvelope /> Email: <a href="mailto:sivasakthivbc@gmail.com">sivasakthivbc@gmail.com</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
