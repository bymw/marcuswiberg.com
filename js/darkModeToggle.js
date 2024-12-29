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
  injectThemeMetaTag(isDark ? '#080808' : '#ffffff')
}

/**
 * Forces a short reflow of the document to (sometimes) make iOS Safari
 * recognize the newly injected meta theme color.
 */
function forceRepaint() {
  const doc = document.documentElement
  doc.style.display = 'none'
  void doc.offsetHeight // Force layout reflow
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
    darkModeButton?.classList.add('hidden')
    lightModeButton?.classList.remove('hidden')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    darkModeButton?.classList.remove('hidden')
    lightModeButton?.classList.add('hidden')
    localStorage.setItem('theme', 'light')
  }

  // Update the meta tag color for mobile
  updateMetaThemeColor(theme === 'dark')

  // Hack: forces Safari to re-check the new meta color
  forceRepaint()
}

// Add click event listeners for toggles
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('dark-mode-btn')?.addEventListener('click', () => setTheme('dark'))
  document.getElementById('light-mode-btn')?.addEventListener('click', () => setTheme('light'))
})

/**
 * Reapply theme settings and event listeners when new components are loaded.
 */
document.addEventListener('componentLoaded', () => {
  const darkModeButton = document.getElementById('dark-mode-btn')
  const lightModeButton = document.getElementById('light-mode-btn')

  if (darkModeButton && lightModeButton) {
    darkModeButton.addEventListener('click', () => setTheme('dark'))
    lightModeButton.addEventListener('click', () => setTheme('light'))

    // Apply the saved theme or default to light
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
})
