// scrollAnimation.js
// Handles scroll-triggered animations for elements

export default function handleScrollAnimation() {
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
