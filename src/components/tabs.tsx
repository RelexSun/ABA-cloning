"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabProps } from "../../types/interface";

const Tabs: React.FC<{ tabs: TabProps[] }> = ({ tabs }) => {
  const [active, setActive] = useState<number>(0);

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  const animationBorder = {
    initial: { scaleX: 0, x: 100 },
    animate: { scaleX: 1, x: 0 },
    exit: { scaleX: 0, x: -100 },
  };

  const handleTabClick = (index: number) => {
    setActive(index);
  };

  return (
    <>
      <div className="relative">
        <div className="flex justify-start scroll-menu overflow-x-scroll mt-6 text-nowrap lg:justify-center">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={active === index ? "text-cyan-500" : ""}
            >
              <button
                className="pb-3 px-8 uppercase"
                onClick={() => handleTabClick(index)}
              >
                <p
                  className={`text-sm md:text-base xl:text-lg font-light ${
                    active === index ? "font-medium" : ""
                  }`}
                >
                  {tab.label}
                </p>
              </button>
              <AnimatePresence mode="wait">
                {active === index && (
                  <motion.div
                    key={index}
                    className=" w-full h-1 bg-cyan-500"
                    variants={animationBorder}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="w-10 h-10 absolute right-0 gradient-background"></div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="mt-8"
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {tabs[active].content}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Tabs;
