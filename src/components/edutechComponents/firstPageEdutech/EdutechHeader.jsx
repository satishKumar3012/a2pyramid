import React from 'react';
import { FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #091E3E;
  color: white;
  padding: 1rem 1.25rem;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: flex;
  }

  display: none;
`;

const HeaderWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 0.875rem;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialMediaIcon = styled.a`
  color: white;
  font-size: 1.25rem;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    color: #fbbf24; /* Yellow color */
    transform: scale(1.25);
  }
`;

const EdutechHeader = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        {/* Contact Information Section */}
        <ContactInfoContainer>
          <ContactItem>
            <lord-icon
              src="https://cdn.lordicon.com/qxfeskio.json"
              trigger="loop"
              delay="2000"
              colors="primary:#ffffff"
              style={{ height: "24px", width: "24px" }}
            />
            <span>Rukunpura, Bailey Road Patna, India</span>
          </ContactItem>
          <ContactItem>
            <lord-icon
              src="https://cdn.lordicon.com/srsgifqc.json"
              trigger="loop"
              delay="2000"
              colors="primary:#ffffff"
              style={{ height: "24px", width: "24px" }}
            />
            <span>+91 9472994483</span>
          </ContactItem>
          <ContactItem>
            <lord-icon
              src="https://cdn.lordicon.com/xtzvywzp.json"
              trigger="loop"
              delay="2000"
              colors="primary:#ffffff"
              style={{ height: "24px", width: "24px" }}
            />
            <span>studypyramid@gmail.com</span>
          </ContactItem>
        </ContactInfoContainer>

        {/* Social Media Icons Section */}
        <SocialMediaContainer>
          <SocialMediaIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </SocialMediaIcon>
        </SocialMediaContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default EdutechHeader;
