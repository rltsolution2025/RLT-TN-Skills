import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4}>
            <div className="mb-4">
              <img src="https://placehold.co/200x60" alt="SkillDev Academy logo - Company branding in white on dark background" className="mb-3" />
              <p className="mb-4">
                Empowering individuals with practical skills for the modern workforce.
              </p>
              <div className="social-links">
                <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
                <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
                <a href="#" className="text-white me-3"><FaLinkedin size={24} /></a>
                <a href="#" className="text-white"><FaInstagram size={24} /></a>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Courses</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex">
                <FaMapMarkerAlt className="me-3 mt-1" />
                <span>123 Skill Street, Education District, Learning City 12345</span>
              </li>
              <li className="mb-3 d-flex">
                <FaPhone className="me-3 mt-1" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="d-flex">
                <FaEnvelope className="me-3 mt-1" />
                <span>info@skilldevacademy.com</span>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Skill Development Academy. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
