// src/components/EdutechFooter.jsx
import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  background: #0f172a;
  color: white;
  text-align: center;
  padding: 1.5rem 0;
`;

const EdutechFooter = () => {
  return <Footer>© {new Date().getFullYear()} A2 Edutech. All rights reserved.</Footer>;
};

export default EdutechFooter;
