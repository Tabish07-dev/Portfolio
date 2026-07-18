import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Resume', href: '#resume' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 dark:bg-slate-950 transition-colors duration-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-800 pb-8">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">
              Tabish Ali Soomro
            </h3>
            <p className="text-sm text-slate-400">
              React &amp; TypeScript Developer
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Tabish07-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom copyright & scroll-to-top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Tabish Ali Soomro. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <HiArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
