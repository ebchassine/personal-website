import React from 'react';
import { ContentBox } from '../components/ContentBox';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-text">
      <ContentBox className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Ethan Wong-Chassine</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">CS @ Dartmouth</h2>
        <a 
          href="#about" 
          className="bg-text text-background px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
        >
        Reach Out!
        </a>
      </ContentBox>
    </section>
  );
}

export default Hero;