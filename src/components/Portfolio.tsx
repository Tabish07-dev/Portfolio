import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink, HiCode, HiEye } from 'react-icons/hi';
import { SiReact, SiJavascript, SiTailwindcss, SiWordpress, SiHtml5, SiCss3 } from 'react-icons/si';
import DemoRouter from './DemoRouter';

interface PortfolioProps {
  onDemoOpen?: (demoId: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onDemoOpen }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [currentDemo, setCurrentDemo] = useState<string | null>(null);

  const openDemo = (demoId: string | null) => {
    if (demoId) {
      setCurrentDemo(demoId);
      if (onDemoOpen) {
        onDemoOpen(demoId);
      }
    }
  };

  const closeDemo = () => {
    setCurrentDemo(null);
  };

  const projects = [
    {
      id: 100,
      title: 'MERN Stack Social App',
      description: 'A full-stack social media application built with MongoDB, Express.js, React.js, and Node.js. Features authentication, real-time chat, and RESTful APIs.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [SiReact],
      category: 'react',
      demoId: 'ecommerce', // Reuse an existing demo or add a new one if available
      codeUrl: 'https://github.com/Tabish07-dev/mern-social-app',
      featured: true
    },
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React.js and Tailwind CSS, featuring shopping cart, product catalog, and responsive design.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [SiReact, SiTailwindcss, SiJavascript],
      category: 'react',
      demoId: 'ecommerce',
      codeUrl: 'https://github.com',
      featured: true
    },
    {
      id: 2,
      title: 'Restaurant Website',
      description: 'Beautiful restaurant website with interactive menu, reservation system, and modern design using frontend technologies.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [SiReact, SiTailwindcss, SiJavascript],
      category: 'react',
      demoId: 'restaurant',
      codeUrl: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Interactive task management application with kanban board, drag-and-drop functionality, and real-time updates.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [SiReact, SiJavascript, SiTailwindcss],
      category: 'react',
      demoId: 'task-manager',
      codeUrl: 'https://github.com',
      featured: true
    },
    {
      id: 4,
      title: 'Corporate Website',
      description: 'Professional corporate website with modern design, CMS integration, contact forms, and responsive layout for business growth.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [SiWordpress, SiHtml5, SiCss3],
      category: 'cms',
      demoId: 'corporate-website',
      codeUrl: 'https://github.com',
      featured: true
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Modern blog platform with content management, category filtering, search functionality, and social sharing features.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [SiWordpress, SiHtml5, SiCss3],
      category: 'cms',
      demoId: 'blog-platform',
      codeUrl: 'https://github.com',
      featured: true
    },
    {
      id: 6,
      title: 'Landing Page',
      description: 'Modern landing page with animations, responsive design, and conversion-focused layout built with pure frontend technologies.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [SiHtml5, SiCss3, SiJavascript],
      category: 'web',
      demoId: null,
      codeUrl: 'https://github.com',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'react', label: 'React.js' },
    { key: 'cms', label: 'CMS' },
    { key: 'web', label: 'Web Development' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              My <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              A showcase of my recent projects demonstrating expertise in modern web development technologies.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filterItem) => (
                <motion.button
                  key={filterItem.key}
                  onClick={() => setFilter(filterItem.key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    filter === filterItem.key
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filterItem.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className="project-card"
                  whileHover={{ y: -10 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.demoId ? (
                        <motion.button
                          onClick={() => openDemo(project.demoId)}
                          className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-50 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <HiEye className="h-5 w-5" />
                        </motion.button>
                      ) : (
                        <motion.div
                          className="bg-white/50 text-white p-3 rounded-full cursor-not-allowed"
                        >
                          <HiEye className="h-5 w-5" />
                        </motion.div>
                      )}

                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-50 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <HiCode className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-secondary-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex items-center space-x-3 mb-4">
                      {project.technologies.map((Tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center"
                        >
                          <Tech className="h-4 w-4 text-secondary-600" />
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      {project.demoId ? (
                        <button
                          onClick={() => openDemo(project.demoId)}
                          className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                          <HiEye className="h-4 w-4" />
                          <span>Live Demo</span>
                        </button>
                      ) : (
                        <button
                          disabled
                          className="flex-1 bg-gray-300 text-gray-500 text-center py-2 px-4 rounded-lg cursor-not-allowed flex items-center justify-center space-x-2"
                        >
                          <HiEye className="h-4 w-4" />
                          <span>Demo Soon</span>
                        </button>
                      )}

                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <HiCode className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Have a Project in Mind?
              </h3>
              <p className="text-secondary-600 mb-6">
                Let's collaborate and create something amazing together.
              </p>
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Demo Router */}
      <DemoRouter demoId={currentDemo} onClose={closeDemo} />
    </section>
  );
};

export default Portfolio;
