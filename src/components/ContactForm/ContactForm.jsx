import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './ContactForm.css'; // Import custom styles for the contact form
import {postContactForm} from '../Services/Api'; // Import the API function

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false); // State to manage submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Send form data to backend
    await postContactForm(formData);
    console.log('Enquiry posted to backend:', formData);

    // Save data to localStorage
    const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    enquiries.push(formData);
    localStorage.setItem('enquiries', JSON.stringify(enquiries));

    // Set submitted state to true
    setSubmitted(true);

    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      message: '',
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    alert('There was an error submitting your enquiry. Please try again.');
  }
};

  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="text-center mb-4">For Enquiry</h2>
                {submitted ? ( // Conditional rendering for thank you message
                  <div className="text-center">
                    <h4>Thank You!</h4>
                    <p>Your enquiry has been submitted successfully.</p>
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your first name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Mobile</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter your Mobile Number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <div className="text-center">
                      <Button variant="light" type="submit" className="px-4 py-2 custom-hover">
                        Submit
                      </Button>
                    </div>
                  </Form>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
