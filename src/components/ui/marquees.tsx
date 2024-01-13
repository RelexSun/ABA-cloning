import Marquee from "react-fast-marquee";

interface MarqueeProps {
  direction?: "left" | "right" | "up" | "down";
}

const Marquees = ({ direction }: MarqueeProps) => {
  return (
    <>
      <Marquee direction={direction} speed={25}>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
        <div className="bg-cyan-400 w-16 h-16 rounded-full mx-1"></div>
      </Marquee>
    </>
  );
};

export default Marquees;
