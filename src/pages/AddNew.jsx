import React, { useState } from 'react';

async function fetchInstagramProfile(url) {
  // Extract username from URL
  const match = url.match(/instagram\.com\/(.+?)(\/|$)/);
  if (!match) return null;
  const username = match[1].replace(/\/$/, '');

  const fetchUrl = `http://localhost:5000/api/instagram/${username}`;
  console.log('Fetching:', fetchUrl);
  const response = await fetch(fetchUrl);
  console.log('Response status:', response.status);
  if (!response.ok) return { error: 'invalid' };
  const data = await response.json();
  console.log('Fetched data:', data);
  if (data.error) return { error: 'invalid' };
  return {
    name: data.name || username,
    profilePic: data.profilePic,
    url: url,
  };
}

function AddNew({ onAdd }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [exists, setExists] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setExists(false);
    setInvalid(false);
    const regex = /^(https?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9_.]+\/?$/;
    if (!regex.test(url.trim())) {
      setError('Please enter a valid Instagram profile URL.');
      return;
    }
    setError('');
    setLoading(true);
    const profile = await fetchInstagramProfile(url.trim());
    setLoading(false);
    if (!profile || profile.error === 'invalid') {
      setInvalid(true);
      return;
    }
    // onAdd should return false if user exists
    const added = onAdd(profile);
    if (added === false) {
      setExists(true);
      return;
    }
    setUrl('');
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', padding: '2rem', background: 'var(--card-bg)', borderRadius: 8, boxShadow: 'none', color: 'var(--text)', border: '1px solid var(--border)' }}>
      <h2 style={{ textAlign: 'center', color: 'var(--accent)' }}>Add New Blocked User</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Enter Instagram profile URL"
          value={url}
          onChange={e => { setUrl(e.target.value); setExists(false); setInvalid(false); }}
          style={{ padding: '0.7rem', borderRadius: 6, border: '1px solid #ccc', fontSize: 16 }}
        />
        {error && <div style={{ color: 'red', fontSize: 14 }}>{error}</div>}
        {exists && <div style={{ color: 'orange', fontSize: 14 }}>User exists</div>}
        {invalid && <div style={{ color: 'red', fontSize: 14 }}>Invalid user or user does not exist on Instagram</div>}
        <button type="submit" style={{ padding: '0.7rem', borderRadius: 6, border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 'bold', fontSize: 16, cursor: 'pointer' }} disabled={loading}>
          {loading ? 'Adding...' : 'Add to Blocked List'}
        </button>
      </form>
    </div>
  );
}

export default AddNew; 