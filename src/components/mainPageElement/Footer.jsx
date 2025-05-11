// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #222;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
  return <FooterContainer>© 2025 A2 Pyramid</FooterContainer>;
};

export default Footer;
