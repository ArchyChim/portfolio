"use client";

import { useState, useEffect } from "react";

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "Web Developer";

    useEffect(() => {
        if (displayText.length < fullText.length) {
            const timer = setTimeout(() => {
                setDisplayText(fullText.substring(0, displayText.length + 1));
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [displayText]);

    // Cursor blink effect
    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorTimer);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
            {/* Glassmorphism */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top right */}
                <div
                    className="absolute top-20 right-5 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 rounded-full blur-3xl opacity-25"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                ></div>

                {/* Bottom left */}
                <div
                    className="absolute bottom-32 left-5 sm:left-10 w-44 sm:w-72 h-44 sm:h-72 rounded-full blur-3xl opacity-20"
                    style={{ backgroundColor: '#ec4899' }}
                ></div>

                {/* Center */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-10"
                    style={{ backgroundColor: '#a855f7' }}
                ></div>

                {/* Top left - separated and smaller */}
                <div
                    className="absolute top-10 left-1/5 w-48 h-48 rounded-full blur-3xl opacity-12"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                ></div>
            </div>

            {/* Content */}
            <div className="text-center relative z-10">
                <p className="text-base sm:text-lg mb-3 text-muted">
                    Hello, I&apos;m
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3">
                    Archibaldo Chim
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl gradient-text font-semibold h-10" style={{ marginBottom: '3rem' }}>
                    {displayText}
                    <span style={{
                        opacity: showCursor ? 1 : 0,
                        marginLeft: '2px',
                        color: '#a855f7'
                    }}>|</span>
                </p>

                {/* Arrow */}
                <a href="#about" className="scroll-arrow" aria-label="Scroll down">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </a>
            </div>
        </section>
    );
}
