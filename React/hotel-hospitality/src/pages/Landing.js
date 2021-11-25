import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import Splash from "./Splash";
import SplashBtn from "./SplashBtn";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Landing() {
  return (
    <>
      <Swiper
        // effect="fade"
        pagination={{
          clickable: true,
        }}
        loop
        className="mySwiper"
      >
        <SwiperSlide>
          <Splash />
        </SwiperSlide>
        <SwiperSlide>
          <SplashBtn />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
