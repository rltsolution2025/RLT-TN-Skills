import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css'; // Import custom styles for the footer
import { Link } from 'react-router-dom';

const Footer = () => {
 
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4}>
            <div className="mb-4">
              <div className='footer-logo-container'>
              <img src='./assets/RLT-Logo.png' alt="SkillDev Academy logo - Company branding in white on dark background" className="mb-3" />
              <span >RLT SkillDev Academy</span>
              </div>
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
              <li className="mb-2"><Link to='/' className="text-white text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to='/Courses' className="text-white text-decoration-none">Courses</Link></li>
              <li className="mb-2"><Link to='/About' className="text-white text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to='/Careers' className="text-white text-decoration-none">Careers</Link></li>
              <li><Link to='/Contact' className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex">
                <FaMapMarkerAlt className="me-3 mt-1" />
                <span>No.2/18, 1st St, Corporation Colony, Rangarajapuram, Kodambakkam, Chennai, Tamil Nadu 600024</span>
              </li>
              <li className="mb-3 d-flex">
                <FaPhone className="me-3 mt-1" />
                <span>+91 89255 00513</span>
              </li>
              <li className="d-flex">
                <FaEnvelope className="me-3 mt-1" />
                <span>info@rltskilldevacademy.com</span>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} RLT SkillDev Academy. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
