import React from 'react';
import Carousel from '../components/Carousel';

function Gallery() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
      <Carousel />
    </section>
  );
}

export default Gallery;