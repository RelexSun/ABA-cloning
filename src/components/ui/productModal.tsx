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

const ProductModal = ({ setProductToggle }: MenuProp2) => {
  const [active, setActive] = useState<number>(0);

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const contents = [
    { content: <OnlineSales /> },
    { content: <InStore /> },
    { content: <SocialCommerce /> },
    { content: <PayOn /> },
  ];

  return (
    <div className="bg-white text-sm w-[700px] flex items-center rounded-md z-[101]">
      <div className="w-[35%] p-2">
        <ul>
          <div
            className={`flex items-center mb-2 justify-between rounded-lg ${
              active === 0 && "bg-slate-100 text-cyan-500 font-bold"
            } py-2 px-3`}
            onMouseEnter={() => setActive(0)}
          >
            <li>Online Sales</li>
            <div className="rounded-full bg-white p-1 ">
              <IoIosArrowForward className="" />
            </div>
          </div>
          <div
            className={`flex items-center mb-2 justify-between rounded-lg ${
              active === 1 && "bg-slate-100 text-cyan-500 font-bold"
            } py-2 px-3`}
            onMouseEnter={() => setActive(1)}
          >
            <li>In-store Sales</li>
            <div className="rounded-full bg-white p-1 ">
              <IoIosArrowForward className="" />
            </div>
          </div>
          <div
            className={`flex items-center mb-2 justify-between rounded-lg ${
              active === 2 && "bg-slate-100 text-cyan-500 font-bold"
            } py-2 px-3`}
            onMouseEnter={() => setActive(2)}
          >
            <li>Social Commerce</li>
            <div className="rounded-full bg-white p-1 ">
              <IoIosArrowForward className="" />
            </div>
          </div>
          <div
            className={`flex items-center mb-2 justify-between rounded-lg ${
              active === 3 && "bg-slate-100 text-cyan-500 font-bold"
            } py-2 px-3`}
            onMouseEnter={() => setActive(3)}
          >
            <li>Pay-On-Delivery</li>
            <div className="rounded-full bg-white p-1 ">
              <IoIosArrowForward className="" />
            </div>
          </div>
        </ul>
      </div>
      <div className="bg-[#F7F9FE] px-[18px] pt-[30px] pb-0 min-h-[222px] rounded-md  w-[65%] ">
        <AnimatePresence>
          <motion.div
            key={active}
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
