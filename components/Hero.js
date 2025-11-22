// components/Hero.js
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HERO_IMAGE, WHATSAPP_PHONE } from '../lib/constants';

export default function Hero(){
  const imgRef = useRef(null);

  // small parallax on scroll
  useEffect(()=>{
    const handler = () => {
      const y = window.scrollY || 0;
      if(imgRef.current){
        imgRef.current.style.transform = `translateY(${Math.min(y * 0.06, 40)}px) scale(1.06)`;
      }
    };
    handler();
    window.addEventListener('scroll', handler, { passive:true });
    return ()=> window.removeEventListener('scroll', handler);
  },[]);

  const openWhats = () => {
    const phone = WHATSAPP_PHONE.replace('+','');
    const text = encodeURIComponent('Hello, I would like to enquire about Divine Events.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-img-wrap" aria-hidden="true">
        <img ref={imgRef} src={HERO_IMAGE} alt="Premium event decor" className="hero-img" />
        <div className="hero-img-overlay" />
        <div className="hero-gold-film"></div>
        <div className="hero-particles" />
      </div>

      <div className="container hero-content">
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <h1 className="brand"><span className="serif">Divine</span> Events</h1>
          <div className="gold-line" />

          {/* ⭐ UPDATED PREMIUM SIMPLE CONTENT ⭐ */}
          <p className="lead">
            Beautiful weddings and celebrations, planned with love.  
            We turn your moments into unforgettable memories.
          </p>

          <div className="hero-ctas">
            <button className="btn-gold" onClick={openWhats}>Chat With Us</button>
            <a href="#services" className="btn-glass">Our Services</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
