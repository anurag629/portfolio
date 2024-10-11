// src/components/ResumeButton.js

import React from 'react';
import './ResumeButton.css';

const ResumeButton = () => {
  return (
    <div className="resume-button-container">
      <a
        href="https://docs.google.com/document/d/154-0HNKgYXK5lHLNZvZS299ieDmGnwQFIBxYHnzHFyg/export?format=pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButton;
