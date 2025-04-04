import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { motion } from "framer-motion";

const SummerCamp = () => {
  return (
    <div id="summerCamp" className="my-5 text-center">
      <h3>Join Our Summer Camps</h3>
      <div className="d-flex justify-content-around flex-wrap">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="m-2"
        >
          <Card style={{ width: "18rem" }}>
            <CardBody>
              <CardTitle tag="h5">Volleyball Training Camp</CardTitle>
              <CardText>Intensive training for all skill levels.</CardText>
              <Button color="primary">Sign Up Now</Button>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SummerCamp;
