/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: ["variant", ".dark &"],
  theme: {
    extend: {},
  },
  plugins: [PrimeUI]
}

