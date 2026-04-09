"use client";

import React, { useState } from 'react';

interface HeroSectionProps {
    onSubmit: (email: string) => void;
}

export const HeroSection = ({ onSubmit }: HeroSectionProps) => {
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            onSubmit(email);
            setIsSuccess(true);
            // Optional: Reset state after some time
            setTimeout(() => {
                setIsSuccess(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                backgroundColor: 'var(--bg)',
                overflow: 'hidden',
            }}
        >
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.6, // Adjusted for readability
                    zIndex: 0,
                }}
            >
                <source src="/Videos/1 - LOOP.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay for contrast */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 50% 50%, rgba(9, 9, 14, 0.4) 0%, rgba(9, 9, 14, 0.9) 100%)',
                    zIndex: 0,
                }}
            />

            {/* Ghost grid background */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
            linear-gradient(rgba(0, 212, 160, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 160, 0.04) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 70%)',
                    zIndex: 1,
                }}
            />

            {/* Floating ad format frames */}
            <AdFrame ratio="9:16" size={{ width: 70, height: 124 }} position={{ bottom: '10%', left: '5%' }} />
            <AdFrame ratio="4:5" size={{ width: 90, height: 112 }} position={{ top: '50%', left: '8%' }} />
            <AdFrame ratio="1:1" size={{ width: 96, height: 96 }} position={{ top: '15%', right: '8%' }} />
            <AdFrame ratio="16:9" size={{ width: 140, height: 88 }} position={{ bottom: '15%', right: '8%' }} />
            <AdFrame ratio="4:5" size={{ width: 90, height: 112 }} position={{ top: '20%', left: '35%' }} />
            <AdFrame ratio="1:1" size={{ width: 96, height: 96 }} position={{ bottom: '25%', right: '30%' }} />

            {/* Content */}
            <div style={{ maxWidth: '920px', textAlign: 'center', position: 'relative', zIndex: 1, padding: '0 48px' }}>
                <div
                    style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '13px',
                        color: 'var(--accent)',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        marginBottom: '32px',
                        fontWeight: 500,
                    }}
                >
                    Automotive Ad Intelligence
                </div>

                <h1
                    style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontWeight: 900,
                        fontSize: 'clamp(56px, 8vw, 96px)',
                        lineHeight: 1.0,
                        letterSpacing: '-0.03em',
                        marginBottom: '32px',
                    }}
                >
                    <div style={{ color: 'var(--text-primary)' }}>Campaign-ready</div>
                    <div style={{ color: 'var(--accent)' }}>automotive ads.</div>
                    <div style={{ color: 'var(--text-primary)' }}>One session.</div>
                </h1>

                <p
                    style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        maxWidth: '680px',
                        margin: '0 auto 48px',
                    }}
                >
                    Every format. Every platform. Copy that knows what a car ad sounds like. No brief-to-agency lag. No revision cycles.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', maxWidth: '480px', margin: '0 auto' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            width: '100%',
                            padding: '8px 8px 8px 20px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '50px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
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
                                background: 'transparent',
                                border: 'none',
                                outline: 'none',
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '14px',
                                color: 'var(--text-primary)',
                                padding: '6px 0',
                                opacity: isSuccess ? 0.3 : 1,
                            }}
                        />
                        <button
                            type="submit"
                            disabled={isSuccess}
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '13px',
                                padding: '12px 28px',
                                backgroundColor: isSuccess ? 'var(--accent)' : 'rgba(255, 255, 255, 0.95)',
                                color: '#09090E',
                                border: 'none',
                                borderRadius: '50px',
                                cursor: isSuccess ? 'default' : 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                whiteSpace: 'nowrap',
                                fontWeight: 600,
                                transform: isSuccess ? 'scale(1.02)' : 'scale(1)',
                                boxShadow: isSuccess ? '0 0 20px rgba(0, 212, 160, 0.3)' : 'none',
                            }}
                            onMouseEnter={(e) => {
                                if (!isSuccess) {
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isSuccess) {
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }
                            }}
                        >
                            {isSuccess ? 'Joined!' : 'Join Waitlist'}
                        </button>
                    </div>
                </form>
            </div>
            <style>
                {`
          @keyframes pulse {
            0% { opacity: 0.2; }
            50% { opacity: 0.6; }
            100% { opacity: 0.2; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover, 
          input:-webkit-autofill:focus, 
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #0a0a0c inset !important;
            -webkit-text-fill-color: var(--text-primary) !important;
            transition: background-color 5000s ease-in-out 0s;
          }
        `}
            </style>
        </section>
    );
};

function AdFrame({
    ratio,
    size,
    position,
}: {
    ratio: string;
    size: { width: number; height: number };
    position: { top?: string; bottom?: string; left?: string; right?: string };
}) {
    return (
        <div
            style={{
                position: 'absolute',
                ...position,
                width: `${size.width}px`,
                height: `${size.height}px`,
                border: '1px solid rgba(0, 212, 160, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                animation: 'fadeIn 2s ease-out',
                zIndex: 1,
            }}
        >
            <div
                style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '9px',
                    color: 'var(--accent)',
                    opacity: 0.4,
                }}
            >
                {ratio}
            </div>
        </div>
    );
}
