/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-normal': '#FFFFFF',
        'neutral-gray-2': '#E8E8E8',
      },
    },
  },
  plugins: [],
};
