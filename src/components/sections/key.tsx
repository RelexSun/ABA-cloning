import Testimonial from "@/components/testimonial";
import Image from "next/image";
import xxl from "../../../public/2xl-bg-key-advantage.svg";
import xxxl from "../../../public/3xl-bg-key-advantage.svg";
import md from "../../../public/md-bg-key-advantage.svg";
import sm from "../../../public/key-advantages-bg.svg";

const KeySection = () => {
  return (
    <div className="relative">
      <div className="w-full flex flex-col gap-16 mt-10 pt-16 lg:pt-40">
        <h1 className="text-xl text-center mb-3 sm:mb-[16px] text-[22px] sm:text-[26px] md:text-[28px] lg:text-[38px] sm:text-center font-bold -mt-[18px] 2xl:-mt-[2px] 3xl:mt-[26px] text-slate-600 sm:leading-[28px] md:leading-[48px] ">
          Key Advantages
        </h1>
        <Testimonial />
      </div>
      <div className="z-[-10] absolute top-0">
        <Image src={xxl} alt="bg" className="max-[500px]:hidden" />
      </div>
    </div>
  );
};

export default KeySection;
