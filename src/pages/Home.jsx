import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sofa, Bed, Blinds, PawPrint, Car, CheckCircle, Star, ArrowRight } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Sofa,
      title: 'Divani, Poltrone e Sedie',
      description: 'Smacchiamento e igienizzazione profonda per tutti i tipi di tappezzeria',
      path: '/servizi/divani'
    },
    {
      icon: Bed,
      title: 'Materassi',
      description: 'Pulizia e sanificazione per un riposo sano e sicuro',
      path: '/servizi/materassi'
    },
    {
      icon: Blinds,
      title: 'Tendaggi',
      description: 'Lavaggio professionale senza rimuoverli dalla loro sede',
      path: '/servizi/tendaggi'
    },
    {
      icon: PawPrint,
      title: 'Tappeti',
      description: 'Pulizia accurata e rimozione di macchie e odori',
      path: '/servizi/tappeti'
    },
    {
      icon: Car,
      title: 'Interni Auto',
      description: 'Detailing completo per sedili, tappezzeria e interni',
      path: '/servizi/interni-auto'
    }
  ];

  const features = [
    'Prodotti professionali certificati',
    'Tecnici qualificati e esperti',
    'Interventi rapidi ed efficaci',
    'Risultati garantiti al 100%',
    'Rispetto dell\'ambiente',
    'Prezzi competitivi'
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-logo"
          >
            <img src="/images/logos/a.png" alt="BixPulito PRO" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Smacchiamento e igienizzazione per divani, materassi, tappeti e molto altro. 
            Esperienza, professionalità e risultati eccellenti.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons"
          >
            <Link to="/preventivo" className="btn btn-primary">
              Richiedi Preventivo
            </Link>
            <Link to="/chi-siamo" className="btn btn-secondary">
              Scopri di più
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>I Nostri Servizi</h2>
            <p>Soluzioni professionali per ogni esigenza di pulizia</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="service-icon">
                  <service.icon size={40} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.path} className="service-link">
                  Scopri di più <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Perché Sceglierci</h2>
            <p>La qualità che fa la differenza</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="feature-item"
              >
                <CheckCircle className="feature-icon" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-content"
          >
            <Star className="cta-icon" />
            <h2>Pronto per un Pulito Professionale?</h2>
            <p>Richiedi un preventivo gratuito e senza impegno</p>
            <Link to="/preventivo" className="btn btn-primary btn-lg">
              Richiedi Preventivo Gratuito
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
