import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { MenuProps } from "../../../types/interface";

const BurgerMenu = ({ onToggle, setToggle }: MenuProps) => {
  const menuItems = [
    {
      label: "Invoicing Tool",
      icon: "",
    },
    {
      label: "Virtual Terminal",
      icon: "",
    },
    {
      label: "ABA Merchant App",
      icon: "",
    },
    {
      label: "Payment Link",
      icon: "",
    },
    {
      label: "POS Terminal",
      icon: "",
    },
    {
      label: "Credentials On File",
      icon: "",
    },
    {
      label: "Ecommerce",
      icon: "",
    },
    {
      label: "Printed ABA KHQR",
      icon: "",
    },
  ];

  return (
    <div className="w-[25%]">
      <div className="flex">
        <h4 className="uppercase">products</h4>
        <button onClick={() => setToggle(false)}>
          <IoMdClose />
        </button>
      </div>
      <div className="grid grid-cols-2"></div>

      <hr />

      <div className="grid grid-cols-2">
        <div className="flex">
          <p>Icon</p>
          <p>Invoicing Tool</p>
        </div>
        <div className="flex">
          <p>Icon</p>
          <p>Invoicing Tool</p>
        </div>
        <div className="flex">
          <p>Icon</p>
          <p>Invoicing Tool</p>
        </div>
      </div>
      <Button variant="outline" className="text-cyan-500" size="lg">
        Login
      </Button>
    </div>
  );
};

export default BurgerMenu;
