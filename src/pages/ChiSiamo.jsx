import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, Shield, Sparkles } from 'lucide-react';

export default function ChiSiamo() {
  const values = [
    {
      icon: Award,
      title: 'Esperienza',
      description: 'Anni di esperienza nel settore della pulizia professionale di tappezzeria'
    },
    {
      icon: Users,
      title: 'Team Qualificato',
      description: 'Professionisti formati e certificati per garantire i migliori risultati'
    },
    {
      icon: Target,
      title: 'Precisione',
      description: 'Attenzione ai dettagli e cura in ogni intervento che realizziamo'
    },
    {
      icon: Heart,
      title: 'Passione',
      description: 'Amiamo il nostro lavoro e ci impegniamo per la soddisfazione del cliente'
    },
    {
      icon: Shield,
      title: 'Garanzia',
      description: 'Risultati garantiti e assicurazione su tutti i nostri servizi'
    },
    {
      icon: Sparkles,
      title: 'Innovazione',
      description: 'Utilizzo delle tecnologie e prodotti più avanzati sul mercato'
    }
  ];

  return (
    <div className="chi-siamo">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Chi Siamo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-subtitle"
          >
            La tua azienda di fiducia per la pulizia professionale
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-text-card"
            >
              <h2>La Nostra Storia</h2>
              <p>
                <strong>BixPulito PRO</strong> nasce dalla passione per la pulizia professionale e 
                dall'esperienza maturata in anni di attività nel settore della tappezzeria. 
                Siamo specialisti nello smacchiamento e nell'igienizzazione di divani, materassi, 
                poltrone, sedie, tendaggi, tappeti e interni auto.
              </p>
              <p>
                Il nostro team è composto da professionisti altamente qualificati che utilizzano 
                le tecnologie più avanzate e prodotti certificati per garantire risultati eccellenti. 
                Ogni intervento viene eseguito con la massima cura e attenzione ai dettagli.
              </p>
              <p>
                Crediamo fermamente nell'importanza di un ambiente pulito e sano, per questo 
                utilizziamo solo prodotti eco-compatibili che rispettano l'ambiente e la salute 
                delle persone. La soddisfazione dei nostri clienti è la nostra priorità assoluta.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-image"
            >
              <img src="/images/RAGA.png" alt="I Proprietari di BixPulito PRO" className="owners-image" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>I Nostri Valori</h2>
            <p>Ciò che ci rende unici e affidabili</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="value-card"
              >
                <div className="value-icon">
                  <value.icon size={40} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mission-content"
          >
            <h2>La Nostra Missione</h2>
            <p>
              Fornire servizi di pulizia professionale di altissima qualità, utilizzando 
              tecnologie innovative e prodotti eco-sostenibili. Vogliamo garantire ad ogni 
              cliente un ambiente pulito, sano e sicuro, superando sempre le aspettative 
              con professionalità, affidabilità e dedizione.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
