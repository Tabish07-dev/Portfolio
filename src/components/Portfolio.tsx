import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiEye, HiCheck, HiOutlineSparkles, HiChevronDown, HiChevronUp, HiDeviceMobile } from 'react-icons/hi';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript
} from 'react-icons/si';
import DemoRouter from './DemoRouter';

interface PortfolioProps {
  onDemoOpen?: (demoId: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onDemoOpen }) => {
  const [filter, setFilter] = useState('all');
  const [currentDemo, setCurrentDemo] = useState<string | null>(null);
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

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

  const toggleDetails = (id: number) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  const projects = [
    {
      id: 1,
      title: 'Task Management App',
      role: 'Sole Developer',
      description: 'A frontend task workflow board containing priority levels and live status category lists.',
      problemSolved: 'Static workflows failing to update cards instantaneously.',
      challenges: 'Constructing robust state mutations for tasks without page refreshes.',
      results: 'Engineered a highly responsive task board with immediate state updates and local counters.',
      whatLearned: 'Mastered managing local state arrays and conditional input options in React.',
      featured: true,
      features: ['Add tasks with description and priority', 'Update task columns (To Do, In Progress, Completed)', 'Live state statistics tracker', 'Remove tasks from state'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-sky-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-500' }
      ],
      demoId: 'task-manager',
      codeUrl: 'https://github.com/Tabish07-dev/task-management-app'
    },
    {
      id: 2,
      title: 'Ecommerce Store UI',
      role: 'Frontend Developer',
      description: 'A shopping app mock-up featuring product grids, local item reviews, and dynamic cart sliders.',
      problemSolved: 'Ineffective client shopping cart persistence and sluggish slider states.',
      challenges: 'Syncing product actions across independent components like counts and checkout list panels.',
      results: 'Developed an interactive shopping prototype with smooth slide-in panels and price sums.',
      whatLearned: 'Learned state sharing practices and utilizing React array states.',
      featured: true,
      features: ['Add product items to cart', 'Toggle side-drawer cart list', 'Dynamic total price updates', 'Local item reviews & star ratings'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-sky-500' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-500' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' }
      ],
      demoId: 'ecommerce',
      codeUrl: 'https://github.com/Tabish07-dev/ecommerce-store'
    },
    {
      id: 3,
      title: 'Restaurant Website UI',
      role: 'Frontend Developer',
      description: 'An interactive restaurant reservation and menu UI with category filtering and table scheduling forms.',
      problemSolved: 'Lack of interactive desk reservation views for mobile users.',
      challenges: 'Form field state validation to prevent empty dates or invalid guest entries.',
      results: 'Built a booking desk interface operating smoothly on mobile browsers.',
      whatLearned: 'Deepened styling skills with Tailwind CSS grids and micro-interactions.',
      features: ['Interactive menu category browsing', 'Table reservation scheduling forms', 'Premium layout scroll transitions', 'Responsive mobile grid navigation'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-sky-500' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-500' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' }
      ],
      demoId: 'restaurant',
      codeUrl: 'https://github.com/Tabish07-dev/restaurant-website'
    },
    {
      id: 4,
      title: 'Blog Platform UI',
      role: 'Frontend Developer',
      description: 'A clean content reading layout with local comment additions and search filters.',
      problemSolved: 'Sluggish local content searches and comments listings.',
      challenges: 'Designing dynamic text-based regex filters that update view lists in real-time.',
      results: 'Completed a clean content layout with search capability and local comment submission.',
      whatLearned: 'Mastered client-side filtering logic and React state callbacks.',
      features: ['Instant keyword-based article search', 'Category tag filtering (Tech, Design, Life)', 'Local comment submission box', 'Article reading time metrics'],
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-sky-500' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' }
      ],
      demoId: 'blog-platform',
      codeUrl: 'https://github.com/Tabish07-dev/blog-platform'
    },
    {
      id: 5,
      title: 'Developer Portfolio',
      role: 'Creator',
      description: 'The portfolio you are looking at right now, crafted with clean components, fluid layout transitions, and high-performance design.',
      problemSolved: 'Standard portfolios lacking real-time data integration and micro interactions.',
      challenges: 'Structuring dynamic, light/dark responsive theme states without layout shift flashes.',
      results: 'Launched a developer website with high Lighthouse scores, showing real-time fetched GitHub metrics.',
      whatLearned: 'Learned custom React state persistence, accessibility guidelines, and SEO schemas.',
      features: ['Dark & light theme toggle with local storage', 'Dynamic client-side GitHub statistics fetcher', 'Copy-to-clipboard buttons with Stripe-style toast notifier', 'Scroll progress indicator & floating scroll-to-top button'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-sky-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-500' }
      ],
      demoId: null,
      codeUrl: 'https://github.com/Tabish07-dev/Portfolio'
    }
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return true;
  });

  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Case <span className="gradient-text">Studies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4 text-base sm:text-lg"
          >
            A direct overview of the architectures, layouts, and solutions I built.
          </motion.p>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center gap-3 mb-12">
          {['all', 'featured'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4.5 py-1.5 rounded-full text-xs font-bold capitalize transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category === 'all' ? 'All Projects' : 'Featured Case Studies'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="glass-card flex flex-col justify-between overflow-hidden group hover:shadow-2xl hover:border-slate-350 dark:hover:border-slate-750 transition-all duration-300"
            >
              {/* Image & Badges */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badges Container */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-blue-600 text-white shadow-xs">
                    <HiDeviceMobile className="h-2.5 w-2.5" />
                    <span>Responsive UI</span>
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 shadow-xs animate-pulse">
                      <HiOutlineSparkles className="h-2.5 w-2.5" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Chevron toggle */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => toggleDetails(project.id)}
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:underline py-1"
                    >
                      <span>Recruiter Case Details</span>
                      {expandedProjectId === project.id ? <HiChevronUp className="h-3.5 w-3.5" /> : <HiChevronDown className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                  
                  {/* Short Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Expandable Case Details (Recruiter High Priority) */}
                  <AnimatePresence>
                    {expandedProjectId === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80 pt-3.5 mb-4 space-y-3"
                      >
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                            Role in Project
                          </span>
                          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                            {project.role}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                            Problem Solved
                          </span>
                          <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                            {project.problemSolved}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                            Key Challenges
                          </span>
                          <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                            {project.challenges}
                          </p>
                        </div>
                        {project.whatLearned && (
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                              What I Learned
                            </span>
                            <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                              {project.whatLearned}
                            </p>
                          </div>
                        )}
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                            Results &amp; Impact
                          </span>
                          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-start gap-1">
                            <HiOutlineSparkles className="h-3.5 w-3.5 shrink-0 mt-0.5 text-blue-500" />
                            <span>{project.results}</span>
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Features List */}
                  <div className="mb-4">
                    <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feat, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <HiCheck className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1 mb-4 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    {project.technologies.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md"
                        >
                          <Icon className={`h-2.5 w-2.5 ${tech.color}`} />
                          <span>{tech.name}</span>
                        </span>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2.5">
                    {project.demoId ? (
                      <button
                        onClick={() => openDemo(project.demoId)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-1.5 rounded-lg text-xs transition-colors shadow-xs"
                      >
                        <HiEye className="h-3.5 w-3.5" />
                        <span>Live Demo</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 font-semibold py-1.5 rounded-lg text-xs cursor-not-allowed"
                      >
                        <HiEye className="h-3.5 w-3.5" />
                        <span>Demo Soon</span>
                      </button>
                    )}

                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-1.5 rounded-lg text-xs transition-colors border border-slate-200 dark:border-slate-800"
                    >
                      <HiCode className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Demo Router Modal */}
      <DemoRouter demoId={currentDemo} onClose={closeDemo} />
    </section>
  );
};

export default Portfolio;
