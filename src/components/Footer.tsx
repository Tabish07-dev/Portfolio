import React from 'react';
import { motion } from 'framer-motion';
import { HiHeart, HiArrowUp, HiMail, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Frontend Development',
    'React.js Applications',
    'Responsive Design',
    'CMS Development',
    'Performance Optimization',
    'Website Maintenance'
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/Tabish07-dev',
      color: 'hover:text-gray-900'
    }
  ];

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-transparent"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Tabish Ali
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                MERN Stack & Computer Science Developer — I build modern, responsive websites and full-stack web applications using MongoDB, Express.js, React.js, and Node.js. <br/>
                <span className="block mt-2">Check out my live MERN stack demo below!</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <HiMail className="h-5 w-5 text-primary-400" />
                <a 
                  href="mailto:tabisoomro12@gmail.com"
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  tabisoomro12@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-300 hover:text-white transition-colors duration-200">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="text-secondary-300 mb-6">
              Follow me on social media for updates on new projects and web development tips.
            </p>


            {/* Social Links */}
            <div className="flex space-x-4 mb-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 transition-all duration-200 ${social.color} hover:bg-secondary-700`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            {/* GitHub direct link below icons */}
            <div className="mb-8">
              <a
                href="https://github.com/Tabish07-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-600 underline text-sm"
              >
                Visit my GitHub: github.com/Tabish07-dev
              </a>
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800 relative z-10">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-secondary-400"
            >
              <span>© {new Date().getFullYear()} Tabish Ali. Made with</span>
              <HiHeart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by a passionate MERN stack developer</span>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-secondary-400 hover:text-white transition-colors duration-200 group"
              whileHover={{ y: -2 }}
            >
              <span>Back to top</span>
              <HiArrowUp className="h-4 w-4 group-hover:animate-bounce" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button (Fixed) */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <HiArrowUp className="h-6 w-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
