import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiArrowRight, HiLocationMarker, HiBriefcase } from 'react-icons/hi';
import { SiGithub, SiLinkedin, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTypescript, SiPostgresql, SiTailwindcss } from 'react-icons/si';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Full Stack MERN Developer', 'React & Next.js Engineer', 'Node.js Backend Expert'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === activeRole.length) {
      typingSpeed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? activeRole.substring(0, charIndex - 1)
          : activeRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

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

  const techStack = [
    { name: 'React', icon: SiReact, color: 'hover:text-sky-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'hover:text-black dark:hover:text-white' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'hover:text-green-600' },
    { name: 'MongoDB', icon: SiMongodb, color: 'hover:text-emerald-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'hover:text-blue-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'hover:text-blue-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'hover:text-teal-500' }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

      {/* Backdrop Glowing Blobs */}
      <div className="absolute top-1/4 left-1/12 w-64 h-64 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/12 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Recruiter-focused Left Profile details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Availability and Location row */}
            <div className="flex flex-wrap gap-2.5 items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/5 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Available for Remote Work</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                <HiLocationMarker className="h-3.5 w-3.5 text-red-500" />
                <span>Dadu, Sindh, Pakistan</span>
              </span>
            </div>

            {/* Name and typing animation */}
            <div className="space-y-1">
              <p className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                Software Engineer Portfolio
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-none">
                Tabish Ali Soomro
              </h1>
              <div className="h-10 flex items-center">
                <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                  Specializing in{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                    {typedText}
                  </span>
                  <span className="animate-pulse text-indigo-500 font-normal">|</span>
                </p>
              </div>
            </div>

            {/* Professional pitch statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Self-taught MERN Stack Developer build-tested on production-grade components. Focused on launching fast, scalable web apps using React, Next.js, Node.js, Express, and MongoDB. Ready for remote teams.
            </p>

            {/* Key Tech Stack Showcase above the fold */}
            <div className="space-y-2.5 pt-2">
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <tech.icon className={`h-4 w-4 text-slate-500 transition-colors ${tech.color}`} />
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap gap-3.5 pt-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary py-3 px-7 text-sm font-semibold shadow-md shadow-blue-500/20"
              >
                <span>View Projects</span>
                <HiArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => scrollToSection('#resume')}
                className="btn-secondary py-3 px-7 text-sm font-semibold border-slate-300 dark:border-slate-700"
              >
                <HiDownload className="h-4 w-4" />
                <span>Resume Details</span>
              </button>
            </div>

            {/* Recruiter Social connections */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 max-w-md">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Recruiter Directs:
              </span>
              
              <a
                href="https://github.com/Tabish07-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                <SiGithub className="h-4.5 w-4.5" />
                <span>GitHub</span>
              </a>

              <span className="text-slate-300 dark:text-slate-800">|</span>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <SiLinkedin className="h-4.5 w-4.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Floating graphic (Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border border-slate-200 dark:border-slate-800 scale-105 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full border border-slate-200/50 dark:border-slate-800/50 scale-110 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-15 blur-xl pointer-events-none animate-pulse-slow"></div>

              {/* Profile Image container */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl">
                <img
                  src="/images/tabish-ali-profile.jpg.jpeg"
                  alt="Tabish Ali Soomro profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating MERN badge card */}
              <motion.div
                initial={{ y: 8 }}
                animate={{ y: -8 }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 3,
                  ease: 'easeInOut'
                }}
                className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md px-4.5 py-3 rounded-2xl shadow-xl max-w-[200px]"
              >
                <div className="flex gap-2.5 items-center">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <HiBriefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                      MERN Engineer
                    </h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      5+ Scalable Projects Built
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
