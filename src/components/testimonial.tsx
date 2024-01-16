"use client";
import keyadvantages from "../../data/keyadvantages.json";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <div className="sm:grid sm:grid-cols-2">
      <Swiper
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{ nextEl: "", prevEl: "" }}
        modules={[Navigation, Autoplay, Pagination]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="flex gap-4"
      >
        {keyadvantages.map((data, index) => (
          <SwiperSlide key={data.id}>
            <div className="flex flex-col items-center text-center gap-2 h-60">
              <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
              <h1 className="font-semibold">{data.title}</h1>
              <p>{data.description}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
