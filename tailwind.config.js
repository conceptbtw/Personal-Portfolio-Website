/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        text: "#FFFFFF",
        bg: "#000010",
        primary: "",
        secondary: "",
        accent: "",
      },
    },
  },
  plugins: [],
};
