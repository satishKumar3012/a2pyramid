import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled Components
const Section = styled.section`
  background-color: #ffffff;
  padding: 3rem 1.25rem;

  @media (min-width: 1024px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0 5rem;
  }
`;

const TextSection = styled.div`
  max-width: 40rem;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const Heading = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937; /* Tailwind: text-gray-800 */
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const SubHeading = styled.div`
  font-size: 1rem;
  color: #4b5563; /* Tailwind: text-gray-600 */
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

const Highlight = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
`;

const HighlightTyping = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  color: #4f46e5; /* Tailwind: text-indigo-600 */
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

const JoinButton = styled(Link)`
  background-color: #2563eb; /* Tailwind: bg-blue-600 */
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s;

  @media (min-width: 640px) {
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
  }

  &:hover {
    background-color: #1d4ed8; /* Tailwind: hover:bg-blue-700 */
  }
`;

const ImageWrapper = styled.div`
  margin-top: 2rem;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

const HeroImage = styled.img`
  width: 12rem;
  height: auto;

  @media (min-width: 640px) {
    width: 15rem;
  }

  @media (min-width: 1024px) {
    width: 18rem;
  }
`;

// Component
const EdutechHeroSection = () => {
  return (
    <Section>
      <Container>
        <TextSection>
          <Heading>Achieve Your Learning Goals</Heading>
          <SubHeading>
            <Highlight>Learn </Highlight>
            <HighlightTyping>
              <Typewriter
                words={[
                  'Programming Languages',
                  'Web Development',
                  'Data Science',
                  'Machine Learning',
                  'UI/UX Design',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1500}
              />
            </HighlightTyping>
          </SubHeading>
          <Paragraph>
            Start, advance, or switch your career with a variety of courses, certifications,
            and degrees from top educators and institutions worldwide.
          </Paragraph>
          <JoinButton to="https://forms.gle/P7sDPc4fsMcr2DJV7" target='_blank'>Join For Free</JoinButton>
        </TextSection>

        <ImageWrapper>
          <HeroImage src="/img/hero3.png" alt="Learning illustration" />
        </ImageWrapper>
      </Container>
    </Section>
  );
};

export default EdutechHeroSection;
