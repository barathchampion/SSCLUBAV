import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Register = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">Event Registration</h2>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter your name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text" name="phone" id="phone" placeholder="Enter your phone number" />
        </FormGroup>
        <Button color="primary" type="submit">
          Register Now
        </Button>
      </Form>
    </div>
  );
};

export default Register;
