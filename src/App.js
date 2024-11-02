import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PageTransition from './components/PageTransition';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';

const sections = [
  { id: 'hero', title: 'Home', component: Hero },
  { id: 'about', title: 'About', component: About },
  { id: 'projects', title: 'Projects', component: Projects },
  { id: 'gallery', title: 'Gallery', component: Gallery },
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRefs = useRef({});

  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('Section in view:', entry.target.id);
        setActiveSection(entry.target.id);
      }
    });
  }, []);

  useEffect(() => {
    sections.forEach(section => {
      sectionRefs.current[section.id] = React.createRef();
    });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const currentRefs = sectionRefs.current;
    Object.values(currentRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(currentRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [observerCallback]);

  const scrollToSection = useCallback((sectionId) => {
    setIsTransitioning(true);
    setActiveSection(sectionId);
    setTimeout(() => {
      sectionRefs.current[sectionId].current.scrollIntoView({ behavior: 'smooth' });
      setIsTransitioning(false);
    }, 500);
  }, []);

  return (
    <Router>
      <div className="flex h-screen bg-background text-text font-sans">
        <Sidebar sections={sections} activeSection={activeSection} onSectionClick={scrollToSection} />
        <main className="flex-1 overflow-auto">
          <PageTransition isAnimating={isTransitioning} />
          {sections.map(({ id, component: SectionComponent }) => (
            <div key={id} id={id} ref={sectionRefs.current[id]} className="min-h-screen py-16">
              <SectionComponent />
            </div>
          ))}
        </main>
      </div>
    </Router>
  );
}

export default App;