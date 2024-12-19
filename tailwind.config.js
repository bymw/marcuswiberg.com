module.exports = {
  content: [
    './*.html', // Include HTML files in the root directory
    './**/*.{html,js,jsx,ts,tsx}', // Include HTML, JS, JSX, TS, and TSX files in all subdirectories
    '!./node_modules/**/*', // Exclude node_modules from being scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
