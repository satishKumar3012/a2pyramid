// src/components/EdutechMainSection.jsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(to right, #1e293b, #334155);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtext = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
`;

const EdutechMainSection = () => {
  return (
    <Section>
      <Heading>Learn Modern Tech Skills</Heading>
      <Subtext>Master AI/ML, Full Stack Web Dev, DevOps, and QA with expert mentors and hands-on projects.</Subtext>
    </Section>
  );
};

export default EdutechMainSection;
