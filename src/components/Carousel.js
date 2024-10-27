import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const carouselItems = [
  { name: 'Projects', path: '/projects', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Gallery', path: '/gallery', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Contact', path: '/contact', image: '/placeholder.svg?height=200&width=300' },
  { name: 'About', path: '/about', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Skills', path: '/skills', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Experience', path: '/experience', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Blog', path: '/blog', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Testimonials', path: '/testimonials', image: '/placeholder.svg?height=200&width=300' },
];

function Carousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;

    const animate = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        return newPosition > scrollWidth - clientWidth ? 0 : newPosition;
      });
    };

    const animationId = setInterval(animate, 50);

    return () => clearInterval(animationId);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div className="relative overflow-hidden h-[250px] bg-background">
      <div
        ref={carouselRef}
        className="flex gap-4 p-4 transition-transform duration-1000 ease-linear"
        style={{ width: `${carouselItems.length * 320}px` }}
      >
        {[...carouselItems, ...carouselItems].map((item, index) => (
          <Link
            key={`${item.name}-${index}`}
            to={item.path}
            className="flex-shrink-0 w-[300px] h-[200px] relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-text bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl font-bold text-background">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Carousel;