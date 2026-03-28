import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { img } from '../utils'

const navItems = [
  { to: '/', label: 'Home', icon: true },
  { to: '/call-for-papers', label: 'Call for Papers' },
  { to: '/how-to-submit', label: 'How to Submit' },
  { to: '/nextgen-interchange', label: 'NextGen Interchange' },
  { to: '/ambassador-program', label: 'Ambassador Program' },
  { to: '/organising-committee', label: 'Organising Committee' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/keynote-speakers', label: 'Keynote Speakers' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navigation">
      <div className="website-navigation">
        <div className="website-navigation__wrapper">
          <div className="website-navigation__primary">
            <NavLink to="/" className="nav-logo">
              <img src={img('logo-mirasol.png')} alt="MIRASOL" />
            </NavLink>
            <button
              className="nav-toggle"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              &#9776;
            </button>
            <nav className={`website-navigation-list${menuOpen ? ' active' : ''}`}>
              <ul className="website-navigation-list__wrapper">
                {navItems.map(item => (
                  <li key={item.to} className="website-navigation-list__item">
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `website-navigation-item${isActive ? ' active' : ''}`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.icon && (
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      )}
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
