import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiAcademicCap, HiBriefcase, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="section-padding bg-white dark:bg-slate-900 transition-colors duration-300">
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
            My <span className="gradient-text">Resume</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4 text-base sm:text-lg"
          >
            View a summarized brief of my credentials or download the printer-friendly PDF copy.
          </motion.p>
          
          {/* Download Button */}
          <div className="mt-8">
            <motion.a
              href="/resume.pdf"
              download="Tabish_Ali_Soomro_Resume.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiDownload className="h-4.5 w-4.5" />
              <span>Download Resume PDF</span>
            </motion.a>
          </div>
        </div>

        {/* Visual Resume Sheet Preview Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative"
        >
          {/* Floating preview watermark badge */}
          <div className="absolute top-4 right-4 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-blue-500/20">
            Visual CV Preview
          </div>

          <div className="space-y-8">
            {/* Header info */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Tabish Ali Soomro
              </h3>
              <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-1 uppercase tracking-wider">
                Full Stack MERN Developer
              </p>
              
              {/* Contact meta row */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 mt-4">
                <span className="flex items-center gap-1.5">
                  <HiMail className="h-4 w-4" />
                  <span>tabisoomro12@gmail.com</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <HiPhone className="h-4 w-4" />
                  <span>+92 313 3196759</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <HiLocationMarker className="h-4 w-4" />
                  <span>Dadu, Sindh, Pakistan</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <SiGithub className="h-3.5 w-3.5" />
                  <span>github.com/Tabish07-dev</span>
                </span>
              </div>
            </div>

            {/* Grid details */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Left Column: Summary & Skills */}
              <div className="md:col-span-1 space-y-6">
                {/* Summary */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                    Professional Brief
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Self-taught Full Stack MERN engineer focused on launching interactive React interfaces and REST backend APIs. Dedicated to code modularity, test-driven efficiency, and cross-browser responsiveness.
                  </p>
                </div>

                {/* Tech competencies */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                    Core Competencies
                  </h4>
                  <ul className="space-y-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>Frontend: React, Next.js, HTML5, CSS3</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>Backend: Node.js, Express.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>Database: MongoDB, PostgreSQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>Styling: Tailwind CSS, Vanilla CSS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>Version Control: Git &amp; GitHub</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Experience & Education */}
              <div className="md:col-span-2 space-y-6">
                
                {/* Experience */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <HiBriefcase className="h-4.5 w-4.5 text-blue-500" />
                    <span>Project &amp; Technical Experience</span>
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start flex-wrap gap-1">
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                          Full Stack Developer (Personal &amp; Open Source)
                        </h5>
                        <span className="text-[10px] font-bold text-slate-400">2024 - Present</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                        • Engineered a scalable MERN social network app featuring Cloudinary uploads and real-time Socket.io messages.
                        <br />
                        • Built a Next.js ecommerce web solution with Price filters, Stripe Checkouts, and persistent cart state.
                        <br />
                        • Structured drag-and-drop Kanban task boards with LocalStorage caching policies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <HiAcademicCap className="h-4.5 w-4.5 text-blue-500" />
                    <span>Education Credentials</span>
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-start flex-wrap gap-1">
                        <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                          Intermediate (Pre-Engineering)
                        </h5>
                        <span className="text-[10px] font-bold text-blue-500">Current</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Government Degree College Dadu | BISE Hyderabad Board
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start flex-wrap gap-1">
                        <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                          Matriculation (Science) — 87% Grade
                        </h5>
                        <span className="text-[10px] font-bold text-slate-400">Graduated</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Government High School Dadu | BISE Hyderabad Board
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
