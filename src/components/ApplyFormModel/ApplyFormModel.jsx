import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ApplyFormContext } from '../Context/ApplyFormContext';
import {postApplyForm} from '../Services/Api'; // Import the API function
import './ApplyFormModel.css'; // Import custom styles for the apply form modal


const ApplyFormModal = () => {
  const { showModal, setShowModal } = useContext(ApplyFormContext);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    programType: '', // Changed from position to programType
    course: '', // Added for course selection
    internship: '', // Added for internship selection
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };
    const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('programType', formData.programType);
    if (formData.programType === 'course') data.append('course', formData.course);
    if (formData.programType === 'internship') data.append('internship', formData.internship);
    // data.append('resume', formData.resume);  
  
  try {
      await postApplyForm(formData);
      console.log('Enquiry posted to backend:', formData);
      setFormSubmitted(true);
      const applications = JSON.parse(localStorage.getItem('applications') || '[]');
      applications.push(formData);
      localStorage.setItem('applications', JSON.stringify(applications));
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          programType: '',
          course: '',
          internship: '',
          // resume: null,
        });
        setFormSubmitted(false);
        setShowModal(false);
      }, 3000);
    } catch (error) {
      console.error('Submission failed:', error);
    }
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Apply Now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {formSubmitted ? (
          <div className="p-4 bg-success bg-opacity-10 rounded mb-4 text-center">
            <h3 className="text-success mb-3">Thank You!</h3>
            <p className="text-muted">Your application has been received.</p>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="programType">
              <Form.Label>Program Type</Form.Label>
              <Form.Control
                as="select"
                name="programType"
                value={formData.programType}
                onChange={handleChange}
                required
              >
                <option value="">Select a Program Type</option>
                <option value="course">Free Course</option>
                <option value="internship">Internship</option>
              </Form.Control>
            </Form.Group>

            {formData.programType === 'course' && (
              <Form.Group className="mb-3" controlId="course">
                <Form.Label>Select Course</Form.Label>
                <Form.Control
                  as="select"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="AI Analyst">AI Analyst</option>
                  <option value="Tally">Tally & GST</option>
                  <option value="Integrated Fish Farming">Integrated Fish Farming</option>
                  <option value="Horticulture Supervisor">Horticulture Supervisore</option>
                  <option value="Organic Cultivator">Organic Cultivator</option>
                  <option value="Coconut Specialist">Coconut Specialist</option>
                  <option value="Bakery">Bakery & Confectioneryr</option>
                  <option value="Food and Beverage Services">Food and Beverage Services</option>
                  <option value="Front Office Executive">Front Office Executive</option>
                  <option value="Housekeeping Supervisor">Housekeeping Supervisor</option>
                </Form.Control>
              </Form.Group>
            )}

            {formData.programType === 'internship' && (
              <Form.Group className="mb-3" controlId="internship">
                <Form.Label>Select Internship</Form.Label>
                <Form.Control
                  as="select"
                  name="internship"
                  value={formData.internship}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an Internship</option>
                  <option value="Instrumentation Internship">Instrumentation Internship</option>
                  <option value="Agriculture Officer">Agriculture Officer</option>
                </Form.Control>
              </Form.Group>
            )}

            {/* <Form.Group className="mb-3" controlId="resume">
              <Form.Label>Upload Resume</Form.Label>
              <Form.Control
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
              />
            </Form.Group> */}

            <Button variant="primary" type="submit" className="w-100">
              Submit 
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ApplyFormModal;
