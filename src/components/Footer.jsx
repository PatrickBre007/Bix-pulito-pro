import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <img src="/images/logos/b.png" alt="BixPulito PRO" className="footer-logo" />
          <p>Specialisti nella pulizia professionale di tappezzeria e molto altro.</p>
        </div>

        <div className="footer-section">
          <h4>Servizi</h4>
          <ul>
            <li><Link to="/servizi/divani">Divani e Poltrone</Link></li>
            <li><Link to="/servizi/materassi">Materassi</Link></li>
            <li><Link to="/servizi/tendaggi">Tendaggi</Link></li>
            <li><Link to="/servizi/tappeti">Tappeti</Link></li>
            <li><Link to="/servizi/interni-auto">Interni Auto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Link Utili</h4>
          <ul>
            <li><Link to="/chi-siamo">Chi Siamo</Link></li>
            <li><Link to="/preventivo">Richiedi Preventivo</Link></li>
            <li><Link to="/contatti">Contattaci</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Seguici</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle />
            </a>
            <a href="mailto:info@bixpulitopro.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BixPulito PRO. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
