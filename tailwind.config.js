/** @type {import('tailwindcss').Config} */
const {fontFamily} = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-light": "#F8F8FB",
        "background-dark": "#141625",
        "primary-light": "#7C5DFA",
        "primary-dark": "#9277FF",
        "secondary-light": "#888EB0",
        "secondary-dark": "#DFE3FA",
        "error-light": "#9277FF",
        "error-dark": "#EC5757",
        "font-pri-light": "#0C0E16",
        "font-sec-light": "#7E88C3",
        "side-menu-light": "#252945",
        "side-menu-dark": "#1E2139",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #ff8906 7.21%, #f25f4c 45.05%, #e53170 78.07%)",
      }),
      fontFamily: {
        sans: ["var(--font-spartan)", ...fontFamily.sans],
      },
      content: {
        example: "url('../assets/brush.png')",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translate3d(100%, 0, 0)",
          },

          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        "slide-in-right": "slideIn 0.2s ease-in",
      },
      boxShadow: {
        outer:
          "6px 6px 10px -1px rgba(0,0,0,0.15), -1px -1px 10px -1px rgba(255,255,255,0.7)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill,minmax(18rem,1fr))",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      standar: "90rem",
    },
  },
  plugins: [],
};
