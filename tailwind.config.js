/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#0d59f2",
                "primary-glow": "#3b82f6",
                "accent-purple": "#a855f7",
                "background-dark": "#0B0E14",
                "surface-dark": "#151B26",
                "surface-light": "#1E2736",
                "text-dim": "#94a3b8"
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Inter", "sans-serif"],
                "mono": ["JetBrains Mono", "monospace"],
            },
            borderRadius: {
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
            },
            boxShadow: {
                'neon': '0 0 20px -5px rgba(13, 89, 242, 0.5)',
                'neon-hover': '0 0 30px -5px rgba(13, 89, 242, 0.7)',
            },
            animation: {
                'blink': 'blink 1s step-end infinite',
                'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'fade-in-delayed': 'fadeIn 1s ease-out 0.8s forwards',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
