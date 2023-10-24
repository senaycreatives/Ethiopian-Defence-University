/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      headercolor: {
        DEFAULT: "#0067B8",
      },
      colors: {
        // Add your custom colors here
        "back-color": "#0067B8",
        "button-color": "#33AD9F",
        "buttonhover-color": "#4EFFEA",
        headercolor: "#0067B8",
        "navlist-color": "#08518d",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
