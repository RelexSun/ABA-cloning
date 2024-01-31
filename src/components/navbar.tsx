"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../public/payway-logo.svg";
import { CiGlobe } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { IoGlobeOutline } from "react-icons/io5";
import BurgerMenu from "./ui/burgerMenu";
import { useState } from "react";
import ProductModal from "./ui/productModal";
import Overlay from "./ui/overlay";

export const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [productToggle, setProductToggle] = useState<boolean>(false);
  const [translateToggle, setTranslateToggle] = useState<boolean>(false);

  return (
    <div className="relative">
      {(toggle || productToggle || translateToggle) && (
        <Overlay
          setToggle={setToggle}
          setProductToggle={setProductToggle}
          setTranslateToggle={setTranslateToggle}
        />
      )}
      <div
        className={
          toggle ? "absolute top-16 right-6 max-sm:right-0 z-40 " : "hidden"
        }
      >
        <BurgerMenu setToggle={setToggle} />
      </div>
      <div className={productToggle ? "absolute top-14 z-40 mt-4" : "hidden"}>
        <ProductModal setProductToggle={setProductToggle} />
      </div>

      <div className=" w-full flex items-center justify-center h-14 sm:h-16 lg:h-24 fixed top-0 backdrop-blur-md z-20">
        <div className=" w-full flex items-center justify-between mx-4 overflow-hidden sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px]">
          <button className="sm:h-[14px] md:h-[16px] lg:h-[18px] xl:h-[24px] 2xl:h-[22px] 2xl:w-[220px]">
            <Image
              src={logo}
              alt="logo-img"
              className="w-full h-full object-cover"
              width={220}
              height={22}
            />
          </button>
          <div className="flex items-center gap-10">
            <ul className="flex gap-7 max-lg:hidden xl:text-xl">
              <button
                onClick={() => setProductToggle(true)}
                className="hover:text-cyan-500"
              >
                <li>Products</li>
              </button>

              <a href="#" className="hover:text-cyan-500">
                <li>Developers</li>
              </a>
              <a href="#" className="hover:text-cyan-500">
                <li>About Us</li>
              </a>
              <a href="#" className="hover:text-cyan-500">
                <li>Apply Now</li>
              </a>
            </ul>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
              <Button
                variant="outline"
                size="sm"
                className="text-cyan-500 sm:hidden"
              >
                Apply Now
              </Button>

              <Button variant="outline" size="sm" className="lg:hidden">
                <CiGlobe className="text-cyan-500" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="text-cyan-500 lg:hidden"
                onClick={() => setToggle(true)}
              >
                <RiMenu3Fill className="text-cyan-500" />
              </Button>

              <Button
                variant="outline"
                style={{ borderWidth: "2px" }}
                className="max-lg:hidden px-2"
              >
                <IoGlobeOutline
                  className="text-cyan-500 "
                  style={{ fontSize: "1.5rem" }}
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-cyan-500 max-lg:hidden font-bold"
                style={{ borderWidth: "2px" }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
