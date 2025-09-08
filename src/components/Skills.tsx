
// Simple Skills section, no animation or icons, just text and lists
function Skills() {
  const categories = [
    {
      title: 'Frontend Technologies',
      description: 'Modern frontend technologies for building amazing user interfaces',
      skills: [
        { name: 'HTML5', level: 95, description: 'Semantic markup and modern HTML5 features' },
        { name: 'CSS3', level: 92, description: 'Advanced styling, animations, and responsive design' },
        { name: 'JavaScript', level: 88, description: 'ES6+, DOM manipulation, and modern JS features' },
        { name: 'Tailwind CSS', level: 90, description: 'Utility-first CSS framework and custom designs' },
        { name: 'Bootstrap', level: 80, description: 'Popular CSS framework for responsive design' },
      ]
    },
    {
      title: 'Backend Technologies',
      description: 'Robust backend frameworks and databases for scalable applications',
      skills: [
        { name: 'React.js', level: 80, description: 'Server-side rendering and full-stack integration' },
        { name: 'MongoDB', level: 75, description: 'NoSQL database for scalable applications' },
        { name: 'Express.js', level: 78, description: 'Backend framework for Node.js' },
        { name: 'Node.js', level: 80, description: 'JavaScript runtime for backend development' },
      ]
    },
    {
      title: 'CMS & Tools',
      description: 'Content management systems and development tools',
      skills: [
        { name: 'WordPress CMS', level: 85, description: 'Custom themes, plugins, and content management' },
        { name: 'Git & GitHub', level: 80, description: 'Version control and collaborative development' },
      ]
    }
  ];

  return (
    <section id="skills" style={{ padding: '60px 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 16px' }}>
        <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 24, textAlign: 'center', color: '#222' }}>My Skills</h2>
        <p style={{ fontSize: 18, color: '#444', textAlign: 'center', marginBottom: 40 }}>
          A comprehensive toolkit of modern web technologies and frameworks that I use to bring ideas to life.
        </p>
        <div style={{ display: 'grid', gap: 40 }}>
          {categories.map(category => (
            <div key={category.title} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 24 }}>
              <h3 style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#2563eb' }}>{category.title}</h3>
              <p style={{ color: '#555', marginBottom: 18 }}>{category.description}</p>
              <ul style={{ paddingLeft: 18, color: '#444', fontSize: 15 }}>
                {category.skills.map(skill => (
                  <li key={skill.name} style={{ marginBottom: 10 }}>
                    <span style={{ fontWeight: 500 }}>{skill.name}</span> — {skill.description} <span style={{ color: '#6366f1', fontWeight: 600 }}>({skill.level}%)</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ fontSize: 17, color: '#444', marginBottom: 16 }}>Let's discuss how these skills can help bring your project to life.</p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ background: '#2563eb', color: '#fff', padding: '12px 32px', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer', fontSize: 16 }}
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skills;
