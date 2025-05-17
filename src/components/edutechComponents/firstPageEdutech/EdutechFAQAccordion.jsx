import React, { useState } from 'react';
import styled from 'styled-components';

const FAQs = [
  {
    question: 'What is the purpose of this platform?',
    answer: 'This platform is designed to help students learn various technologies through comprehensive courses and hands-on projects.',
  },
  {
    question: 'How can I enroll in a course?',
    answer: 'You can enroll in a course by creating an account and selecting the course you want to take from our catalog.',
  },
  {
    question: 'What support is available for students?',
    answer: 'We offer 24/7 support through our online chat and email services, as well as community forums for peer assistance.',
  },
  {
    question: 'Are there any prerequisites for the courses?',
    answer: 'Some courses may have prerequisites, which will be listed in the course description. However, most courses are beginner-friendly.',
  },
  {
    question: 'Will I receive a certificate after completing a course?',
    answer: 'Yes, upon successful completion of a course, you will receive a certificate that you can share on your LinkedIn profile.',
  },
  {
    question: 'Can I access course materials after the course ends?',
    answer: 'Yes, all enrolled students will have lifetime access to course materials and updates.',
  },
  {
    question: 'How do I reset my password?',
    answer: 'You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes, we have a 30-day money-back guarantee if you are not satisfied with the course.',
  },
];

// Styled Components
const Section = styled.section`
  padding: 4rem 0;
  background-color: #f9fafb;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #1f2937;
  margin-bottom: 2rem;
`;

const AccordionItem = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin: 0;
  }

  span {
    font-size: 1.5rem;
    color: #4b5563;
  }
`;

const AccordionBody = styled.div`
  padding: 0 1rem 1rem 1rem;
  p {
    color: #4b5563;
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0;
  }
`;

const SeeMoreButton = styled.button`
  margin-top: 2rem;
  background-color: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #4338ca;
  }
`;

const EdutechFAQAccordion = () => {
  const [expandedQuestions, setExpandedQuestions] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const toggleQuestion = (index) => {
    setExpandedQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleShowAll = () => setShowAll(!showAll);

  const displayedFAQs = showAll ? FAQs : FAQs.slice(0, 3);

  return (
    <Section>
      <Container>
        <Heading>Frequently Asked Questions</Heading>
        {displayedFAQs.map((faq, index) => (
          <AccordionItem key={index}>
            <AccordionHeader onClick={() => toggleQuestion(index)}>
              <h3>{faq.question}</h3>
              <span>{expandedQuestions.includes(index) ? '−' : '+'}</span>
            </AccordionHeader>
            {expandedQuestions.includes(index) && (
              <AccordionBody>
                <p>{faq.answer}</p>
              </AccordionBody>
            )}
          </AccordionItem>
        ))}
        <SeeMoreButton onClick={toggleShowAll}>
          {showAll ? 'See Less' : 'See More'}
        </SeeMoreButton>
      </Container>
    </Section>
  );
};

export default EdutechFAQAccordion;
