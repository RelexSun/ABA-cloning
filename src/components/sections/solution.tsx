import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  return (
    <div className="bg-slate-500 w-full flex flex-col items-center">
      <div className="bg-red-500 w-full h-[855px] border"></div>
      <div className="w-full">
        <h1 className="text-[30px]">Payment Solution</h1>
        <div>
          <span>for</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Button>Explore Now</Button>
      </div>
    </div>
  );
};

export default SolutionSection;
