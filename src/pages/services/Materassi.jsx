import { motion } from 'framer-motion';
import { Bed, CheckCircle, Clock, Shield, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Materassi() {
  const benefits = [
    'Eliminazione acari e allergeni',
    'Rimozione macchie e odori',
    'Igienizzazione profonda',
    'Ambiente di riposo più sano',
    'Asciugatura rapida',
    'Trattamento anti-batterico'
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
              <Bed size={80} />
            </div>
            <h1>Pulizia e Igienizzazione Materassi</h1>
            <p className="service-subtitle">
              Per un sonno sano e rigenerante in un ambiente pulito
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
              Il materasso è l'elemento più importante per garantire un riposo di qualità. 
              Tuttavia, nel tempo accumula polvere, acari, batteri, sudore e macchie che 
              possono causare allergie e disturbi del sonno.
            </p>
            <p>
              Il nostro servizio professionale di pulizia e igienizzazione materassi utilizza 
              tecnologie avanzate per eliminare in profondità sporco, acari e batteri, 
              restituendoti un materasso perfettamente pulito e igienizzato. Il trattamento 
              è sicuro per tutti i tipi di materasso e garantisce un'asciugatura rapida.
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
              <h3>Tempi Rapidi</h3>
              <p>Intervento veloce, utilizzo dopo 4-6 ore</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="info-card"
            >
              <Shield size={40} />
              <h3>Sicurezza</h3>
              <p>Prodotti certificati e ipoallergenici</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="info-card"
            >
              <Phone size={40} />
              <h3>Servizio a Domicilio</h3>
              <p>Veniamo direttamente a casa tua</p>
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
            <h2>Migliora la Qualità del Tuo Sonno</h2>
            <p>Richiedi un preventivo gratuito per la pulizia del tuo materasso</p>
            <Link to="/preventivo" className="btn btn-primary btn-lg">
              Richiedi Preventivo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
