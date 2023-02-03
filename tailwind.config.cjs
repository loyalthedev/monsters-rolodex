/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0d0e12",
        secondary: "#15181e",
      },
      fontFamily: {
        bigelo: ['Bigelow Rules', "cursive"],
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/homepage-fallback.jpg')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};