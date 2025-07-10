import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css'; // Import custom styles for the header

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <div className='logo-container'>
          <img
            src="./assets/RLT-Logo.png"
            alt="SkillDev Academy logo - A modern geometric design in blue and white"
            className="d-inline-block align-top"
            
          />
          <span style={{width:'150px', textAlign:'center'}}>RLT SkillDev Academy</span>
          </div> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2">About</Nav.Link>
            <Nav.Link as={Link} to="/courses" className="mx-2">Courses</Nav.Link>
            <Nav.Link as={Link} to="/careers" className="mx-2">Careers</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">Contact</Nav.Link>
            <div className="contact-info d-flex align-items-center ms-3">
              <FaPhone className="me-2 text-white" />
              <span className="text-white">+91 89255 00513</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
