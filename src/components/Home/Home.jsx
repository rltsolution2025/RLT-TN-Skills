import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import StatsSection from '../StatsSection';
import SuccessStories from '../SuccessStories';
import Testimonials from '../Testimonials';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      {/* Enhanced Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Transform Your Skills, Transform Your Future</h1>
              <p className="lead mb-4">Join 10,000+ learners who've launched tech careers through our industry-aligned programs.</p>
              <div className="d-flex flex-wrap gap-3">
                <Button variant="light" size="lg" className="rounded-pill px-4">Explore Courses</Button>
                <Button variant="outline-light" size="lg" className="rounded-pill px-4">Speak to Advisor</Button>
              </div>
              <div className="mt-4 d-flex align-items-center">
                <div className="rating-badge bg-white text-primary rounded-pill px-3 py-1 me-3">
                  <strong>4.9</strong> ★★★★★ (1,200+ reviews)
                </div>
                <span className="text-white-50">Trusted by leading employers</span>
              </div>
            </Col>
            <Col lg={6}>
              <img 
                src="./assets/Skill-development.png" 
                alt="Diverse group of professionals collaborating in a modern tech workspace with multiple screens" 
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2>Why Choose SkillDev Academy?</h2>
              <p className="lead">The fastest path from beginner to hired professional</p>
            </Col>
          </Row>
          <Row>
            {[
              {
                icon: "🏆",
                title: "Industry-Proven Curriculum",
                desc: "Courses designed with input from hiring managers at top tech companies"
              },
              {
                icon: "👨‍🏫",
                title: "Expert Instructors",
                desc: "Learn from professionals with 10+ years of industry experience"
              },
              {
                icon: "💼",
                title: "Career-Focused",
                desc: "92% job placement rate within 6 months of graduation"
              },
              {
                icon: "🔄",
                title: "Flexible Learning",
                desc: "Full-time, part-time, and self-paced options available"
              }
            ].map((item, index) => (
              <Col md={3} sm={6} key={index} className="mb-4">
                <div className="p-4 h-100 bg-light rounded-3 text-center">
                  <div className="display-4 mb-3">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p className="text-muted mb-0">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Course Categories */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Explore Our Course Categories</h2>
          <Row>
            {[
              {
                title: "Web Development",
                description: "Become a full-stack developer with modern technologies",
                image: "https://placehold.co/600x400?text=Web+Dev"
              },
              {
                title: "Data Science",
                description: "Master data analysis and machine learning",
                image: "https://placehold.co/600x400?text=Data+Science"
              },
              {
                title: "Digital Marketing",
                description: "Learn SEO, social media, and growth strategies",
                image: "https://placehold.co/600x400?text=Marketing"
              },
              {
                title: "Cloud Computing",
                description: "AWS, Azure and Google Cloud certification courses",
                image: "https://placehold.co/600x400?text=Cloud+Comp"
              }
            ].map((category, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <div className="course-category-card position-relative overflow-hidden rounded-3">
                  <img 
                    src={category.image} 
                    alt={`${category.title} course category`}
                    className="img-fluid w-100"
                  />
                  <div className="category-overlay p-4 d-flex flex-column justify-content-end">
                    <h5 className="text-white mb-1">{category.title}</h5>
                    <p className="text-white-50 small mb-2">{category.description}</p>
                    <Button variant="outline-light" size="sm" className="align-self-start mt-2">
                      View Courses
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Academy Spotlight */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://placehold.co/600x400" 
                alt="Modern computer lab with students working on coding projects at SkillDev Academy" 
                className="img-fluid rounded shadow-sm"
              />
            </Col>
            <Col lg={6}>
              <h2 className="mb-4">About SkillDev Academy</h2>
              <p>Founded in 2015, we've helped thousands of students transition into tech careers through our immersive programs.</p>
              
              <div className="academy-highlights mt-4">
                <div className="d-flex mb-3">
                  <div className="me-4">
                    <div className="bg-primary text-white rounded-circle p-2">
                      <strong>8+</strong>
                    </div>
                  </div>
                  <div>
                    <h5>Years of Excellence</h5>
                    <p className="text-muted mb-0">Providing industry-leading tech education</p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <div className="me-4">
                    <div className="bg-primary text-white rounded-circle p-2">
                      <strong>50+</strong>
                    </div>
                  </div>
                  <div>
                    <h5>Expert Instructors</h5>
                    <p className="text-muted mb-0">From companies like Google, Amazon, and Microsoft</p>
                  </div>
                </div>
                
                <div className="d-flex">
                  <div className="me-4">
                    <div className="bg-primary text-white rounded-circle p-2">
                      <strong>120+</strong>
                    </div>
                  </div>
                  <div>
                    <h5>Courses & Workshops</h5>
                    <p className="text-muted mb-0">Covering the most in-demand tech skills</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Original Sections (Stats, Success Stories, Testimonials) */}
      <StatsSection />
      <SuccessStories />
      <Testimonials />

      {/* Call to Action */}
      <section className="cta-section bg-primary text-white py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="mb-4">Ready to Start Your Tech Journey?</h2>
              <p className="lead mb-4">Speak with an admissions advisor today about which program is right for you.</p>
              <Button variant="light" size="lg" className="rounded-pill px-4 me-3">
                Apply Now
              </Button>
              <Button variant="outline-light" size="lg" className="rounded-pill px-4">
                Curriculum Guide
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;
