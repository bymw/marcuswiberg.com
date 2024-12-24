/**
 * darkModeToggle.js
 *
 * Handles the toggling and initialization of dark mode for the website.
 * Allows users to switch between dark and light themes, and remembers their preference.
 */

/**
 * Removes the existing <meta name="theme-color"> tag.
 */
function removeThemeMetaTag() {
  const existingMeta = document.querySelector('meta[name="theme-color"]')
  if (existingMeta) {
    existingMeta.remove()
  }
}

/**
 * Injects a new <meta name="theme-color"> tag with the specified color.
 */
function injectThemeMetaTag(color) {
  const meta = document.createElement('meta')
  meta.setAttribute('name', 'theme-color')
  meta.setAttribute('content', color)
  document.head.appendChild(meta)
}

/**
 * Updates the <meta name="theme-color"> tag to match light or dark mode.
 *
 * @param {boolean} isDark - Whether the theme is dark or not.
 */
function updateMetaThemeColor(isDark) {
  removeThemeMetaTag()
  // iOS Safari is more likely to honor newly appended meta tags
  injectThemeMetaTag(isDark ? '#080808' : '#ffffff')
}

/**
 * Forces a short reflow of the document to (sometimes) make iOS Safari
 * recognize the newly injected meta theme color.
 */
function forceRepaint() {
  const doc = document.documentElement
  doc.style.display = 'none'
  // Force layout reflow
  void doc.offsetHeight
  doc.style.display = ''
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
    document.documentElement.classList.add('dark')
    darkModeButton.classList.add('hidden')
    lightModeButton.classList.remove('hidden')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    darkModeButton.classList.remove('hidden')
    lightModeButton.classList.add('hidden')
    localStorage.setItem('theme', 'light')
  }

  // Update the meta tag color for mobile
  updateMetaThemeColor(theme === 'dark')

  // Hack: forces Safari to re-check the new meta color
  // (Optional) conditionally call if isIosSafari(), if you want
  forceRepaint()
}

// Add click event listeners for toggles
document.getElementById('dark-mode-btn').addEventListener('click', () => setTheme('dark'))
document.getElementById('light-mode-btn').addEventListener('click', () => setTheme('light'))

// Immediately-invoked function to apply existing preference on load
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
