import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Preventivo() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    servizio: '',
    messaggio: '',
    privacy: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      alert('Devi accettare la privacy policy per continuare');
      return;
    }

    setSending(true);
    setError(null);

    try {
      // Sostituisci questi valori con i tuoi da EmailJS
      const serviceID = 'service_jzwhswu';
      const templateID = 'template_64b32nu';
      const publicKey = 'IqliX49QdHMP8-ifk';

      const templateParams = {
        from_name: `${formData.nome} ${formData.cognome}`,
        from_email: formData.email,
        phone: formData.telefono,
        service: formData.servizio,
        message: formData.messaggio,
        to_name: 'BixPulito PRO',
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitted(true);
      
      // Reset dopo 5 secondi
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          nome: '',
          cognome: '',
          email: '',
          telefono: '',
          servizio: '',
          messaggio: '',
          privacy: false
        });
      }, 5000);
    } catch (err) {
      console.error('Errore invio email:', err);
      setError('Si è verificato un errore. Riprova più tardi o contattaci direttamente.');
    } finally {
      setSending(false);
    }
  };

  const services = [
    'Divani, Poltrone e Sedie',
    'Materassi',
    'Tendaggi',
    'Tappeti',
    'Interni Auto',
    'Altro'
  ];

  if (submitted) {
    return (
      <div className="preventivo-page">
        <section className="success-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="success-content"
            >
              <CheckCircle size={80} className="success-icon" />
              <h2>Richiesta Inviata!</h2>
              <p>Grazie per averci contattato. Ti risponderemo al più presto con un preventivo personalizzato.</p>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="preventivo-page">
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Richiedi un Preventivo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="page-subtitle"
          >
            Compila il form e riceverai un preventivo gratuito e personalizzato
          </motion.p>
        </div>
      </section>

      <section className="form-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="form-container"
          >
            <form onSubmit={handleSubmit} className="preventivo-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nome">Nome *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Il tuo nome"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cognome">Cognome *</label>
                  <input
                    type="text"
                    id="cognome"
                    name="cognome"
                    value={formData.cognome}
                    onChange={handleChange}
                    required
                    placeholder="Il tuo cognome"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tua@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Telefono *</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    placeholder="+39 123 456 7890"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="servizio">Servizio Richiesto *</label>
                <select
                  id="servizio"
                  name="servizio"
                  value={formData.servizio}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleziona un servizio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="messaggio">Messaggio</label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Descrivi brevemente le tue esigenze..."
                />
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    Accetto il trattamento dei dati personali secondo la normativa privacy *
                  </span>
                </label>
              </div>

              {error && (
                <div style={{ 
                  padding: '1rem', 
                  backgroundColor: '#fee2e2', 
                  color: '#dc2626', 
                  borderRadius: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {error}
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
                <Send size={20} />
                {sending ? 'Invio in corso...' : 'Invia Richiesta'}
              </button>
            </form>

            <div className="form-info">
              <h3>Cosa Succede Dopo?</h3>
              <ul>
                <li>Riceverai una conferma via email</li>
                <li>Ti contatteremo entro 24 ore</li>
                <li>Valuteremo insieme le tue esigenze</li>
                <li>Riceverai un preventivo personalizzato gratuito</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
