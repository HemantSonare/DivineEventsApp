// components/Services.js

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const events = [
  { title: "Haldi Ceremony", subtitle: "Vibrant yellow celebration", img: "/images/events/haldi.jpeg" },
  { title: "Mehndi Event", subtitle: "Traditional artistic beauty", img: "/images/events/mehndi.jpeg" },
  { title: "Birthday Party", subtitle: "Joy-filled memorable moments", img: "/images/events/birthday.jpeg" },
  { title: "Baby Shower", subtitle: "Blessings & celebrations", img: "/images/events/babyshower.jpeg" },
  { title: "Baby Welcome", subtitle: "Welcoming your little angel", img: "/images/events/babywelcome.jpeg" },
  { title: "Marriage Event", subtitle: "Elegant wedding arrangements", img: "/images/events/marriage.jpeg" },
  { title: "Pooja Ceremony", subtitle: "Divine traditional rituals", img: "/images/events/pooja.jpeg" },
  { title: "Inauguration Event", subtitle: "Opening with prosperity", img: "/images/events/inauguration.jpeg" },
  { title: "Anniversary Party", subtitle: "Celebrating pure love", img: "/images/events/anniversary.jpeg" },
];

export default function Services() {

  return (
    <section id="services" className="section">
      <div className="container">

        <h2 className="section-title">Our Event Expertise</h2>
        <p className="section-sub">We curate luxury experiences for every occasion.</p>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1.05}
          centeredSlides
          style={{ paddingBottom: "40px" }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="event-swipe-card">
                
                {/* IMAGE BACKGROUND */}
                <div
                  className="event-img"
                  style={{
                    backgroundImage: event.img ? `url(${event.img})` : "none"
                  }}
                />

                {/* TEXT OVERLAY */}
                <div className="event-overlay">
                  <h3>{event.title}</h3>
                  <p>{event.subtitle}</p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
