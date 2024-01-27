import Marquees from "@/components/ui/marquees";
import Image from "next/image";
import BG from "../../../public/2xl-bg-biz-trusting.svg";

const BusinessSection = () => {
  return (
    <div className="flex flex-col items-center mb-10 max-sm:mt-10 sm:pt-20 lg:pt-[120px] relative z-10">
      <h1 className="sm:mb-[16px] text-[22px] sm:text-[26px] md:text-[28px] lg:text-[38px] text-center font-bold -mt-[18px] 2xl:-mt-[2px] 3xl:mt-[26px] text-slate-600 leading-[48px]">
        Business using PayWay
      </h1>
      <div
        className="w-screen flex flex-col gap-3 xl:gap-5 2xl:gap-6 
      md:mt-3 xl:mt-10"
      >
        <Marquees />
        <Marquees direction="right" />
        <Marquees />
      </div>
      <div className="w-screen absolute top-16 z-[-1] max-[740px]:hidden">
        <Image src={BG} alt="2xl-bg-biz-trusting" />
      </div>
    </div>
  );
};

export default BusinessSection;
