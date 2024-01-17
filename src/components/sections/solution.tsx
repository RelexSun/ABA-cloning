import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  return (
    <div className="bg-slate-500 w-full flex flex-col items-center sm:flex-row-reverse">
      <div className="bg-red-500 w-full h-[350px] border"></div>
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
        <Button>Explore Now</Button>
      </div>
    </div>
  );
};

export default SolutionSection;
