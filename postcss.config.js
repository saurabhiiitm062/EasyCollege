// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // 👈 required as per error
    autoprefixer: {},
  },
}
