import { useEffect, useState } from 'react'
import { WHATSAPP_PHONE } from '../lib/constants'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openWhatsAp = () => {
    const phone = WHATSAPP_PHONE.replace('+','')
    const text = encodeURIComponent('Hello, I would like to enquire about a luxury wedding.')
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
  }

  return (
    <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav">
        <a href="#home" className="logo">Divine <span>Events</span></a>
        <nav className="nav-links" role="navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <button className="btn-outline" onClick={()=>window.scrollTo({top:document.body.scrollHeight, behavior:'smooth'})}>Get Brochure</button>
          <button className="btn-gold" onClick={openWhatsAp}>Book via WhatsApp</button>
        </div>
      </div>
    </header>
  )
}
