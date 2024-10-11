// src/components/TerminalWindow.js
import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import './TerminalWindow.css';

const TerminalWindow = ({ title, content, start, onTypingComplete }) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const hasTyped = useRef(false);

  useEffect(() => {
    if (!start || hasTyped.current) return;

    hasTyped.current = true;

    let i = 0;
    const speed = 10;

    const typingEffect = () => {
      if (i < content.length) {
        setDisplayedContent((prev) => prev + content.charAt(i));
        i++;
        setTimeout(typingEffect, speed);
      } else {
        if (onTypingComplete) {
          onTypingComplete();
        }
      }
    };

    typingEffect();
  }, [start, content, onTypingComplete]);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="buttons">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </div>
        <div className="title">{title}</div>
      </div>
      <div className="terminal-body">
        <ReactMarkdown>{displayedContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default TerminalWindow;
