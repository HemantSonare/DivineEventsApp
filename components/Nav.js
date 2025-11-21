// components/Nav.js
import { useEffect, useState } from 'react';
import { WHATSAPP_PHONE } from '../lib/constants';

export default function Nav(){
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive:true });
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  const openWhats = () => {
    const phone = WHATSAPP_PHONE.replace('+','');
    const text = encodeURIComponent('Hello, I would like to enquire about a luxury wedding.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <header className={`nav-wrap ${scrolled ? 'nav-elevate' : ''}`}>
      <div className="container nav">
      <a href="#home" className="logo">
        <img src="/logo.png" alt="Divine Events Logo" className="nav-logo-img" />
      </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="btn-gold" onClick={openWhats}>
            Book via WhatsApp
          </button>

          {/* Mobile toggle */}
          <button aria-label="Toggle menu" onClick={()=>setOpen(!open)} style={{marginLeft:8, display:'none'}} id="mobileToggle">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile overlay menu (simple) */}
      {open && (
        <div style={{
          position:'fixed', inset:0, zIndex:90, background:'linear-gradient(180deg, rgba(18,6,30,0.98), rgba(10,2,18,0.95))', display:'flex',
          alignItems:'center', justifyContent:'center', padding:20
        }}>
          <div style={{textAlign:'center'}}>
            <a href="#home" onClick={()=>setOpen(false)} style={{display:'block', padding:12, fontSize:20}}>Home</a>
            <a href="#services" onClick={()=>setOpen(false)} style={{display:'block', padding:12, fontSize:20}}>Services</a>
            <a href="#gallery" onClick={()=>setOpen(false)} style={{display:'block', padding:12, fontSize:20}}>Gallery</a>
            <a href="#contact" onClick={()=>setOpen(false)} style={{display:'block', padding:12, fontSize:20}}>Contact</a>
            <button className="btn-gold" onClick={openWhats} style={{marginTop:18}}>Chat on WhatsApp</button>
          </div>
        </div>
      )}
    </header>
  );
}
