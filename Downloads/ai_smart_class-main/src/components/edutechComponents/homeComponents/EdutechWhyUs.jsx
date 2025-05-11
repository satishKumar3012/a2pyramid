// src/components/EdutechWhyUs.jsx
import React from 'react';
import styled from 'styled-components';

const WhySection = styled.section`
  padding: 4rem 2rem;
  background: #e2e8f0;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Reasons = styled.ul`
  list-style: none;
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
  text-align: left;
`;

const Reason = styled.li`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '✔';
    position: absolute;
    left: 0;
    color: green;
  }
`;

const EdutechWhyUs = () => {
  return (
    <WhySection id="whyus">
      <Heading>Why Choose Us?</Heading>
      <Reasons>
        <Reason>Industry-level expert mentors</Reason>
        <Reason>Hands-on projects & real-world training</Reason>
        <Reason>Live classes and recorded sessions</Reason>
        <Reason>Internship and job support</Reason>
      </Reasons>
    </WhySection>
  );
};

export default EdutechWhyUs;
