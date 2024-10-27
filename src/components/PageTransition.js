import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000); // Increased to 1000ms for the full animation
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none overflow-hidden ${
        isAnimating ? 'animate-page-transition' : ''
      }`}
    >
      <div className="absolute inset-0 bg-text transform -translate-x-full"></div>
      <style jsx>{`
        @keyframes page-transition {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-page-transition > div {
          animation: page-transition 1s cubic-bezier(0.76, 0, 0.24, 1) forwards; 
        }
      `}</style>
    </div>
  );
};

export default PageTransition;