import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import viteLogo from '/vite.svg'
// import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddNew from './pages/AddNew'
import Blocked from './pages/Blocked'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [blockedUsers, setBlockedUsers] = useState(() => {
    const saved = localStorage.getItem('blockedUsers');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('blockedUsers', JSON.stringify(blockedUsers));
  }, [blockedUsers]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleAddBlocked = (profile) => {
    if (blockedUsers.some(u => u.url === profile.url)) {
      return false;
    }
    setBlockedUsers((prev) => [...prev, profile]);
    return true;
  };

  const handleRemoveBlocked = (url) => {
    setBlockedUsers((prev) => prev.filter(user => user.url !== url));
  };

  return (
    <Router>
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                width: '100%',
                margin: '2rem 0',
                fontFamily: 'sans-serif',
                background: 'var(--card-bg)',
                color: 'var(--text)',
                borderRadius: 0,
                boxShadow: 'none',
                padding: '0',
                boxSizing: 'border-box',
              }}
            >
              <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', margin: '2rem 0 1.5rem 0', fontWeight: 700, textAlign: 'left' }}>InstaVault</h1>
              <section style={{ maxWidth: 700, margin: '0 auto 2rem auto', padding: '1.5rem 2vw', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, boxShadow: 'none', color: 'var(--text)', textAlign: 'left' }}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--accent)', textAlign: 'left' }}>About InstaVault</h2>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>InstaVault</strong> is your personal Instagram account manager. It helps you keep track of Instagram accounts, especially those you've blocked, so you don't accidentally follow them again from any of your other accounts.
                </p>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Features:</strong>
                  <ul style={{ margin: '0.5rem 0 0 1.2rem', padding: 0, listStyle: 'disc' }}>
                    <li>Add Instagram users to your personal block list by profile URL</li>
                    <li>Automatically fetches and displays the user's name and profile picture</li>
                    <li>See a list of all blocked users with their profile, name, and link</li>
                    <li>Remove users from your block list with one click</li>
                    <li>Shows the total count of blocked users</li>
                    <li>Prevents duplicate entries and invalid users</li>
                    <li>Supports dark and light modes</li>
                    <li>All data is stored locally in your browser (private to you)</li>
                  </ul>
                </div>
                <p style={{ marginBottom: 0 }}>
                  <strong>Motivation:</strong> I want to store data for the users whom I have blocked on Instagram so that I don't follow them in the future from any of my other accounts.
                </p>
              </section>
            </div>
          }
        />
        <Route path="/add" element={<AddNew onAdd={handleAddBlocked} />} />
        <Route path="/blocked" element={<Blocked blockedUsers={blockedUsers} onRemove={handleRemoveBlocked} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
