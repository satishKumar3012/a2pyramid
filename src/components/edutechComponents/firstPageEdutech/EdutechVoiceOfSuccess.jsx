import React, { useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  background-color: #eef2ff; /* Tailwind: bg-indigo-50 */
  padding: 2.5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`;

const Heading = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #1f2937; /* Tailwind: text-gray-800 */
  text-align: center;
  margin-bottom: 2rem;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  position: relative;
`;

const TestimonialCard = styled.div`
  min-width: 300px;
  max-width: 20rem;
  flex-shrink: 0;
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const Role = styled.p`
  font-size: 0.875rem;
  color: #2563eb; /* Tailwind: text-blue-600 */
  margin-bottom: 0.25rem;
`;

const Feedback = styled.p`
  font-size: 0.875rem;
  color: #4b5563; /* Tailwind: text-gray-600 */
`;

const EdutechVoiceOfSuccess = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Full-Stack Developer',
      feedback:
        'The courses provided helped me to quickly master the technologies needed to build complex applications. I owe my success to these detailed lessons!',
    },
    {
      name: 'Ayush Patel',
      role: 'Data Scientist',
      feedback:
        'I found the data science and AI courses extremely helpful. The practical projects truly helped me land my current role!',
    },
    {
      name: 'Ankit',
      role: 'Web Developer',
      feedback:
        'The web development course was easy to follow and helped me become proficient in building responsive websites.',
    },
    {
      name: 'Riya jha',
      role: 'Machine Learning Engineer',
      feedback:
        'The ML course opened many doors for me in the industry, with strong theoretical and practical concepts.',
    },
    {
      name: 'Amit Verma',
      role: 'Software Engineer',
      feedback:
        'I was able to enhance my coding skills and got placed in a reputed company. Great platform for learning!',
    },
    {
      name: 'Roshni Agarwal',
      role: 'UI/UX Designer',
      feedback:
        'The design courses gave me in-depth knowledge of UI/UX principles and boosted my confidence as a designer.',
    },
  ];

  const loopTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const cardsContainer = document.getElementById('testimonialCards');
    let scrollInterval = setInterval(() => {
      cardsContainer.scrollLeft += 2;
      if (cardsContainer.scrollLeft >= cardsContainer.scrollWidth / 3) {
        cardsContainer.scrollLeft = 0;
      }
    }, 20);

    cardsContainer.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    cardsContainer.addEventListener('mouseleave', () => {
      scrollInterval = setInterval(() => {
        cardsContainer.scrollLeft += 2;
      }, 20);
    });

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <Section>
      <Container>
        <Heading>Voices of Success: Our Student's Journey</Heading>
        <ScrollContainer id="testimonialCards">
          {loopTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Name>{testimonial.name}</Name>
              <Role>{testimonial.role}</Role>
              <Feedback>{testimonial.feedback}</Feedback>
            </TestimonialCard>
          ))}
        </ScrollContainer>
      </Container>
    </Section>
  );
};

export default EdutechVoiceOfSuccess;
