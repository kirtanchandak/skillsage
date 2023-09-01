/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "dm-serif-display": ["DM Serif Display", "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: "#1C3DEE",
    },
  },
  plugins: [],
};
