import React from 'react';
import styled from 'styled-components';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Main = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  font-family: Verdana;
  color: rgb(144, 112, 195);
  margin-bottom: 0.8rem;
  margin-top: 0.5rem;
  text-align: justify;

  @media (max-width: 480px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
`;

const FeatureButton = styled.a`
  display: inline-block;
  padding: 3rem 2rem;
  background-color: rgb(70, 101, 76);
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.1rem;
  text-align: center;
  transition: background-color 0.3s ease;
  min-width: 220px;

  &:hover {
    background-color: rgb(31, 204, 57);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 1.2rem;
    width: 100%;
  }
`;

const InfoSection = styled.section`
  margin-top: 3rem;
  padding: 2rem;
  background-color: #f9f9fb;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const InfoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .info-column {
    flex: 1;
    min-width: 250px;

    h3 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      color: #2c3e50;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;
        line-height: 1.5;
        font-size: 1rem;

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

  a {
    color: #444;
    font-size: 1.5rem;

    &:hover {
      color: #0077cc;
    }
  }

  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;


const HomePage = () => {
  return (
    <Main>
      <Paragraph>Explore our features:</Paragraph>

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
              <li><strong>AI Smart Class:</strong> Revolutionizing education through AI-driven tools for better learning and teaching.</li>
              <li><a href="/about-ai-smart-class">Learn more on our About Us page →</a></li>
            </ul>
          </div>

          <div className="info-column">
            <h3>Contact</h3>
            <ul>
              <li>📍 Bailey Road, Patna Bihar, India</li>
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
