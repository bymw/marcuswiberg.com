/**
 * backToTop.js
 *
 * Handles the functionality of the "Back to Top" button.
 * Shows the button when the user scrolls down and scrolls smoothly to the top when clicked.
 */

document.addEventListener('DOMContentLoaded', initializeBackToTop)

document.addEventListener('componentLoaded', (event) => {
  const { file } = event.detail
  // Reinitialize if the Back to Top button is dynamically injected
  if (file.includes('footer') || file.includes('components')) {
    initializeBackToTop()
  }
})

function initializeBackToTop() {
  // Select the "Back to Top" button by its ID
  const backToTopButton = document.getElementById('btn-back-to-top')

  // If the button is not found, log an error and exit
  if (!backToTopButton) {
    console.warn('Warning: "Back to Top" button with ID "btn-back-to-top" not found.')
    return
  }

  /**
   * Toggles the visibility of the "Back to Top" button based on scroll position.
   * Shows the button if scrolled down more than 100 pixels, hides it otherwise.
   */
  const toggleBackToTopButton = () => {
    const scrollPosition = window.scrollY || window.pageYOffset
    if (scrollPosition > 100) {
      backToTopButton.classList.remove('hidden')
    } else {
      backToTopButton.classList.add('hidden')
    }
  }

  /**
   * Smoothly scrolls the window back to the top.
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Listen for scroll events to toggle button visibility
  window.addEventListener('scroll', toggleBackToTopButton)

  // Listen for click events on the button to scroll to top
  backToTopButton.addEventListener('click', scrollToTop)

  // Initialize button visibility on page load
  toggleBackToTopButton()
}
