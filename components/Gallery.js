import { useEffect, useState } from "react";

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

  useEffect(() => {
    const intervals = gallerySets.map((set, i) =>
      setInterval(() => {
        setIndexes((prev) => {
          const updated = [...prev];
          updated[i] = (prev[i] + 1) % set.length;
          return updated;
        });
      }, 2800 + i * 600)
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-sub">Cinematic highlights from elegant celebrations.</p>

        <div className="gallery-grid-3d">
          {gallerySets.map((set, i) => (
            <div className="gallery-tile-3d" key={i}>
              
              {/* ALL IMAGES FROM THIS SET OVERLAPPED, ONLY ACTIVE ONE VISIBLE */}
              {set.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className={indexes[i] === idx ? "active" : ""}
                  alt="luxury-event"
                />
              ))}

              {/* GOLD SHIMMER */}
              <div className="shine"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
