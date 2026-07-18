import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import GitHubStats from './components/GitHubStats';
import Resume from './components/Resume';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Extra components for premium feel
import LoadingScreen from './components/LoadingScreen';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans">
      <LoadingScreen />
      <ScrollProgressBar />
      <CustomCursor />
      
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <GitHubStats />
        <Resume />
        <Education />
        <Contact />
      </main>
      <Footer />
      
      <ScrollToTop />
    </div>
  );
}

export default App;
