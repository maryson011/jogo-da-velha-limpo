import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    400: '#96d7eb',
                    500: '#839cb5',
                    600: '#686466',
                },
                secondary: {
                    400: '#c0de5d',
                    500: '#b5cc6a',
                    600: '#6da67a',
                },
                dark: {
                    400: '#021790',
                    500: '#01086d',
                    600: '#00005b',
                },
                light: {
                    400: '#DBE8ED',
                    500: '#A8BFC9',
                    600: '#6B8997',
                },
            },
        },
    },
    safelist: [
        { pattern: /^bg-primary/, variants: ['hover'] },
        { pattern: /^bg-secondary/, variants: ['hover'] },
        { pattern: /^bg-dark/, variants: ['hover'] },
        { pattern: /^bg-light/, variants: ['hover'] },
    ],
    plugins: [],
}

export default config