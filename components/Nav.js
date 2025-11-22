// components/Nav.js

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger icons

export default function Nav() {
  const [elevate, setElevate] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setElevate(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`nav-wrap ${elevate ? "nav-elevate" : ""}`}>
      <nav className="nav container">

        {/* ---- LOGO ---- */}
        <a href="#home" className="logo">
          <img src="/logo.png" alt="Divine Events Logo" className="nav-logo-img" />
        </a>

        {/* ---- MOBILE HAMBURGER ---- */}
        <button
          className="nav-menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* ---- NAV LINKS ---- */}
        <div className={`nav-links ${open ? "open" : ""}`}>
          <a onClick={() => setOpen(false)} href="#home">Home</a>
          <a onClick={() => setOpen(false)} href="#services">Services</a>
          <a onClick={() => setOpen(false)} href="#gallery">Gallery</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
        </div>

      </nav>
    </header>
  );
}
