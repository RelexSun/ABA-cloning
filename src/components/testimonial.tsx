"use client";

import { useEffect } from "react";
import keyadvantages from "../../data/keyadvantages.json";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import logo1 from "../../public/1.svg";
import logo2 from "../../public/2.svg";
import logo3 from "../../public/3.svg";
import logo4 from "../../public/4.svg";
import logo5 from "../../public/5.svg";
import logo6 from "../../public/6.svg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";

const Testimonial = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <div className="sm:hidden px-14 ">
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
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                  <div data-aos="zoom-out">
                    <Image src={logos[index]} alt="logo" />
                  </div>
                </div>
                <h1 className="font-semibold">{data.title}</h1>
                <p>{data.description}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
      <div className="grid max-sm:hidden sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-5 lg:px-10 text-center ">
        {keyadvantages.map((data, index) => (
          <div key={data.id}>
            <div className="flex flex-col items-center text-center gap-2 h-60">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                <div data-aos="zoom-out">
                  <Image src={logos[index]} alt="logo" />
                </div>
              </div>
              <h1 className="font-semibold md:text-lg xl:text-xl">
                {data.title}
              </h1>
              <p className="md:max-w-[200px] text-[13px] lg:max-w-[240px] lg:text-sm xl:max-w-[250px] xl:text-[16px] min-[1330px]:text-lg">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
