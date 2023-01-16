import React,{useEffect} from "react";
import "..//styles/Swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const data = [
  {
    id: 1,
    date: "22.12.2022",
    label: "New site design",
    description:
      "Our designer has created a new design for the site, do you like it?",
    article: "DESIGN",
  },
  {
    id: 2,
    date: "20.12.2022",
    label: "Replenishment in the team",
    description:
      "We have found a new person for our Saton team, he will be the designer of our website and app",
    article: "NEWS",
  },
  {
    id: 3,
    date: "12.08.2022",
    label: "Update 1.1",
    description:
      "We updated our application to 1.1\nWhat`s new?\n\t- New dark theme;\n\t- Bug fixes.",
    article: "DESIGN",
  }
];

const SwiperDiv = () => {

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }, []);

  return (
    <div className="slider-wrap">
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: 2,
          },
          1680: {
            slidesPerView: 3,
          },
        }}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map((slider) => (
          <SwiperSlide key={slider.id} className="slide">
            <div className="slide-container">
              <div className="slide-top">
                <div className="slide-date">{slider.date}</div>
                <h1 className="slide-label">{slider.label}</h1>
                <p className="slide-desc">{slider.description}</p>
              </div>
              <div className="slide-bottom">
                <div className="aticle-wrapper">
                  <p className="slide-article">{slider.article}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperDiv;