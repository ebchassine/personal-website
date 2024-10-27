import React from 'react';
import { ContentBox } from '../components/ContentBox';

const projects = [
  { title: 'Project 1', description: 'Description of Project 1', image: '../images/TestImage.jpg' },
  { title: 'Project 2', description: 'Description of Project 2', image: '../images/TestImage.jpg' },
  { title: 'Project 3', description: 'Description of Project 3', image: '../images/TestImage.jpg' },
];

function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      
      {projects.map((project, index) => (
        <ContentBox key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16`}>
          <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-4 md:mb-0`}>
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-lg leading-relaxed">{project.description}</p>
          </div>
          <div className="md:w-1/2">
            <img src={project.image} alt={project.title} className="rounded-lg shadow-md" />
          </div>
        </ContentBox>
      ))}
    </section>
  );
}

export default Projects;