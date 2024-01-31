import { IoMdClose } from "react-icons/io";
import {
  MdOutlineAccountCircle,
  MdOutlineEditNote,
  MdCreditScore,
} from "react-icons/md";
import { Button } from "@/components/ui/button";
import { ModalProps } from "../../../types/interface";
import { MenuProps } from "../../../types/interface";
import Image from "next/image";
import icon1 from "../../../public/e-com.svg";
import icon2 from "../../../public/file.svg";
import icon3 from "../../../public/experience.svg";
import icon4 from "../../../public/qr.svg";
import icon5 from "../../../public/invoicing-tool.svg";
import icon6 from "../../../public/virtual-terminal.svg";
import icon7 from "../../../public/aba-merchant-app.svg";
import icon9 from "../../../public/earth.svg";

const BurgerMenu = ({ setToggle }: MenuProps) => {
  const menuItems: ModalProps[] = [
    {
      label: "Invoicing Tool",
      icon: icon5,
    },
    {
      label: "Virtual Terminal",
      icon: icon9,
    },
    {
      label: "ABA Merchant App",
      icon: icon7,
    },
    {
      label: "Payment Link",
      icon: icon3,
    },
    {
      label: "POS Terminal",
      icon: icon7,
    },
    { label: "Payment QR API", icon: icon4 },
    {
      label: "Credentials On File",
      icon: icon2,
    },
    {
      label: "Ecommerce",
      icon: icon1,
    },
    {
      label: "Printed ABA KHQR",
      icon: icon6,
    },
  ];

  return (
    <div className="bg-white border rounded-md p-5 max-sm:w-screen">
      <div className="flex items-center justify-between mb-5">
        <h4 className="uppercase text-slate-400">products</h4>
        <button onClick={() => setToggle(false)}>
          <IoMdClose size={25} className="text-slate-400" />
        </button>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-5 mb-5">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center gap-1 text-[13px]">
            <Image src={item.icon} alt="icon" width={15} />
            <span className="hover:text-cyan-500">{item.label}</span>
          </div>
        ))}
      </div>

      <hr className="mb-5 border-dashed" />

      <div className="grid grid-cols-2 gap-5 mb-5">
        <div className="flex items-center gap-1 text-[13px]">
          <MdCreditScore className="text-slate-400" size={20} />
          <span className="hover:text-cyan-500">Developers</span>
        </div>
        <div className="flex items-center gap-1 text-[13px]">
          <MdOutlineEditNote className="text-slate-400" size={20} />
          <span className="hover:text-cyan-500">Apply Now</span>
        </div>
        <div className="flex items-center gap-1 text-[13px]">
          <MdOutlineAccountCircle className="text-slate-400" size={20} />
          <span className="hover:text-cyan-500">About Us</span>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Button variant="outline" className="text-cyan-500" size="lg">
          Login
        </Button>
      </div>
    </div>
  );
};

export default BurgerMenu;
