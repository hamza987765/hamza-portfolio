import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#home" className="logo">
          HAMZA<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-right">

          <a
            href="https://github.com/hamza987765"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link social-text"
          >
            GH
          </a>

          <a
            href="https://www.linkedin.com/in/hamza-rahman-5733a82b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link social-text"
          >
            in
          </a>

          <a href="#contact" className="nav-contact">
            Let's Talk
          </a>

        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </nav>
  )
}

export default Navbar