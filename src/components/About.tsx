
// Simple About section, no animation or fancy styles


function About() {
  return (
    <section id="about" style={{ padding: '60px 0', background: '#fff' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 800, margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
        <img
          src="/images/tabi07.png.jpg"
          alt="Tabish Ali profile"
          style={{ width: 180, height: 180, borderRadius: '50%', objectFit: 'cover', marginBottom: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        />
        <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 24, color: '#222' }}>About Me</h2>
        <p style={{ fontSize: 18, color: '#444', marginBottom: 0 }}>
          Hi! I'm Tabish Ali. I'm a beginner web developer who loves learning and building simple, user-friendly websites. I enjoy working with React and JavaScript, and I'm always looking to improve my skills. If you want to connect or need a basic website, feel free to reach out!
        </p>
      </div>
    </section>
  );
}

export default About;


