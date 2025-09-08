import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const CorporateWebsiteDemo: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">MyCompany</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-blue-600 text-white text-center py-24 px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Build Your Digital Presence
        </motion.h2>
        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">
          We help businesses grow with modern websites, scalable apps, and
          stunning user experiences.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "Responsive and scalable websites tailored for your business.",
            },
            {
              title: "Mobile Apps",
              desc: "Cross-platform apps with smooth performance and UI.",
            },
            {
              title: "UI/UX Design",
              desc: "Modern designs that engage users and drive conversions.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We are a team of passionate developers, designers, and strategists
            committed to creating impactful digital solutions. With years of
            experience in multiple industries, we deliver excellence every time.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Testimonials</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Sarah Johnson",
              feedback:
                "MyCompany transformed our outdated site into a modern, high-performing platform.",
            },
            {
              name: "Michael Lee",
              feedback:
                "The app they built for us exceeded expectations — fast, clean, and reliable.",
            },
          ].map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <p className="text-gray-700 mb-4">“{testi.feedback}”</p>
              <h5 className="font-semibold text-blue-600">{testi.name}</h5>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-600 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <FaPhoneAlt className="mx-auto text-3xl mb-2" />
              <p>+92 300 1234567</p>
            </div>
            <div>
              <FaEnvelope className="mx-auto text-3xl mb-2" />
              <p>info@mycompany.com</p>
            </div>
            <div>
              <FaMapMarkerAlt className="mx-auto text-3xl mb-2" />
              <p>Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>
          © {new Date().getFullYear()} MyCompany. All rights reserved. | Built
          with ❤️ using React
        </p>
      </footer>
    </div>
  );
};

export default CorporateWebsiteDemo;
