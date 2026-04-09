"use client";

import React, { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export const TheAiReality = () => {
    const { elementRef, isVisible } = useScrollReveal();

    const pains = [
        { text: "You've reached your limit of 4 parallel generations.", tag: 'CREDIT WALL' },
        { text: "I've been working on this one image for 3 hours.", tag: 'PROMPT HELL' },
        { text: 'Re-prompting. Re-prompting. Re-prompting.', tag: 'TRIAL & ERROR' },
        { text: 'Quality checking each output manually.', tag: 'TIME DRAIN' },
        { text: 'The background looks wrong. Regenerating.', tag: 'LOOP' },
        { text: 'We ran out of credits. Buying more.', tag: 'HIDDEN COST' },
    ];

    return (
        <section
            style={{
                backgroundColor: 'var(--surface)',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                padding: '100px 48px',
            }}
        >
            <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
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
                                THE AI REALITY
                            </div>
                        </div>

                        <h2
                            style={{
                                fontFamily: 'Syne, sans-serif',
                                fontWeight: 700,
                                fontSize: 'clamp(32px, 4.5vw, 56px)',
                                lineHeight: 1.1,
                            }}
                        >
                            <div style={{ color: 'var(--text-primary)' }}>You're already using AI.</div>
                            <div style={{ color: 'var(--accent)' }}>Still not fast enough.</div>
                        </h2>
                        <p
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '15px',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.7,
                                maxWidth: '420px',
                                marginTop: '20px',
                            }}
                        >
                            Marketers switched to AI expecting to move faster. Instead they got a new kind of slow — prompting loops,
                            credit walls, generic outputs, and hours of QA on every image. The tool changed. The bottleneck didn't.
                        </p>
                    </div>

                    <div>
                        {pains.map((pain, index) => (
                            <PainItem
                                key={index}
                                text={pain.text}
                                tag={pain.tag}
                                isLast={index === pains.length - 1}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>

                <div
                    style={{
                        marginTop: '56px',
                        paddingTop: '40px',
                        borderTop: '1px solid var(--border)',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '11px',
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                        }}
                    >
                        DRIVEFRAME WAS BUILT BECAUSE THIS SHOULDN'T BE YOUR JOB.
                    </div>
                </div>
            </div>
        </section>
    );
}

function PainItem({ text, tag, isLast, delay }: { text: string; tag: string; isLast: boolean, delay: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const { elementRef, isVisible } = useScrollReveal();

    return (
        <div
            ref={elementRef}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 0',
                paddingLeft: isHovered ? '16px' : '0',
                borderBottom: isLast ? 'none' : '1px solid var(--border)',
                gap: '16px',
                transition: 'all 0.2s',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
                transitionDelay: `${delay}ms`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                <div
                    style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: '15px',
                        color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                        transition: 'color 0.2s',
                    }}
                >
                    {text}
                </div>
            </div>
            <div
                style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '10px',
                    color: 'var(--accent)',
                    border: '1px solid var(--accent-border)',
                    backgroundColor: isHovered ? 'var(--accent-dim)' : 'transparent',
                    padding: '4px 8px',
                    borderRadius: '2px',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                    transition: 'background-color 0.2s',
                }}
            >
                {tag}
            </div>
        </div>
    );
}
