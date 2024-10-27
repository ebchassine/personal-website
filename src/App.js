import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import PageTransition from './components/PageTransition';
import About from './pages/About';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';

const sections = [
  { id: 'about', title: 'About', component: About },
  { id: 'projects', title: 'Projects', component: Projects },
  { id: 'gallery', title: 'Gallery', component: Gallery },
];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    sections.forEach(section => {
      sectionRefs.current[section.id] = React.createRef();
    });
  }, []);

  const scrollToSection = (sectionId) => {
    setIsTransitioning(true);
    setActiveSection(sectionId);
    setTimeout(() => {
      sectionRefs.current[sectionId].current.scrollIntoView({ behavior: 'smooth' });
      setIsTransitioning(false);
    }, 500); // This should match the duration of your transition animation
  };

  return (
    <div className="flex h-screen bg-background text-text font-sans">
      <Sidebar sections={sections} activeSection={activeSection} onSectionClick={scrollToSection} />
      <main className="flex-1 overflow-auto">
        <PageTransition isAnimating={isTransitioning} />
        {sections.map(({ id, component: SectionComponent }) => (
          <div key={id} ref={sectionRefs.current[id]} className="min-h-screen py-16">
            <SectionComponent />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;