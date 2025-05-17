import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const ContactWrapper = styled.section`
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(145deg, #f2f4f8, #ffffff);
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  text-align: center;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactDetails = styled.div`
  background: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 15px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const InfoGroup = styled.div`
  margin-bottom: 2rem;

  h4 {
    color: #4b8df8;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p, a {
    font-size: 1.05rem;
    color: #333;
    margin: 0.3rem 0;
    display: block;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0077cc;
    }
  }
`;

const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;

  a {
    font-size: 2rem;
    color: #555;
    transition: transform 0.2s, color 0.3s;

    &:hover {
      color: #0077cc;
      transform: scale(1.15);
    }
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Highlight = styled.span`
  color: #4b8df8;
  font-weight: 600;
`;

const ContactAISmart = () => {
  return (
    <ContactWrapper>
      <Container>
        <Heading>Contact <Highlight>AI Smart Class</Highlight></Heading>
        <Grid>
          <ContactDetails>
            <InfoGroup>
              <h4>📞 Phone</h4>
              <p>+91 9472994483</p>
              <p>+91 9608049406</p>
            </InfoGroup>

            <InfoGroup>
              <h4>📧 Email</h4>
              <a href="mailto:studypyramid@gmail.com">studypyramid@gmail.com</a>
            </InfoGroup>

            <InfoGroup>
              <h4>🔗 Follow Us</h4>
              <SocialIcons>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              </SocialIcons>
            </InfoGroup>
          </ContactDetails>

          <MapWrapper>
            <iframe
              title="AI Smart Class Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7195.566606219661!2d85.068942!3d25.612116000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57002ac8acc5%3A0x29d88f25df3c2a80!2sA2%20Pyramid%20Edutech!5e0!3m2!1sen!2sin!4v1746647373473!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapWrapper>
        </Grid>
      </Container>
    </ContactWrapper>
  );
};

export default ContactAISmart;
