import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiLightBulb,
  HiDesktopComputer,
  HiCode,
  HiClock,
  HiCheckCircle,
  HiSupport
} from 'react-icons/hi';

const Process: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      duration: '2-3 days',
      icon: HiLightBulb,
      description: 'We start with a comprehensive consultation to understand your business goals, target audience, and project requirements.',
      activities: [
        'Business goals analysis',
        'Target audience research',
        'Competitor analysis',
        'Technical requirements gathering',
        'Project timeline planning'
      ],
      deliverables: ['Project proposal', 'Timeline & milestones', 'Technical specifications']
    },
    {
      step: '02',
      title: 'Design & Planning',
      duration: '3-5 days',
      icon: HiDesktopComputer,
      description: 'Creating wireframes, mockups, and detailed design specifications that align with your brand and conversion goals.',
      activities: [
        'Wireframe creation',
        'UI/UX design',
        'Brand integration',
        'Responsive design planning',
        'User experience optimization'
      ],
      deliverables: ['Design mockups', 'Style guide', 'Responsive layouts']
    },
    {
      step: '03',
      title: 'Development & Testing',
      duration: '1-4 weeks',
      icon: HiCode,
      description: 'Building your website with clean, modern code, followed by rigorous testing across all devices and browsers.',
      activities: [
        'Frontend development',
        'Responsive implementation',
        'Performance optimization',
        'Cross-browser testing',
        'Mobile optimization'
      ],
      deliverables: ['Functional website', 'Testing reports', 'Performance metrics']
    },
    {
      step: '04',
      title: 'Launch & Support',
      duration: '1-2 days',
      icon: HiSupport,
      description: 'Deploying your website to production and providing ongoing support to ensure everything runs smoothly.',
      activities: [
        'Domain & hosting setup',
        'Website deployment',
        'SEO optimization',
        'Analytics integration',
        'Training & handover'
      ],
      deliverables: ['Live website', 'Admin training', 'Support documentation']
    }
  ];

  const guarantees = [
    {
      icon: HiCheckCircle,
      title: '100% Satisfaction Guarantee',
      description: 'If you\'re not completely satisfied, I\'ll work until you are or provide a full refund.'
    },
    {
      icon: HiSupport,
      title: 'Ongoing Support',
      description: 'Free support and maintenance for 30-120 days depending on your package.'
    },
    {
      icon: HiClock,
      title: 'On-Time Delivery',
      description: 'Your project will be delivered on schedule or you get 10% off your next project.'
    }
  ];

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
    <section id="process" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HiClock className="mr-2 h-4 w-4" />
              Proven Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined, transparent process that ensures your project is delivered on time, on budget, and exceeds your expectations.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Step Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-blue-600 mb-1">Step {step.step}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <div className="text-sm text-gray-500">{step.duration}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What We Do:</h4>
                        <ul className="space-y-2">
                          {step.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">You Receive:</h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, delIndex) => (
                            <li key={delIndex} className="flex items-center text-sm text-gray-600">
                              <HiCheckCircle className="h-4 w-4 text-green-500 mr-3" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Step Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-3xl font-bold text-white">{step.step}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                        <div className="text-blue-600 font-medium">{step.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="w-px h-12 bg-gradient-to-b from-blue-300 to-purple-300"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Guarantees Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Commitment to You
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your success is my priority. That's why I back every project with these guarantees.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={guarantee.title}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <guarantee.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {guarantee.title}
                  </h4>
                  <p className="text-gray-600">
                    {guarantee.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's schedule a free 30-minute consultation to discuss your project and see how I can help your business grow.
              </p>
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
