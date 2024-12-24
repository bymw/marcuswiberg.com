/**
 * darkModeToggle.js
 *
 * Handles the toggling and initialization of dark mode for the website.
 * Allows users to switch between dark and light themes, and remembers their preference.
 */

/**
 * Dynamically updates <meta name="theme-color"> so that mobile
 * browsers match the address bar color to the current theme.
 *
 * @param {boolean} isDark - Whether the theme is dark or not.
 */
function updateMetaThemeColor(isDark) {
  const metaThemeColor = document.querySelector('meta[name="theme-color"]')
  if (!metaThemeColor) return

  // Adjust these colors to match your desired dark/light scheme
  metaThemeColor.setAttribute('content', isDark ? '#080808' : '#ffffff')
}

/**
 * Sets the website theme to either dark or light mode.
 *
 * @param {string} theme - The desired theme, either 'dark' or 'light'.
 */
function setTheme(theme) {
  const darkModeButton = document.getElementById('dark-mode-btn')
  const lightModeButton = document.getElementById('light-mode-btn')

  if (theme === 'dark') {
    // Apply dark mode by adding the 'dark' class to <html>
    document.documentElement.classList.add('dark')

    // Hide the dark mode toggle button and show the light mode button
    darkModeButton.classList.add('hidden')
    lightModeButton.classList.remove('hidden')

    // Save the user's preference in localStorage
    localStorage.setItem('theme', 'dark')

    // Update the meta tag color for mobile (dark)
    updateMetaThemeColor(true)
  } else {
    // Remove dark mode by removing the 'dark' class from <html>
    document.documentElement.classList.remove('dark')

    // Show the dark mode toggle button and hide the light mode button
    darkModeButton.classList.remove('hidden')
    lightModeButton.classList.add('hidden')

    // Save the user's preference in localStorage
    localStorage.setItem('theme', 'light')

    // Update the meta tag color for mobile (light)
    updateMetaThemeColor(false)
  }
}

// Add click event listener to the dark mode button to switch to dark theme
document.getElementById('dark-mode-btn').addEventListener('click', () => setTheme('dark'))

// Add click event listener to the light mode button to switch to light theme
document.getElementById('light-mode-btn').addEventListener('click', () => setTheme('light'))

/**
 * Initializes the theme based on user preference or system settings.
 *
 * This IIFE (Immediately Invoked Function Expression) checks for a saved theme in localStorage.
 * If none is found, it falls back to the user's system preference.
 */
;(function () {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    // Apply the saved theme preference
    setTheme(savedTheme)
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no preference is saved and the system prefers dark mode
    setTheme('dark')
  } else {
    // Otherwise, default to light theme
    setTheme('light')
  }
})()
