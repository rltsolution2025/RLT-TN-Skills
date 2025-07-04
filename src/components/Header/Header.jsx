import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://placehold.co/150x50"
            alt="SkillDev Academy logo - A modern geometric design in blue and white"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/courses" className="mx-2">Courses</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2">About</Nav.Link>
            <Nav.Link as={Link} to="/careers" className="mx-2">Careers</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">Contact</Nav.Link>
            <div className="contact-info d-flex align-items-center ms-3">
              <FaPhone className="me-2 text-white" />
              <span className="text-white">+1 (123) 456-7890</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
