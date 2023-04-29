/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                burtons: 'burtons',
                poppins: ['Poppins', 'sans-serif'],
            },
            keyframes: {
                'animate-cursor': {
                    '0%': {
                        color: 'rgb(124 58 237)',
                    },
                    '100%': {
                        color: 'rgb(19,184,173)',
                    },
                },
            },
            animation: {
                'animate-cursor': 'animate-cursor .8s infinite',
            },
        },
    },
    plugins: [],
};
