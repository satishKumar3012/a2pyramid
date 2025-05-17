import React from 'react';
import styled from 'styled-components';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Main = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #4b3c88;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const FeatureList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 3rem;
`;

const FeatureButton = styled.a`
  flex: 1 1 220px;
  max-width: 280px;
  padding: 2rem;
  background-color: #464d77;
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.1rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #2ecc71;
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 1.5rem;
  }
`;

const InfoSection = styled.section`
  background-color: #f4f4f8;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
`;

const InfoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .info-column {
    flex: 1;
    min-width: 260px;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        font-size: 1rem;
        margin-bottom: 0.8rem;
        line-height: 1.6;
        color: #555;

        a {
          color: #0077cc;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.5rem;
  justify-content: flex-start;

  a {
    color: #555;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #0077cc;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const HomePage = () => {
  return (
    <Main>
      <Heading>Explore Our AI-Powered Features</Heading>

      <FeatureList>
        <FeatureButton href="#/doubt-solver">Doubt Solving Assistant 🤔</FeatureButton>
        <FeatureButton href="#/exam-paper-generator">Exam Paper Generator 📝</FeatureButton>
        <FeatureButton href="#/smart-quiz-generator">Smart Quiz Generator 🎯</FeatureButton>
        <FeatureButton href="#/revision-planner">Revision Planner 📚</FeatureButton>
      </FeatureList>

      <InfoSection>
        <InfoList>
          <div className="info-column">
            <h3>About</h3>
            <ul>
              <li><strong>AI Smart Class</strong> revolutionizes learning with powerful AI tools for students and teachers alike.</li>
              <li><a href="/about-ai-smart-class">Learn more →</a></li>
            </ul>
          </div>

          <div className="info-column">
            <h3>Contact</h3>
            <ul>
              <li>📍 Bailey Road, Patna, Bihar, India</li>
              <li>📞 +91-9472994483</li>
              <li>📧 <a href="mailto:studypyramid@gmail.com">studypyramid@gmail.com</a></li>
            </ul>
          </div>

          <div className="info-column">
            <h3>Follow Us</h3>
            <SocialIcons>
              <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </SocialIcons>
          </div>
        </InfoList>
      </InfoSection>
    </Main>
  );
};

export default HomePage;
