import Marquees from "@/components/ui/marquees";

const BusinessSection = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-xl font-medium mb-3">Business using PayWay</h1>
      <div className="w-screen h-60 flex flex-col gap-5">
        <Marquees />
        <Marquees direction="right" />
        <Marquees />
      </div>
    </div>
  );
};

export default BusinessSection;
