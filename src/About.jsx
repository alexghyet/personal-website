function About() {
  return (
    <section id="about" style={{
      padding: '100px 0px',
      maxWidth: '1000px',
      margin: '0 auto',
    }}>

      <p style={{ color: '#00d0ff', marginBottom: '8px', fontWeight: '700' }}>About Me</p>
      <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>who I am</h2>

      <p style={{ color: '#ffffff', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
        Hello! I'm Alejandro. I'm studying Computer Science and Bioinformatics at the California State University, Los Angeles.
        The main reason for building this website is to showcase projects I've worked on, my skills, and 
        just things I'm interested in! I would like to eventually start a blog so I'll leave that 
        tab up there for whoevers intersted in actually reading what I have to say :D. 
        I'm interested in combining computer science and biology to be able to contribute 
        to meaningful work that could potentially help people. 
        
      </p>

      <p style={{ color: '#00d0ff', marginBottom: '16px', fontSize: '18px', fontWeight: '700' }}>Skills & Tools</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

  <div>
    <p style={{ color: '#00d0ff', fontSize: '15px', marginBottom: '10px', fontWeight: '600' }}>LANGUAGES</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {['Python', 'Java', 'SQL', 'React'].map(skill => (
        <span key={skill} style={{ border: '1px solid #00d0ff', color: '#00d0ff', padding: '6px 16px', fontSize: '14px' }}>{skill}</span>
      ))}
    </div>
  </div>

  <div>
    <p style={{ color: '#00d0ff', fontSize: '15px', marginBottom: '10px', fontWeight: '600' }}>LIBRARIES</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'UMAP'].map(skill => (
        <span key={skill} style={{ border: '1px solid #00d0ff', color: '#00d0ff', padding: '6px 16px', fontSize: '14px' }}>{skill}</span>
      ))}
    </div>
  </div>

  <div>
    <p style={{ color: '#00d0ff', fontSize: '15px', marginBottom: '10px', fontWeight: '600' }}>TOOLS & DATABASES</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {['Git', 'GitHub', 'MySQL'].map(skill => (
        <span key={skill} style={{ border: '1px solid #00d0ff', color: '#00d0ff', padding: '6px 16px', fontSize: '14px' }}>{skill}</span>
      ))}
    </div>
  </div>

</div>

    </section>
  )
}

export default About