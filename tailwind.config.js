/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      brand: ['Kirvy', 'sans-serif'],
    },
    colors: {
      ...colors,
      "gray-brand": "#1C1D20"
    }
  },
  plugins: [],
}