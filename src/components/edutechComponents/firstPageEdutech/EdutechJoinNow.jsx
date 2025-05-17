import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eef2ff;
  padding: 2.5rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem;
  max-width: 1200px;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0 5rem;
    align-items: center;
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 1.5rem;

  @media (min-width: 1024px) {
    text-align: left;
    margin-top: 0;
    padding-left: 2.5rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  p {
    color: #4b5563;
    margin-bottom: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  background-color: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  display: inline-block;
  font-weight: 600;
  transition: background-color 0.3s ease;
  

  &:hover {
    background-color: #6366f1;
  }
`;

const EdutechJoinNow = () => {
  return (
    <Section>
      <Container>
        {/* Left Side Image */}
        <ImageContainer>
          <img 
            src="/img/last_img.png" // Replace with your image URL
            alt="Join A2 Pyramid"
          />
        </ImageContainer>

        {/* Text and Button Section */}
        <TextContainer>
          <h2>Take the Next Step Toward Your Professional Goals with A2 Pyramid</h2>
          <p>Join now to receive personalized recommendations from the full A2 Pyramid catalog.</p>
          <StyledLink to="https://forms.gle/P7sDPc4fsMcr2DJV7" target='_blank' style={{textDecoration: 'none'}}>Join for Free</StyledLink>
        </TextContainer>
      </Container>
    </Section>
  );
};

export default EdutechJoinNow;
