import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col>
            <h5>SS Volleyball Club</h5>
            <p>Bringing volleyball enthusiasts together!</p>
          </Col>
          <Col>
            <h5>Contact Us</h5>
            <p><FaMapMarkerAlt /> Address: SS Volleyball Club, Andivilai,South Thamaraikulam Post,Kanyakumari</p>
            <p><FaPhoneAlt /> Phone: 123-456-789</p>
            <p><FaEnvelope /> Email: contact@ssvolleyball.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
