"use client";

import React from 'react';

export const NavBar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '24px 48px',
        backgroundColor: 'rgba(9, 9, 14, 0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(238, 238, 240, 0.05)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        DRIVEFRAME
      </div>
      
      <div style={{ display: 'flex', gap: '32px' }}>
        <button
          onClick={() => scrollToSection('workflow')}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            color: 'rgba(238, 238, 240, 0.6)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(238, 238, 240, 0.6)')}
        >
          How it works
        </button>
        <button
          onClick={() => scrollToSection('who-its-for')}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            color: 'rgba(238, 238, 240, 0.6)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(238, 238, 240, 0.6)')}
        >
          Who it's for
        </button>
        <button
          onClick={() => scrollToSection('cta')}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            color: 'rgba(238, 238, 240, 0.6)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(238, 238, 240, 0.6)')}
        >
          Early access
        </button>
      </div>

      <div style={{ width: '100px' }} /> {/* Spacer to balance the logo */}
    </nav>
  );
};
