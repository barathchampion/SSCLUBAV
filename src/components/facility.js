import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { motion } from "framer-motion";
import { FaBasketballBall, FaRunning } from "react-icons/fa";

const Facility = () => {
  const facilities = [
    { name: "Indoor Courts", description: "State-of-the-art indoor courts.", icon: <FaBasketballBall /> },
    { name: "Outdoor Courts", description: "Spacious outdoor courts.", icon: <FaRunning /> },
    { name: "Gym", description: "Fully equipped gym for fitness.", icon: <FaRunning /> },
  ];

  return (
    <div id="facilities" className="my-5">
      <h3 className="text-center">Our Facilities</h3>
      <div className="d-flex justify-content-around flex-wrap">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3 }}
            className="m-2"
          >
            <Card style={{ width: "18rem" }}>
              <CardBody>
                <div className="d-flex align-items-center">
                  <div className="mr-3">{facility.icon}</div>
                  <CardTitle tag="h5">{facility.name}</CardTitle>
                </div>
                <CardText>{facility.description}</CardText>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default Facility;
