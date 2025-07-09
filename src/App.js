import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Courses from './components/Courses/Courses';
import Career from './components/Career/Career'
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollUp/ScrollUp';
import './App.css';
import ApplyFormModal from './components/ApplyFormModel/ApplyFormModel';
import { ApplyFormProvider } from './components/Context/ApplyFormContext';

function App() {
  return (
    <ApplyFormProvider>
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <ApplyFormModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </ApplyFormProvider>
  );
}

export default App;
