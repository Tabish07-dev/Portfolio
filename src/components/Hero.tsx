import React from 'react';



const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5fa' }}>
      <div style={{ width: '100%', maxWidth: 800, margin: '0 auto', textAlign: 'center', padding: 24 }}>
        <div style={{ marginBottom: 16, color: '#2563eb', fontWeight: 600 }}>
          Available for new projects
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 16 }}>
          Hi, I'm <span style={{ color: '#6366f1' }}>Tabish Ali</span>
        </h1>
        <h2 style={{ fontSize: 24, fontWeight: 500, color: '#374151', marginBottom: 16 }}>
          MERN Stack Developer &amp; CMS Specialist
        </h2>
        <p style={{ fontSize: 18, color: '#555', marginBottom: 24 }}>
          I help businesses <b style={{ color: '#2563eb' }}>increase online revenue by 40-60%</b> through modern, conversion-optimized websites that turn visitors into customers using <b>React.js</b>, <b>JavaScript</b>, and <b>CMS development</b>.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', marginBottom: 24 }}>
          <button
            onClick={() => scrollToSection('#case-studies')}
            style={{ background: '#6366f1', color: '#fff', padding: '12px 32px', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
          >
            See Success Stories
          </button>
          <button
            onClick={() => scrollToSection('#pricing')}
            style={{ background: 'transparent', color: '#2563eb', border: '2px solid #2563eb', padding: '12px 32px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
          >
            View Pricing
          </button>
        </div>
        <div style={{ color: '#dc2626', marginBottom: 24, fontWeight: 500 }}>
          🔥 Limited: Only 3 project spots available this month
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24 }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#444', fontSize: 20, textDecoration: 'underline' }}>GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#444', fontSize: 20, textDecoration: 'underline' }}>LinkedIn</a>
          <a href="mailto:tabisoomro12@gmail.com" style={{ color: '#444', fontSize: 20, textDecoration: 'underline' }}>Email</a>
        </div>
        <div>
          <button
            onClick={() => scrollToSection('#about')}
            style={{ background: 'none', border: 'none', color: '#888', fontSize: 28, cursor: 'pointer' }}
            aria-label="Scroll Down"
          >
            ↓
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
