import Testimonial from "@/components/testimonial";

const KeySection = () => {
  return (
    <div className="w-full flex flex-col gap-16 mt-16 lg:mt-[120px]">
      <h1 className="text-xl text-center mb-3 sm:mb-[16px] text-[22px] sm:text-[26px] md:text-[28px] lg:text-[38px] sm:text-center font-bold -mt-[18px] 2xl:-mt-[2px] 3xl:mt-[26px] text-slate-600 sm:leading-[28px] md:leading-[48px] ">
        Key Advantages
      </h1>
      <Testimonial />
    </div>
  );
};

export default KeySection;
