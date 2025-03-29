import React from 'react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectSection';
import ContactMeSection from './components/ContactMeSection';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
      </main>
    </div>
  );
};

export default App;
