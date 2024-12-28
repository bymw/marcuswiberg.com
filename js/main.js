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

document.addEventListener('DOMContentLoaded', () => {
  const emojis = document.querySelectorAll('.emoji')
  const container = document.getElementById('emoji-container')

  // Get container dimensions
  let containerWidth = container.clientWidth
  let containerHeight = container.clientHeight

  // Number of grid rows and columns (adjust based on number of emojis)
  const gridRows = Math.ceil(Math.sqrt(emojis.length))
  const gridCols = Math.ceil(emojis.length / gridRows)

  // Grid cell dimensions
  const cellWidth = containerWidth / gridCols
  const cellHeight = containerHeight / gridRows

  // Initialize emoji positions
  emojis.forEach((emoji, index) => {
    const row = Math.floor(index / gridCols) // Grid row for the emoji
    const col = index % gridCols // Grid column for the emoji

    // Random position within the cell
    const x = col * cellWidth + Math.random() * (cellWidth - 50)
    const y = row * cellHeight + Math.random() * (cellHeight - 50)

    // Set initial position
    emoji.style.transform = `translate(${x}px, ${y}px)`

    // Random velocity for movement
    let dx = (Math.random() - 0.5) * 0.8 // Slower velocity (-0.4 to 0.4)
    let dy = (Math.random() - 0.5) * 0.8 // Slower velocity (-0.4 to 0.4)

    // Animate movement
    function animate() {
      let currentX = parseFloat(emoji.style.transform.match(/translate\((.*)px, (.*)px\)/)[1])
      let currentY = parseFloat(emoji.style.transform.match(/translate\((.*)px, (.*)px\)/)[2])

      currentX += dx
      currentY += dy

      // Collision detection with container edges
      if (currentX <= 0 || currentX >= containerWidth - 50) {
        dx *= -1 // Reverse x direction
      }
      if (currentY <= 0 || currentY >= containerHeight - 50) {
        dy *= -1 // Reverse y direction
      }

      // Apply new position
      emoji.style.transform = `translate(${currentX}px, ${currentY}px)`

      requestAnimationFrame(animate)
    }

    animate()
  })

  // Update container dimensions on window resize
  window.addEventListener('resize', () => {
    containerWidth = container.clientWidth
    containerHeight = container.clientHeight
  })
})
