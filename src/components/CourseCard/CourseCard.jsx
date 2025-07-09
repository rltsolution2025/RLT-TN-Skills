import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './CourseCard.css'; // Import custom styles for the course card


const CourseCard = ({ title, description, imageSrc, imageAlt , link}) => {
  
const handleNav = (link) => {
  window.open(link, '_blank', 'noopener,noreferrer');
};
  return (
    <Card className="h-100 border-0 shadow-sm">
      <Card.Img variant="top" src={imageSrc} alt={imageAlt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button  onClick={() => handleNav(link)} className='Learnmore'>Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
