// src/context/ApplyFormContext.js
import { createContext, useState } from 'react';

export const ApplyFormContext = createContext();

export const ApplyFormProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    courseType: '',
    specificCourse: '',
    errors: {}
  });

  return (
     <ApplyFormContext.Provider value={{ showModal, setShowModal, formData, setFormData }}>
      {children}
    </ApplyFormContext.Provider>
  );
};
