import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Farmitra from "../../img/Farmitra.png";
import Gaurs from "../../img/logo-black.png";
import Tender from "../../img/tender.png";
import gratex from "../../img/gratex.png";
import pioneer from "../../img/logo.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a className="App-link"
          href="https://play.google.com/store/apps/details?id=com.bagic.farmitra&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Farmitra} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gaurs} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tender} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gratex} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pioneer} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
