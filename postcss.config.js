// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Conditionally include cssnano only in production
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('cssnano')({
            preset: 'default',
          }),
        ]
      : []),
  ],
}
