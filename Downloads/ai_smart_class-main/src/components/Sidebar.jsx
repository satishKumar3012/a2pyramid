// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">AI Smart Class</h2>
      <ul className="menu">
        <li>Doubt Solver</li>
        <li>Exam Paper Generator</li>
        <li>Smart Quiz Generator</li>
        <li>Performance Metrics</li>
        <li>Gamified Classroom</li>
        <li>Mental Health Support</li>
        <li>Skill Progress Tracking</li>
        <li>Attendance Report</li>
      </ul>
    </div>
  );
};

export default Sidebar;
