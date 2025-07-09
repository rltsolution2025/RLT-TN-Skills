import React, { useRef, useContext } from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { FaBriefcase, FaChartLine, FaUserTie, FaHandshake, FaLaptopCode, FaUser } from 'react-icons/fa';
import { ApplyFormContext } from '../Context/ApplyFormContext';
import './Career.css';

const Career = () => {
    const { setShowModal } = useContext(ApplyFormContext);
    const jobOpeningsRef = useRef(null); // Create a ref for the job openings section

    const jobOpenings = [
        {
            id: 1,
            title: "Instrumentation Engineer",
            company: "RLT Instrumentation Pvt, Ltd.",
            location: "Chengalpattu, TN",
            type: "Internship",
            description: "Gain practical experience as an Instrumentation Engineer through an internship",
            postedDate: "2 days ago"
        },
        {
            id: 2,
            title: "Agriculture Officer",
            company: "RL Technologies Pvt, Ltd.",
            location: "Chengalpattu, TN",
            type: "Internship",
            description: "Learn modern farming, crop management, and agri-policy in this Agriculture Officer course.",
            postedDate: "1 week ago"
        },
    ];

    const placementStats = [
        { metric: "Placement Rate Within 6 Months", value: "92%" },
        { metric: "Average Salary Increase", value: "45%" },
        { metric: "Hiring Partners", value: "250+" },
        { metric: "Alumni Network", value: "15,000+" }
    ];

    const careerServices = [
        {
            title: "Resume Building",
            description: "We help craft resumes that get noticed by hiring managers and pass through Applicant Tracking Systems."
        },
        {
            title: "Interview Preparation",
            description: "Mock interviews with industry professionals including technical and behavioral question practice."
        },
        {
            title: "Career Counseling",
            description: "One-on-one sessions with our career advisors to help identify your ideal career path."
        },
        {
            title: "Job Placement Assistance",
            description: "Direct introductions to our network of hiring partners and exclusive job listings."
        }
    ];

    // Function to scroll to the job openings section
    const scrollToJobOpenings = () => {
        if (jobOpeningsRef.current) {
            jobOpeningsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="career-page">
            {/* Hero Section */}
            <section className="career-hero bg-primary text-white py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h1 className="display-4 fw-bold mb-4">Launch Your Career</h1>
                            <p className="lead">Our graduates land jobs at top companies. Let us help you start your dream career.</p>
                            <button 
                                className="btn btn-light btn-lg rounded-pill px-4 mt-3" 
                                onClick={scrollToJobOpenings} // Add onClick handler
                            >
                                Explore Job Opportunities
                            </button>
                        </Col>
                        <Col lg={6}>
                            <img 
                                src="./assets/Career.png" 
                                alt="Diverse group of professionals celebrating job offers by holding up signed contracts"
                                className="img-fluid rounded shadow-lg" 
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Placement Statistics */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">By the Numbers</h2>
                    <Row>
                        {placementStats.map((stat, index) => (
                            <Col md={3} sm={6} className="mb-4" key={index}>
                                <Card className="border-0 shadow-sm text-center h-100">
                                    <Card.Body>
                                        <FaChartLine size={32} className="text-primary mb-3" />
                                        <h3 className="display-5 fw-bold">{stat.value}</h3>
                                        <p className="text-muted">{stat.metric}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Career Services */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center mb-5">Career Services</h2>
                    <Row>
                        {careerServices.map((service, index) => (
                            <Col md={6} lg={3} className="mb-4" key={index}>
                                <Card className="border-0 shadow-sm h-100">
                                    <Card.Body className="p-4">
                                        <div className="icon-box bg-primary-light rounded-circle mb-3">
                                            {index === 0 && <FaBriefcase size={20} className="text-primary" />}
                                            {index === 1 && <FaUser Tie size={20} className="text-primary" />}
                                            {index === 2 && <FaHandshake size={20} className="text-primary" />}
                                            {index === 3 && <FaLaptopCode size={20} className="text-primary" />}
                                        </div>
                                        <h5 className="mb-3">{service.title}</h5>
                                        <p className="text-muted">{service.description}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Job Openings */}
            <section className="py-5 bg-light" ref={jobOpeningsRef}> {/* Attach ref here */}
                <Container>
                    <h2 className="text-center mb-5">Current Job Openings</h2>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            {jobOpenings.map(job => (
                                <Card key={job.id} className="mb-3 border-0 shadow-sm">
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col md={8}>
                                                <h4>{job.title}</h4>
                                                <div className="d-flex flex-wrap mb-2">
                                                    <span className="me-3 text-muted">{job.company}</span>
                                                    <span className="me-3 text-muted">{job.location}</span>
                                                    <span className="badge">{job.type}</span>
                                                </div>
                                                <p>{job.description}</p>
                                            </Col>
                                            <Col md={4} className="text-md-end mt-3 mt-md-0">
                                                <span className="d-block text-muted small mb-2">Posted {job.postedDate}</span>
                                                <button onClick={() => setShowModal(true)} className="btn btn-outline apply">Apply Now</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-5 bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <h2 className="text-center mb-5">Career Support FAQs</h2>
                            <Accordion defaultActiveKey="0">
                                {[
                                    {
                                        question: "How does the job placement process work?",
                                        answer: "Our career services team connects qualified graduates with our network of hiring partners through curated job listings and direct referrals."
                                    },
                                    {
                                        question: "Do you guarantee job placement?",
                                        answer: "While we can't guarantee employment, our proven track record shows 92% of graduates find relevant employment after completing their program."
                                    },
                                    {
                                        question: "What salary can I expect after completing a course?",
                                        answer: "Salaries vary by program and location, but our graduates average a 45% increase from their pre-course salaries."
                                    },
                                    {
                                        question: "How long can I access career services after graduation?",
                                        answer: "All graduates have six months of career services including job listings, resume reviews, and alumni networking events."
                                    }
                                ].map((item, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Accordion.Header>{item.question}</Accordion.Header>
                                        <Accordion.Body>{item.answer}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Career;
