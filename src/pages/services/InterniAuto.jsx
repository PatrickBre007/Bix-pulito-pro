import { motion } from 'framer-motion';
import { Car, CheckCircle, Clock, Shield, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InterniAuto() {
  const benefits = [
    'Pulizia sedili e tappezzeria',
    'Igienizzazione completa abitacolo',
    'Rimozione odori sgradevoli',
    'Pulizia tappetini e bagagliaio',
    'Detailing professionale',
    'Protezione superfici'
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
              <Car size={80} />
            </div>
            <h1>Pulizia Interni Auto</h1>
            <p className="service-subtitle">
              Detailing completo per un abitacolo perfetto
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
              L'abitacolo della tua auto merita la stessa cura degli altri ambienti che 
              frequenti ogni giorno. Sedili, tappezzeria e tappetini accumulano sporco, 
              polvere e batteri che possono compromettere il comfort e l'igiene.
            </p>
            <p>
              Il nostro servizio di pulizia interni auto offre un trattamento completo 
              che include la pulizia profonda dei sedili, della tappezzeria, dei tappetini 
              e del bagagliaio. Utilizziamo prodotti specifici per automotive che puliscono, 
              igienizzano e proteggono tutte le superfici interne.
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
              <h3>Rapido</h3>
              <p>Intervento in poche ore</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="info-card"
            >
              <Shield size={40} />
              <h3>Prodotti Specifici</h3>
              <p>Detergenti professionali per automotive</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="info-card"
            >
              <Phone size={40} />
              <h3>Servizio Mobile</h3>
              <p>Veniamo dove preferisci tu</p>
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
            <h2>Rendi la Tua Auto Come Nuova</h2>
            <p>Richiedi un preventivo gratuito per la pulizia degli interni</p>
            <Link to="/preventivo" className="btn btn-primary btn-lg">
              Richiedi Preventivo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
