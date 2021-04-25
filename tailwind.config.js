const { isWhiteSpaceSingleLine } = require("typescript");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        blue: "#0066FF",
        yellow: "#F4E344",
      },
      fontFamily: {
        sans: ["Roboto", "Lato", "Lucida Grande", "Tahoma", "Sans-Serif"],
        serif: ["Noto Serif", "Georgia", "serif"],
      },
      underlineThickness: {
        h1: "10px",
      },
      underlineOffset: {
        h1: "-0.3rem",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-underline-utils"),
  ],
};
