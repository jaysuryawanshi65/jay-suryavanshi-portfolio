import { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  const closeMenu = () => {
    const menu = document.getElementById('navbarNav')
    if (menu?.classList.contains('show')) window.bootstrap?.Collapse.getOrCreateInstance(menu).hide()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#home" onClick={closeMenu}>
          <span className="brand-mark">J</span> Jay Suryavanshi
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {['Home','About','Skills','Education','Experience','Projects','Contact'].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link" href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <button type="button" className="btn theme-btn btn-sm" onClick={toggleTheme} aria-label="Toggle theme">
                <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
