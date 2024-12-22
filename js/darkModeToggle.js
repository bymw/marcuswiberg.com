// darkModeToggle.js
// Handles dark mode toggling and initialization

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

document.getElementById('dark-mode-btn').addEventListener('click', () => setTheme('dark'))
document.getElementById('light-mode-btn').addEventListener('click', () => setTheme('light'))

;(function () {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    setTheme(savedTheme)
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark')
  } else {
    setTheme('light')
  }
})()
