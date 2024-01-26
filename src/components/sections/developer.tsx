"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import MultiPay from "../../../public/multiple-methods.webp";
import Dashboard from "../../../public/dashboard.webp";
import Devs from "../../../public/developer.webp";

import { Button } from "@/components/ui/button";

const DeveloperSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-16 grid gap-20 overflow-hidden">
      <div className=" flex flex-col items-center sm:flex-row-reverse gap-10">
        <div className="w-full">
          <h1 className="text-xl md:text-[26px] lg:text-[28px] xl:text-[38px] leading-[32px] xl:leading-[48px] font-bold text-slate-700 lg:max-w-[250px] xl:max-w-[330px] 2xl:max-w-full">
            Multiple Payment Methods
          </h1>
          <div className="lg:mt-6 sm:mt-[14px] md:mt-4">
            <p className="text-slate-500 text-base 2xl:text-[18px] 3xl:text-[20px] font-normal leading-[24px] 2xl:leading-[27px] 3xl:leading-[30px] mt-[16px] lg:max-w-[314px] xl:max-w-[372px] 2xl:max-w-[338px] 3xl:max-w-[380px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quasi cupiditate libero atque doloribus fuga odio modi quidem
              quibusdam, vitae amet, distinctio debitis consequatur minus
              voluptatem cumque facilis! Quod, nisi?
            </p>
          </div>
        </div>
        <div className="w-full" data-aos="zoom-out">
          <Image src={MultiPay} alt="multiple-payment-methods" />
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-row gap-10">
        <div className="w-full">
          <h1 className="text-xl md:text-[26px] lg:text-[28px] xl:text-[38px] leading-[32px] xl:leading-[48px] font-bold text-slate-700 lg:max-w-[250px] xl:max-w-[330px] 2xl:max-w-full">
            Real-time Merchant Portal
          </h1>
          <div className="lg:mt-6 sm:mt-[14px] md:mt-4">
            <p className="text-slate-500 text-base 2xl:text-[18px] 3xl:text-[20px] font-normal leading-[24px] 2xl:leading-[27px] 3xl:leading-[30px] mt-[16px] lg:max-w-[314px] xl:max-w-[372px] 2xl:max-w-[338px] 3xl:max-w-[380px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quasi cupiditate libero atque doloribus fuga odio modi quidem
              quibusdam, vitae amet, distinctio debitis consequatur minus
              voluptatem cumque facilis! Quod, nisi?
            </p>
          </div>
        </div>
        <div className="w-full" data-aos="zoom-out">
          <Image src={Dashboard} alt="multiple-payment-methods" />
        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row-reverse gap-10 ">
        <div className="w-full">
          <h1 className="text-xl md:text-[26px] lg:text-[28px] xl:text-[38px] leading-[32px] xl:leading-[48px] font-bold text-slate-700 lg:max-w-[250px] xl:max-w-[330px] 2xl:max-w-full">
            Ready for Developers
          </h1>
          <div className="lg:mt-6 sm:mt-[14px] md:mt-4">
            <p className="text-slate-500 text-base 2xl:text-[18px] 3xl:text-[20px] font-normal leading-[24px] 2xl:leading-[27px] 3xl:leading-[30px] mt-[16px] lg:max-w-[314px] xl:max-w-[372px] 2xl:max-w-[338px] 3xl:max-w-[380px]">
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

        <div className="w-full" data-aos="zoom-out">
          <Image src={Devs} alt="multiple-payment-methods" />
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;
