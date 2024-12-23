/**
 * scrollAnimation.js
 *
 * Handles scroll-triggered animations for specified elements.
 * Animates elements when they enter the viewport using the Intersection Observer API.
 */

export default function handleScrollAnimation() {
  // Select elements that need to be animated when scrolled into view
  const elementsToAnimate = document.querySelectorAll('#scroll-image, #featured-project')

  /**
   * Callback function executed when observed elements intersect with the viewport.
   *
   * @param {IntersectionObserverEntry[]} entries - Array of intersection observer entries.
   */
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target

        // Remove classes that hide the element and apply animation classes
        element.classList.remove('opacity-0', 'translate-y-10')
        element.classList.add('opacity-100', 'translate-y-0')

        // Mark the element as animated to prevent re-animation
        element.setAttribute('data-animated', 'true')

        // Stop observing the element since it has been animated
        observer.unobserve(element)
      }
    })
  }

  // Create a new Intersection Observer instance with the callback function
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
  }
  const observer = new IntersectionObserver(observerCallback, observerOptions)

  // Start observing each selected element
  elementsToAnimate.forEach((element) => observer.observe(element))
}
