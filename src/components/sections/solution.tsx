import { Button } from "@/components/ui/button";
import { RefProps } from "../../../types/interface";
import Image from "next/image";
import BG from "../../../public/bg-payment-solution.svg";

const SolutionSection = ({ secRef }: RefProps) => {
  return (
    <div className="w-full lg:[485px] xl:h-[555px] flex flex-col items-center sm:flex-row-reverse">
      <div className="w-full h-[350px] border z-10"></div>
      <div className="w-full">
        <h1 className="text-[28px] mt-6 md:mt-0 md:text-[30px] lg:text-[32px] xl:text-[48px] font-bold text-slate-700 leading-[48px] xl:leading-[56px] md:leading-[46px] 2xl:leading-[76px]">
          Payment Solution
        </h1>
        <span className="text-[28px] md:text-[30px] lg:text-[32px] xl:text-[48px] font-bold text-slate-700 leading-[48px] xl:leading-[56px] md:leading-[46px] 2xl:leading-[76px] z-10">
          for
        </span>
        <div>
          <p className="text-slate-700 md:text-base lg:text-[16px] xl:text-[20px] font-normal xl:leading-[25px] my-[16px] lg:max-w-[287px] xl:max-w-[366px] 2xl:max-w-[440px] lg:leading-[32px] 2xl:leading-[40px] 3xl:text-[22px] z-10">
            Boost your sales by providing seamless payment experience to your
            clients.
          </p>
        </div>
        <Button
          onClick={() => secRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="max-sm:hidden z-10"
        >
          Explore Now
        </Button>
      </div>
      <div className="absolute top-0 right-0 max-[570px]:hidden sm:h-[428px] md:h-[528px] lg:h-[600px] xl:h-[700px] 2xl:h-[828px] border">
        <Image
          src={BG}
          alt="bg-payment-solution"
          className=" object-cover w-full h-full z-[-1]"
        />
      </div>
    </div>
  );
};

export default SolutionSection;
