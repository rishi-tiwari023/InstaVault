import React from 'react';

const footerStyle = {
  textAlign: 'center',
  padding: '1rem',
  background: 'var(--card-bg)',
  color: 'var(--text)',
  fontSize: 14,
  marginTop: '2rem',
};

const linkStyle = {
  color: 'var(--accent)',
  textDecoration: 'none',
  margin: '0 0.5rem',
  fontWeight: 'bold',
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={{ marginBottom: 4 }}>
        Made with <span style={{ color: 'red', fontSize: 16, verticalAlign: 'middle' }}>♥</span> by <b>Rishi Tiwari</b>
      </div>
      <div>
        <a href="https://github.com/rishi-tiwari023" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
        |
        <a href="https://www.linkedin.com/in/rishi-tiwari023/" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
      </div>
      <div style={{ marginTop: 4, color: '#888' }}>
        &copy; {new Date().getFullYear()} InstaVault. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer; 