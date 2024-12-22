// backToTop.js
// Handles the "Back to Top" button functionality

document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('btn-back-to-top')

  if (!backToTopButton) {
    console.error('Error: "Back to Top" button with ID "btn-back-to-top" not found.')
    return
  }

  const toggleBackToTopButton = () => {
    const scrollPosition = window.scrollY || window.pageYOffset
    if (scrollPosition > 100) {
      backToTopButton.classList.remove('hidden')
    } else {
      backToTopButton.classList.add('hidden')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleBackToTopButton)
  backToTopButton.addEventListener('click', scrollToTop)

  toggleBackToTopButton()
})
