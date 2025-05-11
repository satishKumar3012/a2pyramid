// src/components/EdutechNavbar.jsx
import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  background: #0f172a;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    color: #38bdf8;
  }
`;

const EdutechNavbar = () => {
  return (
    <Navbar>
      <Logo>
      <a href="/edutech"style={{textDecoration:"none",color:"white"}}>A2 Edutech</a>
      </Logo>
      <NavLinks>
        <a href="/edutech/about">About</a>
        <a href="/edutech/contact">Contact</a>
        <a href="#curriculum">Curriculum</a>
        <a href="#whyus">Why Us</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQ</a>
      </NavLinks>
    </Navbar>
  );
};

export default EdutechNavbar;
