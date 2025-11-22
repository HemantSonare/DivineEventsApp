// components/PremiumGallery.js
import { useEffect, useState, useRef } from "react";

const gallerySets = [
  ["/images/gallery/g1.jpeg", "/images/gallery/g10.jpeg", "/images/gallery/g11.jpeg"],
  ["/images/gallery/g12.jpeg", "/images/gallery/g13.jpeg", "/images/gallery/g14.jpeg"],
  ["/images/gallery/g15.jpeg", "/images/gallery/g16.jpeg", "/images/gallery/g17.jpeg"],
  ["/images/gallery/g18.jpeg", "/images/gallery/g2.jpeg", "/images/gallery/g3.jpeg"],
  ["/images/gallery/g4.jpeg", "/images/gallery/g5.jpeg", "/images/gallery/g6.jpeg"],
  ["/images/gallery/g7.jpeg", "/images/gallery/g8.jpeg", "/images/gallery/g9.jpeg"],
];

export default function PremiumGallery() {
  const [indexes, setIndexes] = useState(gallerySets.map(() => 0));
  const timersRef = useRef([]);
  const containerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // staggered intervals for premium timing
    timersRef.current = gallerySets.map((set, i) =>
      setInterval(() => {
        if (!paused) {
          setIndexes((prev) => {
            const updated = [...prev];
            updated[i] = (prev[i] + 1) % set.length;
            return updated;
          });
        }
      }, 4200 + i * 900) // slow cinematic intervals
    );
    return () => timersRef.current.forEach(clearInterval);
  }, [paused]);

  // Pause animations when out of view (saves battery & looks professional)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setPaused(!entry.isIntersecting));
      },
      { root: null, threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // mouse parallax/tilt
  useEffect(() => {
    const onMove = (e) => {
      const tiles = document.querySelectorAll(".gallery-tile-3d");
      const winW = window.innerWidth;
      const winH = window.innerHeight;
      const x = (e.clientX / winW) * 2 - 1;
      const y = (e.clientY / winH) * 2 - 1;
      tiles.forEach((t, i) => {
        const rotateY = x * 6 * (i % 3 === 0 ? 1.0 : 0.8);
        const rotateX = -y * 6 * (i % 2 === 0 ? 1.0 : 0.8);
        t.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      });
    };

    const onLeave = () => {
      const tiles = document.querySelectorAll(".gallery-tile-3d");
      tiles.forEach((t) => (t.style.transform = ""));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // device tilt for mobile (safe, subtle)
  useEffect(() => {
    const onTilt = (e) => {
      const gamma = e.gamma || 0; // left to right
      const beta = e.beta || 0; // front to back
      const tiles = document.querySelectorAll(".gallery-tile-3d");
      tiles.forEach((t, i) => {
        const ry = (gamma / 30) * (i % 3 === 0 ? 1.0 : 0.7);
        const rx = (beta / 30) * (i % 2 === 0 ? 1.0 : 0.7);
        t.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      });
    };
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", onTilt, true);
      return () => window.removeEventListener("deviceorientation", onTilt);
    }
  }, []);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container" ref={containerRef}>
        <h2 className="section-title">Gallery</h2>
        <p className="section-sub">Cinematic highlights from elegant celebrations.</p>

        {/* ambient particle layer (absolute) */}
        <div className="gallery-particles" aria-hidden="true" />

        {/* grid */}
        <div className="gallery-grid-3d">
          {gallerySets.map((set, i) => (
            <div className="gallery-tile-3d" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              {/* multiple images stacked; only active has class active */}
              {set.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`gallery-${i}-${idx}`}
                  className={indexes[i] === idx ? "active" : ""}
                />
              ))}

              {/* gold shimmer + soft vignette */}
              <div className="shine" />
              <div className="tile-vignette" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
