import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';

export default function Contatti() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefono',
      info: '+39 123 456 7890',
      link: 'tel:+391234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@bixpulitopro.com',
      link: 'mailto:info@bixpulitopro.com'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: 'Scrivici su WhatsApp',
      link: 'https://wa.me/391234567890'
    },
    {
      icon: MapPin,
      title: 'Zona di Servizio',
      info: 'Serviamo tutta la provincia',
      link: null
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      link: 'https://instagram.com/bixpulitopro',
      handle: '@bixpulitopro'
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      name: 'TikTok',
      link: 'https://tiktok.com/@bixpulitopro',
      handle: '@bixpulitopro'
    }
  ];

  const orari = [
    { giorno: 'Lunedì - Venerdì', orario: '8:00 - 19:00' },
    { giorno: 'Sabato', orario: '9:00 - 17:00' },
    { giorno: 'Domenica', orario: 'Chiusi' }
  ];

  return (
    <div className="contatti-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contattaci
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-subtitle"
          >
            Siamo a tua disposizione per qualsiasi informazione
          </motion.p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="contact-card"
              >
                {contact.link ? (
                  <a href={contact.link} className="contact-link">
                    <div className="contact-icon">
                      <contact.icon size={32} />
                    </div>
                    <h3>{contact.title}</h3>
                    <p>{contact.info}</p>
                  </a>
                ) : (
                  <>
                    <div className="contact-icon">
                      <contact.icon size={32} />
                    </div>
                    <h3>{contact.title}</h3>
                    <p>{contact.info}</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="schedule-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="schedule-container"
          >
            <div className="schedule-header">
              <Clock size={40} />
              <h2>Orari di Lavoro</h2>
            </div>
            <div className="schedule-list">
              {orari.map((item, index) => (
                <div key={index} className="schedule-item">
                  <span className="schedule-day">{item.giorno}</span>
                  <span className="schedule-time">{item.orario}</span>
                </div>
              ))}
            </div>
            <p className="schedule-note">
              * Su appuntamento è possibile concordare interventi anche al di fuori degli orari indicati
            </p>
          </motion.div>
        </div>
      </section>

      <section className="social-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="social-container"
          >
            <h2>Seguici sui Social</h2>
            <p>Resta aggiornato su offerte, consigli e novità</p>
            
            <div className="social-cards">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="social-card"
                >
                  <div className="social-icon">
                    <social.icon size={32} />
                  </div>
                  <h3>{social.name}</h3>
                  <p>{social.handle}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cta-contact-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-content"
          >
            <h2>Hai Bisogno di Aiuto?</h2>
            <p>Il nostro team è pronto a rispondere a tutte le tue domande</p>
            <div className="cta-buttons">
              <a href="tel:+391234567890" className="btn btn-primary">
                <Phone size={20} />
                Chiamaci Ora
              </a>
              <a href="https://wa.me/391234567890" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
