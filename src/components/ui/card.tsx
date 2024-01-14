import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const CardComponent = ({ title, description }: CardProps) => {
  return (
    <div className="bg-white rounded-3xl p-[24px] drop-shadow-xl">
      <div className="">
        <div className="bg-cyan-400 w-12 h-12 rounded-full"></div>
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
