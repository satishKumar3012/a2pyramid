// src/components/Navbar.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #1e1e2f;
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
`;

const MenuToggle = styled.div`
  font-size: 1.8rem;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ menuOpen }) => (menuOpen ? '500px' : '0')};
    overflow: hidden;
    background-color: #1e1e2f;
    padding: ${({ menuOpen }) => (menuOpen ? '1rem 0' : '0')};
  }
`;

const Dropdown = styled.li`
  position: relative;

  .dropdown-toggle {
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #2b2b3d;
    list-style: none;
    padding: 0.5rem 0;
    margin: 0;
    min-width: 200px;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    z-index: 99;

    li {
      padding: 0.6rem 1.2rem;

      a {
        color: white;
        text-decoration: none;
        display: block;

        &:hover {
          background-color: #3e3e5e;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .dropdown-menu {
      position: static;
    }
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ variant }) => (variant === 'login' ? '#00bcd4' : '#4caf50')};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.85;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <NavbarContainer>
      <a href='/ai-smart-class' style={{ color: "white", textDecoration: "none" }}>
        {/* <a href logo = public/logoai.jpg */}
        <Logo>AI Smart Class</Logo>
        
      </a>

      <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </MenuToggle>

      <NavLinks menuOpen={menuOpen}>
        <Dropdown>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown-toggle">
            Choose Feature ▾
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="/doubt-solver">Doubt Solver</a></li>
              <li><a href="/exam-paper-generator">Exam Paper Generator</a></li>
              <li><a href="/smart-quiz-generator">Smart Quiz Generator</a></li>
              <li><a href="/revision-planner">Revision Planner</a></li>
              <li><a href="/gamified-classroom">Gamified Classroom</a></li>
              <li><a href="/performance-metrics">Performance Metrics</a></li>
              <li><a href="/mental-health-support">Mental Health Support</a></li>
              <li><a href="/skill-progress-tracking">Skill Progress Tracking</a></li>
              <li><a href="/attendance-report">Attendance Report</a></li>
            </ul>
          )}
        </Dropdown>
        <li><Button>Register</Button></li>
        <li><Button variant="login">Login</Button></li>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
