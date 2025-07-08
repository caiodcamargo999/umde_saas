/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss}',
  ],
  theme: {
    extend: {
      colors: {
        umde: {
          blue: '#0D4FF7',
          dark: '#0D1A3A',
          black: '#000000',
          white: '#FFFFFF',
        },
        background: '#0D1A3A',
      },
    },
  },
  plugins: [],
};
