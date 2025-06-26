import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ theme, onToggleTheme }) {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: theme === 'dark' ? '#4682A9' : '#91C8E4',
    color: 'var(--text)',
    fontWeight: 'bold',
    fontSize: 18,
  };

  const linkStyle = {
    color: 'var(--text)',
    textDecoration: 'none',
    margin: '0 1rem',
    fontWeight: 'normal',
  };

  const titleStyle = {
    color: 'var(--text)',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: '1px',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={titleStyle}>InstaVault</Link>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/blocked" style={linkStyle}>Blocked</Link>
        <Link to="/add" style={linkStyle}>Add New</Link>
        <button
          onClick={onToggleTheme}
          style={{
            marginLeft: '2rem',
            padding: '0.4rem 1rem',
            borderRadius: 6,
            border: 'none',
            background: 'var(--bg)',
            color: 'var(--accent)',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: 15,
            boxShadow: '0 1px 4px #0001',
          }}
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 