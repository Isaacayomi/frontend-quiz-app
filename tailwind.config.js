/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    backgroundImage: {
      "light-pattern-background":
        "url('/src/assets/images/pattern-background-desktop-light.svg')",
      "dark-pattern-background":
        "url('/src/assets/images/patter-background-dark.svg)",
    },
  },
  plugins: [],
};
