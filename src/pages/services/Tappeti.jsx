import { motion } from 'framer-motion';
import { PawPrint, CheckCircle, Clock, Shield, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Tappeti() {
  const benefits = [
    'Rimozione macchie profonde',
    'Eliminazione odori persistenti',
    'Pulizia profonda delle fibre',
    'Colori ravvivati',
    'Trattamento anti-acaro',
    'Adatto a tutti i tipi di tappeto'
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="service-hero-content"
          >
            <div className="service-icon-large">
              <PawPrint size={80} />
            </div>
            <h1>Pulizia Professionale Tappeti</h1>
            <p className="service-subtitle">
              Cura e igienizzazione per tutti i tipi di tappeto
            </p>
          </motion.div>
        </div>
      </section>

      <section className="service-description">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Il Nostro Servizio</h2>
            <p>
              I tappeti sono elementi d'arredo pregiati che richiedono cure specifiche. 
              Con il tempo accumulano polvere, sporco, macchie e odori che l'aspirapolvere 
              non riesce a rimuovere completamente.
            </p>
            <p>
              Il nostro servizio di pulizia professionale tappeti utilizza tecniche e 
              prodotti specifici per ogni tipo di fibra, dai tappeti persiani a quelli 
              moderni. Garantiamo una pulizia profonda che rispetta i colori e le fibre 
              delicate, restituendo al tuo tappeto la bellezza originale.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="service-benefits">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Vantaggi del Nostro Servizio</h2>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="benefit-item"
              >
                <CheckCircle className="benefit-icon" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-info">
        <div className="container">
          <div className="info-cards">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="info-card"
            >
              <Clock size={40} />
              <h3>Servizio Completo</h3>
              <p>Ritiro e riconsegna a domicilio</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="info-card"
            >
              <Shield size={40} />
              <h3>Esperienza</h3>
              <p>Specialisti in tappeti pregiati</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="info-card"
            >
              <Phone size={40} />
              <h3>Valutazione Gratuita</h3>
              <p>Sopralluogo e preventivo senza impegno</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-box"
          >
            <h2>Restituisci Bellezza ai Tuoi Tappeti</h2>
            <p>Richiedi un preventivo gratuito per la pulizia professionale</p>
            <Link to="/preventivo" className="btn btn-primary btn-lg">
              Richiedi Preventivo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
