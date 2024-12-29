/**
 * include.js
 *
 * Dynamically includes HTML components into the main HTML file based on data-include attributes.
 * Dispatches a custom event 'componentLoaded' after each component is loaded.
 */

document.addEventListener('DOMContentLoaded', () => {
  const includes = document.querySelectorAll('[data-include]')
  console.log(`Found ${includes.length} elements to include.`)

  includes.forEach(async (element) => {
    const file = element.getAttribute('data-include')
    if (file) {
      console.log(`Loading component: ${file}`)
      try {
        const response = await fetch(file)
        if (!response.ok) throw new Error(`Failed to load ${file}: ${response.statusText}`)
        const content = await response.text()
        element.innerHTML = content

        // Log successful component load
        console.log(`Loaded component: ${file}`)

        // Dispatch a custom event after loading a component
        const event = new CustomEvent('componentLoaded', {
          detail: { id: element.id, file: file },
        })
        document.dispatchEvent(event)
      } catch (error) {
        console.error(`Error loading component "${file}":`, error)
        // Provide fallback content if the component fails to load
        element.innerHTML = '<p>Failed to load content.</p>'
      }
    }
  })
})
