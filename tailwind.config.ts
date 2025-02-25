import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '425px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                tertiary: 'var(--tertiary)',
                gray: 'var(--gray)',
                mono: 'var(--mono)',
            },
            fontFamily: {
                vollkorn: ['"Vollkorn"', 'serif'],
                regencie: ['"Regencie"', 'sans-serif'],
                geist: ['"Geist"', 'sans-serif'],
            },
            padding: {
                sm: '1rem',
                md: '2rem',
                lg: '4rem',
                xl: '16rem',
            },
            margin: {
                md: '2rem',
                lg: '4rem',
                xl: '16rem',
            },
        },
    },
    plugins: [],
} satisfies Config;
