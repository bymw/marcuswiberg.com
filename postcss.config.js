// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Optionally add cssnano for additional minification
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
