import React, { useContext, useState } from 'react';
import { ApplyFormContext } from '../Context/ApplyFormContext';

const CourseRegistrationForm = ({ show, onClose }) => {
  const { formData, setFormData } = useContext(ApplyFormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'courseType' && { specificCourse: '' }),
      errors: {}
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.mobile) errors.mobile = 'Mobile is required';
    if (!formData.courseType) errors.courseType = 'Course type required';
    if (!formData.specificCourse) errors.specificCourse = 'Please select a course';

    setFormData(prev => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Application Submitted!\n\nName: ${formData.name}\nCourse: ${formData.specificCourse}`);
      onClose();
    }
  };

  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Apply for Course</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* Form fields same as previous example */}
              {/* ... */}
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRegistrationForm;
