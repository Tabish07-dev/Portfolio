import React, { useState, useEffect } from 'react';


// Simple header with navigation, no animation or fancy effects
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMenu(false);
  };

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', zIndex: 50 }}>
      <nav style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1rem', display: 'flex', alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
        {/* Logo */}
        <a
          href="#home"
          onClick={e => { e.preventDefault(); scrollToSection('#home'); }}
          style={{ fontWeight: 'bold', fontSize: 24, color: '#222', textDecoration: 'none' }}
        >
          Tabish Ali
        </a>
        {/* Desktop nav - always visible, horizontal */}
        <div
          className="nav-desktop"
          style={{ display: 'flex', gap: 24 }}
        >
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => { e.preventDefault(); scrollToSection(item.href); }}
              style={{ color: '#444', textDecoration: 'none', fontSize: 16, padding: '8px 12px', borderRadius: 6, transition: 'background 0.2s', marginLeft: 0, fontWeight: 500 }}
              onMouseOver={e => (e.currentTarget.style.background = '#f1f5f9')}
              onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Mobile menu button - only for small screens, hidden by default */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', display: 'none' }}
        >
          {showMenu ? '✖' : '☰'}
        </button>
      </nav>
      {/* Mobile nav - not shown in this simple version */}
    </header>
  );
};

export default Header;
