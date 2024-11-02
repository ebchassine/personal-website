import React from 'react';

const PageTransition = ({ isAnimating }) => {
  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none ${
        isAnimating ? 'animate-page-transition' : ''
      }`}
    >
      <div className="absolute inset-0 bg-primary transform -translate-x-full"></div>
      <style>{`
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