import { Button } from "@/components/ui/button";
import { RefProps } from "../../../types/interface";

const SolutionSection = ({ secRef }: RefProps) => {
  return (
    <div className="w-full flex flex-col items-center sm:flex-row-reverse">
      <div className="w-full h-[350px]"></div>
      <div className="w-full">
        <h1 className="text-[28px] md:text-[30px] lg:text-[32px] xl:text-[48px] font-bold text-slate-700 leading-[48px] xl:leading-[56px] md:leading-[46px] 2xl:leading-[76px]">
          Payment Solution
        </h1>
        <span className="text-[28px] md:text-[30px] lg:text-[32px] xl:text-[48px] font-bold text-slate-700 leading-[48px] xl:leading-[56px] md:leading-[46px] 2xl:leading-[76px]">
          for
        </span>
        <div>
          <p className="text-slate-700 md:text-base lg:text-[16px] xl:text-[20px] font-normal xl:leading-[25px] my-[16px] lg:max-w-[287px] xl:max-w-[366px] 2xl:max-w-[440px] lg:leading-[32px] 2xl:leading-[40px] 3xl:text-[22px]">
            Boost your sales by providing seamless payment experience to your
            clients.
          </p>
        </div>
        <Button
          onClick={() => secRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="max-sm:hidden "
        >
          Explore Now
        </Button>
      </div>
    </div>
  );
};

export default SolutionSection;
