import { motion } from 'framer-motion';
import { Sofa, CheckCircle, Clock, Shield, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Divani() {
  const benefits = [
    'Rimozione macchie difficili e persistenti',
    'Eliminazione di odori sgradevoli',
    'Igienizzazione profonda anti-acari',
    'Protezione dei tessuti',
    'Asciugatura rapida',
    'Prodotti eco-compatibili'
  ];

  const process = [
    {
      step: 1,
      title: 'Ispezione',
      description: 'Valutiamo il tipo di tessuto e le macchie presenti'
    },
    {
      step: 2,
      title: 'Pre-trattamento',
      description: 'Applichiamo prodotti specifici sulle macchie più ostinate'
    },
    {
      step: 3,
      title: 'Pulizia Profonda',
      description: 'Utilizziamo macchinari professionali ad estrazione'
    },
    {
      step: 4,
      title: 'Sanificazione',
      description: 'Igienizziamo eliminando batteri, acari e allergeni'
    },
    {
      step: 5,
      title: 'Protezione',
      description: 'Applichiamo un trattamento protettivo (opzionale)'
    }
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="service-hero-content"
          >
            <div className="service-icon-large">
              <Sofa size={80} />
            </div>
            <h1>Pulizia Divani, Poltrone e Sedie</h1>
            <p className="service-subtitle">
              Smacchiamento e igienizzazione professionale per tutti i tipi di tappezzeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
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
              I divani, le poltrone e le sedie sono tra gli arredi più utilizzati in casa e 
              in ufficio. Con l'uso quotidiano accumulano polvere, acari, batteri e macchie 
              che possono comprometterne l'aspetto e l'igiene. Il nostro servizio di pulizia 
              professionale restituisce nuova vita alla tua tappezzeria.
            </p>
            <p>
              Utilizziamo tecnologie all'avanguardia e prodotti certificati che puliscono in 
              profondità senza danneggiare i tessuti. Il nostro metodo ad estrazione garantisce 
              la rimozione dello sporco più profondo e un'asciugatura rapida, permettendoti di 
              utilizzare nuovamente i tuoi arredi in poche ore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* Process Section */}
      <section className="service-process">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Il Nostro Processo</h2>
            <p>5 fasi per un risultato perfetto</p>
          </motion.div>

          <div className="process-grid">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="process-card"
              >
                <div className="process-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards */}
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
              <p>Asciugatura veloce, utilizzo dopo 3-4 ore</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="info-card"
            >
              <Shield size={40} />
              <h3>Garanzia</h3>
              <p>Risultati garantiti o intervento gratuito</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="info-card"
            >
              <Phone size={40} />
              <h3>Sopralluogo Gratuito</h3>
              <p>Preventivo personalizzato senza impegno</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-box"
          >
            <h2>Vuoi Pulire i Tuoi Divani?</h2>
            <p>Richiedi un preventivo gratuito e personalizzato</p>
            <Link to="/preventivo" className="btn btn-primary btn-lg">
              Richiedi Preventivo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
