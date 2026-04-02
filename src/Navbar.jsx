function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      borderBottom: '4px solid #00d0ff',
      position: 'sticky',
      top: 0,
      backgroundColor: '#0a0a0a',
    }}>

      <span style={{ color: '#00d0ff', fontSize: '20px', fontWeight: '700' }}>
        Hey there friend! 
      </span>

      <div style={{ display: 'flex', gap: '30px' }}>
        <a href="#about" style={{ color: '#00d0ff', textDecoration: 'none' }}>About</a>
        <a href="#projects" style={{ color: '#00d0ff', textDecoration: 'none' }}>Projects</a>
        <a href="#blog" style={{ color: '#00d0ff', textDecoration: 'none' }}>Blog</a>
        <a href="#contact" style={{ color: '#00d0ff', textDecoration: 'none' }}>Contact</a>
      </div>

    </nav>
  )
}

export default Navbar