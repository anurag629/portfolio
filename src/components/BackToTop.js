// src/components/BackToTop.js
import React, { useState, useEffect } from 'react';
import './BackToTop.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.scrollY;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
