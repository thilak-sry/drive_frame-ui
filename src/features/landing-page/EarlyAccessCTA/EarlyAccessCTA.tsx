"use client";

import React, { useState } from 'react';

interface EarlyAccessCTAProps {
  onSubmit: (email: string) => void;
}

export const EarlyAccessCTA = ({ onSubmit }: EarlyAccessCTAProps) => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
      }, 3000);
    }
  };

  // Pre-shuffled array of indices 1 to 13 to ensure randomness without hydration mismatch
  const shuffledIndices = [7, 2, 11, 4, 13, 1, 9, 5, 8, 3, 12, 10, 6];
  const adTemplates = shuffledIndices.map((i) => ({
    image: `/Images/${i}.png`
  }));

  return (
    <section
      id="cta"
      style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: '#000000',
        padding: '100px 0 120px', // Removed horizontal padding for edge-to-edge carousel
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Infinite Scroll Carousel */}
      <div 
        style={{ 
          marginBottom: '64px',
          width: '100%',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '16px',
            width: 'max-content',
            animation: 'scroll 60s linear infinite',
          }}
        >
          {/* First set of templates */}
          {adTemplates.map((template, index) => (
            <div key={index} style={{ width: '220px', flexShrink: 0 }}>
              <TemplateCard {...template} index={index} />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {adTemplates.map((template, index) => (
            <div key={`dup-${index}`} style={{ width: '220px', flexShrink: 0 }}>
              <TemplateCard {...template} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, padding: '0 48px' }}>

        <h2
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(40px, 5.5vw, 68px)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '48px',
            color: 'var(--text-primary)',
            maxWidth: '900px',
            margin: '0 auto 48px',
          }}
        >
          The unfair advantage <br />
          for automotive marketing
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '100px',
            padding: '6px 6px 6px 24px',
            maxWidth: '480px',
            width: '100%',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSuccess}
            required
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              padding: '12px 0',
              color: '#000000',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              outline: 'none',
              opacity: isSuccess ? 0.3 : 1,
            }}
          />
          <button
            type="submit"
            disabled={isSuccess}
            style={{
              backgroundColor: isSuccess ? 'var(--accent)' : '#000000',
              color: isSuccess ? '#09090E' : '#FFFFFF',
              border: 'none',
              padding: '14px 32px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              cursor: isSuccess ? 'default' : 'pointer',
              whiteSpace: 'nowrap',
              borderRadius: '100px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isSuccess ? 'scale(1.02)' : 'scale(1)',
              boxShadow: isSuccess ? '0 0 20px rgba(0, 212, 160, 0.2)' : 'none',
            }}
            onMouseEnter={(e) => {
              if (!isSuccess) {
                e.currentTarget.style.backgroundColor = '#1a1a1a';
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSuccess) {
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            {isSuccess ? 'Joined!' : 'Join Waitlist'}
          </button>
        </form>
      </div>

      {/* Background Decor */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '40%',
          background: 'radial-gradient(ellipse at center, rgba(0, 212, 160, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 8px)); }
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover, 
          input:-webkit-autofill:focus, 
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
            -webkit-text-fill-color: #000000 !important;
            transition: background-color 5000s ease-in-out 0s;
          }
        `}
      </style>
    </section>
  );
};

function TemplateCard({ image, index }: { image: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.4)' : '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: isHovered ? 2 : 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={`Ad template ${index + 1}`}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isHovered 
            ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)' 
            : 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)',
          transition: 'all 0.3s',
        }}
      />
    </div>
  );
}
