import { FaArrowRight } from "react-icons/fa";
import { CardProps } from "../../../types/interface";
import Image from "next/image";

const CardComponent = ({ title, description, icon }: CardProps) => {
  return (
    <div className="bg-white rounded-3xl p-[24px] pb-16 drop-shadow-xl hover:bg-gradient-to-r from-cyan-700 to-cyan-500 hover:text-white parent">
      <div className="flex items-center justify-between">
        <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
          <Image src={icon} alt="icon" />
        </div>
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
