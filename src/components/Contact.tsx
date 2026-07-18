import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMail, HiLocationMarker, HiPaperAirplane, HiClipboard, HiCheck } from 'react-icons/hi';
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copied ${label} to clipboard!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const contactInfo = [
    {
      id: 'email',
      icon: HiMail,
      title: 'Email Address',
      value: 'tabisoomro12@gmail.com',
      link: 'mailto:tabisoomro12@gmail.com',
      copyValue: 'tabisoomro12@gmail.com',
      label: 'Email'
    },
    {
      id: 'phone',
      icon: SiWhatsapp,
      title: 'Phone / WhatsApp',
      value: '+92 313 3196759',
      link: 'https://wa.me/923133196759',
      copyValue: '+923133196759',
      label: 'WhatsApp Number'
    },
    {
      id: 'location',
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Dadu, Sindh, Pakistan',
      link: '#',
      copyValue: 'Dadu, Sindh, Pakistan',
      label: 'Location'
    }
  ];

  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      icon: SiGithub,
      url: 'https://github.com/Tabish07-dev',
      copyValue: 'https://github.com/Tabish07-dev',
      color: 'text-slate-900 dark:text-white border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900',
      label: 'GitHub URL'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: SiLinkedin,
      url: 'https://linkedin.com',
      copyValue: 'https://linkedin.com',
      color: 'text-blue-600 dark:text-blue-400 border-blue-100 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/20',
      label: 'LinkedIn URL'
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      icon: HiPaperAirplane,
      url: window.location.origin,
      copyValue: window.location.origin,
      color: 'text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/20',
      label: 'Portfolio URL'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-4 text-base sm:text-lg"
          >
            Have an open position or want to collaborate on a React / TypeScript project? Feel free to drop a message!
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Cards Info (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick stats channels */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className="glass-card p-5 flex items-start justify-between gap-4 hover:shadow-lg hover:border-slate-350 dark:hover:border-slate-750 transition-all duration-300 group"
                >
                  <a href={info.link} className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider">
                        {info.title}
                      </h4>
                      <p className="text-sm font-semibold text-slate-950 dark:text-white mt-0.5 break-all">
                        {info.value}
                      </p>
                    </div>
                  </a>
                  
                  {/* Clipboard Action */}
                  <button
                    onClick={() => handleCopy(info.copyValue, info.label)}
                    className="p-2 text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all relative"
                    title={`Copy ${info.label}`}
                  >
                    <HiClipboard className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Social Connect & Clipboard */}
            <div className="glass-card p-6">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                Social Profiles &amp; Web Links
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <div
                    key={social.id}
                    className={`flex items-center justify-between border p-3 rounded-xl transition-all duration-300 ${social.color}`}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-bold text-xs flex-1"
                    >
                      <social.icon className="h-5 w-5" />
                      <span>{social.name} URL</span>
                    </a>
                    
                    {/* Clipboard action */}
                    <button
                      onClick={() => handleCopy(social.copyValue, social.label)}
                      className="p-1.5 text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-900/50 rounded-lg transition-all relative"
                      title={`Copy ${social.label}`}
                    >
                      <HiClipboard className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-950 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-950 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-950 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Opportunity for Remote Role / Project inquiry"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-950 dark:text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:bg-slate-300 dark:disabled:bg-slate-800 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <HiPaperAirplane className="h-4 w-4 rotate-45" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Success Notification */}
              {isSent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs font-bold text-emerald-600 dark:text-emerald-400"
                >
                  ✓ Thank you! Your message has been sent successfully.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating Success Toast (Stripe Style) */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 border border-slate-800 dark:border-slate-200"
          >
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs shrink-0 font-bold">
              ✓
            </div>
            <span className="text-xs font-bold whitespace-nowrap">
              {toastMessage}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
