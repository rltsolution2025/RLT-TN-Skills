import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const successStories = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Developer at Google",
    quote: "The web development course transformed my career. Within 3 months of completion, I landed my dream job at Google.",
    image: "https://placehold.co/200",
    alt: "Sarah Johnson smiling headshot - Young female professional with curly brown hair"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Data Scientist at Amazon",
    quote: "The practical projects in the data science program gave me the confidence to ace my technical interviews.",
    image: "https://placehold.co/200",
    alt: "Michael Rodriguez headshot - Hispanic male with glasses smiling professionally"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Digital Marketing Manager",
    quote: "After completing the digital marketing specialization, I doubled my client base within six months.",
    image: "https://placehold.co/200",
    alt: "Priya Patel headshot - South Asian woman in professional attire smiling confidently"
  }
];

const SuccessStories = () => {
  return (
    <section className="success-stories py-5">
      <Container>
        <h2 className="text-center mb-5">Success Stories</h2>
        <Row>
          {successStories.map(story => (
            <Col lg={4} md={6} className="mb-4" key={story.id}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <img 
                    src={story.image} 
                    alt={story.alt}
                    className="rounded-circle mb-3" 
                    width="120" 
                    height="120"
                  />
                  <Card.Text className="mb-4 fst-italic">
                    "{story.quote}"
                  </Card.Text>
                  <Card.Footer className="border-0 bg-white">
                    <h5 className="mb-1">{story.name}</h5>
                    <small className="text-muted">{story.role}</small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SuccessStories;
