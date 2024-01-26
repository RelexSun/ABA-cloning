import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../public/payway-logo.svg";

export const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center my-0 mx-auto h-14 sm:h-16 lg:h-24 fixed top-0 backdrop-blur-md z-20">
      <div className=" w-full flex items-center justify-between mx-4 overflow-hidden sm:max-w-[600px] md:max-w-[800px] xl:max-w-[1200px] 2xl:max-w-[1500px]">
        <div className="sm:h-[14px] md:h-[16px] lg:h-[18px] xl:h-[24px] 2xl:h-[22px] 2xl:w-[220px]">
          <Image
            src={logo}
            alt="logo-img"
            className="w-full h-full object-cover"
            width={220}
            height={22}
          />
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex gap-7 max-lg:hidden xl:text-xl">
            <a href="#" className="hover:text-cyan-500">
              <li>Products</li>
            </a>
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
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-cyan-500 sm:hidden"
            >
              Apply Now
            </Button>
            <Button variant="outline" size="sm"></Button>
            <Button
              variant="outline"
              size="sm"
              className="text-cyan-500 lg:hidden"
            ></Button>
            <Button
              variant="outline"
              size="sm"
              className="text-cyan-500 max-lg:hidden"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
