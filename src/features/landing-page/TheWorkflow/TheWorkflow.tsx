"use client";

import React, { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export const TheWorkflow = () => {
    const { elementRef: labelRef, isVisible: labelVisible } = useScrollReveal();

    const steps = [
        {
            tag: 'JPG / PNG / WEBP',
            title: 'Upload your car asset',
            description:
                "Drop your hero shot. If you don't have a shoot-quality asset, upload any image. DRIVEFRAME generates a campaign-grade visual from it.",
            number: '01',
        },
        {
            tag: 'URL → BRIEF IN SECONDS',
            title: 'Drop your brief or paste the URL',
            description:
                'Type your offer and features — or paste the car listing URL. Specs, features, price, offer — all pulled and structured automatically.',
            number: '02',
        },
        {
            tag: 'LOCKED PER SESSION',
            title: 'Lock your brand identity',
            description:
                'Input your colour palette, typography, and tone. Set once, applied to every output. Your brand stays consistent across every variant and format.',
            number: '03',
        },
        {
            tag: 'PLATFORM NATIVE',
            title: 'Choose platform and objective',
            description:
                'Select Meta, Google, or Instagram. Select your campaign type — test drive, model launch, festival offer. Copy angle and layout adapt accordingly.',
            number: '04',
        },
    ];

    return (
        <section id="workflow" style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)', padding: '100px 48px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div
                    ref={labelRef}
                    style={{
                        opacity: labelVisible ? 1 : 0,
                        transform: labelVisible ? 'translateY(0)' : 'translateY(28px)',
                        transition: 'opacity 0.8s ease, transform 0.8s ease',
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
                        THE WORKFLOW
                    </div>
                </div>

                <h2
                    style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(36px, 5vw, 60px)',
                        lineHeight: 1.1,
                        marginBottom: '56px',
                    }}
                >
                    <span style={{ color: 'var(--text-primary)' }}>From brief to campaign. </span>
                    <span style={{ color: 'var(--accent)' }}>Five steps. One session.</span>
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1px',
                        backgroundColor: 'var(--border)',
                    }}
                >
                    {steps.map((step) => (
                        <WorkflowStep key={step.number} {...step} />
                    ))}
                    <div
                        style={{
                            gridColumn: '1 / -1',
                            backgroundColor: 'var(--surface)',
                            padding: '40px 36px',
                            borderTop: '1px solid var(--accent-border)',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: '24px',
                                right: '28px',
                                fontFamily: 'DM Mono, monospace',
                                fontSize: '48px',
                                color: 'var(--accent)',
                                opacity: 0.1,
                                lineHeight: 1,
                            }}
                        >
                            05
                        </div>
                        <div
                            style={{
                                fontFamily: 'DM Mono, monospace',
                                fontSize: '10px',
                                color: 'var(--accent)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: '16px',
                            }}
                        >
                            PRODUCTION READY
                        </div>
                        <h3
                            style={{
                                fontFamily: 'Syne, sans-serif',
                                fontWeight: 700,
                                fontSize: '20px',
                                color: 'var(--text-primary)',
                                marginBottom: '10px',
                                lineHeight: 1.3,
                            }}
                        >
                            Get campaign-ready variants
                        </h3>
                        <p
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '14px',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.7,
                                maxWidth: '900px',
                            }}
                        >
                            Multiple ad variations. Every format. Every platform. Copy angles already differentiated. A/B test ready.
                            No briefing a designer. No export loop. No revision cycle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WorkflowStep({
    tag,
    title,
    description,
    number,
}: {
    tag: string;
    title: string;
    description: string;
    number: string;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const { elementRef, isVisible } = useScrollReveal();

    return (
        <div
            ref={elementRef}
            style={{
                backgroundColor: isHovered ? 'var(--elevated)' : 'var(--bg)',
                padding: '40px 36px',
                position: 'relative',
                transition: 'background-color 0.3s, opacity 0.8s ease, transform 0.8s ease',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '24px',
                    right: '28px',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '48px',
                    color: 'var(--accent)',
                    opacity: 0.1,
                    lineHeight: 1,
                }}
            >
                {number}
            </div>
            <div
                style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '10px',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '16px',
                }}
            >
                {tag}
            </div>
            <h3
                style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    maxWidth: '420px',
                }}
            >
                {description}
            </p>
        </div>
    );
}
