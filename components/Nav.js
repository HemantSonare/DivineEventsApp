// components/Nav.js

import { useEffect, useState } from "react";

export default function Nav() {
  const [elevate, setElevate] = useState(false);

  useEffect(() => {
    const handler = () => setElevate(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`nav-wrap ${elevate ? "nav-elevate" : ""}`}>
      <nav className="nav container">

        {/* ---- PREMIUM LOGO ---- */}
        <a href="#home" className="logo">
          <img src="/logo.png" alt="Divine Events Logo" className="nav-logo-img" />
        </a>

        {/* ---- NAV LINKS ---- */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>
    </header>
  );
}
