"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button } from "@/components/ui/button";

const DeveloperSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-16 grid gap-20 overflow-hidden">
      <div className=" flex flex-col items-center sm:flex-row-reverse gap-10 border">
        <div className="w-full">
          <h1 className="text-xl md:text-[26px] lg:text-[28px] xl:text-[38px] leading-[32px] xl:leading-[48px] font-bold text-slate-700 lg:max-w-[250px] xl:max-w-[330px] 2xl:max-w-full border ">
            Multiple Payment Methods
          </h1>
          <div className="lg:mt-6 sm:mt-[14px] md:mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quasi cupiditate libero atque doloribus fuga odio modi quidem
              quibusdam, vitae amet, distinctio debitis consequatur minus
              voluptatem cumque facilis! Quod, nisi?
            </p>
          </div>
        </div>
        <div className="img w-full h-60 bg-cyan-500" data-aos="zoom-out"></div>
      </div>
      <div className="flex flex-col items-center sm:flex-row gap-10 border">
        <div className="w-full">
          <h1 className="text-xl md:text-[26px] lg:text-[28px] xl:text-[38px] leading-[32px] xl:leading-[48px] font-bold text-slate-700 lg:max-w-[250px] xl:max-w-[330px] 2xl:max-w-full border  ">
            Real-time Merchant Portal
          </h1>
          <div className="lg:mt-6 sm:mt-[14px] md:mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quasi cupiditate libero atque doloribus fuga odio modi quidem
              quibusdam, vitae amet, distinctio debitis consequatur minus
              voluptatem cumque facilis! Quod, nisi?
            </p>
          </div>
        </div>
        <div className="img w-full h-60 bg-cyan-500" data-aos="zoom-out"></div>
      </div>

      <div className="flex flex-col items-center sm:flex-row-reverse gap-10 border">
        <div className="w-full">
          <h1 className="text-xl md:text-[26px] lg:text-[28px] xl:text-[38px] leading-[32px] xl:leading-[48px] font-bold text-slate-700 lg:max-w-[250px] xl:max-w-[330px] 2xl:max-w-full border ">
            Ready for Developers
          </h1>
          <div className="lg:mt-6 sm:mt-[14px] md:mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quasi cupiditate libero atque doloribus fuga odio modi quidem
              quibusdam, vitae amet, distinctio debitis consequatur minus
              voluptatem cumque facilis! Quod, nisi?
            </p>
          </div>
          <Button className="w-full mt-[16px] sm:w-36 sm:h-12 ">
            Learn more
          </Button>
        </div>

        <div className="img w-full h-60 bg-cyan-500" data-aos="zoom-out"></div>
      </div>
    </div>
  );
};

export default DeveloperSection;
