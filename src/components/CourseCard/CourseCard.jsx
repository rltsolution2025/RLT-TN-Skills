import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CourseCard = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <Card className="h-100 border-0 shadow-sm">
      <Card.Img variant="top" src={imageSrc} alt={imageAlt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
