/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "6rem",
        xl: "12rem",
        "2xl": "16rem",
      },
    },
    extend: {},
  },
  plugins: [],
}
