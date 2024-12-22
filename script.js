// Document Ready Initialization
// Runs once the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  handleScrollAnimation() // Handles scroll-triggered animations
  handleVideoLoading() // Manages video loading and spinner visibility
  initializeSlideshow() // Initializes the slideshow functionality
})

/* ============================================================
   SCROLL ANIMATION HANDLER
   Handles scroll-triggered animations for elements
============================================================ */
function handleScrollAnimation() {
  const elementsToAnimate = document.querySelectorAll('#scroll-image, #featured-project') // Select both elements

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target
        element.classList.remove('opacity-0', 'translate-y-10')
        element.classList.add('opacity-100', 'translate-y-0')
        element.setAttribute('data-animated', 'true') // Mark the element as already animated
        observer.unobserve(element) // Stop observing once animated
      }
    })
  })

  elementsToAnimate.forEach((element) => observer.observe(element))
}

/* ============================================================
   VIDEO LOADING HANDLER
   Placeholder for managing video loading and spinner visibility
============================================================ */
function handleVideoLoading() {
  const slideshow = document.getElementById('slideshow')
  if (!slideshow) {
    console.warn('Slideshow element not found.')
    return
  }
}

/* ============================================================
   SLIDESHOW INITIALIZATION
   Manages slideshow functionality, navigation, and responsiveness
============================================================ */
function initializeSlideshow() {
  const slideshow = document.getElementById('slideshow')
  const prevBtn = document.getElementById('prev')
  const nextBtn = document.getElementById('next')
  const dotsContainer = document.getElementById('dots')
  const slides = slideshow?.querySelectorAll('.flex-shrink-0')
  let currentIndex = 0

  if (!slideshow || !prevBtn || !nextBtn || !dotsContainer || slides.length === 0) {
    console.warn('Slideshow elements not found or no slides available.')
    return
  }

  // Create navigation dots
  function createDots() {
    dotsContainer.innerHTML = ''
    slides.forEach((_, index) => {
      const dot = document.createElement('button')
      dot.classList.add('w-3', 'h-3', 'rounded-full', 'bg-gray-300', 'focus:outline-none')
      dot.setAttribute('aria-label', `Slide ${index + 1}`)
      if (index === 0) dot.classList.replace('bg-gray-300', 'bg-gray-800')
      dot.addEventListener('click', () => {
        currentIndex = index
        updateSlideshow()
      })
      dotsContainer.appendChild(dot)
    })
  }

  // Update the slideshow based on current index
  function updateSlideshow() {
    slideshow.style.transform = `translateX(-${currentIndex * 100}%)`
    const dots = dotsContainer.querySelectorAll('button')
    dots.forEach((dot, index) => {
      dot.classList.toggle('bg-gray-800', index === currentIndex)
      dot.classList.toggle('bg-gray-300', index !== currentIndex)
    })
  }

  // Event listeners for navigation buttons
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length
    updateSlideshow()
  })

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    updateSlideshow()
  })

  // Debounced resize handling
  let resizeTimeout
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(updateSlideshow, 200)
  })

  // Initialize slideshow
  createDots()
  updateSlideshow()
}

// JavaScript to handle visibility on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.gradient').forEach((gradient) => {
        gradient.classList.add('visible')
      })
    }
  })
})

document.querySelectorAll('section').forEach((section) => observer.observe(section))

/* ============================================================
   Darkmode toggle
   Function for darkmode toggle
============================================================ */

// Function to set the theme
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
    document.getElementById('dark-mode-btn').classList.add('hidden')
    document.getElementById('light-mode-btn').classList.remove('hidden')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.getElementById('dark-mode-btn').classList.remove('hidden')
    document.getElementById('light-mode-btn').classList.add('hidden')
    localStorage.setItem('theme', 'light')
  }
}

// Event listeners for buttons
document.getElementById('dark-mode-btn').addEventListener('click', () => setTheme('dark'))
document.getElementById('light-mode-btn').addEventListener('click', () => setTheme('light'))

// Initialize theme based on user preference or system settings
;(function () {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    setTheme(savedTheme)
  } else {
    // If no theme is saved, use the system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
})()

// JavaScript to handle the back-to-top button
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the "Back to Top" button by its ID
  const backToTopButton = document.getElementById('btn-back-to-top')

  // Check if the button exists in the DOM
  if (!backToTopButton) {
    console.error('Error: "Back to Top" button with ID "btn-back-to-top" not found.')
    return
  }

  /**
   * Function to toggle the visibility of the "Back to Top" button
   * Shows the button when the user scrolls down more than 100px
   * Hides the button when the user is near the top of the page
   */
  const toggleBackToTopButton = () => {
    const scrollPosition = window.scrollY || window.pageYOffset
    if (scrollPosition > 100) {
      // Adjust the scroll threshold as needed
      backToTopButton.classList.remove('hidden')
    } else {
      backToTopButton.classList.add('hidden')
    }
  }

  /**
   * Function to smoothly scroll the user back to the top of the page
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Attach the scroll event listener to the window
  window.addEventListener('scroll', toggleBackToTopButton)

  // Attach the click event listener to the "Back to Top" button
  backToTopButton.addEventListener('click', scrollToTop)

  // Initialize the button's visibility based on the current scroll position
  toggleBackToTopButton()
})
