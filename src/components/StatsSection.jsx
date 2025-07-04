import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserGraduate, FaBriefcase, FaChalkboardTeacher } from 'react-icons/fa';

const StatsSection = () => {
  const statsData = [
    {
      id: 1,
      icon: <FaUserGraduate size={40} className="text-primary mb-3" />,
      count: "10,000+",
      title: "Students Enrolled"
    },
    {
      id: 2,
      icon: <FaBriefcase size={40} className="text-primary mb-3" />,
      count: "8,500+",
      title: "Students Placed"
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher size={40} className="text-primary mb-3" />,
      count: "120+",
      title: "Courses Offered"
    },
    {
      id: 4,
      icon: <FaUserGraduate size={40} className="text-primary mb-3" />,
      count: "96%",
      title: "Completion Rate"
    }
  ];

  return (
    <section className="stats-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Impact in Numbers</h2>
        <Row>
          {statsData.map(stat => (
            <Col md={3} sm={6} className="mb-4 mb-md-0" key={stat.id}>
              <div className="stat-card text-center">
                {stat.icon}
                <h3 className="display-5 fw-bold">{stat.count}</h3>
                <p className="text-muted">{stat.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
