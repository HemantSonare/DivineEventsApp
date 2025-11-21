import { HERO_IMAGE } from '../lib/constants'
import { motion } from 'framer-motion'

export default function Hero(){
  const openWhats = () => {
    const phone = '+919999999999'.replace('+','')
    const text = encodeURIComponent('Hello, I would like to enquire about Divine Events - VIP booking.')
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
  }

  return (
    <section id="home" className="hero">
      <div className="hero-img-wrap" aria-hidden="true">
        <img src={HERO_IMAGE} className="hero-img" alt="Luxury wedding decor" />
        <div className="hero-img-overlay" />
        <div className="hero-particles" aria-hidden="true"></div>
      </div>

      <div className="container hero-content">
        <motion.div className="glass-card hero-card" initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:'easeOut' }}>
          <h1 className="brand"><span className="serif">Divine</span> Events</h1>
          <hr className="gold-line" />
          <p className="lead">Bespoke weddings & curated celebrations — crafted for clients who expect the extraordinary.</p>

          <div className="hero-ctas">
            <button className="btn-gold" onClick={openWhats}>Book Private Consultation</button>
            <a className="btn-outline" href="#services">Explore Services</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
