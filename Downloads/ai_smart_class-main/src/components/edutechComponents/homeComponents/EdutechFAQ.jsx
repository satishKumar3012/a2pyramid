// src/components/EdutechFAQ.jsx
import React from 'react';
import styled from 'styled-components';

const FAQSection = styled.section`
  padding: 4rem 2rem;
  background: #e2e8f0;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
`;

const Question = styled.h4`
  font-weight: bold;
`;

const Answer = styled.p`
  margin: 0.5rem 0 0;
`;

const EdutechFAQ = () => {
  return (
    <FAQSection id="faq">
      <Heading>FAQs</Heading>
      <FAQItem>
        <Question>Do I need prior experience?</Question>
        <Answer>No, our beginner modules will help you get started from scratch.</Answer>
      </FAQItem>
      <FAQItem>
        <Question>Are the classes live or recorded?</Question>
        <Answer>We offer both live sessions and recorded content for flexible learning.</Answer>
      </FAQItem>
      <FAQItem>
        <Question>Will I get a certificate?</Question>
        <Answer>Yes, you'll receive a certificate upon successful completion of the course.</Answer>
      </FAQItem>
    </FAQSection>
  );
};

export default EdutechFAQ;
