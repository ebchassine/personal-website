import React from 'react';
import { ContentBox } from '../components/ContentBox';

function About() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      
      <ContentBox className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
          <p className="text-lg leading-relaxed">
            I'm a passionate web developer with a keen eye for design and a love for creating 
            intuitive, responsive web applications. With expertise in React, Node.js, and modern web 
            technologies, I strive to build seamless user experiences that make a difference.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg?height=300&width=400" alt="About Me" className="rounded-lg shadow-md" />
        </div>
      </ContentBox>

      <ContentBox className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
          <p className="text-lg leading-relaxed">
            I specialize in front-end development with React, creating responsive layouts with 
            CSS and Tailwind, and building robust back-end systems with Node.js and Express. 
            I'm also experienced in database design, API development, and deployment strategies.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg?height=300&width=400" alt="My Skills" className="rounded-lg shadow-md" />
        </div>
      </ContentBox>
    </section>
  );
}

export default About;