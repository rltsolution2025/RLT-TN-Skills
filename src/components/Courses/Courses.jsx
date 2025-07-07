import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../CourseCard/CourseCard';

const coursesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Master modern web development with HTML, CSS, JavaScript, and popular frameworks.",
    imageSrc: "./assets/web-development.png",
    imageAlt: "Web Development Fundamentals course thumbnail showing code on a screen"
  },
  {
    id: 2,
    title: "AI Analyst",
    description: "Learn Python, machine learning, and data visualization techniques for data analysis.",
    imageSrc: "./assets/AI-Analyst.png",
    imageAlt: "Data Science Fundamentals course thumbnail showing charts and graphs"
  },
  {
    id: 3,
    title: "Tally and GST",
    description: "Develop skills in SEO, social media marketing, and content strategy for digital success.",
    imageSrc: "./assets/Tally.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons"
  },
  {
    id: 3,
    title: "Food and Beverage Services ",
    description: "Develop skills in SEO, social media marketing, and content strategy for digital success.",
    imageSrc: "./assets/Food and Beverage Services.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons"
  },
  {
    id: 3,
    title: "Bakery & Confectionery ",
    description: "Develop skills in SEO, social media marketing, and content strategy for digital success.",
    imageSrc: "./assets/Bakery.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons"
  },
  {
    id: 3,
    title: "Integrated Fish Farming ",
    description: "Develop skills in SEO, social media marketing, and content strategy for digital success.",
    imageSrc: "./assets/Integrated Fish Farming.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons"
  },
   {
    id: 3,
    title: "Coconut Specialist",
    description: "Develop skills in SEO, social media marketing, and content strategy for digital success.",
    imageSrc: "./assets/Coconut Specialist.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons"
  },
  {
    id: 3,
    title: "Organic Cultivation",
    description: "Develop skills in SEO, social media marketing, and content strategy for digital success.",
    imageSrc: "./assets/Organic Cultivation.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons"
  },
   {
    id: 3,
    title: "Horticulture Supervisor",
    description: "Develop skills in SEO, social media marketing, and content strategy for digital success.",
    imageSrc: "./assets/Horticulture Supervisor.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons"
  },
  {
    id: 3,
    title: "Front Office Executive",
    description: "Develop skills in SEO, social media marketing, and content strategy for digital success.",
    imageSrc: "./assets/Front Office Executive.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons"
  },
  {
    id: 3,
    title: "Housekeeping",
    description: "Develop skills in SEO, social media marketing, and content strategy for digital success.",
    imageSrc: "./assets/Housekeeping.png",
    imageAlt: "Digital Marketing course thumbnail showing social media icons"
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
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
