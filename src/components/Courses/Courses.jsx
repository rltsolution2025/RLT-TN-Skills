import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../CourseCard/CourseCard';

const coursesData = [
  {
    id: 1,
    title: "Web Development",
    description: "A Web Developer course covers front-end and back-end development skills, focusing on languages like HTML, CSS, JavaScript, and frameworks like React and Node.js. ",
    imageSrc: "./assets/web-development.png",
    imageAlt: "Web Development Fundamentals course thumbnail showing code on a screen",
    link: "https://candidate.tnskill.tn.gov.in/skillwallet/"
  },
  {
    id: 2,
    title: "AI Analyst",
    description: "The AI Analyst program covers essential topics in artificial intelligence, such as data analysis, machine learning, and natural language processing.",
    imageSrc: "./assets/AI-Analyst.png",
    imageAlt: "Data Science Fundamentals course thumbnail showing charts and graphs",
    link: "https://candidate.tnskill.tn.gov.in/skillwallet/"
  },
  {
    id: 3,
    title: "Tally and GST",
    description: "The Tally and GST course equips learners with practical knowledge in financial accounting, taxation, and payroll using Tally software. ",
    imageSrc: "./assets/Tally.png",
    imageAlt: "Tally and GST course thumbnail showing accounting software interface",
    link: "https://candidate.tnskill.tn.gov.in/skillwallet/"
  },
  {
    id: 3,
    title: "Food and Beverage Services ",
    description: "A2BFood & Beverage Service Associate plays a key role in the hospitality industry by providing excellent service to guests in restaurants, hotels, cafés, and other food service establishments.",
    imageSrc: "./assets/Food and Beverage Services.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons",
    link: "https://candidate.tnskill.tn.gov.in/skillwallet/"
  },
  {
    id: 3,
    title: "Bakery & Confectionery ",
    description: "The Bakery & Confectionery program covers the fundamentals of baking techniques, ingredient selection, pastry preparation, and food safety standards.",
    imageSrc: "./assets/Bakery.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons",
    link: "https://candidate.tnskill.tn.gov.in/skillwallet/"
  },
  {
    id: 3,
    title: "Integrated Fish Farming",
    description: "Integrated fish farming training focuses on combining aquaculture, agriculture, and livestock, optimizing resources for sustainable, profitable, and eco-friendly farm management",
    imageSrc: "./assets/Integrated Fish Farming.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons",
    link: "https://candidate.tnskill.tn.gov.in/skillwallet/"
  },
   {
    id: 3,
    title: "Coconut Specialist",
    description: "The Coconut Specialist program focuses on the scientific cultivation, processing, and value addition of coconut.",
    imageSrc: "./assets/Coconut Specialist.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons",
    link: "https://candidate.tnskill.tn.gov.in/skillwallet/"
  },
  {
    id: 3,
    title: "Organic Cultivator",
    description: "Participants will learn to produce organic inputs, focusing on sustainable practices, composting methods, soil health improvement, and organic certification processes.",
    imageSrc: "./assets/Organic Cultivation.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons",
    link: "https://candidate.tnskill.tn.gov.in/skillwallet/"
  },
   {
    id: 3,
    title: "Horticulture Supervisor",
    description: "A Horticulture Supervisor course covers the management and maintenance of plants, gardens, and landscapes.",
    imageSrc: "./assets/Horticulture Supervisor.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons",
    link:"https://candidate.tnskill.tn.gov.in/skillwallet/"
  },
  {
    id: 3,
    title: "Front Office Executive",
    description: "A Front Office Executive course covers essential skills in customer service, communication, office management, and administrative tasks.",
    imageSrc: "./assets/Front Office Executive.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons",
    link:"https://candidate.tnskill.tn.gov.in/skillwallet/"
  },
  {
    id: 3,
    title: "Housekeeping Supervisor",
    description: "The Housekeeping Supervisor course provides training in managing housekeeping operations, supervising staff, maintaining cleanliness standards, and ensuring proper inventory management",
    imageSrc: "./assets/Housekeeping.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons",
    link:"https://candidate.tnskill.tn.gov.in/skillwallet/"
  }



];

const Courses = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Popular Courses</h2>
        <Row>
          {coursesData.map(course => (
            <Col md={4} className="mb-4" key={course.id}>
              <CourseCard 
                title={course.title}
                description={course.description}
                imageSrc={course.imageSrc}
                imageAlt={course.imageAlt}
                link={course.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
