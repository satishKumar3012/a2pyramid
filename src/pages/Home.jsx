// src/pages/Home.jsx
import React from 'react';
import styled from 'styled-components';
import Header from '../components/mainPageElement/Header';
import Footer from '../components/mainPageElement/Footer';
import { useNavigate } from 'react-router-dom';

const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #1f1c2c, #928dab); /* Professional gradient */
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SectionCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 16px;
  min-width: 280px;
  max-width: 350px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    background: teal;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardDescription = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #e0e0e0;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }

    &::before {
      content: '✔';
      margin-right: 8px;
      color: #00d1ff;
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <FullScreenContainer>
      {/* <Header loggedIn={true} /> */}
      <ContentWrapper>
        <Cards>
          <SectionCard onClick={() => navigate('/edutech')}>
            <CardTitle>Edutech</CardTitle>
            <CardDescription>
              <li>AI/ML Training</li>
              <li>Web Development</li>
              <li>DevOps</li>
              <li>QA Engineering</li>
            </CardDescription>
          </SectionCard>

          <SectionCard onClick={() => navigate('/ai-smart-class')}>
            <CardTitle>AI Smart Class</CardTitle>
            <CardDescription>
              <li>AI Assistant Chatbot</li>
              <li>AI Smart Learning</li>
              <li>AI Smart Teaching</li>
              <li>AI Smart Assessment</li>
            </CardDescription>
          </SectionCard>
        </Cards>
      </ContentWrapper>
      <Footer />
    </FullScreenContainer>
  );
};

export default Home;
