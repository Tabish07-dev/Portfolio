
// Simple Services section, no animation or icons, just text and lists
function Services() {
  const services = [
    {
      title: 'React.js Development',
      description: 'Building modern, interactive web applications using React.js with clean, maintainable code.',
      features: ['React.js Applications', 'Component-based Architecture', 'State Management', 'Modern JavaScript (ES6+)']
    },
    {
      title: 'Responsive Design',
      description: 'Creating websites that look perfect and work flawlessly on all devices and screen sizes.',
      features: ['Mobile-First Design', 'Tablet Optimization', 'Desktop Enhancement', 'Cross-browser Compatibility']
    },
    {
      title: 'WordPress CMS',
      description: 'Custom WordPress websites with easy-to-use content management for non-technical users.',
      features: ['Custom WordPress Themes', 'Content Management', 'Plugin Integration', 'Admin Training']
    },
    {
      title: 'Frontend Development',
      description: 'Complete frontend solutions using HTML5, CSS3, JavaScript, and modern frameworks.',
      features: ['HTML5 & CSS3', 'JavaScript Development', 'Tailwind CSS', 'Interactive UI Components']
    },
    {
      title: 'Website Optimization',
      description: 'Improving website speed, performance, and user experience for better conversions.',
      features: ['Speed Optimization', 'SEO-Friendly Code', 'Performance Tuning', 'Loading Speed Enhancement']
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing website support, updates, and maintenance to keep your site running smoothly.',
      features: ['Regular Updates', 'Bug Fixes', 'Content Updates', 'Technical Support']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements, goals, and target audience to create the perfect strategy.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and designs that align with your brand and user experience goals.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your website with clean code, testing across devices, and ensuring quality.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Deploying your website and providing ongoing support and maintenance services.'
    }
  ];

  return (
    <section id="services" style={{ padding: '60px 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 16px' }}>
        <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center', color: '#222' }}>My Services</h2>
        <p style={{ fontSize: 18, color: '#444', textAlign: 'center', marginBottom: 40 }}>
          Comprehensive web development services to help your business succeed online with modern, professional solutions.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 48 }}>
          {services.map(service => (
            <div key={service.title} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12, color: '#2563eb' }}>{service.title}</h3>
              <p style={{ color: '#555', marginBottom: 16 }}>{service.description}</p>
              <ul style={{ paddingLeft: 18, color: '#444', fontSize: 15 }}>
                {service.features.map(feature => (
                  <li key={feature} style={{ marginBottom: 6 }}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h3 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#222', textAlign: 'center' }}>My Process</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginBottom: 32 }}>
          {process.map(step => (
            <div key={step.step} style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.03)', padding: 18 }}>
              <div style={{ fontWeight: 'bold', color: '#6366f1', marginBottom: 8 }}>Step {step.step}</div>
              <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 6 }}>{step.title}</div>
              <div style={{ color: '#555', fontSize: 15 }}>{step.description}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <p style={{ fontSize: 17, color: '#444', marginBottom: 16 }}>Ready to start your project? Let's discuss your requirements and create a custom solution that fits your needs and budget.</p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ background: '#2563eb', color: '#fff', padding: '12px 32px', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer', fontSize: 16 }}
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
