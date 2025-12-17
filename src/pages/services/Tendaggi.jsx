import { motion } from 'framer-motion';
import { Blinds, CheckCircle, Clock, Shield, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Tendaggi() {
  const benefits = [
    'Lavaggio senza rimozione',
    'Rispetto dei tessuti delicati',
    'Eliminazione polvere e allergeni',
    'Colori brillanti e ravvivati',
    'Asciugatura rapida',
    'Prodotti specifici per tendaggi'
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
              <Blinds size={80} />
            </div>
            <h1>Lavaggio Professionale Tendaggi</h1>
            <p className="service-subtitle">
              Pulizia accurata senza smontare le tue tende
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
              I tendaggi accumulano polvere, pollini e smog, diventando un ricettacolo di 
              allergeni. Il loro lavaggio tradizionale richiede lo smontaggio, il trasporto 
              in lavanderia e il successivo rimontaggio, con costi e tempi elevati.
            </p>
            <p>
              Il nostro servizio innovativo permette di lavare i tendaggi direttamente a 
              casa tua, senza rimuoverli dalle loro sedi. Utilizziamo prodotti specifici 
              che rispettano anche i tessuti più delicati, garantendo una pulizia profonda 
              e un'asciugatura rapida.
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
              <h3>Risparmio Tempo</h3>
              <p>Niente smontaggio e rimontaggio</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="info-card"
            >
              <Shield size={40} />
              <h3>Delicatezza</h3>
              <p>Trattamento sicuro per tutti i tessuti</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="info-card"
            >
              <Phone size={40} />
              <h3>Comodità</h3>
              <p>Veniamo noi da te, senza spostamenti</p>
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
            <h2>Tendaggi Puliti Senza Stress</h2>
            <p>Richiedi un preventivo gratuito per il lavaggio dei tuoi tendaggi</p>
            <Link to="/preventivo" className="btn btn-primary btn-lg">
              Richiedi Preventivo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
