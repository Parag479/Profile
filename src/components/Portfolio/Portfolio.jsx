import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Farmitra from "../../img/Farmitra.png";
import Gaurs from "../../img/logo-black.png";
import Tender from "../../img/tender.png";
import gratex from "../../img/gratex.jpg";
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
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"

        breakpoints={{
          320: {
            slidesPerView: 1,
          },
        
          
        }}
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
        <a className="App-link"
          href="http://www.gaursonsindia.com/platinum-towers-landing-page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Gaurs} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a className="App-link"
          href="http://www.tenderfreshicecreams.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Tender} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a className="App-link"
          href="https://www.gratex.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gratex} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a className="App-link"
          href="https://bimetalliclugs.in/pages/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={pioneer} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
