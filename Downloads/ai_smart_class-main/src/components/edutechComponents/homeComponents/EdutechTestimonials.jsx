// src/components/EdutechTestimonials.jsx
import React from 'react';
import styled from 'styled-components';

const TestimonialSection = styled.section`
  padding: 4rem 2rem;
  background: #f8fafc;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Testimonial = styled.div`
  max-width: 700px;
  margin: 0 auto;
  font-style: italic;
  color: #334155;
`;

const Author = styled.p`
  margin-top: 1rem;
  font-weight: bold;
`;

const EdutechTestimonials = () => {
  return (
    <TestimonialSection id="testimonials">
      <Heading>What Our Students Say</Heading>
      <Testimonial>
        “Thanks to A2 Edutech, I landed my first internship as a full-stack developer. The hands-on projects were a game-changer!”
        <Author>- Anjali Mehta</Author>
      </Testimonial>
    </TestimonialSection>
  );
};

export default EdutechTestimonials;
