import React from "react";
import { OverlayProps } from "../../../types/interface";

const Overlay = ({
  setToggle,
  setProductToggle,
  setTranslateToggle,
}: OverlayProps) => {
  const handleClick = () => {
    setToggle(false);
    setProductToggle(false);
    setTranslateToggle(false);
  };
  return (
    <div
      className="fixed inset-0 bg-black opacity-40 z-30"
      onClick={handleClick}
    ></div>
  );
};

export default Overlay;
