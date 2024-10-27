import React, { useEffect, useRef } from 'react';
import Carousel from '../components/Carousel';

const ContentBox = ({ children, className }) => {
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

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
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

function Home() {
  return (
    <div className="space-y-8">
      {/* <Carousel /> */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 pt-8 text-center">Welcome!</h2>
        
        <ContentBox className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">The Basics</h3>
            <p className="text-lg leading-relaxed">
            Hi, my name is Ethan Wong-Chassine.  I’m a Junior (Class of 2026) at Dartmouth College, 
            majoring in Computer Science, from New York City.  

            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=300&width=400" alt="About Me" className="rounded-lg shadow-md" />
          </div>
        </ContentBox>

        <ContentBox className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Academic Experience</h3>
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

        <ContentBox className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Technical Skills + Personal</h3>
            <p className="text-lg leading-relaxed">
                My technical skills include Python, Java, C, bash/zsh, git, AWS EC2, 
                and some React + Javascript.  In my free time, I enjoy playing and 
                watching basketball (I’m a huge Knicks fan), watching Formula 1, 
                keeping up to date with Middle Eastern politics, experiment with video
                production in Premiere, and listen + mixing music

            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=300&width=400" alt="My Projects" className="rounded-lg shadow-md" />
          </div>
        </ContentBox>
      </section>
    </div>
  );
}

export default Home;