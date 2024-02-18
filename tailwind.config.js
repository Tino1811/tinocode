    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
        colors: {
            brown: {
            50: '#fdf8f6',
            100: '#f2e8e5',
            200: '#eaddd7',
            300: '#e0cec7',
            400: '#d2bab0',
            500: '#bfa094',
            600: '#a18072',
            700: '#977669',
            800: '#846358',
            900: '#43302b',
            },
            ocean: {
            50: '',
            100: '',
            200: '',
            300: '',
            400: '',
            500: '',
            600: '',
            700: '#042159',
            800: '',
            900: '',
            },
        },
        fontFamily: {
            afacad: ['Afacad'],
            quicksand: ['Quicksand'],
        }
        },
    },
    plugins: [],
    }

