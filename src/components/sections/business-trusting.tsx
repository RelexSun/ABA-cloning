import Marquees from "@/components/ui/marquees";

const BusinessSection = () => {
  return (
    <div className="flex flex-col items-center my-10 lg:pt-[120px]">
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
    </div>
  );
};

export default BusinessSection;
