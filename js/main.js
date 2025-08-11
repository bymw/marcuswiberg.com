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
 * Utility: wait for an element to appear in the DOM.
 * Resolves with the element or null after timeout.
 */
function waitForElement(selector, timeout = 4000) {
  return new Promise((resolve) => {
    const start = Date.now()
    const timer = setInterval(() => {
      const el = document.querySelector(selector)
      if (el) {
        clearInterval(timer)
        resolve(el)
      } else if (Date.now() - start > timeout) {
        clearInterval(timer)
        resolve(null)
      }
    }, 100)
  })
}

/**
 * Adds a subtle 3D tilt + scale effect to the profile photo based on pointer position.
 */
function initProfileTilt() {
  const photo = document.getElementById('profile-photo')
  if (!photo) return
  // Respect user preference for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const wrapper = photo.parentElement
  wrapper.style.perspective = '1000px'

  function handleMove(e) {
    const rect = wrapper.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    const rotateX = y * -15 // max 15deg
    const rotateY = x * 15

    photo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`
  }

  function reset() {
    photo.style.transform = ''
  }

  wrapper.addEventListener('pointermove', handleMove)
  wrapper.addEventListener('pointerleave', reset)
}

/**
 * Initializes all main functionalities when the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll animations
  initScrollAnimations()
  // No JS-driven photo effect; replaced by pure CSS slow zoom.
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
