import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { FaHome, FaImage, FaCalendarAlt } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">SS Volleyball Club</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <a href="#home" className="text-white mx-3">
            <FaHome /> Home
          </a>
        </NavItem>
        <NavItem>
          <a href="#gallery" className="text-white mx-3">
            <FaImage /> Gallery
          </a>
        </NavItem>
        <NavItem>
          <a href="#calendar" className="text-white mx-3">
            <FaCalendarAlt /> Events
          </a>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
