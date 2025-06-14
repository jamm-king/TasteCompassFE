/* tailwind.config.js */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            colors: {
                brand: {
                    DEFAULT: '#1F2937',
                    100: '#F7F7F7',
                    200: '#B3E9FF',
                    300: '#B0ACFF',
                    400: '#6E5AEE',
                    500: '#1A195E',
                },
                background: '#F3F4F6',
                surface:    '#FFFFFF',
                foreground: '#1F2937',
                accent:     '#10B981',
                cta:        '#10B981',
            },
        },
    },
};