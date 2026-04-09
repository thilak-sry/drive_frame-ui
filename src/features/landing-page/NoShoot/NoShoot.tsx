"use client";

import React from 'react';

export const NoShoot = () => {
  const beforeCarImage = '/Images/Before.png';
  const afterCarImage = '/Images/After_1.png';

  return (
    <section
      id="no-shoot"
      style={{
        backgroundColor: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '80px 48px',
      }}
    >
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              color: 'var(--accent)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              fontWeight: 500,
            }}
          >
            No Shoot? No Problem.
          </div>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1.1,
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            <span style={{ color: 'var(--text-primary)' }}>Don't have a campaign-quality image? </span>
            <span style={{ color: 'var(--accent)' }}>We build it for you.</span>
          </h2>
        </div>

        <div
          style={{
            border: '1px solid var(--border)',
            display: 'grid',
            gridTemplateColumns: '1fr 60px 1fr',
            maxWidth: '1400px',
            margin: '0 auto',
            overflow: 'hidden'
          }}
        >
          {/* Left box - raw image */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#0a0a0a',
            }}
          >
            <img
              src={beforeCarImage}
              alt="Raw car image"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px 24px',
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%)',
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '11px',
                  color: 'rgba(238, 238, 240, 0.8)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                RAW CAR IMAGE
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(238, 238, 240, 0.6)' }}>Any angle. Any background.</div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              backgroundColor: 'var(--elevated)',
              borderLeft: '1px solid var(--border)',
              borderRight: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '10px',
                color: 'var(--accent)',
                letterSpacing: '0.15em',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                opacity: 0.8
              }}
            >
              DRIVEFRAME ENGINE
            </div>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '24px',
                height: '24px',
                border: '2px solid var(--accent)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--bg)',
                zIndex: 2
              }}
            >
              <div
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: '6px solid var(--accent)',
                  borderTop: '4px solid transparent',
                  borderBottom: '4px solid transparent',
                  marginLeft: '2px',
                }}
              />
            </div>
          </div>

          {/* Right box - campaign asset */}
          <div
            style={{
              position: 'relative',
              borderLeft: '1px solid var(--accent)',
              backgroundColor: '#0a0a0a',
            }}
          >
            <img
              src={afterCarImage}
              alt="Campaign asset"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px 24px',
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%)',
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '11px',
                  color: 'var(--accent)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                CAMPAIGN ASSET
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(238, 238, 240, 0.9)' }}>
                Cinematic. Brand-ready. Ad-native.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
