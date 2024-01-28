import { FaArrowRight } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
}

const CardComponent = ({ title, description }: CardProps) => {
  return (
    <div className="bg-white rounded-3xl p-[24px] pb-16 drop-shadow-xl hover:bg-gradient-to-r from-cyan-700 to-cyan-500 hover:text-white parent">
      <div className="flex items-center justify-between">
        <div className="bg-gray-100 w-12 h-12 rounded-full"></div>
        <FaArrowRight className="text-cyan-700 icon" />
      </div>
      <div>
        <h1 className="font-semibold mt-1">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
