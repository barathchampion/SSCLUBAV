import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { FaHome, FaImage, FaCalendarAlt } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Siva Sakthi Volleyball Club&#127952;</NavbarBrand>
      <Nav
        className="ml-auto"
        style={{ display: "flex", flexDirection: "row" }}
        navbar
      >
        <NavItem>
          <Link to="/" className="text-white mx-3">
            <FaHome style={{ fontSize: "20px" }} /> Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/gallery" className="text-white mx-3">
            <FaImage style={{ fontSize: "20px" }} /> Gallery
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/events" className="text-white mx-3">
            <FaCalendarAlt style={{ fontSize: "20px" }} /> Events
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
