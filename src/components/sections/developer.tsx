"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const DeveloperSection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      controls1.start("visible");
    }
  }, [isInView1]);

  useEffect(() => {
    if (isInView2) {
      controls2.start("visible");
    }
  }, [isInView2]);

  useEffect(() => {
    if (isInView3) {
      controls3.start("visible");
    }
  }, [isInView3]);

  return (
    <div className="mt-16 grid gap-20 ">
      <div className=" flex flex-col sm:flex-row-reverse gap-10">
        <div className="w-full">
          <h1 className="text-xl font-bold ">Multiple Payment Methods</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quasi cupiditate libero atque doloribus fuga odio modi quidem
            quibusdam, vitae amet, distinctio debitis consequatur minus
            voluptatem cumque facilis! Quod, nisi?
          </p>
        </div>
        <motion.div
          ref={ref1}
          variants={animation}
          initial="hidden"
          animate={controls1}
          transition={{ duration: 1, delay: 0.25 }}
          className="img w-full h-60 bg-cyan-500"
        ></motion.div>
      </div>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="w-full">
          <h1 className="text-xl font-bold ">Real-time Merchant Portal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quasi cupiditate libero atque doloribus fuga odio modi quidem
            quibusdam, vitae amet, distinctio debitis consequatur minus
            voluptatem cumque facilis! Quod, nisi?
          </p>
        </div>
        <motion.div
          ref={ref2}
          variants={animation}
          initial="hidden"
          animate={controls2}
          transition={{ duration: 1, delay: 0.25 }}
          className="img w-full h-60 bg-cyan-500"
        ></motion.div>
      </div>
      <div className="flex flex-col sm:flex-row-reverse gap-10">
        <div className="w-full">
          <h1 className="text-xl font-bold">Ready for Developers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quasi cupiditate libero atque doloribus fuga odio modi quidem
            quibusdam, vitae amet, distinctio debitis consequatur minus
            voluptatem cumque facilis! Quod, nisi?
          </p>
          <Button className="w-full mt-[16px] sm:w-36 sm:h-12">
            Learn more
          </Button>
        </div>

        <motion.div
          ref={ref3}
          variants={animation}
          initial="hidden"
          animate={controls3}
          transition={{ duration: 1, delay: 0.25 }}
          className="img w-full h-60 bg-cyan-500"
        ></motion.div>
      </div>
    </div>
  );
};

export default DeveloperSection;
