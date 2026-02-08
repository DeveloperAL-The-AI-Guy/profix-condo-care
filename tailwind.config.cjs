/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Manrope"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      heading: ['"Work Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        ink: '#0D1B2A',
        slate: '#1F2A3A',
        stone: '#E8ECF1',
        fog: '#F6F8FB',
        accent: '#1D9BF0',
        gold: '#C89B3C'
      },
      boxShadow: {
        card: '0 20px 60px rgba(13,27,42,0.08)',
      },
      borderRadius: {
        soft: '18px'
      }
    },
  },
  plugins: [],
};
