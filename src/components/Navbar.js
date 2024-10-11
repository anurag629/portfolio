// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#intro">Home</a></li>
        <li><a href="#workExperience">Work Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
