"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TabProps } from "../../types/interface";

const Tabs: React.FC<{ tabs: TabProps[] }> = ({ tabs }) => {
  const [active, setActive] = useState<number>(0);

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const handleTabClick = (index: number) => {
    setActive(index);
  };

  return (
    <>
      <div className="relative">
        <div className="flex justify-start scroll-menu overflow-x-scroll mt-6 text-nowrap lg:justify-center">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={
                active === index
                  ? "border-b-4 border-cyan-500 text-cyan-500"
                  : ""
              }
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="pb-3 px-8"
                onClick={() => handleTabClick(index)}
              >
                <p className="text-sm sm:text-base md:text-lg">{tab.label}</p>
              </button>
            </motion.div>
          ))}
          <div className="w-10 h-10 absolute right-0 gradient-background"></div>
        </div>
      </div>
      <motion.div
        className="mt-8 border"
        variants={animation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {tabs[active].content}
      </motion.div>
    </>
  );
};

export default Tabs;
