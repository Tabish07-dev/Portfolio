import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiDatabase, HiBriefcase, HiBookOpen, HiSearch, HiOutlineSparkles } from 'react-icons/hi';

const About: React.FC = () => {
  const timelineEvents = [
    {
      year: '2023',
      title: 'Foundations & Core Web Technologies',
      subtitle: 'Self-Taught Journey Begins',
      description: 'Mastered semantic HTML5, responsive CSS3 grids, and ES6+ JavaScript. Learned variables, closures, DOM manipulation, and asynchronous programming.',
      icon: HiBookOpen,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design']
    },
    {
      year: '2024',
      title: 'React.js & Modern Frontend ecosystems',
      subtitle: 'Advanced UI Development',
      description: 'Focused on UI states, hooks, Context API, Tailwind utility-first styling, and version control workflows using Git/GitHub.',
      icon: HiCode,
      skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Git & GitHub', 'REST APIs']
    },
    {
      year: '2025',
      title: 'Backend Basics & REST Integrations',
      subtitle: 'Mock API & Local Data Flow',
      description: 'Studied server-side fundamentals with Node.js and Express.js. Practiced database concepts using basic MongoDB and local storage structures to support frontend interfaces.',
      icon: HiDatabase,
      skills: ['Node.js', 'Express.js', 'MongoDB basics', 'Local API Integration']
    },
    {
      year: '2026',
      title: 'Next.js & Preparing for Remote Roles',
      subtitle: 'Production-Ready Optimization',
      description: 'Currently optimizing web apps using Next.js App Router, prioritizing code splitting, search engine optimization (SEO), and Lighthouse audit criteria.',
      icon: HiBriefcase,
      skills: ['Next.js', 'Vite', 'SEO Optimization', 'Clean Code Architecture']
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900 transition-colors duration-300">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4 text-base sm:text-lg"
          >
            A self-taught React &amp; TypeScript Developer driven by logic, consistency, and a passion for engineering responsive web applications.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Professional Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HiSearch className="text-blue-600 dark:text-blue-400 h-6 w-6" />
              <span>Core Engineering Values</span>
            </h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Curiosity-Driven Growth:</strong> I started coding out of sheer curiosity to understand how global platforms process millions of requests. That drive has led me to dive deep into compiler behaviors, networking layers, and database architectures.
              </p>
              
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Autodidact Discipline:</strong> Without formal bootcamps or computer science degrees, I built a structured study routine, teaching myself backend systems, asynchronous JavaScript, and REST configurations directly from official documentation.
              </p>

              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Consistency &amp; Output:</strong> I commit code daily. Over the past 2 years, I built 5+ complete applications, focusing on clean TypeScript definitions and state lifecycle rules rather than taking shortcuts.
              </p>

              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Problem Solving Focus:</strong> I enjoy finding structural answers. From designing optimized database indexes to handling complex React re-render lifecycles, I tackle challenges with a methodical debugging approach.
              </p>
            </div>

            <div className="bg-blue-50/50 dark:bg-slate-800/40 border border-blue-100/50 dark:border-slate-800 p-5 rounded-2xl flex gap-3 items-start">
              <HiOutlineSparkles className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  Ready for Global Collaboration
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Equipped with clear written communication, timezone flexibility, and version control git workflows to integrate into international team cycles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7 relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
            {timelineEvents.map((event, index) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={event.year}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[35px] top-1.5 bg-white dark:bg-slate-900 p-1 rounded-full border border-slate-200 dark:border-slate-800">
                  <div className="w-4.5 h-4.5 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white">
                    <event.icon className="w-2.5 h-2.5" />
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card p-5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded">
                      {event.year}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                      {event.subtitle}
                    </span>
                  </div>
                  
                  <h4 className="text-base font-bold text-slate-950 dark:text-white mb-1.5">
                    {event.title}
                  </h4>
                  
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {event.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] font-bold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
