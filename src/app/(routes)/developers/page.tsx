import Image from "next/image";
import img from "../../../../public/pw-dev-suite.webp";
import { Input } from "@/components/ui/input";
import ApiSection from "@/components/sections/apiSection";
import HowToStart from "@/components/sections/howToStart";

const Developers = () => {
  return (
    <>
      <div className="w-full mt-20 flex flex-col-reverse sm:items-center sm:justify-center sm:flex-row 2xl:max-w-[1300px] m-auto xl:gap-10 sm:gap-5">
        <div className=" xl:w-[63%] 2xl:w-[62%]">
          <h1 className="text-[28px] mt-6 md:mt-0 md:text-[30px] lg:text-[42px] xl:text-[48px] font-bold text-slate-700 leading-[48px] xl:leading-[56px] md:leading-[46px] 2xl:leading-[76px]">
            PayWay Developer Suite
          </h1>
          <div className=" max-lg:w-[450px] md:w-[350px] max-md:w-[280px] max-sm:w-full lg:w-[500px] mt-5 ">
            <p className="text-slate-700 md:text-base max-sm:w-[300px] lg:text-[20px] font-normal xl:leading-[25px] my-[16px] xl:max-w-[366px] 2xl:max-w-[440px] lg:leading-[32px] 2xl:leading-[40px] 3xl:text-[22px] z-10">
              Here you will find detailed documentation and references to help
              you integrate PayWay APIs on your software solution to take online
              payments securely on any platform.
            </p>
            <div className="mt-5">
              <Input placeholder="Search API, Payment and more" />
            </div>
          </div>
        </div>
        <div className=" sm:w-[300px] lg:w-[500px]">
          <Image src={img} alt="image" width={500} />
        </div>
      </div>
      <div className="mt-16 m-auto max-lg:mt-10 2xl:max-w-[1300px]">
        <ApiSection />
      </div>

      <HowToStart />
    </>
  );
};

export default Developers;
