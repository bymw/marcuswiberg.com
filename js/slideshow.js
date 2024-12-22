// slideshow.js
// Manages slideshow functionality, navigation, and responsiveness

export default function initializeSlideshow() {
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

  function updateSlideshow() {
    slideshow.style.transform = `translateX(-${currentIndex * 100}%)`
    const dots = dotsContainer.querySelectorAll('button')
    dots.forEach((dot, index) => {
      dot.classList.toggle('bg-gray-800', index === currentIndex)
      dot.classList.toggle('bg-gray-300', index !== currentIndex)
    })
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length
    updateSlideshow()
  })

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    updateSlideshow()
  })

  let resizeTimeout
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(updateSlideshow, 200)
  })

  createDots()
  updateSlideshow()
}
