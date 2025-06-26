import React from 'react';

function Blocked({ blockedUsers, onRemove }) {
  return (
    <div style={{ maxWidth: 1000, margin: '2rem auto', padding: '2rem', background: 'var(--card-bg)', borderRadius: 8, boxShadow: 'none', color: 'var(--text)', border: '1px solid var(--border)' }}>
      <h2 style={{ textAlign: 'center', color: 'var(--accent)' }}>
        Blocked Users
        <span style={{ color: '#888', fontWeight: 500, fontSize: 18, marginLeft: 16 }}>
          ({blockedUsers.length})
        </span>
      </h2>
      {blockedUsers.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#888', marginTop: '2rem' }}>No blocked users yet.</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {blockedUsers.map((user, idx) => (
            <li key={user.url + idx} style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', margin: '1.5rem 0', padding: '1.5rem', background: 'var(--bg)', borderRadius: 6 }}>
              <img src={user.profilePic || 'https://via.placeholder.com/64'} alt={user.name || user.url} style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent)' }} />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: 18, wordBreak: 'break-word' }}><span style={{ color: '#888', fontWeight: 500 }}>Name:</span> {user.name || user.url}</div>
                <div style={{ marginTop: 8 }}>
                  <span style={{ color: '#888', fontWeight: 500 }}>URL:</span> <a href={user.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: 16, wordBreak: 'break-all' }}>{user.url}</a>
                </div>
              </div>
              <button
                onClick={() => onRemove(user.url)}
                style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '0.5rem 1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: 15,
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Blocked; 