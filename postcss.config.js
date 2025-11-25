// postcss.config.js

module.exports = {
  plugins: {
    // CRITICAL FIX: Use the specific PostCSS plugin package
    '@tailwindcss/postcss': {}, 
    'autoprefixer': {},
  },
}