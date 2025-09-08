import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiClock,
  HiCheckCircle,
  HiFlag
} from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'tabisoomro12@gmail.com',
      link: 'mailto:tabisoomro12@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: '03133196759',
      link: 'tel:03133196759',
      description: 'Call me for urgent projects'
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Pakistan',
      link: '#',
      description: 'Available for remote work worldwide'
    },
    {
      icon: HiClock,
      title: 'Response Time',
      value: '< 24 hours',
      link: '#',
      description: 'Quick response guaranteed'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-900'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaWhatsapp,
      name: 'WhatsApp',
      url: 'https://wa.me/923133196759',
      color: 'hover:text-green-500'
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
    <section id="contact" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
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
              <HiClock className="mr-2 h-4 w-4" />
              Free Consultation Available
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Let's Start Your <span className="gradient-text">Success Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to increase your revenue with a modern, conversion-optimized website? Let's discuss your project and I'll show you exactly how I can help your business grow.
            </p>

            {/* Urgency Elements */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <div className="flex items-center bg-blue-100 text-blue-700 px-3 py-2 rounded-full">
                <HiClock className="mr-2 h-4 w-4" />
                Response within 2 hours
              </div>
              <div className="flex items-center bg-purple-100 text-purple-700 px-3 py-2 rounded-full">
                <HiCheckCircle className="mr-2 h-4 w-4" />
                Free project consultation
              </div>
              <div className="flex items-center bg-red-100 text-red-700 px-3 py-2 rounded-full">
                <HiFlag className="mr-2 h-4 w-4" />
                Only 3 spots left this month
              </div>
            </div>
          </motion.div>

          <div className="flex gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-secondary-600 leading-relaxed mb-8">
                  Hi, I'm Tabish Ali! I'm always excited to work on new frontend projects and help businesses
                  succeed online. Whether you need a modern website, interactive web application, CMS development,
                  or just want to discuss your ideas, I'm here to help bring your vision to life.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    variants={itemVariants}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-secondary-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-primary-600 font-medium mb-1">
                          {info.value}
                        </p>
                        <p className="text-secondary-500 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-secondary-900 mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 transition-colors duration-200 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
