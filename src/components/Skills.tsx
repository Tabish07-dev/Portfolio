import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiDatabase, HiTerminal, HiDeviceMobile, HiGlobe } from 'react-icons/hi';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiGithub
} from 'react-icons/si';

const Skills: React.FC = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: HiCode,
      skills: [
        { name: 'React', icon: SiReact, color: 'text-sky-500', barColor: 'bg-sky-500', level: '90%', desc: 'Advanced' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-950 dark:text-white', barColor: 'bg-slate-950 dark:bg-white', level: '80%', desc: 'Advanced' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500', barColor: 'bg-teal-500', level: '95%', desc: 'Expert' },
        { name: 'Responsive UI', icon: HiDeviceMobile, color: 'text-indigo-500', barColor: 'bg-indigo-500', level: '95%', desc: 'Expert' }
      ]
    },
    {
      title: 'Backend',
      icon: HiTerminal,
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600', barColor: 'bg-green-600', level: '85%', desc: 'Advanced' },
        { name: 'Express.js', icon: SiExpress, color: 'text-slate-700 dark:text-slate-300', barColor: 'bg-slate-700 dark:bg-slate-300', level: '85%', desc: 'Advanced' },
        { name: 'REST APIs', icon: HiGlobe, color: 'text-blue-500', barColor: 'bg-blue-500', level: '90%', desc: 'Advanced' }
      ]
    },
    {
      title: 'Database',
      icon: HiDatabase,
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-500', barColor: 'bg-emerald-500', level: '85%', desc: 'Advanced' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600', barColor: 'bg-blue-600', level: '75%', desc: 'Intermediate' }
      ]
    },
    {
      title: 'Languages',
      icon: HiCode,
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', barColor: 'bg-yellow-500', level: '90%', desc: 'Advanced' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', barColor: 'bg-blue-500', level: '80%', desc: 'Advanced' }
      ]
    },
    {
      title: 'Tools',
      icon: HiTerminal,
      skills: [
        { name: 'Git Version', icon: SiGit, color: 'text-orange-600', barColor: 'bg-orange-600', level: '90%', desc: 'Advanced' },
        { name: 'GitHub Sync', icon: SiGithub, color: 'text-slate-950 dark:text-white', barColor: 'bg-slate-950 dark:bg-white', level: '90%', desc: 'Advanced' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
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
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4 text-base sm:text-lg"
          >
            A curated toolkit of frontend, backend, database, and system-level technologies I specialize in.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 border-b border-slate-200/50 dark:border-slate-800/50 pb-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Category Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col p-2.5 rounded-xl hover:bg-slate-100/55 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <skill.icon className={`h-4 w-4 ${skill.color} transition-transform group-hover:scale-110`} />
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">
                          {skill.desc}
                        </span>
                      </div>
                      
                      {/* Slick Progress Bar */}
                      <div className="h-1.5 w-full bg-slate-200/50 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className={`h-full ${skill.barColor} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
