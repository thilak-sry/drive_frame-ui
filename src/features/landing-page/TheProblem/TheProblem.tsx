"use client";

import React, { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export const TheProblem = () => {
    const { elementRef: labelRef, isVisible: labelVisible } = useScrollReveal();

    return (
        <section
            style={{
                borderTop: '1px solid var(--border)',
                backgroundColor: 'var(--bg)',
                padding: '100px 48px',
            }}
        >
            <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
                <div
                    ref={labelRef}
                    style={{
                        opacity: labelVisible ? 1 : 0,
                        transform: labelVisible ? 'translateY(0)' : 'translateY(28px)',
                        transition: 'opacity 0.8s ease, transform 0.8s ease',
                        marginBottom: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
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
                        THE PROBLEM
                    </div>
                          </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        border: '1px solid var(--border)',
                    }}
                >
                    <ProblemCard
                        index="01"
                        quote="The brief was sent Monday. The campaign needed to go live Wednesday."
                        truth="The offer window closes. The designer is still on revision two. The agency wants another day. And you're explaining to the brand manager why the Dhanteras campaign missed peak traffic."
                        delay={100}
                    />
                    <ProblemCard
                        index="02"
                        quote="We have one hero shot. We need 9:16, 4:5, 1:1, and 16:9. Someone needs to resize every single one."
                        truth="You're not a production house. But every campaign turns into one. Hours of exporting, relabelling, checking safe zones. Work that adds zero creative value."
                        hasBorderLeft
                        delay={200}
                    />
                    <ProblemCard
                        index="03"
                        quote="The copy came back sounding like it was written for a mattress brand."
                        truth="Generic AI tools don't know what a car ad sounds like. They don't know the difference between a test drive CTA and a model launch headline. You always end up rewriting it anyway."
                        hasBorderLeft
                        delay={300}
                    />
                </div>
            </div>
        </section>
    );
}

function ProblemCard({
    index,
    quote,
    truth,
    hasBorderLeft = false,
    delay = 0,
}: {
    index: string;
    quote: string;
    truth: string;
    hasBorderLeft?: boolean;
    delay?: number;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const { elementRef, isVisible } = useScrollReveal();

    return (
        <div
            ref={elementRef}
            style={{
                padding: '40px 32px',
                borderLeft: hasBorderLeft ? '1px solid var(--border)' : 'none',
                backgroundColor: isHovered ? 'var(--elevated)' : 'transparent',
                transition: 'background-color 0.3s, opacity 0.8s ease, transform 0.8s ease',
                transitionDelay: `${delay}ms`,
                position: 'relative',
                overflow: 'hidden',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'var(--accent)',
                    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            />
            <div
                style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.15em',
                    marginBottom: '24px',
                }}
            >
                {index}
            </div>
            <div
                style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: 'var(--text-primary)',
                    lineHeight: 1.4,
                    marginBottom: '16px',
                }}
            >
                "{quote}"
            </div>
            <div
                style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                }}
            >
                {truth}
            </div>
        </div>
    );
}
