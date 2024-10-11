// src/components/SideMenu.js

import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaProjectDiagram,
  FaCertificate,
  FaTools,
  FaFilePdf,
} from 'react-icons/fa';
import './SideMenu.css';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [radius, setRadius] = useState(getRadius());
  const menuRef = useRef(null);

  // Function to determine radius based on screen width
  function getRadius() {
    return window.innerWidth <= 768 ? 120 : 150;
  }

  // Update radius on window resize
  useEffect(() => {
    const handleResize = () => {
      setRadius(getRadius());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Menu items and their corresponding section IDs and icons
  const menuItems = [
    { id: 'intro', label: 'Home', icon: <FaHome /> },
    { id: 'workExperience', label: 'Work Experience', icon: <FaBriefcase /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'certifications', label: 'Certifications', icon: <FaCertificate /> },
    { id: 'skills', label: 'Skills', icon: <FaTools /> },
    { id: 'resume', label: 'Resume', icon: <FaFilePdf /> },
  ];

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="side-menu" ref={menuRef}>
      <div
        className="menu-button"
        onClick={toggleMenu}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleMenu();
          }
        }}
        tabIndex={0}
        aria-label="Menu"
        aria-expanded={isOpen}
        aria-controls="side-menu-items"
      >
        <span className="menu-icon">☰</span>
      </div>
      {/* Menu Items */}
      <ul
        id="side-menu-items"
        className={`menu-items ${isOpen ? 'open' : ''}`}
      >
        {menuItems.map((item, index) => {
          const totalItems = menuItems.length;
          const angleStep = 180 / (totalItems - 1);
          const angle = 90 - index * angleStep;
          const transform = isOpen
            ? `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`
            : 'rotate(0deg) translate(0px) rotate(0deg)';

          const delay = isOpen
            ? `${index * 0.05}s`
            : '0s';

          const itemStyle = {
            position: 'absolute',
            transform: transform,
            opacity: isOpen ? 1 : 0,
            transition: `transform 0.3s ease ${delay}, opacity 0.3s ease ${delay}`,
          };

          return (
            <li key={item.id} style={itemStyle}>
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={500}
                onClick={() => {
                  setIsOpen(false);
                }}
                tabIndex={isOpen ? 0 : -1}
              >
                <span className="menu-item-icon">{item.icon}</span>
                <span className="menu-item-label">{item.label}</span>
              </ScrollLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
