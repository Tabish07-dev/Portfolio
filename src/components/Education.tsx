import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar, HiLocationMarker, HiStar } from 'react-icons/hi';

const Education: React.FC = () => {
  const educationItems = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Targeting Top Engineering Universities',
      board: 'Future Academic Goal',
      duration: 'Planned',
      description: 'Aiming to pursue higher education in Software Engineering to study advanced systems design, algorithm complexities, compiler operations, and software engineering methodologies.',
      status: 'Future Goal',
      icon: HiStar,
      color: 'bg-indigo-600 dark:bg-indigo-500'
    },
    {
      degree: 'Intermediate (Pre-Engineering)',
      institution: 'Government Degree College Dadu',
      board: 'BISE Hyderabad Board',
      duration: 'Currently Studying',
      description: 'Strengthening analytical thinking and problem-solving disciplines through calculus, advanced physics, and engineering sciences.',
      status: 'In Progress',
      icon: HiAcademicCap,
      color: 'bg-blue-600 dark:bg-blue-500'
    },
    {
      degree: 'Matriculation (Science)',
      institution: 'Government High School Dadu',
      board: 'BISE Hyderabad Board',
      duration: 'Graduated',
      description: 'Completed secondary education with a strong focus on computer sciences and basic mechanics, achieving an outstanding grade of 87%.',
      status: '87% Grade',
      icon: HiAcademicCap,
      color: 'bg-blue-600 dark:bg-blue-500'
    }
  ];

  return (
    <section id="education" className="section-padding bg-white dark:bg-slate-900 transition-colors duration-300">
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
            My <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4 text-base sm:text-lg"
          >
            My academic foundation and educational trajectory in Sindh, Pakistan.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
          {educationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Node Icon */}
                <div className="absolute -left-[47px] top-1.5 bg-white dark:bg-slate-900 p-1.5 rounded-full border border-slate-200 dark:border-slate-800">
                  <div className={`w-6 h-6 rounded-full ${item.color} flex items-center justify-center text-white`}>
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Education Card */}
                <div className="glass-card p-6 sm:p-8 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full mb-3 ${
                        item.status === 'Future Goal' 
                          ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400' 
                          : 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
                      }`}>
                        {item.status}
                      </span>
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                        {item.institution}
                      </p>
                    </div>
                    <div className="flex flex-col items-end text-xs text-slate-400 dark:text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5">
                        <HiCalendar className="h-3.5 w-3.5 text-slate-400" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1.5 mt-1">
                        <HiLocationMarker className="h-3.5 w-3.5 text-slate-400" />
                        Dadu, Sindh, Pakistan
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                    {item.description}
                  </p>

                  <div className="text-xs font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <span>Classification:</span>
                    <span className="text-slate-700 dark:text-slate-300">{item.board}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
