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
 */

import handleScrollAnimation from './scrollAnimation.js'
import initializeSlideshow from './slideshow.js'
import './darkModeToggle.js'
import './backToTop.js'

/**
 * Initializes all main functionalities when the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  handleScrollAnimation() // Activates scroll-triggered animations
  initializeSlideshow() // Sets up the slideshow/carousel
})
