# Marcus Wiberg - Personal Portfolio

Welcome to my personal portfolio repository! This is a modern, responsive portfolio website showcasing my work as a Product and Design Leader.

## Features

- **Responsive Design**: Fully responsive layout optimized for various screen sizes
- **Modular Component System**: Clean, structured component-based architecture
- **Dark/Light Mode Toggle**: Dynamic theme switching with smooth transitions
- **Interactive Slideshows**: Featured projects with horizontal scrolling and hover effects
- **SEO Optimized**: Includes meta tags, Open Graph, and Twitter Card configurations
- **Modern Tech Stack**: Built with TailwindCSS, PostCSS, and vanilla JavaScript
- **Performance Optimized**: Minified CSS, lazy loading, and optimized assets
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

## Live Demo

Check out the live version at: [Marcus Wiberg - Portfolio](https://www.marcuswiberg.com)

## Table of Contents

1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Development](#development)
4. [Project Structure](#project-structure)
5. [Components](#components)
6. [Technologies Used](#technologies-used)
7. [License](#license)

## Getting Started

This portfolio showcases my work experience, featured projects, and professional background. The site is built with a modular component system for easy maintenance and updates.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bymw/marcuswiberg.com.git
   ```

2. Navigate to the project directory:

   ```bash
   cd marcuswiberg.com
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Build the CSS:

   ```bash
   npm run build
   ```

5. Open `index.html` in your browser or serve it locally.

## Development

### Available Scripts

- `npm run build` - Build production CSS
- `npm run build:css` - Build CSS with minification
- `npm run watch:css` - Watch for CSS changes and rebuild
- `npm run watch` - Start development mode with file watching

### Local Development

For local development with live reloading, you can use any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

## Project Structure

```
marcuswiberg.com/
├── components/              # Modular HTML components
│   ├── header.html         # Main header with intro and social links
│   ├── section-positions.html      # Work experience cards
│   ├── section-certifications.html # Professional certifications
│   ├── section-featured-projects.html # Project slideshow
│   ├── section-mobile-experience.html # Mobile app showcase
│   ├── section-healthtrackr.html   # Healthtrackr specific section
│   └── footer.html         # Footer with links
├── js/                     # JavaScript modules
│   ├── main.js            # Main application logic
│   ├── include.js         # Component inclusion system
│   ├── darkModeToggle.js  # Theme switching functionality
│   ├── slideshow.js       # Slideshow and carousel logic
│   ├── scrollAnimation.js # Scroll-triggered animations
│   ├── backToTop.js       # Back to top button
│   └── emojis.js          # Interactive emoji effects
├── media/                  # Assets and media files
│   ├── slideshow/         # Project slideshow images
│   ├── flags/             # Country flags for positions
│   ├── meta/              # Social media images
│   └── favicons/          # Website icons
├── dist/                   # Compiled assets
│   └── output.css         # Compiled TailwindCSS
├── styles.css              # Custom styles and animations
├── index.html              # Main HTML file
├── imprint.html            # Legal imprint page
├── sitemap.xml            # SEO sitemap
├── site.webmanifest       # PWA manifest
├── tailwind.config.js     # TailwindCSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## Components

The site uses a modular component system where each section is a separate HTML file:

### Header Component (`components/header.html`)

- Personal introduction and branding
- Social media links
- Professional title and description

### Positions Component (`components/section-positions.html`)

- Work experience cards with company flags
- Role titles and company descriptions
- Hover effects and animations

### Featured Projects (`components/section-featured-projects.html`)

- Horizontal scrolling slideshow
- Project images with overlay descriptions
- Interactive hover effects

### Mobile Experience (`components/section-mobile-experience.html`)

- Mobile app showcase section
- Device mockups and screenshots

### Certifications (`components/section-certifications.html`)

- Professional certifications display
- Credential links and badges

## Technologies Used

- **HTML5** - Semantic markup and accessibility
- **CSS3** - TailwindCSS framework with custom animations
- **JavaScript** - Vanilla JS with modular architecture
- **PostCSS** - CSS processing and optimization
- **TailwindCSS** - Utility-first CSS framework
- **SEO** - Meta tags, structured data, and sitemaps
- **PWA** - Web manifest and service worker ready

## Key Features

### Theme System

- Dark/light mode toggle with persistent state
- Smooth transitions between themes
- System preference detection

### Interactive Elements

- Slideshow with touch/swipe support
- Scroll-triggered animations
- Hover effects and micro-interactions
- Back to top button

### Performance

- Lazy loading for images
- Minified CSS output
- Optimized asset delivery
- Responsive image handling

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to contact me via:

- **LinkedIn**: [Marcus Wiberg](https://www.linkedin.com/in/marcuswiberg/)
- **GitHub**: [bymw](https://github.com/bymw)
- **Website**: [marcuswiberg.com](https://www.marcuswiberg.com/)
