"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
import {
  OnlineSales,
  InStore,
  SocialCommerce,
  PayOn,
} from "./productTestimonial";
import { MenuProp2 } from "../../../types/interface";

interface TabContent {
  content: JSX.Element;
  key: string;
}

const ProductModal = ({ setProductToggle }: MenuProp2) => {
  const [active, setActive] = useState<number>(0);

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const contents: TabContent[] = [
    { content: <OnlineSales />, key: "online-sales" },
    { content: <InStore />, key: "in-store-sales" },
    { content: <SocialCommerce />, key: "social-commerce" },
    { content: <PayOn />, key: "pay-on-delivery" },
  ];

  if (!contents.length) {
    return <div>No content available</div>;
  }

  return (
    <div className="bg-white text-sm w-[700px] flex items-center rounded-md z-[101]">
      <div className="w-[35%] p-2">
        <ul>
          {contents.map((item, index) => (
            <div
              key={item.key}
              role="button"
              aria-selected={active === index}
              className={`flex items-center mb-2 justify-between rounded-lg ${
                active === index && "bg-slate-100 text-cyan-500 font-bold"
              } py-2 px-3`}
              onMouseEnter={() => setActive(index)}
            >
              <li>{item.key.replace("-", " ")}</li>
              <div className="rounded-full bg-white p-1 ">
                <IoIosArrowForward className="" />
              </div>
            </div>
          ))}
        </ul>
      </div>
      <div className="bg-[#F7F9FE] px-[18px] pt-[30px] pb-0 min-h-[222px] rounded-md  w-[65%] ">
        <AnimatePresence>
          <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            {contents[active].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductModal;
