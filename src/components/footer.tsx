import Image from "next/image";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <div className="bg-[#011730] sm:pb-16 md:pb-[43px] lg:pb-[47px] xl:pb-[45px] relative px-6 py-2 pt-5 pb-5">
      <div className="flex flex-col">
        <div className="w-32 h-10 border">
          {/* <Image
            src="https://www.payway.com.kh/image/pw-logo-footer.svg"
            // width={100}
            // height={100}
            fill
            alt="footer-ABA-Logo"
          /> */}
        </div>
        <div className="grid grid-cols-2 mt-10">
          <div>
            <Button className="bg-slate-800"></Button>
            <Button className="bg-slate-800"></Button>
          </div>
          <div>
            <Button className="bg-slate-800"></Button>
          </div>
        </div>
      </div>
      <hr className="bg-white opacity-10 mt-[30px]" />
      <div className="flex mt-10">
        <ul className="w-60">
          <span className="text-white">Products</span>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
        <div className="flex flex-col gap-2">
          <ul>
            <span className="text-white">Developers</span>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
          <ul>
            <span className="text-white">Social Media</span>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
