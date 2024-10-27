/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: '#F0EAE0', // eggshell/light beige
        text: '#1A4731', // dark green
      },
    },
  },
  plugins: [],
}