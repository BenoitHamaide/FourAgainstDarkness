import React, { useState, useEffect } from 'react';
import './ScrollToBottomButton.scss'; // Assurez-vous d'ajuster le chemin vers votre fichier CSS

function ScrollToBottomButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-bottom-button ${isVisible ? 'visible' : ''}`} onClick={scrollToBottom}>
      ↓
    </div>
  );
}

export default ScrollToBottomButton;
