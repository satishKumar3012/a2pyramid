import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1c1c1e;
  color: #ccc;
  padding: 40px 20px;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 30px 15px;
    font-size: 0.85rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    color: #ffffff;
    margin-bottom: 10px;
    font-size: 1.1rem;
  }

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #4B8DF8;
      text-decoration: underline;
    }
  }
`;

const BottomBar = styled.div`
  text-align: center;
  margin-top: 2rem;
  border-top: 1px solid #333;
  padding-top: 1rem;
  font-size: 0.8rem;
  color: #888;

  a {
    color: #4B8DF8;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterAISmart = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterSection>
          <h3>AI Smart Class</h3>
          <a href="#">AI-Teaching</a>
          <a href="#">AI-Learning</a>
          <a href="#">AI-Classes</a>
        </FooterSection>

        <FooterSection>
          <h3>Explore</h3>
          <a href="#">Our Team</a>
          <a href="#">Join Our Community</a>
          <a href="#">Our Partners</a>
        </FooterSection>

        <FooterSection>
          <h3>Follow Us</h3>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">LinkedIn</a>
        </FooterSection>

        <FooterSection>
          <h3>Contact Us</h3>
          <div>Phone: +91 9472994483</div>
          <div>Phone: +91 9608049406</div>
          <div>Email: <a href="mailto:studypyramid@gmail.com">studypyramid@gmail.com</a></div>
        </FooterSection>
      </FooterGrid>

      <BottomBar>
        <p>© 2025 AI Smart Class powered by A2Pyramid. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a>
        </p>
      </BottomBar>
    </FooterContainer>
  );
};

export default FooterAISmart;
