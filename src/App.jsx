import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('loopwise-theme')

    if (savedTheme) {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('loopwise-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light',
    )
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="site">
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="brand" aria-label="Loopwise home">
            LOOPWISE
          </a>

          <nav
            className={`main-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Main navigation"
          >
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#products" onClick={closeMenu}>
              Products
            </a>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === 'light' ? 'dark' : 'light'
              } theme`}
            >
              <span className="theme-icon" aria-hidden="true">
                {theme === 'light' ? '☾' : '☀'}
              </span>
            </button>

            <a href="#contact" className="header-cta">
              Let's Talk
            </a>

            <button
              type="button"
              className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">SOFTWARE DEVELOPMENT COMPANY</p>

            <h1>
              We build software
              <br />
              that moves ideas forward.
            </h1>

            <p className="hero-description">
              Loopwise creates thoughtful digital products for web, mobile,
              and desktop.
            </p>

            <div className="hero-actions">
              <a href="#products" className="button button-primary">
                Explore our work
              </a>

              <a href="#contact" className="button button-secondary">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hero-accent" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="intro-section">
          <p className="section-label">WHAT WE DO</p>

          <div className="intro-content">
            <h2>
              Turning ideas into
              <br />
              useful software.
            </h2>

            <p>
              From a first concept to a finished product, we focus on building
              software that is clear, reliable, and made for the people who
              use it.
            </p>
          </div>
        </section>

        <section id="products" className="placeholder-section">
          <p className="section-label">OUR PRODUCTS</p>
          <h2>Products we'll showcase here.</h2>
        </section>

        <section id="services" className="placeholder-section">
          <p className="section-label">OUR SERVICES</p>
          <h2>Web, mobile, desktop, and custom software.</h2>
        </section>

        <section id="about" className="placeholder-section">
          <p className="section-label">ABOUT LOOPWISE</p>
          <h2>Built with purpose. Developed with care.</h2>
        </section>

        <section id="contact" className="cta-section">
          <p className="section-label">LET'S TALK</p>
          <h2>Have an idea in mind?</h2>
          <a href="mailto:hello@loopwise.com" className="button button-primary">
            Start a conversation
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>LOOPWISE</strong>
          <p>Software for web, mobile & desktop.</p>
        </div>

        <p>© 2026 Loopwise. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App