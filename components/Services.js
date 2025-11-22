// components/Services.js

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/effect-fade";


const events = [
  { title: "Haldi Ceremony", subtitle: "Bright and joyful yellow-themed décor", img: "/images/events/haldi.jpeg" },
  { title: "Mehndi Function", subtitle: "Colourful, vibrant setup for your mehndi day", img: "/images/events/mehndi.jpeg" },
  { title: "Birthday Celebration", subtitle: "Beautiful décor to make birthdays memorable", img: "/images/events/birthday.jpeg" },
  { title: "Baby Shower", subtitle: "Soft and pretty themes for welcoming motherhood", img: "/images/events/babyshower.jpeg" },
  { title: "Baby Welcome", subtitle: "Warm and lovely décor to welcome your newborn", img: "/images/events/babywelcome.jpeg" },
  { title: "Wedding Event", subtitle: "Elegant arrangements for your big day", img: "/images/events/marriage.jpeg" },
  { title: "Pooja Ceremony", subtitle: "Pure and peaceful décor for rituals", img: "/images/events/pooja.jpeg" },
  { title: "Inauguration Event", subtitle: "Simple and premium setups for openings", img: "/images/events/inauguration.jpeg" },
  { title: "Anniversary Celebration", subtitle: "Romantic décor to celebrate your journey", img: "/images/events/anniversary.jpeg" },
];

export default function Services() {

  return (
    <section id="services" className="section">
      <div className="container">

        {/* ⭐ UPDATED SECTION TITLE & SUBTEXT ⭐ */}
        <h2 className="section-title">Our Event Expertise</h2>
        <p className="section-sub">
          We design beautiful and premium setups for every special moment.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1.15}
          centeredSlides
          speed={1400}
          spaceBetween={30}
          style={{ paddingBottom: "50px" }}
        >

          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="event-swipe-card">

                {/* IMAGE BACKGROUND */}
                <div
                  className="event-img"
                  style={{
                    backgroundImage: event.img
                      ? `url(${event.img})`
                      : "none"
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
