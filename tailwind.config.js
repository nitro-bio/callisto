/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  darkMode: false,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nitro-bio/sequence-viewers/dist/nitro-ui.umd.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: colors.emerald,
        noir: colors.zinc,
      },
    },
  },
  plugins: [],
};
