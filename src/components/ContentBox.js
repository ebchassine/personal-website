import React, { useEffect, useRef } from 'react';

export const ContentBox = ({ children, className }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentBox = boxRef.current;

    if (currentBox) {
      observer.observe(currentBox);
    }

    return () => {
      if (currentBox) {
        observer.unobserve(currentBox);
      }
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={`transition-all duration-1000 ease-out opacity-0 translate-y-10 ${className}`}
    >
      {children}
    </div>
  );
};