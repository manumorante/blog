/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "10rem",
        xl: "19rem",
        "2xl": "27rem",
      },
    },
    extend: {},
  },
  plugins: [],
}
