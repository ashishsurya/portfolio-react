/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dm: "'DM Sans', sans-serif",
      },
      animation: {
        wave: 'wave 1s linear infinite',
      },
      keyframes: {
        wave: {
          from: { tranform: 'rotate(0deg)' },
          to: { tranform: 'rotate(-45deg)' },
        },
      },
    },
  },
  plugins: [],
};
