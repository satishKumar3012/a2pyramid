// src/components/EdutechCurriculum.jsx
import React from 'react';
import styled from 'styled-components';

const CurriculumSection = styled.section`
  padding: 4rem 2rem;
  background: #f1f5f9;
  color: #0f172a;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  width: 250px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: left;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const EdutechCurriculum = () => {
  return (
    <CurriculumSection id="curriculum">
      <Heading>Our Curriculum</Heading>
      <Cards>
        <Card>
          <Title>AI/ML Training</Title>
          <p>Machine Learning, Deep Learning, and Real-World Projects</p>
        </Card>
        <Card>
          <Title>Full Stack Development</Title>
          <p>HTML, CSS, JS, React, Node.js, MongoDB, and More</p>
        </Card>
        <Card>
          <Title>DevOps</Title>
          <p>Docker, Kubernetes, CI/CD, and Cloud Deployments</p>
        </Card>
        <Card>
          <Title>QA Engineering</Title>
          <p>Manual & Automated Testing, Selenium, JMeter</p>
        </Card>
      </Cards>
    </CurriculumSection>
  );
};

export default EdutechCurriculum;
