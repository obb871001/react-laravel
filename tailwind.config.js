/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#ABD010",
        "second-color": "#1D1D1D",
        "third-color": "#323C3C",
        "extra-black": "#171616",
        "common-border": "#141414",
        "light-border": "#323c3c",
        "light-text": "#8fa8aa",
        "game-background": "#16171b",
        "footer-bg": "#252828",
        "input-color": "#252828",
        "input-border-color": "#323c3c",
        "input-border-light-color": "#575757",
        "gold-text": "#ffc700",
        "light-white": "#e2e8e3",
        "pc-bg": "#1A1A1A",
      },
      padding: {
        "common-padding-x": "12px",
        "common-padding-y": "8px",
      },
    },
  },
  plugins: [],
};
