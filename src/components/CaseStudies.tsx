import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiTrendingUp, HiUsers, HiClock, HiGlobe, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const CaseStudies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentCase, setCurrentCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      client: 'TechCorp Solutions',
      industry: 'Technology Consulting',
      project: 'Corporate Website Redesign',
      duration: '3 weeks',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      challenge: 'TechCorp had an outdated website that wasn\'t generating leads. Their bounce rate was 78% and they were losing potential clients to competitors.',
      solution: 'Redesigned their website with modern UI/UX, optimized for conversions, added clear call-to-actions, and implemented lead capture forms.',
      results: [
        { metric: 'Lead Generation', value: '+156%', description: 'Monthly qualified leads increased from 25 to 64' },
        { metric: 'Bounce Rate', value: '-45%', description: 'Reduced from 78% to 33%' },
        { metric: 'Page Load Speed', value: '+67%', description: 'Improved from 4.2s to 1.4s' },
        { metric: 'Revenue Impact', value: '+$50K', description: 'Additional revenue in first 3 months' }
      ],
      testimonial: "Tabish transformed our online presence completely. The new website generated 156% more leads in just 3 months, resulting in $50,000 additional revenue. His attention to detail and understanding of our business needs was exceptional.",
      clientName: 'Sarah Johnson',
      clientPosition: 'CEO, TechCorp Solutions'
    },
    {
      id: 2,
      client: 'Bella Vista Restaurant',
      industry: 'Food & Hospitality',
      project: 'Restaurant Website & Online Ordering',
      duration: '2 weeks',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      challenge: 'Local restaurant struggling with online presence during COVID-19. No online ordering system and losing customers to competitors with better digital presence.',
      solution: 'Built a modern restaurant website with integrated online menu, reservation system, and mobile-optimized design to capture the growing mobile audience.',
      results: [
        { metric: 'Online Orders', value: '+240%', description: 'From 15 to 51 orders per week' },
        { metric: 'Reservations', value: '+89%', description: 'Online reservations increased significantly' },
        { metric: 'Mobile Traffic', value: '+134%', description: 'Mobile users now 68% of total traffic' },
        { metric: 'Revenue Growth', value: '+$25K', description: 'Monthly revenue increase' }
      ],
      testimonial: "The new website brought in 240% more online orders! Our revenue increased by $25,000 per month. Tabish understood our needs perfectly and delivered exactly what we needed to compete in the digital space.",
      clientName: 'Marco Rodriguez',
      clientPosition: 'Owner, Bella Vista Restaurant'
    },
    {
      id: 3,
      client: 'InnovateTech Startup',
      industry: 'SaaS Technology',
      project: 'SaaS Landing Page & Dashboard',
      duration: '4 weeks',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      challenge: 'Early-stage startup needed a professional landing page to attract investors and convert trial users to paid customers. Conversion rate was only 2.1%.',
      solution: 'Created a conversion-optimized landing page with clear value proposition, social proof, and streamlined user onboarding flow.',
      results: [
        { metric: 'Conversion Rate', value: '+285%', description: 'From 2.1% to 8.1% trial-to-paid conversion' },
        { metric: 'User Signups', value: '+167%', description: 'Weekly signups increased from 45 to 120' },
        { metric: 'Investor Interest', value: '+300%', description: 'Secured $500K seed funding' },
        { metric: 'User Engagement', value: '+78%', description: 'Time on site increased to 4.2 minutes' }
      ],
      testimonial: "Tabish's landing page was instrumental in securing our $500K seed funding. The conversion rate increased by 285%, and the professional design gave investors confidence in our product. Absolutely worth every penny.",
      clientName: 'David Chen',
      clientPosition: 'Founder, InnovateTech'
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
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

  const currentStudy = caseStudies[currentCase];

  return (
    <section id="case-studies" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HiTrendingUp className="mr-2 h-4 w-4" />
              Proven Results
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real businesses, real results. See how my frontend development solutions have helped clients achieve measurable growth and success.
            </p>
          </motion.div>

          {/* Case Study Showcase */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image and Basic Info */}
                    <div>
                      <img
                        src={currentStudy.image}
                        alt={currentStudy.client}
                        className="w-full h-64 object-cover rounded-xl shadow-lg mb-6"
                      />
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Client</span>
                          <span className="font-semibold text-gray-900">{currentStudy.client}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Industry</span>
                          <span className="font-semibold text-gray-900">{currentStudy.industry}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Duration</span>
                          <span className="font-semibold text-gray-900">{currentStudy.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {currentStudy.project}
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{currentStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{currentStudy.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentStudy.results.map((result, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {result.value}
                        </div>
                        <div className="font-semibold text-gray-900 mb-2">
                          {result.metric}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
                    <blockquote className="text-lg text-gray-700 italic mb-6">
                      "{currentStudy.testimonial}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {currentStudy.clientName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{currentStudy.clientName}</div>
                        <div className="text-gray-600">{currentStudy.clientPosition}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevCase}
                  className="flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-md"
                >
                  <HiChevronLeft className="h-5 w-5" />
                  <span>Previous</span>
                </button>

                <div className="flex space-x-2">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCase(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentCase ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextCase}
                  className="flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-md"
                >
                  <span>Next</span>
                  <HiChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Achieve Similar Results?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help your business grow with a modern, conversion-optimized website that delivers measurable results.
              </p>
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Success Story
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
