import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openWhatsApp = () => {
    const phone = '+919999999999'.replace('+','');
    const text = encodeURIComponent('Hello, I would like to enquire about a luxury event with Divine Events.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <header className={`nav-wrap ${scrolled ? 'nav-wrap--scrolled' : ''}`}>
      <div className="container nav">
        <a href="#home" className="logo">
          Divine <span>Events</span>
        </a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="btn-primary nav-cta" onClick={openWhatsApp}>
          Book via WhatsApp
        </button>
      </div>
    </header>
  );
}
