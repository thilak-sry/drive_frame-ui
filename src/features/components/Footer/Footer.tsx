import React from 'react';

export const Footer = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '32px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '13px',
          color: 'var(--accent)',
          opacity: 0.6,
          fontWeight: 500,
          letterSpacing: '0.02em',
        }}
      >
        DRIVEFRAME
      </div>
      <div
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '10px',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
        }}
      >
        © 2026 DRIVEFRAME. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};
