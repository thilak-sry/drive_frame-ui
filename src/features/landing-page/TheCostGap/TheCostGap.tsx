"use client";

import React, { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export const TheCostGap = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: '#0A0A0E', padding: '100px 48px' }}>
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
              THE COST GAP
            </div>
          </div>

          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '12px',
            }}
          >
            <div>Premium brands pay agencies.</div>
            <div style={{ color: 'var(--accent)' }}>You get the same output. At 1/10th the cost.</div>
          </h2>

          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              color: 'var(--text-secondary)',
              marginBottom: '48px',
            }}
          >
            No shoots. No briefs. No revision cycles.
          </p>
        </div>

        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
            }}
          >
            <CostColumn
              label="NATIONAL OEM"
              title="What premium brands run"
              description="Agency shoots. 6-week lead. ₹10L+ production."
              pillColor="rgba(0, 229, 160, 0.1)"
              pillTextColor="#00E5A0"
              imgBorder="rgba(255, 255, 255, 0.08)"
              imgBg="#1a1a2e"
              caption="Cinematic. Multi-format. Polished."
              captionColor="rgba(255, 255, 255, 0.25)"
              hasBorderRight
            />
            <CostColumn
              label="YOUR REALITY NOW"
              title="What most dealers ship"
              description="Generic copy. One format. Missed deadlines."
              pillColor="rgba(255, 80, 80, 0.1)"
              pillTextColor="#FF6060"
              imgBorder="rgba(255, 80, 80, 0.2)"
              imgBg="#0d0d0d"
              caption="Blurry. Off-brand. Wrong ratio."
              captionColor="rgba(255, 80, 80, 0.5)"
              isDashed
              isDegraded
              hasBorderRight
            />
            <CostColumn
              label="✦ DRIVEFRAME"
              title="What you get. One session."
              description="Every format. On-brand copy. Campaign-ready."
              pillColor="#00E5A0"
              pillTextColor="#0A0A0E"
              imgBorder="rgba(0, 229, 160, 0.25)"
              imgBg="#002a1f"
              caption="Generated in seconds. Zero revision."
              captionColor="rgba(0, 229, 160, 0.6)"
              isPremium
            />
          </div>

          <div
            style={{
              backgroundColor: '#111111',
              borderTop: '1px solid var(--border)',
              padding: '24px 32px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                color: 'var(--text-secondary)',
              }}
            >
              What agencies charge <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹8–15L</span> to produce —
              DRIVEFRAME does it in{' '}
              <span style={{ fontWeight: 700, color: 'var(--accent)' }}>one session.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CostColumn({
  label,
  title,
  description,
  pillColor,
  pillTextColor,
  imgBorder,
  imgBg,
  caption,
  captionColor,
  hasBorderRight = false,
  isDashed = false,
  isDegraded = false,
  isPremium = false,
}: any) {
  return (
    <div
      style={{
        padding: '28px 24px',
        borderRight: hasBorderRight ? '1px solid var(--border)' : 'none',
        backgroundColor: isPremium ? 'rgba(0, 212, 160, 0.03)' : 'transparent',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          fontFamily: 'DM Mono, monospace',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          backgroundColor: pillColor,
          color: pillTextColor,
          padding: '4px 10px',
          borderRadius: '2px',
          marginBottom: '16px',
          fontWeight: isPremium ? 700 : 500,
        }}
      >
        {label}
      </div>

      <h3
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '15px',
          color: 'var(--text-primary)',
          fontWeight: 700,
          marginBottom: '6px',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '12px',
          color: 'var(--text-muted)',
          marginBottom: '20px',
        }}
      >
        {description}
      </p>

      <div
        style={{
          height: '200px',
          borderRadius: '4px',
          border: `${isDashed ? '1px dashed' : '1px solid'} ${imgBorder}`,
          backgroundColor: imgBg,
          marginBottom: '8px',
          filter: isDegraded ? 'saturate(0.3) blur(1px)' : 'none',
        }}
      />

      <div
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '10px',
          textTransform: 'uppercase',
          color: captionColor,
          textAlign: 'center',
          letterSpacing: '0.1em',
        }}
      >
        {caption}
      </div>
    </div>
  );
}
