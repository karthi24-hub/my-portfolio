import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import FloatingButton from './components/FloatingButton';
import AnimatedBackground from './components/AnimatedBackground';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'technologies', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen relative overflow-x-hidden">
        <AnimatedBackground />
        
        <Navbar 
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
        />
        
        <main className="relative z-10">
          <Home />
          <Projects />
          <Technologies />
          <Experience />
          <AnimatedBackground />
          <Contact />
        </main>
        
        <Footer />
        <FloatingButton onClick={() => scrollToSection('contact')} />
      </div>
    </div>
  );
}

export default App;