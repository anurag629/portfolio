// src/components/Header.js
import React from 'react';
import './Header.css';
import profileImage from '../assets/profile.jpg';

const Header = () => {
  return (
    <header className="header">
      <img src={profileImage} alt="Anurag Verma" className="profile-image " />
      <h1 className="name">Anurag Verma</h1>
      <h2 className="title">ML/AI Engineer</h2>
    </header>
  );
};

export default Header;
