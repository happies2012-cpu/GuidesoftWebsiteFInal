import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
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
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={scrollToTop}
            className="p-3 rounded-full shadow-lg bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-primary-foreground hover:opacity-90 transition-all duration-300 relative overflow-hidden"
            size="icon"
          >
            <ArrowUp className="h-5 w-5" />
            {/* Subtle pulse indicator */}
            <motion.span
              className="absolute inset-0 rounded-full bg-primary-foreground opacity-20"
              animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default BackToTopButton;