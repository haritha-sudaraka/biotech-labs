import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
import {Comment} from '../'
import './carousel.css'

const Carousel = () => {
  const data = require('./comments.json')


    return (
        <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item,index) => (
            <SwiperSlide key={index}>
                <Comment name={item.name} comment={item.comment} rate={item.rate}/>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default Carousel