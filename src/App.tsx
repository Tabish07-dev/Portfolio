import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
