import React from 'react';
import { ContentBox } from '../components/ContentBox';

function About() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      
      <ContentBox className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Quickstart</h3>
          <p className="text-lg leading-relaxed">
          Hi, my name is Ethan Wong-Chassine.  I’m a Junior (Class of 2026) at Dartmouth College, 
          majoring in Computer Science, from New York City. 
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg?height=300&width=400" alt="About Me" className="rounded-lg shadow-md" />
        </div>
      </ContentBox>

      <ContentBox className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">My Academic Experience</h3>
          <p className="text-lg leading-relaxed">
          To date, I have taken eight classes in computer science including Algorithms, 
            Data Structures, Software in C, Introductory Linear Algebra, Digital Graphics,
            and Security and Privacy.  My classes are taught in intensive 10-week terms 
            (vs. traditional 16-week semesters) and I enjoy the fast-paced learning 
            environment it offers.  My interests are expansive, and I am eager to gain 
            exposure through training programs, internships, projects, or mentorships.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg?height=300&width=400" alt="My Skills" className="rounded-lg shadow-md" />
        </div>
      </ContentBox>
      <ContentBox className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Skills and Interests</h3>
          <p className="text-lg leading-relaxed">
            My technical skills include Python, Java, C, bash/zsh, git, AWS EC2, 
            and some React + Javascript.  In my free time, I enjoy playing and 
            watching basketball (I'm a huge Knicks fan), watching Formula 1, 
            keeping up to date with Middle Eastern politics, experiment with video
            production in Premiere, and listen + mixing music
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg?height=300&width=400" alt="About Me" className="rounded-lg shadow-md" />
        </div>
      </ContentBox>
    </section>
  );
}

export default About;