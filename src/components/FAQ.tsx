import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiChevronDown, HiQuestionMarkCircle } from 'react-icons/hi';

const FAQ: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does a website cost?",
      answer: "Website costs vary based on complexity and features. My packages range from $1,500 for a landing page to $20,000 for custom web applications. I provide transparent pricing upfront with no hidden fees. After our initial consultation, I'll give you a detailed quote within 24 hours."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Timeline depends on project scope: Landing pages take 1-2 weeks, business websites 2-3 weeks, e-commerce sites 3-4 weeks, and custom applications 4-8 weeks. I provide a detailed timeline during our consultation and stick to agreed deadlines."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! All packages include free support: 30 days for landing pages, 60 days for business websites, 90 days for e-commerce, and 120 days for custom applications. After that, I offer affordable maintenance plans starting at $99/month."
    },
    {
      question: "Will my website work on mobile devices?",
      answer: "Absolutely! All websites I build are mobile-first and fully responsive. They'll look and work perfectly on phones, tablets, and desktops. I test on multiple devices and browsers to ensure consistent performance."
    },
    {
      question: "Can you help with SEO and Google rankings?",
      answer: "Yes! I include basic SEO optimization in all projects: fast loading speeds, proper meta tags, structured data, and mobile optimization. For advanced SEO strategies, I can recommend trusted SEO specialists I work with."
    },
    {
      question: "What if I'm not satisfied with the result?",
      answer: "I offer unlimited revisions during development and a 100% satisfaction guarantee. If you're not completely happy with the final result, I'll continue working until you are, or provide a full refund. Your success is my priority."
    },
    {
      question: "Do I own the website and code?",
      answer: "Yes, you own everything! Once the project is complete and paid for, you receive all source code, design files, and full ownership rights. No ongoing licensing fees or restrictions."
    },
    {
      question: "Can you work with my existing brand/design?",
      answer: "Absolutely! I can work with your existing brand guidelines, colors, fonts, and design elements. If you don't have established branding, I can help create a cohesive visual identity that reflects your business."
    },
    {
      question: "How do we communicate during the project?",
      answer: "I provide regular updates via email, WhatsApp, or your preferred communication method. You'll have direct access to me throughout the project, and I'm available for calls/meetings as needed. I believe in transparent, frequent communication."
    },
    {
      question: "What payment methods do you accept?",
      answer: "I accept bank transfers, PayPal, and major credit cards. Payment is typically split: 50% upfront to start the project and 50% upon completion. For larger projects, we can arrange a custom payment schedule."
    },
    {
      question: "Can you integrate with third-party services?",
      answer: "Yes! I can integrate with payment processors (Stripe, PayPal), email marketing tools (Mailchimp, ConvertKit), CRM systems, analytics tools, social media platforms, and most other business tools you use."
    },
    {
      question: "Do you provide training on how to update the website?",
      answer: "Yes! I provide comprehensive training on how to update content, add new pages, and manage your website. This includes video tutorials, written documentation, and a live training session via screen share."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
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

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HiQuestionMarkCircle className="mr-2 h-4 w-4" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Got <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are answers to the most common questions I receive from clients. Don't see your question? Feel free to reach out!
            </p>
          </motion.div>

          {/* FAQ Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <HiChevronDown className="h-5 w-5 text-gray-500" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Still Have Questions CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                I'm here to help! Schedule a free 30-minute consultation where we can discuss your project in detail and I'll answer any questions you have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Free Consultation
                </motion.button>
                
                <motion.a
                  href="mailto:tabisoomro12@gmail.com"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Email Me Directly
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
