// main.js
// This file initializes all the main functionality when the document is fully loaded.

import handleScrollAnimation from './scrollAnimation.js'
import initializeSlideshow from './slideshow.js'
import './darkModeToggle.js'
import './backToTop.js'

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  handleScrollAnimation() // Handles scroll-triggered animations
  initializeSlideshow() // Initializes the slideshow functionality
})
