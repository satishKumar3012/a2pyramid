// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar">
      <a href='/ai-smart-class' style={{color:"white",textDecoration:"none"}}><div className="navbar-logo">AI Smart Class</div></a>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">Choose Feature ▾</button>
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
        </li>
        <li><button className="btn">Register</button></li>
        <li><button className="btn login">Login</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
