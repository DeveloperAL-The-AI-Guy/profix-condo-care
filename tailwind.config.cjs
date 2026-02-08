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
        ink: '#0B1224',
        slate: '#121A2E',
        stone: '#E7ECF5',
        fog: '#F4F6FB',
        accent: '#F59E0B',     // amber accent
        accent2: '#22D3EE',    // cyan secondary accent
        gold: '#C89B3C'
      },
      boxShadow: {
        card: '0 24px 70px rgba(11,18,36,0.10)',
        glow: '0 8px 30px rgba(34,211,238,0.25)',
      },
      borderRadius: {
        soft: '18px'
      }
    },
  },
  plugins: [],
};
