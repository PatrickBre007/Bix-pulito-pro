import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <img src="/images/logos/a.png" alt="BixPulito PRO" className="logo-image" />
        </Link>

        <button 
          className="navbar-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/chi-siamo" className={`navbar-link ${location.pathname === '/chi-siamo' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Chi Siamo
          </Link>
          
          <div className="navbar-dropdown">
            <button 
              className={`navbar-link dropdown-trigger ${location.pathname.includes('/servizi') ? 'active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Servizi
              <ChevronDown size={18} className={`chevron ${dropdownOpen ? 'open' : ''}`} />
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
              <Link to="/servizi/divani" className="dropdown-item" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
                Divani, Poltrone e Sedie
              </Link>
              <Link to="/servizi/materassi" className="dropdown-item" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
                Materassi
              </Link>
              <Link to="/servizi/tendaggi" className="dropdown-item" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
                Tendaggi
              </Link>
              <Link to="/servizi/tappeti" className="dropdown-item" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
                Tappeti
              </Link>
              <Link to="/servizi/interni-auto" className="dropdown-item" onClick={() => { setIsOpen(false); setDropdownOpen(false); }}>
                Interni Auto
              </Link>
            </div>
          </div>

          <Link to="/preventivo" className={`navbar-link ${location.pathname === '/preventivo' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Preventivo
          </Link>
          <Link to="/contatti" className={`navbar-link ${location.pathname === '/contatti' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Contatti
          </Link>
        </div>
      </div>
    </nav>
  );
}
