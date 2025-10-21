import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { useState, useRef } from "react";

import slide1 from "/hero-1.jpg";
import slide2 from "/hero-2.jpg";
import slide3 from "/hero-3.jpg";

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null); // Reference to Swiper instance

  return (
    <section className="relative h-[85vh] w-screen overflow-hidden sm:h-[90vh]">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={4000}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {[slide1, slide2, slide3].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image with Incoming Grow and Outgoing Zoom Out */}
              <img
                src={slide}
                alt="Slide"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[4000ms] ease-in ${
                  activeIndex === index
                    ? "scale-100 opacity-100" // Incoming slide grows to full
                    : "scale-125 opacity-0" // Outgoing slide zooms out & fades
                }`}
              />

              <img
                src="/object1.png"
                alt=""
                className="absolute left-0 top-0 z-10 object-cover"
              />

              {/* Overlay & Left-Aligned Text */}
              <div className="absolute inset-0 flex items-center justify-start bg-black/40 px-3 text-white sm:px-12">
                <div className="max-w-2xl space-y-4 sm:space-y-8">
                  <h4
                    className={`w-fit bg-siteRed px-4 py-1 text-sm font-semibold capitalize tracking-wider transition-transform duration-1000 ease-in-out sm:text-lg ${
                      activeIndex === index
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[100vw] opacity-0"
                    }`}
                  >
                    {index === 0 && "Your most trusted partners"}
                    {index === 1 && "Your most trusted partners"}
                    {index === 2 && "Your most trusted partners"}
                  </h4>
                  <h1
                    className={`w-full text-5xl font-extrabold capitalize transition-transform duration-[2s] ease-out sm:max-w-xl sm:text-7xl ${
                      activeIndex === index
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[100vw] opacity-0"
                    }`}
                  >
                    {index === 0 && "Immigration & visa consulting here..."}
                    {index === 1 && "Immigration & visa consulting here..."}
                    {index === 2 && "Immigration & visa consulting here..."}
                  </h1>

                  <p
                    className={`mt-4 w-full text-lg transition-transform delay-200 duration-[2s] ease-out sm:max-w-xl sm:text-xl ${
                      activeIndex === index
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[100vw] opacity-0"
                    }`}
                  >
                    {index === 0 &&
                      "Top universities, career opportunities, and a world-class education in the USA."}
                    {index === 1 &&
                      "High-quality education, work opportunities, and a path to permanent residency in Canada."}
                    {index === 2 &&
                      "Study in Europe's best universities and experience diverse cultures and education systems."}
                  </p>

                  <a
                    href="/contact-us"
                    className={`mt-6 inline-block bg-siteRed px-8 py-3 text-lg font-semibold tracking-wider transition-transform delay-500 duration-[2s] ease-out sm:py-4 ${
                      activeIndex === index
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[100vw] opacity-0"
                    }`}
                  >
                    {index === 0 && "Get Your Visa"}
                    {index === 1 && "Apply Now"}
                    {index === 2 && "Start Your Journey"}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots (Now Clickable & Always Visible) */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 space-x-3">
        {[...Array(3)].map((_, i) => (
          <button
            key={i}
            className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none ${
              activeIndex === i ? "h-4 w-4 bg-siteRed" : "bg-white opacity-80"
            }`}
            onClick={() => swiperRef.current?.swiper.slideToLoop(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
