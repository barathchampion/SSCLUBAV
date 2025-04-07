import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react"; // or QRCodeSVG

const LocationPage = () => {
  return (
    <Container className="my-5 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="display-4 mb-4">Find Us Easily!</h2>
        <p className="lead mb-5">
           Scan the QR code below to get the exact
          location of the SS Volleyball Club. It's that easy!
        </p>

        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={4}>
            <div className="qr-container">
              <QRCodeCanvas value="https://maps.app.goo.gl/HvWyinjd7KQA4LSF6" size={256} />
              {/* Replace with your actual Google Maps location URL */}
            </div>
            <div className="text-center mt-4">
              <Button color="primary" size="lg" className="btn">
                Scan & Get Directions
              </Button>
            </div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default LocationPage;
