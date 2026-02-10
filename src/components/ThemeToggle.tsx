"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(isDark);
        setMounted(true);

        // Clear hash from URL and scroll to top on page load
        if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname);
        }
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle fixed top-6 right-6 z-50"
            aria-label="Toggle dark mode"
        >
            <div
                className="theme-toggle-track"
                style={{
                    backgroundColor: darkMode
                        ? 'var(--color-bg-secondary)'
                        : 'var(--color-border)',
                }}
            >
                <div
                    className="theme-toggle-thumb"
                    style={{
                        transform: darkMode ? 'translateX(26px)' : 'translateX(2px)',
                        backgroundColor: darkMode
                            ? 'var(--color-accent)'
                            : '#f59e0b',
                    }}
                >
                    {/* Sun icon */}
                    <svg
                        className="theme-toggle-icon"
                        style={{
                            opacity: mounted && !darkMode ? 1 : 0,
                            transform: mounted && !darkMode ? 'rotate(0deg)' : 'rotate(-90deg)',
                        }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>

                    {/* Moon icon */}
                    <svg
                        className="theme-toggle-icon"
                        style={{
                            opacity: mounted && darkMode ? 1 : 0,
                            transform: mounted && darkMode ? 'rotate(0deg)' : 'rotate(90deg)',
                        }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                </div>
            </div>
        </button>
    );
}
