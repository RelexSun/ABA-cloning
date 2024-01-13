import Image from "next/image";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <div className="bg-[#011730] sm:pb-16 md:pb-[43px] lg:pb-[47px] xl:pb-[45px] relative px-6 py-2 pt-5 pb-5 mt-5">
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
      <div className="grid grid-cols-2 mt-10">
        <ul className="">
          <span className="text-white font-medium">Products</span>
          <li className="text-slate-400 pt-2">Lorem</li>
          <li className="text-slate-400">Lorem</li>
          <li className="text-slate-400">Lorem</li>
          <li className="text-slate-400">Lorem</li>
          <li className="text-slate-400">Lorem</li>
          <li className="text-slate-400">Lorem</li>
          <li className="text-slate-400">Lorem</li>
          <li className="text-slate-400">Lorem</li>
          <li className="text-slate-400">Lorem</li>
        </ul>
        <div className="flex flex-col gap-2">
          <ul>
            <span className="text-white font-medium">Developers</span>
            <li className="text-slate-400 pt-2">Lorem</li>
            <li className="text-slate-400">Lorem</li>
            <li className="text-slate-400">Lorem</li>
            <li className="text-slate-400 pb-5">Lorem</li>
          </ul>
          <ul>
            <span className="text-white font-medium">Social Media</span>
            <li className="text-slate-400 pt-2">Facebook</li>
            <li className="text-slate-400">YouTube</li>
            <li className="text-slate-400">Linkedin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
