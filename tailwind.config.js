module.exports = {
  content: [
    './*.html', // Include HTML files in the root directory
    './**/*.{html,js,jsx,ts,tsx}', // Include HTML, JS, JSX, TS, and TSX files in all subdirectories
    // Add other file types if necessary, e.g., './**/*.vue' for Vue.js projects
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
