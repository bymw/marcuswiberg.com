/**
 * slideshow.js
 *
 * Manages slideshow functionality, including navigation controls and responsiveness.
 * Implements slide transitions, dot indicators, and handles user interactions for navigation.
 */

export default function initializeSlideshow() {
  // Select essential slideshow elements by their IDs
  const slideshow = document.getElementById('slideshow')
  const prevBtn = document.getElementById('prev')
  const nextBtn = document.getElementById('next')
  const dotsContainer = document.getElementById('dots')

  // Select all slide elements within the slideshow container
  const slides = slideshow?.querySelectorAll('.flex-shrink-0')

  // Initialize the current slide index
  let currentIndex = 0

  // Verify that all necessary elements and slides are present
  if (!slideshow || !prevBtn || !nextBtn || !dotsContainer || slides.length === 0) {
    console.warn('Slideshow elements not found or no slides available.')
    return
  }

  /**
   * Creates dot indicators for each slide.
   * Adds event listeners to dots for navigating to the corresponding slide.
   */
  function createDots() {
    // Clear any existing dots
    dotsContainer.innerHTML = ''

    // Iterate through each slide to create corresponding dot
    slides.forEach((_, index) => {
      const dot = document.createElement('button')

      // Apply styling classes to the dot
      dot.classList.add('w-3', 'h-3', 'rounded-full', 'bg-gray-300', 'focus:outline-none')

      // Set accessibility label for the dot
      dot.setAttribute('aria-label', `Slide ${index + 1}`)

      // Highlight the first dot as active
      if (index === 0) dot.classList.replace('bg-gray-300', 'bg-gray-800')

      // Add click event listener to navigate to the selected slide
      dot.addEventListener('click', () => {
        currentIndex = index
        updateSlideshow()
      })

      // Append the dot to the dots container
      dotsContainer.appendChild(dot)
    })
  }

  /**
   * Updates the slideshow to display the current slide.
   * Translates the slideshow container and updates the active dot indicator.
   */
  function updateSlideshow() {
    // Move the slideshow container to show the current slide
    slideshow.style.transform = `translateX(-${currentIndex * 100}%)`

    // Select all dot indicators
    const dots = dotsContainer.querySelectorAll('button')

    // Update the active state of each dot based on the current index
    dots.forEach((dot, index) => {
      dot.classList.toggle('bg-gray-800', index === currentIndex)
      dot.classList.toggle('bg-gray-300', index !== currentIndex)
    })
  }

  /**
   * Navigates to the next slide in the slideshow.
   * Wraps around to the first slide if currently on the last slide.
   */
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length
    updateSlideshow()
  })

  /**
   * Navigates to the previous slide in the slideshow.
   * Wraps around to the last slide if currently on the first slide.
   */
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    updateSlideshow()
  })

  // Debounce timeout for resize event to improve performance
  let resizeTimeout

  /**
   * Handles window resize events to adjust the slideshow layout.
   * Debounces the resize handler to prevent excessive function calls.
   */
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(updateSlideshow, 200)
  })

  /**
   * Reinitialize the slideshow when dynamically injected components are loaded.
   */
  document.addEventListener('componentLoaded', (event) => {
    const { file } = event.detail
    if (file === 'components/section-healthtrackr.html') {
      console.log('Reinitializing slideshow after dynamic load.')
      createDots()
      updateSlideshow()
    }
  })

  // Initialize the dots and display the first slide
  createDots()
  updateSlideshow()
}
