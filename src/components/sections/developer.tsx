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
      <div className=" flex flex-col items-center sm:flex-row-reverse gap-10">
        <div className="w-full">
          <h1 className="text-xl font-bold ">Multiple Payment Methods</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quasi cupiditate libero atque doloribus fuga odio modi quidem
            quibusdam, vitae amet, distinctio debitis consequatur minus
            voluptatem cumque facilis! Quod, nisi?
          </p>
        </div>
        <div className="img w-full h-60 bg-cyan-500" data-aos="zoom-out"></div>
      </div>
      <div className="flex flex-col items-center sm:flex-row gap-10">
        <div className="w-full">
          <h1 className="text-xl font-bold ">Real-time Merchant Portal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quasi cupiditate libero atque doloribus fuga odio modi quidem
            quibusdam, vitae amet, distinctio debitis consequatur minus
            voluptatem cumque facilis! Quod, nisi?
          </p>
        </div>
        <div className="img w-full h-60 bg-cyan-500" data-aos="zoom-out"></div>
      </div>

      <div className="flex flex-col items-center sm:flex-row-reverse gap-10">
        <div className="w-full">
          <h1 className="text-xl font-bold">Ready for Developers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quasi cupiditate libero atque doloribus fuga odio modi quidem
            quibusdam, vitae amet, distinctio debitis consequatur minus
            voluptatem cumque facilis! Quod, nisi?
          </p>
          <Button className="w-full mt-[16px] sm:w-36 sm:h-12">
            Learn more
          </Button>
        </div>

        <div className="img w-full h-60 bg-cyan-500" data-aos="zoom-out"></div>
      </div>
    </div>
  );
};

export default DeveloperSection;
