import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function AppContent() {
  const [displayLocation, setDisplayLocation] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayLocation(location);
    }, 500); // This should match the duration of the page transition animation

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex h-screen bg-background text-text font-sans">
      <Sidebar />
      <div className="w-px bg-text"></div>
      <main className="flex-1 overflow-auto">
        <PageTransition />
        <Routes location={displayLocation || location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;