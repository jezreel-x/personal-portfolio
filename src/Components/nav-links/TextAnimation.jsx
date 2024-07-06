import React, { useState, useEffect } from 'react';
import 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/portfolio.css';
const texts = ["Web Developer", "Cybersecurity Analyst", "Mobile App Developer with React Native"];

const TextAnimation = () => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < texts[index].length) {
          setText((prev) => prev + texts[index].charAt(charIndex));
          setCharIndex(charIndex + 1);
          setSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex(charIndex - 1);
          setSpeed(50);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, speed]);

  return (
    <div className="text-container">
      <h2 className="animated-text">I am a <span id='text'>{text}</span></h2>
      <span className="cursor"></span>
    </div>
  );
};

export default TextAnimation;
