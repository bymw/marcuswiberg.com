/**
 * scrollAnimation.js
 *
 * Handles scroll-triggered animations for specified elements.
 * Animates elements when they enter the viewport using the Intersection Observer API.
 */

export default function handleScrollAnimation({ hiddenClasses = ['opacity-0', 'translate-y-10'], visibleClasses = ['opacity-100', 'translate-y-0'], threshold = 0.1 } = {}) {
  // Select elements that need to be animated when scrolled into view
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll')

  if (elementsToAnimate.length === 0) {
    console.warn('No elements found for scroll animations.')
    return
  }

  /**
   * Callback function executed when observed elements intersect with the viewport.
   *
   * @param {IntersectionObserverEntry[]} entries - Array of intersection observer entries.
   */
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const element = entry.target

      if (entry.isIntersecting && !element.hasAttribute('data-animated')) {
        // Remove classes that hide the element and apply animation classes
        hiddenClasses.forEach((cls) => element.classList.remove(cls))
        visibleClasses.forEach((cls) => element.classList.add(cls))

        // Mark the element as animated to prevent re-animation
        element.setAttribute('data-animated', 'true')

        // Stop observing the element since it has been animated
        observer.unobserve(element)
      }
    })
  }

  // Create a new Intersection Observer instance with the callback function
  const observerOptions = { threshold }
  const observer = new IntersectionObserver(observerCallback, observerOptions)

  // Start observing each selected element
  elementsToAnimate.forEach((element) => observer.observe(element))

  /**
   * Reapply animations for dynamically added elements.
   */
  document.addEventListener('componentLoaded', () => {
    const newElements = document.querySelectorAll('.animate-on-scroll:not([data-animated])')
    newElements.forEach((element) => observer.observe(element))
  })
}
