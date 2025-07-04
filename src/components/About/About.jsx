import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBullseye, FaLightbulb, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4">About SkillDev Academy</h1>
              <p className="lead">Empowering individuals with skills for the digital economy since 2010.</p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://placehold.co/600x400" 
                alt="Instructor teaching a diverse group of adult students in a modern classroom" 
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-bg bg-primary rounded-circle p-3 me-3">
                      <FaBullseye size={24} className="text-white" />
                    </div>
                    <h3 className="mb-0">Our Mission</h3>
                  </div>
                  <Card.Text>
                    To bridge the skills gap in the modern workforce by providing accessible, high-quality training programs that empower individuals to thrive in their careers. We believe in learning by doing, with hands-on projects that mirror real-world challenges.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-bg bg-primary rounded-circle p-3 me-3">
                      <FaLightbulb size={24} className="text-white" />
                    </div>
                    <h3 className="mb-0">Our Vision</h3>
                  </div>
                  <Card.Text>
                    To become the leading skills development platform recognized for transforming careers through innovative learning methods. We envision a world where everyone has access to the education needed for meaningful employment in the digital age.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About the Program */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://placehold.co/600x400" 
                alt="Diverse group of professionals collaborating on a project in a modern workspace" 
                className="img-fluid rounded shadow-sm"
              />
            </Col>
            <Col lg={6}>
              <h2 className="mb-4">About Our Skill Development Program</h2>
              <p className="lead mb-4">
                Our comprehensive skill development programs are designed by industry experts to meet current market demands.
              </p>
              <div className="d-flex mb-3">
                <div className="me-4">
                  <FaUsers size={32} className="text-primary mb-2" />
                </div>
                <div>
                  <h4>Industry-Aligned Curriculum</h4>
                  <p>Courses designed with input from hiring managers at top tech companies to ensure relevance.</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="me-4">
                  <FaChalkboardTeacher size={32} className="text-primary mb-2" />
                </div>
                <div>
                  <h4>Experienced Instructors</h4>
                  <p>Learn from professionals with 10+ years of industry experience and teaching expertise.</p>
                </div>
              </div>
              <Button variant="outline-primary" size="lg" className="rounded-pill px-4">
                Explore Our Courses
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Core Values</h2>
          <Row>
            {[
              {
                title: "Excellence",
                description: "We strive for the highest quality in everything we do, from curriculum design to student support."
              },
              {
                title: "Accessibility",
                description: "Making quality education available to all through flexible learning options and scholarships."
              },
              {
                title: "Innovation",
                description: "Constantly evolving our methods to stay ahead of industry trends and technologies."
              },
              {
                title: "Community",
                description: "Building networks of learners and alumni that support each other's growth."
              }
            ].map((value, index) => (
              <Col md={6} lg={3} className="mb-4" key={index}>
                <div className="p-4 h-100 border rounded bg-white shadow-sm">
                  <h4 className="text-primary">{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
