"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
  words: string[];
  speed?: number; // Speed in milliseconds per character
  delay?: number; // Delay before starting next word in milliseconds
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ words, speed = 100, delay = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleTyping = () => {
      const i = currentWordIndex % words.length;
      const fullText = words[i];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(speed / 2); // Faster deleting
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(speed);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => prev + 1);
        setTypingSpeed(speed);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, words, currentWordIndex, speed, delay]);

  return (
    <motion.span
      className="inline-block text-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <motion.span
        className="inline-block w-1 h-full bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end ml-1 align-bottom"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </motion.span>
  );
};

export default TypewriterEffect;