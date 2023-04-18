/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#e02f6b",
        "light-alpha-40": "rgba(255, 255, 255, 0.40)",
        "light-alpha-25": "rgba(255, 255, 255, 0.25)",
        "backdrop-filter-blur": "blur(10px)",
        "accent-light-100": "#efa2b4",
        "accent-light-200": "#aef1ee",
        "accent-200": "#cddc39",
        "accent-300": "#64baaa",
        "accent-400": "#0000ff",
        "accent-700": "#18293c",
      },
    },
  },
  plugins: [],
};
