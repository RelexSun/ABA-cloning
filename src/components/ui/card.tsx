import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const CardComponent = ({ title, description }: CardProps) => {
  return (
    <div className="bg-white rounded-3xl p-[24px] pb-16 drop-shadow-xl hover:bg-gradient-to-r from-cyan-700 to-cyan-500 hover:text-white">
      <div className="">
        <div className="bg-gray-100 w-12 h-12 rounded-full"></div>
        <div className=""></div>
      </div>
      <div>
        <h1 className="font-semibold mt-1">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
