function Hero() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '100px 20px',
    }}>

      <h1 style={{ fontSize: '64px', marginBottom: '16px' }}>
        Alejandro Lopez
      </h1>

      <div style={{ display: 'flex', gap: '16px',fontWeight: '700' }}>
        <a href="https://github.com/alexghyet" target="_blank" rel="noopener noreferrer" style={{
          padding: '12px 28px',
          border: '1px solid #00d0ff',
          color: '#00d0ff',
          textDecoration: 'none',
          fontSize: '14px',
        }}>
          GitHub
        </a>
        <a href="https://linkedin.com/in/alejandro-lopez-csula" target="_blank" rel="noopener noreferrer" style={{
          padding: '12px 28px',
          border: '1px solid #00d0ff',
          color:  '#00d0ff',
          textDecoration: 'none',
          fontSize: '14px',
        }}>
          LinkedIn
        </a>
      </div>

    </section>
  )
}

export default Hero