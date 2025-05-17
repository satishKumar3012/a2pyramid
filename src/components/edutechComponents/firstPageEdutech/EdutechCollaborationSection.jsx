import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #f7fafc;
  padding: 2.5rem 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem;
  
  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  text-align: center;
  color: #2d3748;
  margin-bottom: 2rem;
  
  a {
    color: #3182ce;
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover {
      color: #2b6cb0;
    }
  }
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const Logo = styled.img`
  height: 4rem;
  max-width: 150px;
  width: 100%;
  object-fit: contain;
  
  @media (min-width: 768px) {
    height: 6rem;
  }
`;

const EdutechCollaborationSection = () => {
  return (
    <Section>
      <Container>
        {/* Section Title with clickable link */}
        <Title>
          We collaborate with{' '}
          <a href="#collaborators">leading companies and institutions</a>
        </Title>

        {/* Logos Section with 3 images per row on small screens */}
        <LogoGrid>
          <Logo src="/img/google.png" alt="Google" />
          <Logo src="/img/facebook.png" alt="Facebook" />
          <Logo src="/img/samsung.png" alt="Samsung" />
          <Logo src="/img/ibm.png" alt="IBM" />
          <Logo src="/img/amazon.png" alt="Amazon" />
          <Logo src="/img/microsoft.png" alt="Microsoft" />
        </LogoGrid>
      </Container>
    </Section>
  );
};

export default EdutechCollaborationSection;
