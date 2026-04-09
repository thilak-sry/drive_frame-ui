"use client";

import React, { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export const WhoItsFor = () => {
  const { elementRef, isVisible } = useScrollReveal();
  
  const roles = [
    {
      role: 'PERFORMANCE MARKETER',
      title: 'You run 30–40 campaigns a month.',
      description:
        "You're measured on ROAS and CTR. Every day without the creative is a day you're not testing. DRIVEFRAME closes the gap between strategy and execution.",
    },
    {
      role: 'IN-HOUSE / DEALERSHIP',
      title: 'Brief lands Monday. Goes live Wednesday.',
      description:
        "You don't have a creative agency on retainer. You have a deadline and one hero shot. DRIVEFRAME is your production team.",
    },
    {
      role: 'AGENCY / NETWORK',
      title: 'Managing co-op campaigns across 20 dealers.',
      description:
        'Every dealer needs on-brand creatives in the right format by Friday. DRIVEFRAME lets you run all of them without scaling your team.',
    },
  ];

  return (
    <section id="who-its-for" style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)', padding: '100px 48px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
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
              marginBottom: '24px'
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
              WHO IT'S FOR
            </div>
          </div>
          
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.1,
              marginBottom: '48px',
              color: 'var(--text-primary)'
            }}
          >
            Built for the people running the campaigns.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '56px' }}>
          {roles.map((roleData) => (
            <RoleCard key={roleData.role} {...roleData} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleCard({ role, title, description }: { role: string; title: string; description: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <div
      ref={elementRef}
      style={{
        border: '1px solid var(--border)',
        borderColor: isHovered ? 'var(--accent-border)' : 'var(--border)',
        backgroundColor: isHovered ? 'var(--elevated)' : 'transparent',
        padding: '36px 28px',
        borderRadius: '2px',
        transition: 'all 0.3s',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        opacity: isVisible ? 1 : 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '10px',
          color: 'var(--accent)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          border: '1px solid var(--accent-border)',
          padding: '6px 10px',
          borderRadius: '2px',
          display: 'inline-block',
          marginBottom: '20px',
        }}
      >
        {role}
      </div>
      <h3
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '18px',
          color: 'var(--text-primary)',
          marginBottom: '12px',
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '13px',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
    </div>
  );
}
