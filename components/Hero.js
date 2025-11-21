import { motion } from 'framer-motion';

export default function Hero() {
  const openWhatsApp = () => {
    const phone = '+917067869093'.replace('+','');
    const text = encodeURIComponent('Hello, I would like to enquire about a luxury event with Divine Events.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-img-wrap" aria-hidden="true">
        <img
          src="/videos/hero.jpg"
          className="hero-img"
          alt="Luxury wedding decor"
        />
        <div className="hero-img-overlay" />
      </div>


      <div className="container hero-content">
        <motion.div
          className="glass-card hero-card"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="brand">
            <span className="serif">Divine</span> Events
          </h1>
          <p className="lead">
            Ultra-luxury weddings & celebrations curated end-to-end — from
            vision and décor to entertainment, hospitality, and guest
            experience. Designed for clients who expect the extraordinary.
          </p>

          <div className="hero-ctas">
            <button className="btn-primary" onClick={openWhatsApp}>
              Book a Private Consultation
            </button>
            <a href="#services" className="btn-outline">
              Explore Services
            </a>
          </div>

          <div className="hero-features" aria-hidden="true">
            <div>
              <strong>Signature Weddings</strong>
              <span>Concept to execution</span>
            </div>
            <div>
              <strong>Destination Ready</strong>
              <span>Across India & abroad</span>
            </div>
            <div>
              <strong>Full White-Glove</strong>
              <span>Concierge experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
