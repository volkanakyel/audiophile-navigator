/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    fontSize: {
      base: "15px",
      xs: "14px",
      sm: "18px",
      m: "24px",
      l: "32px",
      lg: "40px",
      xl: "56px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      dark: {
        100: "#0E0E0E",
        200: "#101010",
      },
      orange: "#D87D4A",
      peach: "#fbaf85",
      grey: {
        100: "#F1F1F1",
        200: "#FAFAFA",
        300: "#979797",
      },
    },
  },
  plugins: [],
};
