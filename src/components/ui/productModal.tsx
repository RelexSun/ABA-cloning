import { IoMdClose } from "react-icons/io";
import {
  MdOutlineAccountCircle,
  MdOutlineEditNote,
  MdCreditScore,
} from "react-icons/md";
import { Button } from "@/components/ui/button";
import { ModalProps } from "../../../types/interface";
import { MenuProp2 } from "../../../types/interface";
import Image from "next/image";
import icon1 from "../../../public/e-com.svg";
import icon2 from "../../../public/file.svg";
import icon3 from "../../../public/experience.svg";
import icon4 from "../../../public/qr.svg";
import icon5 from "../../../public/invoicing-tool.svg";
import icon6 from "../../../public/virtual-terminal.svg";
import icon7 from "../../../public/aba-merchant-app.svg";
import icon9 from "../../../public/earth.svg";
import data1 from "../../../data/onlinesales.json";
import data2 from "../../../data/instoresales.json";
import data3 from "../../../data/socialcommerce.json";
import data4 from "../../../data/payondelivery.json";

const ProductModal = ({ setProductToggle }: MenuProp2) => {
  const icons = [];

  return (
    <div className="bg-white border rounded-md p-5 max-sm:w-screen z-[101]">
      <div>NAV</div>
    </div>
  );
};

export default ProductModal;
