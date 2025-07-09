import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

//APIs
export const postContactForm = (formData) => API.post('/contact', formData);
export const postApplyForm = (formData) => API.post('/apply', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
export const getContactForms = () => API.get('/contact');
export const getApplyForms = () => API.get('/apply');
export const getEnquiries = () => {
  const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
  return Promise.resolve(enquiries);
};
export const getApplications = () => {
  const applications = JSON.parse(localStorage.getItem('applications') || '[]');
  return Promise.resolve(applications);
};


