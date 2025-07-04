import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero-section bg-primary text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold mb-4">Unlock Your Potential</h1>
            <p className="lead mb-4">Join our skill development courses and take your career to the next level with industry-relevant training.</p>
            <Button variant="light" size="lg" className="rounded-pill px-4 py-2">Browse Courses</Button>
          </Col>
          <Col md={6}>
            <img 
              src="https://placehold.co/600x400" 
              alt="Diverse group of students learning in a modern classroom with laptops" 
              className="img-fluid rounded shadow-lg"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
