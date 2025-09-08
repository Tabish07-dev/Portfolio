import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Outstanding work! Tabish delivered a website that exceeded our expectations. Professional, responsive, and delivered on time. His attention to detail and modern design approach really impressed our team.',
      project: 'E-commerce Platform'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'Digital Solutions Co.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Incredible developer with excellent communication skills. Tabish built the React.js application exactly as specified with clean, maintainable code. Highly recommend him for any frontend development project.',
      project: 'Corporate Website'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'Creative Agency',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Amazing experience working together! The portfolio website showcases our work beautifully. Fast loading, mobile-responsive, and the CMS integration makes content updates effortless.',
      project: 'Portfolio Website'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Restaurant Owner',
      company: 'Bella Vista Restaurant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'The restaurant website brought in 40% more online reservations! Beautiful design, easy navigation, and the online menu system works perfectly. Great investment for our business.',
      project: 'Restaurant Website'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Product Manager',
      company: 'InnovateTech',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Professional, reliable, and skilled developer. The dashboard application was delivered with excellent performance optimization and user experience. Will definitely work together again.',
      project: 'Analytics Dashboard'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="section-padding bg-white">
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
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients say about working with me.
            </p>
          </motion.div>

          {/* Main Testimonial Slider */}
          <motion.div variants={itemVariants} className="relative max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <AnimatePresence mode="wait" custom={currentIndex}>
                <motion.div
                  key={currentIndex}
                  custom={currentIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="text-center relative z-10"
                >
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <HiStar key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-secondary-700 leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-secondary-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-secondary-600 text-sm">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-primary-600 text-sm font-medium">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Project Tag */}
                  <div className="mt-6">
                    <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                      Project: {testimonials[currentIndex].project}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-secondary-600 hover:text-primary-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              >
                <HiChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-secondary-600 hover:text-primary-600 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              >
                <HiChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary-600 scale-125'
                      : 'bg-secondary-300 hover:bg-secondary-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Happy Clients' },
              { number: '100+', label: 'Projects Completed' },
              { number: '5.0', label: 'Average Rating' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Join My Happy Clients?
              </h3>
              <p className="mb-6 opacity-90">
                Let's create something amazing together and add your success story to this list.
              </p>
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
