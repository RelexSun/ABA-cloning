import { Button } from "@/components/ui/button";
import { RefProps } from "../../../types/interface";

const SolutionSection = ({ secRef }: RefProps) => {
  return (
    <div className="bg-slate-500 w-full flex flex-col items-center sm:flex-row-reverse">
      <div className="bg-red-500 w-full h-[350px]"></div>
      <div className="w-full">
        <h1 className="text-[30px] font-bold">Payment Solution</h1>
        <div>
          <span>for</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>
          Boost your sales by providing seamless payment experience to your
          clients.
        </p>
        <Button
          onClick={() => secRef.current?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore Now
        </Button>
      </div>
    </div>
  );
};

export default SolutionSection;
