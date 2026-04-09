"use client";

import React, { useState } from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer/Footer';
import { HeroSection } from './HeroSection/HeroSection';
import { TheProblem } from './TheProblem/TheProblem';
import { TheAiReality } from './TheAiReality/TheAiReality';
import { TheWorkflow } from './TheWorkflow/TheWorkflow';
import { NoShoot } from './NoShoot/NoShoot';
import { IntelligentReformat } from './IntelligentReformat/IntelligentReformat';
import { TheCostGap } from './TheCostGap/TheCostGap';
import { WhoItsFor } from './WhoItsFor/WhoItsFor';
import { EarlyAccessCTA } from './EarlyAccessCTA/EarlyAccessCTA';

export const LandingPage = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <NavBar />
      {showSuccessMessage && <SuccessNotification />}
      <HeroSection onSubmit={handleEmailSubmit} />
      <TheProblem />
      <TheAiReality />
      <TheWorkflow />
      <NoShoot />
      <IntelligentReformat />
      <TheCostGap />
      <WhoItsFor />
      <EarlyAccessCTA onSubmit={handleEmailSubmit} />
      <Footer />
    </div>
  );
};

function SuccessNotification() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2000,
        backgroundColor: 'var(--accent)',
        color: '#09090E',
        padding: '16px 32px',
        borderRadius: '2px',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        boxShadow: '0 8px 32px rgba(0, 212, 160, 0.4)',
        animation: 'slideDown 0.3s ease-out',
      }}
    >
      ✓ You're on the waitlist! We'll be in touch soon.
      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
