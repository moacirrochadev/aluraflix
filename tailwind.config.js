/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
    },
  },
  plugins: [],
};