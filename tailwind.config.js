/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        primary: {
          DEFAULT: '#6B3E26',
          light: '#8A5636',
          dark: '#4B2E1F',
        },
        secondary: {
          DEFAULT: '#D79A4E',
          light: '#E5B579',
        },
        accent: '#F4E2C6',
        bark: '#4B2E1F',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        label: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        blob: '60% 40% 55% 45% / 45% 55% 45% 55%',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(75, 46, 31, 0.25)',
        card: '0 4px 20px -6px rgba(75, 46, 31, 0.15)',
      },
      keyframes: {
        drip: {
          '0%': { transform: 'translateY(-6px)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(14px)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
      },
      animation: {
        drip: 'drip 2.4s ease-in infinite',
        float: 'float 5s ease-in-out infinite',
        shimmer: 'shimmer 1.6s linear infinite',
      },
      screens: {
        xs: '360px',
      },
    },
  },
  plugins: [],
};
