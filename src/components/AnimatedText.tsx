
import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const AnimatedText = ({ text, className = "", speed = 100, delay = 0 }: AnimatedTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStartAnimation(true);
    }, delay);
    
    return () => clearTimeout(timeoutId);
  }, [delay]);

  useEffect(() => {
    if (!startAnimation) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, startAnimation]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && <span className="typing-cursor"></span>}
    </span>
  );
};

export default AnimatedText;
