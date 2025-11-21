// components/Services.js
import { useState } from "react";

const events = [
  { title: "Haldi Ceremony", img: "/images/events/haldi.jpg" },
  { title: "Mehndi Event", img: "/images/events/mehndi.jpg" },
  { title: "Birthday Party", img: "/images/events/birthday.jpg" },
  { title: "Baby Shower", img: "/images/events/babyshower.jpg" },
  { title: "Baby Welcome", img: "/images/events/babywelcome.jpg" },
  { title: "Marriage Event", img: "/images/events/marriage.jpg" },
  { title: "Pooja Ceremony", img: "/images/events/pooja.jpg" },
  { title: "Inauguration Event", img: "/images/events/inauguration.jpg" },
  { title: "Anniversary Party", img: "/images/events/anniversary.jpg" },
];

export default function Services() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % events.length);
  const prev = () => setIndex((index - 1 + events.length) % events.length);

  const active = events[index];

  return (
    <section id="services" className="section">
      <div className="container">

        <h2 className="section-title">Our Event Expertise</h2>
        <p className="section-sub">We craft every celebration with elegance and luxury.</p>

        <div className="event-carousel">

          <div className="event-card">
            <img src={active.img} alt={active.title} />
            <h3>{active.title}</h3>
          </div>

          <div className="carousel-buttons">
            <button onClick={prev}>‹</button>
            <button onClick={next}>›</button>
          </div>

        </div>

      </div>
    </section>
  );
}
