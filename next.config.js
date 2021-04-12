const { withGoogleFonts } = require("nextjs-google-fonts");

const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
};

module.exports = withGoogleFonts({
  googleFonts: {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&display=swap",
      "https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    ],
  },
  rewrites: () => [STUDIO_REWRITE],
});
