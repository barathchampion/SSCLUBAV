import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import sponsor1 from "../assets/images/volleyball-logo-design-vector.jpg"; 
import sponsor2 from "../assets/images/volleyball-logo-design-vector.jpg";
import sponsor3 from "../assets/images/volleyball-logo-design-vector.jpg";

const SponsorsAndPrizes = () => {
    
    const navigate = useNavigate();

    const redirectevents = () => {
        navigate("/events");
      };

  return (
    <div className="sponsors-prizes-page">
      <Container className="my-5">
        {/* Event Introduction */}
        <Row className="text-center">
          <Col>
            <h2 className="text-danger">Volleyball Tournament 2025</h2>
            <p className="lead">
              The most exciting volleyball tournament is here! Join us for a thrilling competition with amazing prizes, powered by our generous sponsors. Get ready to witness some incredible matches and take home the grand prize!
            </p>
            <Button color="primary" size="lg" onClick={redirectevents} className="my-3">
              Register Now
            </Button>
          </Col>
        </Row>

        {/* Sponsors Section */}
        <Row className="my-5 text-center">
          <Col>
            <h3 className="mb-4">Our Sponsors</h3>
            <Row>
              <Col md="4">
                <Card className="shadow-lg mb-3">
                  <img src={sponsor1} alt="Sponsor 1" className="card-img-top" />
                  <CardBody>
                    <CardTitle tag="h5">Sponsor 1</CardTitle>
                    <CardText>We appreciate the support from Sponsor 1, who is a leader in sports equipment.</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" >
                <Card className="shadow-lg mb-3" >
                  <img src={sponsor2} alt="Sponsor 2" className="card-img-top" />
                  <CardBody>
                    <CardTitle tag="h5">Sponsor 2</CardTitle>
                    <CardText>Big thanks to Sponsor 2, who specializes in athletic wear and apparel.</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="shadow-lg mb-3" >
                  <img src={sponsor3} alt="Sponsor 3" className="card-img-top" />
                  <CardBody>
                    <CardTitle tag="h5">Sponsor 3</CardTitle>
                    <CardText>Special thanks to Sponsor 3, whose contribution to this event a success.</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        
         <Row className="my-5 text-center">
      <Col>
        <h3 className="mb-4 display-4 text-primary font-weight-bold">Event Prizes</h3>
        <p className="lead text-secondary">
          The competition will be fierce, but the rewards are worth it! Here are the amazing prizes for the winners:
        </p>

        <motion.div
          className="prizes-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3  }}
        >
          <Row className="prizes-row">
            {/* Men’s Prizes */}
            <Col md="6" className="mb-4">
              <Card className="prize-card">
                <CardBody>
                  <CardTitle className="text-center text-primary font-weight-bold">Men’s Prizes</CardTitle>
                  <ul className="list-unstyled prize-list">
                    <li><span className="prize-title">1st Place:</span><b> ₹20,000 </b>+ &#127942;</li>
                    <li><span className="prize-title">2nd Place:</span><b> ₹15,000 </b>+ &#127942;</li>
                    <li><span className="prize-title">3rd Place:</span><b> ₹7,000</b> + &#127942;</li>
                    <li><span className="prize-title">4th Place:</span><b> ₹5,000 </b>+ &#127942;</li>
                  </ul>
                </CardBody>
              </Card>
            </Col>

            {/* Women’s Prizes */}
            <Col md="6" className="mb-4">
              <Card className="prize-card">
                <CardBody>
                  <CardTitle className="text-center text-primary font-weight-bold">Women’s Prizes</CardTitle>
                  <ul className="list-unstyled prize-list">
                    <li><span className="prize-title">1st Place:</span><b> ₹7,000 </b>+ &#127942;</li>
                    <li><span className="prize-title">2nd Place:</span> <b>₹5,000 </b>+ &#127942;</li>
                    <li><span className="prize-title">3rd Place:</span><b> ₹4,000</b> + &#127942;</li>
                    <li>&nbsp;</li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </Col>
    </Row>
      </Container>
    </div>
  );
};

export default SponsorsAndPrizes;
