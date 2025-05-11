// src/pages/Home.jsx
import React from 'react';
import styled from 'styled-components';
import Header from '../components/mainPageElement/Header';
import Footer from '../components/mainPageElement/Footer';
import SectionCard from '../components/mainPageElement/SectionCard';
import { useNavigate } from 'react-router-dom';

const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 96vh;
  background: linear-gradient(135deg,skyblue 10%, blue 45%, gray 75%);
  color: white;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <FullScreenContainer>
      <Header loggedIn={true} />
      <ContentWrapper>
        <Cards>
          <SectionCard
            title="Edutech"
            description="
-   AI/ML Training
-   Web Development
-   DevOps
-   QA Engineering"
            onClick={() => navigate('/edutech')}
          />
          <SectionCard
            title="AI Smart Class"
            description="
-   AI Assistant Chabot
-   AI Smart Learning
-   AI Smart Teaching
-   AI Smart Assessment"
            onClick={() => navigate('/ai-smart-class')}
          />
        </Cards>
      </ContentWrapper>
      <Footer />
    </FullScreenContainer>
  );
};

export default Home;
