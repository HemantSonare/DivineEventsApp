import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

export default function Gallery() {
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg'
  ];

  return (
    <section id="gallery" className="section alt">
      <div className="container">
        <h2 className="section-title light">Gallery</h2>
        <p className="section-sub light">
          A glimpse into the atmospheres, details, and emotions we create.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 3500 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="gallery-slide">
                <img src={src} alt={`Luxury event ${i + 1}`} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
