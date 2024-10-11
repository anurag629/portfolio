// src/App.js
import React, { useState } from 'react';
import MatrixBackground from './components/MatrixBackground';
import SideMenu from './components/SideMenu';
import Header from './components/Header'; 
import TerminalWindow from './components/TerminalWindow';
import BackToTop from './components/BackToTop';
import GitHubRepos from './components/GitHubRepos';
import resumeData from './resumeData';
import './App.css';

function App() {
  const sections = Object.keys(resumeData);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handleTypingComplete = () => {
    setCurrentSectionIndex((prevIndex) => {
      if (prevIndex + 1 < sections.length) {
        return prevIndex + 1;
      } else {
        return prevIndex;
      }
    });
  };

  return (
    <div className="App">
      <MatrixBackground />
      <SideMenu />
      <Header />
      <div className="container">
        {sections.map((key, index) => {
          if (index > currentSectionIndex) {
            // return null;
            return (
              <TerminalWindow
                key={key}
                id={key}
                title={resumeData[key].title}
                content={resumeData[key].content}
                start={index === currentSectionIndex}
                onTypingComplete={handleTypingComplete}
              />
            );
          }
          return (
            <TerminalWindow
              key={key}
              id={key}
              title={resumeData[key].title}
              content={resumeData[key].content}
              start={index === currentSectionIndex}
              onTypingComplete={handleTypingComplete}
            />
          );
        })}
      </div>
      <GitHubRepos />
      <BackToTop />
    </div>
  );
}

export default App;
