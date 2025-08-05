/**
 * main.js
 *
 * Initializes the main functionalities of the website once the document is fully loaded.
 *
 * Dependencies:
 * - scrollAnimation.js: Handles scroll-triggered animations.
 * - slideshow.js: Manages the slideshow/carousel functionality.
 * - darkModeToggle.js: Enables dark mode toggling.
 * - backToTop.js: Implements the "Back to Top" button functionality.
 * - emojis.js: Handles emoji functionalities.
 */

import handleScrollAnimation from './scrollAnimation.js'
import initializeSlideshow from './slideshow.js'
import './darkModeToggle.js'
import './backToTop.js'
import './emojis.js'

/**
 * Initializes scroll animations with custom settings.
 */
function initScrollAnimations() {
  handleScrollAnimation({
    hiddenClasses: ['opacity-0', 'translate-y-10'], // Ensure these match the classes added to HTML
    visibleClasses: ['opacity-100', 'translate-y-0'],
    threshold: 0.1,
  })
}

/**
 * Initializes all main functionalities when the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll animations
  initScrollAnimations()


})

/**
 * Listen for 'componentLoaded' events to initialize functionalities post component load.
 */
document.addEventListener('componentLoaded', (event) => {
  const { id, file } = event.detail
  console.log(`Component loaded: ${id} from ${file}`)

  // Reapply scroll animations to dynamically injected components
  initScrollAnimations()

  // Check if the loaded component is the slideshow
  if (file === 'components/section-healthtrackr.html') {
    console.log('Initializing Slideshow.')
    initializeSlideshow()
  }

  // Add other component-specific initialization logic here
})
