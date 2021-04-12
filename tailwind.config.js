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
      },
      fontFamily: {
        sans: ["Roboto", "Lato", "Lucida Grande", "Tahoma", "Sans-Serif"],
        serif: ["Noto Serif", "Georgia", "serif"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/aspect-ratio")],
};
