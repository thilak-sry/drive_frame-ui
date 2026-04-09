"use client";

import React, { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export const IntelligentReformat = () => {
  const [selectedFormat, setSelectedFormat] = useState<'9:16' | '4:5' | '1:1' | '16:9'>('1:1');
  const [mounted, setMounted] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    setMounted(true);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { elementRef, isVisible } = useScrollReveal();

  const isMobile = mounted && windowWidth < 600;
  const isTablet = mounted && windowWidth < 900;
  const multiplier = isMobile ? 1.0 : (isTablet ? 1.2 : 1.5);

  const formatDimensions = {
    '9:16': { width: 120, height: 213 },
    '4:5': { width: 148, height: 185 },
    '1:1': { width: 180, height: 180 },
    '16:9': { width: 260, height: 146 },
  };

  const statusMessages = {
    '9:16': 'LAYOUT RECOMPOSED. COPY ADJUSTED. SAFE ZONES RESPECTED.',
    '4:5': 'LAYOUT RECOMPOSED. COPY ADJUSTED. SAFE ZONES RESPECTED.',
    '1:1': 'LAYOUT RECOMPOSED. COPY ADJUSTED. SAFE ZONES RESPECTED.',
    '16:9': 'LAYOUT RECOMPOSED. COPY ADJUSTED. SAFE ZONES RESPECTED.',
  };
  const formatImages = {
    '9:16': '/Images/9_16.png',
    '4:5': '/Images/4_5.png',
    '1:1': '/Images/1_1.png',
    '16:9': '/Images/16_9.png',
  };

  return (
    <section 
      className="reformat-section"
      style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)', padding: '100px 48px' }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div 
          className="reformat-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
        >
          <div
            ref={elementRef}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px'
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  color: 'var(--accent)',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                }}
              >
                INTELLIGENT REFORMAT
              </div>
            </div>
            
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1.1,
              }}
            >
              <div style={{ color: 'var(--text-primary)' }}>You already have</div>
              <div style={{ color: 'var(--accent)' }}>the asset.</div>
              <div style={{ color: 'var(--text-primary)' }}>We handle every format.</div>
            </h2>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '400px',
                marginTop: '20px',
              }}
            >
              DRIVEFRAME doesn't crop. It recomposes. The layout, hierarchy, and copy adapt intelligently to every
              format. One session. Done.
            </p>
          </div>

          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
              {(['9:16', '4:5', '1:1', '16:9'] as const).map((format) => (
                <button
                  key={format}
                  onClick={() => setSelectedFormat(format)}
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '11px',
                    padding: '8px 16px',
                    border: `1px solid ${selectedFormat === format ? 'var(--accent)' : 'var(--border)'}`,
                    backgroundColor: selectedFormat === format ? 'var(--accent-dim)' : 'transparent',
                    color: selectedFormat === format ? 'var(--accent)' : 'var(--text-secondary)',
                    borderRadius: '2px',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedFormat !== format) {
                      e.currentTarget.style.borderColor = 'var(--border-hover)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedFormat !== format) {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }
                  }}
                >
                  {format}
                </button>
              ))}
            </div>

            <div
              style={{
                border: '1px solid var(--border)',
                backgroundColor: 'var(--surface)',
                minHeight: '420px', // Increased height to comfortably fit 9:16
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
              }}
            >
              <div
                className="reformat-preview-frame"
                style={{
                  width: `${formatDimensions[selectedFormat].width * multiplier}px`,
                  height: `${formatDimensions[selectedFormat].height * multiplier}px`,
                  border: '1px solid rgba(0, 212, 160, 0.3)',
                  backgroundColor: 'rgba(0, 212, 160, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}
              >
                <img
                  src={formatImages[selectedFormat]}
                  alt={`Ad format ${selectedFormat}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            <div
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '10px',
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>{selectedFormat} → </span>
              {statusMessages[selectedFormat]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
